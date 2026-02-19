/**
 * AboutPageSections.tsx
 * Updated About Us page sections, ported from CI Agile Main_GerseneCodeForMerge / AboutPage.tsx.
 *
 * Static-export rules:
 *  - No React state, no React Router, no lucide-react
 *  - form.js contract preserved:
 *    form id="about-us-form", error id="aboutus-error-message"
 *    fields: fullName, workEmail, organizationRole, challenge, message, interests (checkboxes)
 *  - The "showOtherField" conditional textarea is always visible (graceful degradation for static)
 *
 * Named exports (unchanged, consumed by AboutUsPage.tsx):
 *  OurBeliefSection, WhatMakesDifferentSection, FounderProfileSection,
 *  AboutCIAgileSection, ExperienceScalesSection, ExecutionPatternsSection
 */

import ethanSooImage from "@/assets/img/main/ciagile-about-founder-portrait.webp";

// ---------------------------------------------------------------------------
// OurBeliefSection — "Who We Are" stats + narrative (dark bg)
// ---------------------------------------------------------------------------
export function OurBeliefSection() {
  return (
    <section className="relative py-32 px-8 lg:px-16 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-12 border-l-4 border-[#FFB800] pl-3">
          Who We Are
        </p>

        {/* Metrics */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20 text-center">
          <div>
            <div className="text-6xl lg:text-7xl font-light text-[#2196F3] mb-3 tracking-tight">20+</div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Years helping teams execute and scale</p>
          </div>
          <div>
            <div className="text-6xl lg:text-7xl font-light text-[#2196F3] mb-3 tracking-tight">500+</div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Teams trained and transformed</p>
          </div>
          <div>
            <div className="text-6xl lg:text-7xl font-light text-[#2196F3] mb-3 tracking-tight">Global</div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Experience across regions and industries</p>
          </div>
        </div>

        {/* Narrative */}
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <p className="text-xl text-white font-light leading-relaxed">
              CI Agile is a transformation partner helping organizations unlock business value through agility,
              AI-driven practices, and people-first leadership.
            </p>
            <p className="text-base text-gray-300 font-light leading-relaxed">
              With 16+ years of experience across Asia-Pacific and over 500 enterprise engagements, we bring
              both regional insight and practical execution depth to every transformation.
            </p>
            <p className="text-base text-gray-300 font-light leading-relaxed">
              We work with banks, high-tech companies, and enterprises to strengthen execution, align
              leadership, and improve how work gets delivered.
            </p>
          </div>

          {/* Three pillars */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#2196F3]/20 flex items-center justify-center mx-auto mb-4">
                {/* users icon inline SVG */}
                <svg className="w-8 h-8 text-[#2196F3]" fill="none" stroke="#2196F3" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <p className="text-xl font-normal text-white leading-relaxed">Build teams that are effective.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#FFB800]/20 flex items-center justify-center mx-auto mb-4">
                {/* trending-up icon */}
                <svg className="w-8 h-8" fill="none" stroke="#FFB800" strokeWidth="1.5" viewBox="0 0 24 24">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="16 7 22 7 22 13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-xl font-normal text-white leading-relaxed">Design systems that scale.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto mb-4">
                {/* target icon */}
                <svg className="w-8 h-8" fill="none" stroke="#10B981" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <p className="text-xl font-normal text-white leading-relaxed">Deliver outcomes that matter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// WhatMakesDifferentSection — "Our Journey & Footprint" (dark/black bg)
// ---------------------------------------------------------------------------
export function WhatMakesDifferentSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider border-l-4 border-[#FFB800] pl-3">
              Where We Are
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">Our Journey</h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-white font-light leading-relaxed">
                Founded in 2010 in Hong Kong,{" "}
                <span className="text-gray-400">
                  CI Agile has grown into a regional transformation partner serving organizations across Asia-Pacific.
                </span>
              </p>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                With operations in: <span className="text-white">Hong Kong, Malaysia, and Singapore.</span>
              </p>
              <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                We have spent over{" "}
                <span className="text-[#2196F3] font-semibold">16 years</span>{" "}
                helping enterprises strengthen execution, leadership alignment, and delivery systems.
              </p>
            </div>

            {/* Partnership highlight */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800">
              <div className="bg-gradient-to-r from-[#C8102E]/10 to-transparent p-4 md:p-6 border-l-4 border-[#C8102E]">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Regional Partnership</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-light mb-2 md:mb-3">
                  <span className="text-white">APAC Regional Partner of </span>
                  <span className="text-[#C8102E] font-normal">scrum</span>
                  <span className="text-gray-400">inc.</span>
                </p>
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
                  We bring global expertise together with deep regional experience in regulated and complex industries.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Globe SVG */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center order-first lg:order-last">
            <svg viewBox="0 0 600 600" className="w-full h-full" aria-hidden="true">
              <circle cx="300" cy="300" r="250" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="300" x2="550" y2="300" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />
              <ellipse cx="300" cy="300" rx="250" ry="120" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
              <ellipse cx="300" cy="300" rx="180" ry="250" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
              {/* Key country outlines */}
              <path d="M 240 175 L 395 206 L 400 282 L 376 312" fill="none" stroke="#ffffff" strokeWidth="1.1" opacity="0.7" />
              <path d="M 225 245 L 266 307 L 250 362 L 218 391" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.8" />
              <path d="M 279 443 L 284 475 L 273 498" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
              {/* Malaysia highlight */}
              <path d="M 270 443 L 284 475 L 284 485 L 278 493 L 267 500 L 257 492 L 256 475 L 264 458 Z"
                    fill="#FF6B35" fillOpacity="0.3" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
              {/* Singapore */}
              <circle cx="273" cy="503" r="3" fill="#FF6B35" fillOpacity="0.8" stroke="#ffffff" strokeWidth="0.7" />
              {/* Hong Kong */}
              <path d="M 358 269 Q 367 270 370 274 Q 368 279 363 281 Q 358 279 357 274 Z"
                    fill="#FF6B35" fillOpacity="0.3" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
              {/* Office markers */}
              <rect x="358" y="269" width="10" height="10" fill="#FF6B35" opacity="0.95" />
              <rect x="262" y="493" width="10" height="10" fill="#FF6B35" opacity="0.95" />
              <rect x="268" y="499" width="10" height="10" fill="#FF6B35" opacity="0.95" />
              {/* Labels */}
              <text x="465" y="215" fill="#FF6B35" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="700">HONG KONG</text>
              <text x="435" y="440" fill="#FF6B35" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="700">MALAYSIA</text>
              <text x="465" y="370" fill="#FF6B35" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="700">SINGAPORE</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// AboutCIAgileSection — "What We Do & Core Focus Areas" (light bg)
// ---------------------------------------------------------------------------
export function AboutCIAgileSection() {
  const services = [
    {
      num: "01",
      title: "Agile Ways of Working",
      desc: "Proven frameworks tailored for real-world enterprise execution.",
      bg: "bg-[#EFF1F3]",
    },
    {
      num: "02",
      title: "AI-Driven Insights",
      desc: "Smarter decisions, faster learning cycles, and improved delivery performance.",
      bg: "bg-white",
    },
    {
      num: "03",
      title: "People & Culture Focus",
      desc: "Empowering leaders and teams to sustain change beyond transformation programs.",
      bg: "bg-white",
    },
    {
      num: "04",
      title: "Sustainable Results",
      desc: "Building capability that lasts beyond the engagement period.",
      bg: "bg-[#EFF1F3]",
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 bg-[#EFF1F3]">
      <div className="max-w-7xl mx-auto">
        {/* Core focus areas */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-8 border-l-4 border-[#FFB800] pl-3">
            Our Core Focus Areas
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-12 md:mb-16 max-w-4xl text-gray-900">
            We help organizations solve real execution challenges through four core service areas:
          </h2>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-start">
            {/* Left — 2×2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.num} className={`${s.bg} p-10 rounded-lg`}>
                  <p className="text-base font-semibold text-[#FFB800] mb-6">{s.num}</p>
                  <h3 className="text-2xl md:text-3xl font-normal mb-5 text-gray-900">{s.title}</h3>
                  <p className="text-base text-gray-500 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            {/* Right — Photo */}
            <div className="relative order-first lg:order-last h-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px]">
              <img
                src="https://i.postimg.cc/zvHfVHpk/photo-drjeff-ethan.webp"
                alt="CI Agile team collaboration"
                className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Services designed for outcomes */}
        <div className="mb-16 md:mb-24 lg:mb-32">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 border-l-4 border-[#FFB800] pl-3">
            Our Services
          </p>
          <div className="block lg:flex lg:items-start lg:gap-20">
            <div className="lg:flex-shrink-0 lg:max-w-md mb-8 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                DESIGNED FOR OUTCOMES
              </h2>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                We help organizations accelerate outcomes through four core service areas:
              </p>
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  title: "Agile + AI Transformation",
                  bullets: [
                    "Faster time-to-market across teams",
                    "Reduced delivery bottlenecks and rework",
                    "Clearer prioritization using AI-supported insights",
                    "Measurable improvement in release predictability",
                  ],
                },
                {
                  title: "Leadership Enablement",
                  bullets: [
                    "Executive alignment on priorities and delivery cadence",
                    "Faster cross-functional decision-making",
                    "Reduced escalations and strategic drift",
                    "Clear accountability across operating layers",
                  ],
                },
                {
                  title: "Agile Coaching & Delivery",
                  bullets: [
                    "Stable sprint velocity and improved flow",
                    "Reduced cross-team dependency friction",
                    "Clear visibility into delivery health",
                    "Higher product quality with fewer last-minute surprises",
                  ],
                },
                {
                  title: "Training & Upskilling",
                  bullets: [
                    "Teams capable of running without constant consultant oversight",
                    "Practical AI tools embedded into daily workflows",
                    "Certified leaders equipped for enterprise-scale delivery",
                    "Sustainable capability growth, not one-off workshops",
                  ],
                },
              ].map((svc) => (
                <div key={svc.title} className="bg-white p-6 md:p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="border-l-4 border-[#FFB800] pl-3 md:pl-4 mb-4 md:mb-6">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{svc.title}</h3>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Business Outcomes</p>
                  <ul className="space-y-2 text-xs text-gray-700 font-light leading-relaxed">
                    {svc.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Execution philosophy */}
        <div className="mb-12 md:mb-20 lg:mb-24">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 border-l-4 border-[#FFB800] pl-3">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
            OUR EXECUTION PHILOSOPHY
          </h2>
          <div className="max-w-2xl space-y-3 md:space-y-4 mb-8 md:mb-12 lg:mb-16">
            <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
              Most organizations don't struggle because they lack strategy. They struggle because execution
              systems are fragmented, misaligned, or overloaded.
            </p>
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
              At CI Agile, we believe transformation only works when:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { title: "Clear Operating Models", body: "Strategy is translated into clear, executable operating models" },
              { title: "Leadership Alignment", body: "Leaders are aligned on decision flow and accountability" },
              { title: "Empowered Teams", body: "Teams are empowered with practical tools — including AI — embedded into real work" },
              { title: "Internal Capability", body: "Capability is built internally, not outsourced permanently" },
            ].map((c) => (
              <div key={c.title} className="bg-white p-6 md:p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow">
                <div className="border-l-4 border-[#FFB800] pl-3 md:pl-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2 md:mb-3">{c.title}</h3>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-2xl space-y-2 md:space-y-3">
            <p className="text-sm md:text-base text-gray-900 font-medium leading-relaxed">We do not deliver slide decks.</p>
            <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed">
              We design systems that help organizations operate better long after the engagement ends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FounderProfileSection — Ethan Soo founder card (white bg)
// ---------------------------------------------------------------------------
export function FounderProfileSection() {
  return (
    <section className="py-20 px-8 lg:px-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-xs font-bold text-[#D4A574] uppercase tracking-wider mb-6">Meet the Founder</p>
          <h2 className="text-4xl lg:text-5xl font-light mb-4 text-gray-900">Leadership & Vision</h2>
          <p className="text-base text-gray-600 font-light leading-relaxed max-w-3xl">
            Built on decades of real-world execution, not theory. Learn more about the professional who founded
            CI Agile and continues to guide organizations toward sustainable transformation.
          </p>
        </div>

        <div className="mt-16 bg-[#F8F9FA] grid lg:grid-cols-[480px_1fr] gap-0 shadow-sm">
          {/* Photo */}
          <div className="bg-gray-100">
            <img
              src={ethanSooImage}
              alt="Ethan Soo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-10 lg:p-12">
            <div className="mb-6">
              <h3 className="text-2xl lg:text-3xl font-light mb-2 text-gray-900">Ethan Soo</h3>
              <div className="flex items-center gap-3 mb-4">
                <a href="https://www.linkedin.com/in/ethansoo/" target="_blank" rel="noopener noreferrer"
                   className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/ethan.soo.98" target="_blank" rel="noopener noreferrer"
                   className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-gray-600 font-normal mb-1">Founder</p>
              <p className="text-xs text-gray-500 font-light mb-4">Hong Kong, Malaysia, Singapore</p>
              <div className="mb-6">
                <p className="text-sm text-gray-700 font-light leading-relaxed">
                  Agile Transformation<br />
                  Enterprise Execution Systems<br />
                  AI-Driven Delivery<br />
                  Leadership Enablement
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 font-light leading-relaxed text-sm mb-8">
              <p>
                Ethan Soo founded CI Agile to help organizations do what most struggle with: execute with
                speed, clarity, and sustainability.
              </p>
              <p>
                With decades of experience scaling teams, building products, and transforming how enterprises
                deliver, Ethan has worked across industries—from startups to global corporations—fixing broken
                execution models and building systems that last.
              </p>
              <p className="pl-4 border-l-2 border-[#0066CC] text-gray-900 font-normal italic">
                "The best consulting leaves clients more capable, not more dependent."
              </p>
              <p>
                He developed the JESS (Jeff's Enterprise Scrum System) framework to address the unique challenges
                of scaling Agile in complex organizations, integrating AI to accelerate delivery without losing the
                human element.
              </p>
              <p>CI Agile exists to embed change, transfer knowledge, and build teams that thrive long after we're gone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ExperienceScalesSection — "Most execution problems have patterns" + About form
// form.js contract preserved: id="about-us-form", id="aboutus-error-message",
// fields: fullName, workEmail, organizationRole, challenge, message, interests checkboxes.
// "showOtherField" textarea always shown (static-friendly fallback).
// ---------------------------------------------------------------------------
export function ExperienceScalesSection() {
  return (
    <section className="py-20 px-8 lg:px-16 bg-[#F7F9F8] border-t-2 border-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — executive message */}
          <div className="lg:pr-8">
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3Njk0MTA3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration and problem-solving"
                className="w-full h-[320px] object-cover"
              />
            </div>
            <h2 className="text-3xl lg:text-4xl mb-2 text-gray-900 leading-[1.15]">
              <span className="font-medium">Most execution problems have patterns.</span>
              <br />
              <span className="font-light">We help you see yours—and fix them.</span>
            </h2>
            <p className="text-base text-gray-700 font-light leading-relaxed mb-6 mt-4">
              Whether you're scaling a team, fixing delivery flow, or building an execution system that scales,
              the right approach depends on where you are now.
            </p>
            <div className="pt-5 border-t border-gray-300">
              <p className="text-sm text-gray-500 font-light">
                No obligation. No sales pitch. Just clarity on your next step.
              </p>
            </div>
          </div>

          {/* Right — About form (form.js contract) */}
          <div className="bg-white border border-gray-200 shadow-sm p-8 lg:p-9">
            <h3 className="text-lg font-medium mb-1 text-gray-900">Get a Custom Recommendation</h3>
            <p className="text-sm text-gray-600 font-light mb-7">
              Tell us where you are. We'll show you the best path forward.
            </p>

            {/* form.js contract: id="about-us-form" */}
            <form id="about-us-form" className="space-y-4" noValidate>
              {/* Error container — required by form.js */}
              <div id="aboutus-error-message" className="hidden bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded"></div>

              {/* fullName */}
              <div>
                <label htmlFor="about-fullName" className="block text-sm font-normal text-gray-700 mb-1.5">Name</label>
                <input type="text" id="about-fullName" name="fullName"
                  className="w-full px-3.5 py-2.5 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-colors"
                  required />
              </div>

              {/* workEmail */}
              <div>
                <label htmlFor="about-workEmail" className="block text-sm font-normal text-gray-700 mb-1.5">Work Email</label>
                <input type="email" id="about-workEmail" name="workEmail"
                  className="w-full px-3.5 py-2.5 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-colors"
                  required />
              </div>

              {/* organizationRole */}
              <div>
                <label htmlFor="about-organizationRole" className="block text-sm font-normal text-gray-700 mb-1.5">
                  Organization / Role
                </label>
                <input type="text" id="about-organizationRole" name="organizationRole"
                  placeholder="e.g., Acme Corp / VP Engineering"
                  className="w-full px-3.5 py-2.5 border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-colors"
                  required />
              </div>

              {/* interests checkboxes */}
              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2.5">
                  What best describes your interest?
                </label>
                <div className="space-y-2.5">
                  {[
                    { value: "public_course", label: "Public course" },
                    { value: "private_training", label: "Private / in-house training" },
                    { value: "enterprise_transformation", label: "Enterprise transformation" },
                    { value: "not_sure", label: "Not sure yet" },
                  ].map((opt) => (
                    <label key={opt.value} className="flex items-start gap-2.5 cursor-pointer group">
                      <input type="checkbox" name="interests" value={opt.value}
                        className="mt-0.5 w-4 h-4 border-gray-300 text-[#0066CC] focus:ring-[#0066CC]" />
                      <span className="text-sm text-gray-700 font-light group-hover:text-gray-900">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* challenge */}
              <div>
                <label htmlFor="about-challenge" className="block text-sm font-medium text-gray-800 mb-0.5">
                  Biggest challenge right now
                </label>
                <p className="text-xs text-gray-500 italic mb-2">Choose the one that hurts the most.</p>
                <select id="about-challenge" name="challenge"
                  className="w-full px-3.5 py-2.5 border border-gray-300 text-sm text-gray-900 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-colors bg-white"
                  required>
                  <option value="">Select a challenge...</option>
                  <option value="slow_delivery">Slow delivery — work takes too long to get done</option>
                  <option value="unclear_priorities">Unclear priorities — everything feels urgent</option>
                  <option value="busy_no_outcomes">Teams are busy but outcomes don't improve</option>
                  <option value="dependencies">Too many dependencies across teams or functions</option>
                  <option value="leadership_execution">Leadership decisions don't translate into execution</option>
                  <option value="heavy_processes">Processes are heavy, rigid, or don't fit how we work</option>
                  <option value="ai_value">We want to use AI, but don't know where it creates real value</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </div>

              {/* message / optional context — always visible (static-safe) */}
              <div>
                <label htmlFor="about-message" className="block text-xs font-light text-gray-500 italic mb-1.5">
                  Anything else you'd like us to know?
                </label>
                <textarea id="about-message" name="message" rows={2}
                  defaultValue=""
                  placeholder="Describe your situation..."
                  className="w-full px-3.5 py-2.5 border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-colors resize-none" />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button type="submit"
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-normal text-base h-11 px-8 inline-flex items-center justify-center gap-2 transition-colors">
                  Get a Recommendation
                  <i data-lucide="arrow-right" className="w-[18px] h-[18px]"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ExecutionPatternsSection — intentionally empty (merged into above sections)
// Kept as export to avoid breaking AboutUsPage.tsx import
// ---------------------------------------------------------------------------
export function ExecutionPatternsSection() {
  return null;
}
