# Worthy Creations (client site)

A **paying client's** live website, hosted on Netlify, not on the zag98 VPS. Treat changes
as client work: small, previewed, and approved by Zac before they reach `main`. Read
`../README.md` (client playbook) and `../../CLAUDE.md` (session rules).

- One static page: `index.html`, theme CSS in `css/` (overrides in `css/custom.css`),
  images in `img/`, libraries in `vendor/`. No build step; `netlify.toml` publishes `.`.
- Contact form posts to Formspree; the client's email is in the `mailto:` link.
- Domain: Zac's (see `../README.md` "Clients" table). DNS changes are Zac's.
- Preview locally: `npx serve .`. On Netlify, every PR gets a deploy preview to send
  the client.
- Tickets: the "Clients" Trello board in the zag98 workspace, prefix `worthy-creations:`.
- History: moved from `projects/` on 2026-10-25. Removed then: a hidden spam link to a
  piracy site injected by the Google-map embed snippet, the unused `contact.php`, the old
  GitHub Pages `CNAME`, and Windows `Zone.Identifier` junk files.

Ideas: fill in `<meta name="description">` and social preview tags (SEO), compress the
banner images, update the copyright year, replace the map embed with Google's official
embed code.
