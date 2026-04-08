import ciAgileLogoWhite from '@/assets/img/main/ci-agile-logo-white.png';
import natasha from '@/assets/img/main/ci-agile-staff-natasha-2.webp';
import logoShell from '@/assets/img/main/logo-shell.webp';
import logoDbs from '@/assets/img/main/logo-dbs.webp';
import logoHsbc from '@/assets/img/main/logo-hsbc.webp';
import logoCisco from '@/assets/img/main/logo-cisco.webp';

export function BookSeatPage() {
  return (
    <div id="bs-page">

      <style dangerouslySetInnerHTML={{ __html: `
        html, body { height: 100%; overflow: hidden; margin: 0; padding: 0; }
        main { height: 100%; overflow: hidden; } /* shell.html wraps in <main> */
        #bs-page { height: 100vh; overflow: hidden; font-family: inherit; }
        #bs-page * { box-sizing: border-box; }

        /* ── Utility ── */
        .bs-hidden { display: none !important; }

        /* ════════════════════════════════════════
           SHARED LEFT PANEL  (.bs-cover-left / #bs-panel-left)
           Same layout on both cover and quiz pages.
           ════════════════════════════════════════ */
        .bs-cover-left,
        #bs-panel-left {
          background: #0F1724;
          position: relative;
          overflow: hidden;
          flex: 0 0 38%;
          display: flex;
          flex-direction: column;
        }

        /* Single spacer above Natasha — pushes her to vertical centre */
        .bs-lp-spacer { flex: 1; }

        /* CI Agile logo — top-left overlay */
        .bs-lp-logo {
          position: absolute;
          top: 24px; left: 28px;
          z-index: 3;
        }
        .bs-logo { height: 24px; width: auto; display: block; }

        /* Natasha — full width, proportional height, flows from top */
        .bs-lp-natasha {
          width: 100%;
          height: auto;
          display: block;
          flex-shrink: 0;
        }

        /* Credibility strip */
        .bs-lp-cred {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 28px;
          text-align: center;
          z-index: 2;
        }
        .bs-lp-tagline {
          font-size: 15px; font-weight: 500;
          color: rgba(255,255,255,0.65);
          margin: 0 0 14px 0;
          letter-spacing: 0.01em;
        }
        .bs-lp-logos {
          display: flex; gap: 44px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .bs-lp-logo-img {
          height: auto; width: auto; max-height: 40px;
          filter: brightness(0) invert(1);
          opacity: 0.6;
          display: block;
        }

        /* ════════════════════════════════════════
           COVER PAGE
           ════════════════════════════════════════ */
        #bs-cover {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        /* Right: CI Agile bright blue */
        .bs-cover-right {
          flex: 1;
          background: #14BEE8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 52px;
        }
        .bs-cover-content { max-width: 460px; width: 100%; }
        .bs-cover-label {
          display: inline-block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(15,23,36,0.85);
          margin-bottom: 18px;
        }
        .bs-cover-headline {
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          font-weight: 800; line-height: 1.15;
          color: #0F1724;
          margin: 0 0 16px 0;
        }
        .bs-cover-subtitle {
          font-size: 16px; line-height: 1.65;
          color: rgba(15,23,36,0.9);
          margin: 0 0 26px 0;
        }
        .bs-cover-time {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; color: rgba(15,23,36,0.85);
          margin-bottom: 34px;
        }
        #bs-cover-start {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 30px;
          background: #0F1724; color: #fff;
          border: none; border-radius: 100px;
          font-size: 15px; font-weight: 600;
          cursor: pointer; font-family: inherit;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        #bs-cover-start:hover {
          background: #1e293b;
          transform: translateX(3px);
        }

        /* ════════════════════════════════════════
           QUIZ LAYOUT
           ════════════════════════════════════════ */
        #bs-quiz {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        /* ── Right panel ── */
        #bs-panel-right {
          flex: 1;
          background: #14BEE8;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        #bs-progress {
          height: 3px;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }
        #bs-progress-fill {
          height: 100%; width: 0%;
          background: rgba(255,255,255,0.9);
          transition: width 0.5s ease;
        }
        #bs-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 48px 20px;
          overflow: hidden;
        }

        /* ── Steps ── */
        .bs-step {
          display: none; flex-direction: column;
          width: 100%; max-width: 580px;
        }
        .bs-step.bs-active {
          display: flex;
          animation: bs-slide-in 0.35s ease forwards;
        }
        .bs-step.bs-active.bs-reverse {
          animation: bs-slide-in-rev 0.35s ease forwards;
        }
        @keyframes bs-slide-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bs-slide-in-rev {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Question number ── */
        .bs-qnum {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 12px; font-size: 14px; font-weight: 500;
          color: rgba(15,23,36,0.85);
        }
        .bs-qnum-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 24px; height: 24px;
          background: rgba(15,23,36,0.15); border-radius: 4px;
          font-size: 12px; font-weight: 700; color: rgba(15,23,36,0.9);
        }

        /* ── Question text ── */
        .bs-question {
          font-size: clamp(1.75rem, 3.3vw, 2.55rem);
          font-weight: 700; color: #0F1724;
          line-height: 1.25; margin: 0 0 20px 0;
        }

        /* ── Option buttons ── */
        .bs-options {
          display: flex; flex-direction: column;
          gap: 6px; margin-bottom: 18px;
        }
        .bs-opt {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 18px;
          border: 1.5px solid rgba(255,255,255,0.45); border-radius: 6px;
          background: transparent; color: #0F1724;
          font-size: 21px; text-align: left; cursor: pointer; width: 100%;
          transition: border-color 0.15s, background 0.15s, color 0.15s;
          font-family: inherit;
        }
        .bs-opt:hover { border-color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.15); color: #0F1724; }
        .bs-opt.bs-selected {
          background: #0F1724;
          border-color: #0F1724; color: #fff;
        }
        .bs-opt.bs-selected .bs-badge {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }
        .bs-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; min-width: 32px;
          border: 1.5px solid rgba(15,23,36,0.5); border-radius: 4px;
          font-size: 14px; font-weight: 700; color: rgba(15,23,36,0.75);
          background: transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }

        /* ── Text inputs (underline style) ── */
        .bs-text-input {
          width: 100%; background: transparent;
          border: none; border-bottom: 1.5px solid rgba(15,23,36,0.6);
          color: #0F1724; font-size: 15px; padding: 7px 0; outline: none;
          transition: border-color 0.2s; font-family: inherit;
        }
        .bs-text-input:focus { border-bottom-color: #0F1724; }
        .bs-text-input::placeholder { color: rgba(15,23,36,0.6); }
        .bs-text-input.bs-error { border-bottom-color: #ef4444; }

        /* ── Actions row (OK button + hint) ── */
        .bs-actions { display: flex; align-items: center; gap: 12px; }
        .bs-ok-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; background: #0F1724; color: #fff;
          border: none; border-radius: 6px;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: background 0.15s; font-family: inherit;
        }
        .bs-ok-btn:hover { background: #1e293b; }
        .bs-hint { font-size: 13px; color: rgba(15,23,36,0.8); }
        .bs-hint kbd {
          display: inline-flex; align-items: center; padding: 1px 5px;
          border: 1px solid rgba(15,23,36,0.6); border-radius: 3px;
          font-size: 12px; font-family: inherit; color: rgba(15,23,36,0.8);
        }

        /* ── Contact step fields ── */
        .bs-contact-fields {
          display: flex; flex-direction: column;
          gap: 18px; margin-bottom: 22px;
        }
        .bs-field label {
          display: block; font-size: 10px; font-weight: 600;
          color: rgba(15,23,36,0.85); text-transform: uppercase;
          letter-spacing: 0.08em; margin-bottom: 5px;
        }
        .bs-optional { font-weight: 400; text-transform: none; letter-spacing: 0; }
        .bs-field-error { color: #7f1d1d; font-size: 12px; margin-top: 5px; }
        .bs-field-error[hidden] { display: none; }

        /* ── Optional row: Company + WhatsApp ── */
        .bs-contact-optional-row {
          display: flex; flex-direction: column; gap: 18px;
        }

        /* ── Submit button ── */
        .bs-submit-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 26px;
          background: #0F1724;
          color: #fff; border: none; border-radius: 8px;
          font-size: 14px; font-weight: 600; cursor: pointer;
          transition: opacity 0.15s; font-family: inherit;
        }
        .bs-submit-btn:hover { opacity: 0.85; }
        .bs-submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .bs-submitting-msg { color: rgba(15,23,36,0.85); font-size: 13px; margin-top: 8px; }
        .bs-submitting-msg[hidden] { display: none; }
        .bs-submit-error { color: #7f1d1d; font-size: 12px; margin-top: 8px; }
        .bs-submit-error[hidden] { display: none; }

        /* ── Nav arrows ── */
        #bs-nav-arrows {
          display: flex; gap: 4px;
          width: 100%; max-width: 580px;
          margin-top: 16px;
          align-self: center;
        }
        .bs-nav-btn {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.35); border-radius: 6px;
          color: #fff; cursor: pointer;
          transition: background 0.15s;
        }
        .bs-nav-btn:hover { background: rgba(255,255,255,0.28); }
        .bs-nav-btn:disabled { opacity: 0.25; cursor: not-allowed; }

        /* ════════════════════════════════════════
           MOBILE COVER — only visible on mobile
           ════════════════════════════════════════ */
        .bs-cover-mobile-img  { display: none; }
        .bs-cover-mobile-logo { display: none; }

        /* ════════════════════════════════════════
           MOBILE  (≤ 768px)
           ════════════════════════════════════════ */
        @media (max-width: 768px) {

          body { position: fixed; width: 100%; height: 100%; }

          /* ── Hide desktop left panels entirely ── */
          .bs-cover-left,
          #bs-panel-left { display: none; }

          /* ── COVER: full-screen image-led layout ── */
          #bs-cover {
            flex-direction: column;
            position: relative;
          }

          /* Natasha: full width, proportional height, capped at 70vh */
          .bs-cover-mobile-img {
            display: block;
            width: 100%; height: auto; max-height: 70vh;
            object-fit: cover;
            object-position: center top;
            flex-shrink: 0;
          }

          /* CI Agile logo overlaid top-left of Natasha */
          .bs-cover-mobile-logo {
            display: block;
            position: absolute;
            top: 18px; left: 20px;
            z-index: 5;
          }
          .bs-cover-mobile-logo img { height: 22px; width: auto; display: block; }

          /* Bottom strip: dark navy */
          .bs-cover-right {
            flex: 1;
            background: #0F1724;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 64px 28px 24px;
            overflow: hidden;
          }
          .bs-cover-content { max-width: 100%; }
          .bs-cover-label {
            font-size: 10px;
            color: rgba(255,255,255,0.55);
            margin-bottom: 8px;
          }
          .bs-cover-headline {
            font-size: 1.5rem;
            color: #fff;
            margin: 0 0 18px 0;
          }
          /* Hide subtitle and time on mobile */
          .bs-cover-subtitle { display: none; }
          .bs-cover-time     { display: none; }
          #bs-cover-start {
            background: #14BEE8;
            color: #0F1724;
            font-size: 15px;
            padding: 13px 28px;
          }
          #bs-cover-start:hover { background: #0faccc; }

          /* ── QUIZ: full-screen right panel ── */
          #bs-quiz { flex-direction: column; }
          #bs-panel-right { width: 100%; flex: 1; }

          /* Body: column, start from top */
          #bs-body {
            padding: 64px 28px 16px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            overflow: hidden;
          }
          .bs-step { max-width: 100%; }

          /* Nav arrows */
          #bs-nav-arrows {
            position: static;
            margin-top: 10px;
            max-width: 100%;
            align-self: flex-start;
          }

          /* Question number */
          .bs-qnum { font-size: 14px; margin-bottom: 10px; }
          .bs-qnum-badge { width: 26px; height: 26px; font-size: 12px; }

          /* Question */
          .bs-question {
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin: 0 0 18px 0;
          }

          /* Options */
          .bs-options { gap: 8px; margin-bottom: 16px; }
          .bs-opt { font-size: 16px; padding: 14px 18px; }
          .bs-badge { width: 28px; height: 28px; min-width: 28px; font-size: 12px; }

          /* Actions */
          .bs-ok-btn { font-size: 14px; padding: 11px 22px; }
          .bs-hint   { font-size: 12px; }

          /* Contact step */
          .bs-text-input { font-size: 16px; } /* prevents iOS zoom */
          .bs-contact-optional-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .bs-nav-btn { width: 36px; height: 36px; }
        }
      ` }} />

      {/* ════════════════════════════════════════
          COVER PAGE
          ════════════════════════════════════════ */}
      <div id="bs-cover">

        {/* Mobile-only: Natasha hero image (top 70vh) */}
        <img className="bs-cover-mobile-img" src={natasha} alt="Natasha, CI Agile Advisor" />

        {/* Mobile-only: CI Agile logo overlaid on Natasha */}
        <div className="bs-cover-mobile-logo">
          <img src={ciAgileLogoWhite} alt="CI Agile" />
        </div>

        {/* Left panel */}
        <div className="bs-cover-left">
          <div className="bs-lp-logo">
            <a href="/index.html">
              <img className="bs-logo" src={ciAgileLogoWhite} alt="CI Agile" />
            </a>
          </div>
          <div className="bs-lp-spacer"></div>
          <img className="bs-lp-natasha" src={natasha} alt="Natasha, CI Agile Advisor" />
          <div className="bs-lp-cred">
            <p className="bs-lp-tagline">Trusted by 500+ organisations across Asia</p>
            <div className="bs-lp-logos">
              <img className="bs-lp-logo-img" src={logoShell} alt="Shell" />
              <img className="bs-lp-logo-img" src={logoDbs} alt="DBS" />
              <img className="bs-lp-logo-img" src={logoHsbc} alt="HSBC" />
              <img className="bs-lp-logo-img" src={logoCisco} alt="Cisco" />
            </div>
          </div>
        </div>

        {/* Right: headline + CTA */}
        <div className="bs-cover-right">
          <div className="bs-cover-content">
            <span className="bs-cover-label">CI Agile · Leadership Training</span>
            <h1 className="bs-cover-headline">Let's get you registered</h1>
            <p className="bs-cover-subtitle">
              A couple of quick questions so our Program Advisor can confirm everything with you.
            </p>
            <div className="bs-cover-time">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Takes about 2 minutes
            </div>
            <button id="bs-cover-start" type="button">
              Reserve My Seat <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

      </div>{/* end #bs-cover */}


      {/* ════════════════════════════════════════
          QUIZ (hidden until cover CTA clicked)
          ════════════════════════════════════════ */}
      <div id="bs-quiz" className="bs-hidden">

        {/* ── Left panel ── */}
        <div id="bs-panel-left">
          <div className="bs-lp-logo">
            <a href="/index.html">
              <img className="bs-logo" src={ciAgileLogoWhite} alt="CI Agile" />
            </a>
          </div>
          <div className="bs-lp-spacer"></div>
          <img className="bs-lp-natasha" src={natasha} alt="Natasha, CI Agile Advisor" />
          <div className="bs-lp-cred">
            <p className="bs-lp-tagline">Trusted by 500+ organisations across Asia</p>
            <div className="bs-lp-logos">
              <img className="bs-lp-logo-img" src={logoShell} alt="Shell" />
              <img className="bs-lp-logo-img" src={logoDbs} alt="DBS" />
              <img className="bs-lp-logo-img" src={logoHsbc} alt="HSBC" />
              <img className="bs-lp-logo-img" src={logoCisco} alt="Cisco" />
            </div>
          </div>
        </div>

        {/* ── Right panel: progress + steps + nav ── */}
        <div id="bs-panel-right">

          {/* Progress bar */}
          <div id="bs-progress">
            <div id="bs-progress-fill"></div>
          </div>

          {/* Step container */}
          <div id="bs-body">

            {/* ════ Step 1: Booking type ════ */}
            <div className="bs-step bs-active" data-bs-step="1">
              <div className="bs-qnum">
                <span className="bs-qnum-badge">1</span>
                <span>→</span>
              </div>
              <h2 className="bs-question">What would you like to book?</h2>
              <div className="bs-options">
                <button className="bs-opt" data-bs-value="programme">
                  <span className="bs-badge">A</span><span>The full programme — Course 1 and Course 2 together</span>
                </button>
                <button className="bs-opt" data-bs-value="course1">
                  <span className="bs-badge">B</span><span>Course 1 only — High Performance Agile Leader</span>
                </button>
                <button className="bs-opt" data-bs-value="course2">
                  <span className="bs-badge">C</span><span>Course 2 only — Leading Hyper-Productive Team</span>
                </button>
              </div>
              <div className="bs-actions">
                <button className="bs-ok-btn" data-bs-ok>OK <span>✓</span></button>
                <span className="bs-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 2a: Course 1 dates ════ */}
            <div className="bs-step" data-bs-step="2a">
              <div className="bs-qnum">
                <span className="bs-qnum-badge">2</span>
                <span>→</span>
              </div>
              <h2 className="bs-question">Which Course 1 date works for you?</h2>
              <div className="bs-options">
                <button className="bs-opt" data-bs-value="KL · 21 &amp; 22 Apr 2026">
                  <span className="bs-badge">A</span><span>Kuala Lumpur · 21 &amp; 22 Apr 2026</span>
                </button>
                <button className="bs-opt" data-bs-value="KL · 21 &amp; 22 Jul 2026">
                  <span className="bs-badge">B</span><span>Kuala Lumpur · 21 &amp; 22 Jul 2026</span>
                </button>
                <button className="bs-opt" data-bs-value="Jakarta · 6 &amp; 7 May 2026">
                  <span className="bs-badge">C</span><span>Jakarta · 6 &amp; 7 May 2026</span>
                </button>
                <button className="bs-opt" data-bs-value="Jakarta · 7 &amp; 8 Jul 2026">
                  <span className="bs-badge">D</span><span>Jakarta · 7 &amp; 8 Jul 2026</span>
                </button>
              </div>
              <div className="bs-actions">
                <button className="bs-ok-btn" data-bs-ok>OK <span>✓</span></button>
                <span className="bs-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 2b: Course 2 dates ════ */}
            <div className="bs-step" data-bs-step="2b">
              <div className="bs-qnum">
                <span className="bs-qnum-badge">2</span>
                <span>→</span>
              </div>
              <h2 className="bs-question">Which Course 2 date works for you?</h2>
              <div className="bs-options">
                <button className="bs-opt" data-bs-value="Online · 20 &amp; 21 May 2026">
                  <span className="bs-badge">A</span><span>Online · 20 &amp; 21 May 2026</span>
                </button>
                <button className="bs-opt" data-bs-value="Online · 19 &amp; 20 Aug 2026">
                  <span className="bs-badge">B</span><span>Online · 19 &amp; 20 Aug 2026</span>
                </button>
              </div>
              <div className="bs-actions">
                <button className="bs-ok-btn" data-bs-ok>OK <span>✓</span></button>
                <span className="bs-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 2c: Programme intake ════ */}
            <div className="bs-step" data-bs-step="2c">
              <div className="bs-qnum">
                <span className="bs-qnum-badge">2</span>
                <span>→</span>
              </div>
              <h2 className="bs-question">Which intake would you like to start with?</h2>
              <div className="bs-options">
                <button className="bs-opt" data-bs-value="Kuala Lumpur · 21 Apr 2026">
                  <span className="bs-badge">A</span><span>Kuala Lumpur · 21 Apr 2026</span>
                </button>
                <button className="bs-opt" data-bs-value="Kuala Lumpur · 21 Jul 2026">
                  <span className="bs-badge">B</span><span>Kuala Lumpur · 21 Jul 2026</span>
                </button>
                <button className="bs-opt" data-bs-value="Jakarta · 6 May 2026">
                  <span className="bs-badge">C</span><span>Jakarta · 6 May 2026</span>
                </button>
                <button className="bs-opt" data-bs-value="Jakarta · 7 Jul 2026">
                  <span className="bs-badge">D</span><span>Jakarta · 7 Jul 2026</span>
                </button>
              </div>
              <div className="bs-actions">
                <button className="bs-ok-btn" data-bs-ok>OK <span>✓</span></button>
                <span className="bs-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 3: Funding ════ */}
            <div className="bs-step" data-bs-step="3">
              <div className="bs-qnum">
                <span className="bs-qnum-badge">3</span>
                <span>→</span>
              </div>
              <h2 className="bs-question">How will you be funding your seat?</h2>
              <div className="bs-options">
                <button className="bs-opt" data-bs-value="hrdf">
                  <span className="bs-badge">A</span><span>HRDF — I'm based in Malaysia 🇲🇾</span>
                </button>
                <button className="bs-opt" data-bs-value="ssg">
                  <span className="bs-badge">B</span><span>SSG / SkillsFuture — I'm based in Singapore 🇸🇬</span>
                </button>
                <button className="bs-opt" data-bs-value="company">
                  <span className="bs-badge">C</span><span>My company is paying directly</span>
                </button>
                <button className="bs-opt" data-bs-value="self">
                  <span className="bs-badge">D</span><span>I'll be paying for it myself</span>
                </button>
              </div>
              <div className="bs-actions">
                <button className="bs-ok-btn" data-bs-ok>OK <span>✓</span></button>
                <span className="bs-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 4: Contact ════ */}
            <div className="bs-step" data-bs-step="4">
              <div className="bs-qnum">
                <span className="bs-qnum-badge">4</span>
                <span>→</span>
              </div>
              <h2 className="bs-question">Last step! How do we reach you?</h2>
              <div className="bs-contact-fields">
                <div className="bs-field">
                  <label htmlFor="bs-full-name">Full name *</label>
                  <input
                    type="text" id="bs-full-name" className="bs-text-input"
                    placeholder="Jane Smith" autoComplete="name"
                  />
                  <div className="bs-field-error" id="bs-full-name-error" hidden></div>
                </div>
                <div className="bs-field">
                  <label htmlFor="bs-email">Work email *</label>
                  <input
                    type="email" id="bs-email" className="bs-text-input"
                    placeholder="jane@company.com" autoComplete="email"
                  />
                  <div className="bs-field-error" id="bs-email-error" hidden></div>
                </div>
                <div className="bs-contact-optional-row">
                  <div className="bs-field">
                    <label htmlFor="bs-company">
                      Company <span className="bs-optional">(optional)</span>
                    </label>
                    <input
                      type="text" id="bs-company" className="bs-text-input"
                      placeholder="Acme Corp" autoComplete="organization"
                    />
                  </div>
                  <div className="bs-field">
                    <label htmlFor="bs-phone">
                      WhatsApp <span className="bs-optional">(optional)</span>
                    </label>
                    <input
                      type="tel" id="bs-phone" className="bs-text-input"
                      placeholder="+60 12 345 6789" autoComplete="tel"
                    />
                  </div>
                </div>
              </div>
              <div className="bs-actions" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                <button className="bs-submit-btn" id="bs-submit-btn">
                  Reserve My Seat <span>→</span>
                </button>
                <div className="bs-submitting-msg" id="bs-submitting-msg" hidden>Sending your details…</div>
                <div className="bs-submit-error" id="bs-submit-error" hidden></div>
              </div>
            </div>

            {/* Nav arrows */}
            <div id="bs-nav-arrows">
              <button className="bs-nav-btn" id="bs-btn-up" aria-label="Previous">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M9.5 2L4.5 7L9.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bs-nav-btn" id="bs-btn-down" aria-label="Next">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M4.5 2L9.5 7L4.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>{/* end #bs-body */}

        </div>{/* end #bs-panel-right */}

      </div>{/* end #bs-quiz */}

    </div>
  );
}
