# Worthy Creations (client site)

A **paying client's** live website, hosted on Netlify (zag98 team), not on the zag98 VPS:
https://worthy-creations.netlify.app. Treat changes as client work: small, previewed, and
approved by Zac before they reach `main` (a push to `main` deploys to production). Read
`../README.md` (client playbook) and `../../CLAUDE.md` (session rules).

## The business

Worthy Creations, "A Legacy Affair": a neighborhood services office at 111 South Olden
Ave, Trenton, NJ 08609. Tax preparation, bookkeeping, financial services, bill pay (cell,
PSE&G), money transfer (Vigo by Western Union, Ria), immigration services, document
proofing, translation, ESL. Contact: email worthycreations.alegacyaffair@gmail.com and the
Formspree form. No phone number or opening hours are published; don't invent them.

## The site (redesigned 2026-10-25)

- One page, plain HTML/CSS/JS, no framework or build: `index.html`, `css/site.css`,
  `js/site.js`, `404.html`, `robots.txt`, `sitemap.xml`.
- Design: colors from the logo (royal navy `#1d2b84`, crown gold `#d4a437`, gold-as-text
  `#7a5a0c`, cool paper `#f5f6fb`); Libre Caslon Text headings, Atkinson Hyperlegible text;
  the logo shown as a gold-ringed seal in the hero (one stamp animation, off with reduced
  motion); services as two grouped lists, not cards; the logo's gold rule under each h2.
- **Tax-season notice:** gold strip at the top, shown Jan 1 to Apr 15 (dates at the top of
  `js/site.js`), dismissible for the year. Preview any time with `?tax` on the URL.
- Images: `img/logo-640` / `logo-160` (webp + png), `og-image.jpg` (link previews),
  favicons. The full-size original is `img/source/logo-master.png` (404 on the live site).
- QA before every change goes live: the `zag98-site-qa` skill
  (`check-seo.mjs index.html`, `check-a11y.mjs index.html css/site.css`, `shots.mjs <url>`).
- Preview a change without touching production: `netlify deploy --dir . --site
  106992fd-7576-4136-a4f3-61f25e2299cf` (a draft URL), or push a branch and open a PR.
- Tickets: the "Clients" Trello board, prefix `worthy-creations:`.

History: moved from `projects/` on 2026-10-25; a hidden spam link from the old map-embed
snippet, `contact.php`, the GitHub Pages `CNAME` and the Bootstrap theme were removed.
