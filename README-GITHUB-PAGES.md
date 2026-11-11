# HandBridge — versión para GitHub Pages

Esta carpeta contiene una adaptación estática del proyecto original.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo en GitHub, por ejemplo `handbridge`.
2. Descomprime este ZIP en tu computadora.
3. Entra al repositorio y selecciona **Add file → Upload files**.
4. Sube el contenido de esta carpeta (debe quedar `index.html` en la raíz, no dentro de otra carpeta).
5. Pulsa **Commit changes**.
6. Abre **Settings → Pages**.
7. En **Build and deployment**, elige **Deploy from a branch**.
8. Selecciona la rama `main` y la carpeta `/(root)`, y guarda.
9. Espera a que GitHub Pages publique el sitio. La dirección aparecerá en esa misma sección.

## Qué se adaptó
- `index.html` ahora abre la página principal.
- Las páginas PHP se convirtieron a HTML y sus enlaces internos se actualizaron.
- Se conservaron las hojas CSS, imágenes y recursos originales.
- Los archivos PHP originales se guardaron en `_php_original/` como referencia.

## Limitaciones importantes
GitHub Pages solo sirve archivos estáticos. No ejecuta PHP ni MySQL.
Por eso, en esta versión:
- Inicio de sesión y registro no autentican usuarios.
- Los formularios no guardan donaciones, voluntariados ni experiencias.
- El contenido que antes venía de MySQL se muestra como texto de demostración.
- El envío de formularios muestra un aviso explicando que falta conectar un backend.

Para activar esas funciones posteriormente, habrá que conectar un backend y una base de datos alojados en un servicio compatible. No publiques contraseñas ni credenciales de base de datos.
