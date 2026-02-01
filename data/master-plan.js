/**
 * ============================================
 * MASTER PLAN - Datos Separados de la UI
 * Sistema de Planificación Transversal 1º CFGS
 * ============================================
 * 
 * ESTRUCTURA:
 * - config: Configuración general
 * - modules: Definición de módulos
 * - phases: Definición de fases F0-F5 con gates
 * - weeks: Fichas semanales completas
 * - days: Fichas diarias completas
 * - academic: Estructura RA/CE por evaluación
 */

window.MASTER_PLAN = {

    // ============================================
    // CONFIGURACIÓN GENERAL
    // ============================================
    config: {
        course: "1º CFGS Diseño y Amueblamiento",
        year: "2025-2026",
        academic_year: "2025-2026",
        defaultDate: "2026-01-21",
        repoBaseUrl: "https://moodle.example.com/mod/folder/",
        evaluations: ["E1", "E2", "E3"],
        defaultView: "daily" // daily, radar, timeline, academic
    },

    // ============================================
    // CONTEXTO PEDAGÓGICO POR EVALUACIÓN
    // ============================================
    pedagogical_context: {
        E1: {
            title: "Proyecto Estantería",
            sense: {
                objective: "Diseñar y fabricar una estantería modular técnica funcional para el taller.",
                product: "Estantería modular de madera con uniones mecánicas/encoladas.",
                profile: "Competencia en mecanizado manual y uso de maquinaria básica."
            },
            intent: {
                ras: "RA1 (Representación), RA4 (Fabricación a medida).",
                competencies: "Trabajo en equipo, interpretación de planos, precisión técnica.",
                risks: "Sobrecarga en FAT, falta de coordinación en despiece (RRC-FAT)."
            }
        },
        E2: {
            title: "Proyecto Taburete",
            sense: {
                objective: "Desarrollar un taburete ergonómico integrando diseño CAD y fabricación industrializable.",
                product: "Taburete ergonómico con documentación técnica CAD completa.",
                profile: "Diseño paramétrico y optimización de procesos industriales."
            },
            intent: {
                ras: "RA2 (Diseño), RA3 (Procesos), RA4 (Fabricación).",
                competencies: "Ergonomía, modelado 3D, gestión de rutas de producción.",
                risks: "Desfase entre modelo digital y realidad física, dependencia del módulo RRC."
            }
        },
        E3: {
            title: "Proyecto Mobiliario",
            sense: {
                objective: "Producción de mobiliario industrial complejo con enfoque en calidad y sostenibilidad.",
                product: "Mueble de oficina/taller de alta complejidad y acabado premium.",
                profile: "Gestión de proyectos complejos y control de calidad profesional."
            },
            intent: {
                ras: "Todos los RA del curso (Integración Transversal).",
                competencies: "Liderazgo, resolución de problemas técnicos complejos.",
                risks: "Retraso en entrega final, falta de tiempo para acabados, dependencia de materiales externos."
            }
        }
    },

    // ============================================
    // MÓDULOS CON ICONOS Y COLORES
    // ============================================
    modules: {
        DJK: {
            name: "Digitalización y Sostenibilidad",
            short: "DJK",
            icon: "💻",
            color: "var(--col-djk)",
            pattern: "stripes-blue",
            role: "Infraestructura digital y trazabilidad"
        },
        DRP: {
            name: "Desarrollo de Producto",
            short: "DRP",
            icon: "🎨",
            color: "var(--col-drp)",
            pattern: "dots-green",
            role: "Diseño, decisiones técnicas y viabilidad"
        },
        RRC: {
            name: "Representación en Carpintería",
            short: "RRC",
            icon: "📐",
            color: "var(--col-rrc)",
            pattern: "lines-orange",
            role: "Planos, documentación gráfica"
        },
        FAT: {
            name: "Fabricación a Medida",
            short: "FAT",
            icon: "🪚",
            color: "var(--col-fat)",
            pattern: "cross-red",
            role: "Producción y mecanizado"
        },
        PMB: {
            name: "Prototipos en Carpintería",
            short: "PMB",
            icon: "🧪",
            color: "var(--col-pmb)",
            pattern: "waves-yellow",
            role: "Ensayos y prototipos"
        },
        PUB: {
            name: "Procesos en Industrias",
            short: "PUB",
            icon: "🏭",
            color: "var(--col-pub)",
            pattern: "grid-purple",
            role: "Rutas, materiales, procesos"
        },
        ALL: {
            name: "All",
            short: "ALL",
            icon: "🤝",
            color: "var(--col-all)",
            pattern: "solid",
            role: "Entrega y defensa transversal"
        }
    },

    // ============================================
    // FASES F0-F5 CON GATES ESTÁNDAR
    // ============================================
    phases: {
        F0: {
            name: "Lanzamiento",
            icon: "🚀",
            color: "#3498db",
            gate: {
                title: "Hito F0: Requisitos",
                conditions: [
                    "Encargo comprendido y aceptado",
                    "Requisitos + restricciones documentados",
                    "Criterio de aceptación definido",
                    "Repositorio creado y configurado"
                ],
                minEvidence: ["Encargo firmado", "Repositorio activo"]
            }
        },
        F1: {
            name: "Investigación",
            icon: "🔍",
            color: "#9b59b6",
            gate: {
                title: "Hito F1: Propuesta",
                conditions: [
                    "Análisis de referentes completado",
                    "Mínimo 3 alternativas generadas",
                    "Propuesta seleccionada con criterios",
                    "Justificación técnica documentada"
                ],
                minEvidence: ["Moodboard", "Matriz decisión", "Bocetos"]
            }
        },
        F2: {
            name: "Diseño/Representación",
            icon: "📐",
            color: "#e67e22",
            gate: {
                title: "Hito F2: Documentación",
                conditions: [
                    "Plano de conjunto acotado",
                    "Lista de piezas coherente con plano",
                    "Decisión técnica clave registrada",
                    "Despiece disponible"
                ],
                minEvidence: ["Plano conjunto PDF", "Lista piezas", "Decisión unión"]
            }
        },
        F3: {
            name: "Planificación",
            icon: "📋",
            color: "#27ae60",
            gate: {
                title: "Hito F3: Preparación",
                conditions: [
                    "Hoja de ruta/proceso definida",
                    "Recursos y materiales identificados",
                    "Tiempos estimados",
                    "PRL evaluado y acopio listo"
                ],
                minEvidence: ["Hoja proceso", "Lista materiales", "Check PRL"]
            }
        },
        F4: {
            name: "Fabricación/Prototipo",
            icon: "🔨",
            color: "#c0392b",
            gate: {
                title: "Hito F4: Producción",
                conditions: [
                    "Pieza/prototipo fabricado",
                    "Control de calidad realizado",
                    "Registro de verificación completado",
                    "Evidencias fotográficas"
                ],
                minEvidence: ["Foto pieza", "QC check", "Registro medidas"]
            }
        },
        F5: {
            name: "Cierre/Entrega",
            icon: "🎯",
            color: "#2c3e50",
            gate: {
                title: "Hito F5: Entrega Final",
                conditions: [
                    "Dossier técnico completo",
                    "Presentación preparada",
                    "Trazabilidad documental verificada",
                    "Producto/prototipo entregado"
                ],
                minEvidence: ["Dossier PDF", "Presentación", "Producto final"]
            }
        }
    },

    // ============================================
    // FICHAS SEMANALES - CURSO COMPLETO 2025-2026
    // ============================================
    weeks: [
        // =============================================
        // 1.ª EVALUACIÓN - PROYECTO ESTANTERÍA
        // =============================================
        {
            week_id: "E1-S01",
            date_from: "2025-09-15",
            date_to: "2025-09-19",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F0",
            week_goal: "Lanzamiento del proyecto: comprender el brief, crear moodboard y configurar repositorio digital.",
            gate: {
                title: "Hito F0",
                description: "Requisitos y lanzamiento validados",
                conditions: ["Encargo comprendido y aceptado", "Moodboard validado", "Repositorio creado"]
            },
            min_deliverable: {
                title: "Paquete F0 Lanzamiento",
                evidence_required: ["Encargo firmado", "Moodboard (10+ referencias)", "Repositorio configurado"]
            },
            daily_rhythm: {
                monday: { focus: "Presentación", task: "Introducción proyecto + Encargo", evidence: "Encargo leído" },
                tuesday: { focus: "Investigación", task: "Búsqueda de referentes", evidence: "Carpeta referentes" },
                wednesday: { focus: "Análisis", task: "Selección y categorización", evidence: "Referencias ordenadas" },
                thursday: { focus: "Composición", task: "Crear moodboard digital", evidence: "Moodboard borrador" },
                friday: { focus: "Hito F0", task: "Validación y repositorio", evidence: "Hito superado" }
            },
            modules_focus: {
                DRP: { focus: "Análisis tendencias y brief", deliverable: "Encargo analizado", enables: "Todos parten de la misma base" },
                DJK: { focus: "Creación repositorio", deliverable: "Estructura carpetas", enables: "Trazabilidad desde día 1" }
            },
            coordination: { agreements: ["Nomenclatura: E1_Equipo??_Archivo"], adjustments: "" },
            risks: ["Encargo no comprendido", "Repositorio mal estructurado"]
        },
        {
            week_id: "E1-S02",
            date_from: "2025-09-22",
            date_to: "2025-09-26",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F1",
            week_goal: "Generar mínimo 3 alternativas de diseño con bocetos a mano y seleccionar la mejor con criterios técnicos.",
            gate: {
                title: "Hito F1",
                description: "Propuesta seleccionada con matriz de decisión",
                conditions: ["3 bocetos alternativos", "Matriz decisión completada", "Propuesta ganadora identificada"]
            },
            min_deliverable: {
                title: "Paquete F1 Bocetado",
                evidence_required: ["3 bocetos a mano", "Matriz decisión", "Ficha propuesta"]
            },
            daily_rhythm: {
                monday: { focus: "Ideación", task: "Técnicas de creatividad", evidence: "Bocetos rápidos" },
                tuesday: { focus: "Desarrollo", task: "Boceto alternativa 1", evidence: "Boceto A" },
                wednesday: { focus: "Desarrollo", task: "Boceto alternativa 2 y 3", evidence: "Bocetos B y C" },
                thursday: { focus: "Evaluación", task: "Matriz de decisión", evidence: "Matriz completada" },
                friday: { focus: "Hito F1", task: "Selección y justificación", evidence: "Propuesta final" }
            },
            modules_focus: {
                DRP: { focus: "Bocetado y selección", deliverable: "3 bocetos + matriz", enables: "RRC puede empezar planos" },
                RRC: { focus: "Apoyo en proporciones", deliverable: "Correcciones escala", enables: "Bocetos proporcionados" }
            },
            coordination: { agreements: ["Bocetos en A4, escaneados"], adjustments: "" },
            risks: ["Bocetos sin escala", "Selección sin criterio técnico"]
        },
        {
            week_id: "E1-S03",
            date_from: "2025-09-29",
            date_to: "2025-10-03",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F2",
            week_goal: "Crear planos a mano (croquis acotado) con vistas normalizadas del diseño seleccionado.",
            gate: {
                title: "Hito F2",
                description: "Documentación gráfica básica completada",
                conditions: ["Croquis con 3 vistas", "Acotación completa", "Detalle de unión"]
            },
            min_deliverable: {
                title: "Paquete F2 Croquizado",
                evidence_required: ["Lámina A3 con vistas", "Detalle unión", "Lista piezas manual"]
            },
            daily_rhythm: {
                monday: { focus: "Encuadre", task: "Formato y distribución", evidence: "Plantilla preparada" },
                tuesday: { focus: "Vistas", task: "Planta y alzado", evidence: "2 vistas" },
                wednesday: { focus: "Vistas", task: "Perfil + corte", evidence: "3 vistas" },
                thursday: { focus: "Detalles", task: "Acotación + detalle", evidence: "Plano acotado" },
                friday: { focus: "Hito F2", task: "Entrega lámina", evidence: "Lámina completa" }
            },
            modules_focus: {
                RRC: { focus: "Croquizado manual", deliverable: "Lámina vistas", enables: "FAT puede interpretar" },
                PUB: { focus: "Lista materiales", deliverable: "Lista piezas", enables: "Acopio material" }
            },
            coordination: { agreements: ["Escalas: 1:5 o 1:10", "Acotación en mm"], adjustments: "" },
            risks: ["Vistas no coherentes", "Acotación incompleta"]
        },
        {
            week_id: "E1-S04",
            date_from: "2025-10-06",
            date_to: "2025-10-10",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F3",
            week_goal: "Preparar material, crear hoja de proceso y realizar primeras operaciones de trazado y corte.",
            gate: {
                title: "Hito F3",
                description: "Material preparado y hoja de ruta definida",
                conditions: ["Material seleccionado/acopiado", "Hoja de proceso", "Piezas trazadas"]
            },
            min_deliverable: {
                title: "Paquete F3 Preparación",
                evidence_required: ["Hoja de proceso", "Foto material", "Piezas trazadas"]
            },
            daily_rhythm: {
                monday: { focus: "Planificación", task: "Hoja de proceso", evidence: "Secuencia operaciones" },
                tuesday: { focus: "Material", task: "Selección y verificación", evidence: "Material OK" },
                wednesday: { focus: "Trazado", task: "Marcar piezas", evidence: "Piezas trazadas" },
                thursday: { focus: "Corte inicial", task: "Primeros cortes", evidence: "2-3 piezas" },
                friday: { focus: "Hito F3", task: "Verificación avance", evidence: "Check gate" }
            },
            modules_focus: {
                FAT: { focus: "Trazado y corte", deliverable: "Piezas trazadas", enables: "Mecanizado posterior" },
                PUB: { focus: "Hoja de proceso", deliverable: "Ruta producción", enables: "Control de tiempos" }
            },
            coordination: { agreements: ["Verificar defectos material", "Marcar cara/canto"], adjustments: "" },
            risks: ["Material defectuoso", "Trazado incorrecto"]
        },
        {
            week_id: "E1-S05",
            date_from: "2025-10-13",
            date_to: "2025-10-17",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F4",
            week_goal: "Fabricar piezas principales y realizar probeta de unión para validar la técnica elegida.",
            gate: {
                title: "Hito F4-A",
                description: "Piezas cortadas y probeta validada",
                conditions: ["Piezas cortadas", "Probeta unión OK", "QC realizado"]
            },
            min_deliverable: {
                title: "Paquete F4-A Mecanizado",
                evidence_required: ["Piezas cortadas", "Probeta unión", "Hoja QC"]
            },
            daily_rhythm: {
                monday: { focus: "Corte", task: "Cortar todas las piezas", evidence: "Piezas cortadas" },
                tuesday: { focus: "Probeta", task: "Fabricar probeta unión", evidence: "Probeta lista" },
                wednesday: { focus: "Ensayo", task: "Probar encaje", evidence: "Ajustes documentados" },
                thursday: { focus: "Ajuste", task: "Correcciones finales", evidence: "Piezas OK" },
                friday: { focus: "Hito F4-A", task: "QC y validación", evidence: "Check gate" }
            },
            modules_focus: {
                FAT: { focus: "Corte y probeta", deliverable: "Piezas + probeta", enables: "Montaje" },
                PMB: { focus: "Control calidad", deliverable: "Hoja QC", enables: "Validación dimensional" }
            },
            coordination: { agreements: ["Tolerancia ±1mm"], adjustments: "" },
            risks: ["Piezas fuera tolerancia", "Unión no encaja"]
        },
        {
            week_id: "E1-S06",
            date_from: "2025-10-20",
            date_to: "2025-10-24",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F4",
            week_goal: "Ensamblar el prototipo/maqueta funcional y verificar estabilidad y acabado.",
            gate: {
                title: "Hito F4-B",
                description: "Prototipo ensamblado y funcional",
                conditions: ["Producto ensamblado", "Estabilidad verificada", "Acabado básico"]
            },
            min_deliverable: {
                title: "Paquete F4-B Montaje",
                evidence_required: ["Producto montado", "Foto verificación", "Check QC final"]
            },
            daily_rhythm: {
                monday: { focus: "Montaje", task: "Ensamblar subconjuntos", evidence: "Subconjuntos" },
                tuesday: { focus: "Montaje", task: "Ensamblado final", evidence: "Producto montado" },
                wednesday: { focus: "Acabado", task: "Lijado y limpieza", evidence: "Acabado OK" },
                thursday: { focus: "QC", task: "Verificación final", evidence: "Check QC" },
                friday: { focus: "Hito F4-B", task: "Validación prototipo", evidence: "Prototipo OK" }
            },
            modules_focus: {
                FAT: { focus: "Montaje y acabado", deliverable: "Producto terminado", enables: "Entrega" },
                PMB: { focus: "Evaluación prototipo", deliverable: "Informe evaluación", enables: "Mejoras" }
            },
            coordination: { agreements: ["Encolado con tiempo de secado"], adjustments: "" },
            risks: ["Escuadra incorrecta", "Acabado deficiente"]
        },
        {
            week_id: "E1-S07",
            date_from: "2025-10-27",
            date_to: "2025-10-31",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F5",
            week_goal: "Preparar dossier técnico, presentación y entregar proyecto completo.",
            gate: {
                title: "Hito F5 Final E1",
                description: "Proyecto entregado con documentación completa",
                conditions: ["Dossier PDF completo", "Presentación preparada", "Producto entregado"]
            },
            min_deliverable: {
                title: "Paquete F5 Entrega E1",
                evidence_required: ["Dossier técnico PDF", "Presentación", "Producto físico"]
            },
            daily_rhythm: {
                monday: { focus: "Dossier", task: "Recopilar documentación", evidence: "Índice dossier" },
                tuesday: { focus: "Dossier", task: "Redactar memoria", evidence: "Memoria borrador" },
                wednesday: { focus: "Presentación", task: "Crear presentación", evidence: "Slides" },
                thursday: { focus: "Ensayo", task: "Ensayar presentación", evidence: "Ensayo OK" },
                friday: { focus: "Entrega Final", task: "Presentación + entrega", evidence: "Proyecto entregado" }
            },
            modules_focus: {
                DJK: { focus: "Dossier digital", deliverable: "PDF estructurado", enables: "Trazabilidad completa" },
                DRP: { focus: "Memoria técnica", deliverable: "Memoria proyecto", enables: "Justificación decisiones" }
            },
            coordination: { agreements: ["Fecha límite viernes 12:00"], adjustments: "" },
            risks: ["Dossier incompleto", "Presentación no ensayada"]
        },
        {
            week_id: "E1-S08",
            date_from: "2025-11-03",
            date_to: "2025-11-07",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F3",
            week_goal: "Fabricar probetas de unión y validar la técnica elegida antes de la producción.",
            gate: {
                title: "Hito PMB",
                description: "Probeta validada",
                conditions: ["Probeta fabricada", "Resistencia OK", "Ajuste verificado"]
            },
            min_deliverable: {
                title: "Paquete Probeta",
                evidence_required: ["Probeta física", "Ficha de prueba", "Actualización plano si procede"]
            },
            daily_rhythm: {
                monday: { focus: "FESTIVO", task: "---", evidence: "---" },
                tuesday: { focus: "Preparación", task: "Preparar material probeta", evidence: "Material OK" },
                wednesday: { focus: "Fabricación", task: "Fabricar probeta", evidence: "Probeta lista" },
                thursday: { focus: "Prueba", task: "Validar resistencia y ajuste", evidence: "Ficha prueba" },
                friday: { focus: "Decisión", task: "Ajustes si procede", evidence: "Decisión documentada" }
            },
            modules_focus: {
                PMB: { focus: "Prueba de unión", deliverable: "Probeta validada", enables: "Fabricación segura" },
                FAT: { focus: "Ejecutar probeta", deliverable: "Probeta física", enables: "Validación técnica" }
            },
            coordination: { agreements: ["3 de noviembre festivo"], adjustments: "Semana corta por festivo" },
            risks: ["Probeta fallida", "Necesidad de rediseñar unión"]
        },
        {
            week_id: "E1-S09",
            date_from: "2025-11-10",
            date_to: "2025-11-14",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F4",
            week_goal: "Iniciar fabricación real: trazado, corte y preparación de piezas.",
            gate: {
                title: "Hito F4 inicio",
                description: "Piezas trazadas y primeros cortes",
                conditions: ["Material preparado", "Piezas trazadas", "Control dimensional iniciado"]
            },
            min_deliverable: {
                title: "Paquete F4 Inicio",
                evidence_required: ["Fotos de trazado", "Hoja de control dimensional", "Registro proceso"]
            },
            daily_rhythm: {
                monday: { focus: "Preparación", task: "Verificar material", evidence: "Material OK" },
                tuesday: { focus: "Trazado", task: "Trazar piezas", evidence: "Piezas trazadas" },
                wednesday: { focus: "Corte", task: "Cortar piezas", evidence: "Primeras piezas" },
                thursday: { focus: "Ajuste", task: "Verificar medidas", evidence: "Control dimensional" },
                friday: { focus: "Avance", task: "Continuar corte", evidence: "Registro fotográfico" }
            },
            modules_focus: {
                FAT: { focus: "Fabricación y medición", deliverable: "Piezas cortadas", enables: "Montaje" },
                DJK: { focus: "Evidencias ordenadas", deliverable: "Fotos etiquetadas", enables: "Trazabilidad" }
            },
            coordination: { agreements: ["Fotos con nomenclatura"], adjustments: "" },
            risks: ["Piezas fuera de tolerancia", "Material defectuoso"]
        },
        {
            week_id: "E1-S10",
            date_from: "2025-11-17",
            date_to: "2025-11-21",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F4",
            week_goal: "Completar fabricación de piezas y realizar montaje del producto.",
            gate: {
                title: "Hito F4 Montaje",
                description: "Producto montado y verificado",
                conditions: ["Todas las piezas fabricadas", "Montaje realizado", "Escuadra verificada"]
            },
            min_deliverable: {
                title: "Paquete F4 Montaje",
                evidence_required: ["Producto montado", "Checklist montaje", "Fotos antes/después"]
            },
            daily_rhythm: {
                monday: { focus: "Fabricación", task: "Completar piezas", evidence: "Piezas listas" },
                tuesday: { focus: "Uniones", task: "Preparar uniones", evidence: "Uniones listas" },
                wednesday: { focus: "Montaje", task: "Ensamblar producto", evidence: "Montaje parcial" },
                thursday: { focus: "Prensado", task: "Prensado y ajuste", evidence: "Prensado OK" },
                friday: { focus: "Verificación", task: "Verificar escuadra", evidence: "Checklist montaje" }
            },
            modules_focus: {
                FAT: { focus: "Montaje y verificación", deliverable: "Producto ensamblado", enables: "QC" },
                PMB: { focus: "Checklist montaje", deliverable: "Puntos críticos OK", enables: "Validación" }
            },
            coordination: { agreements: ["Tiempo de prensado mínimo 2h"], adjustments: "" },
            risks: ["Escuadra incorrecta", "Ajustes necesarios"]
        },
        {
            week_id: "E1-S11",
            date_from: "2025-11-24",
            date_to: "2025-11-28",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F4",
            week_goal: "Control de calidad final: verificar dimensiones, estabilidad y acabado.",
            gate: {
                title: "Hito F4 QC",
                description: "Control de calidad superado",
                conditions: ["QC dimensional OK", "Estabilidad verificada", "Acabado aceptable"]
            },
            min_deliverable: {
                title: "Paquete F4 QC",
                evidence_required: ["Hoja QC completa", "No conformidades registradas", "Correcciones aplicadas"]
            },
            daily_rhythm: {
                monday: { focus: "Inspección", task: "QC dimensional", evidence: "Medidas verificadas" },
                tuesday: { focus: "Estabilidad", task: "Prueba de estabilidad", evidence: "Estabilidad OK" },
                wednesday: { focus: "Acabado", task: "Revisión acabado", evidence: "Acabado verificado" },
                thursday: { focus: "Correcciones", task: "Aplicar correcciones", evidence: "Correcciones hechas" },
                friday: { focus: "Validación", task: "Validación final", evidence: "QC superado" }
            },
            modules_focus: {
                FAT: { focus: "QC y correcciones", deliverable: "Producto validado", enables: "Cierre F4" },
                DRP: { focus: "Validar requisitos", deliverable: "Encargo cumplido", enables: "Entrega" }
            },
            coordination: { agreements: ["Tolerancia manual ±2mm"], adjustments: "" },
            risks: ["No conformidades graves", "Retrabajos necesarios"]
        },
        {
            week_id: "E1-S12",
            date_from: "2025-12-01",
            date_to: "2025-12-04",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F5",
            week_goal: "Preparar dossier final: memoria, planos, proceso, QC y conclusiones.",
            gate: {
                title: "Hito F5 Dossier",
                description: "Dossier técnico completo",
                conditions: ["Memoria redactada", "Planos finales incluidos", "Anexos de taller"]
            },
            min_deliverable: {
                title: "Paquete F5 Dossier",
                evidence_required: ["Dossier PDF completo", "Carpeta digital ordenada", "Índice documental"]
            },
            daily_rhythm: {
                monday: { focus: "Compilación", task: "Recopilar documentación", evidence: "Índice creado" },
                tuesday: { focus: "Memoria", task: "Redactar memoria", evidence: "Memoria borrador" },
                wednesday: { focus: "Anexos", task: "Preparar anexos taller", evidence: "Anexos listos" },
                thursday: { focus: "Revisión", task: "Revisión final", evidence: "Dossier completo" },
                friday: { focus: "FESTIVO", task: "---", evidence: "---" }
            },
            modules_focus: {
                DJK: { focus: "Dossier digital", deliverable: "PDF estructurado", enables: "Archivo" },
                DRP: { focus: "Memoria técnica", deliverable: "Justificación decisiones", enables: "Evaluación" }
            },
            coordination: { agreements: ["5 de diciembre festivo (Día del Enseñante)"], adjustments: "Viernes festivo" },
            risks: ["Documentación incompleta", "Formato incorrecto"]
        },
        {
            week_id: "E1-S13",
            date_from: "2025-12-08",
            date_to: "2025-12-12",
            eval: "E1",
            project: "Estantería modular",
            phase_common: "F5",
            week_goal: "Entrega final y cierre administrativo del proyecto E1.",
            gate: {
                title: "Hito Final E1",
                description: "Proyecto E1 entregado completamente",
                conditions: ["Dossier entregado", "Producto entregado", "Lecciones aprendidas registradas"]
            },
            min_deliverable: {
                title: "Entrega Final E1",
                evidence_required: ["Dossier PDF", "Presentación", "Producto físico", "Reflexión final"]
            },
            daily_rhythm: {
                monday: { focus: "Presentación", task: "Preparar presentación", evidence: "Slides listos" },
                tuesday: { focus: "Ensayo", task: "Ensayar presentación", evidence: "Ensayo OK" },
                wednesday: { focus: "Ajustes", task: "Ajustes finales", evidence: "Todo listo" },
                thursday: { focus: "Presentación", task: "Presentar proyecto", evidence: "Presentación realizada" },
                friday: { focus: "Cierre", task: "Entrega + lecciones aprendidas", evidence: "Proyecto entregado" }
            },
            modules_focus: {
                DJK: { focus: "Archivo definitivo", deliverable: "Repositorio cerrado", enables: "Trazabilidad" },
                DRP: { focus: "Presentación", deliverable: "Comunicación efectiva", enables: "Evaluación" }
            },
            coordination: { agreements: ["Entrega viernes 12/12 - 23:59"], adjustments: "" },
            risks: ["Entrega tardía", "Documentación faltante"]
        },

        // =============================================
        // 2.ª EVALUACIÓN - PROYECTO TABURETE
        // =============================================
        {
            week_id: "E2-S01",
            date_from: "2026-01-08",
            date_to: "2026-01-09",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F0",
            week_goal: "Lanzamiento proyecto E2: comprender requisitos ergonómicos y crear estructura digital avanzada.",
            gate: {
                title: "Hito F0 E2",
                description: "Encargo ergonómico comprendido y repositorio CAD preparado",
                conditions: ["Encargo con requisitos ergonómicos", "Plantilla CAD configurada", "Repositorio E2 creado"]
            },
            min_deliverable: {
                title: "Paquete F0 E2",
                evidence_required: ["Encargo ergonomía", "Estudio antropometría", "Repositorio E2"]
            },
            daily_rhythm: {
                monday: { focus: "FESTIVO", task: "---", evidence: "---" },
                tuesday: { focus: "FESTIVO", task: "---", evidence: "---" },
                wednesday: { focus: "Lanzamiento", task: "Encargo + requisitos", evidence: "Encargo firmado" },
                thursday: { focus: "Ergonomía", task: "Estudio antropométrico", evidence: "Medidas OK" },
                friday: { focus: "Hito F0", task: "Configurar repositorio", evidence: "Hito superado" }
            },
            modules_focus: {
                DRP: { focus: "Requisitos ergonómicos", deliverable: "Ficha ergonomía", enables: "Diseño correcto" },
                DJK: { focus: "Estructura E2", deliverable: "Repositorio configurado", enables: "Trabajo en nube" }
            },
            coordination: { agreements: ["Semana corta: priorizar esenciales"], adjustments: "Lunes y martes festivos" },
            risks: ["Requisitos ergonómicos incompletos"]
        },
        {
            week_id: "E2-S02",
            date_from: "2026-01-12",
            date_to: "2026-01-16",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F1",
            week_goal: "Generar alternativas de diseño en CAD 3D básico y seleccionar propuesta con criterios ergonómicos.",
            gate: {
                title: "Hito F1 E2",
                description: "Modelo 3D básico con propuesta seleccionada",
                conditions: ["Bocetos CAD (3 alternativas)", "Render básico", "Propuesta seleccionada"]
            },
            min_deliverable: {
                title: "Paquete F1 E2",
                evidence_required: ["3 bocetos CAD", "Render de alternativas", "Matriz decisión"]
            },
            daily_rhythm: {
                monday: { focus: "Ideación", task: "Bocetos rápidos", evidence: "Bocetos papel" },
                tuesday: { focus: "CAD", task: "Modelar alternativa 1", evidence: "Modelo A" },
                wednesday: { focus: "CAD", task: "Modelar alternativas 2-3", evidence: "Modelos B y C" },
                thursday: { focus: "Renders", task: "Renders comparativos", evidence: "Renders" },
                friday: { focus: "Hito F1", task: "Selección + matriz", evidence: "Propuesta final" }
            },
            modules_focus: {
                DRP: { focus: "Diseño y ergonomía", deliverable: "Modelos 3D", enables: "Planos" },
                RRC: { focus: "Apoyo CAD", deliverable: "Correcciones modelo", enables: "Planos fabricación" }
            },
            coordination: { agreements: ["SketchUp/Fusion 360"], adjustments: "" },
            risks: ["Modelo no fabricable", "Ergonomía incorrecta"]
        },
        {
            week_id: "E2-S03",
            date_from: "2026-01-19",
            date_to: "2026-01-23",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F2",
            week_goal: "Esta semana el equipo pasa de bocetos aprobados a documentación técnica lista para fabricar.",
            gate: {
                title: "Hito F2",
                description: "Cerrar documentación mínima para pasar a planificación",
                conditions: ["Plano conjunto exportado y publicado", "Lista de piezas coherente con dimensiones del plano", "Decisión de unión técnicamente justificada"]
            },
            min_deliverable: {
                title: "Paquete F2 Semanal",
                evidence_required: ["E2_S03_F2_Equipo??_PlanoConjunto.pdf", "E2_S03_F2_Equipo??_ListaPiezas.xlsx", "E2_S03_F2_Equipo??_DecisionUnion.pdf"]
            },
            excellent_deliverable: {
                title: "Paquete F2 Excelente",
                evidence: ["Plano con tolerancias críticas", "Detalle de unión ampliado", "Alternativa de unión descartada y justificada"]
            },
            daily_rhythm: {
                monday: { focus: "Arranque semanal", task: "Revisión bocetos + asignación roles", evidence: "Check de arranque" },
                tuesday: { focus: "Producción", task: "Plano conjunto + lista piezas", evidence: "Avance plano" },
                wednesday: { focus: "Producción", task: "Detalles + decisión técnica", evidence: "Decisión documentada" },
                thursday: { focus: "Integración", task: "Coherencia plano-lista + ajustes", evidence: "Paquete preliminar" },
                friday: { focus: "Cierre + Hito", task: "Publicación + validación gate", evidence: "Paquete final publicado" }
            },
            modules_focus: {
                RRC: { focus: "Plano conjunto + acotación", deliverable: "Plano PDF acotado", enables: "FAT puede preparar corte" },
                DRP: { focus: "Decisión técnica y justificación", deliverable: "Ficha decisión unión", enables: "PMB puede planificar ensayo" },
                PUB: { focus: "Coherencia piezas/material/proceso inicial", deliverable: "Lista materiales preliminar", enables: "Acopio y tiempos" },
                DJK: { focus: "Publicación y control documental", deliverable: "Repositorio actualizado", enables: "Trazabilidad completa" }
            },
            evaluation: { what: ["Plano conjunto", "Lista piezas", "Decisión técnica"], instrument: "Rúbrica F2 + checklist evidencias", when: "Viernes revisión final", min_condition: "Sin plano+lista no hay proceso evaluable" },
            coordination: { agreements: ["Nomenclatura obligatoria en todos los archivos", "Revisión cruzada jueves antes de cierre"], adjustments: "Miércoles festivo → adelantar decisión técnica a martes" },
            risks: ["Plano y lista no coinciden (coherencia)", "Decisión técnica sin verificación posible", "Retraso en publicación bloquea gate"]
        },
        {
            week_id: "E2-S04",
            date_from: "2026-01-26",
            date_to: "2026-01-30",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F3",
            week_goal: "Preparar material, crear hoja de ruta de fabricación y acopiar recursos para taller.",
            gate: {
                title: "Hito F3 E2",
                description: "Material acopiado y hoja de ruta aprobada",
                conditions: ["Material verificado", "Hoja de ruta completa", "PRL revisado"]
            },
            min_deliverable: {
                title: "Paquete F3 E2",
                evidence_required: ["Hoja de ruta", "Lista materiales", "Check PRL"]
            },
            daily_rhythm: {
                monday: { focus: "Planificación", task: "Crear hoja de ruta", evidence: "Hoja borrador" },
                tuesday: { focus: "Materiales", task: "Selección y pedido", evidence: "Lista materiales" },
                wednesday: { focus: "Acopio", task: "Verificar material", evidence: "Material OK" },
                thursday: { focus: "PRL", task: "Revisar seguridad", evidence: "Check PRL" },
                friday: { focus: "Hito F3", task: "Validación ruta", evidence: "Hito superado" }
            },
            modules_focus: {
                PUB: { focus: "Hoja de ruta", deliverable: "Secuencia producción", enables: "Fabricación ordenada" },
                FAT: { focus: "Preparación herramientas", deliverable: "Taller listo", enables: "Fabricación" }
            },
            coordination: { agreements: ["Material en taller jueves"], adjustments: "" },
            risks: ["Material no disponible", "Hoja de ruta incompleta"]
        },
        {
            week_id: "E2-S05",
            date_from: "2026-02-02",
            date_to: "2026-02-06",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F4",
            week_goal: "Fabricar todas las piezas del taburete con maquinaria portátil y ensamblar producto completo.",
            gate: {
                title: "Hito F4 E2",
                description: "Taburete fabricado y ensamblado",
                conditions: ["Todas las piezas cortadas", "Uniones realizadas", "Producto ensamblado"]
            },
            min_deliverable: {
                title: "Paquete F4 E2",
                evidence_required: ["Piezas fabricadas", "Hoja QC", "Producto montado"]
            },
            daily_rhythm: {
                monday: { focus: "Trazado", task: "Verificar y trazar", evidence: "Piezas trazadas" },
                tuesday: { focus: "Corte", task: "Cortar piezas", evidence: "Piezas cortadas" },
                wednesday: { focus: "Mecanizado", task: "Uniones", evidence: "Uniones listas" },
                thursday: { focus: "Mecanizado", task: "Completar y ajustar", evidence: "Encaje OK" },
                friday: { focus: "Montaje", task: "Ensamblar", evidence: "Taburete montado" }
            },
            modules_focus: {
                FAT: { focus: "Fabricación completa", deliverable: "Producto terminado", enables: "Acabado" },
                PMB: { focus: "Control calidad", deliverable: "QC dimensional", enables: "Validación" }
            },
            coordination: { agreements: ["Tolerancia ±1mm", "EPIs obligatorios"], adjustments: "" },
            risks: ["Piezas fuera tolerancia", "Accidente taller"]
        },
        {
            week_id: "E2-S06",
            date_from: "2026-02-09",
            date_to: "2026-02-13",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F4",
            week_goal: "Acabado superficial y verificación de calidad final del taburete.",
            gate: {
                title: "Hito F4-B E2",
                description: "Producto acabado y verificado",
                conditions: ["Lijado completo", "Acabado aplicado", "QC final OK"]
            },
            min_deliverable: {
                title: "Paquete F4-B E2",
                evidence_required: ["Producto acabado", "Informe QC final", "Fotos proceso"]
            },
            daily_rhythm: {
                monday: { focus: "Lijado", task: "Lijado grueso", evidence: "Lijado 80" },
                tuesday: { focus: "Lijado", task: "Lijado fino", evidence: "Lijado 120-180" },
                wednesday: { focus: "Acabado", task: "Aplicar acabado", evidence: "Primera mano" },
                thursday: { focus: "Acabado", task: "Segunda mano", evidence: "Acabado final" },
                friday: { focus: "QC", task: "Verificación final", evidence: "QC completo" }
            },
            modules_focus: {
                FAT: { focus: "Acabado superficial", deliverable: "Producto terminado", enables: "Entrega" },
                PUB: { focus: "Control proceso", deliverable: "Informe acabados", enables: "Trazabilidad" }
            },
            coordination: { agreements: ["Secado entre manos: 24h"], adjustments: "" },
            risks: ["Acabado defectuoso", "Tiempo secado insuficiente"]
        },
        {
            week_id: "E2-S07",
            date_from: "2026-02-16",
            date_to: "2026-02-20",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F5",
            week_goal: "Entregar proyecto E2 con dossier técnico completo y presentación.",
            gate: {
                title: "Hito F5 Final E2",
                description: "Proyecto E2 entregado completamente",
                conditions: ["Dossier técnico PDF", "Presentación", "Producto entregado"]
            },
            min_deliverable: {
                title: "Paquete F5 E2",
                evidence_required: ["Dossier PDF", "Presentación", "Taburete"]
            },
            daily_rhythm: {
                monday: { focus: "Dossier", task: "Compilar documentación", evidence: "Índice" },
                tuesday: { focus: "Dossier", task: "Redactar memoria", evidence: "Memoria" },
                wednesday: { focus: "Presentación", task: "Crear slides", evidence: "Presentación" },
                thursday: { focus: "Ensayo", task: "Ensayar", evidence: "Ensayo OK" },
                friday: { focus: "Entrega", task: "Presentación final", evidence: "Proyecto entregado" }
            },
            modules_focus: {
                DJK: { focus: "Dossier digital", deliverable: "PDF estructurado", enables: "Trazabilidad" },
                DRP: { focus: "Memoria técnica", deliverable: "Justificación completa", enables: "Evaluación" }
            },
            coordination: { agreements: ["Entrega viernes 12:00"], adjustments: "" },
            risks: ["Documentación incompleta"]
        },
        {
            week_id: "E2-S08",
            date_from: "2026-02-23",
            date_to: "2026-02-27",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F4",
            week_goal: "Control final de calidad y preparación de entrega.",
            gate: {
                title: "Hito Control Final",
                description: "Inspección final y preparación logística",
                conditions: ["Inspección dimensional OK", "Estabilidad verificada", "Acabado aprobado"]
            },
            min_deliverable: {
                title: "Paquete Control Final",
                evidence_required: ["Control calidad final", "Fotos verificación", "Paquete entrega"]
            },
            daily_rhythm: {
                monday: { focus: "Inspección", task: "Verificación final", evidence: "Medidas OK" },
                tuesday: { focus: "Estabilidad", task: "Prueba estabilidad", evidence: "Test OK" },
                wednesday: { focus: "Acabado", task: "Revisión acabado", evidence: "Acabado OK" },
                thursday: { focus: "Correcciones", task: "Ajustes finales", evidence: "Correcciones" },
                friday: { focus: "Preparación", task: "Embalaje/etiquetado", evidence: "Listo entrega" }
            },
            modules_focus: {
                FAT: { focus: "Verificación final", deliverable: "Producto validado", enables: "Entrega" },
                PUB: { focus: "Logística", deliverable: "Preparación entrega", enables: "Cierre" }
            },
            coordination: { agreements: ["Criterios QC cliente"], adjustments: "" },
            risks: ["No conformidades de última hora"]
        },
        {
            week_id: "E2-S09",
            date_from: "2026-03-02",
            date_to: "2026-03-06",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F5",
            week_goal: "Preparación del dossier técnico y repositorio digital completo.",
            gate: {
                title: "Hito Dossier",
                description: "Documentación técnica completa",
                conditions: ["Memoria técnica", "Planos finales", "Evidencias ordenadas"]
            },
            min_deliverable: {
                title: "Paquete Dossier",
                evidence_required: ["Dossier PDF", "Repositorio limpio", "Evidencias taller"]
            },
            daily_rhythm: {
                monday: { focus: "Recopilación", task: "Recopilar evidencias", evidence: "Índice creado" },
                tuesday: { focus: "Memoria", task: "Redactar memoria", evidence: "Memoria borrador" },
                wednesday: { focus: "Planos", task: "Planos as-built", evidence: "Planos finales" },
                thursday: { focus: "Revisión", task: "Revisión documental", evidence: "Correcciones" },
                friday: { focus: "Cierre", task: "Dossier completo", evidence: "Dossier PDF" }
            },
            modules_focus: {
                DJK: { focus: "Repositorio final", deliverable: "Backups y trazabilidad", enables: "Archivo" },
                RRC: { focus: "Planos finales", deliverable: "Documentación CAD", enables: "Entrega" }
            },
            coordination: { agreements: ["Nomenclatura final"], adjustments: "" },
            risks: ["Documentación incompleta", "Versiones confusas"]
        },
        {
            week_id: "E2-S10",
            date_from: "2026-03-09",
            date_to: "2026-03-13",
            eval: "E2",
            project: "Taburete ergonómico",
            phase_common: "F5",
            week_goal: "Cierre y entrega del proyecto E2 con presentación y lecciones aprendidas.",
            gate: {
                title: "Hito Final E2",
                description: "Proyecto E2 entregado y cerrado",
                conditions: ["Presentación realizada", "Producto entregado", "Lecciones aprendidas"]
            },
            min_deliverable: {
                title: "Entrega Final E2",
                evidence_required: ["Dossier completo", "Presentación", "Producto", "Reflexión"]
            },
            daily_rhythm: {
                monday: { focus: "Presentación", task: "Preparar presentación", evidence: "Slides" },
                tuesday: { focus: "Ensayo", task: "Ensayar presentación", evidence: "Ensayo OK" },
                wednesday: { focus: "Ajustes", task: "Ajustes finales", evidence: "Todo listo" },
                thursday: { focus: "Presentación", task: "Presentar proyecto", evidence: "Presentación" },
                friday: { focus: "Cierre", task: "Lecciones aprendidas", evidence: "Proyecto cerrado" }
            },
            modules_focus: {
                PMB: { focus: "Conclusión prototipo", deliverable: "Evaluación final", enables: "Mejoras" },
                DJK: { focus: "Cierre documental", deliverable: "Archivo definitivo", enables: "Trazabilidad" }
            },
            coordination: { agreements: ["Entrega viernes 13/03 - 23:59"], adjustments: "" },
            risks: ["Entrega tardía", "Presentación no preparada"]
        },

        // =============================================
        // 3.ª EVALUACIÓN - PROYECTO MOBILIARIO INDUSTRIAL
        // =============================================
        {
            week_id: "E3-S01",
            date_from: "2026-03-16",
            date_to: "2026-03-20",
            eval: "E3",
            project: "Mobiliario industrial",
            phase_common: "F0",
            week_goal: "Lanzamiento proyecto industrial: análisis de requisitos de producción en serie y configuración de infraestructura digital.",
            gate: {
                title: "Hito F0 E3",
                description: "Requisitos industriales definidos y nube configurada",
                conditions: ["Encargo industrial", "Requisitos producción", "Nube configurada"]
            },
            min_deliverable: {
                title: "Paquete F0 E3",
                evidence_required: ["Encargo industrial", "Análisis contexto", "Estructura cloud"]
            },
            daily_rhythm: {
                monday: { focus: "Lanzamiento", task: "Encargo proyecto industrial", evidence: "Encargo firmado" },
                tuesday: { focus: "Análisis", task: "Contexto industria", evidence: "Análisis sector" },
                wednesday: { focus: "Requisitos", task: "Requerimientos producción", evidence: "Lista requisitos" },
                thursday: { focus: "Digital", task: "Configurar nube", evidence: "Cloud OK" },
                friday: { focus: "Hito F0", task: "Validación", evidence: "Hito superado" }
            },
            modules_focus: {
                DJK: { focus: "Infraestructura digital", deliverable: "Cloud configurado", enables: "Trabajo colaborativo" },
                DRP: { focus: "Análisis requisitos", deliverable: "Encargo completo", enables: "Diseño" }
            },
            coordination: { agreements: ["Trabajo en equipos de 4"], adjustments: "" },
            risks: ["Requisitos industriales complejos"]
        },
        {
            week_id: "E3-S02",
            date_from: "2026-03-23",
            date_to: "2026-03-27",
            eval: "E3",
            project: "Mobiliario industrial",
            phase_common: "F1",
            week_goal: "Desarrollar concepto de producto industrial con enfoque en fabricación en serie.",
            gate: {
                title: "Hito F1 E3",
                description: "Concepto industrial validado",
                conditions: ["Concepto definido", "Viabilidad técnica", "Escalabilidad verificada"]
            },
            min_deliverable: {
                title: "Paquete F1 E3",
                evidence_required: ["Concepto diseño", "Estudio viabilidad", "Propuesta final"]
            },
            daily_rhythm: {
                monday: { focus: "Ideación", task: "Alternativas industriales", evidence: "Bocetos" },
                tuesday: { focus: "Viabilidad", task: "Análisis técnico", evidence: "Informe técnico" },
                wednesday: { focus: "Escalabilidad", task: "Producción en serie", evidence: "Análisis serie" },
                thursday: { focus: "Selección", task: "Matriz decisión", evidence: "Propuesta" },
                friday: { focus: "Hito F1", task: "Validación concepto", evidence: "Hito superado" }
            },
            modules_focus: {
                DRP: { focus: "Diseño industrial", deliverable: "Concepto validado", enables: "Planos" },
                PUB: { focus: "Análisis proceso", deliverable: "Viabilidad producción", enables: "Planificación" }
            },
            coordination: { agreements: ["Enfoque industria 4.0"], adjustments: "" },
            risks: ["Diseño no escalable"]
        },
        {
            week_id: "E3-S03",
            date_from: "2026-04-06",
            date_to: "2026-04-10",
            eval: "E3",
            project: "Mobiliario industrial",
            phase_common: "F2",
            week_goal: "Crear planos industriales con tolerancias UNE y documentación para producción.",
            gate: {
                title: "Hito F2 E3",
                description: "Documentación industrial completa",
                conditions: ["Planos industriales", "Tolerancias UNE", "Despiece completo"]
            },
            min_deliverable: {
                title: "Paquete F2 E3",
                evidence_required: ["Planos industriales", "Lista tolerancias", "Despiece"]
            },
            daily_rhythm: {
                monday: { focus: "Planos", task: "Conjunto industrial", evidence: "Plano conjunto" },
                tuesday: { focus: "Tolerancias", task: "Añadir tolerancias UNE", evidence: "Plano tolerado" },
                wednesday: { focus: "Despiece", task: "Crear despiece", evidence: "Despiece completo" },
                thursday: { focus: "Revisión", task: "Verificar coherencia", evidence: "Planos OK" },
                friday: { focus: "Hito F2", task: "Validación industrial", evidence: "Hito superado" }
            },
            modules_focus: {
                RRC: { focus: "Planos industriales", deliverable: "Documentación completa", enables: "Fabricación" },
                DRP: { focus: "Especificaciones", deliverable: "Ficha técnica", enables: "Control calidad" }
            },
            coordination: { agreements: ["Normas UNE obligatorias"], adjustments: "" },
            risks: ["Tolerancias incorrectas"]
        },
        {
            week_id: "E3-S04",
            date_from: "2026-04-13",
            date_to: "2026-04-17",
            eval: "E3",
            project: "Mobiliario industrial",
            phase_common: "F3",
            week_goal: "Diseñar línea de proceso y mapa de riesgos PRL para producción industrial.",
            gate: {
                title: "Hito F3 E3",
                description: "Proceso industrial planificado con PRL",
                conditions: ["Línea proceso", "Mapa PRL", "Tiempos estimados"]
            },
            min_deliverable: {
                title: "Paquete F3 E3",
                evidence_required: ["Diagrama línea", "Mapa riesgos", "Hoja tiempos"]
            },
            daily_rhythm: {
                monday: { focus: "Línea", task: "Diseñar línea proceso", evidence: "Diagrama" },
                tuesday: { focus: "Estaciones", task: "Definir estaciones", evidence: "Lista estaciones" },
                wednesday: { focus: "PRL", task: "Análisis riesgos", evidence: "Mapa riesgos" },
                thursday: { focus: "Tiempos", task: "Estimar tiempos", evidence: "Hoja tiempos" },
                friday: { focus: "Hito F3", task: "Validación proceso", evidence: "Hito superado" }
            },
            modules_focus: {
                PUB: { focus: "Línea producción", deliverable: "Proceso industrial", enables: "Fabricación" },
                FAT: { focus: "Preparación maquinaria", deliverable: "Setup máquinas", enables: "Producción" }
            },
            coordination: { agreements: ["PRL validado por docente"], adjustments: "Semana Santa: ajustar planificación" },
            risks: ["Riesgos no identificados"]
        },
        {
            week_id: "E3-S05",
            date_from: "2026-04-20",
            date_to: "2026-04-24",
            eval: "E3",
            project: "Mobiliario industrial",
            phase_common: "F4",
            week_goal: "Fabricar prototipo industrial con maquinaria fija y control de calidad avanzado.",
            gate: {
                title: "Hito F4-A E3",
                description: "Prototipo fabricado con QC industrial",
                conditions: ["Piezas fabricadas", "QC dimensional", "Metrología OK"]
            },
            min_deliverable: {
                title: "Paquete F4-A E3",
                evidence_required: ["Piezas prototipo", "Informe QC", "Mediciones"]
            },
            daily_rhythm: {
                monday: { focus: "Preparación", task: "Setup maquinaria", evidence: "Máquinas OK" },
                tuesday: { focus: "Fabricación", task: "Mecanizado piezas", evidence: "Piezas" },
                wednesday: { focus: "Fabricación", task: "Completar mecanizado", evidence: "Todas piezas" },
                thursday: { focus: "QC", task: "Control dimensional", evidence: "Informe QC" },
                friday: { focus: "Hito F4-A", task: "Validación fabricación", evidence: "Hito superado" }
            },
            modules_focus: {
                FAT: { focus: "Mecanizado industrial", deliverable: "Piezas precisas", enables: "Montaje" },
                PMB: { focus: "Metrología", deliverable: "Control avanzado", enables: "Validación" }
            },
            coordination: { agreements: ["Tolerancia ±0.5mm"], adjustments: "" },
            risks: ["Precisión insuficiente"]
        },
        {
            week_id: "E3-S06",
            date_from: "2026-04-27",
            date_to: "2026-05-01",
            eval: "E3",
            project: "Mobiliario industrial",
            phase_common: "F4",
            week_goal: "Aplicar acabados industriales (tintado, barnizado) y completar ensamblaje.",
            gate: {
                title: "Hito F4-B E3",
                description: "Producto industrial acabado",
                conditions: ["Tintado aplicado", "Barnizado completo", "Producto ensamblado"]
            },
            min_deliverable: {
                title: "Paquete F4-B E3",
                evidence_required: ["Producto acabado", "Informe tintado", "Fotos proceso"]
            },
            daily_rhythm: {
                monday: { focus: "Preparación", task: "Lijado industrial", evidence: "Superficie OK" },
                tuesday: { focus: "Tintado", task: "Aplicar tinte", evidence: "Tinte aplicado" },
                wednesday: { focus: "Secado", task: "Curado tinte", evidence: "Secado OK" },
                thursday: { focus: "Barnizado", task: "Aplicar barniz", evidence: "Barniz aplicado" },
                friday: { focus: "Hito F4-B", task: "Verificación acabado", evidence: "Hito superado" }
            },
            modules_focus: {
                FAT: { focus: "Acabados industriales", deliverable: "Producto terminado", enables: "Entrega" },
                PUB: { focus: "Control proceso", deliverable: "Informe acabados", enables: "Trazabilidad" }
            },
            coordination: { agreements: ["Ventilación obligatoria"], adjustments: "" },
            risks: ["Acabado defectuoso"]
        },
        {
            week_id: "E3-S07",
            date_from: "2026-05-05",
            date_to: "2026-05-08",
            eval: "E3",
            project: "Mobiliario industrial",
            phase_common: "F5",
            week_goal: "Evaluar prototipo contra normativa y preparar informe de cumplimiento.",
            gate: {
                title: "Hito F5-A E3",
                description: "Evaluación normativa completada",
                conditions: ["Ensayos realizados", "Normativa verificada", "Informe cumplimiento"]
            },
            min_deliverable: {
                title: "Paquete F5-A E3",
                evidence_required: ["Informe ensayos", "Check normativa", "Propuesta mejoras"]
            },
            daily_rhythm: {
                monday: { focus: "Ensayos", task: "Pruebas funcionales", evidence: "Resultados" },
                tuesday: { focus: "Normativa", task: "Verificar UNE/ISO", evidence: "Checklist" },
                wednesday: { focus: "Informe", task: "Redactar informe", evidence: "Borrador" },
                thursday: { focus: "Mejoras", task: "Proponer mejoras", evidence: "Lista mejoras" },
                friday: { focus: "Hito F5-A", task: "Validación normativa", evidence: "Hito superado" }
            },
            modules_focus: {
                PMB: { focus: "Evaluación normativa", deliverable: "Informe cumplimiento", enables: "Certificación" },
                DRP: { focus: "Mejoras producto", deliverable: "Propuestas", enables: "Iteración" }
            },
            coordination: { agreements: ["Normativa UNE muebles"], adjustments: "Viernes festivo: adelantar gate" },
            risks: ["Incumplimiento normativo"]
        },
        {
            week_id: "E3-S08",
            date_from: "2026-05-11",
            date_to: "2026-05-11",
            eval: "E3",
            project: "Mobiliario industrial",
            phase_common: "F5",
            week_goal: "Cierre y defensa del proyecto E3: presentación final y entrega documental.",
            gate: {
                title: "Hito Final E3",
                description: "Proyecto industrial entregado y presentado",
                conditions: ["Presentación realizada", "Repositorio cerrado", "Proyecto RA6 DJK entregado"]
            },
            min_deliverable: {
                title: "Entrega Final E3",
                evidence_required: ["Dossier completo PDF", "Presentación", "Producto físico", "Proyecto digitalización"]
            },
            daily_rhythm: {
                monday: { focus: "Cierre", task: "Presentación + Entrega final", evidence: "Proyecto entregado" },
                tuesday: { focus: "---", task: "---", evidence: "---" },
                wednesday: { focus: "---", task: "---", evidence: "---" },
                thursday: { focus: "---", task: "---", evidence: "---" },
                friday: { focus: "---", task: "---", evidence: "---" }
            },
            modules_focus: {
                DRP: { focus: "Presentación proyecto", deliverable: "Comunicación efectiva", enables: "Evaluación final" },
                DJK: { focus: "Archivo digital + RA6", deliverable: "Repositorio cerrado + Proyecto THD", enables: "Trazabilidad" }
            },
            coordination: { agreements: ["Entrega 11/05 - 23:59"], adjustments: "Cierre del curso" },
            risks: ["Presentación no preparada", "Documentación incompleta"]
        }
    ],

    // ============================================
    // FICHAS DIARIAS (ejemplo: 2026-01-21)
    // ============================================
    days: [
        {
            date: "2026-01-08",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S01",
            project: "Taburete ergonómico",
            phase_common: "F0",
            day_type: "aula",
            leader_module: "DRP",
            modules_active: ["DRP", "DJK"],
            duration: "5 sesiones",
            location: "Aula",
            learning_intent: {
                purpose: "Lanzar el proyecto E2 comprendiendo el brief, los requisitos ergonómicos y configurando el espacio de trabajo digital.",
                success_criteria: [
                    "Encargo del taburete comprendido y firmado",
                    "Lista de requisitos ergonómicos básicos identificada",
                    "Repositorio de equipo para E2 creado y compartido"
                ],
                common_mistakes: [
                    "No anotar las restricciones de dimensiones máximas",
                    "Confundir ergonomía con estética únicamente",
                    "Mala nomenclatura en la carpeta raíz del repositorio"
                ],
                teacher_prompt: {
                    question: "¿Cuáles son las 3 medidas antropomórficas clave para este taburete?",
                    check: "Verificar la firma del brief y la creación de la carpeta E2"
                }
            },
            min_deliverable: {
                title: "Check de Lanzamiento E2",
                checklist: [
                    "Encargo firmado (digital o físico)",
                    "Carpeta de equipo E2 activa",
                    "Documento inicial de requisitos"
                ],
                format: "PDF + Carpeta Cloud",
                naming: "E2_S01_Equipo??_Lanzamiento",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F0/",
                evidence_required: [
                    "Captura del repositorio E2",
                    "Foto del brief firmado"
                ]
            },
            dod: [
                "Repositorio E2 accesible por todo el equipo",
                "Encargo leído y aceptado oficialmente",
                "Cronograma de la evaluación revisado"
            ],
            gate_rule: "Sin la comprensión del brief F0, no se pueden realizar los estudios de F1 correctamente.",
            modules_detail: {
                DRP: {
                    micro_goal: "Analizar brief y requisitos ergonómicos",
                    tasks: [
                        "Lectura colectiva del brief",
                        "Identificar variables de diseño (altura, asiento)",
                        "Definir el usuario tipo"
                    ],
                    deliverable: "Lista de requisitos",
                    evidence: ["DRP_requisitos.pdf"],
                    ra_ce: "RA4: Propuestas de diseño"
                },
                DJK: {
                    micro_goal: "Configurar entorno digital E2",
                    tasks: [
                        "Crear carpeta compartida E2",
                        "Añadir miembros del equipo",
                        "Subir plantilla de registro"
                    ],
                    deliverable: "Repositorio E2",
                    evidence: ["Captura nube"],
                    ra_ce: "RA2-3: Gestión digital"
                }
            },
            safety: {
                applies: false,
                risk_main: "Bajo (aula)",
                epi_required: [],
                prl_checks: []
            },
            differentiation: {
                base: {
                    description: "Comprensión del proyecto y repo listo",
                    evidence: "Repo + Encargo"
                },
                support: {
                    trigger: "Si hay dudas con la nube",
                    action: "Apoyo técnico en la creación de carpetas compartidas"
                },
                extension: {
                    trigger: "Si terminan rápido",
                    action: "Empezar búsqueda de referentes ergonómicos (Moodboard E2)"
                }
            },
            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },
        {
            date: "2026-01-21",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S03",
            project: "Taburete ergonómico",

            // Identificación
            phase_common: "F2",
            day_type: "mixta", // Aula / Taller / Mixta / Revisión / Entrega
            leader_module: "RRC",
            modules_active: ["RRC", "DRP", "PUB", "DJK"],
            duration: "5 sesiones",
            location: "Aula CAD + Taller (revisión)",

            // B. INTENCIÓN DIDÁCTICA
            learning_intent: {
                purpose: "Definir el conjunto acotado y generar la lista de piezas coherente para habilitar la planificación de proceso.",
                success_criteria: [
                    "Plano conjunto en PDF con 5+ medidas clave acotadas",
                    "Lista de piezas (mín. 6 piezas) con dimensiones coherentes con plano",
                    "Decisión de tipo de unión documentada con 1 justificación técnica"
                ],
                common_mistakes: [
                    "Plano y lista de piezas no coinciden en dimensiones",
                    "Decisión técnica sin criterio verificable (solo 'porque queda bien')",
                    "Falta de acotación en uniones críticas"
                ],
                teacher_prompt: {
                    question: "¿Qué decisión tomaste sobre la unión y cómo la verificarías en taller?",
                    check: "Comprobar que medida X del plano = medida X de la lista"
                }
            },

            // C. ENTREGABLE MÍNIMO TRANSVERSAL
            min_deliverable: {
                title: "Paquete F2 mínimo del día",
                checklist: [
                    "Plano conjunto exportado a PDF",
                    "Lista de piezas en hoja de cálculo",
                    "Decisión de unión registrada (tipo + justificación)"
                ],
                format: "PDF + XLSX",
                naming: "E2_S03_F2_Equipo??_PaqueteMinimo",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F2/",
                evidence_required: [
                    "1 PDF de plano",
                    "1 captura de lista de piezas"
                ]
            },

            // D. DEFINITION OF DONE (3 condiciones)
            dod: [
                "PDF del plano publicado con nomenclatura correcta",
                "Lista de piezas cargada y coherente con el plano",
                "Decisión técnica registrada con al menos 1 criterio verificable"
            ],
            gate_rule: "Si no se cumple DoD, mañana no se puede arrancar F3 (ruta de proceso)",

            // E. DEPENDENCIAS ENTRE MÓDULOS
            dependencies: {
                today_depends_on: [
                    "Bocetos aprobados de F1",
                    "Dimensiones generales definidas"
                ],
                tomorrow_blocked_if: [
                    "Sin RRC (plano conjunto) → FAT no puede preparar corte",
                    "Sin DRP (decisión unión) → PMB no puede planificar ensayo",
                    "Sin PUB (lista piezas) → no hay ruta de proceso"
                ]
            },

            // F. ACTIVIDAD POR MÓDULOS
            modules_detail: {
                RRC: {
                    micro_goal: "Generar plano de conjunto acotado",
                    tasks: [
                        "Dibujar vistas principales en CAD",
                        "Acotar dimensiones críticas (5+)",
                        "Exportar a PDF con cajetín"
                    ],
                    deliverable: "Plano conjunto PDF",
                    evidence: ["RRC_plano_conjunto.pdf"],
                    ra_ce: "RA3-4: Documentación gráfica CAD"
                },
                DRP: {
                    micro_goal: "Documentar decisión técnica de unión",
                    tasks: [
                        "Elegir tipo de unión (espiga/caja, cola milano, tornillo...)",
                        "Justificar con criterio técnico",
                        "Registrar en ficha de decisión"
                    ],
                    deliverable: "Ficha decisión técnica",
                    evidence: ["DRP_decision_union.pdf"],
                    ra_ce: "RA4-5: Propuestas y especificaciones"
                },
                PUB: {
                    micro_goal: "Coherencia lista de piezas/material",
                    tasks: [
                        "Crear lista de piezas numerada",
                        "Verificar dimensiones vs plano",
                        "Identificar material por pieza"
                    ],
                    deliverable: "Lista de piezas",
                    evidence: ["PUB_lista_piezas.xlsx"],
                    ra_ce: "RA5: Procesos y transformación"
                },
                DJK: {
                    micro_goal: "Publicar y controlar documentación",
                    tasks: [
                        "Subir archivos a repositorio",
                        "Verificar nomenclatura",
                        "Actualizar índice documental"
                    ],
                    deliverable: "Repositorio actualizado",
                    evidence: ["Captura repositorio"],
                    ra_ce: "RA2-3: Cloud y gestión"
                }
            },

            // G. SEGURIDAD, PRL Y QC (si hay taller)
            safety: {
                applies: false, // Este día es mayormente aula
                risk_main: "Bajo (aula CAD)",
                epi_required: [],
                prl_checks: [],
                qc_check: {
                    measure: "Coherencia dimensional plano-lista",
                    tolerance: "±0mm (deben coincidir exactamente)",
                    evidence: "Captura comparativa"
                }
            },

            // H. DIFERENCIACIÓN (Base / Apoyo / Extensión)
            differentiation: {
                base: {
                    description: "Plano conjunto + lista de piezas básica",
                    evidence: "PDF plano + XLSX lista (6 piezas mín)"
                },
                support: {
                    description: "Plano conjunto simplificado pero completo en medidas clave",
                    trigger: "Si el equipo lleva retraso en CAD",
                    action: "Aceptar croquis manual digitalizado con medidas"
                },
                extension: {
                    description: "Añadir detalle crítico de unión + tolerancias dimensionales",
                    trigger: "Si el equipo termina antes",
                    action: "Incluir vista de detalle a escala mayor + indicar tolerancias"
                }
            },

            // I. REGISTRO DOCENTE (se rellena durante/después)
            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === DÍA DE TALLER (EJEMPLO) ===
        {
            date: "2026-02-04",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S05",
            project: "Taburete ergonómico",

            phase_common: "F4",
            day_type: "taller",
            leader_module: "FAT",
            modules_active: ["FAT", "PMB", "PUB"],
            duration: "5 sesiones",
            location: "Taller de carpintería",

            learning_intent: {
                purpose: "Fabricar las piezas principales del taburete aplicando técnicas de mecanizado portátil con control de calidad.",
                success_criteria: [
                    "Mínimo 4 piezas cortadas según dimensiones del plano (±1mm)",
                    "Comprobación de escuadra en todas las piezas",
                    "Registro fotográfico de medición crítica"
                ],
                common_mistakes: [
                    "No verificar medida antes de cortar (error irreversible)",
                    "Olvidar marcar cara/canto de referencia",
                    "No usar guía de corte (corte irregular)"
                ],
                teacher_prompt: {
                    question: "¿Has verificado la medida antes de cortar? ¿Dónde está tu cara de referencia?",
                    check: "Medir pieza con flexómetro y comprobar escuadra"
                }
            },

            min_deliverable: {
                title: "Piezas F4 del día + QC",
                checklist: [
                    "Piezas cortadas y marcadas",
                    "Medida crítica verificada",
                    "Foto de comprobación con flexómetro"
                ],
                format: "Piezas físicas + JPG",
                naming: "E2_S05_F4_Equipo??_QC_Dia",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F4/QC/",
                evidence_required: [
                    "1 foto de piezas con regla/flexómetro visible",
                    "1 check de QC firmado"
                ]
            },

            dod: [
                "Mínimo 4 piezas cortadas según plano",
                "Escuadra verificada en 100% de las piezas",
                "Foto de QC subida al repositorio"
            ],
            gate_rule: "Sin piezas verificadas, no se puede avanzar a ensamblado",

            dependencies: {
                today_depends_on: [
                    "Planos de fabricación (F2)",
                    "Hoja de ruta (F3)",
                    "Material acopiado y verificado"
                ],
                tomorrow_blocked_if: [
                    "Sin piezas cortadas → no hay ensamblado",
                    "Sin QC → no se sabe si las piezas son válidas"
                ]
            },

            modules_detail: {
                FAT: {
                    micro_goal: "Cortar piezas principales con precisión",
                    tasks: [
                        "Trazar piezas según plano",
                        "Cortar con sierra/ingletadora",
                        "Verificar medidaslat y escuadra"
                    ],
                    deliverable: "Piezas cortadas",
                    evidence: ["Foto piezas", "Check QC"],
                    ra_ce: "RA4-5-6: Mecanizado y montaje"
                },
                PMB: {
                    micro_goal: "Control de calidad de piezas",
                    tasks: [
                        "Medir dimensiones críticas",
                        "Verificar escuadra",
                        "Registrar en hoja QC"
                    ],
                    deliverable: "Hoja QC completada",
                    evidence: ["QC_check.pdf"],
                    ra_ce: "RA5: Evaluación prototipos"
                },
                PUB: {
                    micro_goal: "Seguimiento de proceso",
                    tasks: [
                        "Registrar tiempos de operación",
                        "Identificar desviaciones",
                        "Actualizar hoja de ruta"
                    ],
                    deliverable: "Hoja ruta actualizada",
                    evidence: ["PUB_ruta_actualizada.pdf"],
                    ra_ce: "RA5: Procesos de transformación"
                }
            },

            // SEGURIDAD Y PRL (CRÍTICO EN TALLER)
            safety: {
                applies: true,
                risk_main: "Alto - Maquinaria de corte",
                epi_required: [
                    { item: "Gafas de protección", icon: "🥽", mandatory: true },
                    { item: "Protección auditiva", icon: "🎧", mandatory: true },
                    { item: "Calzado de seguridad", icon: "👞", mandatory: true },
                    { item: "Guantes (solo manipulación)", icon: "🧤", mandatory: false }
                ],
                prl_checks: [
                    "Verificar resguardos de sierra activos",
                    "Comprobar aspiración conectada",
                    "Zona de trabajo despejada",
                    "Permiso de máquina otorgado por docente"
                ],
                stop_rule: "Si ves algo raro en la máquina o te sientes inseguro: PARA Y AVISA",
                qc_check: {
                    measure: "Longitud de pata",
                    target: "420mm",
                    tolerance: "±1mm",
                    method: "Flexómetro + escuadra",
                    evidence: "Foto con flexómetro visible"
                }
            },

            differentiation: {
                base: {
                    description: "4 piezas cortadas + 1 medida verificada",
                    evidence: "Piezas + foto QC"
                },
                support: {
                    description: "2 piezas cortadas con asistencia + verificación conjunta",
                    trigger: "Si el equipo tiene dificultades técnicas",
                    action: "Docente asiste en primeros cortes, alumno verifica"
                },
                extension: {
                    description: "6 piezas + acabado de aristas + tolerancia ±0.5mm",
                    trigger: "Si el equipo va adelantado",
                    action: "Matar aristas y refinar acabado"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === SEMANA E2-S03: LUNES 19 ENERO ===
        {
            date: "2026-01-19",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S03",
            project: "Taburete ergonómico",
            phase_common: "F2",
            day_type: "aula",
            leader_module: "DRP",
            modules_active: ["DRP", "RRC", "DJK"],
            duration: "5 sesiones",
            location: "Aula",

            learning_intent: {
                purpose: "Arrancar la semana F2 revisando los bocetos de F1 y asignando roles para la documentación técnica.",
                success_criteria: [
                    "Cada equipo tiene claro qué boceto/alternativa se desarrolla",
                    "Roles asignados: quién hace plano, quién lista piezas, quién decisión técnica",
                    "Check de arranque firmado por todos los miembros"
                ],
                common_mistakes: [
                    "No revisar los bocetos antes de empezar (trabajar sobre propuesta no validada)",
                    "Roles ambiguos → nadie sabe qué entregar",
                    "Olvidar crear la estructura de carpetas en repositorio"
                ],
                teacher_prompt: {
                    question: "¿Cuál es el boceto aprobado y quién hace cada entregable?",
                    check: "Ver el check de arranque con nombres y roles"
                }
            },

            min_deliverable: {
                title: "Check de arranque semanal",
                checklist: [
                    "Boceto seleccionado identificado",
                    "Roles asignados por escrito",
                    "Estructura de carpetas creada en repositorio"
                ],
                format: "PDF",
                naming: "E2_S03_Equipo??_CheckArranque",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F2/",
                evidence_required: [
                    "1 check de arranque escaneado/foto"
                ]
            },

            dod: [
                "Boceto aprobado de F1 identificado y accesible",
                "Roles de la semana asignados por escrito",
                "Carpeta F2 creada en el repositorio"
            ],
            gate_rule: "Sin check de arranque, el equipo no tiene dirección clara para la semana",

            dependencies: {
                today_depends_on: [
                    "Alternativas de F1 evaluadas",
                    "Matriz de decisión completada"
                ],
                tomorrow_blocked_if: [
                    "Sin boceto claro → no se puede empezar plano",
                    "Sin roles → trabajo duplicado o vacíos"
                ]
            },

            modules_detail: {
                DRP: {
                    micro_goal: "Validar propuesta seleccionada y asignar roles",
                    tasks: [
                        "Revisar matriz de decisión de F1",
                        "Confirmar boceto ganador",
                        "Distribuir tareas de documentación"
                    ],
                    deliverable: "Check de arranque",
                    evidence: ["DRP_check_arranque.pdf"],
                    ra_ce: "RA4-5: Propuestas y especificaciones"
                },
                RRC: {
                    micro_goal: "Preparar entorno CAD para plano",
                    tasks: [
                        "Abrir plantilla CAD",
                        "Configurar escalas y unidades",
                        "Crear capas básicas"
                    ],
                    deliverable: "Archivo CAD base",
                    evidence: ["RRC_base.dwg"],
                    ra_ce: "RA3: Documentación CAD"
                },
                DJK: {
                    micro_goal: "Crear estructura documental",
                    tasks: [
                        "Crear carpeta F2 en repositorio",
                        "Definir nomenclatura de archivos",
                        "Preparar índice documental"
                    ],
                    deliverable: "Estructura de carpetas",
                    evidence: ["Captura estructura"],
                    ra_ce: "RA2-3: Cloud y gestión"
                }
            },

            safety: {
                applies: false,
                risk_main: "Bajo (aula)",
                epi_required: [],
                prl_checks: []
            },

            differentiation: {
                base: {
                    description: "Check de arranque con roles básicos",
                    evidence: "PDF check firmado"
                },
                support: {
                    trigger: "Si el equipo no tiene claro el boceto",
                    action: "Docente ayuda a revisar la matriz de decisión"
                },
                extension: {
                    trigger: "Si el equipo termina rápido",
                    action: "Empezar boceto a escala del plano general"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === SEMANA E2-S03: MARTES 20 ENERO ===
        {
            date: "2026-01-20",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S03",
            project: "Taburete ergonómico",
            phase_common: "F2",
            day_type: "aula",
            leader_module: "RRC",
            modules_active: ["RRC", "PUB", "DJK"],
            duration: "5 sesiones",
            location: "Aula CAD",

            learning_intent: {
                purpose: "Generar el plano de conjunto en CAD con las vistas principales y comenzar la lista de piezas.",
                success_criteria: [
                    "Plano con al menos 2 vistas principales dibujadas",
                    "3+ cotas críticas colocadas",
                    "Lista de piezas iniciada (mínimo 3 piezas)"
                ],
                common_mistakes: [
                    "Dibujar sin escala definida (todo descuadrado)",
                    "Olvidar cara/canto de referencia en el dibujo",
                    "Lista de piezas en papel suelto (sin formato)"
                ],
                teacher_prompt: {
                    question: "¿Qué escala estás usando y dónde está tu origen de referencia?",
                    check: "Verificar que las cotas sean coherentes con el boceto"
                }
            },

            min_deliverable: {
                title: "Avance plano + lista",
                checklist: [
                    "2 vistas principales en CAD",
                    "3 cotas críticas colocadas",
                    "Lista de piezas iniciada en hoja de cálculo"
                ],
                format: "DWG + XLSX",
                naming: "E2_S03_Equipo??_AvancePlano",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F2/",
                evidence_required: [
                    "Captura del CAD",
                    "Captura de la hoja de cálculo"
                ]
            },

            dod: [
                "Plano con 2+ vistas y 3+ cotas",
                "Lista de piezas con 3+ entradas",
                "Archivos guardados en repositorio"
            ],
            gate_rule: "Sin avance de plano, la semana se retrasa irremediablemente",

            dependencies: {
                today_depends_on: [
                    "Check de arranque del lunes",
                    "Boceto aprobado con medidas generales"
                ],
                tomorrow_blocked_if: [
                    "Sin vistas principales → no hay base para detalles",
                    "Sin cotas → dimensiones ambiguas"
                ]
            },

            modules_detail: {
                RRC: {
                    micro_goal: "Dibujar vistas principales del conjunto",
                    tasks: [
                        "Dibujar planta del taburete",
                        "Dibujar alzado frontal",
                        "Colocar cotas de altura y anchura"
                    ],
                    deliverable: "Plano CAD en progreso",
                    evidence: ["RRC_avance_plano.dwg"],
                    ra_ce: "RA3-4: Documentación CAD"
                },
                PUB: {
                    micro_goal: "Iniciar lista de piezas",
                    tasks: [
                        "Identificar piezas del boceto",
                        "Crear hoja de cálculo con formato",
                        "Añadir primeras 3 piezas con dimensiones"
                    ],
                    deliverable: "Lista de piezas parcial",
                    evidence: ["PUB_lista_piezas.xlsx"],
                    ra_ce: "RA5: Procesos"
                },
                DJK: {
                    micro_goal: "Control de versiones",
                    tasks: [
                        "Subir archivos del día",
                        "Verificar nomenclatura",
                        "Registrar versión en índice"
                    ],
                    deliverable: "Repositorio actualizado",
                    evidence: ["Captura repositorio"],
                    ra_ce: "RA2-3: Cloud y gestión"
                }
            },

            safety: {
                applies: false,
                risk_main: "Bajo (aula CAD)",
                epi_required: [],
                prl_checks: []
            },

            differentiation: {
                base: {
                    description: "2 vistas + 3 cotas + 3 piezas en lista",
                    evidence: "DWG + XLSX"
                },
                support: {
                    trigger: "Si el equipo tiene dificultades con CAD",
                    action: "Docente asiste en configuración inicial"
                },
                extension: {
                    trigger: "Si el equipo va avanzado",
                    action: "Añadir vista lateral y más cotas"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === SEMANA E2-S03: JUEVES 22 ENERO ===
        {
            date: "2026-01-22",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S03",
            project: "Taburete ergonómico",
            phase_common: "F2",
            day_type: "mixta",
            leader_module: "DRP",
            modules_active: ["DRP", "RRC", "PUB", "DJK"],
            duration: "5 sesiones",
            location: "Aula + Revisión en taller",

            learning_intent: {
                purpose: "Integrar documentación: verificar que el plano y la lista de piezas sean coherentes y preparar el paquete preliminar.",
                success_criteria: [
                    "100% de las piezas de la lista coinciden con el plano",
                    "Decisión técnica de unión documentada",
                    "Paquete preliminar exportado a PDF"
                ],
                common_mistakes: [
                    "Lista con medidas diferentes al plano",
                    "Decisión de unión sin justificación",
                    "Olvidar exportar los archivos finales"
                ],
                teacher_prompt: {
                    question: "¿Has verificado que cada medida de la lista coincide con el plano?",
                    check: "Comparar al menos 3 medidas críticas entre plano y lista"
                }
            },

            min_deliverable: {
                title: "Paquete F2 preliminar",
                checklist: [
                    "Plano conjunto completo exportado a PDF",
                    "Lista de piezas completa",
                    "Ficha de decisión técnica"
                ],
                format: "PDF + XLSX + PDF",
                naming: "E2_S03_Equipo??_PaquetePreliminar",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F2/",
                evidence_required: [
                    "PDF plano",
                    "XLSX lista",
                    "PDF decisión"
                ]
            },

            dod: [
                "Coherencia 100% lista-plano verificada",
                "Decisión técnica con justificación escrita",
                "Paquete preliminar subido al repositorio"
            ],
            gate_rule: "Sin paquete preliminar, mañana no hay revisión posible",

            dependencies: {
                today_depends_on: [
                    "Avance de plano del martes/miércoles",
                    "Lista de piezas en progreso"
                ],
                tomorrow_blocked_if: [
                    "Sin coherencia → hay que rehacer documentación",
                    "Sin decisión técnica → no se sabe cómo unir"
                ]
            },

            modules_detail: {
                DRP: {
                    micro_goal: "Documentar decisión técnica de unión",
                    tasks: [
                        "Elegir tipo de unión para el taburete",
                        "Escribir justificación técnica",
                        "Crear ficha de decisión"
                    ],
                    deliverable: "Ficha decisión técnica",
                    evidence: ["DRP_decision_union.pdf"],
                    ra_ce: "RA4-5: Propuestas"
                },
                RRC: {
                    micro_goal: "Completar y exportar plano",
                    tasks: [
                        "Añadir cotas faltantes",
                        "Completar cajetín",
                        "Exportar a PDF"
                    ],
                    deliverable: "Plano conjunto PDF",
                    evidence: ["RRC_plano_conjunto.pdf"],
                    ra_ce: "RA3-4: Documentación CAD"
                },
                PUB: {
                    micro_goal: "Verificar coherencia lista-plano",
                    tasks: [
                        "Comparar cada dimensión",
                        "Corregir discrepancias",
                        "Completar lista de piezas"
                    ],
                    deliverable: "Lista verificada",
                    evidence: ["PUB_lista_verificada.xlsx"],
                    ra_ce: "RA5: Procesos"
                },
                DJK: {
                    micro_goal: "Preparar paquete integrado",
                    tasks: [
                        "Compilar todos los archivos",
                        "Verificar nomenclatura",
                        "Crear índice del paquete"
                    ],
                    deliverable: "Paquete preliminar",
                    evidence: ["DJK_indice_paquete.pdf"],
                    ra_ce: "RA2-3: Cloud y gestión"
                }
            },

            safety: {
                applies: false,
                risk_main: "Bajo (aula)",
                epi_required: [],
                prl_checks: []
            },

            differentiation: {
                base: {
                    description: "Paquete preliminar completo",
                    evidence: "3 archivos subidos"
                },
                support: {
                    trigger: "Si hay muchas discrepancias lista-plano",
                    action: "Priorizar corrección de medidas críticas"
                },
                extension: {
                    trigger: "Si todo está coherente",
                    action: "Añadir detalle de unión a escala mayor"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === SEMANA E2-S03: VIERNES 23 ENERO (GATE) ===
        {
            date: "2026-01-23",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S03",
            project: "Taburete ergonómico",
            phase_common: "F2",
            day_type: "revision",
            leader_module: "DJK",
            modules_active: ["DJK", "DRP", "RRC", "PUB"],
            duration: "5 sesiones",
            location: "Aula + Revisión docente",

            learning_intent: {
                purpose: "Cerrar la fase F2 validando el Gate: publicar documentación final y verificar que todo está listo para F3.",
                success_criteria: [
                    "Paquete F2 final publicado en repositorio",
                    "Gate F2 superado (plano + lista + decisión)",
                    "Feedback docente registrado"
                ],
                common_mistakes: [
                    "Subir archivos sin verificar última versión",
                    "Olvidar el feedback docente en la ficha",
                    "No comunicar bloqueos para la siguiente semana"
                ],
                teacher_prompt: {
                    question: "¿Está todo listo para que FAT pueda empezar a cortar la semana que viene?",
                    check: "Revisar que el paquete tenga los 3 entregables mínimos"
                }
            },

            min_deliverable: {
                title: "Paquete F2 Final + Gate",
                checklist: [
                    "Plano conjunto PDF (versión final)",
                    "Lista de piezas XLSX (versión final)",
                    "Decisión técnica PDF (versión final)",
                    "Check de Gate F2 firmado"
                ],
                format: "PDF + XLSX + PDF + Check",
                naming: "E2_S03_Equipo??_PaqueteF2_FINAL",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F2/FINAL/",
                evidence_required: [
                    "Carpeta FINAL con 3 archivos",
                    "Check de Gate firmado"
                ]
            },

            dod: [
                "Paquete F2 publicado en carpeta FINAL",
                "Gate F2 validado por docente",
                "Bloqueos (si los hay) comunicados"
            ],
            gate_rule: "Sin Gate F2, la semana E2-S04 (F3) no puede arrancar correctamente",

            dependencies: {
                today_depends_on: [
                    "Paquete preliminar del jueves",
                    "Correcciones aplicadas"
                ],
                tomorrow_blocked_if: [
                    "Sin plano final → FAT no puede trabajar",
                    "Sin lista → no hay acopio de material",
                    "Sin decisión unión → no hay plan de montaje"
                ]
            },

            modules_detail: {
                DJK: {
                    micro_goal: "Publicar y validar paquete final",
                    tasks: [
                        "Crear carpeta FINAL",
                        "Mover versiones finales",
                        "Generar índice documental"
                    ],
                    deliverable: "Repositorio con FINAL",
                    evidence: ["Captura carpeta FINAL"],
                    ra_ce: "RA2-3: Cloud y gestión"
                },
                DRP: {
                    micro_goal: "Revisar coherencia global",
                    tasks: [
                        "Verificar ficha de decisión",
                        "Confirmar que todo es fabricable",
                        "Firmar check de Gate"
                    ],
                    deliverable: "Check de Gate",
                    evidence: ["DRP_check_gate.pdf"],
                    ra_ce: "RA4-5: Propuestas"
                },
                RRC: {
                    micro_goal: "Entregar plano definitivo",
                    tasks: [
                        "Aplicar correcciones finales",
                        "Exportar versión FINAL",
                        "Archivar en carpeta correcta"
                    ],
                    deliverable: "Plano FINAL",
                    evidence: ["RRC_plano_FINAL.pdf"],
                    ra_ce: "RA3-4: Documentación CAD"
                },
                PUB: {
                    micro_goal: "Entregar lista definitiva",
                    tasks: [
                        "Aplicar correcciones finales",
                        "Exportar versión FINAL",
                        "Verificar formato"
                    ],
                    deliverable: "Lista FINAL",
                    evidence: ["PUB_lista_FINAL.xlsx"],
                    ra_ce: "RA5: Procesos"
                }
            },

            safety: {
                applies: false,
                risk_main: "Bajo (revisión)",
                epi_required: [],
                prl_checks: []
            },

            differentiation: {
                base: {
                    description: "Paquete FINAL con Gate superado",
                    evidence: "3 archivos + check Gate"
                },
                support: {
                    trigger: "Si falta algún documento crítico",
                    action: "Docente ayuda a priorizar y completar lo mínimo"
                },
                extension: {
                    trigger: "Si todo está perfecto",
                    action: "Empezar boceto de hoja de proceso para F3"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === SEMANA E2-S05: LUNES 2 FEBRERO (INICIO F4) ===
        {
            date: "2026-02-02",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S05",
            project: "Taburete ergonómico",
            phase_common: "F4",
            day_type: "mixta",
            leader_module: "FAT",
            modules_active: ["FAT", "PMB", "PUB"],
            duration: "5 sesiones",
            location: "Taller + Aula (prep)",

            learning_intent: {
                purpose: "Arrancar la fabricación: verificar material acopiado, revisar hoja de ruta y preparar las primeras operaciones de trazado.",
                success_criteria: [
                    "Material verificado y marcado (cara/canto de referencia)",
                    "Hoja de ruta revisada y entendida por el equipo",
                    "Primeras piezas trazadas listas para corte"
                ],
                common_mistakes: [
                    "No verificar el material antes de empezar",
                    "Olvidar marcar cara/canto de referencia",
                    "Trazar sin consultar el plano"
                ],
                teacher_prompt: {
                    question: "¿Has verificado el material y dónde están tus caras de referencia?",
                    check: "Ver marcas en el tablero y comparar con plano"
                }
            },

            min_deliverable: {
                title: "Arranque F4 + Trazado",
                checklist: [
                    "Material verificado (sin defectos críticos)",
                    "Cara/canto de referencia marcados",
                    "Al menos 2 piezas trazadas"
                ],
                format: "Físico + Foto",
                naming: "E2_S05_Equipo??_ArranqueF4",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F4/",
                evidence_required: [
                    "Foto del material marcado",
                    "Foto de piezas trazadas"
                ]
            },

            dod: [
                "Material aceptado y marcado",
                "Hoja de ruta entendida por todos",
                "2+ piezas trazadas listas para corte"
            ],
            gate_rule: "Sin trazado correcto, no se puede cortar mañana",

            dependencies: {
                today_depends_on: [
                    "Planos F2 completos",
                    "Material acopiado (F3)",
                    "Hoja de ruta aprobada"
                ],
                tomorrow_blocked_if: [
                    "Sin trazado → corte a ciegas (riesgo de error)",
                    "Sin verificación material → defectos ocultos"
                ]
            },

            modules_detail: {
                FAT: {
                    micro_goal: "Verificar material y trazar primeras piezas",
                    tasks: [
                        "Inspeccionar tableros/madera",
                        "Marcar cara y canto de referencia",
                        "Trazar piezas según plano"
                    ],
                    deliverable: "Material trazado",
                    evidence: ["Foto material", "Foto trazado"],
                    ra_ce: "RA2-3: Selección y trazado"
                },
                PMB: {
                    micro_goal: "Preparar control de calidad",
                    tasks: [
                        "Crear hoja de QC",
                        "Definir medidas a verificar",
                        "Preparar instrumentos"
                    ],
                    deliverable: "Hoja QC preparada",
                    evidence: ["PMB_hoja_qc.pdf"],
                    ra_ce: "RA5: Evaluación"
                },
                PUB: {
                    micro_goal: "Revisar y actualizar hoja de ruta",
                    tasks: [
                        "Revisar secuencia de operaciones",
                        "Estimar tiempos del día",
                        "Identificar cuellos de botella"
                    ],
                    deliverable: "Hoja ruta anotada",
                    evidence: ["PUB_ruta_dia1.pdf"],
                    ra_ce: "RA5: Procesos"
                }
            },

            safety: {
                applies: true,
                risk_main: "Medio - Herramientas manuales",
                epi_required: [
                    { item: "Gafas de protección", icon: "🥽", mandatory: true },
                    { item: "Calzado de seguridad", icon: "👞", mandatory: true }
                ],
                prl_checks: [
                    "Herramientas de trazado en buen estado",
                    "Zona de trabajo ordenada",
                    "Acceso a planos disponible"
                ],
                stop_rule: "Si el material tiene defectos graves, avisar antes de proceder"
            },

            differentiation: {
                base: {
                    description: "Material verificado + 2 piezas trazadas",
                    evidence: "2 fotos"
                },
                support: {
                    trigger: "Si hay dificultad con el trazado",
                    action: "Docente demuestra técnica en una pieza"
                },
                extension: {
                    trigger: "Si van adelantados",
                    action: "Trazar todas las piezas del primer subconjunto"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === SEMANA E2-S05: MARTES 3 FEBRERO ===
        {
            date: "2026-02-03",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S05",
            project: "Taburete ergonómico",
            phase_common: "F4",
            day_type: "taller",
            leader_module: "FAT",
            modules_active: ["FAT", "PMB", "PUB"],
            duration: "5 sesiones",
            location: "Taller de carpintería",

            learning_intent: {
                purpose: "Ejecutar los primeros cortes de piezas principales con verificación de calidad en cada operación.",
                success_criteria: [
                    "Mínimo 2 piezas cortadas correctamente",
                    "Escuadra verificada en cada pieza",
                    "Registro de medidas en hoja QC"
                ],
                common_mistakes: [
                    "Cortar sin verificar medida primero",
                    "No usar guía de corte (cortes irregulares)",
                    "Olvidar verificar escuadra después del corte"
                ],
                teacher_prompt: {
                    question: "¿Has medido antes de cortar? ¿Qué tolerancia tienes?",
                    check: "Ver medición con flexómetro antes del corte"
                }
            },

            min_deliverable: {
                title: "Primeras piezas cortadas + QC",
                checklist: [
                    "2+ piezas cortadas según plano",
                    "Escuadra verificada",
                    "Medidas registradas en hoja QC"
                ],
                format: "Piezas + PDF",
                naming: "E2_S05_Equipo??_Corte_Dia1",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F4/QC/",
                evidence_required: [
                    "Foto piezas cortadas",
                    "Hoja QC parcial"
                ]
            },

            dod: [
                "2+ piezas cortadas dentro de tolerancia",
                "100% escuadra verificada",
                "Hoja QC actualizada"
            ],
            gate_rule: "Piezas fuera de tolerancia se reprocesan o descartan",

            dependencies: {
                today_depends_on: [
                    "Trazado del lunes",
                    "Material verificado",
                    "Permiso de máquina"
                ],
                tomorrow_blocked_if: [
                    "Sin piezas válidas → no hay avance",
                    "Error sistemático → revisar proceso"
                ]
            },

            modules_detail: {
                FAT: {
                    micro_goal: "Cortar primeras piezas con precisión",
                    tasks: [
                        "Configurar sierra/ingletadora",
                        "Verificar medida antes de cada corte",
                        "Ejecutar cortes según plano"
                    ],
                    deliverable: "Piezas cortadas",
                    evidence: ["Foto piezas"],
                    ra_ce: "RA4-5: Mecanizado"
                },
                PMB: {
                    micro_goal: "Control de calidad continuo",
                    tasks: [
                        "Medir cada pieza cortada",
                        "Verificar escuadra con escuadra de carpintero",
                        "Registrar en hoja QC"
                    ],
                    deliverable: "Hoja QC actualizada",
                    evidence: ["PMB_qc_dia1.pdf"],
                    ra_ce: "RA5: Evaluación"
                },
                PUB: {
                    micro_goal: "Registro de tiempos",
                    tasks: [
                        "Cronometrar operaciones clave",
                        "Registrar tiempos reales vs estimados",
                        "Identificar desviaciones"
                    ],
                    deliverable: "Hoja de tiempos",
                    evidence: ["PUB_tiempos_dia1.pdf"],
                    ra_ce: "RA5: Procesos"
                }
            },

            safety: {
                applies: true,
                risk_main: "Alto - Maquinaria de corte",
                epi_required: [
                    { item: "Gafas de protección", icon: "🥽", mandatory: true },
                    { item: "Protección auditiva", icon: "🎧", mandatory: true },
                    { item: "Calzado de seguridad", icon: "👞", mandatory: true }
                ],
                prl_checks: [
                    "Resguardos de máquina activos",
                    "Aspiración conectada",
                    "Zona despejada",
                    "Permiso de máquina otorgado"
                ],
                stop_rule: "STOP si algo falla en la máquina. Avisar inmediatamente.",
                qc_check: {
                    measure: "Longitud de piezas",
                    tolerance: "±1mm",
                    method: "Flexómetro",
                    evidence: "Foto con medida visible"
                }
            },

            differentiation: {
                base: {
                    description: "2 piezas cortadas + QC",
                    evidence: "Piezas + hoja"
                },
                support: {
                    trigger: "Si hay dificultad con la máquina",
                    action: "Docente asiste en configuración y primeros cortes"
                },
                extension: {
                    trigger: "Si van adelantados",
                    action: "Cortar más piezas o empezar acabado de aristas"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === SEMANA E2-S05: JUEVES 5 FEBRERO ===
        {
            date: "2026-02-05",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S05",
            project: "Taburete ergonómico",
            phase_common: "F4",
            day_type: "taller",
            leader_module: "FAT",
            modules_active: ["FAT", "PMB", "PUB"],
            duration: "5 sesiones",
            location: "Taller de carpintería",

            learning_intent: {
                purpose: "Completar el mecanizado de todas las piezas principales y preparar uniones.",
                success_criteria: [
                    "80% de las piezas cortadas y verificadas",
                    "Uniones preparadas (cajas, espigas, taladros)",
                    "Ensayo previo de encaje realizado"
                ],
                common_mistakes: [
                    "Hacer uniones sin verificar primero el encaje",
                    "Olvidar marcar qué pieza va con cuál",
                    "No lijar bordes antes de probar encaje"
                ],
                teacher_prompt: {
                    question: "¿Has probado el encaje antes de aplicar cola?",
                    check: "Ver ensayo en seco de la unión"
                }
            },

            min_deliverable: {
                title: "Piezas completas + uniones preparadas",
                checklist: [
                    "80% piezas cortadas y verificadas",
                    "Uniones mecanizadas",
                    "Ensayo de encaje realizado"
                ],
                format: "Piezas + Foto",
                naming: "E2_S05_Equipo??_Mecanizado_Dia2",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F4/",
                evidence_required: [
                    "Foto de todas las piezas",
                    "Foto de ensayo de encaje"
                ]
            },

            dod: [
                "80%+ piezas fabricadas",
                "Uniones preparadas y probadas en seco",
                "Hoja QC completa hasta este punto"
            ],
            gate_rule: "Sin ensayo de encaje, no se puede encolar mañana",

            dependencies: {
                today_depends_on: [
                    "Piezas cortadas días anteriores",
                    "Plano de detalle de uniones"
                ],
                tomorrow_blocked_if: [
                    "Uniones no encajan → reprocesan piezas",
                    "Falta marcar correspondencia → montaje incorrecto"
                ]
            },

            modules_detail: {
                FAT: {
                    micro_goal: "Completar mecanizado y preparar uniones",
                    tasks: [
                        "Cortar piezas restantes",
                        "Mecanizar uniones (cajas/espigas/taladros)",
                        "Probar encaje en seco"
                    ],
                    deliverable: "Piezas listas para montaje",
                    evidence: ["Foto piezas", "Foto encaje"],
                    ra_ce: "RA4-5-6: Mecanizado y montaje"
                },
                PMB: {
                    micro_goal: "Verificar calidad de uniones",
                    tasks: [
                        "Medir tolerancia de holgura",
                        "Verificar escuadra del conjunto",
                        "Actualizar hoja QC"
                    ],
                    deliverable: "QC de uniones",
                    evidence: ["PMB_qc_uniones.pdf"],
                    ra_ce: "RA5: Evaluación"
                },
                PUB: {
                    micro_goal: "Actualizar seguimiento de proceso",
                    tasks: [
                        "Registrar avance vs planificado",
                        "Identificar retrasos",
                        "Proponer ajustes si es necesario"
                    ],
                    deliverable: "Informe de avance",
                    evidence: ["PUB_avance_s05.pdf"],
                    ra_ce: "RA5: Procesos"
                }
            },

            safety: {
                applies: true,
                risk_main: "Alto - Maquinaria de corte y taladrado",
                epi_required: [
                    { item: "Gafas de protección", icon: "🥽", mandatory: true },
                    { item: "Protección auditiva", icon: "🎧", mandatory: true },
                    { item: "Calzado de seguridad", icon: "👞", mandatory: true },
                    { item: "Guantes (solo manipulación)", icon: "🧤", mandatory: false }
                ],
                prl_checks: [
                    "Resguardos activos en todas las máquinas",
                    "Taladro de banco configurado correctamente",
                    "Topes de seguridad colocados"
                ],
                stop_rule: "Si una unión no encaja, no forzar. Revisar dimensiones.",
                qc_check: {
                    measure: "Holgura de unión",
                    target: "0.2mm",
                    tolerance: "±0.3mm",
                    method: "Galga de espesores o visual",
                    evidence: "Foto de encaje"
                }
            },

            differentiation: {
                base: {
                    description: "80% piezas + ensayo de encaje",
                    evidence: "Fotos + QC"
                },
                support: {
                    trigger: "Si las uniones no encajan",
                    action: "Docente ayuda a diagnosticar y corregir"
                },
                extension: {
                    trigger: "Si todo encaja bien",
                    action: "Preparar superficie para acabado"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        },

        // === SEMANA E2-S05: VIERNES 6 FEBRERO (ENSAMBLADO) ===
        {
            date: "2026-02-06",
            is_lective: true,
            eval: "E2",
            week_id: "E2-S05",
            project: "Taburete ergonómico",
            phase_common: "F4",
            day_type: "taller",
            leader_module: "FAT",
            modules_active: ["FAT", "PMB", "PUB", "DJK"],
            duration: "5 sesiones",
            location: "Taller de carpintería",

            learning_intent: {
                purpose: "Ensamblar el taburete completo aplicando técnicas de encolado y verificando la calidad del montaje final.",
                success_criteria: [
                    "Taburete ensamblado completamente",
                    "Escuadra global verificada",
                    "Registro fotográfico del proceso y resultado"
                ],
                common_mistakes: [
                    "Aplicar demasiada cola (rebosa y mancha)",
                    "No verificar escuadra antes de que seque la cola",
                    "Olvidar prensar o usar sargentos"
                ],
                teacher_prompt: {
                    question: "¿Has verificado la escuadra antes de que seque la cola?",
                    check: "Ver escuadra colocada en el conjunto"
                }
            },

            min_deliverable: {
                title: "Taburete ensamblado + QC final",
                checklist: [
                    "Taburete ensamblado",
                    "Escuadra global verificada",
                    "Fotos de proceso y resultado",
                    "Hoja QC final completada"
                ],
                format: "Producto + Fotos + PDF",
                naming: "E2_S05_Equipo??_Ensamblado_FINAL",
                delivery_url: "REPO/E2/Equipos/Equipo_??/F4/FINAL/",
                evidence_required: [
                    "Foto del taburete terminado",
                    "Hoja QC final",
                    "3 fotos de proceso"
                ]
            },

            dod: [
                "Taburete ensamblado y estable",
                "Escuadra global ±1°",
                "Documentación F4 completa"
            ],
            gate_rule: "Sin taburete ensamblado, no hay Gate F4 posible la próxima semana",

            dependencies: {
                today_depends_on: [
                    "Todas las piezas fabricadas",
                    "Ensayo de encaje exitoso",
                    "Cola y sargentos disponibles"
                ],
                tomorrow_blocked_if: [
                    "Montaje defectuoso → desmontaje y corrección",
                    "Sin fotos → no hay evidencia del proceso"
                ]
            },

            modules_detail: {
                FAT: {
                    micro_goal: "Ensamblar el taburete completo",
                    tasks: [
                        "Aplicar cola en uniones",
                        "Ensamblar por subconjuntos",
                        "Prensar y verificar escuadra"
                    ],
                    deliverable: "Taburete ensamblado",
                    evidence: ["Foto producto final"],
                    ra_ce: "RA6: Conjuntos y tolerancias"
                },
                PMB: {
                    micro_goal: "Control de calidad final",
                    tasks: [
                        "Verificar escuadra global",
                        "Comprobar estabilidad",
                        "Completar hoja QC final"
                    ],
                    deliverable: "Hoja QC final",
                    evidence: ["PMB_qc_final.pdf"],
                    ra_ce: "RA5: Evaluación"
                },
                PUB: {
                    micro_goal: "Registro final de proceso",
                    tasks: [
                        "Documentar tiempos totales",
                        "Comparar planificado vs real",
                        "Identificar mejoras"
                    ],
                    deliverable: "Informe de proceso",
                    evidence: ["PUB_informe_final.pdf"],
                    ra_ce: "RA5: Procesos"
                },
                DJK: {
                    micro_goal: "Documentación final F4",
                    tasks: [
                        "Organizar todas las evidencias",
                        "Crear carpeta FINAL",
                        "Actualizar índice documental"
                    ],
                    deliverable: "Carpeta F4 FINAL",
                    evidence: ["Captura repositorio"],
                    ra_ce: "RA2-3: Cloud y gestión"
                }
            },

            safety: {
                applies: true,
                risk_main: "Medio - Encolado y prensado",
                epi_required: [
                    { item: "Gafas de protección", icon: "🥽", mandatory: true },
                    { item: "Guantes", icon: "🧤", mandatory: true },
                    { item: "Calzado de seguridad", icon: "👞", mandatory: true }
                ],
                prl_checks: [
                    "Ventilación adecuada para colas",
                    "Sargentos en buen estado",
                    "Zona de prensado despejada"
                ],
                stop_rule: "Si la cola no adhiere correctamente, detener y consultar.",
                qc_check: {
                    measure: "Escuadra global",
                    target: "90°",
                    tolerance: "±1°",
                    method: "Escuadra grande + nivel",
                    evidence: "Foto con escuadra visible"
                }
            },

            differentiation: {
                base: {
                    description: "Taburete ensamblado + QC básico",
                    evidence: "Producto + 2 fotos + QC"
                },
                support: {
                    trigger: "Si hay problemas de escuadra",
                    action: "Docente ayuda a corregir antes de que seque"
                },
                extension: {
                    trigger: "Si todo va perfecto",
                    action: "Empezar lijado y preparación para acabado"
                }
            },

            teacher_log: {
                incidents: [],
                agreements: [],
                adaptations: [],
                changes: []
            }
        }
    ],

    // ============================================
    // ESTRUCTURA ACADÉMICA (RA/CE por evaluación)
    // ============================================
    academic: [
        {
            id: "e1",
            title: "1.ª Evaluación (Proyecto Básico: Estantería)",
            project: "Estantería modular",
            flow: [
                { f: "F0/F1", l: "DRP", c: "var(--col-drp)" },
                { f: "F2", l: "RRC", c: "var(--col-rrc)" },
                { f: "F3/F4", l: "FAT", c: "var(--col-fat)" },
                { f: "F5", l: "DJK", c: "var(--col-djk)" }
            ],
            modules: [
                {
                    id: "drp", name: "DRP — Desarrollo", focus: "Análisis y bocetado.",
                    ras: [
                        { t: "RA1: Información y tendencias", ce: "CE a-f: Estilos, historia, antropometría." },
                        { t: "RA2: Propuestas carpintería", ce: "CE a-f: Bocetos, croquis, justificación." }
                    ],
                    ev: { proc: "Encargo, Moodboard, 3 Alternativas con Matriz de decisión y Ficha producto" }
                },
                {
                    id: "rrc", name: "RRC — Representación", focus: "Planos manuales.",
                    ras: [
                        { t: "RA1: Croquis mano alzada", ce: "CE a-k: Proporción, acotación, detalles." },
                        { t: "RA2: Vistas sobre tablero", ce: "CE a-j: Escalas, normalización." },
                        { t: "RA3: Inicio CAD 2D", ce: "CE a-d: Interfaz y dibujo básico." }
                    ],
                    ev: { proc: "Lámina de conjunto acotada con detalle de unión" }
                },
                {
                    id: "pub", name: "PUB — Procesos", focus: "Materiales base y estructura sector.",
                    ras: [
                        { t: "RA1: Estructura del sector", ce: "CE a-g: Tipos de industrias y flujo." },
                        { t: "RA2: Maderas naturales", ce: "CE a-h: Propiedades físicas, defectos." },
                        { t: "RA3: Tableros derivados", ce: "CE a-i: Aglomerado, MDF, contrachapado." }
                    ],
                    ev: { proc: "Ficha comparativa de materiales (2-3 opciones) con selección justificada" }
                },
                {
                    id: "fat", name: "FAT — Fabricación", focus: "Trazado y uniones.",
                    ras: [
                        { t: "RA1: Sistemas de unión", ce: "CE a-f: Tipos, resistencia y adhesivos." },
                        { t: "RA2: Selección material y plantillas", ce: "CE a-i: Defectos, optimización." },
                        { t: "RA3: Marcado y trazado", ce: "CE a-e: Cara/canto, útiles." }
                    ],
                    ev: { proc: "Piezas trazadas, probeta de unión y hoja de proceso" }
                },
                {
                    id: "pmb", name: "PMB — Prototipos", focus: "Planificación y montaje manual.",
                    ras: [
                        { t: "RA1: Planificación prototipo", ce: "CE a-f: Elementos, plantillas, útiles." },
                        { t: "RA3: Elaboración piezas (Manual)", ce: "CE a-h: Seguridad, preparación." },
                        { t: "RA4: Montaje prototipo", ce: "CE a-e: Adhesivos, prensado, herrajes." }
                    ],
                    ev: { proc: "Prototipo/maqueta funcional con hoja de proceso" }
                },
                {
                    id: "djk", name: "DJK — Digitalización", focus: "Conceptos base y gestión archivos.",
                    ras: [
                        { t: "RA1: Concepto digitalización", ce: "CE a-g: Diferencia IT/OT, conexión." },
                        { t: "RA2: Tecnologías habilitadoras", ce: "CE a-g: Identificación THD y sostenibilidad." }
                    ],
                    ev: { proc: "Repositorio digital, dossier PDF y mapa IT/OT del taller" }
                }
            ]
        },
        {
            id: "e2",
            title: "2.ª Evaluación (Proyecto Intermedio: Taburete)",
            project: "Taburete ergonómico",
            flow: [
                { f: "F0/F1", l: "DRP", c: "var(--col-drp)" },
                { f: "F2", l: "RRC", c: "var(--col-rrc)" },
                { f: "F3/F4", l: "FAT", c: "var(--col-fat)" },
                { f: "F4", l: "PUB", c: "var(--col-pub)" },
                { f: "F5", l: "DJK", c: "var(--col-djk)" }
            ],
            modules: [
                {
                    id: "drp", name: "DRP — Desarrollo", focus: "Ergonomía y viabilidad.",
                    ras: [
                        { t: "RA4: Propuestas de desarrollo", ce: "CE a-f: Ergonomía, materiales y viabilidad." },
                        { t: "RA5: Especificaciones y optimización", ce: "CE a-h: Parámetros críticos." }
                    ],
                    ev: { proc: "Ficha técnica completa con diagrama de proceso" }
                },
                {
                    id: "rrc", name: "RRC — Representación", focus: "Planos CAD.",
                    ras: [
                        { t: "RA3: Documentación gráfica CAD", ce: "CE a-i: Plantas, alzados, cortes." },
                        { t: "RA4: Planos para fabricación", ce: "CE a-i: Tolerancias, cajetines." }
                    ],
                    ev: { proc: "Juego de planos CAD completo con despiece" }
                },
                {
                    id: "fat", name: "FAT — Fabricación", focus: "Maquinaria portátil.",
                    ras: [
                        { t: "RA4: Prep. máquinas portátiles", ce: "CE a-i: Corte, puesta a punto." },
                        { t: "RA5: Obtención piezas y calidad", ce: "CE a-j: Tiempos, verificación." },
                        { t: "RA6: Conjuntos y tolerancias", ce: "CE a-i: Adhesivos, herrajes, QC." }
                    ],
                    ev: { proc: "Serie fabricada con hoja de control de calidad" }
                },
                {
                    id: "pmb", name: "PMB — Prototipos", focus: "Programación y ensayos.",
                    ras: [
                        { t: "RA2: Programación de fabricación", ce: "CE a-h: Material, ensayos, seguridad." },
                        { t: "RA3-4: Mecanizado y Montaje", ce: "Precisión y ensamblado." }
                    ],
                    ev: { proc: "Ensayo previo de unión con plan de fabricación" }
                },
                {
                    id: "pub", name: "PUB — Procesos", focus: "Transformación y recubrimientos.",
                    ras: [
                        { t: "RA4: Materiales recubrimiento", ce: "Selección y propiedades." },
                        { t: "RA5: Procesos transformación", ce: "CE a-j: Secuencia, subproductos." }
                    ],
                    ev: { proc: "Análisis de transformación con control de recubrimientos" }
                },
                {
                    id: "djk", name: "DJK — Digitalización", focus: "Cloud y Seg. de datos.",
                    ras: [
                        { t: "RA3: Cloud/nube", ce: "CE a-e: Niveles, edge/fog, ventajas." },
                        { t: "RA5: Datos y ciberseguridad", ce: "CE a-i: Big Data, seguridad." }
                    ],
                    ev: { proc: "Protocolo de backup con matriz de riesgos de ciberseguridad" }
                }
            ]
        },
        {
            id: "e3",
            title: "3.ª Evaluación (Proyecto Avanzado: Mobiliario Industrial)",
            project: "Mobiliario industrial",
            flow: [
                { f: "F0", l: "DJK", c: "var(--col-djk)" },
                { f: "F2", l: "RRC", c: "var(--col-rrc)" },
                { f: "F3", l: "PUB", c: "var(--col-pub)" },
                { f: "F4", l: "FAT", c: "var(--col-fat)" },
                { f: "F5", l: "ALL", c: "var(--col-all)" }
            ],
            modules: [
                {
                    id: "drp", name: "DRP — Desarrollo", focus: "Gestión documental.",
                    ras: [
                        { t: "RA3: Especificaciones nuevos productos", ce: "CE a-h: Optimización, instalación." },
                        { t: "RA6: Gestión documental", ce: "CE a-k: Memoria, escandallos, costes." }
                    ],
                    ev: { proc: "Dossier técnico completo (memoria, presupuesto y escandallos)" }
                },
                {
                    id: "rrc", name: "RRC — Representación", focus: "Planos industriales.",
                    ras: [
                        { t: "RA4 (Avanzado): Tolerancias", ce: "Normalización industrial." },
                        { t: "RA5: Gestión documental CAD", ce: "CE a-h: Backups, exportación." }
                    ],
                    ev: { proc: "Planos 'As-Built' corregidos con estructura digital" }
                },
                {
                    id: "pub", name: "PUB — Procesos", focus: "Líneas de producción.",
                    ras: [
                        { t: "RA5: Procesos y líneas", ce: "CE h-j: Automatización, informática." },
                        { t: "RA7: PRL en procesos", ce: "Aplicada a procesos industriales." }
                    ],
                    ev: { proc: "Diseño teórico de línea automatizada con mapa de riesgos PRL" }
                },
                {
                    id: "fat", name: "FAT — Fabricación", focus: "Maquinaria fija y acabados.",
                    ras: [
                        { t: "RA4-5-6: Eje industrial", ce: "Mecanizado fijo + montaje." },
                        { t: "RA7: Tintado y acabados", ce: "CE a-k: Mezclas, aplicación, curado." },
                        { t: "RA8: PRL transversal", ce: "Acceso a máquina." }
                    ],
                    ev: { proc: "Producto industrial acabado con informe de tintado" }
                },
                {
                    id: "pmb", name: "PMB — Prototipos", focus: "Normativa y evaluación.",
                    ras: [
                        { t: "RA5: Evaluación de prototipos", ce: "CE a-j: Ensayos, normativa, mejoras." },
                        { t: "RA6: Trazabilidad y PRL", ce: "Control normativo." }
                    ],
                    ev: { proc: "Informe de evaluación de cumplimiento normativo" }
                },
                {
                    id: "djk", name: "DJK — Digitalización", focus: "Transformación digital.",
                    ras: [
                        { t: "RA6: Proyecto transformación", ce: "CE a-k: Alineación negocio, tecnologías." },
                        { t: "RA4: IA en el sector", ce: "Uso de IA en procesos madera." }
                    ],
                    ev: { proc: "Proyecto de digitalización aplicado al taller/empresa" }
                }
            ]
        }
    ],

    // ============================================
    // TIMELINE SIMPLIFICADO (para vista general)
    // ============================================
    timeline: [
        {
            eval: "E1", title: "Proyecto Básico: Estantería", weeks: [
                { num: 1, id: "E1-S01", dates: "15-19 Sep", goal: "F0: Encargo + PRL", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Encargo firmado", "PRL APTO", "Repositorio creado"] },
                { num: 2, id: "E1-S02", dates: "22-26 Sep", goal: "F1: Investigación y alternativas", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["2-3 alternativas", "Matriz decisión", "Elección razonada"] },
                { num: 3, id: "E1-S03", dates: "29 Sep-03 Oct", goal: "F1 cierre: Propuesta final", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Design Freeze", "Medidas definitivas", "Punto crítico"] },
                { num: 4, id: "E1-S04", dates: "06-10 Oct", goal: "F2: Planos v01", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Plano conjunto", "Despiece", "Revisión FAT"] },
                { num: 5, id: "E1-S05", dates: "13-17 Oct", goal: "F2: Planos v02", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Planos corregidos", "Despiece final", "Pase a proceso"] },
                { num: 6, id: "E1-S06", dates: "20-24 Oct", goal: "F2: Punto de Decisión", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Aprobación F2", "Listo fabricar", "FAT autorizado"] },
                { num: 7, id: "E1-S07", dates: "27-31 Oct", goal: "F3: Hoja de proceso", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Secuencia operaciones", "Lista herramientas", "PRL operación"] },
                { num: 8, id: "E1-S08", dates: "03-07 Nov", goal: "F3: Probeta de unión", leader: "PMB", leaderColor: "var(--col-pmb)", dod: ["Probeta fabricada", "Resistencia OK", "Actualización plano"] },
                { num: 9, id: "E1-S09", dates: "10-14 Nov", goal: "F4: Inicio fabricación", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Material preparado", "Piezas trazadas", "Control dimensional"] },
                { num: 10, id: "E1-S10", dates: "17-21 Nov", goal: "F4: Montaje", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Piezas fabricadas", "Montaje OK", "Escuadra verificada"] },
                { num: 11, id: "E1-S11", dates: "24-28 Nov", goal: "F4: Control de calidad", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["QC dimensional", "Estabilidad OK", "Correcciones hechas"] },
                { num: 12, id: "E1-S12", dates: "01-04 Dic", goal: "F5: Dossier final", leader: "DJK", leaderColor: "var(--col-djk)", dod: ["Memoria redactada", "Planos finales", "Anexos taller"] },
                { num: 13, id: "E1-S13", dates: "08-12 Dic", goal: "F5: Entrega E1", leader: "DJK", leaderColor: "var(--col-djk)", dod: ["Dossier PDF", "Presentación", "Lecciones aprendidas"] }
            ]
        },
        {
            eval: "E2", title: "Proyecto Intermedio: Taburete", weeks: [
                { num: 1, id: "E2-S01", dates: "08-09 Ene", goal: "F0: Arranque encargo", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Encargo ergonomía", "Checklist PRL", "Repositorio E2"] },
                { num: 2, id: "E2-S02", dates: "12-16 Ene", goal: "F1: Investigación y alternativas", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["2-3 alternativas", "Matriz decisión", "Propuesta seleccionada"] },
                { num: 3, id: "E2-S03", dates: "19-23 Ene", goal: "F2: CAD y documentación", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Planos CAD", "Despiece+BOM", "Paquete fabricación"] },
                { num: 4, id: "E2-S04", dates: "26-30 Ene", goal: "F3: Planificación proceso", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Hoja proceso", "Plan QC", "Útiles/plantillas"] },
                { num: 5, id: "E2-S05", dates: "02-06 Feb", goal: "F4: Prototipo", leader: "PMB", leaderColor: "var(--col-pmb)", dod: ["1ª unidad", "Validación", "Cambios aplicados"] },
                { num: 6, id: "E2-S06", dates: "09-13 Feb", goal: "F4: Pre-serie", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["2-3 unidades", "Proceso estabilizado", "QC correcciones"] },
                { num: 7, id: "E2-S07", dates: "16-20 Feb", goal: "F4: Producción", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Lote completo", "Control QC", "Evidencias taller"] },
                { num: 8, id: "E2-S08", dates: "23-27 Feb", goal: "F4-F5: Control final", leader: "PUB", leaderColor: "var(--col-pub)", dod: ["Inspección final", "Preparación entrega", "Paquete documental"] },
                { num: 9, id: "E2-S09", dates: "02-06 Mar", goal: "F5: Dossier y repositorio", leader: "DJK", leaderColor: "var(--col-djk)", dod: ["Memoria técnica", "Planos finales", "Repositorio limpio"] },
                { num: 10, id: "E2-S10", dates: "09-13 Mar", goal: "F5: Cierre y entrega", leader: "ALL", leaderColor: "var(--col-all)", dod: ["Presentación", "Producto entregado", "Lecciones aprendidas"] }
            ]
        },
        {
            eval: "E3", title: "Proyecto Avanzado: Mobiliario Industrial", weeks: [
                { num: 1, id: "E3-S01", dates: "16-20 Mar", goal: "F0: Lanzamiento + PRL", leader: "DJK", leaderColor: "var(--col-djk)", dod: ["Requisitos cerrados", "PRL maquinaria fija", "IT/OT mapa"] },
                { num: 2, id: "E3-S02", dates: "23-27 Mar", goal: "F1: Investigación y propuestas", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Alternativas", "Decisión razonada", "Propuesta final"] },
                { num: 3, id: "E3-S03", dates: "06-10 Abr", goal: "F2-F3: Proceso Cerrado", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Planos definitivos", "Hoja proceso", "Plan QC"] },
                { num: 4, id: "E3-S04", dates: "13-17 Abr", goal: "F4: Primera Unidad", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Primera pieza", "Inspección OK", "Correcciones"] },
                { num: 5, id: "E3-S05", dates: "20-24 Abr", goal: "F4: Fabricación definitiva", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Componentes OK", "Montaje controlado", "Tolerancias"] },
                { num: 6, id: "E3-S06", dates: "27 Abr-01 May", goal: "F4: Calidad final", leader: "PMB", leaderColor: "var(--col-pmb)", dod: ["Evaluación prototipo", "Correcciones", "As-built"] },
                { num: 7, id: "E3-S07", dates: "05-08 May", goal: "F5: Industrialización", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Dossier técnico", "Planos export", "Proceso industrial"] },
                { num: 8, id: "E3-S08", dates: "11 May", goal: "F5: Cierre y defensa", leader: "ALL", leaderColor: "var(--col-all)", dod: ["Presentación", "Repositorio cerrado", "Proyecto RA6 DJK"] }
            ]
        }
    ],

    // ============================================
    // TIMELINE SIMPLIFICADO (para vista general)
    // ============================================
    timeline: [
        {
            eval: "E1", title: "Proyecto Básico: Estantería", weeks: [
                { num: 1, id: "E1-S01", dates: "15-19 Sep", goal: "F0: Encargo + PRL", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Encargo firmado", "PRL APTO", "Repositorio creado"] },
                { num: 2, id: "E1-S02", dates: "22-26 Sep", goal: "F1: Investigación y alternativas", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["2-3 alternativas", "Matriz decisión", "Elección razonada"] },
                { num: 3, id: "E1-S03", dates: "29 Sep-03 Oct", goal: "F1 cierre: Propuesta final", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Design Freeze", "Medidas definitivas", "Punto crítico"] },
                { num: 4, id: "E1-S04", dates: "06-10 Oct", goal: "F2: Planos v01", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Plano conjunto", "Despiece", "Revisión FAT"] },
                { num: 5, id: "E1-S05", dates: "13-17 Oct", goal: "F2: Planos v02", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Planos corregidos", "Despiece final", "Pase a proceso"] },
                { num: 6, id: "E1-S06", dates: "20-24 Oct", goal: "F2: Punto de Decisión", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Aprobación F2", "Listo fabricar", "FAT autorizado"] },
                { num: 7, id: "E1-S07", dates: "27-31 Oct", goal: "F3: Hoja de proceso", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Secuencia operaciones", "Lista herramientas", "PRL operación"] },
                { num: 8, id: "E1-S08", dates: "03-07 Nov", goal: "F3: Probeta de unión", leader: "PMB", leaderColor: "var(--col-pmb)", dod: ["Probeta fabricada", "Resistencia OK", "Actualización plano"] },
                { num: 9, id: "E1-S09", dates: "10-14 Nov", goal: "F4: Inicio fabricación", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Material preparado", "Piezas trazadas", "Control dimensional"] },
                { num: 10, id: "E1-S10", dates: "17-21 Nov", goal: "F4: Montaje", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Piezas fabricadas", "Montaje OK", "Escuadra verificada"] },
                { num: 11, id: "E1-S11", dates: "24-28 Nov", goal: "F4: Control de calidad", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["QC dimensional", "Estabilidad OK", "Correcciones hechas"] },
                { num: 12, id: "E1-S12", dates: "01-04 Dic", goal: "F5: Dossier final", leader: "DJK", leaderColor: "var(--col-djk)", dod: ["Memoria redactada", "Planos finales", "Anexos taller"] },
                { num: 13, id: "E1-S13", dates: "08-12 Dic", goal: "F5: Entrega E1", leader: "DJK", leaderColor: "var(--col-djk)", dod: ["Dossier PDF", "Presentación", "Lecciones aprendidas"] }
            ]
        },
        {
            eval: "E2", title: "Proyecto Intermedio: Taburete", weeks: [
                { num: 1, id: "E2-S01", dates: "08-09 Ene", goal: "F0: Arranque encargo", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Encargo ergonomía", "Checklist PRL", "Repositorio E2"] },
                { num: 2, id: "E2-S02", dates: "12-16 Ene", goal: "F1: Investigación y alternativas", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["2-3 alternativas", "Matriz decisión", "Propuesta seleccionada"] },
                { num: 3, id: "E2-S03", dates: "19-23 Ene", goal: "F2: CAD y documentación", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Planos CAD", "Despiece+BOM", "Paquete fabricación"] },
                { num: 4, id: "E2-S04", dates: "26-30 Ene", goal: "F3: Planificación proceso", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Hoja proceso", "Plan QC", "Útiles/plantillas"] },
                { num: 5, id: "E2-S05", dates: "02-06 Feb", goal: "F4: Prototipo", leader: "PMB", leaderColor: "var(--col-pmb)", dod: ["1ª unidad", "Validación", "Cambios aplicados"] },
                { num: 6, id: "E2-S06", dates: "09-13 Feb", goal: "F4: Pre-serie", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["2-3 unidades", "Proceso estabilizado", "QC correcciones"] },
                { num: 7, id: "E2-S07", dates: "16-20 Feb", goal: "F4: Producción", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Lote completo", "Control QC", "Evidencias taller"] },
                { num: 8, id: "E2-S08", dates: "23-27 Feb", goal: "F4-F5: Control final", leader: "PUB", leaderColor: "var(--col-pub)", dod: ["Inspección final", "Preparación entrega", "Paquete documental"] },
                { num: 9, id: "E2-S09", dates: "02-06 Mar", goal: "F5: Dossier y repositorio", leader: "DJK", leaderColor: "var(--col-djk)", dod: ["Memoria técnica", "Planos finales", "Repositorio limpio"] },
                { num: 10, id: "E2-S10", dates: "09-13 Mar", goal: "F5: Cierre y entrega", leader: "ALL", leaderColor: "var(--col-all)", dod: ["Presentación", "Producto entregado", "Lecciones aprendidas"] }
            ]
        },
        {
            eval: "E3", title: "Proyecto Avanzado: Mobiliario Industrial", weeks: [
                { num: 1, id: "E3-S01", dates: "16-20 Mar", goal: "F0: Lanzamiento + PRL", leader: "DJK", leaderColor: "var(--col-djk)", dod: ["Requisitos cerrados", "PRL maquinaria fija", "IT/OT mapa"] },
                { num: 2, id: "E3-S02", dates: "23-27 Mar", goal: "F1: Investigación y propuestas", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Alternativas", "Decisión razonada", "Propuesta final"] },
                { num: 3, id: "E3-S03", dates: "06-10 Abr", goal: "F2-F3: Proceso Cerrado", leader: "RRC", leaderColor: "var(--col-rrc)", dod: ["Planos definitivos", "Hoja proceso", "Plan QC"] },
                { num: 4, id: "E3-S04", dates: "13-17 Abr", goal: "F4: Primera Unidad", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Primera pieza", "Inspección OK", "Correcciones"] },
                { num: 5, id: "E3-S05", dates: "20-24 Abr", goal: "F4: Fabricación definitiva", leader: "FAT", leaderColor: "var(--col-fat)", dod: ["Componentes OK", "Montaje controlado", "Tolerancias"] },
                { num: 6, id: "E3-S06", dates: "27 Abr-01 May", goal: "F4: Calidad final", leader: "PMB", leaderColor: "var(--col-pmb)", dod: ["Evaluación prototipo", "Correcciones", "As-built"] },
                { num: 7, id: "E3-S07", dates: "05-08 May", goal: "F5: Industrialización", leader: "DRP", leaderColor: "var(--col-drp)", dod: ["Dossier técnico", "Planos export", "Proceso industrial"] },
                { num: 8, id: "E3-S08", dates: "11 May", goal: "F5: Cierre y defensa", leader: "ALL", leaderColor: "var(--col-all)", dod: ["Presentación", "Repositorio cerrado", "Proyecto RA6 DJK"] }
            ]
        }
    ]
};

// Funciones helper para acceder a los datos
// ============ MOTOR DE GENERACIÓN DINÁMICA DE FICHAS ============
window.MASTER_PLAN.getDay = function (dateStr) {
    const dObj = new Date(dateStr + 'T00:00:00');
    const dayIndex = dObj.getDay();
    if (dayIndex === 0 || dayIndex === 6) return null;

    // 1. Buscar la semana correspondiente para obtener el líder oficial del Timeline
    const week = this.weeks.find(w => dateStr >= w.date_from && dateStr <= w.date_to);

    // Obtener el módulo líder de la semana desde el timeline general (Fuente de Verdad)
    let timelineWeek = null;
    if (week) {
        timelineWeek = this.timeline.flatMap(e => e.weeks).find(tw => tw.id === week.week_id);
    }
    const officialLeader = timelineWeek ? timelineWeek.leader : null;

    // 2. Prioridad: Registros manuales personalizados en el array 'days'
    let day = this.days.find(d => d.date === dateStr);
    if (day) {
        // Sincronizar el líder con el Timeline si existe una definición semanal
        if (officialLeader) day.leader_module = officialLeader;
        return day;
    }

    // 3. Si no hay ficha manual, sintetizar una ficha "virtual"
    if (!week) return null;

    const holidayList = window.SettingsManager?.settings?.pedagogical?.holidays || [];
    if (holidayList.includes(dateStr)) return null;

    // Identificar el día de la semana
    const daysWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayKey = daysWeek[dObj.getDay()];

    // Obtener el ritmo diario planeado
    const rhythm = week.daily_rhythm ? week.daily_rhythm[dayKey] : null;

    // Ignorar fines de semana, días sin clase o festivos
    if (!rhythm || rhythm.focus === "---" || rhythm.focus.toLowerCase().includes("festivo")) return null;

    const leader = officialLeader || "DRP";

    // Construcción del objeto de día dinámico
    return {
        date: dateStr,
        is_lective: true,
        eval: week.eval,
        week_id: week.week_id,
        project: week.project,
        phase_common: week.phase_common,
        day_type: rhythm.focus.toLowerCase().includes("taller") ? "taller" : (rhythm.focus.toLowerCase().includes("entrega") ? "entrega" : "aula"),
        leader_module: leader,
        modules_active: Object.keys(week.modules_focus || {}),
        learning_intent: {
            purpose: `${rhythm.focus}: ${rhythm.task}. Objetivo semanal: ${week.week_goal}`,
            success_criteria: [
                `Completar con éxito: ${rhythm.task}`,
                `Generar y documentar evidencia: ${rhythm.evidence}`,
                `Garantizar la trazabilidad según Gate ${week.phase_common}`
            ],
            common_mistakes: [
                "No publicar la evidencia en el repositorio compartido",
                "Falta de coherencia con el objetivo semanal",
                "Roles del equipo no definidos para la tarea"
            ],
            teacher_prompt: {
                question: `¿Habéis logrado avanzar hoy en ${rhythm.task}?`,
                check: `Verificar la evidencia (${rhythm.evidence}) y el registro de actividad.`
            }
        },
        min_deliverable: {
            title: `Entregable del día: ${rhythm.focus}`,
            checklist: [rhythm.task, "Subida a repositorio E2", "Actualización del índice documental"],
            format: "Digital / Físico",
            naming: `${week.week_id}_${dayKey}_Evidencia`,
            delivery_url: "Repositorio Central del Equipo",
            evidence_required: [rhythm.evidence]
        },
        dod: week.gate ? week.gate.conditions : ["Realizar la tarea del calendario"],
        modules_detail: this.getModulesDetail(week, rhythm),
        safety: {
            applies: rhythm.focus.toLowerCase().includes("taller"),
            risk_main: rhythm.focus.toLowerCase().includes("taller") ? "Medio (Maquinaría portátil/fija)" : "Bajo (Entorno aula)",
            epi_required: rhythm.focus.toLowerCase().includes("taller") ? ["Gafas de seguridad", "Protectores auditivos"] : [],
            prl_checks: rhythm.focus.toLowerCase().includes("taller") ? ["Área de trabajo despejada", "Protecciones de máquinas activas"] : []
        },
        differentiation: {
            base: { description: rhythm.task, evidence: rhythm.evidence },
            support: { trigger: "Bloqueo técnico o retraso acumulado", action: "Docente proporciona guía visual paso a paso" },
            extension: { trigger: "Ritmo alto de ejecución", action: "Mejorar la calidad documental o añadir detalles técnicos" }
        },
        teacher_log: { incidents: [], agreements: [], adaptations: [], changes: [] }
    };
};

// Helper para derivar el detalle por módulo de la planificación semanal
window.MASTER_PLAN.getModulesDetail = function (week, rhythm) {
    const detail = {};
    Object.entries(week.modules_focus || {}).forEach(([modId, focus]) => {
        detail[modId] = {
            micro_goal: focus.focus,
            tasks: [rhythm.task],
            deliverable: focus.deliverable,
            evidence: [rhythm.evidence],
            ra_ce: focus.enables || "Habilitar siguiente fase"
        };
    });
    return detail;
};

// ============================================
// FUNCIONES AUXILIARES
// ============================================
window.MASTER_PLAN.getWeek = function (weekId) {
    return this.weeks.find(w => w.week_id === weekId);
};

window.MASTER_PLAN.getPhase = function (phaseId) {
    return this.phases[phaseId];
};

window.MASTER_PLAN.getModule = function (moduleId) {
    return this.modules[moduleId.toUpperCase()];
};

console.log('✅ MASTER_PLAN cargado con Motor de Fichas Dinámico');
