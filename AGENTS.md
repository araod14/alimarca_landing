# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Spanish-language static landing page for Multiservicios Alimar C.A., serving Barcelona and Anzoátegui, Venezuela.

- `dist/index.html`: page structure, service descriptions, navigation, and contact sections.
- `dist/styles.css`: brand colors, layouts, responsive breakpoints, and accessibility styles.
- `dist/app.js`: mobile navigation, current year, and configurable contact links.
- `dist/assets/`: local images, including the client-provided logo.
- `.openai/hosting.json`: Sites project identity and static deployment directory.
- `README.md`: local preview and contact configuration instructions.

The files in `dist/` are editable source and deployment assets; do not treat them as disposable build output. There is no backend or separate test directory.

## Build, Test, and Development Commands

- `python3 -m http.server 8000 --directory dist`: serve the page locally at `http://localhost:8000`.
- `node --check dist/app.js`: check JavaScript syntax.
- `python3 -m json.tool .openai/hosting.json`: validate the hosting configuration.

No dependency installation or build step is required. No package manager, formatter, or linter is configured.

## Coding Style & Naming Conventions

Use semantic HTML, accessible controls, and Spanish visitor-facing text. Follow the existing two-space indentation in HTML and JavaScript. JavaScript uses `const` or `let`, single quotes, and semicolons. CSS currently uses compact formatting; avoid unrelated reformatting.

Use descriptive kebab-case CSS classes and element IDs, and camelCase JavaScript identifiers. Reuse CSS color variables and preserve the logo’s blue-and-white palette.

## Testing Guidelines

No automated test framework or coverage target is configured. Run syntax checks and manually inspect desktop and mobile layouts. Verify anchor destinations, missing assets, keyboard focus, menu toggling, Escape dismissal, and horizontal overflow. Confirm blank contacts remain pending and configured WhatsApp/email links work. Check the blue fallback when the external Unsplash image is unavailable. Report browser verification limitations explicitly.

## Commit & Pull Request Guidelines

No usable Git history is available in this checkout. Use concise imperative commit messages, such as `Fix mobile navigation focus`. Pull requests should explain the change, list validation performed, link relevant issues, and include desktop/mobile screenshots for visual changes.

## Content & Configuration

Configure confirmed contacts only in `CONTACT` in `dist/app.js`; WhatsApp numbers require country codes and digits only. Never invent testimonials, projects, certifications, or business claims. Preserve the Sites project ID, keep credentials out of files, and complete contact details before public release.
