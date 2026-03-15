import { ArrowRight, Menu, X, AlertCircle, Clock, UserX, TrendingDown, CheckCircle2, Headphones, TrendingUp, Settings, Users, UserCheck, Quote, Star, Check, ChevronDown, Zap, MapPin } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { ImageWithFallback } from "@/shared/ImageWithFallback";
import { useState } from "react";

export function Course04Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">TEAMWORKS COURSE SERIES · COURSE 04</div>
                <div className="font-bold text-base text-gray-900 -mt-0.5">Proactive Problem Solving at Work</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#modules" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Modules</a>
              <a href="#outcomes" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Outcomes</a>
                            <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="/teamworks/bookConsultation.html" className="text-white px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all font-medium" style={{ backgroundColor: "#16A34A" }}>
                Book This Course for Your Team
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden"
              aria-label="Open menu"
              aria-controls="tw04-mobile-menu"
              data-mobile-toggle
            >
              <span data-icon="open"><Menu className="w-6 h-6" /></span>
              <span data-icon="close" className="hidden"><X className="w-6 h-6" /></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="tw04-mobile-menu" data-mobile-menu className="md:hidden py-6 border-t border-gray-200 hidden" aria-hidden="true">
            <div className="flex flex-col gap-4">
              <a href="#modules" className="text-sm py-2" data-mobile-close>Modules</a>
              <a href="#outcomes" className="text-sm py-2" data-mobile-close>Outcomes</a>
              <a href="#faq" className="text-sm py-2" data-mobile-close>FAQ</a>
              <a href="/teamworks/bookConsultation.html" className="text-white px-6 py-3 rounded-full text-sm mt-2 text-center" style={{ backgroundColor: "#16A34A" }} data-mobile-close>
                Book This Course
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="../index.html" className="hover:text-[#16A34A] transition-colors">Home</a>
            <span>/</span>
            <a href="/teamworks/index.html" className="hover:text-[#16A34A] transition-colors">Teamworks</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">Proactive Problem Solving at Work</span>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <div>
                {/* Course Badge */}
                <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-full px-6 py-3 mb-8">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#16A34A]" />
                  <span className="text-xs md:text-sm font-semibold text-[#16A34A] tracking-wide">TEAMWORKS · IMPROVEMENT</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                  Proactive Problem Solving <span className="text-[#16A34A]">at Work</span>
                </h1>

                {/* Sub-tagline */}
                <p className="text-base lg:text-lg text-gray-700 mb-3 md:mb-4 font-light">
                  Train employees to analyse problems and recommend improvements instead of escalating issues.
                </p>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed mb-3 font-light">
                  Many business owners face the same frustration:
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-3 font-light">
                  Employees report problems — but offer no solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-3 font-light">
                  Managers end up solving operational issues themselves, while the same problems keep repeating.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-3 font-light">
                  <strong>Most employees escalate problems.</strong>
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-3 font-light">
                  This <strong>2-day practical workshop</strong> trains employees to analyse problems, identify root causes, and recommend practical improvements.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                  Instead of waiting for instructions, your team learns how to <strong>think through problems and contribute solutions.</strong>
                </p>

                {/* Course Info Cards */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Duration */}
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-[#16A34A] mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">Duration</div>
                      <div className="font-semibold text-gray-900">2 days</div>
                    </div>

                    {/* Format */}
                    <div className="text-center">
                      <Users className="w-6 h-6 text-[#16A34A] mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">Format</div>
                      <div className="font-semibold text-gray-900">In-person</div>
                    </div>

                    {/* Capacity */}
                    <div className="text-center">
                      <UserCheck className="w-6 h-6 text-[#16A34A] mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">Capacity</div>
                      <div className="font-semibold text-gray-900">Max 30</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all group" style={{ backgroundColor: "#22C55E" }}>
                  <span className="font-medium">Talk to Us About Your Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="/assets/img/teamworks/teamworks-course-04-frontline-workers-in-action.webp"
                    alt="Frontline workers in action"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section - "Small Operational Issues" */}
        <section className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                <span className="text-xs lg:text-sm font-medium text-[#16A34A] tracking-wide uppercase">
                  The Problem
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                Small Operational Issues Are Quietly<br />
                <span className="text-[#16A34A]">Draining Your Business</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-4">
                Most operational problems are not big. They are small issues that appear every day: <strong>delays, mistakes, repeated questions, inefficient processes.</strong> Individually they look minor. But over time they <strong>drain productivity, frustrate employees, and consume management time.</strong>
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                These problems persist because <strong>employees escalate problems instead of analysing them.</strong>
              </p>
            </div>

            {/* Pain Point Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Pain Point 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mb-6" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                  <AlertCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#16A34A] transition-colors">Employees Escalate Problems</h3>
                <p className="text-gray-600 leading-relaxed font-light">Employees report issues but rarely analyse the causes or suggest solutions. Managers become the default problem solvers.</p>
              </div>

              {/* Pain Point 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mb-6" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#16A34A] transition-colors">Managers Firefight Daily</h3>
                <p className="text-gray-600 leading-relaxed font-light">Managers spend large amounts of time resolving operational issues that teams could potentially solve themselves.</p>
              </div>

              {/* Pain Point 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mb-6" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                  <UserX className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#16A34A] transition-colors">Problems Keep Repeating</h3>
                <p className="text-gray-600 leading-relaxed font-light">The same operational problems return again and again because root causes are never addressed.</p>
              </div>

              {/* Pain Point 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mb-6" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                  <TrendingDown className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#16A34A] transition-colors">Improvement Rarely Happens</h3>
                <p className="text-gray-600 leading-relaxed font-light">Teams notice inefficiencies but lack a structured way to analyse and improve them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact / Transformation Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                <span className="text-xs lg:text-sm font-medium text-[#16A34A] tracking-wide uppercase">
                  The Transformation
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                The Transformation You'll Experience
              </h2>
            </div>

            <div className="max-w-3xl mx-auto mb-12 space-y-4 text-center">
              <p className="text-lg text-gray-600 font-light">Many organisations operate with this pattern:</p>
              <p className="text-lg text-gray-600 font-light"><strong>Employees report problems.</strong></p>
              <p className="text-lg text-gray-600 font-light"><strong>Managers solve them.</strong></p>
              <p className="text-lg text-gray-600 font-light">Over time this creates dependency. Managers become overwhelmed while employees wait for instructions.</p>
              <p className="text-lg text-gray-600 font-light">This workshop helps organisations shift toward a healthier model:</p>
              <p className="text-lg text-gray-600 font-light"><strong>Employees analyse problems.</strong></p>
              <p className="text-lg text-gray-600 font-light"><strong>Employees recommend improvements.</strong></p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                <p className="text-base lg:text-lg text-gray-700 font-medium mb-5">Participants learn how to:</p>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Identify operational problems clearly
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Analyse root causes instead of symptoms
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Propose practical improvements
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Support managers with better decisions
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-center text-base lg:text-lg text-gray-600 font-light italic">
                    The result is a team that contributes to solving problems instead of escalating them.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/teamworks/bookConsultation.html"
                className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:opacity-90 group"
                style={{ backgroundColor: "#16A34A" }}
              >
                See If This Course Fits Your Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Course Modules Section */}
        <section id="modules" className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                <span className="text-xs lg:text-sm font-medium text-[#16A34A] tracking-wide uppercase">
                  HOW WE ACHIEVE THIS
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                A Structured, Practical<br />
                <span className="text-[#16A34A]">Problem-Solving Framework</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-4">
                Participants learn a structured workflow for analysing operational problems and improving daily work processes.
              </p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                The framework is simple, practical, and designed for real workplace situations.
              </p>
            </div>

            {/* Module Cards */}
            <div className="space-y-12">
              {/* Module 1 */}
              <div className="group grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <ImageWithFallback
                    src="/assets/img/teamworks/teamworks-identify-operational-gaps.webp"
                    alt="Identify Operational Gaps"
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-xl shadow-xl flex items-center justify-center z-20" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                    <span className="text-white font-semibold text-2xl">1</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-full"></div>
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">STEP 1</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Identify Operational Gaps
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Recognise recurring operational problems such as delays, bottlenecks, and inefficiencies in daily work.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#15803D]"></div>
                  </div>
                </div>
              </div>

              {/* Module 2 */}
              <div className="group grid lg:grid-cols-2 gap-10 items-center lg:grid-flow-dense">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 lg:col-start-2">
                  <ImageWithFallback
                    src="/assets/img/teamworks/site-eliminate-root-causes.webp"
                    alt="Eliminate Root Causes"
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-xl shadow-xl flex items-center justify-center z-20" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                    <span className="text-white font-semibold text-2xl">2</span>
                  </div>
                </div>
                <div className="lg:col-start-1 lg:row-start-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-full"></div>
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">STEP 2</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Analyse Root Causes
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Use structured questioning techniques to understand <strong>why problems occur</strong> instead of fixing symptoms.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#15803D]"></div>
                  </div>
                </div>
              </div>

              {/* Module 3 */}
              <div className="group grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <ImageWithFallback
                    src="/assets/img/teamworks/site-prioritise-high-impact-problems.webp"
                    alt="Prioritise High-Impact Problems"
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-xl shadow-xl flex items-center justify-center z-20" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                    <span className="text-white font-semibold text-2xl">3</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-full"></div>
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">STEP 3</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Prioritise High-Impact Problems
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Evaluate which problems should be solved first based on business impact.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#15803D]"></div>
                  </div>
                </div>
              </div>

              {/* Module 4 */}
              <div className="group grid lg:grid-cols-2 gap-10 items-center lg:grid-flow-dense">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 lg:col-start-2">
                  <ImageWithFallback
                    src="/assets/img/teamworks/people-improve-workflow-efficiency.webp"
                    alt="Improve Workflow Efficiency"
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-xl shadow-xl flex items-center justify-center z-20" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                    <span className="text-white font-semibold text-2xl">4</span>
                  </div>
                </div>
                <div className="lg:col-start-1 lg:row-start-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-full"></div>
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">STEP 4</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Improve Workflow Efficiency
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Design practical improvements that reduce delays, eliminate bottlenecks, and improve work flow.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#15803D]"></div>
                  </div>
                </div>
              </div>

              {/* Module 5 */}
              <div className="group grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <ImageWithFallback
                    src="/assets/img/teamworks/teamworks-course-04-measure-sustain-improvements.webp"
                    alt="Measure & Sustain Improvements"
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 rounded-xl shadow-xl flex items-center justify-center z-20" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                    <span className="text-white font-semibold text-2xl">5</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-full"></div>
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">STEP 5</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Measure & Sustain Improvements
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Track results and ensure improvements are sustained over time.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#15803D]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes Section */}
        <section id="outcomes" className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: By the end */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">
                  After This 2-Day Workshop, Your Team Will Be Able To:
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Identify operational problems clearly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Analyse root causes using structured thinking</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Recommend practical improvements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Take initiative to improve daily work</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Support managers with better decisions</p>
                  </div>
                </div>
                <p className="text-gray-600 font-light mt-6 italic">Instead of escalating problems, employees become <strong>active contributors to improvement.</strong></p>
              </div>

              {/* Right: Outcomes for Success */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                  Outcomes for Your Organisation
                </h2>
                <p className="text-gray-600 font-light mb-8">Organisations that build strong problem-solving teams often experience:</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Fewer repeated operational problems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Faster resolution of workflow issues</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Employees taking greater ownership of work</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Managers spending less time firefighting</p>
                  </div>
                </div>
                <p className="text-gray-600 font-light mt-6 italic">Over time, this creates a <strong>culture of continuous improvement</strong>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                <span className="text-xs lg:text-sm font-medium text-[#16A34A] tracking-wide uppercase">
                  Target Audience
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                Is This For You?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                This workshop is ideal for organisations that want employees to take greater ownership in solving operational problems.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
              {/* Customer Service */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-2">
                <div className="relative h-36 lg:h-44 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src="/assets/img/teamworks/site-customer-service.webp"
                    alt="Customer Service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 group-hover:bg-[#22C55E] group-hover:scale-110 transition-all duration-300">
                      <Headphones className="w-4 h-4 lg:w-5 lg:h-5 text-[#16A34A] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                    <h3 className="text-sm lg:text-base font-medium text-white tracking-tight">Customer Service</h3>
                  </div>
                </div>
                <div className="p-4 lg:p-5 bg-white">
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2 font-light">Support teams handling customer inquiries and concerns</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Sales */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-2">
                <div className="relative h-36 lg:h-44 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src="/assets/img/teamworks/site-sales.webp"
                    alt="Sales"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 group-hover:bg-[#22C55E] group-hover:scale-110 transition-all duration-300">
                      <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-[#16A34A] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                    <h3 className="text-sm lg:text-base font-medium text-white tracking-tight">Sales</h3>
                  </div>
                </div>
                <div className="p-4 lg:p-5 bg-white">
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2 font-light">Sales executives and account managers</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Operations */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-2">
                <div className="relative h-36 lg:h-44 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src="/assets/img/teamworks/site-operations.webp"
                    alt="Operations"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 group-hover:bg-[#22C55E] group-hover:scale-110 transition-all duration-300">
                      <Settings className="w-4 h-4 lg:w-5 lg:h-5 text-[#16A34A] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                    <h3 className="text-sm lg:text-base font-medium text-white tracking-tight">Operations</h3>
                  </div>
                </div>
                <div className="p-4 lg:p-5 bg-white">
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2 font-light">Operations teams and coordinators</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Front Desk */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-2">
                <div className="relative h-36 lg:h-44 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src="/assets/img/teamworks/site-front-desk.webp"
                    alt="Front Desk"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 group-hover:bg-[#22C55E] group-hover:scale-110 transition-all duration-300">
                      <Users className="w-4 h-4 lg:w-5 lg:h-5 text-[#16A34A] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                    <h3 className="text-sm lg:text-base font-medium text-white tracking-tight">Front Desk</h3>
                  </div>
                </div>
                <div className="p-4 lg:p-5 bg-white">
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2 font-light">Receptionists and front-facing staff</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Retail Associates */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-2">
                <div className="relative h-36 lg:h-44 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src="/assets/img/teamworks/site-retail-associates.webp"
                    alt="Retail Associates"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                  <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                    <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-lg bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 group-hover:bg-[#22C55E] group-hover:scale-110 transition-all duration-300">
                      <Users className="w-4 h-4 lg:w-5 lg:h-5 text-[#16A34A] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                    <h3 className="text-sm lg:text-base font-medium text-white tracking-tight">Retail Associates</h3>
                  </div>
                </div>
                <div className="p-4 lg:p-5 bg-white">
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed line-clamp-2 font-light">Restaurant and retail service personnel</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>

            <p className="text-center text-gray-600 font-light mt-10 text-base">
              No Lean or Six Sigma background is required.
            </p>
          </div>
        </section>

        {/* Pricing Section - An Investment in Operational Efficiency */}
        <section id="pricing" className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                <span className="text-xs lg:text-sm font-medium text-[#16A34A] tracking-wide uppercase">
                  INVESTMENT
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
                An Investment in Operational Efficiency
              </h2>
              <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                This workshop focuses on practical workplace problem solving that employees can apply immediately.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column - Pricing & Inclusions */}
              <div>
                <p className="text-gray-500 font-light text-sm mb-4">Per 2-day course</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-6xl lg:text-7xl font-light text-gray-900">
                      RM350
                    </span>
                    <span className="text-lg lg:text-xl text-gray-500 font-light">Only</span>
                  </div>
                  <p className="text-gray-700 font-light text-sm lg:text-base mb-8">
                    / Person / Day. Based on Class of 30.
                  </p>
                </div>

                {/* What's Included */}
                <div className="space-y-4 mb-12">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">2-day intensive workshop</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">Access to course materials</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">Expert facilitator-led sessions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">Certificate of completion</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">Post-workshop support & community</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a href="/teamworks/bookConsultation.html" className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 px-8 rounded-full text-base lg:text-lg font-normal transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center justify-center gap-2 group">
                    Talk to Us About Your Team
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <p className="text-sm text-gray-500 mt-4 font-light">
                    A short discussion to understand your goals and team needs.
                  </p>
                </div>
              </div>

              {/* Right Column - What You'll Master */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-10 tracking-tight">
                  What You'll Master
                </h2>

                <ul className="space-y-3 mb-10">
                  {[
                    "Structured Problem Identification",
                    "Root Cause Thinking (5 Whys)",
                    "Practical Improvement Design",
                    "Small changes that remove inefficiencies",
                    "Continuous Improvement Mindset",
                    "Develop the habit of analysing and improving work",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-gray-900 font-medium text-sm lg:text-base">{item}</p>
                    </li>
                  ))}
                </ul>

                {/* Real Impact Box */}
                <div className="bg-red-50 border border-red-100 p-5 lg:p-6 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-red-500">&#128161;</span>
                    Real Impact
                  </h4>
                  <p className="text-gray-700 leading-relaxed font-light text-sm lg:text-base">
                    Teams report 60% faster problem resolution and significantly fewer recurring issues within 3 months of training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                <span className="text-xs lg:text-sm font-medium text-[#16A34A] tracking-wide uppercase">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Common Questions</h2>
              <p className="text-base text-gray-600">
                Everything you need to know about this course
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Do participants need Lean Six Sigma knowledge?",
                  answer: "No. The workshop focuses on practical workplace problem solving using simple tools that anyone can learn."
                },
                {
                  question: "Is this course suitable for non-technical teams?",
                  answer: "Yes. The course uses real workplace scenarios and simple language so teams from different departments can participate."
                },
                {
                  question: "Can this workshop be delivered privately for our organisation?",
                  answer: "Yes. The workshop can be delivered as a private in-house training customised to your organisation's operational environment."
                }
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-[#22C55E] transition-colors open:border-[#22C55E]"
                >
                  <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                    <span className="flex-1">{faq.question}</span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            {/* Ensure only one FAQ item can be open at a time (static HTML pages) */}
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `(() => {
  const container = document.getElementById('faq');
  if (!container) return;
  const items = Array.from(container.querySelectorAll('details'));
  items.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      items.forEach((other) => {
        if (other !== item) other.removeAttribute('open');
      });
    });
  });
})();`
              }}
            />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#EAF6EF]">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
            {/* Reassurance Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Check className="w-4 h-4 text-[#16A34A]" />
                <span>Delivered in-house at your location</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Check className="w-4 h-4 text-[#16A34A]" />
                <span>Practical, hands-on format</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Check className="w-4 h-4 text-[#16A34A]" />
                <span>Immediate workplace application</span>
              </div>
            </div>

            {/* Bold Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Build a Team That Solves Problems —{" "}
              <span className="text-[#16A34A]">Not Escalates Them</span>
            </h2>

            {/* Subheading Lines */}
            <p className="text-lg lg:text-xl text-gray-600 mb-3 font-light max-w-3xl mx-auto">
              Many organisations struggle because employees escalate problems instead of analysing them.
            </p>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 font-light max-w-3xl mx-auto">
              This workshop equips your team with the <strong>mindset and tools to identify issues, recommend improvements, and contribute to operational excellence.</strong>
            </p>

            {/* CTA Button */}
            <a
              href="/teamworks/bookConsultation.html"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Request a Private Workshop
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Supporting Micro Text */}
            <p className="text-sm text-gray-500 mt-4 font-light">
              A short discussion to understand your goals and team needs. No commitment required.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainSiteFooter variant="light" />
    </div>
  );
}
