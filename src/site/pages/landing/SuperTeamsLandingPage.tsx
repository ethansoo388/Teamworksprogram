import type { PageMeta } from "@/types";

// ---------------------------------------------------------------------------
// Creating Super Teams — dedicated conversion landing page for paid Facebook
// traffic. NOT a normal website page:
//   - No site navigation, no footer links to other pages
//   - One conversion goal: book the free 15-min Team Diagnostic
//   - Rendered with the lean "landing" shell (no Tailwind CDN, no Lucide,
//     no main.js) — styles/JS live in scripts/templates/landing.css / .js
//   - Styled with lp-* classes, not Tailwind utilities
//
// Copy architecture: LP-super-teams-content-plan.md (approved 2026-07-14).
// The page continues the Facebook ad's "Lia" story — key phrases ("No
// System", "SOPs / Ownership / Workflows", "busy but results are slow",
// "RM350/pax") intentionally mirror the ad captions. Keep them in sync.
// ---------------------------------------------------------------------------

// WhatsApp number (country code + digits only). Used by every WhatsApp link
// on the page.
const WHATSAPP_NUMBER = "60192981055";

const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi CI Agile, I'd like to book a free 15-min Team Diagnostic."
).replace(/'/g, "%27")}`;

const CTA_TEXT = "Book my free 15-min Team Diagnostic";

// Client logos shared with the main site's homepage strip — famous
// multinationals + Malaysian organisations only (no Thai/Indonesian brands).
const CLIENT_LOGOS = [
  { name: "Bank Negara Malaysia", logo: "/assets/img/main/logo-bank-negara-malaysia.webp" },
  { name: "Shell", logo: "/assets/img/main/logo-shell.webp" },
  { name: "HSBC", logo: "/assets/img/main/logo-hsbc.webp" },
  { name: "Cisco", logo: "/assets/img/main/logo-cisco.webp" },
  { name: "DBS", logo: "/assets/img/main/logo-dbs.webp" },
  { name: "Infineon", logo: "/assets/img/main/logo-infineon.webp" },
  { name: "Bank of China", logo: "/assets/img/main/logo-bank-of-china.webp" },
  { name: "ZTE", logo: "/assets/img/main/logo-zte.webp" },
];

// Real LinkedIn posts from past participants (screenshots extracted from
// oldsite.ciagile.com "Reviews and Stories"). Quotes are from Ethan's Scrum
// Master / Product Owner classes — framed truthfully as trainer proof, not
// as Super Teams alumni.
const LINKEDIN_POSTS = [
  { file: "sg1", alt: "LinkedIn post by Fadzlianie Yusof, Project Manager, about missed deadlines and workload transparency before training with Ethan Soo" },
  { file: "my2", alt: "LinkedIn post by Amiroel Yusof, Senior Manager at MAHB, thanking trainer Ethan Soo" },
  { file: "my1", alt: "LinkedIn post by Farhana Aina Fu'ad, Head of Digital Services, about mindset change in Ethan Soo's class" },
  { file: "th2", alt: "LinkedIn post by Navarat Veerawongchai, Project Manager, with workshop photos from a CI Agile class" },
  { file: "sg2", alt: "LinkedIn post by Jiaying Boh about learning to work effectively in a team, with class photos" },
  { file: "th1", alt: "LinkedIn post by Phiroon Rattanaverojvilai, Senior Manager, thanking Ethan Soo after a 2-day class" },
];

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

      {/* ── §2 Hero ─────────────────────────────────────────────────────── */}
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
              The team system that banks, airports and tech giants pay
              enterprise prices for — rebuilt for Malaysian SME teams.
              Hands-on, no slides marathon: your team learns by doing, on
              their own real work.
            </p>
            <a href="#booking" className="lp-btn lp-btn-primary" id="hero-cta">
              {CTA_TEXT}
            </a>
            <p className="lp-trust-line">
              No obligation · Zoom or phone · English / BM / 中文
            </p>
          </div>
          <div className="lp-hero-photo">
            {/* TODO: real workshop photo — full-width, real photography of
                Ethan actually training (any past class works). Never stock,
                never illustration. Landscape 4:3, ~1200px wide, webp. */}
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

      {/* ── §3 Pain section (wording matches the Facebook ad — do not edit) */}
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

      {/* ── §4 Story — continues the ad's "Lia" narrative ───────────────── */}
      <section className="lp-story" id="story">
        <div className="lp-container lp-narrow">
          <h2>
            Every company has a Lia.{" "}
            <em>You&rsquo;re picturing yours right now.</em>
          </h2>
          <p>
            The one in meetings all day, answering messages non-stop. The one
            everyone depends on — so much that the day she takes MC, the
            whole company slows down, and people still call her on her sick
            bed.
          </p>
          <p>
            Here&rsquo;s how that story usually continues. Because
            &ldquo;she&rsquo;s the only one who can handle it,&rdquo; every
            urgent job lands on her desk. Until the day she hands in her
            resignation — tired of carrying colleagues who are paid the same
            to do less. And when she walks out, she takes the SOPs with her —
            because they were never written down. They only ever existed in
            her head.
          </p>
          <p>
            Meanwhile you&rsquo;re not just the boss anymore. You&rsquo;re
            the project manager, the quality checker, and the backup plan for
            every single job in the company. It&rsquo;s 9.40pm on a Tuesday
            and you&rsquo;re still on WhatsApp — chasing.
          </p>
          <h3 className="lp-cost-heading">
            Here&rsquo;s what running with no system is really costing you:
          </h3>
          <ul className="lp-cost-list">
            <li>
              <strong>Clients.</strong> One missed deadline is forgiven. A
              pattern gets you replaced.
            </li>
            <li>
              <strong>Your best people.</strong> A-players don&rsquo;t quit
              companies — they quit chaos.
            </li>
            <li>
              <strong>Growth.</strong> You can&rsquo;t take on more business
              while every current project needs your push to cross the line.
            </li>
            <li>
              <strong>Your life.</strong> Be honest: when was your last
              holiday without the phone?
            </li>
          </ul>
        </div>
      </section>

      {/* ── §5 Reframe — the system, not the people ─────────────────────── */}
      <section className="lp-reframe" id="reframe">
        <div className="lp-container lp-narrow">
          <h2>
            It&rsquo;s not your people.{" "}
            <em>It&rsquo;s the system they work in.</em>
          </h2>
          <p>
            Think about it: the same employee who &ldquo;lacks
            initiative&rdquo; in your office somehow organises a wedding for
            300 guests on the weekend. People don&rsquo;t lack ability — they
            follow whatever system surrounds them. And when the workplace has
            no system, they follow the oldest rule there is:{" "}
            <em>wait for the boss to chase.</em>
          </p>
          <p className="lp-reframe-lead">
            That&rsquo;s why the usual fixes keep failing:
          </p>
          <ul className="lp-fail-list">
            <li>
              <strong>The motivational talk.</strong> Everyone claps. Two
              weeks later the energy is gone, because Monday morning still
              works exactly like before.
            </li>
            <li>
              <strong>KPIs and dashboards.</strong> People learn to explain
              the numbers instead of owning the outcome.
            </li>
            <li>
              <strong>Hiring more staff.</strong> Adding people to a team
              with no system just gives you more people to chase.
            </li>
            <li>
              <strong>Replacing people.</strong> New hires inherit the same
              chaos — and produce the same results within 90 days.
            </li>
          </ul>
          <p>
            High-performing teams in banks, airports and tech companies
            don&rsquo;t run on talent or motivation. They run on three
            boring-sounding things:
          </p>
          <div className="lp-triad">
            <div className="lp-triad-item">
              <h3>SOPs</h3>
              <p>that live on paper, not in one employee&rsquo;s head</p>
            </div>
            <div className="lp-triad-item">
              <h3>Ownership</h3>
              <p>so clear that nobody waits to be chased</p>
            </div>
            <div className="lp-triad-item">
              <h3>Workflows</h3>
              <p>
                everyone can see — so &ldquo;I thought he was doing it&rdquo;
                dies
              </p>
            </div>
          </div>
          <p className="lp-reframe-closer">
            A system is not a personality trait. It can be{" "}
            <em>installed</em>. That&rsquo;s what Creating Super Teams does —
            in 2 days, with your real team, on your real work.
          </p>
          <a href="#booking" className="lp-btn lp-btn-primary">
            Diagnose my team — free
          </a>
        </div>
      </section>

      {/* ── §6 Trainer authority (carries the proof for the new product) ── */}
      <section className="lp-trainer" id="trainer">
        <div className="lp-container lp-narrow">
          <h2>The trainer banks and airports trust with their teams</h2>
          <img
            src="/assets/img/jess/people-ethan-soo.webp"
            alt="Ethan Soo, lead trainer"
            className="lp-trainer-photo"
            width="128"
            height="128"
          />
          <h3>Ethan Soo</h3>
          <p className="lp-trainer-creds">
            Scrum Fellow · Asia Pacific Regional Partner, Scrum Inc.
          </p>
          <p className="lp-trainer-bio">
            For 23 years, Ethan has built high-performance team systems
            inside organisations most SMEs only read about — banks, airports,
            tech multinationals and government agencies across 12+ countries.
            He has trained 5,000+ people in 300+ sessions, and represented
            Scrum Inc. USA in presenting enterprise transformation awards to
            Malaysia Airports and Bank Islam.
          </p>
          <blockquote className="lp-endorsement">
            <p>
              &ldquo;Having reviewed the plan carefully, I strongly recommend
              training with Ethan. These will be excellent courses.&rdquo;
            </p>
            <cite>
              <strong>Dr. Jeff Sutherland</strong>
              co-creator of Scrum · Founder &amp; Chairman, Scrum Inc.
            </cite>
          </blockquote>
          <p className="lp-sme-pitch">
            Creating Super Teams takes the same team system that enterprises
            pay premium prices for — and rebuilds it for Malaysian SME teams.
            Same trainer. Same system. SME pricing:{" "}
            <strong>from RM350 per pax per day</strong> — 100% HRD Corp
            claimable.
          </p>
        </div>
      </section>

      {/* ── §7 The offer — the call as lead magnet ──────────────────────── */}
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
                  The <strong>#1 fix</strong> for your team, from Ethan
                  himself
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
            <p className="lp-offer-note">
              Not a sales pitch. If we can&rsquo;t help your team, we&rsquo;ll
              say so in the first five minutes.
            </p>
            <a href="#booking" className="lp-btn lp-btn-primary">
              Pick a time slot
            </a>
          </div>
        </div>
      </section>

      {/* ── §8 Self-identification grid ─────────────────────────────────── */}
      <section className="lp-idgrid-section" id="who">
        <div className="lp-container">
          <h2>This is for you if you&rsquo;re&hellip;</h2>
          <div className="lp-idgrid">
            <div className="lp-idcard">
              <h3>The owner or founder</h3>
              <p>
                Still personally chasing every project — and you can&rsquo;t
                remember the last real holiday.
              </p>
            </div>
            <div className="lp-idcard">
              <h3>The GM or department head</h3>
              <p>Your projects only move when you push.</p>
            </div>
            <div className="lp-idcard">
              <h3>The HR or L&amp;D manager</h3>
              <p>
                Tired of booking trainings that people enjoy on the day and
                forget by Friday.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── §9 Causal ladder ────────────────────────────────────────────── */}
      <section className="lp-ladder-section" id="ladder">
        <div className="lp-container lp-narrow">
          <h2>What one working system changes</h2>
          <div className="lp-ladder">
            <div className="lp-ladder-step">Install a team system</div>
            <div className="lp-ladder-step">Ownership without chasing</div>
            <div className="lp-ladder-step">Deadlines that hold</div>
            <div className="lp-ladder-step lp-ladder-final">
              A business that grows — without burning you out
            </div>
          </div>
          <a href="#booking" className="lp-btn lp-btn-primary">
            Yes, I want this for my team
          </a>
        </div>
      </section>

      {/* ── §10 Inside the 2 days (real curriculum: Day 1 = M1–2, Day 2 =
             M3–4, condensed from /teamworks/creating-super-teams.html) ──── */}
      <section className="lp-days-section" id="curriculum">
        <div className="lp-container">
          <h2>Inside the 2 days</h2>
          <p className="lp-days-lead">
            No slides marathon. Your team works on their own real projects
            from the first hour — the workshop is built around your business,
            not case studies.
          </p>
          <div className="lp-days">
            <div className="lp-day">
              <div className="lp-day-tag">Day 1</div>
              <h3>See the problem. Fix the flow.</h3>
              <ul>
                <li>
                  <strong>
                    Module 1: Why your team is busy but results are slow
                  </strong>{" "}
                  — experience how overload slows teams down, and find your
                  team&rsquo;s hidden bottlenecks, unclear priorities and
                  invisible work
                </li>
                <li>
                  <strong>Module 2: Fix the flow of work</strong> — make work
                  visible and aligned, reduce overload, and focus on
                  finishing instead of starting more
                </li>
              </ul>
            </div>
            <div className="lp-day">
              <div className="lp-day-tag">Day 2</div>
              <h3>Make it stick. Keep improving.</h3>
              <ul>
                <li>
                  <strong>
                    Module 3: Stop the back-and-forth — make decisions stick
                  </strong>{" "}
                  — clear ownership and accountability, faster decisions,
                  less rework
                </li>
                <li>
                  <strong>Module 4: Build a team that improves itself</strong>{" "}
                  — simple routines your team runs on their own, surfacing
                  problems early, improving every week without the boss
                  pushing
                </li>
              </ul>
            </div>
          </div>
          <p className="lp-days-note">
            At your office or ours · English / BM / 中文
          </p>
        </div>
      </section>

      {/* ── §11 Named outcomes (future pacing) ──────────────────────────── */}
      <section className="lp-outcomes-section" id="outcomes">
        <div className="lp-container">
          <h2>What your Monday mornings look like after</h2>
          <div className="lp-outcomes">
            <div className="lp-outcome">
              <h3>Ownership without chasing</h3>
              <p>
                Status updates arrive before you ask. Problems come to you
                with proposed solutions attached.
              </p>
            </div>
            <div className="lp-outcome">
              <h3>Deadlines that hold</h3>
              <p>
                Commitments are made by the team, tracked by the team,
                defended by the team.
              </p>
            </div>
            <div className="lp-outcome">
              <h3>A boss who can step back</h3>
              <p>
                Take the two-week holiday. The system doesn&rsquo;t go on
                leave.
              </p>
            </div>
          </div>
          <a href="#booking" className="lp-btn lp-btn-primary">
            I&rsquo;m ready to stop chasing
          </a>
        </div>
      </section>

      {/* ── §12 Proof cluster — stats, logos, testimonials ──────────────── */}
      <section className="lp-proof" id="proof">
        <div className="lp-container">
          <div className="lp-stats">
            <div>
              <div className="lp-stat-number">5,000+</div>
              <div className="lp-stat-label">people trained</div>
            </div>
            <div>
              <div className="lp-stat-number">300+</div>
              <div className="lp-stat-label">training sessions</div>
            </div>
            <div>
              <div className="lp-stat-number">23</div>
              <div className="lp-stat-label">years&rsquo; experience</div>
            </div>
          </div>

          {/* Client logo strip — infinite scroll, pure CSS (keyframes in
              landing.css). The list is rendered twice for a seamless loop;
              the duplicate copy is hidden from assistive tech. */}
          <div className="lp-logo-strip">
            <div className="lp-logo-track">
              {CLIENT_LOGOS.map((client) => (
                <img
                  key={client.name}
                  src={client.logo}
                  alt={client.name}
                  height="40"
                  loading="lazy"
                />
              ))}
              {CLIENT_LOGOS.map((client) => (
                <img
                  key={`${client.name}-dup`}
                  src={client.logo}
                  alt=""
                  aria-hidden="true"
                  height="40"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Quotes from past classes (Scrum Master / Product Owner) —
              honestly framed as proof of the trainer, not of this course. */}
          <h3 className="lp-proof-heading">
            What participants say about training with Ethan
          </h3>
          <div className="lp-pullquotes">
            <blockquote className="lp-pullquote">
              <p>
                &ldquo;The main impediments I have encountered are missing
                deadlines and lack of transparency on what is our
                teammates&rsquo; workload — at the end of the day, someone
                has to pick up the slack! [Now] I understand why&hellip; it
                is always about transparency, inspect and adapt.&rdquo;
              </p>
              <cite>
                <strong>Fadzlianie Yusof</strong>
                Project Manager, Product Validation
              </cite>
            </blockquote>
            <blockquote className="lp-pullquote">
              <p>
                &ldquo;Change and uncertainty are not an inconvenience, but a
                source of opportunity. Thank you to the excellent Trainer
                Ethan Soo for his valuable insights and exercises.&rdquo;
              </p>
              <cite>
                <strong>Amiroel Yusof</strong>
                Senior Manager, Operational Excellence &amp; Guest Experience,
                MAHB (Malaysia Airports)
              </cite>
            </blockquote>
          </div>

          <p className="lp-li-caption">
            Real posts from participants on LinkedIn — swipe to read
          </p>
          <div className="lp-li-strip" tabIndex={0}>
            {LINKEDIN_POSTS.map((post) => (
              <img
                key={post.file}
                src={`/assets/img/lp/linkedin-testi-${post.file}.webp`}
                alt={post.alt}
                width="406"
                height="901"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── §13 How it works ────────────────────────────────────────────── */}
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

      {/* ── §14 FAQ (native <details> — keyboard-operable, zero JS) ─────── */}
      <section className="lp-faq" id="faq">
        <div className="lp-container lp-narrow">
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
            <summary>We&rsquo;re too busy for 2 days of training.</summary>
            <p>
              That&rsquo;s usually the strongest sign you need it. The
              busyness is the symptom — chasing, rework and fire-fighting
              consume far more than 2 days every month. And because the
              workshop runs on your team&rsquo;s real projects, the work
              doesn&rsquo;t stop for the training: your team keeps moving it
              forward inside the room.
            </p>
          </details>
          <details>
            <summary>
              We&rsquo;ve done team training before. Nothing changed.
            </summary>
            <p>
              Most training fails the Monday-morning test: inspiring on the
              day, zero change to how work actually flows. Creating Super
              Teams doesn&rsquo;t teach concepts and hope. It installs a
              concrete system — ownership, visible work, a delivery rhythm —
              onto your team&rsquo;s actual projects during the workshop, and
              your team leaves with a 30-day plan they built themselves. What
              changes on Monday is decided before Day 2 ends.
            </p>
          </details>
          <details>
            <summary>My industry is different — will this work for us?</summary>
            <p>
              The system isn&rsquo;t industry-specific: it works anywhere
              work arrives, gets divided among people, and has to ship. Ethan
              has installed it in banks, airports, manufacturers, government
              agencies and tech companies. Because the 2 days run on your
              team&rsquo;s real work, it fits your industry by construction —
              and if we honestly think your case isn&rsquo;t a fit,
              we&rsquo;ll tell you that on the free 15-minute call.
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

      {/* ── §15 Final CTA — booking ─────────────────────────────────────── */}
      <section className="lp-booking" id="booking">
        <div className="lp-container">
          <h2>Ready? Pick your 15-minute slot — and get your Team Score.</h2>
          <p className="lp-booking-hrd">
            <img
              src="/assets/img/teamworks/ciagile-teamworks-hrdcorp-claimable-logo.webp"
              alt=""
              aria-hidden="true"
              width="192"
              height="192"
            />
            100% HRD Corp Claimable — we confirm your levy eligibility on the
            call
          </p>
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

      {/* ── Footer (minimal — legally required items only) ──────────────── */}
      <footer className="lp-footer">
        <div className="lp-container">
          <p>
            Creating Super Teams is a 100% HRD Corp claimable programme.
          </p>
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
