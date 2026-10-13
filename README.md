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

## Clientes y fuentes de logotipos

Los cinco clientes fueron confirmados por el propietario. La sección distingue empresas e instituciones públicas y no especifica proyectos ni fechas. Los logotipos se sirven localmente desde `dist/assets/clientes/`, sin depender de servidores externos.

- PDVSA: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:PDV_S.A._logo.svg), vector atribuido al manual de identidad corporativa.
- Chevron: [guía corporativa oficial](https://www.chevronlubricants.com/content/dam/internal/common/en_us/resources/Chevron_corporate_logo_overview.pdf); versión de colores planos y texto azul extraída del PDF, sin modificar colores ni proporciones.
- INCES: [recurso del sitio oficial](https://inces.gob.ve/media/images/inces_2.original.png), versión blanca presentada sobre fondo azul para asegurar el contraste.
- Gobernación del Estado Anzoátegui: [recurso del sitio oficial](https://anzoategui.gob.ve/wp-content/uploads/2022/02/logo-footer.png).
- Alcaldía de Píritu, estado Anzoátegui: se muestra su nombre hasta disponer de un logotipo verificable.
