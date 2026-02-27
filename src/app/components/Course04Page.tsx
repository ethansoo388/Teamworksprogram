import { ArrowRight, Menu, X, AlertCircle, Clock, UserX, TrendingDown, CheckCircle2, Headphones, TrendingUp, Settings, Users, UserCheck, Quote, Star, Check, ChevronDown, Zap, MapPin } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { ImageWithFallback } from "@/shared/ImageWithFallback";
import { useState } from "react";

export function Course04Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                <div className="font-bold text-base text-gray-900 -mt-0.5">Practical Lean Problem Solving</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#modules" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Modules</a>
              <a href="#outcomes" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Outcomes</a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
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
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#modules" className="text-sm py-2">Modules</a>
                <a href="#outcomes" className="text-sm py-2">Outcomes</a>
                <a href="#testimonials" className="text-sm py-2">Testimonials</a>
                <a href="#faq" className="text-sm py-2">FAQ</a>
                <a href="/teamworks/bookConsultation.html" className="text-white px-6 py-3 rounded-full text-sm mt-2 text-center" style={{ backgroundColor: "#16A34A" }}>
                  Book This Course
                </a>
              </div>
            </div>
          )}
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
            <span className="text-gray-900 font-bold">Practical Lean Problem Solving</span>
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
                  Practical Lean<br />
                  <span className="text-[#16A34A]">Problem Solving.</span>
                </h1>

                {/* Sub-tagline */}
                <p className="text-base lg:text-lg text-gray-700 mb-3 md:mb-4 font-light">
                  Empower Your Frontline to Solve Problems, Not Just Report Them.
                </p>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                  Stop waiting for management answers. Equip your team with the Lean mindset to fix
                  recurring work issues on the spot, saving time and improving customer satisfaction.
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
                    src="https://i.postimg.cc/rmfMkyBG/hero.jpg"
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
                  THE CHALLENGE
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                Small Operational Issues Are Quietly<br />
                <span className="text-[#16A34A]">Draining Your Business.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Recurring problems cost time, money, and customer trust — especially in growing SMEs where every inefficiency matters.
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
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#16A34A] transition-colors">Workflow Delays & Bottlenecks</h3>
                <p className="text-gray-600 leading-relaxed font-light">Daily slowdowns that reduce productivity and frustrate teams.</p>
              </div>

              {/* Pain Point 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mb-6" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#16A34A] transition-colors">Costly Rework & Repeated Mistakes</h3>
                <p className="text-gray-600 leading-relaxed font-light">Fixing the same issues again and again wastes resources.</p>
              </div>

              {/* Pain Point 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mb-6" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                  <UserX className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#16A34A] transition-colors">Over-Reliance on Managers</h3>
                <p className="text-gray-600 leading-relaxed font-light">Problems constantly escalated instead of solved at the source.</p>
              </div>

              {/* Pain Point 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg mb-6" style={{ background: "linear-gradient(to bottom right, #22C55E, #16A34A)" }}>
                  <TrendingDown className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#16A34A] transition-colors">Customer Complaints & Staff Frustration</h3>
                <p className="text-gray-600 leading-relaxed font-light">Unresolved issues damage reputation and morale.</p>
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
                  What Changes After This Workshop
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                The Transformation You'll Experience
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Diagnose root causes without constant management intervention
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Reduce recurring operational issues
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Improve complaint handling and resolution speed
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Prevent small issues from becoming major losses
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed">
                      Apply structured problem-solving consistently
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-center text-base lg:text-lg text-gray-600 font-light italic">
                    No prior Lean knowledge required.
                  </p>
                </div>
              </div>
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
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                This is not classroom theory. Your team will work on real problems from your organisation during the workshop.
              </p>
            </div>

            {/* Module Cards */}
            <div className="space-y-12">
              {/* Module 1 */}
              <div className="group grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <ImageWithFallback
                    src="https://i.postimg.cc/CMk8C3V4/Untitled-design-(22).png"
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
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">MODULE 1</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Identify Operational Gaps
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Surface hidden inefficiencies using simple visual tools.
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
                    src="https://i.postimg.cc/vBd0XWDn/Untitled-design-(24).png"
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
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">MODULE 2</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Eliminate Root Causes
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Use 5-Why and Fishbone methods to diagnose the real issue.
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
                    src="https://i.postimg.cc/Fsc7X3K1/Untitled-design-(23).png"
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
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">MODULE 3</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Prioritise High-Impact Problems
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Focus on issues affecting profit, customers, and workflow.
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
                    src="https://i.postimg.cc/c1tbZLGr/5S.jpg"
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
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">MODULE 4</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Improve Workflow Efficiency
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Design smarter, smoother daily operations.
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
                    src="https://i.postimg.cc/6pFKW1b1/Module-5.jpg"
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
                    <span className="text-sm font-medium text-[#16A34A] tracking-wider">MODULE 5</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 group-hover:text-[#16A34A] transition-colors duration-300">
                    Measure & Sustain Improvements
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                    Test what works, compare results, and lock in better ways of working with simple checklists.
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
                  After this 2-day workshop, your team will be able to:
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Root Cause Analysis Made Simple</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Quick Decision Frameworks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Team-Based Problem Solving</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Preventive Thinking</p>
                  </div>
                </div>
              </div>

              {/* Right: Outcomes for Success */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">
                  Outcomes for Success
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Learn practical 5-Why and Fishbone techniques</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Make confident decisions under pressure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Facilitate effective problem-solving discussions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-[#16A34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#16A34A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Spot potential issues early and implement countermeasures</p>
                  </div>
                </div>
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
                Ideal for Growing Teams Where Operational Issues and Customer Complaints Impact Performance
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
              {/* Customer Service */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#22C55E] hover:-translate-y-2">
                <div className="relative h-36 lg:h-44 overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src="https://i.postimg.cc/XYQv30TK/Untitled-design-(28).png"
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
                    src="https://i.postimg.cc/Y2GL3jJ7/Untitled-design-(27).png"
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
                    src="https://i.postimg.cc/VsWQ2FyG/Untitled-design-(29).png"
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
                    src="https://i.postimg.cc/6qgSJzXk/Untitled-design-(32).png"
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
                    src="https://i.postimg.cc/V6Nn1RGr/Untitled-design-(30).png"
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-green-50 border border-green-100">
                <span className="text-xs lg:text-sm font-medium text-[#16A34A] tracking-wide uppercase">
                  Success Stories
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Real results from teams who've transformed their problem-solving approach
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Testimonial 1 */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-[#22C55E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6 w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote Text */}
                <div className="mt-6 mb-6">
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-light italic">
                    "This course transformed how our customer service team handles issues. Instead of escalating everything, they now solve problems independently and confidently."
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <h4 className="text-gray-900 font-medium text-base">
                      Siti Nurhaliza
                    </h4>
                    <p className="text-gray-600 text-sm font-light">
                      Head of Customer Experience
                    </p>
                    <p className="text-[#16A34A] text-sm font-medium">
                      Technology
                    </p>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
              </div>

              {/* Testimonial 2 */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-[#22C55E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6 w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote Text */}
                <div className="mt-6 mb-6">
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-light italic">
                    "The practical tools and frameworks gave our operations team a systematic approach to tackle recurring issues. We've seen a 40% reduction in problem resolution time."
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <h4 className="text-gray-900 font-medium text-base">
                      Michael Chen
                    </h4>
                    <p className="text-gray-600 text-sm font-light">
                      Operations Manager
                    </p>
                    <p className="text-[#16A34A] text-sm font-medium">
                      Retail
                    </p>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
              </div>

              {/* Testimonial 3 */}
              <div className="group bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:border-[#22C55E] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6 w-12 h-12 bg-[#22C55E] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote Text */}
                <div className="mt-6 mb-6">
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-light italic">
                    "Our frontline staff now feel empowered to make decisions and improve processes. This mindset has become part of our culture, not just a training program."
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <h4 className="text-gray-900 font-medium text-base">
                      Priya Sharma
                    </h4>
                    <p className="text-gray-600 text-sm font-light">
                      Learning & Development Manager
                    </p>
                    <p className="text-[#16A34A] text-sm font-medium">
                      Hospitality
                    </p>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22C55E] via-[#16A34A] to-[#15803D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
              </div>
            </div>
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
                Most teams recover this investment by eliminating just ONE recurring operational mistake.
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
                    <span className="text-lg lg:text-xl text-gray-500 font-light">per person/day</span>
                  </div>
                  <p className="text-gray-700 font-light text-sm lg:text-base mb-8">
                    Up to 30 participants per session
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
                    <span className="text-gray-900 font-light">All course materials & templates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">Expert instructor (10+ years exp)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">Certificate of completion</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">Post-workshop support & community</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-900 font-light">Pre-course alignment session for your team</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <a href="/teamworks/bookConsultation.html" className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 px-8 rounded-full text-base lg:text-lg font-normal transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center justify-center gap-2 group">
                    Plan This Course for Your Team
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

                <div className="space-y-8 mb-10">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-base lg:text-lg">See Problems Clearly</h4>
                    <p className="text-gray-600 leading-relaxed font-light text-sm lg:text-base">Learn to separate symptoms from root causes using simple visual tools that work on the shop floor.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-base lg:text-lg">Analyze Systematically</h4>
                    <p className="text-gray-600 leading-relaxed font-light text-sm lg:text-base">Apply proven 5-Why and Fishbone techniques in real operational scenarios without complex theory.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-base lg:text-lg">Design Practical Solutions</h4>
                    <p className="text-gray-600 leading-relaxed font-light text-sm lg:text-base">Develop sustainable countermeasures your team can actually implement and maintain long-term.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-base lg:text-lg">Make Solutions Stick</h4>
                    <p className="text-gray-600 leading-relaxed font-light text-sm lg:text-base">Build habits and systems to ensure solutions work and problems don't come back.</p>
                  </div>
                </div>

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
                  question: "Can this be customised to our industry?",
                  answer: "Yes. Exercises are tailored to your real operational challenges."
                },
                {
                  question: "Is this suitable for teams with no Lean background?",
                  answer: "Absolutely. Tools are simple and practical."
                },
                {
                  question: "Can we use our real workplace problems?",
                  answer: "Yes. Teams are encouraged to bring actual cases."
                },
                {
                  question: "Is this suitable for service industries?",
                  answer: "Yes — retail, logistics, banking, healthcare, F&B, and more."
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
              <span className="text-[#16A34A]">Not Escalates Them.</span>
            </h2>

            {/* Subheading Lines */}
            <p className="text-lg lg:text-xl text-gray-600 mb-3 font-light max-w-3xl mx-auto">
              Stop daily firefighting and start systematic operational improvement.
            </p>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 font-light max-w-3xl mx-auto">
              Let's design a private workshop tailored to your team.
            </p>

            {/* CTA Button */}
            <a
              href="/teamworks/bookConsultation.html"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Request Private Training Proposal
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
