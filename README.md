# 📐 Planificación Transversal 1.º CFGS Diseño y Amueblamiento

Sistema de planificación y seguimiento de proyectos transversales para el ciclo formativo de grado superior.

## 🔗 Enlaces de Acceso

### 👩‍🎓 Para Alumnado (Público)
**URL para Moodle:**
```
https://german48.github.io/Planificacion-Transversal-1.CFGS/Planificacion-Alumnado.html
```

### 🧑‍🏫 Para Docentes (Protegido)
**URL para Docentes:**
```
https://german48.github.io/Planificacion-Transversal-1.CFGS/Planificacion-Docente.html
```

**Contraseña de acceso:** `docente2026`

> ⚠️ **Nota de Seguridad:** Para cambiar la contraseña, edita el archivo `Planificacion-Docente.html` en la línea que dice `const TEACHER_PASSWORD = "docente2026";`

## 📚 Características

### Vista de Alumnado
- ✅ Consulta de fichas diarias y semanales
- ✅ Visualización de objetivos y entregables
- ✅ Seguimiento de progreso (solo lectura)
- ✅ Acceso a recursos y materiales

### Vista Docente
- ✅ Todas las funciones de la vista de alumnado
- ✅ Edición de fichas y planificación
- ✅ Gestión de evidencias RA-CE
- ✅ Dashboard de seguimiento completo
- ✅ Exportación e importación de datos
- ✅ Configuración del sistema

## 🚀 Despliegue

El proyecto está desplegado automáticamente en GitHub Pages desde la rama `PROYECTO-01`.

Cada vez que hagas cambios y ejecutes:
```bash
git add .
git commit -m "Descripción de cambios"
git push origin PROYECTO-01
```

Los cambios se reflejarán automáticamente en ambas URLs en 1-2 minutos.

## 📝 Integración con Moodle

1. En Moodle, crea un nuevo recurso de tipo **URL**
2. Para alumnado: pega el enlace de la vista de alumnado
3. Para docentes: comparte el enlace docente solo con el equipo (incluye la contraseña de forma segura)

## 🔧 Mantenimiento

### Actualizar Datos del Plan
Los datos se encuentran en `data/master-plan.js`. Edita este archivo para modificar:
- Semanas y fechas
- Fases del proyecto
- Módulos y responsables
- Objetivos y entregables

### Sincronización
Como ambas vistas usan el mismo `master-plan.js`, cualquier cambio se refleja automáticamente en ambas interfaces.

---

**IES Ana Luisa Benítez** • Curso 2025-2026
