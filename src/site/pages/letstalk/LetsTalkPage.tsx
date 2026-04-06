import ciAgileLogoWhite from '@/assets/img/main/ci-agile-logo-white.png';

export function LetsTalkPage() {
  return (
    <div id="lt-page" style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'inherit' }}>

      <style dangerouslySetInnerHTML={{ __html: `
        body { background: #000 !important; }
        #lt-page * { box-sizing: border-box; }

        /* ── Header ── */
        #lt-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          display: flex; align-items: center; gap: 20px; padding: 16px 24px;
        }
        #lt-logo { height: 26px; width: auto; object-fit: contain; display: block; }

        /* ── Progress bar ── */
        #lt-progress {
          flex: 1; height: 3px; background: rgba(255,255,255,0.12);
          border-radius: 2px; overflow: hidden;
        }
        #lt-progress-fill {
          height: 100%; width: 0%;
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          transition: width 0.5s ease;
        }

        /* ── Body wrapper ── */
        #lt-body {
          display: flex; align-items: center; justify-content: center;
          min-height: 100vh; padding: 100px 24px 90px;
        }

        /* ── Steps ── */
        .lt-step { display: none; flex-direction: column; width: 100%; max-width: 640px; }
        .lt-step.lt-active {
          display: flex;
          animation: lt-slide-in 0.38s ease forwards;
        }
        .lt-step.lt-active.lt-reverse {
          animation: lt-slide-in-rev 0.38s ease forwards;
        }
        @keyframes lt-slide-in {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lt-slide-in-rev {
          from { opacity: 0; transform: translateY(-32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Question number ── */
        .lt-qnum {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 14px; font-size: 13px; font-weight: 500;
          color: rgba(255,255,255,0.5);
        }
        .lt-qnum-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 22px; height: 22px;
          background: rgba(255,255,255,0.1); border-radius: 4px;
          font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.7);
        }

        /* ── Question text ── */
        .lt-question {
          font-size: clamp(1.45rem, 4vw, 2.15rem); font-weight: 700;
          color: #fff; line-height: 1.25; margin: 0 0 26px 0;
        }

        /* ── Option buttons ── */
        .lt-options { display: flex; flex-direction: column; gap: 8px; margin-bottom: 22px; }
        .lt-opt {
          display: flex; align-items: center; gap: 12px;
          padding: 13px 16px;
          border: 1px solid rgba(255,255,255,0.2); border-radius: 6px;
          background: transparent; color: rgba(255,255,255,0.75);
          font-size: 15px; text-align: left; cursor: pointer; width: 100%;
          transition: border-color 0.15s, background 0.15s, color 0.15s;
          font-family: inherit;
        }
        .lt-opt:hover { border-color: rgba(255,255,255,0.55); color: #fff; }
        .lt-opt.lt-selected {
          border-color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.06); color: #fff;
        }
        .lt-opt.lt-selected .lt-badge { background: #fff; color: #000; border-color: #fff; }

        .lt-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 24px; height: 24px; min-width: 24px;
          border: 1px solid rgba(255,255,255,0.3); border-radius: 4px;
          font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.6);
          background: transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }

        /* ── "Other" text reveal ── */
        .lt-other-wrap { margin: 4px 0 16px 36px; }
        .lt-other-wrap[hidden] { display: none; }

        /* ── Text inputs (underline style) ── */
        .lt-text-input {
          width: 100%; background: transparent;
          border: none; border-bottom: 2px solid rgba(255,255,255,0.25);
          color: #fff; font-size: 17px; padding: 8px 0; outline: none;
          transition: border-color 0.2s; font-family: inherit;
        }
        .lt-text-input:focus { border-bottom-color: #3b82f6; }
        .lt-text-input::placeholder { color: rgba(255,255,255,0.25); }
        .lt-text-input.lt-error { border-bottom-color: #ef4444; }

        /* ── Checkbox ── */
        .lt-checkbox-wrap { margin: 14px 0 22px; }
        .lt-checkbox-label {
          display: flex; align-items: flex-start; gap: 12px;
          cursor: pointer; font-size: 14px; color: rgba(255,255,255,0.6);
          line-height: 1.5; user-select: none;
        }
        .lt-checkbox-label input[type="checkbox"] { display: none; }
        .lt-checkbox-custom {
          display: inline-flex; align-items: center; justify-content: center;
          width: 20px; height: 20px; min-width: 20px;
          border: 2px solid rgba(255,255,255,0.35); border-radius: 4px;
          background: transparent; margin-top: 1px;
          transition: background 0.15s, border-color 0.15s;
          font-size: 12px; font-weight: 700; color: #fff;
        }
        .lt-checkbox-label input:checked + .lt-checkbox-custom {
          background: #3b82f6; border-color: #3b82f6;
        }
        .lt-checkbox-label input:checked + .lt-checkbox-custom::after { content: '✓'; }

        /* ── Actions row (OK button + hint) ── */
        .lt-actions { display: flex; align-items: center; gap: 12px; }
        .lt-ok-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; background: #fff; color: #000;
          border: none; border-radius: 6px;
          font-size: 14px; font-weight: 600; cursor: pointer;
          transition: background 0.15s; font-family: inherit;
        }
        .lt-ok-btn:hover { background: #e5e7eb; }
        .lt-hint { font-size: 12px; color: rgba(255,255,255,0.3); }
        .lt-hint kbd {
          display: inline-flex; align-items: center; padding: 1px 5px;
          border: 1px solid rgba(255,255,255,0.25); border-radius: 3px;
          font-size: 11px; font-family: inherit;
        }

        /* ── Contact step fields ── */
        .lt-contact-fields { display: flex; flex-direction: column; gap: 28px; margin-bottom: 30px; }
        .lt-field label {
          display: block; font-size: 11px; font-weight: 600;
          color: rgba(255,255,255,0.45); text-transform: uppercase;
          letter-spacing: 0.08em; margin-bottom: 6px;
        }
        .lt-optional { font-weight: 400; text-transform: none; letter-spacing: 0; }
        .lt-field-error { color: #ef4444; font-size: 13px; margin-top: 6px; }
        .lt-field-error[hidden] { display: none; }

        /* ── Submit button ── */
        .lt-submit-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          color: #fff; border: none; border-radius: 8px;
          font-size: 15px; font-weight: 600; cursor: pointer;
          transition: opacity 0.15s; font-family: inherit;
        }
        .lt-submit-btn:hover { opacity: 0.88; }
        .lt-submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .lt-submitting-msg { color: rgba(255,255,255,0.45); font-size: 14px; margin-top: 10px; }
        .lt-submitting-msg[hidden] { display: none; }
        .lt-submit-error { color: #ef4444; font-size: 13px; margin-top: 10px; }
        .lt-submit-error[hidden] { display: none; }

        /* ── Nav arrows (bottom-right) ── */
        #lt-nav-arrows {
          position: fixed; bottom: 24px; right: 24px;
          display: flex; gap: 4px; z-index: 50;
        }
        .lt-nav-btn {
          display: flex; align-items: center; justify-content: center;
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18); border-radius: 6px;
          color: #fff; cursor: pointer; transition: background 0.15s;
        }
        .lt-nav-btn:hover { background: rgba(255,255,255,0.16); }
        .lt-nav-btn:disabled { opacity: 0.25; cursor: not-allowed; }

        @media (max-width: 640px) {
          #lt-body { padding: 88px 16px 80px; }
          .lt-question { font-size: 1.35rem; }
          .lt-opt { font-size: 14px; padding: 12px 14px; }
        }
      ` }} />

      {/* ── Fixed header: logo + progress ── */}
      <div id="lt-header">
        <a href="/index.html">
          <img id="lt-logo" src={ciAgileLogoWhite} alt="CI Agile" />
        </a>
        <div id="lt-progress">
          <div id="lt-progress-fill"></div>
        </div>
      </div>

      {/* ── Step container ── */}
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
              <span className="lt-badge">A</span><span>A training</span>
            </button>
            <button className="lt-opt" data-lt-value="consulting">
              <span className="lt-badge">B</span><span>Consulting</span>
            </button>
            <button className="lt-opt" data-lt-value="general">
              <span className="lt-badge">C</span><span>General Inquiry</span>
            </button>
          </div>
          <div className="lt-actions">
            <button className="lt-ok-btn" data-lt-ok>OK <span>✓</span></button>
            <span className="lt-hint">press <kbd>Enter</kbd> ↵</span>
          </div>
        </div>

        {/* ════ Step 2: Role (training path) ════ */}
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
          <div className="lt-checkbox-wrap">
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

        {/* ════ Step 4: Group Size (training path) ════ */}
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

        {/* ════ Step 5: Contact Details (all paths) ════ */}
        <div className="lt-step" data-lt-step="5">
          <div className="lt-qnum">
            <span className="lt-qnum-badge" id="lt-contact-step-num">5</span>
            <span>→</span>
          </div>
          <h2 className="lt-question">Great! Where should we send your personalized recommendation?</h2>
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
            <div className="lt-field">
              <label htmlFor="lt-company">
                Company name <span className="lt-optional">(optional)</span>
              </label>
              <input
                type="text" id="lt-company" className="lt-text-input"
                placeholder="Acme Corp" autoComplete="organization"
              />
            </div>
            <div className="lt-field">
              <label htmlFor="lt-phone">
                Phone <span className="lt-optional">(optional)</span>
              </label>
              <input
                type="tel" id="lt-phone" className="lt-text-input"
                placeholder="+60 12 345 6789" autoComplete="tel"
              />
            </div>
          </div>
          <div className="lt-actions" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
            <button className="lt-submit-btn" id="lt-submit-btn">
              Submit <span>→</span>
            </button>
            <div className="lt-submitting-msg" id="lt-submitting-msg" hidden>Sending your message…</div>
            <div className="lt-submit-error" id="lt-submit-error" hidden></div>
          </div>
        </div>

      </div>{/* end #lt-body */}

      {/* ── Nav arrows bottom-right ── */}
      <div id="lt-nav-arrows">
        <button className="lt-nav-btn" id="lt-btn-up" aria-label="Previous question">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 9.5L7 4.5L12 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="lt-nav-btn" id="lt-btn-down" aria-label="Next question">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 4.5L7 9.5L12 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

    </div>
  );
}
