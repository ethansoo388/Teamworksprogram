# Creating Super Teams landing page — assets you must supply before launch

## Session handoff (as of 2026-07-13)

State of the work, for continuing on another machine:

- Landing page done and building at `lp/super-teams/index.html` via the new
  lean "landing" shell (`shell: "landing"` in routes.ts; templates in
  scripts/templates/landing-shell.html / landing.css / landing.js).
  Remaining work = supplying the real assets listed below.
- `deploy.tcsh` fixed: dotfile-safe copy so `.htaccess` now actually deploys.
- `.htaccess` template: `/index.html` now 301s to `/` (was 410).
- All internal links rewritten to canonical folder URLs (`/`, `/teamworks/`,
  `/jess/`) — zero `index.html` hrefs remain in the exported HTML.
- NOT deployed yet. First deploy will activate the full current .htaccess on
  the live server (it was stale due to the deploy bug) — spot-check
  https://www.ciagile.com/index.html 301s to / and old-URL 410s afterward.

Page: `https://www.ciagile.com/lp/super-teams/`
(All ad landing pages live under `/lp/` — future course LPs go there too.)
Source: `src/site/pages/landing/SuperTeamsLandingPage.tsx`
Shell/CSS/JS: `scripts/templates/landing-shell.html`, `landing.css`, `landing.js`

## Blocking (page won't convert without these)

- [ ] **WhatsApp number** — edit `WHATSAPP_NUMBER` at the top of
      `SuperTeamsLandingPage.tsx` (country code + digits only, e.g. `60123456789`).
      Powers all WhatsApp links (header, booking section) with the pre-filled
      message "Hi CI Agile, I'd like to book a free 15-min Team Diagnostic."
- [ ] **Scheduling embed URL** (Calendly or similar) — paste the embed inside
      the `#calendar-embed` container in the booking section. The inline JS
      already fires the Meta Pixel `Lead` event on Calendly's booking
      confirmation, or on first widget interaction for non-Calendly widgets.
- [ ] **Meta Pixel ID** — edit `window.META_PIXEL_ID` in
      `scripts/templates/landing-shell.html`. Tracking stays disabled while the
      value starts with `REPLACE`.

## Content assets (placeholders are on the page, clearly marked)

- [ ] **Hero workshop photo** — real photo of an actual workshop, landscape
      ~4:3, ~1200px wide, webp. Never stock, never illustration.
- [ ] **2 testimonials** — photo + short quote about a concrete result
      (delays, ownership, morale) + name · role · company. Real clients only.
- [ ] **Client logos** (4+, with permission) for the logo strip.
- [ ] **Trainer bio** — round photo, name, years of experience,
      certifications, notable companies trained.

## Verify before launch

- [ ] **Stats**: "5,000+ people trained" and "10+ years in Malaysia" — confirm
      these numbers are accurate and defensible.
- [ ] **FAQ answers** — drafted from the brief (HRD Corp claim process, small
      teams, hands-on format, pricing). Review wording, especially the HRD
      Corp claim mechanics.
- [ ] **Company registration number** — placeholder in the footer.
- [ ] **Privacy policy link** — currently points to the existing
      `/privacy-policy.html`. Confirm that's the right document for ad traffic.
- [ ] **Contact email in footer** — currently `services@ciagile.com`.

## Notes

- The page is `noindex` and excluded from sitemap.xml, but intentionally NOT
  blocked in robots.txt so Facebook's crawler can read the OG tags for the ad
  link preview (new `noindexCrawlable` list in `src/config/seo.ts`).
- The page uses a lean shell: no Tailwind CDN, no Lucide, no main.js. All CSS
  and JS are inlined — edit `scripts/templates/landing.css` / `landing.js`,
  not the built HTML.
