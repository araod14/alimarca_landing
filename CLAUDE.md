# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Spanish-language static landing page for Multiservicios Alimar C.A. (contractor in Barcelona, Anzoátegui, Venezuela). No backend, no build step, no dependencies. `AGENTS.md` holds the contributor-facing rules (coding style, content policy, PR conventions); read it too. This file covers the architecture that spans files.

## Commands

- `python3 -m http.server 8000 --directory dist` — serve locally at http://localhost:8000
- `node --check dist/app.js` — JS syntax check (also run by the deploy workflow as a gate)
- `python3 -m json.tool .openai/hosting.json` — validate hosting config

There is no linter, formatter, or test runner. Verify changes by manual inspection at desktop and the three mobile breakpoints; report any browser-verification limits explicitly.

## Architecture

The site is three files in `dist/` (`index.html`, `styles.css`, `app.js`) plus local images in `dist/assets/`. These are editable source, not build output.

**Runtime contact activation is the key cross-file dependency.** `index.html` ships the contact section in a dormant "CONTACTO PRÓXIMAMENTE" state with placeholder channel markup and `hidden` WhatsApp buttons. `app.js` holds the single source of truth in the frozen `CONTACT` object (`whatsapp`, `email`) and, on load, validates each value by regex before mutating the DOM to activate it:
- A valid WhatsApp number builds a `wa.me` link with a prefilled quote message and reveals every `[data-whatsapp-link]` element (the contact-panel CTA and the mobile floating button).
- A valid email enables the email channel via `mailto:`.
- If any channel activates, the status flips to "CONTACTO COMERCIAL" and the panel copy changes.

So editing contacts means editing `CONTACT` in `app.js` only — never hardcode links in HTML. Invalid or empty values intentionally leave channels pending with no fake links. The content policy in AGENTS.md (no invented testimonials, projects, or claims) is strict; the placeholder "próximamente" state is deliberate until real contacts are confirmed.

`app.js` also drives the mobile menu toggle (aria-expanded, Escape-to-close, auto-close on link click and on resize past 1000px) and stamps `#year`.

**Styling** is one compact CSS file. Design tokens are CSS custom properties on `:root` (the `--navy`/`--blue`/`--sky` blue palette must be preserved — it matches the client logo). New sections were appended to the bottom of `styles.css` (clients, process, FAQ) rather than interleaved; follow that pattern and avoid reformatting existing compact rules. Responsive breakpoints: **1000px** (tablet / mobile nav), **720px** (phone), **359px** (narrow). Accessibility is load-bearing: skip link, focus-visible outlines, 44px touch targets, and `prefers-reduced-motion` handling.

The hero background is a self-hosted image in `dist/assets/` (`hero-1920.jpg` desktop, `hero-1200.jpg` ≤720px, preloaded in the head) with a navy CSS fallback color if it fails to load — illustrative, not an Alimar project.

SEO/sharing metadata lives in the `<head>` of `index.html`: Open Graph tags, `canonical`, and a `GeneralContractor` JSON-LD block. Alongside the page are `robots.txt`, `sitemap.xml`, and `404.html` (GitHub Pages serves the latter on misses). All absolute URLs point at `https://multiservicioalimar.com/` — update them together if the domain changes.

Client logos are served locally from `dist/assets/clientes/`. Note `cvp.webp` and `pdvsa-gas.jpg` exist in that folder but are intentionally unused — PDVSA renders as one card.

## Deployment (two independent targets)

1. **GitHub Pages** via `.github/workflows/deploy-pages.yml` — publishes `dist/` on each push to `main` that touches `dist/**` (or the workflow), or manually. Requires Settings → Pages → Source: GitHub Actions.
2. **OpenAI Sites** identified by `project_id` in `.openai/hosting.json` (serves `dist/`) — a separate publication; GitHub pushes do not update it. Preserve that project ID.
