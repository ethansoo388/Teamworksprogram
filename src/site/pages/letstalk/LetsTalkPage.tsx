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
        #lt-page { height: 100vh; overflow: hidden; font-family: inherit; }
        #lt-page * { box-sizing: border-box; }

        /* ── Utility ── */
        .lt-hidden { display: none !important; }

        /* ════════════════════════════════════════
           COVER PAGE
           ════════════════════════════════════════ */
        #lt-cover {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }

        /* Left: dark navy — Natasha centred */
        .lt-cover-left {
          flex: 0 0 38%;
          background: #0F1724;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          /* padding reserves space for logo (top) and cred strip (bottom) */
          padding: 64px 28px 96px;
        }
        .lt-cover-natasha {
          width: 72%;
          max-width: 330px;
          height: auto;
          display: block;
          border-radius: 14px;
          flex-shrink: 0;
        }
        /* CI Agile logo — top-left */
        .lt-cover-logo-wrap {
          position: absolute;
          top: 24px; left: 28px;
          z-index: 1;
        }
        .lt-logo { height: 24px; width: auto; display: block; }
        /* Credibility strip — bottom */
        .lt-cover-cred {
          position: absolute;
          bottom: 28px; left: 28px; right: 28px;
          z-index: 1;
        }
        .lt-cover-cred-sep {
          width: 100%; height: 1px;
          background: rgba(255,255,255,0.14);
          margin-bottom: 13px;
        }
        .lt-cover-cred-tagline {
          font-size: 11px; font-weight: 500;
          color: rgba(255,255,255,0.48);
          margin: 0 0 10px 0;
          letter-spacing: 0.02em;
        }
        .lt-cover-cred-logos {
          display: flex; gap: 18px; align-items: center;
        }
        .lt-cover-cred-logo {
          height: 16px; width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.48;
          display: block;
        }

        /* Right: CI Agile light blue */
        .lt-cover-right {
          flex: 1;
          background: #1A9BD4;
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
          color: rgba(15,23,36,0.6);
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
          color: rgba(15,23,36,0.75);
          margin: 0 0 26px 0;
        }
        .lt-cover-time {
          display: flex; align-items: center; gap: 7px;
          font-size: 13px; color: rgba(15,23,36,0.65);
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

        /* ── Left panel: Natasha + credibility ── */
        #lt-panel-left {
          flex: 0 0 38%;
          background: #0F1724;
          position: relative;
          overflow: hidden;
        }
        .lt-natasha-wrap {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
        }
        .lt-natasha-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .lt-cred-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 20px 24px;
          background: linear-gradient(to top,
            rgba(15,23,36,0.97) 0%,
            rgba(15,23,36,0.8) 50%,
            transparent 100%
          );
          z-index: 1;
        }
        .lt-quote {
          font-size: 12.5px; font-style: italic;
          color: rgba(255,255,255,0.8);
          line-height: 1.5; margin: 0 0 12px 0;
          border-left: 2px solid rgba(255,255,255,0.25);
          padding-left: 10px;
        }
        .lt-quote cite {
          display: block; font-style: normal;
          font-size: 11px; color: rgba(255,255,255,0.45);
          margin-top: 5px;
        }
        .lt-stats {
          display: flex; gap: 18px;
          margin-bottom: 13px;
        }
        .lt-stat {
          display: flex; flex-direction: column;
          align-items: center; gap: 1px;
        }
        .lt-stat strong {
          font-size: 15px; font-weight: 700; color: #fff;
        }
        .lt-stat span {
          font-size: 9px; color: rgba(255,255,255,0.45);
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .lt-client-logos {
          display: flex; gap: 8px; align-items: center;
        }
        .lt-client-logo {
          height: 16px; width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.55;
          display: block;
        }

        /* ── Right panel: steps ── */
        #lt-panel-right {
          flex: 1;
          background: #E8F4FF;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        #lt-progress {
          height: 3px;
          background: rgba(15,23,36,0.1);
          flex-shrink: 0;
        }
        #lt-progress-fill {
          height: 100%; width: 0%;
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          transition: width 0.5s ease;
        }
        #lt-body {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px 48px 80px;
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
          margin-bottom: 12px; font-size: 12px; font-weight: 500;
          color: rgba(15,23,36,0.4);
        }
        .lt-qnum-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 20px; height: 20px;
          background: rgba(15,23,36,0.08); border-radius: 4px;
          font-size: 10px; font-weight: 700; color: rgba(15,23,36,0.5);
        }

        /* ── Question text ── */
        .lt-question {
          font-size: clamp(1.15rem, 2.2vw, 1.7rem);
          font-weight: 700; color: #0F1724;
          line-height: 1.25; margin: 0 0 20px 0;
        }

        /* ── Option buttons ── */
        .lt-options {
          display: flex; flex-direction: column;
          gap: 6px; margin-bottom: 18px;
        }
        .lt-opt {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px;
          border: 1px solid rgba(15,23,36,0.15); border-radius: 6px;
          background: #fff; color: #374151;
          font-size: 14px; text-align: left; cursor: pointer; width: 100%;
          transition: border-color 0.15s, background 0.15s, color 0.15s;
          font-family: inherit;
        }
        .lt-opt:hover { border-color: rgba(15,23,36,0.35); color: #0F1724; }
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
          width: 22px; height: 22px; min-width: 22px;
          border: 1px solid rgba(15,23,36,0.2); border-radius: 4px;
          font-size: 10px; font-weight: 700; color: rgba(15,23,36,0.4);
          background: transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }

        /* ── "Other" text reveal ── */
        .lt-other-wrap { margin: 4px 0 14px 32px; }
        .lt-other-wrap[hidden] { display: none; }

        /* ── Text inputs (underline style) ── */
        .lt-text-input {
          width: 100%; background: transparent;
          border: none; border-bottom: 1.5px solid rgba(15,23,36,0.2);
          color: #0F1724; font-size: 15px; padding: 7px 0; outline: none;
          transition: border-color 0.2s; font-family: inherit;
        }
        .lt-text-input:focus { border-bottom-color: #0F1724; }
        .lt-text-input::placeholder { color: rgba(15,23,36,0.22); }
        .lt-text-input.lt-error { border-bottom-color: #ef4444; }

        /* ── Checkbox ── */
        .lt-checkbox-wrap { margin: 10px 0 18px; }
        .lt-checkbox-label {
          display: flex; align-items: flex-start; gap: 10px;
          cursor: pointer; font-size: 13px; color: rgba(15,23,36,0.55);
          line-height: 1.5; user-select: none;
        }
        .lt-checkbox-label input[type="checkbox"] { display: none; }
        .lt-checkbox-custom {
          display: inline-flex; align-items: center; justify-content: center;
          width: 18px; height: 18px; min-width: 18px;
          border: 1.5px solid rgba(15,23,36,0.3); border-radius: 3px;
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
        .lt-hint { font-size: 11px; color: rgba(15,23,36,0.3); }
        .lt-hint kbd {
          display: inline-flex; align-items: center; padding: 1px 5px;
          border: 1px solid rgba(15,23,36,0.2); border-radius: 3px;
          font-size: 10px; font-family: inherit; color: rgba(15,23,36,0.35);
        }

        /* ── Contact step fields ── */
        .lt-contact-fields {
          display: flex; flex-direction: column;
          gap: 18px; margin-bottom: 22px;
        }
        .lt-field label {
          display: block; font-size: 10px; font-weight: 600;
          color: rgba(15,23,36,0.4); text-transform: uppercase;
          letter-spacing: 0.08em; margin-bottom: 5px;
        }
        .lt-optional { font-weight: 400; text-transform: none; letter-spacing: 0; }
        .lt-field-error { color: #dc2626; font-size: 12px; margin-top: 5px; }
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
        .lt-submitting-msg { color: rgba(15,23,36,0.45); font-size: 13px; margin-top: 8px; }
        .lt-submitting-msg[hidden] { display: none; }
        .lt-submit-error { color: #dc2626; font-size: 12px; margin-top: 8px; }
        .lt-submit-error[hidden] { display: none; }

        /* ── Nav arrows (absolute inside right panel) ── */
        #lt-nav-arrows {
          position: absolute; bottom: 20px; right: 20px;
          display: flex; gap: 4px; z-index: 10;
        }
        .lt-nav-btn {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px;
          background: rgba(15,23,36,0.07);
          border: 1px solid rgba(15,23,36,0.18); border-radius: 6px;
          color: #0F1724; cursor: pointer;
          transition: background 0.15s;
        }
        .lt-nav-btn:hover { background: rgba(15,23,36,0.13); }
        .lt-nav-btn:disabled { opacity: 0.22; cursor: not-allowed; }

        /* ════════════════════════════════════════
           MOBILE  (≤ 768px)
           ════════════════════════════════════════ */
        @media (max-width: 768px) {
          /* Cover — stacked */
          #lt-cover { flex-direction: column; }
          .lt-cover-left {
            flex: 0 0 42vh;
            padding: 52px 20px 80px;
          }
          .lt-cover-natasha { width: 52%; max-width: 200px; border-radius: 10px; }
          .lt-cover-logo-wrap { top: 16px; left: 18px; }
          .lt-cover-cred { bottom: 16px; left: 18px; right: 18px; }
          .lt-cover-cred-sep { margin-bottom: 9px; }
          .lt-cover-cred-tagline { font-size: 10px; margin-bottom: 7px; }
          .lt-cover-cred-logos { gap: 12px; }
          .lt-cover-cred-logo { height: 13px; }
          .lt-cover-right {
            flex: 1;
            padding: 28px 24px;
            align-items: flex-start;
            overflow-y: auto;
          }
          .lt-cover-headline { font-size: 1.6rem; }
          .lt-cover-subtitle { font-size: 14px; }

          /* Quiz — stacked */
          #lt-quiz { flex-direction: column; }

          /* Left panel — horizontal strip */
          #lt-panel-left {
            height: 26vh;
            flex: none;
            display: flex;
            flex-direction: row;
          }
          .lt-natasha-wrap {
            position: relative;
            width: 38%;
            flex-shrink: 0;
            height: 100%;
          }
          .lt-natasha-img {
            width: 100%; height: 100%;
            object-fit: cover;
            object-position: center top;
          }
          .lt-cred-overlay {
            position: relative;
            flex: 1;
            background: rgba(15,23,36,0.92);
            padding: 10px 13px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
          }
          .lt-quote {
            font-size: 10.5px;
            margin-bottom: 7px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .lt-stats { gap: 12px; margin-bottom: 7px; }
          .lt-stat strong { font-size: 12px; }
          .lt-stat span { font-size: 8px; }
          .lt-client-logos { gap: 5px; }
          .lt-client-logo { height: 13px; }

          /* Right panel */
          #lt-panel-right { flex: 1; }
          #lt-body { padding: 18px 20px 72px; }
          .lt-question { font-size: 1.05rem; }
          .lt-opt { font-size: 13px; padding: 9px 12px; }

          /* Step 5 optional fields — 2-col grid */
          .lt-contact-optional-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          /* Nav arrows */
          #lt-nav-arrows { bottom: 16px; right: 16px; }
          .lt-nav-btn { width: 32px; height: 32px; }
        }
      ` }} />

      {/* ════════════════════════════════════════
          COVER PAGE
          ════════════════════════════════════════ */}
      <div id="lt-cover">

        {/* Left: dark navy — Natasha centred + credibility strip */}
        <div className="lt-cover-left">

          {/* CI Agile logo — top-left */}
          <div className="lt-cover-logo-wrap">
            <a href="/index.html">
              <img className="lt-logo" src={ciAgileLogoWhite} alt="CI Agile" />
            </a>
          </div>

          {/* Natasha — centred, natural size */}
          <img
            className="lt-cover-natasha"
            src={natasha}
            alt="Natasha, CI Agile Advisor"
          />

          {/* Credibility strip — bottom */}
          <div className="lt-cover-cred">
            <div className="lt-cover-cred-sep"></div>
            <p className="lt-cover-cred-tagline">Trusted by 500+ organisations across Asia</p>
            <div className="lt-cover-cred-logos">
              <img className="lt-cover-cred-logo" src={logoShell} alt="Shell" />
              <img className="lt-cover-cred-logo" src={logoDbs} alt="DBS" />
              <img className="lt-cover-cred-logo" src={logoHsbc} alt="HSBC" />
              <img className="lt-cover-cred-logo" src={logoCisco} alt="Cisco" />
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

        {/* ── Left panel: Natasha + credibility ── */}
        <div id="lt-panel-left">
          <div className="lt-natasha-wrap">
            <img
              className="lt-natasha-img"
              src={natasha}
              alt="Natasha, CI Agile Advisor"
            />
          </div>
          <div className="lt-cred-overlay">
            <blockquote className="lt-quote">
              "Practical, empowering, and immediately applicable to real teams."
              <cite>— POS Aviation</cite>
            </blockquote>
            <div className="lt-stats">
              <div className="lt-stat"><strong>500+</strong><span>Orgs</span></div>
              <div className="lt-stat"><strong>98%</strong><span>Satisfaction</span></div>
              <div className="lt-stat"><strong>3mo</strong><span>Impact</span></div>
            </div>
            <div className="lt-client-logos">
              <img className="lt-client-logo" src={logoShell} alt="Shell" />
              <img className="lt-client-logo" src={logoDbs} alt="DBS" />
              <img className="lt-client-logo" src={logoHsbc} alt="HSBC" />
              <img className="lt-client-logo" src={logoCisco} alt="Cisco" />
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
              <h2 className="lt-question">Please tell us how we can help?</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="training">
                  <span className="lt-badge">A</span><span>Training</span>
                </button>
                <button className="lt-opt" data-lt-value="consulting">
                  <span className="lt-badge">B</span><span>Consulting</span>
                </button>
                <button className="lt-opt" data-lt-value="general">
                  <span className="lt-badge">C</span><span>General Inquiry</span>
                </button>
              </div>
              {/* Shown only when Training is selected */}
              <div className="lt-checkbox-wrap" id="lt-training-extra" hidden>
                <label className="lt-checkbox-label">
                  <input type="checkbox" id="lt-has-class" />
                  <span className="lt-checkbox-custom"></span>
                  <span>I already have a specific training class in mind</span>
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
              <h2 className="lt-question">What best describes you?</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="individual">
                  <span className="lt-badge">A</span><span>Individual professional (upskilling or certification)</span>
                </button>
                <button className="lt-opt" data-lt-value="team-leader">
                  <span className="lt-badge">B</span><span>Team leader / manager (improving my team)</span>
                </button>
                <button className="lt-opt" data-lt-value="executive">
                  <span className="lt-badge">C</span><span>Executive / decision-maker (enterprise transformation)</span>
                </button>
                <button className="lt-opt" data-lt-value="other">
                  <span className="lt-badge">D</span><span>Other</span>
                </button>
              </div>
              <div className="lt-other-wrap" id="lt-role-other-wrap" hidden>
                <input
                  type="text"
                  id="lt-role-other"
                  className="lt-text-input"
                  placeholder="Please describe your role..."
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
              <h2 className="lt-question">Which area interests you most?</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="agile-scrum">
                  <span className="lt-badge">A</span><span>Agile &amp; Scrum certification or fundamentals</span>
                </button>
                <button className="lt-opt" data-lt-value="teamworks">
                  <span className="lt-badge">B</span><span>TeamWorks workshops</span>
                </button>
                <button className="lt-opt" data-lt-value="enterprise">
                  <span className="lt-badge">C</span><span>Enterprise agility &amp; transformation</span>
                </button>
                <button className="lt-opt" data-lt-value="assessment">
                  <span className="lt-badge">D</span><span>Free 30-min assessment</span>
                </button>
                <button className="lt-opt" data-lt-value="not-sure">
                  <span className="lt-badge">E</span><span>Not sure – help me decide</span>
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
              <h2 className="lt-question">Which training interests you most?</h2>
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
                  <span className="lt-badge">D</span><span>Other Training</span>
                </button>
              </div>
              <div className="lt-other-wrap" id="lt-interest-other-wrap" hidden>
                <input
                  type="text"
                  id="lt-interest-other"
                  className="lt-text-input"
                  placeholder="Please specify the training..."
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
              <h2 className="lt-question">How many people will join?</h2>
              <div className="lt-options">
                <button className="lt-opt" data-lt-value="just-me">
                  <span className="lt-badge">A</span><span>Just me</span>
                </button>
                <button className="lt-opt" data-lt-value="small-team">
                  <span className="lt-badge">B</span><span>2–10 people (small team)</span>
                </button>
                <button className="lt-opt" data-lt-value="medium-team">
                  <span className="lt-badge">C</span><span>11–30 people (perfect for TeamWorks)</span>
                </button>
                <button className="lt-opt" data-lt-value="enterprise">
                  <span className="lt-badge">D</span><span>30+ people (enterprise program)</span>
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

          </div>{/* end #lt-body */}

          {/* Nav arrows */}
          <div id="lt-nav-arrows">
            <button className="lt-nav-btn" id="lt-btn-up" aria-label="Previous question">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 9.5L7 4.5L12 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="lt-nav-btn" id="lt-btn-down" aria-label="Next question">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 4.5L7 9.5L12 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>{/* end #lt-panel-right */}

      </div>{/* end #lt-quiz */}

    </div>
  );
}
