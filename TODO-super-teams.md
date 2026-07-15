# Creating Super Teams landing page — assets you must supply before launch

## v2 REDESIGN BUILT (2026-07-14)

The page was fully rebuilt against LP-super-teams-content-plan.md (~3x longer,
continues the Facebook ad's "Lia" story, trainer-carried proof, real
LinkedIn testimonials extracted from oldsite.ciagile.com, elegant design
tokens aligned with the course info page). Remaining before launch:

- [ ] **Hero workshop photo** (placeholder on page) — any real photo of
      Ethan training, landscape 4:3 ~1200px.
- [ ] **Scheduling embed** (placeholder on page) — Ethan deciding the tool.
- [ ] **Ethan's visual review** of the built page.
- [ ] Video producer delivers revised ad ending (CTA → free 15-min Team
      Diagnostic, feedback sent 2026-07-13).

## Session handoff (as of 2026-07-13, session 2 — superseded by v2 above)

State of the work, for continuing on another machine:

- Landing page done and building at `lp/super-teams/index.html` via the new
  lean "landing" shell (`shell: "landing"` in routes.ts; templates in
  scripts/templates/landing-shell.html / landing.css / landing.js).
- `deploy.tcsh` fixed: dotfile-safe copy so `.htaccess` now actually deploys.
- `.htaccess` template: `/index.html` now 301s to `/` (was 410).
- All internal links rewritten to canonical folder URLs (`/`, `/teamworks/`,
  `/jess/`) — zero `index.html` hrefs remain in the exported HTML.
- Session 2 filled in: WhatsApp number, Meta Pixel ID (+ noscript fallback),
  trainer section (photo from JESS assets + bio drafted from the JESS
  InstructorPage), and the client logo strip (scrolling, 8 logos reused from
  the homepage: BNM, Shell, HSBC, Cisco, DBS, Infineon, Bank of China, ZTE —
  Thai/Indonesian brands excluded per Ethan; CIMB excluded because the logo
  file reads "CIMB THAI").
- NOT deployed yet. First deploy will activate the full current .htaccess on
  the live server (it was stale due to the deploy bug) — spot-check
  https://www.ciagile.com/index.html 301s to / and old-URL 410s afterward.

Page: `https://www.ciagile.com/lp/super-teams/`
(All ad landing pages live under `/lp/` — future course LPs go there too.)
Source: `src/site/pages/landing/SuperTeamsLandingPage.tsx`
Shell/CSS/JS: `scripts/templates/landing-shell.html`, `landing.css`, `landing.js`

## Blocking (page won't convert without these)

- [x] **WhatsApp number** — `60192981055` set in `SuperTeamsLandingPage.tsx`.
      Powers all WhatsApp links (header, booking section) with the pre-filled
      message "Hi CI Agile, I'd like to book a free 15-min Team Diagnostic."
- [x] **Scheduling embed** — RESOLVED (2026-07-16): Calendly inline embed,
      event "15 Minute Team Diagnostic" at
      calendly.com/ethansoo-ciagile/team-diagnostic (slug renamed from /30min).
      Widget lazy-loads near the booking section / on CTA click; Meta Pixel
      `Lead` fires on Calendly's booking-confirmed postMessage (verified on
      staging via synthetic event — PageView → Lead chain confirmed).
- [x] **Meta Pixel ID** — `896556959557749` set in
      `scripts/templates/landing-shell.html`, with a `<noscript>` PageView
      fallback added. Tracking is ARMED — fires as soon as the page deploys.
      Verify post-deploy with Meta Pixel Helper / Events Manager Test Events
      (expect PageView on load, WhatsAppClick on the WA buttons).

## Content assets (placeholders are on the page, clearly marked)

- [ ] **Hero workshop photo** — real photo of an actual workshop, landscape
      ~4:3, ~1200px wide, webp. Never stock, never illustration.
      (Ethan is searching for one.)
- [ ] **2 testimonials** — photo (square, ≥112px, cropped to a 56px circle) +
      short quote about a concrete result (delays, ownership, morale) +
      name · role · company. Real clients only.
- [x] **Client logos** — scrolling strip of 8 homepage logos (pure CSS
      marquee, grayscale, reduced-motion fallback). No new assets needed.
- [x] **Trainer bio** — Ethan Soo, photo reused from
      `/assets/img/jess/people-ethan-soo.webp`. Bio lines DRAFTED from the
      JESS InstructorPage — review wording (also: bio says "23 years" while
      the stats section says "10+ years in Malaysia" — both true, but check
      consistency).

## Verify before launch

- [ ] **Stats**: "5,000+ people trained" and "10+ years in Malaysia" — confirm
      these numbers are accurate and defensible.
- [ ] **Trainer bio wording** — drafted by Claude from the JESS page, needs
      Ethan's sign-off.
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
- OG image currently falls back to the site-wide `/assets/og/teamworks-og.webp`.
  Optional: a dedicated 1200×630 Super Teams OG image would strengthen the FB
  ad preview (per-page override already supported in `src/config/seo.ts`).
