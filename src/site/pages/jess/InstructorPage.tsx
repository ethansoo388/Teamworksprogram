import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { JessStickyNav } from "@/site/components/jess/JessStickyNav";

export function InstructorPage() {

  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation isDarkTheme />

      {/* ═══ HERO ═══ */}
      <section className="relative bg-slate-800 pt-24 pb-16 sm:py-20 lg:py-24 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 text-base mb-8">
            <a
              href="leadership-training.html"
              className="text-slate-300 hover:text-white transition-colors relative pb-1 border-b border-transparent hover:border-slate-300"
            >
              Leadership Training
            </a>
            <span className="text-slate-400">›</span>
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Instructor</span>
          </div>
          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
            Your Instructor
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            Ethan Soo — Enterprise Agile &amp; Scrum Trainer, Asia Pacific
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl">
            Asia Pacific's leading enterprise Scrum trainer — endorsed by Dr. Jeff Sutherland, Inventor of Scrum. One of only three Scrum Inc. partners in Asia Pacific, and the only one with 30+ enterprise case studies with quantifiable outcomes.
          </p>
        </div>
      </section>

      <JessStickyNav activePage="instructor" />

      {/* ═══ BIO + STATS ═══ */}
      <section className="py-16 sm:py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20" data-reveal-group data-stagger="120">

            {/* Left — Photo + Stats */}
            <div data-reveal-item>
              <div className="mb-8">
                <img
                  src="/assets/img/jess/people-ethan-soo.webp"
                  alt="Ethan Soo — Scrum Inc. Asia Pacific Regional Partner and Enterprise Agile Leadership Trainer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-4">
                <div className="text-center p-5 bg-slate-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">300+</div>
                  <div className="text-xs text-slate-600 leading-tight">Classes<br />Delivered</div>
                </div>
                <div className="text-center p-5 bg-slate-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">23 yrs</div>
                  <div className="text-xs text-slate-600 leading-tight">Agile<br />Implementation</div>
                </div>
                <div className="text-center p-5 bg-slate-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">12+</div>
                  <div className="text-xs text-slate-600 leading-tight">Countries<br />Trained</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="text-center p-5 bg-slate-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">30+</div>
                  <div className="text-xs text-slate-600 leading-tight">Case Studies with<br />Quantifiable Outcomes</div>
                </div>
                <div className="text-center p-5 bg-slate-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">60+</div>
                  <div className="text-xs text-slate-600 leading-tight">Agile Events<br />as Speaker</div>
                </div>
              </div>
            </div>

            {/* Right — Bio */}
            <div data-reveal-item className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-2">Ethan Soo</h2>
                <p className="text-slate-600 font-light">Asia Pacific Regional Partner, Scrum Inc. · Scrum Fellow</p>
              </div>

              <div className="rounded-xl px-5 py-4" style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.3)' }}>
                <p className="text-sm text-amber-800 leading-relaxed">
                  The only trainer in South East Asia personally endorsed by Dr. Jeff Sutherland and appointed as Asia Pacific Regional Partner — with direct access to the original Scrum source, curriculum, and network.
                </p>
              </div>

              <p className="text-slate-700 font-light leading-relaxed">
                Over 23 years, Ethan has led or trained enterprise Agile transformations that have generated measurable outcomes across banks, airports, technology companies, and government organisations in 12+ countries across Asia Pacific — making him the only trainer in the region with 30+ case studies with quantifiable business results.
              </p>

              <p className="text-slate-700 font-light leading-relaxed">
                To date, Ethan has conducted 300+ Scrum and enterprise agile leadership training sessions across Malaysia, Indonesia, Singapore, China, and beyond. His programs are meticulously designed to deliver an immersive learning experience — combining Dr. Sutherland's original curriculum with real-world case studies, interactive exercises, and practical frameworks that participants can apply immediately.
              </p>

              <p className="text-slate-700 font-light leading-relaxed">
                Ethan's exceptional training performance earned him the distinction of Scrum Fellow — one of Scrum Inc.'s highest honours. Dr. Jeff Sutherland personally invited Ethan to serve as Asia Pacific Regional Partner, with responsibility for adapting the Scrum Master, Product Owner, and Scrum@Scale credentialing programs to the learning culture of the East. In this role, Ethan represents Scrum Inc. USA in recognising outstanding enterprise Agile transformations — presenting the <strong>Platinum Agile Award</strong> to Malaysia Airports Holdings Berhad (MAHB) and the <strong>Gold Agile Award</strong> to Bank Islam Malaysia Berhad.
              </p>

              <p className="text-slate-700 font-light leading-relaxed">
                Ethan also leads the Train the Trainer Program (TTT) for Scrum Inc., screening, coaching, mentoring, and certifying new Scrum and Scrum@Scale Trainers across the region — ensuring the highest standards of enterprise agile leadership training are maintained throughout Asia Pacific. Beyond the classroom, Ethan is a recognised voice in the global Agile community — having spoken at over 60 Agile events across Asia Pacific over 15 years, and serving as organiser and host of Malaysia's premier Agile leadership forums, including AIDA Forum 2025 and Agile Tour Kuala Lumpur.
              </p>

              <p className="text-slate-700 font-light leading-relaxed">
                Today, Ethan is at the forefront of preparing leaders for the Agile + AI era — helping organisations build systems where human teams and AI collaborate under one unified leadership model. His enterprise leadership training programs are designed not just for today's challenges, but for the future of how high-performance organisations must operate.
              </p>
            </div>
          </div>

          {/* ═══ JEFF SUTHERLAND FEATURED ENDORSEMENT ═══ */}
          <div className="mb-20" data-reveal>
            <div className="rounded-2xl p-6 lg:p-12 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right,#1e293b,#0f172a)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(59,130,246,0.4),transparent)' }} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                {/* Photo + identity */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4" style={{ border: '2px solid rgba(59,130,246,0.3)' }}>
                    <img src="/assets/img/jess/people-jeff-sutherland.webp" alt="Dr. Jeff Sutherland" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-white font-semibold text-lg">Dr. Jeff Sutherland</p>
                  <p className="text-slate-400 text-sm mt-1">Founder &amp; Chairman, Scrum Inc.</p>
                  <p className="text-slate-500 text-xs mt-0.5">Inventor of Scrum · Co-signatory, Agile Manifesto</p>
                  <div className="mt-4 px-3 py-1 rounded-full text-xs font-medium text-blue-300" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                    Personal Endorsement
                  </div>
                </div>
                {/* Quote */}
                <div className="lg:col-span-2">
                  <div className="text-7xl font-black leading-none mb-2 select-none" style={{ color: 'rgba(59,130,246,0.15)' }}>"</div>
                  <blockquote className="text-xl lg:text-2xl text-white font-light leading-relaxed italic mb-6">
                    Ethan recently spent two days in Tokyo with me planning his Scrum@Scale classes. Having reviewed the plan carefully, I strongly recommend training with Ethan. These will be excellent courses.
                  </blockquote>
                  <div className="h-px mb-6" style={{ background: 'rgba(59,130,246,0.2)' }} />
                  <p className="text-slate-400 text-sm font-light">
                    Dr. Sutherland personally invited Ethan to serve as Asia Pacific Regional Partner for Scrum Inc. — one of only three such appointments in the entire Asia Pacific region.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ CREDENTIALS ═══ */}
          <div className="mb-20">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-2">Credentials From the Inventors of Scrum</h2>
              <p className="text-slate-500 font-light mb-10">Ethan holds the highest trainer credentials available — issued by the same organisations that created and govern Scrum globally.</p>
            </div>

            {/* ── Scrum Inc. — Featured full-width block ── */}
            <div data-reveal className="rounded-2xl border border-slate-200 p-8 mb-6">
              <div className="flex items-center gap-3 mb-8">
                <img src="/assets/img/jess/logo-scrum-inc.webp" alt="Scrum Inc." className="h-7 w-auto object-contain opacity-80" />
                <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Scrum Inc.</span>
              </div>

              {/* Top tier — Prestige credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {[
                  { code: 'Scrum Fellow', name: 'Highest individual honour awarded by Scrum Inc.' },
                  { code: 'Asia Pacific Regional Partner', name: 'Personally appointed by Dr. Jeff Sutherland' },
                ].map(({ code, name }) => (
                  <div key={code} className="flex items-start gap-3 p-5 rounded-xl" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.25)' }}>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 flex-shrink-0 mt-1"></span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{code}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{name}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom tier — Trainer & Practitioner credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { code: 'RST', name: 'Registered Scrum Trainer' },
                  { code: 'RS@ST', name: 'Registered Scrum@Scale Trainer' },
                  { code: 'RSASP', name: 'Registered Scrum@Scale Practitioner' },
                  { code: 'RSM', name: 'Registered Scrum Master' },
                  { code: 'RPO', name: 'Registered Product Owner' },
                ].map(({ code, name }) => (
                  <div key={code} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5"></span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{code}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Bottom row — Scrum Alliance + EXIN side by side ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-reveal-group data-stagger="120">

              {/* Scrum Alliance */}
              <div data-reveal-item className="rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6 h-7">
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Scrum Alliance</span>
                </div>
                <div className="space-y-3">
                  {/* CSP — first, with distinction callout */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5"></span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">CSP</p>
                      <p className="text-xs text-slate-500 mt-0.5">Certified Scrum Professional</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 rounded-xl" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.25)' }}>
                    <p className="text-xs text-amber-700 leading-relaxed">Ethan is one of the earliest professionals in Asia to have received the CSP credential — a distinction held by very few practitioners in the region.</p>
                  </div>
                  {/* CSM */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5"></span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">CSM</p>
                      <p className="text-xs text-slate-500 mt-0.5">Certified Scrum Master</p>
                      <p className="text-xs text-slate-400 italic mt-1">Granted in-person by Mike Cohn, Managing Director, Scrum Alliance · San Diego, USA</p>
                    </div>
                  </div>
                  {/* CSPO */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5"></span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">CSPO</p>
                      <p className="text-xs text-slate-500 mt-0.5">Certified Scrum Product Owner</p>
                      <p className="text-xs text-slate-400 italic mt-1">Granted in-person by Mike Cohn, Managing Director, Scrum Alliance · San Diego, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXIN */}
              <div data-reveal-item className="rounded-2xl border border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6 h-7">
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">EXIN</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5"></span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Agile Scrum Train-the-Trainer Master Trainer</p>
                      <p className="text-xs text-slate-500 mt-0.5">Certified to train and certify EXIN Agile Scrum Trainers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-1.5"></span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Agile Scrum Trainer</p>
                      <p className="text-xs text-slate-500 mt-0.5">Certified to deliver EXIN Agile Scrum curriculum</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-light mt-6 leading-relaxed">
                  EXIN is a globally recognised IT and digital skills certification body, operating in 165+ countries. Ethan is certified to deliver their Agile Scrum programme — broadening access to Agile training across enterprise and government sectors.
                </p>
              </div>

            </div>
          </div>

          {/* ═══ WHY ETHAN OVER OTHERS ═══ */}
          <div className="mb-20">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-2">What Makes Training with Ethan Different</h2>
              <p className="text-slate-500 font-light mb-10">Not all Scrum trainers are equal. Here's what separates Ethan from a typical certification provider.</p>
            </div>
            {/* Mobile: stacked cards. Desktop: two-column table */}
            <div data-reveal>
              {/* Desktop table — hidden on mobile */}
              <div className="hidden lg:block rounded-2xl overflow-hidden border border-slate-200">
                {/* Header row */}
                <div className="grid grid-cols-2 bg-slate-100 text-sm font-medium">
                  <div className="px-6 py-4 text-slate-500 uppercase tracking-widest text-xs">Generic Scrum Trainer</div>
                  <div className="px-6 py-4 text-amber-600 uppercase tracking-widest text-xs border-l border-slate-200">Training with Ethan</div>
                </div>
                {/* Rows */}
                {[
                  ['Teaches Scrum theory from a textbook', "Teaches Dr. Sutherland's original curriculum — direct from the source, updated annually"],
                  ['Certification without real-world proof', '30+ enterprise case studies with quantifiable business outcomes'],
                  ['Classroom experience only', '23 years of live enterprise Agile transformation work across 12+ countries'],
                  ['Regional practitioner', 'Asia Pacific Regional Partner, Scrum Inc. — 1 of only 3 in the entire region'],
                  ['Trains participants', 'Also certifies other Scrum Trainers — sets the regional standard for training quality'],
                ].map(([generic, ethan], i) => (
                  <div key={i} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <div className="px-6 py-4 text-slate-500 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {generic}
                    </div>
                    <div className="px-6 py-4 text-slate-800 font-medium flex items-start gap-2 border-l border-slate-200">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      {ethan}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile cards — shown only on mobile */}
              <div className="lg:hidden space-y-3">
                {[
                  ['Teaches Scrum theory from a textbook', "Teaches Dr. Sutherland's original curriculum — direct from the source, updated annually"],
                  ['Certification without real-world proof', '30+ enterprise case studies with quantifiable business outcomes'],
                  ['Classroom experience only', '23 years of live enterprise Agile transformation work across 12+ countries'],
                  ['Regional practitioner', 'Asia Pacific Regional Partner, Scrum Inc. — 1 of only 3 in the entire region'],
                  ['Trains participants', 'Also certifies other Scrum Trainers — sets the regional standard for training quality'],
                ].map(([generic, ethan], i) => (
                  <div key={i} className="rounded-xl border border-slate-200 overflow-hidden">
                    <div className="px-4 py-3 bg-slate-50 flex items-start gap-2 text-sm text-slate-500">
                      <span className="text-red-400 flex-shrink-0">✗</span>
                      {generic}
                    </div>
                    <div className="px-4 py-3 bg-white flex items-start gap-2 text-sm text-slate-800 font-medium border-t border-slate-200">
                      <span className="text-green-500 flex-shrink-0">✓</span>
                      {ethan}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══ INDUSTRY LEADERSHIP & RECOGNITION ═══ */}
          <div className="mb-20">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-2">Industry Leadership &amp; Recognition</h2>
              <p className="text-slate-500 font-light mb-10">As Asia Pacific Regional Partner for Scrum Inc. USA, Ethan plays a leading role in recognising enterprise Agile excellence and building the Agile community across the region.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-reveal-group data-stagger="100">
              {/* Card 1 — Agile Awards */}
              <div data-reveal-item className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="text-3xl mb-4">🏆🏅</div>
                <p className="text-slate-900 font-semibold mb-1">Scrum Inc. Agile Awards — Asia Pacific</p>
                <p className="text-amber-600 text-xs font-medium mb-3">Presented on behalf of Scrum Inc. USA</p>
                <p className="text-slate-600 text-sm leading-relaxed">As Asia Pacific Regional Partner, Ethan represents Scrum Inc. USA in recognising outstanding enterprise Agile transformations — presenting the Platinum Agile Award to Malaysia Airports Holdings Berhad (MAHB) and the Gold Agile Award to Bank Islam Malaysia Berhad.</p>
                <a href="/jess/leadership-training.html#results" className="inline-block mt-4 text-xs text-blue-600 hover:text-blue-500 transition-colors">View Case Studies →</a>
              </div>

              {/* Card 2 — Events Organiser */}
              <div data-reveal-item className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="text-3xl mb-4">🎤</div>
                <p className="text-slate-900 font-semibold mb-1">Agile Events — Organiser &amp; Host</p>
                <p className="text-amber-600 text-xs font-medium mb-3">Malaysia &amp; Asia Pacific</p>
                <p className="text-slate-600 text-sm leading-relaxed">Organised and hosted Malaysia's premier Agile leadership events — including AIDA Forum 2025 and Agile Tour Kuala Lumpur 2023 &amp; 2024 — bringing together enterprise leaders and speakers from across the globe to advance Agile leadership practice in Asia Pacific.</p>
              </div>

              {/* Card 3 — Speaker Authority */}
              <div data-reveal-item className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="text-3xl mb-4">🎙️</div>
                <p className="text-slate-900 font-semibold mb-1">60+ Agile Events as Speaker</p>
                <p className="text-amber-600 text-xs font-medium mb-3">2010–2025 · Across Asia Pacific &amp; China</p>
                <p className="text-slate-600 text-sm leading-relaxed">A recognised voice in the global Agile community — featured speaker at over 60 Agile events across 15 years, spanning Shanghai, Beijing, Shenzhen, Guangzhou, Singapore, Bangkok, Ho Chi Minh City, Kuala Lumpur, Taipei, and Tokyo.</p>
              </div>
            </div>
          </div>

          {/* ═══ PREVIOUSLY LED TRANSFORMATION ═══ */}
          <div className="mb-20">
            <div data-reveal>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-2">Agile Leadership Training Results Across Asia Pacific</h2>
              <p className="text-slate-500 font-light mb-8">Ethan has directly trained or led enterprise Agile transformations at the following organisations — from banks and airports to government agencies and technology companies across Malaysia, Indonesia, Singapore, China, and beyond.</p>
            </div>
            <div data-reveal className="bg-slate-800 p-8 rounded-2xl">
              <div className="rounded-2xl flex items-center justify-center">
                <img
                  src="/assets/img/jess/logo-client-logos.webp"
                  alt="Enterprise clients trained by Ethan Soo across Asia Pacific — including banks, airports, technology and government organisations"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* ═══ TESTIMONIALS ═══ */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-light text-slate-900 mb-8" data-reveal>Endorsed by the World's Top Agile Authorities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal-group data-stagger="100">

              {/* Jeff Sutherland */}
              <div data-reveal-item className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex justify-center mb-3 text-yellow-400 text-lg">★★★★★</div>
                <div className="mb-6">
                  <img
                    src="/assets/img/jess/people-jeff-sutherland.webp"
                    alt="Dr. Jeff Sutherland — Founder and Chairman, Scrum Inc."
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-medium text-slate-900 text-center">Dr. Jeff Sutherland</h3>
                  <p className="text-sm text-slate-600 text-center">Founder and Chairman, Scrum Inc.</p>
                </div>
                <p className="text-slate-700 font-light italic text-sm leading-relaxed text-center">
                  "Ethan recently spent two days in Tokyo with me planning his Scrum@Scale classes. Having reviewed the plan carefully, I strongly recommend training with Ethan. These will be excellent courses."
                </p>
              </div>

              {/* Mike Cohn */}
              <div data-reveal-item className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex justify-center mb-3 text-yellow-400 text-lg">★★★★★</div>
                <div className="mb-6">
                  <img
                    src="/assets/img/jess/people-mike-cohn.webp"
                    alt="Mike Cohn — Co-founder, Scrum Alliance"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-medium text-slate-900 text-center">Mike Cohn</h3>
                  <p className="text-sm text-slate-600 text-center">Co-founder, Scrum Alliance</p>
                  <p className="text-xs text-amber-600 text-center mt-1 italic">Personally granted Ethan's CSM &amp; CSPO in San Diego</p>
                </div>
                <p className="text-slate-700 font-light italic text-sm leading-relaxed text-center">
                  "Ethan has been a strong proponent of doing Scrum well and has been of great assistance to Chinese companies looking to improve their Scrum, Kanban, and agile approaches."
                </p>
              </div>

              {/* Grace Chan */}
              <div data-reveal-item className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex justify-center mb-3 text-yellow-400 text-lg">★★★★★</div>
                <div className="mb-6">
                  <img
                    src="/assets/img/jess/people-grace-chan.webp"
                    alt="Grace Chan — GM Personal Banking, Standard Chartered Bank Singapore"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-medium text-slate-900 text-center">Grace Chan</h3>
                  <p className="text-sm text-slate-600 text-center">GM, Personal Banking, Standard Chartered Bank, Singapore</p>
                </div>
                <p className="text-slate-700 font-light italic text-sm leading-relaxed text-center">
                  "Ethan's expert team strives to help my company, as I now migrate into SCRUM, use it in full depth. The courses I have taken have gotten raving reviews and he has helped them drive impactful financial benefit and results."
                </p>
              </div>

            </div>
          </div>

          {/* ═══ CTA ═══ */}
          <div data-reveal className="bg-slate-800 rounded-2xl p-6 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">Train Directly with Ethan</h2>
            <p className="text-slate-400 font-light max-w-xl mx-auto mb-8">
              Classes are small by design — limited to serious leaders ready to drive enterprise-wide change. If that's you, let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a
                href="/contactus.html?source=jess-instructor&cta=book-a-seat#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-lg transition-all text-base"
                style={{ background: 'linear-gradient(to right,#3b82f6,#06b6d4)', boxShadow: '0 10px 25px rgba(59,130,246,0.25)' }}
              >
                Book a Seat →
              </a>
              <a
                href="/contactus.html?source=jess-instructor&cta=program-advisor#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 text-white font-semibold rounded-lg hover:bg-white/5 transition-all text-base"
                style={{ borderColor: 'rgba(34,211,238,0.5)' }}
              >
                Talk to a Program Advisor
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <span className="text-slate-400">🔒 No obligation · We respond within 24 hours</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a href="https://wa.me/60192981055" className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                💬 Chat on WhatsApp
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a href="class-schedule.html" className="text-slate-400 hover:text-white transition-colors">View Class Schedule →</a>
            </div>
          </div>

        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}
