/**
 * Dashboard de Progreso - Renderizado
 * Sistema de Planificación Transversal
 */

const DashboardRenderer = {

    /**
     * Renderizar Dashboard Resumen (Vista 6)
     */
    renderSummaryDashboard() {
        const container = document.getElementById('dashboard-summary');
        if (!container) return;

        const stats = ProgressTracker.getStats();
        const config = ProgressTracker.state.config;

        container.innerHTML = `
            <div class="dashboard-container">
                <div class="dashboard-header">
                    <div class="dashboard-title">
                        <span class="emoji">📊</span>
                        <h2>Dashboard Resumen</h2>
                    </div>
                    <div class="team-user-selector">
                        <div class="selector-group">
                            <label>👥 Equipo:</label>
                            <select id="teamSelector" onchange="DashboardRenderer.changeTeam(this.value)">
                                ${config.teams.map(t =>
            `<option value="${t}" ${t === config.currentTeam ? 'selected' : ''}>${t}</option>`
        ).join('')}
                            </select>
                        </div>
                        <div class="selector-group">
                            <label>👤 Alumno:</label>
                            <select id="userSelector" onchange="DashboardRenderer.changeUser(this.value)">
                                ${this.renderUserOptions()}
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Tarjetas de Progreso General -->
                <div class="progress-cards-grid">
                    <div class="progress-card highlight">
                        <div class="progress-card-header">
                            <span class="progress-card-title">📈 Progreso General</span>
                        </div>
                        <div class="progress-card-value">${stats.overall.percentage}%</div>
                        <div class="progress-card-subtitle">${stats.overall.completed} de ${stats.overall.total} tareas completadas</div>
                        <div class="progress-bar-container">
                            <div class="progress-bar">
                                <div class="progress-bar-fill" style="width: ${stats.overall.percentage}%"></div>
                            </div>
                        </div>
                    </div>

                    <div class="progress-card">
                        <div class="progress-card-header">
                            <span class="progress-card-title">門 Gates Superados</span>
                        </div>
                        <div class="progress-card-value">${stats.gates.passed}/${stats.gates.total}</div>
                        <div class="progress-card-subtitle">Puntos de control</div>
                    </div>

                    <div class="progress-card">
                        <div class="progress-card-header">
                            <span class="progress-card-title">📅 Semana Actual</span>
                        </div>
                        <div class="progress-card-value">${this.getCurrentWeek()}</div>
                        <div class="progress-card-subtitle">${this.getCurrentEval()}</div>
                    </div>
                </div>

                <!-- Paneles por Evaluación -->
                <div class="eval-panels">
                    ${this.renderEvalPanel('E1', 'Estantería Modular')}
                    ${this.renderEvalPanel('E2', 'Taburete Ergonómico')}
                    ${this.renderEvalPanel('E3', 'Mobiliario Industrial')}
                </div>

                <!-- Progreso por Módulos -->
                <h3 style="margin-bottom: 15px;">📚 Progreso por Módulo</h3>
                <div class="modules-progress-grid">
                    ${this.renderModuleCard('DRP', 'Desarrollo Producto')}
                    ${this.renderModuleCard('RRC', 'Representación')}
                    ${this.renderModuleCard('FAT', 'Fabricación')}
                    ${this.renderModuleCard('PMB', 'Prototipos')}
                    ${this.renderModuleCard('PUB', 'Procesos')}
                    ${this.renderModuleCard('DJK', 'Digitalización')}
                </div>
            </div>
        `;
    },

    renderUserOptions() {
        const users = window.ProgressTracker?.state?.config?.users || ['Alumno_01', 'Alumno_02', 'Alumno_03', 'Alumno_04'];
        const current = window.ProgressTracker?.state?.config?.currentUser;
        return users.map(u => `<option value="${u}" ${u === current ? 'selected' : ''}>${u.replace('_', ' ')}</option>`).join('');
    },

    getDashboardDefaults() {
        return {
            selectionGlobal: {
                mode: 'team',
                teamId: 'all',
                studentId: 'all'
            },
            moduleOverrides: {}
        };
    },

    getDashboardSettings() {
        const defaults = this.getDashboardDefaults();
        const settings = window.SettingsManager?.settings;
        if (settings) {
            if (!settings.dashboard) {
                settings.dashboard = { ...defaults };
            }
            settings.dashboard.selectionGlobal = {
                ...defaults.selectionGlobal,
                ...(settings.dashboard.selectionGlobal || {})
            };
            settings.dashboard.moduleOverrides = settings.dashboard.moduleOverrides || {};
            return settings.dashboard;
        }
        return defaults;
    },

    saveDashboardSettings(state) {
        const settings = window.SettingsManager?.settings;
        if (settings) {
            settings.dashboard = state;
            window.SettingsManager.saveSettings();
        }
    },

    getTeamsList() {
        const teams = window.ProgressTracker?.state?.config?.teams;
        if (Array.isArray(teams) && teams.length) return teams;
        const teamNames = window.SettingsManager?.settings?.teams?.teamNames || {};
        return Object.values(teamNames).filter(Boolean);
    },

    getStudentGroups() {
        const settings = window.SettingsManager?.settings;
        const teamNames = settings?.teams?.teamNames || {};
        const individualTeamId = settings?.teams?.individualTeamId;
        const students = Array.isArray(settings?.teams?.students) ? settings.teams.students : [];
        const groupsMap = {};

        students.forEach(student => {
            const teamId = student.individualized ? individualTeamId : student.teamId;
            if (!teamId) return;
            if (!groupsMap[teamId]) {
                const label = teamNames[teamId] || teamId;
                groupsMap[teamId] = { label, members: [] };
            }
            groupsMap[teamId].members.push(student.name);
        });

        return Object.values(groupsMap).filter(group => group.members.length);
    },

    normalizeSelection(selection) {
        return {
            mode: selection?.mode || 'team',
            teamId: selection?.teamId || 'all',
            studentId: selection?.studentId || 'all'
        };
    },

    getEffectiveSelection(moduleId, state) {
        const trackingMode = window.ProgressTracker?.state?.config?.trackingMode?.[moduleId] || 'team';
        const override = state.moduleOverrides?.[moduleId];
        let baseSelection = this.normalizeSelection(override || state.selectionGlobal || {});

        if (!override && trackingMode === 'individual' && baseSelection.mode !== 'individual') {
            baseSelection = { ...baseSelection, mode: 'individual' };
        }

        return {
            selection: baseSelection,
            override: override || null,
            trackingMode
        };
    },

    renderTeamOptions(selected) {
        const teams = this.getTeamsList();
        const options = ['<option value="all">Todos los equipos</option>'];
        teams.forEach(team => {
            options.push(`<option value="${team}" ${team === selected ? 'selected' : ''}>${team}</option>`);
        });
        return options.join('');
    },

    renderStudentOptions(selected) {
        const groups = this.getStudentGroups();
        const options = ['<option value="all">Todos los alumnos</option>'];
        groups.forEach(group => {
            const groupOptions = group.members.map(member =>
                `<option value="${member}" ${member === selected ? 'selected' : ''}>${member}</option>`
            ).join('');
            options.push(`<optgroup label="${group.label}">${groupOptions}</optgroup>`);
        });
        return options.join('');
    },

    renderGlobalSelectionControls(state) {
        const selection = this.normalizeSelection(state.selectionGlobal || {});
        const isTeam = selection.mode === 'team';
        const targetOptions = isTeam
            ? this.renderTeamOptions(selection.teamId)
            : this.renderStudentOptions(selection.studentId);

        return `
            <div class="dashboard-selection">
                <div class="dashboard-selection-group">
                    <label>Ámbito</label>
                    <select class="dashboard-selection-select" onchange="DashboardRenderer.changeGlobalSelectionMode(this.value)">
                        <option value="team" ${selection.mode === 'team' ? 'selected' : ''}>Equipo</option>
                        <option value="individual" ${selection.mode === 'individual' ? 'selected' : ''}>Individual</option>
                    </select>
                </div>
                <div class="dashboard-selection-group">
                    <label>${isTeam ? 'Equipo' : 'Alumno'}</label>
                    <select class="dashboard-selection-select" onchange="DashboardRenderer.changeGlobalSelectionTarget(this.value)">
                        ${targetOptions}
                    </select>
                </div>
            </div>
        `;
    },

    renderModuleOverrides(state) {
        const modules = ['DRP', 'RRC', 'FAT', 'PMB', 'PUB', 'DJK'];
        return modules.map(moduleId => {
            const effective = this.getEffectiveSelection(moduleId, state);
            const selection = effective.selection;
            const isTeam = selection.mode === 'team';
            const targetOptions = isTeam ? this.renderTeamOptions(selection.teamId) : this.renderStudentOptions(selection.studentId);
            const overrideActive = !!effective.override;

            return `
                <div class="module-override-row ${overrideActive ? 'override-active' : ''}">
                    <span class="module-override-code">${moduleId}</span>
                    <select class="dashboard-selection-select" onchange="DashboardRenderer.changeModuleSelectionMode('${moduleId}', this.value)">
                        <option value="team" ${selection.mode === 'team' ? 'selected' : ''}>Equipo</option>
                        <option value="individual" ${selection.mode === 'individual' ? 'selected' : ''}>Individual</option>
                    </select>
                    <select class="dashboard-selection-select" onchange="DashboardRenderer.changeModuleSelectionTarget('${moduleId}', this.value)">
                        ${targetOptions}
                    </select>
                </div>
            `;
        }).join('');
    },

    updateSelectionUI() {
        const state = this.getDashboardSettings();
        const controls = document.getElementById('dashboard-selection-controls');
        if (controls) controls.innerHTML = this.renderGlobalSelectionControls(state);
        const overrides = document.getElementById('dashboard-module-overrides');
        if (overrides) overrides.innerHTML = this.renderModuleOverrides(state);
    },

    changeGlobalSelectionMode(mode) {
        const state = this.getDashboardSettings();
        state.selectionGlobal = { ...state.selectionGlobal, mode, teamId: 'all', studentId: 'all' };
        this.saveDashboardSettings(state);
        this.renderRAVisualDashboard();
    },

    changeGlobalSelectionTarget(value) {
        const state = this.getDashboardSettings();
        if (state.selectionGlobal.mode === 'team') state.selectionGlobal.teamId = value;
        else state.selectionGlobal.studentId = value;
        this.saveDashboardSettings(state);
        this.renderRAVisualDashboard();
    },

    changeModuleSelectionMode(moduleId, mode) {
        const state = this.getDashboardSettings();
        state.moduleOverrides[moduleId] = { mode, teamId: 'all', studentId: 'all' };
        this.saveDashboardSettings(state);
        this.renderRAVisualDashboard();
    },

    changeModuleSelectionTarget(moduleId, value) {
        const state = this.getDashboardSettings();
        if (!state.moduleOverrides[moduleId]) state.moduleOverrides[moduleId] = { ...state.selectionGlobal };
        if (state.moduleOverrides[moduleId].mode === 'team') state.moduleOverrides[moduleId].teamId = value;
        else state.moduleOverrides[moduleId].studentId = value;
        this.saveDashboardSettings(state);
        this.renderRAVisualDashboard();
    },

    getFilteredStats() {
        const state = this.getDashboardSettings();
        const resolver = (m) => this.getEffectiveSelection(m, state).selection;
        return ProgressTracker.getStats(resolver);
    },

    renderDetailedDashboard() {
        const container = document.getElementById('dashboard-detailed');
        if (!container) return;
        const config = ProgressTracker.state.config;
        container.innerHTML = `
            <div class="dashboard-container">
                <h2>Dashboard Detallado</h2>
                <div class="tracking-config-grid">
                    ${Object.keys(config.trackingMode).map(m => this.renderTrackingConfig(m, config.trackingMode[m])).join('')}
                </div>
                ${this.renderWeeksList()}
            </div>
        `;
    },

    renderEvalPanel(evalNum, projectName) {
        const stats = ProgressTracker.getStats();
        const evalStats = stats.byEval[evalNum] || { total: 0, completed: 0 };
        const percentage = evalStats.total > 0 ? Math.round((evalStats.completed / evalStats.total) * 100) : 0;
        return `
            <div class="eval-panel">
                <h4>${evalNum}: ${projectName} (${percentage}%)</h4>
                <div class="progress-bar"><div class="progress-bar-fill" style="width:${percentage}%"></div></div>
            </div>
        `;
    },

    renderModuleCard(module, name) {
        const stats = ProgressTracker.getStats();
        const mStats = stats.byModule[module] || { total: 0, completed: 0 };
        const percentage = mStats.total > 0 ? Math.round((mStats.completed / mStats.total) * 100) : 0;
        return `
            <div class="module-card">
                <strong>${module}</strong>: ${percentage}% (${name})
            </div>
        `;
    },

    renderTrackingConfig(module, currentMode) {
        return `
            <div>
                ${module}: 
                <button onclick="DashboardRenderer.setTrackingMode('${module}', 'team')" ${currentMode === 'team' ? 'disabled' : ''}>👥</button>
                <button onclick="DashboardRenderer.setTrackingMode('${module}', 'individual')" ${currentMode === 'individual' ? 'disabled' : ''}>👤</button>
            </div>
        `;
    },

    renderWeeksList() {
        const weeks = window.MASTER_PLAN?.weeks || [];
        return weeks.map(w => `<div>${w.week_id}: ${w.week_goal}</div>`).join('');
    },

    getCurrentWeek() { return 'Semana Actual'; },
    getCurrentEval() { return 'Evaluación Actual'; },

    changeTeam(team) { ProgressTracker.setCurrentTeam(team); this.refreshAll(); },
    changeUser(user) { ProgressTracker.setCurrentUser(user); this.refreshAll(); },
    setTrackingMode(m, mode) { ProgressTracker.setTrackingMode(m, mode); this.refreshAll(); },

    renderRAVisualDashboard() {
        const container = document.getElementById('ra-visual-dashboard');
        if (!container) return;
        if (!container.querySelector('canvas')) {
            container.innerHTML = `
                <div id="dashboard-selection-controls"></div>
                <div class="dashboard-grid">
                    <canvas id="progressChart"></canvas>
                    <div id="global-percent-text">0%</div>
                    <canvas id="modulesChart"></canvas>
                    <canvas id="competenciesChart"></canvas>
                    <canvas id="evaluationsChart"></canvas>
                </div>
            `;
        }
        this.updateSelectionUI();
        this.updateCharts(this.getFilteredStats());
    },

    charts: {},

    updateCharts(stats) {
        if (typeof window.Chart === 'undefined') {
            setTimeout(() => this.updateCharts(stats), 200);
            return;
        }
        this.renderProgressChart(stats);
        this.renderModulesChart(stats);
        this.renderCompetenciesChart(stats);
        this.renderEvaluationsChart(stats);
    },

    renderProgressChart(stats) {
        const ctx = document.getElementById('progressChart')?.getContext('2d');
        if (!ctx || typeof window.Chart === 'undefined') return;
        const percent = stats.overall.percentage;
        document.getElementById('global-percent-text').textContent = `${percent}%`;
        if (this.charts.progress) {
            this.charts.progress.data.datasets[0].data = [percent, 100 - percent];
            this.charts.progress.update();
        } else {
            this.charts.progress = new window.Chart(ctx, {
                type: 'doughnut',
                data: { datasets: [{ data: [percent, 100 - percent], backgroundColor: ['#27ae60', '#eee'] }] },
                options: { cutout: '80%', plugins: { legend: { display: false } } }
            });
        }
    },

    renderModulesChart(stats) {
        const ctx = document.getElementById('modulesChart')?.getContext('2d');
        if (!ctx || typeof window.Chart === 'undefined') return;
        const modules = ['DRP', 'RRC', 'FAT', 'PMB', 'PUB', 'DJK'];
        const data = modules.map(m => stats.byModule[m]?.total > 0 ? Math.round((stats.byModule[m].completed / stats.byModule[m].total) * 100) : 0);
        if (this.charts.modules) {
            this.charts.modules.data.datasets[0].data = data;
            this.charts.modules.update();
        } else {
            this.charts.modules = new window.Chart(ctx, {
                type: 'bar',
                data: { labels: modules, datasets: [{ data: data, backgroundColor: '#3498db' }] },
                options: { indexAxis: 'y', plugins: { legend: { display: false } } }
            });
        }
    },

    renderCompetenciesChart(stats) {
        const ctx = document.getElementById('competenciesChart')?.getContext('2d');
        if (!ctx || typeof window.Chart === 'undefined') return;
        const comps = Object.keys(stats.competencies);
        const data = comps.map(c => stats.competencies[c].percentage);
        if (this.charts.competencies) {
            this.charts.competencies.data.datasets[0].data = data;
            this.charts.competencies.update();
        } else {
            this.charts.competencies = new window.Chart(ctx, {
                type: 'radar',
                data: { labels: comps, datasets: [{ data: data, backgroundColor: 'rgba(52, 152, 219, 0.2)' }] },
                options: { plugins: { legend: { display: false } } }
            });
        }
    },

    renderEvaluationsChart(stats) {
        const ctx = document.getElementById('evaluationsChart')?.getContext('2d');
        if (!ctx || typeof window.Chart === 'undefined') return;
        const data = ['E1', 'E2', 'E3'].map(e => stats.byEval[e]?.total > 0 ? Math.round((stats.byEval[e].completed / stats.byEval[e].total) * 100) : 0);
        if (this.charts.evaluations) {
            this.charts.evaluations.data.datasets[0].data = data;
            this.charts.evaluations.update();
        } else {
            this.charts.evaluations = new window.Chart(ctx, {
                type: 'bar',
                data: { labels: ['E1', 'E2', 'E3'], datasets: [{ data: data, backgroundColor: ['#2980b9', '#27ae60', '#d35400'] }] },
                options: { plugins: { legend: { display: false } } }
            });
        }
    },

    refreshAll() {
        this.renderSummaryDashboard();
        this.renderDetailedDashboard();
        this.renderRAVisualDashboard();
    },

    resetAllData() {
        if (confirm('¿Resetear todo?')) {
            localStorage.removeItem('planificacion_transversal_progress');
            location.reload();
        }
    }
};

window.DashboardRenderer = DashboardRenderer;
window.addEventListener('progressUpdated', () => DashboardRenderer.refreshAll());
