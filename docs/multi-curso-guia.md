# 📚 Sistema Multi-Curso - Guía de Implementación

## 🎯 Descripción General

Este sistema permite gestionar múltiples años académicos desde una única instancia de la aplicación, con un selector visual en el header y herramientas automáticas para generar nuevos años.

---

## 📦 Archivos del Sistema

### 1. **Gestor de Años Académicos**
- **Archivo**: `js/academic-year-manager.js`
- **Función**: Gestiona la lógica de cambio entre años académicos
- **API Pública**:
  - `AcademicYearManager.getCurrentYear()` - Obtiene el año activo
  - `AcademicYearManager.setYear(year)` - Cambia de año
  - `AcademicYearManager.getAvailableYears()` - Lista años disponibles
  - `AcademicYearManager.addYear(year, data)` - Añade un año
  - `AcademicYearManager.cloneYear(source, target, updateDates)` - Clona un año

### 2. **Interfaz Visual**
- **Archivos**: 
  - `css/academic-year-selector.css` (estilos)
  - `js/academic-year-selector-ui.js` (componente)
- **Función**: Selector visual en el header y modal de gestión
- **Características**:
  - Selector dropdown en el header
  - Modal de gestión de años
  - Botón de exportación
  - Formulario de creación de años

### 3. **Generador Automático**
- **Archivo**: `js/academic-year-generator.js`
- **Función**: Genera automáticamente nuevos años académicos
- **API Pública**:
  - `AcademicYearGenerator.generate(source, target, options)` - Genera año
  - `AcademicYearGenerator.export(year)` - Exporta a JSON
  - `AcademicYearGenerator.getCode(year)` - Genera código JS
  - `AcademicYearGenerator.help()` - Muestra ayuda

---

## 🚀 Instalación

### Paso 1: Añadir los archivos CSS

En el `<head>` de tus archivos HTML (`Planificacion-Docente.html` y `Planificacion-Alumnado.html`), añade:

```html
<!-- Después de los otros CSS -->
<link rel="stylesheet" href="css/academic-year-selector.css">
```

### Paso 2: Añadir los archivos JavaScript

Antes del cierre de `</body>`, añade estos scripts **en este orden**:

```html
<!-- 1. Primero el master-plan (ya existe) -->
<script src="data/master-plan.js"></script>

<!-- 2. Gestor de años académicos -->
<script src="js/academic-year-manager.js"></script>

<!-- 3. Generador automático -->
<script src="js/academic-year-generator.js"></script>

<!-- 4. Interfaz visual -->
<script src="js/academic-year-selector-ui.js"></script>

<!-- 5. Resto de scripts... -->
```

### Paso 3: Verificar que funciona

1. Abre la aplicación en el navegador
2. Deberías ver el selector de año académico en el header
3. Abre la consola del navegador (F12)
4. Deberías ver estos mensajes:
   ```
   ✅ MASTER_PLAN cargado con Motor de Fichas Dinámico
   ✅ Academic Year Manager inicializado
   📅 Año activo: 2025-2026
   📚 Años disponibles: 2025-2026
   ✅ Academic Year Generator cargado
   ✅ Academic Year Selector UI inicializado
   ```

---

## 🎨 Uso del Selector Visual

### Cambiar de Año Académico

1. En el header, haz clic en el selector de año
2. Selecciona el año deseado
3. Confirma el cambio
4. La página se recargará automáticamente

### Gestionar Años Académicos

1. Haz clic en el botón "⚙️ Gestionar" junto al selector
2. Se abrirá un modal con:
   - **Lista de años existentes**: Ver, activar o exportar
   - **Formulario de creación**: Crear nuevos años

### Crear un Nuevo Año

**Opción A: Desde el Modal (Interfaz Visual)**

1. Abre el modal de gestión
2. En la sección "➕ Añadir Nuevo Año Académico":
   - Introduce el año (ej: `2026-2027`)
   - Selecciona desde qué año clonar
   - Marca si quieres actualizar fechas automáticamente
3. Haz clic en "Crear Año Académico"

**Opción B: Desde la Consola (Programático)**

```javascript
// Generar año 2026-2027 desde 2025-2026
AcademicYearGenerator.generate('2025-2026', '2026-2027');

// Con opciones personalizadas
AcademicYearGenerator.generate('2025-2026', '2026-2027', {
    updateDates: true,        // Actualizar fechas
    yearsOffset: 1,           // Sumar 1 año a las fechas
    preserveWeekdays: true,   // Mantener días de la semana
    copyProgress: false       // No copiar progreso
});
```

---

## 🔧 Uso Avanzado del Generador

### Ver Ayuda

```javascript
AcademicYearGenerator.help()
```

### Generar y Exportar

```javascript
// 1. Generar el año
AcademicYearGenerator.generate('2025-2026', '2026-2027');

// 2. Exportar a archivo JSON
AcademicYearGenerator.export('2026-2027');
```

### Obtener Código para master-plan.js

```javascript
// Genera el código JavaScript para añadir manualmente
AcademicYearGenerator.getCode('2026-2027');
```

Esto mostrará en la consola el código que puedes copiar y pegar en `master-plan.js`.

---

## 📝 Opciones del Generador

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `updateDates` | boolean | `true` | Actualiza las fechas automáticamente |
| `yearsOffset` | number | `1` | Años a sumar a las fechas |
| `preserveWeekdays` | boolean | `true` | Mantiene los mismos días de la semana |
| `adjustHolidays` | boolean | `false` | Ajusta festivos (requiere calendario) |
| `copyProgress` | boolean | `false` | Copia el progreso del año origen |
| `generateReport` | boolean | `true` | Genera informe en consola |

---

## 💾 Persistencia de Datos

### Almacenamiento Actual

El sistema utiliza `localStorage` para:
- **Año académico activo**: `selected_academic_year`
- **Estados por año y modo**: `gantt_collapsed_state_[año]_[modo]`
- **Filtros por año y modo**: `gantt_filters_state_[año]_[modo]`

### Datos en Memoria

Los datos de todos los años se almacenan en:
```javascript
window.ACADEMIC_YEARS = {
    "2025-2026": { /* datos del año */ },
    "2026-2027": { /* datos del año */ },
    // ...
}
```

El año activo se referencia en:
```javascript
window.MASTER_PLAN // Apunta a ACADEMIC_YEARS[año_activo]
```

---

## 🔄 Actualización de Fechas

El generador automático actualiza las fechas de forma inteligente:

### Ejemplo de Actualización

**Año origen (2025-2026):**
```javascript
{
    week_id: "W01",
    date_from: "2025-09-15",  // Lunes
    date_to: "2025-09-19"     // Viernes
}
```

**Año generado (2026-2027) con `preserveWeekdays: true`:**
```javascript
{
    week_id: "W01",
    date_from: "2026-09-14",  // Lunes (ajustado)
    date_to: "2026-09-18"     // Viernes
}
```

---

## 📤 Exportación de Datos

### Exportar un Año Completo

**Desde el Modal:**
1. Abre el modal de gestión
2. Haz clic en "Exportar" junto al año deseado
3. Se descargará un archivo `master-plan-[año].json`

**Desde la Consola:**
```javascript
AcademicYearGenerator.export('2026-2027');
```

### Formato del Archivo Exportado

El archivo JSON contiene toda la estructura del año:
```json
{
    "config": { ... },
    "pedagogical_context": { ... },
    "modules": { ... },
    "phases": { ... },
    "weeks": [ ... ],
    "days": { ... }
}
```

---

## 🛠️ Integración con Gantt Renderer

El sistema multi-curso está integrado con el modo dual (Docente/Alumnado):

### Claves de localStorage

Las claves ahora incluyen el año académico:

```javascript
// Antes
gantt_collapsed_state_docente

// Ahora
gantt_collapsed_state_2025-2026_docente
gantt_collapsed_state_2026-2027_docente
```

### Actualización del storageKey

En `gantt-renderer.js`, la función `storageKey` ahora debería incluir el año:

```javascript
function storageKey(base) {
    const year = window.AcademicYearManager?.getCurrentYear() || '2025-2026';
    return `${base}_${year}_${mode}`;
}
```

**✅ Implementado**: El almacenamiento incluye el año academico y migra las claves anteriores si existen.

---

## 🎯 Casos de Uso

### Caso 1: Preparar el Próximo Curso

```javascript
// 1. Generar el año 2026-2027
AcademicYearGenerator.generate('2025-2026', '2026-2027');

// 2. Verificar en el selector que aparece el nuevo año

// 3. Cambiar al nuevo año para revisarlo
AcademicYearManager.setYear('2026-2027');

// 4. Hacer ajustes manuales si es necesario

// 5. Exportar para backup
AcademicYearGenerator.export('2026-2027');
```

### Caso 2: Mantener Histórico

```javascript
// Al finalizar el curso 2025-2026:

// 1. Exportar el año completo con progreso
AcademicYearGenerator.export('2025-2026');

// 2. Generar el nuevo año sin copiar progreso
AcademicYearGenerator.generate('2025-2026', '2026-2027', {
    copyProgress: false
});

// 3. Activar el nuevo año
AcademicYearManager.setYear('2026-2027');
```

### Caso 3: Comparar Años

```javascript
// Ver datos de un año específico
console.log(window.ACADEMIC_YEARS['2025-2026']);
console.log(window.ACADEMIC_YEARS['2026-2027']);

// Comparar número de semanas
const weeks2025 = window.ACADEMIC_YEARS['2025-2026'].weeks.length;
const weeks2026 = window.ACADEMIC_YEARS['2026-2027'].weeks.length;
console.log(`2025-2026: ${weeks2025} semanas`);
console.log(`2026-2027: ${weeks2026} semanas`);
```

---

## 🐛 Solución de Problemas

### El selector no aparece en el header

**Problema**: No se ve el selector de año académico

**Solución**:
1. Verifica que el CSS está cargado: `css/academic-year-selector.css`
2. Verifica que el JS está cargado: `js/academic-year-selector-ui.js`
3. Abre la consola y busca errores
4. Verifica que existe `.header-controls` en tu HTML

### El año no cambia

**Problema**: Al seleccionar un año, no cambia

**Solución**:
1. Verifica que `academic-year-manager.js` está cargado
2. Comprueba en consola: `AcademicYearManager.getCurrentYear()`
3. Verifica que el año existe: `AcademicYearManager.getAvailableYears()`

### Las fechas no se actualizan correctamente

**Problema**: Las fechas del nuevo año no son correctas

**Solución**:
```javascript
// Regenerar con opciones específicas
AcademicYearGenerator.generate('2025-2026', '2026-2027', {
    updateDates: true,
    preserveWeekdays: true,
    yearsOffset: 1
});
```

---

## 📚 Referencia Rápida

### Comandos Esenciales

```javascript
// Ver ayuda
AcademicYearGenerator.help()

// Generar año
AcademicYearGenerator.generate('2025-2026', '2026-2027')

// Cambiar año
AcademicYearManager.setYear('2026-2027')

// Ver año actual
AcademicYearManager.getCurrentYear()

// Ver años disponibles
AcademicYearManager.getAvailableYears()

// Exportar año
AcademicYearGenerator.export('2026-2027')

// Abrir modal de gestión
AcademicYearUI.openModal()
```

---

## 🔮 Próximas Mejoras

- [ ] Integración completa con `gantt-renderer.js` (claves de localStorage)
- [ ] Calendario de festivos para ajuste automático
- [ ] Importación de años desde archivo JSON
- [ ] Comparador visual de años
- [ ] Estadísticas por año académico
- [ ] Migración automática de progreso entre años

---

## 📞 Soporte

Si encuentras algún problema o necesitas ayuda:

1. Abre la consola del navegador (F12)
2. Ejecuta: `AcademicYearGenerator.help()`
3. Revisa esta guía
4. Verifica que todos los archivos están cargados correctamente

---

**Última actualización**: 2026-01-24  
**Versión**: 1.0.0
