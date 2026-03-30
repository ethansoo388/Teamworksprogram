import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";

export function LeadershipTrainingPage() {
  return (
    <div className="min-h-screen bg-[#0F1724]">
      <MainSiteNavigation isDarkTheme />

      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
        <div className="absolute inset-0 z-0">
          <img src="/assets/img/jess/agile-leader-training-hero.webp" alt="Agile Leader Training" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-10" />
        <div className="relative z-20 w-full px-6 lg:px-16 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }} />
                <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Dr. Jeff Sutherland's Enterprise Agility Program</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
                Enterprise Agility.<br />
                <span style={{ background: 'linear-gradient(to right,#60a5fa,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Led as a System.</span>
              </h1>
              <p className="text-xl text-white/85 leading-relaxed mb-4 max-w-2xl">
                The only leadership program built on 70 years of management science — combining Dr. Jeff Sutherland's original Scrum knowledge with enterprise-scale execution systems.
              </p>
              <p className="text-lg text-white/65 mb-10 max-w-xl">
                Used by Google, Amazon, Tesla, Spotify — and now delivering results across Asia Pacific.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#program" className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-lg transition-all text-base" style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)', boxShadow: '0 10px 25px rgba(59,130,246,0.25)' }}>
                  Explore the Program →
                </a>
                <a href="/contactus.html?source=jess-leadership-training&cta=talk-to-program-advisor#contact-form" className="inline-flex items-center gap-3 px-8 py-4 border-2 text-white font-semibold rounded-lg hover:bg-blue-500/10 transition-all text-base" style={{ borderColor: 'rgba(34,211,238,0.5)' }}>
                  Talk to a Program Advisor
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2"><span className="text-cyan-400 font-bold">3</span> International Credentials</div>
                <div className="flex items-center gap-2"><span className="text-cyan-400 font-bold">300+</span> Classes Delivered</div>
                <div className="flex items-center gap-2"><span className="text-cyan-400 font-bold">10+</span> Countries</div>
                <div className="flex items-center gap-2"><span className="text-cyan-400 font-bold">20 yrs</span> Trainer Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      <div className="sticky top-[72px] z-40 bg-[#0F1724] border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex gap-8 sm:gap-12 overflow-x-auto">
            <span className="relative py-4 text-sm sm:text-base font-medium text-white whitespace-nowrap flex-shrink-0">
              Overview
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
            </span>
            <a href="/jess/course-modules.html" className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-400 hover:text-white whitespace-nowrap flex-shrink-0">Course Modules</a>
            <a href="/jess/instructor.html" className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-400 hover:text-white whitespace-nowrap flex-shrink-0">Instructor</a>
            <a href="/jess/class-schedule.html" className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-400 hover:text-white whitespace-nowrap flex-shrink-0">Class Schedule</a>
          </nav>
        </div>
      </div>

      {/* ═══ SECTION 2: TRUST BAR ═══ */}
      <section className="py-10 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-8">The same framework trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {[
              { src: '/assets/img/jess/logo-amazon.webp', alt: 'Amazon' },
              { src: '/assets/img/jess/logo-microsoft.webp', alt: 'Microsoft' },
              { src: '/assets/img/jess/logo-toyota.webp', alt: 'Toyota' },
              { src: '/assets/img/jess/logo-spotify.webp', alt: 'Spotify' },
              { src: '/assets/img/jess/logo-tesla.webp', alt: 'Tesla' },
              { src: '/assets/img/jess/logo-salesforce.webp', alt: 'Salesforce' },
              { src: '/assets/img/jess/logo-bosch.webp', alt: 'Bosch' },
              { src: '/assets/img/jess/logo-rocket-mortgage.webp', alt: 'Rocket Mortgage' },
              { src: '/assets/img/jess/logo-maersk.webp', alt: 'Maersk' },
            ].map(({ src, alt }) => (
              <div key={alt} className="w-24 lg:w-28 h-12 lg:h-14 bg-white rounded-lg p-2 flex items-center justify-center">
                <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-600 mt-6">Concepts proven by Agile coaches at Fortune 100 companies worldwide</p>
        </div>
      </section>

      {/* ═══ SECTION 3: URGENCY HOOK ═══ */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom,#0f172a,#1e293b)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center,rgba(59,130,246,0.06),transparent 60%)' }} />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="mb-10">
            <div className="flex flex-col items-center gap-1 mb-6">
              <img src="/assets/img/jess/logo-smr-white.svg" alt="MIT Sloan Management Review" className="h-8 w-auto opacity-70" />
              <span className="text-slate-500 text-xs uppercase tracking-widest">2020</span>
            </div>
            <div className="text-6xl lg:text-8xl font-black leading-none mb-4" style={{ background: 'linear-gradient(to right,#60a5fa,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ONLY 17%</div>
            <p className="text-2xl lg:text-3xl font-light text-white max-w-2xl mx-auto leading-relaxed">
              of today's leading companies will still be industry leaders in five years.
            </p>
            <p className="text-xl text-slate-400 mt-4 max-w-xl mx-auto font-light">
              The ones who survive redesign how they lead, prioritise, and execute.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">300+</div>
              <div className="text-sm text-slate-400">Scrum Classes Delivered</div>
            </div>
            <div className="text-center border-x border-slate-700">
              <div className="text-4xl font-black text-white mb-1">3</div>
              <div className="text-sm text-slate-400">International Credentials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">10x</div>
              <div className="text-sm text-slate-400">Results in 1/10 the Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: WHY TRANSFORMATIONS STALL ═══ */}
      <section className="py-16 lg:py-20 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">The Leadership Problem</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why Agile Transformations Stall</h2>
            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
              Most organisations invest in Agile training. Few redesign the system around it.
            </p>
          </div>
          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden mb-8 bg-slate-950" style={{ aspectRatio: '16/7' }}>
            <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" id="jeffVideo">
              <source src="/assets/video/jeff_sutherland_speech2_bg_optimized.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(15,23,42,0.7),transparent)' }} />
            <button
              data-video-mute="jeffVideo"
              className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-white cursor-pointer rounded-full px-4 py-2 border border-white/20"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072" />
              </svg>
              ▶ Watch with sound
            </button>
          </div>
          {/* Failure patterns */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[
              'Teams improve, but leadership stays misaligned',
              'Governance contradicts agility',
              'Decision rights are unclear',
              'Productivity gains stay local and temporary',
              'Consultants engaged before leaders are ready',
            ].map((text) => (
              <span key={text} className="px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm font-medium">{text}</span>
            ))}
          </div>
          {/* Pull quote */}
          <div className="max-w-3xl mx-auto relative">
            <div className="text-8xl text-blue-500/15 font-black leading-none absolute -top-4 -left-2 select-none">"</div>
            <blockquote className="pl-8 border-l-2 border-cyan-500">
              <p className="text-2xl lg:text-3xl text-cyan-300 font-light leading-relaxed italic">
                Agile transformation requires leadership alignment and execution capability — working as one system.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: PROGRAM OVERVIEW ═══ */}
      <section id="program" className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom,#0F1724,#0f172a)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="w-2 h-2 rounded-full bg-blue-400" style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }} />
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Program Overview</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4" style={{ background: 'linear-gradient(to right,#ffffff,#bfdbfe,#a5f3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Dr. Jeff Sutherland's<br />Enterprise Agility Program
            </h2>
            <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">A Complete Leadership + Execution System</p>
          </div>

          {/* 70-year timeline */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                70 Years of Management Know-How.<br className="hidden lg:block" />
                <span style={{ background: 'linear-gradient(to right,#60a5fa,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Culminates into this course.</span>
              </h3>
            </div>

            {/* Combined timeline: all 7 stops */}
            <div className="relative">
              <div className="absolute left-0 right-0 h-px hidden lg:block" style={{ top: '152px', zIndex: 0, background: 'linear-gradient(to right,#334155 0%,#334155 40%,rgba(59,130,246,0.4) 55%,rgba(6,182,212,0.4) 100%)' }} />
              <div className="grid grid-cols-3 lg:grid-cols-7 gap-6">
                {/* First 3 stops — slate style */}
                {[
                  { year: '1950', title: 'Toyota Production System', sub: 'Lean manufacturing foundations', img: '/assets/img/jess/timeline-tps-1950.webp' },
                  { year: '1990s', title: 'Scrum Created', sub: 'Dr. Jeff Sutherland', img: '/assets/img/jess/timeline-scrum-guide-1990.webp' },
                  { year: '2001', title: 'Agile Manifesto', sub: 'Co-signed by Sutherland', img: '/assets/img/jess/timeline-agile-manifesto-2001.webp' },
                ].map(({ year, title, sub, img }) => (
                  <div key={year} className="flex flex-col items-center text-center relative z-10">
                    <div className="w-24 h-36 mb-3 rounded-md overflow-hidden shadow-lg border border-slate-700">
                      <img src={img} alt={title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-slate-800 border-2 border-slate-600">
                      <span className="text-xs font-bold text-slate-400">{year}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-300">{title}</p>
                    <p className="text-xs text-slate-500 mt-1">{sub}</p>
                  </div>
                ))}
                {/* 2014 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-36 mb-3 rounded-md overflow-hidden shadow-lg" style={{ border: '1px solid rgba(59,130,246,0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                    <img src="/assets/img/jess/timeline-scrum-book-2014.webp" alt="Hyper-Productive Scrum" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'linear-gradient(to bottom right,#1e40af,#0891b2)', border: '2px solid rgba(59,130,246,0.5)', boxShadow: '0 0 16px rgba(59,130,246,0.2)' }}>
                    <span className="text-xs font-bold text-white">2014</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-300">Hyper-Productive Scrum</p>
                  <p className="text-xs text-slate-400 mt-1">Global bestseller · Jeff Sutherland</p>
                </div>
                {/* 2019 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-36 mb-3 rounded-md overflow-hidden shadow-lg" style={{ border: '1px solid rgba(59,130,246,0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                    <img src="/assets/img/jess/timeline-scrumatscale-2019.webp" alt="Scrum@Scale" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'linear-gradient(to bottom right,#1e40af,#0891b2)', border: '2px solid rgba(59,130,246,0.5)', boxShadow: '0 0 16px rgba(59,130,246,0.2)' }}>
                    <span className="text-xs font-bold text-white">2019</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-300">Scrum@Scale</p>
                  <p className="text-xs text-slate-400 mt-1">Enterprise-wide system</p>
                </div>
                {/* 2023 */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-36 mb-3 rounded-md overflow-hidden shadow-lg" style={{ border: '1px solid rgba(59,130,246,0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                    <img src="/assets/img/jess/timeline-first-principle-2023.webp" alt="Enterprise Productivity & Innovation" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'linear-gradient(to bottom right,#1e40af,#0891b2)', border: '2px solid rgba(59,130,246,0.5)', boxShadow: '0 0 16px rgba(59,130,246,0.2)' }}>
                    <span className="text-xs font-bold text-white">2023</span>
                  </div>
                  <p className="text-sm font-semibold text-blue-300">Enterprise Productivity &amp; Innovation</p>
                  <p className="text-xs text-slate-400 mt-1">Traditional management, upgraded</p>
                </div>
                {/* 2025 — AI standout */}
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="relative w-24 h-36 mb-3 rounded-md overflow-hidden" style={{ border: '2px solid rgba(34,211,238,0.6)', boxShadow: '0 0 24px rgba(34,211,238,0.35),0 4px 20px rgba(0,0,0,0.4)' }}>
                    <div className="absolute top-1.5 left-0 right-0 flex justify-center z-10">
                      <span className="px-2 py-0.5 text-white font-bold rounded-full" style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)', fontSize: '9px', lineHeight: '1.4' }}>AI-POWERED</span>
                    </div>
                    <img src="/assets/img/jess/timeline-scrumsage-2025.webp" alt="ScrumSage AI" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'linear-gradient(to bottom right,#3b82f6,#06b6d4)', border: '2px solid #22d3ee', boxShadow: '0 0 24px rgba(34,211,238,0.4)' }}>
                    <span className="text-xs font-bold text-white">2025</span>
                  </div>
                  <p className="text-sm font-semibold text-cyan-400">ScrumSage AI</p>
                  <p className="text-xs text-slate-400 mt-1">AI-driven enterprise system</p>
                </div>
              </div>
            </div>
          </div>

          {/* Holistic model */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                Command the Full Picture.<br className="hidden lg:block" />
                <span style={{ background: 'linear-gradient(to right,#60a5fa,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Own Every Layer of Your Team.</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
              <div className="rounded-2xl overflow-hidden h-48"><img src="/assets/img/jess/fullsystem-product-owner.webp" alt="Product Owner Knowledge" className="w-full h-full object-cover" /></div>
              <div className="rounded-2xl overflow-hidden h-48"><img src="/assets/img/jess/fullsystem-scrum-master.webp" alt="Scrum Master Knowledge" className="w-full h-full object-cover" /></div>
              <div className="rounded-2xl overflow-hidden h-48"><img src="/assets/img/jess/nova/nova_class.webp" alt="Class in Session" className="w-full h-full object-cover" /></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl p-8 hover:border-blue-500/30 transition-all" style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid #334155' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(59,130,246,0.2)' }}>
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3"><strong>Chief</strong><br />Product Owner Knowledge</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Align business goals</li><li>• Evaluate and prioritise value</li><li>• Communicate effectively</li><li>• Increase revenue</li>
                </ul>
              </div>
              <div className="rounded-2xl p-8 relative" style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(59,130,246,0.4)' }}>

                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(59,130,246,0.2)' }}>
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3"><strong>Large Project</strong><br />Scrum Master Knowledge</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Identify and eliminate waste</li><li>• Drive process change</li><li>• Motivate and improve team happiness</li><li>• Scale agility</li>
                </ul>
              </div>
              <div className="rounded-2xl p-8 hover:border-blue-500/30 transition-all" style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid #334155' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(59,130,246,0.2)' }}>
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3"><strong>Hyper-Productive</strong><br className="hidden lg:block" />Team Execution Knowledge</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Swarm to win on priorities</li><li>• Stability is essential</li><li>• Lean working principles</li><li>• Consistent quality delivery</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-cyan-400 mt-6 font-medium">The only program that gives leaders the complete system view — from strategy to team delivery.</p>
          </div>

          {/* 3 credentials */}
          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(to right,rgba(59,130,246,0.1),rgba(6,182,212,0.05),rgba(59,130,246,0.1))', border: '1px solid rgba(59,130,246,0.2)' }}>
            <p className="text-center text-sm text-slate-400 mb-6 uppercase tracking-widest">3 Internationally Recognised Credentials Included</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
              {[
                { num: '1', color: 'blue', title: 'Registered Scrum Master™', sub: 'RSM · Scrum Inc.' },
                { num: '2', color: 'cyan', title: 'Registered Product Owner™', sub: 'RPO · Scrum Inc.' },
                { num: '3', color: 'blue', title: 'Registered Scrum@Scale Fundamentals™', sub: 'RS@SF · Scrum Inc.' },
              ].map(({ num, color, title, sub }) => (
                <div key={num} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: `rgba(${color === 'cyan' ? '6,182,212' : '59,130,246'},0.2)`, border: `1px solid rgba(${color === 'cyan' ? '6,182,212' : '59,130,246'},0.3)` }}>
                    <span className={`text-2xl font-black ${color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'}`}>{num}</span>
                  </div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="text-xs text-slate-500">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: TWO COURSES ═══ */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">How to Get Started</p>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">A Sequential Two-Course Program</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">Each course stands alone. Together, they form a complete leadership-to-execution operating model.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Course 1 */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-10 shadow-lg hover:border-blue-300 transition-all flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 self-start">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Course 1</span>
              </div>
              <h3 className="text-3xl font-semibold text-slate-900 mb-3">High Performance Agile Leader</h3>
              <p className="text-slate-500 font-light mb-2 text-sm italic">Registered Scrum@Scale Fundamentals™ (RS@SF)</p>
              <p className="text-slate-500 font-light mb-6">Master Jeff Sutherland's system. Lead with clarity. For leaders and managers who drive performance.</p>
              <div className="space-y-3 mb-8 flex-grow">
                {[
                  'Align strategy to execution across business units',
                  'Establish governance that enables speed without chaos',
                  'Design an enterprise operating model for scale',
                  'Earn: Registered Scrum@Scale Fundamentals™',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <p className="text-xs text-blue-800 font-medium">Outcome: You leave equipped to architect the system — not just manage within it.</p>
              </div>
              <div className="flex items-center justify-between">
                <a href="/jess/class-schedule.html" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg text-sm transition-all" style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)' }}>View Class Schedule →</a>
                <span className="text-xs text-slate-400">2-Day Intensive</span>
              </div>
            </div>
            {/* Course 2 */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-10 shadow-lg hover:border-cyan-300 transition-all flex flex-col">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-6 self-start">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                <span className="text-sm font-medium text-cyan-600 uppercase tracking-wider">Course 2</span>
              </div>
              <h3 className="text-3xl font-semibold text-slate-900 mb-3">Leading Hyper-Productive Teams</h3>
              <p className="text-slate-500 font-light mb-2 text-sm italic">Registered Scrum Master — Product Owner™ (RSMPO)</p>
              <p className="text-slate-500 font-light mb-6">Execute with momentum. Create sustainable performance. For leaders building high-performance delivery teams.</p>
              <div className="space-y-3 mb-8 flex-grow">
                {[
                  'Implement proven Scrum execution mechanics',
                  'Eliminate bottlenecks and decision delays',
                  'Use metrics that predict delivery outcomes',
                  'Earn: Registered Scrum Master™ + Registered Product Owner™',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 mb-6">
                <p className="text-xs text-cyan-800 font-medium">Outcome: You build teams that deliver consistently — sprint after sprint.</p>
              </div>
              <div className="flex items-center justify-between">
                <a href="/jess/class-schedule.html" className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg text-sm transition-all" style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)' }}>View Class Schedule →</a>
                <span className="text-xs text-slate-400">2-Day Intensive</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-blue-500/20">
            <p className="text-white font-semibold text-lg mb-2">Take both courses for full-system mastery</p>
            <p className="text-slate-400 font-light text-sm max-w-xl mx-auto">Course 1 builds strategic clarity. Course 2 activates execution at the team level. Together: a complete enterprise agility operating model.</p>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7: REAL-WORLD RESULTS ═══ */}
      <section className="py-16 lg:py-20" style={{ background: 'linear-gradient(to bottom,#0f172a,#1e293b)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Proven Results</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Results That Speak for Themselves</h2>
            <p className="text-xl text-slate-400 font-light">Real organisations. Specific numbers. Measured outcomes.</p>
          </div>
          {/* Bank Islam case study */}
          <div className="rounded-3xl p-8 lg:p-12 mb-10 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right,#1e293b,#0F1724)', border: '1px solid rgba(59,130,246,0.3)' }}>
            <div className="absolute top-4 right-4 px-3 py-1 text-white text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)' }}>Asia Pacific Featured Case Study</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider mb-2">Bank Islam Malaysia Berhad</p>
                <h3 className="text-3xl font-bold text-white mb-2">The Mobile Banking "Go-Beyond" Breakthrough</h3>
                <p className="text-slate-400 font-light mb-8">From failed Agile initiatives to enterprise-wide transformation — delivered in 7 months.</p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { val: '50%', label: 'Increase in\nRetail Deposits' },
                    { val: '3X', label: 'Jump in\nApp Store Ratings' },
                    { val: '4.5X', label: 'Faster\nTime-to-Market' },
                  ].map(({ val, label }, i) => (
                    <div key={val} className={`text-center${i === 1 ? ' border-x border-slate-700' : ''}`}>
                      <div className="text-4xl font-black text-cyan-400 mb-1">{val}</div>
                      <div className="text-xs text-slate-400 whitespace-pre-line">{label}</div>
                    </div>
                  ))}
                </div>
                <blockquote className="border-l-2 border-cyan-500 pl-4 italic text-slate-300 text-sm leading-relaxed">
                  "Agile can move beyond theory and frameworks to become a strategic lever for transformation and value creation."
                </blockquote>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-6">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border border-slate-600">
                  <img src="/assets/img/jess/people-iran-moriff.jpg" alt="Mr. Iran Moriff" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Mr. Iran Moriff</p>
                  <p className="text-slate-400 text-sm">Group Chief Operating Officer &amp;</p>
                  <p className="text-slate-400 text-sm">Group Chief Sustainability Officer</p>
                  <p className="text-cyan-400 text-sm font-medium mt-1">Bank Islam Malaysia Berhad</p>
                  <p className="text-slate-500 text-xs mt-2 italic">Opening Keynote Speaker, AIDA Forum 2025</p>
                </div>
                <div className="rounded-xl p-4 text-xs text-slate-400" style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid #334155' }}>
                  <span className="text-blue-400 font-medium">Presented live</span> at the AIDA Forum 2025 — Malaysia's premier Agile leadership summit
                </div>
              </div>
            </div>
          </div>
          {/* 3 global case studies */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { org: 'Rocket Mortgage · USA', stat: '86 → 42 days', desc: 'Cycle time for feature development halved', note: 'Largest mortgage provider in the US' },
              { org: '3M Hospital Systems · USA', stat: '60% reduction', desc: 'In staff attrition — people love their job', note: 'Award-winning culture change' },
              { org: 'SAAB Aeronautics · Sweden', stat: '2,500 people', desc: 'Synchronised in just 1.25 hours', note: 'Gripen E jet fighter programme' },
            ].map(({ org, stat, desc, note }) => (
              <div key={org} className="rounded-2xl p-6" style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid #334155' }}>
                <p className="text-blue-400 text-xs font-medium uppercase tracking-wider mb-3">{org}</p>
                <p className="text-2xl font-black text-white mb-1">{stat}</p>
                <p className="text-sm text-slate-400">{desc}</p>
                <p className="text-xs text-slate-600 mt-3 italic">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8: TESTIMONIALS ═══ */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">What Leaders Say</p>
            <h2 className="text-4xl font-bold text-white">Trusted Across Asia Pacific's<br />Top Organisations</h2>
          </div>
          {/* Participant testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { img: '/assets/img/jess/people-inda-mulyani.webp', name: 'Inda Mulyani', role: 'Head of PMO · Bank Danamon Indonesia', quote: 'If you want to implement Scrum the right way, join this training.' },
              { img: '/assets/img/jess/people-fadly-rasyad.webp', name: 'Fadly Rasyad', role: 'Enterprise Agile Coach · Bank of Singapore', quote: 'Very practical, makes sense, and right on the money.' },
              { img: '/assets/img/jess/people-shuting-fu.webp', name: 'Shuting Fu', role: 'R&D Project Manager · W4 Marketing', quote: 'Very cool class with rich and well-structured knowledge.' },
              { img: '/assets/img/jess/people-peichin-liew.webp', name: 'Pei Chin Liew', role: 'Assistant Vice President · Takaful Ikhlas Family Berhad', quote: 'Very useful for me. I like how this course was easy to follow.' },
              { img: '/assets/img/jess/people-aquib-nihal.webp', name: 'Aquib Nihal', role: 'Product Manager · MBUZZ', quote: 'Something worth investing your time in. A lot to learn and implement.' },
            ].map(({ img, name, role, quote }) => (
              <div key={name} className="rounded-2xl p-6" style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid #334155' }}>
                <div className="flex mb-3 text-yellow-400">★★★★★</div>
                <p className="text-white text-sm leading-relaxed italic mb-4">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={img} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <div><p className="text-white text-sm font-semibold">{name}</p><p className="text-slate-400 text-xs">{role}</p></div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl p-6 flex items-center justify-center" style={{ background: 'rgba(30,41,59,0.3)', border: '1px dashed #334155' }}>
              <div className="text-center">
                <div className="text-3xl mb-2">🌏</div>
                <p className="text-slate-500 text-sm">300+ classes delivered<br />across Asia Pacific</p>
              </div>
            </div>
          </div>
          {/* Expert endorsements */}
          <div className="border-t border-slate-800 pt-12">
            <p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-8">Endorsed by the World's Leading Agile Authorities</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  img: '/assets/img/jess/people-jeff-sutherland.webp',
                  name: 'Dr. Jeff Sutherland',
                  role: 'Founder & Chairman, Scrum Inc.',
                  sub: 'Inventor of Scrum · Co-signatory, Agile Manifesto',
                  quote: 'Ethan recently spent two days in Tokyo with me planning his Scrum@Scale classes. Having reviewed the plan carefully, I strongly recommend training with Ethan. These will be excellent courses.',
                  featured: true,
                },
                {
                  img: '/assets/img/jess/people-grace-chan.webp',
                  name: 'Grace Chan',
                  role: 'GM, Personal Banking',
                  sub: 'Standard Chartered Bank, Singapore',
                  quote: 'I recommended him to a few business partners and all have gotten raving reviews and he has helped them drive impactful financial benefit and result.',
                  featured: false,
                },
                {
                  img: '/assets/img/jess/people-mike-cohn.webp',
                  name: 'Mike Cohn',
                  role: 'Co-founder, Scrum Alliance',
                  sub: '',
                  quote: 'Ethan has been a strong proponent of doing Scrum well and has been of great assistance to companies looking to improve their use of Scrum and agile approaches.',
                  featured: false,
                },
              ].map(({ img, name, role, sub, quote, featured }) => (
                <div key={name} className="rounded-2xl p-8" style={featured ? { background: 'linear-gradient(to bottom right,#1e293b,#0f172a)', border: '1px solid rgba(59,130,246,0.3)' } : { background: 'rgba(30,41,59,0.6)', border: '1px solid #334155' }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ border: featured ? '2px solid rgba(59,130,246,0.3)' : '2px solid #334155' }}>
                      <img src={img} alt={name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-cyan-400 font-semibold text-sm">{name}</p>
                      <p className="text-slate-400 text-xs">{role}</p>
                      {sub && <p className="text-slate-500 text-xs">{sub}</p>}
                    </div>
                  </div>
                  <p className="text-white text-sm leading-relaxed italic">"{quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9: 5-STAR EXPERIENCE ═══ */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">What You Get</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">A 5-Star Learning Experience</h2>
            <p className="text-xl text-slate-500 font-light">From preparation to post-class support — every step is designed for real-world application.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4"><span className="text-2xl">📋</span></div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Before Class</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 font-bold">✓</span>Pre-class consultation with trainer</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 font-bold">✓</span>4 chapters of pre-reading + quizzes</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 font-bold">✓</span>Readiness assessment for your team</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4"><span className="text-2xl">🎓</span></div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">During Class</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 font-bold">✓</span>Full expert trainer-led delivery</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 font-bold">✓</span>Dr. Sutherland's original curriculum</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 font-bold">✓</span>Real-world case study workshops</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 font-bold">✓</span>Interactive games and exercises</li>
              </ul>
            </div>
            <div className="rounded-2xl p-8 shadow-lg relative text-white" style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 text-cyan-400 text-xs font-bold rounded-full">HIGH VALUE</div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(255,255,255,0.2)' }}><span className="text-2xl">⭐</span></div>
              <h3 className="text-lg font-semibold mb-4">After Class</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2"><span className="font-bold mt-0.5">✓</span>1-year unlimited class revisions</li>
                <li className="flex items-start gap-2 rounded-lg p-2" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <span className="font-bold mt-0.5">✓</span>
                  <span><strong>2 exclusive 1:1 consulting hours</strong> with Ethan — apply what you learned to your real situation</span>
                </li>
                <li className="flex items-start gap-2"><span className="font-bold mt-0.5">✓</span>Lifelong CI Agile alumni community access</li>
                <li className="flex items-start gap-2"><span className="font-bold mt-0.5">✓</span>Social networking events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10: TRAINER AUTHORITY ═══ */}
      <section className="py-16 lg:py-20" style={{ background: 'linear-gradient(to bottom,#0F1724,#0f172a)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0" style={{ border: '2px solid rgba(59,130,246,0.3)' }}>
                  <img src="/assets/img/jess/people-ethan-soo.webp" alt="Ethan Soo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Ethan Soo</h3>
                  <p className="text-cyan-400 text-sm font-medium mb-3">Asia Pacific Regional Partner, Scrum Inc.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded text-xs text-blue-400" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>Scrum Fellow</span>
                    <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">1 of 3 Asia Pacific Partners</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                {[
                  'Personally endorsed by Dr. Jeff Sutherland',
                  '300+ Scrum classes delivered across Asia Pacific',
                  '20 years leading Agile transformations',
                  'Responsible for certifying Scrum Trainers in the region',
                  '30+ enterprise transformation engagements',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold flex-shrink-0">→</span>{item}
                  </li>
                ))}
              </ul>
              <a href="/jess/instructor.html" className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 border-b border-cyan-500/30 pb-0.5">View Full Instructor Profile →</a>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Personal Endorsement from Dr. Jeff Sutherland</p>
              <div className="text-5xl font-black leading-none mb-2" style={{ color: 'rgba(59,130,246,0.2)' }}>"</div>
              <blockquote className="text-white text-lg leading-relaxed italic mb-6">
                Ethan recently spent two days in Tokyo with me planning his Scrum@Scale classes. Having reviewed the plan carefully, I strongly recommend training with Ethan. These will be excellent courses.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0" style={{ border: '2px solid rgba(59,130,246,0.3)' }}>
                  <img src="/assets/img/jess/people-jeff-sutherland.webp" alt="Dr. Jeff Sutherland" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold text-sm">Dr. Jeff Sutherland</p>
                  <p className="text-slate-400 text-xs">Founder &amp; Chairman, Scrum Inc.</p>
                  <p className="text-slate-500 text-xs">Inventor of Scrum · Co-signatory, Agile Manifesto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 11: WHO THIS IS FOR ═══ */}
      <section className="py-16 lg:py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Is This For You?</p>
            <h2 className="text-4xl font-bold text-white mb-4">Built for Leaders Driving Real Outcomes</h2>
          </div>
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img src="/assets/img/jess/class-singapore-ntu.webp" alt="Leadership Excellence" className="w-full h-auto" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ background: 'rgba(71,85,105,0.5)', border: '1px solid #4b5563' }}>
              <p className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-4">✓ This is for you if you are…</p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>C-Suite or senior leader accountable for business outcomes</li>
                <li>Transformation, PMO, or product leader shaping execution systems</li>
                <li>Senior Scrum Master or Product Owner ready to influence at scale</li>
                <li>Leader scaling agility across multiple teams or portfolios</li>
                <li>Department head preparing your organisation for transformation</li>
              </ul>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'rgba(71,85,105,0.5)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <p className="text-red-400 text-sm font-semibold uppercase tracking-wider mb-4">✗ This is NOT for you if you need…</p>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>Entry-level or introductory Scrum training</li>
                <li>Tool-only Agile courses focused on mechanics</li>
                <li>Theory-heavy certification without real-world application</li>
              </ul>
              <p className="text-slate-500 text-xs mt-6 italic">Not sure? Talk to a Program Advisor — we'll tell you honestly if this is the right fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 12: UPCOMING CLASSES ═══ */}
      <section className="py-16 lg:py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Enrol Now</p>
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Public Classes</h2>
            <p className="text-slate-400 font-light">Public classes run in small cohorts. Limited seats per session.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Next Session', date: '27–28 April 2026', featured: true },
              { label: 'Upcoming', date: '7–8 July 2026', featured: false },
              { label: 'Upcoming', date: '13–14 October 2026', featured: false },
            ].map(({ label, date, featured }) => (
              <div key={date} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${featured ? 'text-blue-400' : 'text-slate-400 bg-slate-700 border border-slate-600'}`} style={featured ? { background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' } : {}}>
                    {label}
                  </span>
                  <span className="text-xs text-slate-500">Jakarta</span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">{date}</p>
                <p className="text-slate-400 text-sm mb-1">High Performance Agile Leader</p>
                <p className="text-slate-500 text-xs mb-6">Course 1 · 2-Day Intensive</p>
                {featured
                  ? <a href="/jess/class-schedule.html" className="block text-center py-3 text-white font-semibold rounded-lg text-sm transition-all" style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)' }}>Book a Seat →</a>
                  : <a href="/jess/class-schedule.html" className="block text-center py-3 border border-slate-600 text-white font-medium rounded-lg text-sm hover:bg-slate-700 transition-all">View Details →</a>
                }
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500">More cities and dates available. <a href="/jess/class-schedule.html" className="text-cyan-400 hover:text-cyan-300">View full class schedule →</a></p>
        </div>
      </section>

      {/* ═══ SECTION 13: AI SECTION ═══ */}
      <section className="py-16 lg:py-20 border-t-2 border-dashed border-slate-700 relative" style={{ background: 'linear-gradient(to bottom,#020617,#0f172a)' }}>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-400 uppercase tracking-widest">Optional Enhancement</div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="w-2 h-2 rounded-full bg-blue-400" style={{ animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }} />
              <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Bonus: AI-Powered Agile Coaching</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Scrum Sage — The AI Built for True Scrum</h2>
            <p className="text-slate-400 font-light max-w-xl mx-auto">Our program now integrates Scrum Sage, a GPT built specifically on True Scrum knowledge — developed by JJ Sutherland, CEO of Scrum Inc.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">JJ Sutherland · CEO, Scrum Inc. USA</p>
              <div className="text-5xl font-black leading-none" style={{ color: 'rgba(59,130,246,0.2)' }}>"</div>
              <blockquote className="text-xl text-white font-light leading-relaxed italic mb-6">
                Agile, in its traditional form, is dead. Since 2024, my father and I have reimagined Agile with AI — transforming Scrum into AI-Driven Scrum. The results are extraordinary.
              </blockquote>
              <p className="text-blue-400 text-sm font-semibold">— JJ Sutherland</p>
              <p className="text-slate-500 text-xs">CEO, Scrum Inc. · World Famous Author &amp; Thought Leader</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '90%', label: 'Less Overhead with Scrum' },
                { val: '30x', label: 'Faster Working Time' },
                { val: '2x', label: 'More Work Done' },
                { val: '50%', label: 'Less Time Needed' },
              ].map(({ val, label }) => (
                <div key={val} className="rounded-xl p-5 text-center" style={{ background: 'rgba(30,41,59,0.6)', border: '1px solid #334155' }}>
                  <div className="text-3xl font-black text-blue-400 mb-1">{val}</div>
                  <div className="text-xs text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 14: FINAL CTA ═══ */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right,#0f172a,#1e293b,#0f172a)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top,rgba(59,130,246,0.12),transparent 60%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(59,130,246,0.4),transparent)' }} />
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ background: 'linear-gradient(to right,#ffffff,#bfdbfe,#a5f3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Ready to Lead the<br />Enterprise Agility Transformation?
          </h2>
          <p className="text-slate-300 text-xl font-light mb-10 max-w-xl mx-auto">
            Join the leaders across Asia Pacific who are redesigning how their organisations deliver results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contactus.html?source=jess-leadership-training&cta=talk-to-program-advisor#contact-form" className="inline-flex items-center gap-3 px-10 py-5 text-white font-semibold rounded-lg transition-all text-base" style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)', boxShadow: '0 20px 40px rgba(59,130,246,0.25)' }}>
              Talk to a Program Advisor →
            </a>
            <a href="/jess/class-schedule.html" className="inline-flex items-center gap-3 px-10 py-5 text-white font-semibold rounded-lg hover:bg-blue-500/10 transition-all text-base" style={{ border: '2px solid rgba(34,211,238,0.5)' }}>
              View Class Schedule
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-8">Not sure if this is the right program? We'll tell you honestly. <a href="/contactus.html" className="text-cyan-400 hover:text-cyan-300 underline">Contact us first.</a></p>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}
