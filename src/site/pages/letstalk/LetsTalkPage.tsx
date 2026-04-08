import ciAgileLogoWhite from '@/assets/img/main/ci-agile-logo-white.png';
import natasha from '@/assets/img/main/ci-agile-staff-natasha-2.webp';
import logoShell from '@/assets/img/main/logo-shell.webp';
import logoDbs from '@/assets/img/main/logo-dbs.webp';
import logoHsbc from '@/assets/img/main/logo-hsbc.webp';
import logoCisco from '@/assets/img/main/logo-cisco.webp';

export function LetsTalkPage() {
  return (
    <div id="lt-page">

      <style dangerouslySetInnerHTML={{ __html: `
        html, body { height: 100%; overflow: hidden; margin: 0; padding: 0; }
        main { height: 100%; overflow: hidden; } /* shell.html wraps in <main> */
        #lt-page { height: 100vh; overflow: hidden; font-family: inherit; }
        #lt-page * { box-sizing: border-box; }

        /* ── Utility ── */
        .lt-hidden { display: none !important; }

        /* ════════════════════════════════════════
           SHARED LEFT PANEL  (.lt-cover-left / #lt-panel-left)
           Same layout on both cover and quiz pages.
           ════════════════════════════════════════ */
        .lt-cover-left,
        #lt-panel-left {
          background: #0F1724;
          position: relative;
          overflow: hidden;
          flex: 0 0 38%;
          display: flex;
          flex-direction: column;
        }

        /* Single spacer above Natasha — pushes her to vertical centre */
        .lt-lp-spacer { flex: 1; }

        /* CI Agile logo — top-left overlay */
        .lt-lp-logo {
          position: absolute;
          top: 24px; left: 28px;
          z-index: 3;
        }
        .lt-logo { height: 24px; width: auto; display: block; }

        /* Natasha — full width, proportional height, flows from top */
        .lt-lp-natasha {
          width: 100%;
          height: auto;
          display: block;
          flex-shrink: 0;
        }

        /* Credibility strip — fills space below Natasha, content vertically centred
           so gap above == gap below (equal breathing room on both sides) */
        .lt-lp-cred {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 28px;
          text-align: center;
          z-index: 2;
        }
        .lt-lp-tagline {
          font-size: 15px; font-weight: 500;
          color: rgba(255,255,255,0.65);
          margin: 0 0 14px 0;
          letter-spacing: 0.01em;
        }
        .lt-lp-logos {
          display: flex; gap: 44px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }
        .lt-lp-logo-img {
          height: auto; width: auto; max-height: 40px;
          filter: brightness(0) invert(1);
          opacity: 0.6;
          display: block;
        }

        /* ════════════════════════════════════════
           COVER PAGE
           ════════════════════════════════════════ */
        #lt-cover {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        /* Right: CI Agile bright blue (matched to Natasha image) */
        .lt-cover-right {
          flex: 1;
          background: #14BEE8;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 52px;
        }
        .lt-cover-content { max-width: 460px; width: 100%; }
        .lt-cover-label {
          display: inline-block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(15,23,36,0.85);
          margin-bottom: 18px;
        }
        .lt-cover-headline {
          font-size: clamp(1.85rem, 3.2vw, 2.75rem);
          font-weight: 800; line-height: 1.15;
          color: #0F1724;
          margin: 0 0 16px 0;
        }
        .lt-cover-subtitle {
          font-size: 16px; line-height: 1.65;
          color: rgba(15,23,36,0.9);
          margin: 0 0 26px 0;
        }
        .lt-cover-time {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; color: rgba(15,23,36,0.85);
          margin-bottom: 34px;
        }
        #lt-cover-start {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 30px;
          background: #0F1724; color: #fff;
          border: none; border-radius: 100px;
          font-size: 15px; font-weight: 600;
          cursor: pointer; font-family: inherit;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        #lt-cover-start:hover {
          background: #1e293b;
          transform: translateX(3px);
        }

        /* ════════════════════════════════════════
           QUIZ LAYOUT
           ════════════════════════════════════════ */
        #lt-quiz {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        /* ── Right panel: CI Agile bright blue (matches cover) ── */
        #lt-panel-right {
          flex: 1;
          background: #14BEE8;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        #lt-progress {
          height: 3px;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
        }
        #lt-progress-fill {
          height: 100%; width: 0%;
          background: rgba(255,255,255,0.9);
          transition: width 0.5s ease;
        }
        #lt-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 48px 20px;
          overflow: hidden;
        }

        /* ── Steps ── */
        .lt-step {
          display: none; flex-direction: column;
          width: 100%; max-width: 580px;
        }
        .lt-step.lt-active {
          display: flex;
          animation: lt-slide-in 0.35s ease forwards;
        }
        .lt-step.lt-active.lt-reverse {
          animation: lt-slide-in-rev 0.35s ease forwards;
        }
        @keyframes lt-slide-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lt-slide-in-rev {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Question number ── */
        .lt-qnum {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 12px; font-size: 14px; font-weight: 500;
          color: rgba(15,23,36,0.85);
        }
        .lt-qnum-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 24px; height: 24px;
          background: rgba(15,23,36,0.15); border-radius: 4px;
          font-size: 12px; font-weight: 700; color: rgba(15,23,36,0.9);
        }

        /* ── Question text ── */
        .lt-question {
          font-size: clamp(1.75rem, 3.3vw, 2.55rem);
          font-weight: 700; color: #0F1724;
          line-height: 1.25; margin: 0 0 20px 0;
        }

        /* ── Option buttons ── */
        .lt-options {
          display: flex; flex-direction: column;
          gap: 6px; margin-bottom: 18px;
        }
        .lt-opt {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 18px;
          border: 1.5px solid rgba(255,255,255,0.45); border-radius: 6px;
          background: transparent; color: #0F1724;
          font-size: 21px; text-align: left; cursor: pointer; width: 100%;
          transition: border-color 0.15s, background 0.15s, color 0.15s;
          font-family: inherit;
        }
        .lt-opt:hover { border-color: rgba(255,255,255,0.75); background: rgba(255,255,255,0.15); color: #0F1724; }
        .lt-opt.lt-selected {
          background: #0F1724;
          border-color: #0F1724; color: #fff;
        }
        .lt-opt.lt-selected .lt-badge {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
          color: #fff;
        }
        .lt-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; min-width: 32px;
          border: 1.5px solid rgba(15,23,36,0.5); border-radius: 4px;
          font-size: 14px; font-weight: 700; color: rgba(15,23,36,0.75);
          background: transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }

        /* ── "Other" text reveal ── */
        .lt-other-wrap { margin: 4px 0 14px 32px; }
        .lt-other-wrap[hidden] { display: none; }

        /* ── Text inputs (underline style) ── */
        .lt-text-input {
          width: 100%; background: transparent;
          border: none; border-bottom: 1.5px solid rgba(15,23,36,0.6);
          color: #0F1724; font-size: 15px; padding: 7px 0; outline: none;
          transition: border-color 0.2s; font-family: inherit;
        }
        .lt-text-input:focus { border-bottom-color: #0F1724; }
        .lt-text-input::placeholder { color: rgba(15,23,36,0.6); }
        .lt-text-input.lt-error { border-bottom-color: #ef4444; }

        /* ── Checkbox ── */
        .lt-checkbox-wrap { margin: 10px 0 18px; }
        .lt-checkbox-label {
          display: flex; align-items: flex-start; gap: 10px;
          cursor: pointer; font-size: 13px; color: rgba(15,23,36,0.85);
          line-height: 1.5; user-select: none;
        }
        .lt-checkbox-label input[type="checkbox"] { display: none; }
        .lt-checkbox-custom {
          display: inline-flex; align-items: center; justify-content: center;
          width: 18px; height: 18px; min-width: 18px;
          border: 1.5px solid rgba(15,23,36,0.6); border-radius: 3px;
          background: transparent; margin-top: 1px;
          transition: background 0.15s, border-color 0.15s;
          font-size: 11px; font-weight: 700; color: #fff;
        }
        .lt-checkbox-label input:checked + .lt-checkbox-custom {
          background: #0F1724; border-color: #0F1724;
        }
        .lt-checkbox-label input:checked + .lt-checkbox-custom::after { content: '✓'; }

        /* ── Actions row (OK button + hint) ── */
        .lt-actions { display: flex; align-items: center; gap: 12px; }
        .lt-ok-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; background: #0F1724; color: #fff;
          border: none; border-radius: 6px;
          font-size: 13px; font-weight: 600; cursor: pointer;
          transition: background 0.15s; font-family: inherit;
        }
        .lt-ok-btn:hover { background: #1e293b; }
        .lt-hint { font-size: 13px; color: rgba(15,23,36,0.8); }
        .lt-hint kbd {
          display: inline-flex; align-items: center; padding: 1px 5px;
          border: 1px solid rgba(15,23,36,0.6); border-radius: 3px;
          font-size: 12px; font-family: inherit; color: rgba(15,23,36,0.8);
        }

        /* ── Contact step fields ── */
        .lt-contact-fields {
          display: flex; flex-direction: column;
          gap: 18px; margin-bottom: 22px;
        }
        .lt-field label {
          display: block; font-size: 10px; font-weight: 600;
          color: rgba(15,23,36,0.85); text-transform: uppercase;
          letter-spacing: 0.08em; margin-bottom: 5px;
        }
        .lt-optional { font-weight: 400; text-transform: none; letter-spacing: 0; }
        .lt-field-error { color: #7f1d1d; font-size: 12px; margin-top: 5px; }
        .lt-field-error[hidden] { display: none; }

        /* ── Optional row: Company + WhatsApp ── */
        .lt-contact-optional-row {
          display: flex; flex-direction: column; gap: 18px;
        }

        /* ── Submit button ── */
        .lt-submit-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 26px;
          background: #0F1724;
          color: #fff; border: none; border-radius: 8px;
          font-size: 14px; font-weight: 600; cursor: pointer;
          transition: opacity 0.15s; font-family: inherit;
        }
        .lt-submit-btn:hover { opacity: 0.85; }
        .lt-submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .lt-submitting-msg { color: rgba(15,23,36,0.85); font-size: 13px; margin-top: 8px; }
        .lt-submitting-msg[hidden] { display: none; }
        .lt-submit-error { color: #7f1d1d; font-size: 12px; margin-top: 8px; }
        .lt-submit-error[hidden] { display: none; }

        /* ── Nav arrows — in-flow, left-aligned below OK button ── */
        #lt-nav-arrows {
          display: flex; gap: 4px;
          width: 100%; max-width: 580px;
          margin-top: 16px;
          align-self: center; /* centres the 580px block; items inside are left-aligned */
        }
        .lt-nav-btn {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px;
          background: rgba(255,255,255,0.18);
          border: 1px solid rgba(255,255,255,0.35); border-radius: 6px;
          color: #fff; cursor: pointer;
          transition: background 0.15s;
        }
        .lt-nav-btn:hover { background: rgba(255,255,255,0.28); }
        .lt-nav-btn:disabled { opacity: 0.25; cursor: not-allowed; }

        /* ════════════════════════════════════════
           MOBILE COVER — only visible on mobile
           ════════════════════════════════════════ */
        .lt-cover-mobile-img  { display: none; }
        .lt-cover-mobile-logo { display: none; }

        /* ════════════════════════════════════════
           MOBILE  (≤ 768px)
           ════════════════════════════════════════ */
        @media (max-width: 768px) {

          /* iOS Safari: position:fixed is the only reliable way to kill
             momentum scrolling when overflow:hidden is set on body */
          body { position: fixed; width: 100%; height: 100%; }

          /* ── Hide desktop left panels entirely ── */
          .lt-cover-left,
          #lt-panel-left { display: none; }

          /* ── COVER: full-screen image-led layout ── */
          #lt-cover {
            flex-direction: column;
            position: relative;
          }

          /* Natasha: full width, proportional height (auto), capped at 70vh */
          .lt-cover-mobile-img {
            display: block;
            width: 100%; height: auto; max-height: 70vh;
            object-fit: cover;
            object-position: center top;
            flex-shrink: 0;
          }

          /* CI Agile logo overlaid top-left of Natasha */
          .lt-cover-mobile-logo {
            display: block;
            position: absolute;
            top: 18px; left: 20px;
            z-index: 5;
          }
          .lt-cover-mobile-logo img { height: 22px; width: auto; display: block; }

          /* Bottom strip: dark navy — content top-anchored with pt-8 (32px) */
          .lt-cover-right {
            flex: 1;
            background: #0F1724;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 64px 28px 24px;
            overflow: hidden;
          }
          .lt-cover-content { max-width: 100%; }
          .lt-cover-label {
            font-size: 10px;
            color: rgba(255,255,255,0.55);
            margin-bottom: 8px;
          }
          .lt-cover-headline {
            font-size: 1.5rem;
            color: #fff;
            margin: 0 0 18px 0;
          }
          /* Hide subtitle and time on mobile — strip is too compact */
          .lt-cover-subtitle { display: none; }
          .lt-cover-time     { display: none; }
          #lt-cover-start {
            background: #14BEE8;
            color: #0F1724;
            font-size: 15px;
            padding: 13px 28px;
          }
          #lt-cover-start:hover { background: #0faccc; }

          /* ── QUIZ: full-screen right panel ── */
          #lt-quiz { flex-direction: column; }
          #lt-panel-right { width: 100%; flex: 1; }

          /* Body: column, start from top */
          #lt-body {
            padding: 64px 28px 16px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            overflow: hidden;
          }
          .lt-step { max-width: 100%; }

          /* Nav arrows: in-flow, left-aligned below OK button */
          #lt-nav-arrows {
            position: static;
            margin-top: 10px;
            max-width: 100%;
            align-self: flex-start;
          }

          /* Question number */
          .lt-qnum { font-size: 14px; margin-bottom: 10px; }
          .lt-qnum-badge { width: 26px; height: 26px; font-size: 12px; }

          /* Question — large and readable */
          .lt-question {
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin: 0 0 18px 0;
          }

          /* Options — comfortable tap targets */
          .lt-options { gap: 8px; margin-bottom: 16px; }
          .lt-opt { font-size: 16px; padding: 14px 18px; }
          .lt-badge { width: 28px; height: 28px; min-width: 28px; font-size: 12px; }

          /* Actions */
          .lt-ok-btn { font-size: 14px; padding: 11px 22px; }
          .lt-hint   { font-size: 12px; }

          /* Contact step */
          .lt-text-input { font-size: 16px; } /* prevents iOS zoom */
          .lt-contact-optional-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .lt-nav-btn { width: 36px; height: 36px; }
        }
      ` }} />

      {/* ════════════════════════════════════════
          COVER PAGE
          ════════════════════════════════════════ */}
      <div id="lt-cover">

        {/* Mobile-only: Natasha hero image (top 70vh) */}
        <img className="lt-cover-mobile-img" src={natasha} alt="Natasha, CI Agile Advisor" />

        {/* Mobile-only: CI Agile logo overlaid on Natasha */}
        <div className="lt-cover-mobile-logo">
          <img src={ciAgileLogoWhite} alt="CI Agile" />
        </div>

        {/* Left panel — identical structure to quiz left */}
        <div className="lt-cover-left">
          <div className="lt-lp-logo">
            <a href="/index.html">
              <img className="lt-logo" src={ciAgileLogoWhite} alt="CI Agile" />
            </a>
          </div>
          <div className="lt-lp-spacer"></div>
          <img className="lt-lp-natasha" src={natasha} alt="Natasha, CI Agile Advisor" />
          <div className="lt-lp-cred">
            <p className="lt-lp-tagline">Trusted by 500+ organisations across Asia</p>
            <div className="lt-lp-logos">
              <img className="lt-lp-logo-img" src={logoShell} alt="Shell" />
              <img className="lt-lp-logo-img" src={logoDbs} alt="DBS" />
              <img className="lt-lp-logo-img" src={logoHsbc} alt="HSBC" />
              <img className="lt-lp-logo-img" src={logoCisco} alt="Cisco" />
            </div>
          </div>
        </div>

        {/* Right: headline + CTA */}
        <div className="lt-cover-right">
          <div className="lt-cover-content">
            <span className="lt-cover-label">CI Agile · Enterprise Agility</span>
            <h1 className="lt-cover-headline">Let's find the right solution for you</h1>
            <p className="lt-cover-subtitle">
              Answer a few quick questions and we'll connect you with the right advisor.
            </p>
            <div className="lt-cover-time">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Takes about 2 minutes
            </div>
            <button id="lt-cover-start" type="button">
              Let's Talk <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

      </div>{/* end #lt-cover */}


      {/* ════════════════════════════════════════
          QUIZ (hidden until cover CTA clicked)
          ════════════════════════════════════════ */}
      <div id="lt-quiz" className="lt-hidden">

        {/* ── Left panel — identical structure to cover left ── */}
        <div id="lt-panel-left">
          <div className="lt-lp-logo">
            <a href="/index.html">
              <img className="lt-logo" src={ciAgileLogoWhite} alt="CI Agile" />
            </a>
          </div>
          <div className="lt-lp-spacer"></div>
          <img className="lt-lp-natasha" src={natasha} alt="Natasha, CI Agile Advisor" />
          <div className="lt-lp-cred">
            <p className="lt-lp-tagline">Trusted by 500+ organisations across Asia</p>
            <div className="lt-lp-logos">
              <img className="lt-lp-logo-img" src={logoShell} alt="Shell" />
              <img className="lt-lp-logo-img" src={logoDbs} alt="DBS" />
              <img className="lt-lp-logo-img" src={logoHsbc} alt="HSBC" />
              <img className="lt-lp-logo-img" src={logoCisco} alt="Cisco" />
            </div>
          </div>
        </div>

        {/* ── Right panel: progress + steps + nav ── */}
        <div id="lt-panel-right">

          {/* Progress bar */}
          <div id="lt-progress">
            <div id="lt-progress-fill"></div>
          </div>

          {/* Step container */}
          <div id="lt-body">

            {/* ════ Step 1: Intent ════ */}
            <div className="lt-step lt-active" data-lt-step="1">
              <div className="lt-qnum">
                <span className="lt-qnum-badge">1</span>
                <span>→</span>
              </div>
              <h2 className="lt-question">What brings you here today?</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="training">
                  <span className="lt-badge">A</span><span>I want to learn something new</span>
                </button>
                <button className="lt-opt" data-lt-value="consulting">
                  <span className="lt-badge">B</span><span>I need help fixing something</span>
                </button>
                <button className="lt-opt" data-lt-value="general">
                  <span className="lt-badge">C</span><span>I'm just exploring for now</span>
                </button>
              </div>
              <div className="lt-checkbox-wrap" id="lt-training-extra" hidden>
                <label className="lt-checkbox-label">
                  <input type="checkbox" id="lt-has-class" />
                  <span className="lt-checkbox-custom"></span>
                  <span>I already have a specific programme in mind</span>
                </label>
              </div>
              <div className="lt-actions">
                <button className="lt-ok-btn" data-lt-ok>OK <span>✓</span></button>
                <span className="lt-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 2: Role ════ */}
            <div className="lt-step" data-lt-step="2">
              <div className="lt-qnum">
                <span className="lt-qnum-badge">2</span>
                <span>→</span>
              </div>
              <h2 className="lt-question">And who are we talking to? 😊</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="individual">
                  <span className="lt-badge">A</span><span>Just me — I want to grow my skills</span>
                </button>
                <button className="lt-opt" data-lt-value="team-leader">
                  <span className="lt-badge">B</span><span>I lead a team and want to level them up</span>
                </button>
                <button className="lt-opt" data-lt-value="executive">
                  <span className="lt-badge">C</span><span>I'm driving change across the organisation</span>
                </button>
                <button className="lt-opt" data-lt-value="other">
                  <span className="lt-badge">D</span><span>Something else</span>
                </button>
              </div>
              <div className="lt-other-wrap" id="lt-role-other-wrap" hidden>
                <input
                  type="text"
                  id="lt-role-other"
                  className="lt-text-input"
                  placeholder="Tell us more about your role..."
                  autoComplete="off"
                />
              </div>
              <div className="lt-actions">
                <button className="lt-ok-btn" data-lt-ok>OK <span>✓</span></button>
                <span className="lt-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 3a: Interest — no specific class ════ */}
            <div className="lt-step" data-lt-step="3a">
              <div className="lt-qnum">
                <span className="lt-qnum-badge">3</span>
                <span>→</span>
              </div>
              <h2 className="lt-question">What kind of support are you looking for?</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="agile-scrum">
                  <span className="lt-badge">A</span><span>Agile &amp; Scrum — certs or the basics</span>
                </button>
                <button className="lt-opt" data-lt-value="teamworks">
                  <span className="lt-badge">B</span><span>TeamWorks workshops</span>
                </button>
                <button className="lt-opt" data-lt-value="enterprise">
                  <span className="lt-badge">C</span><span>Enterprise agility &amp; transformation</span>
                </button>
                <button className="lt-opt" data-lt-value="assessment">
                  <span className="lt-badge">D</span><span>I'd love a free 30-min chat first</span>
                </button>
                <button className="lt-opt" data-lt-value="not-sure">
                  <span className="lt-badge">E</span><span>Honestly not sure — help me figure it out</span>
                </button>
              </div>
              <div className="lt-actions">
                <button className="lt-ok-btn" data-lt-ok>OK <span>✓</span></button>
                <span className="lt-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 3b: Interest — specific class in mind ════ */}
            <div className="lt-step" data-lt-step="3b">
              <div className="lt-qnum">
                <span className="lt-qnum-badge">3</span>
                <span>→</span>
              </div>
              <h2 className="lt-question">Got a programme in mind already?</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="jeff-program">
                  <span className="lt-badge">A</span><span>Dr. Sutherland Enterprise Agility Program Training</span>
                </button>
                <button className="lt-opt" data-lt-value="nova-series">
                  <span className="lt-badge">B</span><span>Nova Series</span>
                </button>
                <button className="lt-opt" data-lt-value="teamworks-series">
                  <span className="lt-badge">C</span><span>TeamWorks Series</span>
                </button>
                <button className="lt-opt" data-lt-value="other-training">
                  <span className="lt-badge">D</span><span>Something else — I'll tell you</span>
                </button>
              </div>
              <div className="lt-other-wrap" id="lt-interest-other-wrap" hidden>
                <input
                  type="text"
                  id="lt-interest-other"
                  className="lt-text-input"
                  placeholder="Tell us which one..."
                  autoComplete="off"
                />
              </div>
              <div className="lt-actions">
                <button className="lt-ok-btn" data-lt-ok>OK <span>✓</span></button>
                <span className="lt-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 4: Group Size ════ */}
            <div className="lt-step" data-lt-step="4">
              <div className="lt-qnum">
                <span className="lt-qnum-badge">4</span>
                <span>→</span>
              </div>
              <h2 className="lt-question">How many people are we talking about?</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="just-me">
                  <span className="lt-badge">A</span><span>Just me</span>
                </button>
                <button className="lt-opt" data-lt-value="small-team">
                  <span className="lt-badge">B</span><span>2–10 people (small team)</span>
                </button>
                <button className="lt-opt" data-lt-value="medium-team">
                  <span className="lt-badge">C</span><span>11–30 people — sounds like a team programme!</span>
                </button>
                <button className="lt-opt" data-lt-value="enterprise">
                  <span className="lt-badge">D</span><span>30+ people — this is a big one</span>
                </button>
                <button className="lt-opt" data-lt-value="not-sure">
                  <span className="lt-badge">E</span><span>Not sure</span>
                </button>
              </div>
              <div className="lt-actions">
                <button className="lt-ok-btn" data-lt-ok>OK <span>✓</span></button>
                <span className="lt-hint">press <kbd>Enter</kbd> ↵</span>
              </div>
            </div>

            {/* ════ Step 5: Contact Details ════ */}
            <div className="lt-step" data-lt-step="5">
              <div className="lt-qnum">
                <span className="lt-qnum-badge" id="lt-contact-step-num">5</span>
                <span>→</span>
              </div>
              <h2 className="lt-question">Great! Where should we send your recommendation?</h2>
              <div className="lt-contact-fields">
                <div className="lt-field">
                  <label htmlFor="lt-full-name">Full name *</label>
                  <input
                    type="text" id="lt-full-name" className="lt-text-input"
                    placeholder="Jane Smith" autoComplete="name"
                  />
                  <div className="lt-field-error" id="lt-full-name-error" hidden></div>
                </div>
                <div className="lt-field">
                  <label htmlFor="lt-email">Work email *</label>
                  <input
                    type="email" id="lt-email" className="lt-text-input"
                    placeholder="jane@company.com" autoComplete="email"
                  />
                  <div className="lt-field-error" id="lt-email-error" hidden></div>
                </div>
                <div className="lt-contact-optional-row">
                  <div className="lt-field">
                    <label htmlFor="lt-company">
                      Company <span className="lt-optional">(optional)</span>
                    </label>
                    <input
                      type="text" id="lt-company" className="lt-text-input"
                      placeholder="Acme Corp" autoComplete="organization"
                    />
                  </div>
                  <div className="lt-field">
                    <label htmlFor="lt-phone">
                      WhatsApp <span className="lt-optional">(optional)</span>
                    </label>
                    <input
                      type="tel" id="lt-phone" className="lt-text-input"
                      placeholder="+60 12 345 6789" autoComplete="tel"
                    />
                  </div>
                </div>
              </div>
              <div className="lt-actions" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                <button className="lt-submit-btn" id="lt-submit-btn">
                  Submit <span>→</span>
                </button>
                <div className="lt-submitting-msg" id="lt-submitting-msg" hidden>Sending your message…</div>
                <div className="lt-submit-error" id="lt-submit-error" hidden></div>
              </div>
            </div>

            {/* Nav arrows — inside #lt-body so mobile can render them in-flow
                below the OK button. Desktop: position:absolute keeps them
                pinned bottom-right of #lt-panel-right (positioned ancestor). */}
            <div id="lt-nav-arrows">
              <button className="lt-nav-btn" id="lt-btn-up" aria-label="Previous">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M9.5 2L4.5 7L9.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="lt-nav-btn" id="lt-btn-down" aria-label="Next">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M4.5 2L9.5 7L4.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

          </div>{/* end #lt-body */}

        </div>{/* end #lt-panel-right */}

      </div>{/* end #lt-quiz */}

    </div>
  );
}
