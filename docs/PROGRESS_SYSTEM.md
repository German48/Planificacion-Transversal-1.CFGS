# 📊 Sistema de Progreso y Seguimiento

## Descripción General

El **Sistema de Progreso y Seguimiento** permite a docentes y alumnado registrar el avance real de las tareas, visualizar el progreso mediante barras y porcentajes, y mantener un historial persistente del trabajo realizado.

---

## 🎯 Características Principales

### 1. **Checkboxes Interactivos**
- Marcar tareas como completadas en las fichas diarias
- Estado visual inmediato (tachado de texto)
- Persistencia automática en `localStorage`

### 2. **Barras de Progreso**
- Visualización por día, semana, fase y evaluación
- Código de colores automático:
  - 🔴 Rojo: 0-25% (Inicio)
  - 🟠 Naranja: 25-50% (En progreso)
  - 🟡 Amarillo: 50-80% (Avanzado)
  - 🟢 Verde: 80-100% (Casi completo/Completo)

### 3. **Indicadores de Completitud**
- Porcentaje de tareas completadas
- Estadísticas globales del curso
- Progreso por evaluación (E1, E2, E3)

### 4. **Persistencia de Datos**
- Almacenamiento local en el navegador
- Exportación/Importación de progreso en JSON
- Reset completo con confirmación

---

## 🚀 Uso Básico

### Para Alumnado

#### Marcar una Tarea como Completada
```javascript
// En la ficha diaria, hacer clic en el checkbox junto a la tarea
// El sistema automáticamente:
// 1. Marca la tarea como completada
// 2. Actualiza el progreso del día
// 3. Recalcula el progreso de la semana
// 4. Guarda en localStorage
```

#### Ver tu Progreso
```javascript
// Acceder a las estadísticas globales
const stats = window.ProgressManager.getStatistics();
console.log(stats);
// {
//   totalDays: 45,
//   totalWeeks: 12,
//   globalProgress: 67,
//   evaluations: { E1: 85, E2: 60, E3: 45 }
// }
```

### Para Docentes

#### Añadir Checkboxes a una Ficha
```javascript
// En fichas-renderer.js o en el HTML
const checkbox = window.ProgressManager.generateTaskCheckbox(
    '2024-09-15',           // Fecha
    'task_planos_v01',      // ID único de la tarea
    'Completar planos v01', // Etiqueta
    { disabled: false }     // Opciones
);

// Insertar en el DOM
document.getElementById('tasks-container').innerHTML += checkbox;
```

#### Generar Barra de Progreso
```javascript
// Mostrar progreso de una semana
const weekProgress = window.ProgressManager.getWeekProgress('E1-S03');
const progressBar = window.ProgressManager.generateProgressBar(
    weekProgress,
    {
        showPercentage: true,
        height: '12px',
        colorScheme: 'default',
        animated: true,
        label: 'Progreso Semana 3'
    }
);

document.getElementById('week-progress').innerHTML = progressBar;
```

---

## 📦 API Completa

### Métodos Principales

#### `toggleTask(date, taskId, completed)`
Marca o desmarca una tarea como completada.

**Parámetros:**
- `date` (string): Fecha en formato 'YYYY-MM-DD'
- `taskId` (string): Identificador único de la tarea
- `completed` (boolean|null): true/false para forzar estado, null para toggle

**Retorna:** `boolean` - Estado final de la tarea

**Ejemplo:**
```javascript
// Toggle automático
window.ProgressManager.toggleTask('2024-09-15', 'task_1');

// Forzar completado
window.ProgressManager.toggleTask('2024-09-15', 'task_1', true);

// Forzar no completado
window.ProgressManager.toggleTask('2024-09-15', 'task_1', false);
```

---

#### `isTaskCompleted(date, taskId)`
Verifica si una tarea está completada.

**Retorna:** `boolean`

**Ejemplo:**
```javascript
if (window.ProgressManager.isTaskCompleted('2024-09-15', 'task_1')) {
    console.log('Tarea completada ✓');
}
```

---

#### `getDayProgress(date, totalTasks)`
Calcula el progreso de un día.

**Parámetros:**
- `date` (string): Fecha
- `totalTasks` (number): Total de tareas del día (default: 5)

**Retorna:** `number` (0-1)

**Ejemplo:**
```javascript
const progress = window.ProgressManager.getDayProgress('2024-09-15', 8);
console.log(`Progreso del día: ${Math.round(progress * 100)}%`);
```

---

#### `getWeekProgress(weekId)`
Obtiene el progreso de una semana.

**Retorna:** `number` (0-1)

**Ejemplo:**
```javascript
const weekProgress = window.ProgressManager.getWeekProgress('E1-S03');
console.log(`Semana 3: ${Math.round(weekProgress * 100)}%`);
```

---

#### `getPhaseProgress(phaseId)`
Obtiene el progreso de una fase.

**Retorna:** `number` (0-1)

**Ejemplo:**
```javascript
const f2Progress = window.ProgressManager.getPhaseProgress('F2');
console.log(`Fase F2: ${Math.round(f2Progress * 100)}%`);
```

---

#### `getEvaluationProgress(evalId)`
Obtiene el progreso de una evaluación.

**Retorna:** `number` (0-1)

**Ejemplo:**
```javascript
const e1Progress = window.ProgressManager.getEvaluationProgress('E1');
console.log(`Evaluación 1: ${Math.round(e1Progress * 100)}%`);
```

---

#### `getGlobalProgress()`
Obtiene el progreso global del curso.

**Retorna:** `number` (0-1)

**Ejemplo:**
```javascript
const globalProgress = window.ProgressManager.getGlobalProgress();
console.log(`Progreso total: ${Math.round(globalProgress * 100)}%`);
```

---

#### `setDayNote(date, note)`
Añade una nota a un día específico.

**Ejemplo:**
```javascript
window.ProgressManager.setDayNote(
    '2024-09-15',
    'Hoy tuvimos problemas con la sierra de calar. Resolver mañana.'
);
```

---

#### `getDayNote(date)`
Obtiene la nota de un día.

**Retorna:** `string`

---

#### `getStatistics()`
Obtiene estadísticas completas del progreso.

**Retorna:** `object`

**Ejemplo:**
```javascript
const stats = window.ProgressManager.getStatistics();
/*
{
    totalDays: 45,
    totalWeeks: 12,
    globalProgress: 67,
    lastUpdated: "2024-09-15T10:30:00.000Z",
    evaluations: {
        E1: 85,
        E2: 60,
        E3: 45
    }
}
*/
```

---

### Métodos de Gestión de Datos

#### `exportProgress()`
Exporta el progreso a un archivo JSON.

**Ejemplo:**
```javascript
// Descarga automáticamente un archivo JSON
window.ProgressManager.exportProgress();
// Archivo: progreso_2024-09-15.json
```

---

#### `importProgress(jsonData)`
Importa progreso desde JSON.

**Parámetros:**
- `jsonData` (string|object): Datos JSON o string JSON

**Retorna:** `boolean` - true si éxito

**Ejemplo:**
```javascript
// Desde un objeto
const data = { days: {}, weeks: {}, ... };
window.ProgressManager.importProgress(data);

// Desde un string JSON
const jsonString = '{"days":{},"weeks":{}}';
window.ProgressManager.importProgress(jsonString);
```

---

#### `resetProgress(confirm)`
Resetea todo el progreso.

**Parámetros:**
- `confirm` (boolean): Mostrar diálogo de confirmación

**Retorna:** `boolean`

**Ejemplo:**
```javascript
// Con confirmación
window.ProgressManager.resetProgress(true);

// Sin confirmación (usar con cuidado)
window.ProgressManager.resetProgress(false);
```

---

### Métodos de Renderizado

#### `generateProgressBar(progress, options)`
Genera HTML para una barra de progreso.

**Parámetros:**
- `progress` (number): Valor 0-1
- `options` (object):
  - `showPercentage` (boolean): Mostrar porcentaje
  - `height` (string): Altura CSS
  - `colorScheme` (string): 'default' o personalizado
  - `animated` (boolean): Animación
  - `label` (string): Etiqueta superior

**Retorna:** `string` (HTML)

---

#### `generateTaskCheckbox(date, taskId, label, options)`
Genera HTML para un checkbox de tarea.

**Parámetros:**
- `date` (string): Fecha
- `taskId` (string): ID de tarea
- `label` (string): Texto del label
- `options` (object):
  - `disabled` (boolean): Deshabilitar checkbox
  - `showLabel` (boolean): Mostrar etiqueta

**Retorna:** `string` (HTML)

---

## 🎨 Integración en Vistas

### Vista Mensual (Radar)
```javascript
// Añadir indicador de progreso en cada día
function renderDayCell(date) {
    const progress = window.ProgressManager.getDayProgress(date);
    const progressBar = window.ProgressManager.generateProgressBar(progress, {
        showPercentage: false,
        height: '4px',
        animated: false
    });
    
    return `
        <div class="day-cell">
            <div class="day-number">${dayNumber}</div>
            ${progressBar}
        </div>
    `;
}
```

### Vista Semanal (Timeline)
```javascript
// Añadir barra de progreso a cada semana
function renderWeekCard(weekId) {
    const progress = window.ProgressManager.getWeekProgress(weekId);
    const progressBar = window.ProgressManager.generateProgressBar(progress, {
        label: `Progreso de ${weekId}`,
        height: '10px'
    });
    
    return `
        <div class="week-card">
            <h3>${weekId}</h3>
            ${progressBar}
        </div>
    `;
}
```

### Vista Diaria (Fichas)
```javascript
// Añadir checkboxes a las tareas del día
function renderDailyTasks(date, tasks) {
    return tasks.map((task, idx) => {
        return window.ProgressManager.generateTaskCheckbox(
            date,
            `task_${idx}`,
            task.description
        );
    }).join('');
}
```

---

## 📊 Widget de Estadísticas

### HTML del Widget
```html
<div id="progress-widget" class="progress-widget">
    <div class="widget-header">
        <span>📊 Mi Progreso</span>
    </div>
    <div class="widget-body">
        <div class="stat-item">
            <span class="stat-label">Global:</span>
            <span class="stat-value" id="global-progress">0%</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">E1:</span>
            <span class="stat-value" id="e1-progress">0%</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">E2:</span>
            <span class="stat-value" id="e2-progress">0%</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">E3:</span>
            <span class="stat-value" id="e3-progress">0%</span>
        </div>
    </div>
</div>
```

### JavaScript del Widget
```javascript
function updateProgressWidget() {
    const stats = window.ProgressManager.getStatistics();
    
    document.getElementById('global-progress').textContent = `${stats.globalProgress}%`;
    document.getElementById('e1-progress').textContent = `${stats.evaluations.E1}%`;
    document.getElementById('e2-progress').textContent = `${stats.evaluations.E2}%`;
    document.getElementById('e3-progress').textContent = `${stats.evaluations.E3}%`;
}

// Actualizar cuando cambie el progreso
window.addEventListener('progressUpdated', updateProgressWidget);

// Actualizar al cargar
updateProgressWidget();
```

---

## 🔔 Eventos

### `progressUpdated`
Se dispara cada vez que se actualiza el progreso.

**Ejemplo:**
```javascript
window.addEventListener('progressUpdated', (event) => {
    console.log('Progreso actualizado:', event.detail);
    // Actualizar UI, mostrar notificación, etc.
});
```

---

## 💾 Estructura de Datos

### Formato de localStorage
```json
{
    "schemaVersion": "1.1",
    "version": "1.0",
    "lastUpdated": "2024-09-15T10:30:00.000Z",
    "days": {
        "2024-09-15": {
            "tasks": ["task_1", "task_3", "task_5"],
            "notes": "Día productivo",
            "completedAt": "2024-09-15T16:00:00.000Z"
        }
    },
    "weeks": {
        "E1-S03": {
            "completed": 0.75,
            "lastUpdated": "2024-09-15T16:00:00.000Z"
        }
    },
    "phases": {
        "F2": {
            "completed": 0.60,
            "lastUpdated": "2024-09-15T16:00:00.000Z"
        }
    },
    "evaluations": {}
}
```

---

## 🎓 Ejemplos de Uso Completos

### Ejemplo 1: Panel de Progreso del Alumno
```javascript
function createStudentProgressPanel() {
    const stats = window.ProgressManager.getStatistics();
    const globalProgress = window.ProgressManager.getGlobalProgress();
    
    const html = `
        <div class="student-progress-panel">
            <h2>Mi Progreso del Curso</h2>
            
            ${window.ProgressManager.generateProgressBar(globalProgress, {
                label: 'Progreso Global',
                height: '20px',
                showPercentage: true
            })}
            
            <div class="eval-progress">
                <h3>Por Evaluación</h3>
                ${['E1', 'E2', 'E3'].map(evalId => {
                    const progress = window.ProgressManager.getEvaluationProgress(evalId);
                    return window.ProgressManager.generateProgressBar(progress, {
                        label: `Evaluación ${evalId.slice(1)}`,
                        height: '12px'
                    });
                }).join('')}
            </div>
            
            <div class="stats-summary">
                <p>Días trabajados: ${stats.totalDays}</p>
                <p>Semanas completadas: ${stats.totalWeeks}</p>
                <p>Última actualización: ${new Date(stats.lastUpdated).toLocaleString('es-ES')}</p>
            </div>
        </div>
    `;
    
    return html;
}
```

### Ejemplo 2: Vista de Docente con Progreso de Clase
```javascript
// Asumiendo que tienes un array de estudiantes
function createClassProgressView(students) {
    return students.map(student => {
        // Cargar progreso de cada estudiante
        const studentProgress = loadStudentProgress(student.id);
        const globalProgress = calculateGlobalProgress(studentProgress);
        
        return `
            <div class="student-row">
                <span class="student-name">${student.name}</span>
                ${window.ProgressManager.generateProgressBar(globalProgress, {
                    showPercentage: true,
                    height: '8px',
                    animated: false
                })}
            </div>
        `;
    }).join('');
}
```

---

## 🛠️ Solución de Problemas

### El progreso no se guarda
**Problema:** Los checkboxes no persisten entre sesiones.

**Solución:**
1. Verificar que `localStorage` esté habilitado en el navegador
2. Comprobar la consola para errores
3. Verificar que `window.ProgressManager` esté inicializado

```javascript
// Test
console.log(window.ProgressManager);
console.log(localStorage.getItem('planificacion_progress'));
```

### Las barras de progreso no se actualizan
**Problema:** El porcentaje no cambia al marcar tareas.

**Solución:**
1. Escuchar el evento `progressUpdated`
2. Forzar re-render de las barras

```javascript
window.addEventListener('progressUpdated', () => {
    // Re-renderizar vista actual
    refreshCurrentView();
});
```

### Resetear datos corruptos
```javascript
// Borrar todo y empezar de cero
localStorage.removeItem('planificacion_progress');
location.reload();
```

---

## 📝 Notas Importantes

1. **Privacidad:** Los datos se almacenan localmente en el navegador del usuario. No se envían a ningún servidor.

2. **Backup:** Se recomienda exportar el progreso regularmente usando `exportProgress()`.

3. **Compatibilidad:** Funciona en todos los navegadores modernos con soporte de `localStorage`.

4. **Límites:** `localStorage` tiene un límite de ~5-10MB. Para cursos muy largos, considerar migrar a IndexedDB.

---

## 🚀 Próximas Mejoras

- [ ] Sincronización en la nube (Firebase/Supabase)
- [ ] Gráficos de tendencia de progreso
- [ ] Comparativa con compañeros (anónima)
- [ ] Predicción de finalización basada en ritmo actual
- [ ] Notificaciones de tareas pendientes
- [ ] Exportación a PDF con informe visual

---

**Versión:** 1.0  
**Última actualización:** 2026-01-20  
**Autor:** Sistema de Planificación Detallada
