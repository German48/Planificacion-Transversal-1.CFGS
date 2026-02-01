# 📋 GUÍA DE INTEGRACIÓN EN MOODLE
## Planificación Transversal 1.º CFGS

---

## 🎯 RESUMEN EJECUTIVO

Has configurado con éxito un sistema de planificación dual (Docente/Alumnado) desplegado en GitHub Pages.

**Estado:** ✅ Operativo
**Repositorio:** https://github.com/German48/Planificacion-Transversal-1.CFGS
**Rama activa:** PROYECTO-01

---

## 🔗 ENLACES PARA MOODLE

### 👩‍🎓 ENLACE PARA ALUMNADO (Público - Sin restricciones)

```
https://german48.github.io/Planificacion-Transversal-1.CFGS/Planificacion-Alumnado.html
```

**Cómo añadirlo en Moodle:**
1. En tu curso de Moodle, activa "Edición"
2. Añade una actividad o recurso → **URL**
3. Nombre: "📋 Planificación del Proyecto - Vista Alumnado"
4. URL externa: pega el enlace de arriba
5. Descripción: "Consulta aquí las fichas diarias, objetivos y tu progreso en el proyecto transversal"
6. Guardar y mostrar

---

### 🧑‍🏫 ENLACE PARA DOCENTES

```
https://german48.github.io/Planificacion-Transversal-1.CFGS/Planificacion-Docente.html
```

**Cómo compartirlo con el equipo docente en Moodle:**
1. En tu curso de Moodle, activa "Edición"
2. Añade una actividad o recurso → **URL**
3. Nombre: "🧑‍🏫 Planificación del Proyecto - Panel Docente"
4. URL externa: pega el enlace de arriba
5. **IMPORTANTE:** En "Restricciones de acceso" → Añadir restricción → **Perfil de usuario** → Rol = "Profesor" o "Profesor sin permiso de edición"
6. Esto hará que solo los docentes vean este enlace
7. Guardar y mostrar

**Alternativa:** Comparte el enlace directamente por correo interno o Teams con tu equipo docente.

---

## 🔄 SINCRONIZACIÓN AUTOMÁTICA

**¿Cómo funcionan las actualizaciones?**

Ambas vistas (Docente y Alumnado) comparten el mismo archivo de datos: `data/master-plan.js`

**Flujo de trabajo:**
1. Tú editas el panel docente en tu navegador
2. Exportas los datos (botón 📥)
3. Actualizas el archivo `master-plan.js` con los nuevos datos
4. Haces commit y push:
   ```bash
   git add .
   git commit -m "Actualización de planificación"
   git push origin PROYECTO-01
   ```
5. En 1-2 minutos, GitHub Pages se actualiza automáticamente
6. Los alumnos ven los cambios al refrescar su navegador

**Importante:** Los datos del navegador (checkboxes, progreso) se guardan en `localStorage` de cada usuario. Para "resetear" a todos, deben borrar caché o usar el botón de reinicio.

---

## 🛡️ SEGURIDAD Y PRIVACIDAD

### ✅ Lo que SÍ está protegido:
- El acceso docente se controla mediante **restricciones de Moodle** (por rol de usuario)
- Los datos de progreso de cada usuario están en SU navegador (no se comparten)
- El repositorio es público, pero nadie puede editarlo sin tu permiso de GitHub

### ⚠️ Lo que NO está protegido:
- El código fuente es visible (es un proyecto educativo, no un sistema bancario)
- Si un alumno conoce la URL del panel docente, podría accederla directamente
- **Solución:** Usa las restricciones de acceso de Moodle para que solo los docentes vean el enlace
- **Alternativa:** Si necesitas mayor seguridad, podemos implementar autenticación con Google/Microsoft (más complejo)

---

## 📊 FUNCIONALIDADES POR ROL

### Vista Alumnado (Solo lectura)
- ✅ Ver fichas diarias y semanales
- ✅ Consultar objetivos y DoD (Definition of Done)
- ✅ Ver su progreso en el proyecto
- ✅ Acceder a recursos y materiales
- ❌ NO pueden editar ni borrar nada del plan maestro

### Vista Docente (Control total)
- ✅ Todo lo de alumnado +
- ✅ Editar fichas y planificación
- ✅ Gestionar evidencias RA-CE
- ✅ Dashboard de seguimiento completo
- ✅ Exportar/Importar datos
- ✅ Configuración del sistema
- ✅ Reiniciar progreso

---

## 🚀 PRÓXIMOS PASOS RECOMENDADOS

1. **Prueba los enlaces** en una ventana de incógnito para verificar que funcionan
2. **Añade los recursos en Moodle** siguiendo las instrucciones de arriba
3. **Comparte la contraseña** con tu equipo docente de forma segura
4. **Haz una sesión de prueba** con un alumno para verificar que todo se ve bien
5. **Documenta el flujo** de actualización para que otros profes puedan colaborar

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "Los cambios no se ven en GitHub Pages"
- Espera 2-3 minutos después del push
- Verifica que el commit se haya subido: `git log --oneline -5`
- Fuerza la recarga en el navegador: Ctrl + Shift + R (Windows) o Cmd + Shift + R (Mac)

### "La contraseña no funciona"
- Verifica que no haya espacios extra en el código
- Comprueba que el archivo se haya subido correctamente a GitHub
- Prueba en modo incógnito para descartar caché

### "Los alumnos ven datos antiguos"
- Pídeles que borren caché del navegador
- O que abran en modo incógnito
- O que pulsen Ctrl + Shift + R para forzar recarga

---

## 📞 CONTACTO Y SOPORTE

Si necesitas ayuda adicional:
- Revisa el README.md en el repositorio
- Consulta la documentación de GitHub Pages
- Contacta con el equipo de soporte técnico del centro

---

**Creado:** 01/02/2026
**Última actualización:** 01/02/2026
**Versión:** 1.0
