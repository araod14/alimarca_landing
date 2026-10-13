# Multiservicios Alimar C.A.

Landing estática en español. Los archivos publicables están en `dist/`; no necesita instalación ni compilación.

## Vista local

Ejecutar `python3 -m http.server 8000 --directory dist` y abrir http://localhost:8000.

## Contactos

Editar `CONTACT` en `dist/app.js`: `whatsapp` contiene el número confirmado con código de país, solo dígitos; `email` contiene el correo comercial confirmado. Los canales vacíos permanecen pendientes sin enlaces ficticios.

## Recursos

Logo proporcionado por el cliente. La portada utiliza una fotografía ilustrativa de Unsplash cargada desde su CDN, con fondo azul de respaldo si no hay conexión. No representa un proyecto de Alimar. Reemplazar por una fotografía propia cuando esté disponible.

Los datos de ejemplo que aparecen en la página no son enlaces de contacto. Reemplazarlos con los datos comerciales confirmados antes de anunciar el sitio.

## Despliegue automático

El flujo `.github/workflows/deploy-pages.yml` publica `dist/` en GitHub Pages con cada push a `main` que cambie la página. También puede iniciarse manualmente desde Actions. En GitHub, configurar **Settings → Pages → Build and deployment → Source: GitHub Actions**. El dominio personalizado se configura en la misma página, en **Custom domain**; el workflow no puede hacerlo mediante un archivo `CNAME`.

El sitio de Sites configurado en `.openai/hosting.json` es una publicación separada. Los pushes a GitHub no actualizan esa publicación de forma permanente.
