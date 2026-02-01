# 📚 Sistema de Configuraciones - Documentación

## Descripción General

El **Sistema de Configuraciones** es un módulo completo que permite a los docentes personalizar todos los aspectos del Panel de Coordinación Docente sin necesidad de modificar código. Incluye 7 categorías principales con más de 40 opciones configurables.

---

## 🎯 Acceso al Panel

- **Ubicación**: Header superior derecho
- **Icono**: ⚙️ (Engranaje)
- **Atajo de Teclado**: `Ctrl + ,` (próximamente)

---

## 📋 Categorías de Configuración

### 1. 🎨 General y Personalización
**Objetivo**: Ajustar la apariencia visual y comportamiento básico del sistema.

| Configuración | Opciones | Descripción |
|--------------|----------|-------------|
| **Tema Visual** | Claro / Oscuro / Automático | Cambia el esquema de colores global |
| **Densidad de Información** | Compacto / Normal / Espacioso | Ajusta el espaciado entre elementos |
| **Tamaño de Fuente** | Pequeño (14px) / Normal (16px) / Grande (18px) | Aumenta la accesibilidad |
| **Idioma** | Español / Valenciano / English | Idioma de la interfaz (requiere recarga) |
| **Vista por Defecto** | Radar / Timeline / RA Dashboard | Vista inicial al abrir la aplicación |
| **Mensaje de Bienvenida** | ☑️ Activado / ☐ Desactivado | Mostrar tip al iniciar |

---

### 2. 📊 Evaluación y Seguimiento
**Objetivo**: Configurar cómo se calcula y muestra el progreso académico.

| Configuración | Rango/Opciones | Descripción |
|--------------|----------------|-------------|
| **Umbral de Completitud Semanal** | 0-100% | % mínimo de DoDs para considerar semana superada |
| **Ponderación de Evaluaciones** | E1/E2/E3 (suma=100%) | Peso de cada evaluación en el global |
| **Modo de Seguimiento por Módulo** | Equipo / Individual | Seguimiento por módulo (DRP, RRC, FAT, PMB, PUB, DJK) |
| **Mostrar Progreso Global** | Header / Sidebar / Oculto | Ubicación del widget de progreso |
| **Alertas de Retraso** | ☑️ Activado / ☐ Desactivado | Notificar si hay retraso en el proyecto |
| **Días sin DoDs antes de alerta** | 1-7 días | Tolerancia antes de mostrar alerta |

**Nota**: La ponderacion se valida al guardar y debe sumar 100%.

---

### 3. 📚 Configuraciones Pedagógicas
**Objetivo**: Personalizar elementos didácticos y pedagógicos.

| Configuración | Tipo | Us | 
|--------------|------|-------------|
| **Editar Bloques Pedagógicos** | ☑️ Checkbox | Permite modificar "Sentido del Proyecto" e "Intencionalidad Pedagógica" |
| **Panel Institucional** | ☑️ Checkbox | Mostrar información normativa sobre evaluación |
| **Fechas Festivas** | Texto (YYYY-MM-DD) | Días no lectivos personalizados (no afectan alertas) |
| **Plantillas de Rúbricas** | JSON | Definir rúbricas reutilizables en formato JSON |

**Ejemplo de Fechas Festivas:**
```
2025-12-06
2025-12-25
2026-01-01
```

---

### 4. 💾 Datos y Copias de Seguridad
**Objetivo**: Gestionar exportaciones, importaciones y almacenamiento.

| Configuración | Opciones | Descripción |
|--------------|----------|-------------|
| **Exportación Automática** | Manual / Semanal / Por Evaluación | Frecuencia de backup automático |
| **Formato de Exportación** | JSON / CSV / PDF | Formato predeterminado para exportar |
| **Sincronización con Nube** | Ninguna / Google Drive / OneDrive | Backup automático en la nube (experimental) |
| **Tamaño de Datos** | Solo lectura | Espacio ocupado en localStorage |
| **Última Copia** | Solo lectura | Fecha del último backup |

**Acciones Disponibles:**
- 📤 **Exportar Todos los Datos**: Descarga JSON completo (configuración + progreso)
- 📥 **Importar Datos**: Restaurar desde archivo JSON previo

---

### 5. 👥 Gestión de Equipos
**Objetivo**: Configurar equipos de alumnos y liderazgos.

| Configuración | Tipo | Descripción |
|--------------|------|-------------|
| **Nombres Personalizados** | Texto x10 | Renombrar "Equipo01" → "Los Carpinteros" |
| **Rotación Automática de Líderes** | ☑️ Checkbox | Asigna líder semanal automáticamente |
| **Requiere PIN para Reset** | ☑️ Checkbox | Solicita contraseña antes de borrar progreso |
| **PIN de Seguridad** | 4 dígitos | Código de seguridad (ej: 1234) |
| **Vista Previa Alumno** | ☑️ Checkbox | Permite previsualizar interfaz de estudiante |

---

### 6. 🔗 Integraciones Externas
**Objetivo**: Conectar con Moodle, Discord, Slack y otras plataformas.

| Configuración | Tipo | Descripción |
|--------------|------|-------------|
| **URL Base Moodle** | URL | Enlace al repositorio de evidencias en Moodle |
| **Patrón de Nomenclatura** | Texto | Definir formato de archivos (ej: `{eval}_{team}_{file}`) |
| **Webhooks** | ☑️ Checkbox | Activar notificaciones a servicios externos |
| **URL del Webhook** | URL | Endpoint para Discord/Slack/etc. |
| **Eventos a Notificar** | Checkboxes | Gate completado / Semana completada / Evaluación completada |

**Nota**: Las URLs deben ser validas (http o https).

**Variables disponibles para nomenclatura:**
- `{eval}` → E1, E2, E3
- `{team}` → Equipo01, Equipo02...
- `{file}` → Nombre del archivo
- `{date}` → Fecha actual (YYYY-MM-DD)
- `{module}` → DRP, RRC, FAT...

---

### 7. 🛠️ Avanzado y Desarrollo
**Objetivo**: Opciones técnicas y de depuración para desarrolladores.

| Configuración | Tipo | Descripción |
|--------------|------|-------------|
| **Modo Debug** | ☑️ Checkbox | Muestra logs detallados en la consola del navegador |
| **Service Worker (PWA)** | ☑️ Checkbox | Activa modo offline y caché (requiere recarga) |
| **Modo Rendimiento** | ☑️ Checkbox | Reduce animaciones para dispositivos lentos |
| **Características Experimentales** | ☑️ Checkbox | Activa funciones en fase beta |
| **Versión del Schema** | Solo lectura | Versión actual del modelo de datos |

**Acciones Disponibles:**
- 🗑️ **Limpiar Caché**: Borra archivos temporales del Service Worker
- 📤 **Exportar Configuración**: Guarda solo ajustes (sin datos de progreso)

---

## 💾 Almacenamiento

Todas las configuraciones se guardan en **localStorage** del navegador:
- **Clave**: `planificacion_settings`
- **Formato**: JSON
- **Persistencia**: Local (no se sincroniza entre dispositivos por defecto)
- **Schema**: `schemaVersion` se actualiza automaticamente para compatibilidad

### Estructura de Datos

```json
{
  "general": { "theme": "light", "density": "normal", ... },
  "evaluation": { "weekCompletionThreshold": 75, ... },
  "pedagogical": { "holidays": [...], ... },
  "data": { "autoExport": "manual", ... },
  "teams": { "teamNames": {...}, ... },
  "integrations": { "moodleBaseUrl": "...", ... },
  "advanced": { "debugMode": false, ... }
}
```

---

## 🔄 Importar / Exportar

### Exportar Configuración
1. Abrir Panel de Configuraciones (⚙️)
2. Ir a pestaña **Avanzado**
3. Clic en **📤 Exportar Configuración**
4. Se descarga archivo `configuracion_YYYY-MM-DD.json`

### Importar Configuración
1. Abrir Panel de Configuraciones
2. Ir a pestaña **Datos**
3. Clic en **📥 Importar Datos**
4. Seleccionar archivo `.json` previo
5. Confirmar y recargar página

---

## 🔧 Restablecer a Valores por Defecto

**Ubicación**: Footer del modal → Botón **🔄 Restablecer**

**Opciones**:
- **Preservar Datos** (por defecto): Mantiene equipos y configuración de datos
- **Reset Completo**: Vuelve a configuración de fábrica

**⚠️ Importante**: Restablecer NO borra el progreso ni las entregas de los alumnos.

---

## 🎨 Personalización Visual

### Tema Oscuro
El sistema soporta automáticamente **modo oscuro**:
-Activar desde `General → Tema Visual` o el botón 🌓 del header
- Detecta preferencia del sistema si está en "Automático"
- Todos los componentes se adaptan automáticamente

### Densidades
- **Compacto**: Reduce padding y márgenes (más información en pantalla)
- **Normal**: Balance entre espacio y contenido
- **Espacioso**: Más aire, ideal para proyectores o pantallas grandes

---

## 🔐 Seguridad

### PIN de Protección
Si se activa `Requiere PIN para Reset`:
- Se solicita codigo de 4 digitos antes de cualquier borrado
- Evita resets accidentales
- El PIN se guarda encriptado en localStorage

### Alertas de Confirmación
Todas las acciones destructivas requieren confirmación:
- Restablecer configuración
- Limpiar caché
- Importar datos (sobrescribe configuración actual)

---

## 🐛 Solución de Problemas

### La configuración no se guarda
- Verificar que localStorage esté habilitado en el navegador
- Comprobar espacio disponible (límite ~5-10MB según navegador)
- Abrir consola (F12) y buscar errores

### Error al importar JSON
- Validar que el JSON sea correcto con [JSONLint](https://jsonlint.com/)
- Verificar que el archivo provenga de una exportación válida
- Comprobar que contenga la clave `settings`

### Configuración no se aplica
- Algunas opciones requieren **recargar la página** (idioma, Service Worker)
- Otras requieren **cambiar de vista** para ver el efecto
- El modo Debug ayuda a identificar problemas

---

## 📖 Guía Rápida de Uso

### Caso de Uso 1: Configurar Equipos
```
1. ⚙️ Abrir Configuraciones
2. Ir a pestaña "👥 Equipos"
3. Personalizar nombres de equipos
4. Activar rotación automática si procede
5. Guardar cambios
```

### Caso de Uso 2: Backup Semanal
```
1. ⚙️ Abrir Configuraciones
2. Ir a pestaña "💾 Datos"
3. Seleccionar "Exportación Automática: Semanal"
4. Elegir formato (recomendado: JSON)
5. Guardar cambios
```

### Caso de Uso 3: Activar Notificaciones Discord
```
1. Crear webhook en servidor Discord
2. ⚙️ Abrir Configuraciones
3. Ir a pestaña "🔗 Integraciones"
4. Activar "Webhooks"
5. Pegar URL del webhook de Discord
6. Marcar eventos a notificar
7. Guardar cambios
```

---

## 🚀 Características Futuras

- [ ] Sincronización real con Google Drive/OneDrive
- [ ] Exportación PDF personalizable (plantillas)
- [ ] Temas visuales predefinidos (Oscuro Azul, Claro Verde, etc.)
- [ ] Atajos de teclado configurables
- [ ] Multi-idioma completo con i18n
- [ ] Importar/Exportar solo categorías específicas
- [ ] Historial de cambios en configuración
- [ ] Perfiles de configuración (Guardar sets completos)

---

## 📞 Soporte

**Desarrollado por**: IES Ana Luisa Benítez  
**Versión**: 2.0  
**Última Actualización**: 2026-01-21

---

**🎉 ¡Disfruta personalizando tu Panel Docente!**
