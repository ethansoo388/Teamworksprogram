import type { PageMeta } from "@/types";

// ---------------------------------------------------------------------------
// Creating Super Teams — dedicated conversion landing page for paid Facebook
// traffic. NOT a normal website page:
//   - No site navigation, no footer links to other pages
//   - One conversion goal: book the free 15-min Team Diagnostic
//   - Rendered with the lean "landing" shell (no Tailwind CDN, no Lucide,
//     no main.js) — styles/JS live in scripts/templates/landing.css / .js
//   - Styled with lp-* classes, not Tailwind utilities
// ---------------------------------------------------------------------------

// TODO: replace with the real WhatsApp number (country code, digits only,
// e.g. "60123456789"). Used by every WhatsApp link on the page.
const WHATSAPP_NUMBER = "REPLACE_WITH_WHATSAPP_NUMBER";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi CI Agile, I'd like to book a free 15-min Team Diagnostic."
).replace(/'/g, "%27")}`;

const CTA_TEXT = "Book my free 15-min Team Diagnostic";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#1FAF54" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function SuperTeamsLandingPage() {
  return (
    <>
      {/* ── Header (logo + WhatsApp link only — NO navigation) ─────────── */}
      <header className="lp-header">
        <img
          src="/assets/img/main/ciagile-main-logo.webp"
          alt="CI Agile"
          width="165"
          height="48"
        />
        <a
          href={WHATSAPP_LINK}
          className="lp-header-wa"
          data-wa-link
          data-placement="header"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          WhatsApp us
        </a>
      </header>

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="lp-hero" id="hero">
        <div className="lp-container">
          <div>
            <span className="lp-badge">
              <img
                src="/assets/img/teamworks/ciagile-teamworks-hrdcorp-claimable-logo.webp"
                alt="HRD Corp Claimable Course logo"
                width="192"
                height="192"
              />
              100% HRD Corp Claimable
            </span>
            <h1>
              Turn the team that needs chasing into a team that delivers —{" "}
              <em>in 2 days</em>
            </h1>
            <p className="lp-hero-sub">
              Creating Super Teams: hands-on training for Malaysian SMEs. No
              slides marathon — your team learns by doing.
            </p>
            <a href="#booking" className="lp-btn lp-btn-primary" id="hero-cta">
              {CTA_TEXT}
            </a>
            <p className="lp-trust-line">
              No obligation · Zoom or phone · English / BM / 中文
            </p>
          </div>
          <div className="lp-hero-photo">
            {/* TODO: real workshop photo — full-width, real photography of an
                actual CI Agile workshop in progress. Never stock, never
                illustration. Recommended: landscape 4:3, ~1200px wide, webp. */}
            <div
              className="lp-placeholder lp-placeholder-photo"
              role="img"
              aria-label="Placeholder for a real workshop photo"
            >
              [PLACEHOLDER — real workshop photo]
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Pain section (wording matches the Facebook ad — do not edit) */}
      <section className="lp-pain" id="pain">
        <div className="lp-container">
          <h2>Does this sound like your team?</h2>
          <div className="lp-pain-grid">
            <div className="lp-pain-card">
              <AlertIcon />
              <span>Deadlines slip — every project needs chasing</span>
            </div>
            <div className="lp-pain-card">
              <AlertIcon />
              <span>One &lsquo;super employee&rsquo; carries everyone else</span>
            </div>
            <div className="lp-pain-card">
              <AlertIcon />
              <span>Broken communication between departments</span>
            </div>
            <div className="lp-pain-card">
              <AlertIcon />
              <span>Nobody takes ownership when things go wrong</span>
            </div>
          </div>
          <p className="lp-pain-closer">
            The problem isn&rsquo;t your people.{" "}
            <em>It&rsquo;s a business running with no system.</em>
          </p>
        </div>
      </section>

      {/* ── 3. The offer — the call as lead magnet ─────────────────────── */}
      <section id="offer">
        <div className="lp-container">
          <div className="lp-offer-box">
            <h2>Free 15-minute Team Diagnostic</h2>
            <p className="lp-offer-lead">
              Walk away with (even if you never buy):
            </p>
            <ul className="lp-offer-list">
              <li>
                <CheckIcon />
                <span>
                  Your <strong>Team Score</strong>, benchmarked against 5,000+
                  people we&rsquo;ve trained
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  The <strong>#1 fix</strong> for your team, from a senior
                  trainer
                </span>
              </li>
              <li>
                <CheckIcon />
                <span>
                  Your <strong>HRD Corp levy eligibility</strong> — confirmed
                  for you
                </span>
              </li>
            </ul>
            <a href="#booking" className="lp-btn lp-btn-primary">
              Pick a time slot
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Proof ────────────────────────────────────────────────────── */}
      <section id="proof">
        <div className="lp-container">
          {/* TODO: verify these numbers before launch (5,000+ trained, 10+
              years) — flagged in TODO-super-teams.md */}
          <div className="lp-stats">
            <div>
              <div className="lp-stat-number">5,000+</div>
              <div className="lp-stat-label">people trained</div>
            </div>
            <div>
              <div className="lp-stat-number">10+</div>
              <div className="lp-stat-label">years in Malaysia</div>
            </div>
            <div>
              <div className="lp-stat-number">RM350</div>
              <div className="lp-stat-label">from, per pax/day</div>
            </div>
          </div>

          {/* TODO: real client logos (with permission) — replace placeholders */}
          <div className="lp-logo-strip">
            <div className="lp-placeholder lp-placeholder-logo">[Client logo]</div>
            <div className="lp-placeholder lp-placeholder-logo">[Client logo]</div>
            <div className="lp-placeholder lp-placeholder-logo">[Client logo]</div>
            <div className="lp-placeholder lp-placeholder-logo">[Client logo]</div>
          </div>

          {/* TODO: two real testimonials — photo, short quote about a concrete
              result (delays, ownership, morale), name · role · company */}
          <div className="lp-testimonials">
            <div className="lp-testimonial">
              <blockquote>
                [PLACEHOLDER — real client quote about a concrete result, e.g.
                projects stopped slipping after the training.]
              </blockquote>
              <div className="lp-testimonial-person">
                <div
                  className="lp-placeholder lp-placeholder-avatar"
                  role="img"
                  aria-label="Placeholder for client photo"
                >
                  [Photo]
                </div>
                <cite>
                  <strong>[Client name]</strong>
                  [Role] · [Company]
                </cite>
              </div>
            </div>
            <div className="lp-testimonial">
              <blockquote>
                [PLACEHOLDER — real client quote about a concrete result, e.g.
                team members now take ownership without being chased.]
              </blockquote>
              <div className="lp-testimonial-person">
                <div
                  className="lp-placeholder lp-placeholder-avatar"
                  role="img"
                  aria-label="Placeholder for client photo"
                >
                  [Photo]
                </div>
                <cite>
                  <strong>[Client name]</strong>
                  [Role] · [Company]
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. How it works ─────────────────────────────────────────────── */}
      <section id="how-it-works">
        <div className="lp-container">
          <h2>How it works</h2>
          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-number">1</div>
              <div>
                <h3>Book the 15-min call</h3>
                <p>Pick a slot that suits you.</p>
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-number">2</div>
              <div>
                <h3>We design your session</h3>
                <p>Tailored to your team&rsquo;s real problems.</p>
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-number">3</div>
              <div>
                <h3>Team transformed in 2 days</h3>
                <p>Hands-on training at your office or ours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Trainer credibility ──────────────────────────────────────── */}
      <section className="lp-trainer" id="trainer">
        <div className="lp-container">
          <h2>Who trains your team</h2>
          {/* TODO: real trainer photo (round crop), name, and two lines:
              years of experience + certifications + notable companies trained */}
          <div
            className="lp-placeholder lp-placeholder-trainer"
            role="img"
            aria-label="Placeholder for trainer photo"
          >
            [Trainer photo]
          </div>
          <h3>[Trainer name]</h3>
          <p>
            [PLACEHOLDER — years of experience and certifications, e.g.
            &ldquo;15+ years training teams across Malaysia · Certified …&rdquo;]
          </p>
          <p>
            [PLACEHOLDER — notable companies trained]
          </p>
        </div>
      </section>

      {/* ── 7. FAQ (native <details> — keyboard-operable, zero JS) ─────── */}
      {/* NOTE: draft answers written from the brief — review before launch. */}
      <section className="lp-faq" id="faq">
        <div className="lp-container">
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>How does the HRD Corp claim work?</summary>
            <p>
              Creating Super Teams is 100% HRD Corp claimable. If your company
              contributes to the HRD Corp levy, the training cost can be
              claimed from your existing levy — often at no extra cash cost to
              you. We guide you through the paperwork: the grant application
              before the training and the claim after. Not sure if you&rsquo;re
              eligible? We&rsquo;ll confirm your levy eligibility for you
              during the free 15-minute Team Diagnostic.
            </p>
          </details>
          <details>
            <summary>What if my team is small (under 10 pax)?</summary>
            <p>
              That&rsquo;s normal for SMEs — many of the teams we train are
              small. The workshop is hands-on and works best when your real,
              everyday team is in the room together, even if that&rsquo;s only
              a handful of people. Book the free Team Diagnostic and
              we&rsquo;ll recommend the best format and pricing for your team
              size.
            </p>
          </details>
          <details>
            <summary>Is this classroom lecturing?</summary>
            <p>
              No. There is no slides marathon. Creating Super Teams is a
              hands-on 2-day workshop: your team works through exercises,
              simulations, and their own real work problems — and applies what
              they learn on the spot. Your people learn by doing, because
              that&rsquo;s what actually changes how they work when they&rsquo;re
              back at their desks.
            </p>
          </details>
          <details>
            <summary>How much does the full training cost?</summary>
            <p>
              From RM350 per pax per day for the 2-day program. The final
              quote depends on your team size and location. Because the
              training is 100% HRD Corp claimable, your HRD Corp levy may
              cover the full cost. We&rsquo;ll confirm the exact number — and
              your levy eligibility — on the free 15-minute call.
            </p>
          </details>
        </div>
      </section>

      {/* ── 8. Final CTA — booking ──────────────────────────────────────── */}
      <section className="lp-booking" id="booking">
        <div className="lp-container">
          <h2>Ready? Pick your 15-minute slot below.</h2>
          {/* TODO: paste the real scheduling embed (Calendly or similar)
              inside #calendar-embed, replacing the placeholder div. The
              inline JS already fires the Meta Pixel "Lead" event on
              Calendly's booking confirmation (or on first widget interaction
              for non-Calendly widgets). */}
          <div className="lp-calendar-embed lp-placeholder" id="calendar-embed">
            [PLACEHOLDER — scheduling widget embeds here. Paste your
            Calendly/booking embed code inside this container.]
          </div>
          <p className="lp-booking-or">Prefer WhatsApp?</p>
          <a
            href={WHATSAPP_LINK}
            className="lp-btn lp-btn-outline"
            data-wa-link
            data-placement="booking-section"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Chat with us on WhatsApp
          </a>
        </div>
      </section>

      {/* ── 9. Footer (minimal — legally required items only) ──────────── */}
      <footer className="lp-footer">
        <div className="lp-container">
          {/* TODO: real company registration number */}
          <p>CI Agile · Company Registration No.: [TODO — reg. no.]</p>
          <p>
            <a href="/privacy-policy.html">Privacy Policy</a>
            {" · "}
            <a href="mailto:services@ciagile.com">services@ciagile.com</a>
          </p>
        </div>
      </footer>

      {/* ── Sticky mobile CTA bar (shown/hidden by inline JS) ──────────── */}
      <div className="lp-sticky" id="sticky-cta">
        <a href="#booking" className="lp-btn lp-btn-primary">
          {CTA_TEXT}
        </a>
      </div>
    </>
  );
}

export const pageMeta: PageMeta = {
  path: "/lp/super-teams",
  filename: "lp/super-teams/index.html",
  title:
    "Creating Super Teams — 2-Day Team Training | 100% HRD Corp Claimable",
  description:
    "Turn the team that needs chasing into a team that delivers — in 2 days. Hands-on training for Malaysian SMEs, 100% HRD Corp claimable. Book a free 15-min Team Diagnostic.",
  siteType: "teamworks",
};
