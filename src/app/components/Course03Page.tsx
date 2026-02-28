import { ArrowRight, Menu, X, Eye, Zap, Target, TrendingUp, Clock, Users, UserCheck } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { useState } from "react";
import heroImage from "@/assets/img/teamworks/ciagile-teamworks-course03-critical-thinking-hero.webp";
import moduleImage1 from "@/assets/img/teamworks/ciagile-teamworks-course03-module01-kanban.webp";
import moduleImage2 from "@/assets/img/teamworks/ciagile-teamworks-course03-module02-better-communication.webp";
import moduleImage3 from "@/assets/img/teamworks/ciagile-teamworks-course03-module03-make-work-visible.webp";

export function Course03Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-600">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">TEAMWORKS COURSE SERIES • COURSE 03</div>
                <div className="font-bold text-base text-gray-900 -mt-0.5">Critical Thinking for Better Work</div>
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
              <a href="/teamworks/bookConsultation.html" className="bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm hover:bg-orange-700 transition-all font-medium">
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
                                <a href="#faq" className="text-sm py-2">FAQ</a>
                <a href="/teamworks/bookConsultation.html" className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm mt-2 text-center">
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
            <a href="../index.html" className="hover:text-orange-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/teamworks/index.html" className="hover:text-orange-600 transition-colors">Teamworks</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">Critical Thinking for Better Work</span>
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
                <div className="inline-flex items-center gap-3 bg-[#FFF9E6] border-2 border-[#FFD88A] rounded-full px-6 py-3 mb-8">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-base font-semibold text-[#8B4513]">TEAMWORKS · EXECUTION</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                  Critical Thinking for<br />
                  <span className="text-orange-600">Better Work.</span>
                </h1>
                
                {/* Sub-tagline */}
                <p className="text-base lg:text-lg italic text-gray-600 mb-6">
                  Use essential critical thinking techniques and Kanban to deliver faster.
                </p>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  <strong>When work is unclear, teams slow down.</strong><br />
                  Critical Thinking for Better Work helps teams prioritise clearly, make better decisions, and keep work moving — without overload or chaos.
                </p>

                {/* Course Info Cards */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Duration */}
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">Duration</div>
                      <div className="font-semibold text-gray-900">2 days</div>
                    </div>
                    
                    {/* Format */}
                    <div className="text-center">
                      <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">Format</div>
                      <div className="font-semibold text-gray-900">In-person</div>
                    </div>
                    
                    {/* Capacity */}
                    <div className="text-center">
                      <UserCheck className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                      <div className="text-xs text-gray-600 mb-1">Capacity</div>
                      <div className="font-semibold text-gray-900">Max 30</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all group">
                  <span className="font-medium">Talk to Us About Your Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={heroImage}
                    alt="Modern office workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - "See the work. Remove the friction." */}
        <section id="benefits" className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                See the work. Remove the friction.<br />
                <span className="text-orange-600">Deliver faster.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                This 2-day hands-on workshop helps teams think more clearly, prioritise better, and deliver work without constant firefighting.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Visualise Everything</h3>
                <p className="text-gray-600 leading-relaxed">
                  Make work visible so teams can think clearly and spot problems early.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cut Cycle Time in Half</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reduce delays by focusing on the most important work first.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Stop Starting. Start Finishing.</h3>
                <p className="text-gray-600 leading-relaxed">
                  Limit work in progress so teams complete work faster.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">From Chaos to Control</h3>
                <p className="text-gray-600 leading-relaxed">
                  Use simple Kanban practices to bring structure without bureaucracy.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <a href="/teamworks/bookConsultation.html" className="inline-flex flex-col items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
                See If This Course Fits Your Team
              </a>
              <p className="text-sm text-gray-500 mt-4">
                A short conversation. No obligation.
              </p>
            </div>
          </div>
        </section>

        {/* Course Modules Section */}
        <section id="modules" className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Modules Content */}
              <div>
                {/* Section Header */}
                <div className="mb-12">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Course Modules</h2>
                  <p className="text-xl text-gray-600">
                    Learn a simple, visual way to manage work so teams think clearly and deliver consistently.
                  </p>
                </div>

                {/* Modules List */}
                <div className="space-y-8">
                  {/* Module 1 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 1: Why Work Gets Stuck</h3>
                      <p className="text-gray-600">
                        Understand how unclear priorities and overloaded teams slow delivery.
                      </p>
                    </div>
                  </div>

                  {/* Module 2 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 2: Making Work Visible</h3>
                      <p className="text-gray-600">
                        Use visualisation to expose bottlenecks and improve decision-making.
                      </p>
                    </div>
                  </div>

                  {/* Module 3 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 3: Limiting Work in Progress</h3>
                      <p className="text-gray-600">
                        Focus on fewer things at a time to finish work faster.
                      </p>
                    </div>
                  </div>

                  {/* Module 4 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 4: Managing Dependencies Across Teams</h3>
                      <p className="text-gray-600">
                        Reduce delays caused by handoffs and waiting.
                      </p>
                    </div>
                  </div>

                  {/* Module 5 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 5: From Chaos to Cadence</h3>
                      <p className="text-gray-600">
                        Create simple working rhythms teams can sustain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Images */}
              <div className="relative h-full min-h-[700px]">
                <div className="absolute top-0 left-0 w-3/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={moduleImage1}
                    alt="Course module image 1"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-3/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={moduleImage2}
                    alt="Course module image 2"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-3/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={moduleImage3}
                    alt="Course module image 3"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This Course For Section */}
        <section id="audience" className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Content */}
              <div>
                {/* Badge */}


                <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                  Who Is This Course For?
                </h2>

                <p className="text-xl text-gray-600 mb-12">
                  Perfect for SME teams dealing with daily chaos, unclear priorities, and constant firefighting.
                </p>

                {/* Target Audience List */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Operations Managers</h3>
                      <p className="text-gray-600">Juggling priorities and delivery pressure</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Team Leaders</h3>
                      <p className="text-gray-600">Managing busy teams with unclear focus</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Business Owners</h3>
                      <p className="text-gray-600">Wanting better execution without micromanaging</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Cross-functional Teams</h3>
                      <p className="text-gray-600">Struggling with handoffs and dependencies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: What You'll Achieve Box */}
              <div>
                <div className="bg-orange-600 rounded-3xl p-8 lg:p-12 text-white h-full flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-8">What You'll Achieve</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Faster delivery with fewer delays</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Clear priorities everyone understands</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Better decision-making at team level</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Reduced work overload and burnout</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">More predictable outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stop These Daily Frustrations Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                Stop These Daily Frustrations
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Frustration 1 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">I'm drowning in tasks</h3>
                <p className="text-gray-600">
                  Too much work, no clear priority, and everything feels urgent.
                </p>
              </div>

              {/* Frustration 2 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Where's the bottleneck?</h3>
                <p className="text-gray-600">
                  Work gets stuck but no one knows why.
                </p>
              </div>

              {/* Frustration 3 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">My team is always firefighting</h3>
                <p className="text-gray-600">
                  Constant urgency leaves no time for real progress.
                </p>
              </div>

              {/* Frustration 4 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Communication is a nightmare</h3>
                <p className="text-gray-600">
                  Too many handoffs and unclear ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* By the end / Outcomes Section */}
        <section id="outcomes" className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: By the end of this 2-day course */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">
                  By the end of this 2-day course, you'll walk away with:
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">A clear visual system for managing work</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Practical techniques to prioritise better</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Shared understanding across the team</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">A way to spot and fix problems early</p>
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
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Better flow of work</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Fewer delays and surprises</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Reduced overload</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Stronger team accountability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            {/* FAQ Badge */}
            <div className="flex justify-center mb-6">
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Common Questions</h2>
              <p className="text-base text-gray-600">
                Straightforward answers to help you decide if this course is right for your team.
              </p>
            </div>

            <div className="space-y-4">
              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  <span className="flex-1">Is this just theory or will we get practical tools?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  This is a hands-on workshop where you'll build a custom system for your own team, complete with visual boards, flow metrics, and a clear 'battle plan' to stop the firefighting and start delivering faster as soon!
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  <span className="flex-1">Is this suitable for smaller or growing teams?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  Yes. This course is designed specifically for smaller and growing teams who need clarity and better ways of working without adding complexity. The practices are lightweight, practical, and easy to apply — even with limited time and resources.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  <span className="flex-1">Will this add bureaucracy and slow us down?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  The opposite. We help you eliminate unnecessary steps and make work visible so you move faster, not slower.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  <span className="flex-1">How long does it take to see results?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  Most teams see improvements in 2-4 weeks. You'll leave Day 2 with a working system and start seeing bottlenecks immediately.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  <span className="flex-1">Do we need to hire consultants to implement this?</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  No. This workshop is designed so you can implement it yourself. You'll walk away with everything you need to run it in-house.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Pricing CTA Section */}
        <section className="bg-orange-600 py-20 lg:py-32">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
            {/* Top Badge */}
            <div className="flex justify-center mb-6">
            </div>

            {/* Main Heading */}
            <div className="text-center text-white mb-4">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Decide Better and Deliver Faster?
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto italic">
              Give your team a practical way to think clearly, prioritise work, and deliver consistently.
            </p>

            {/* Pricing Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Pricing */}
                <div>
                  <div className="text-orange-600 text-sm font-medium mb-2">Team Rate</div>
                  <div className="text-orange-600 text-5xl lg:text-6xl font-bold mb-2">RM350</div>
                  <div className="text-gray-600 text-base mb-4">Per person per day</div>
                  <div className="text-gray-500 text-sm mb-8">Calculated based on the class of 30 pax</div>

                  {/* Icons List */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">2-day intensive workshop</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Max 30 participants</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - What's Included */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">2-day practical, hands-on workshop</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Work toolkit & templates tailored for your workplace</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Value visualization & mapping tools</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Practical reference materials for continued use</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Post-workshop support, resources, and FREE consultation hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <a 
                  href="/teamworks/bookConsultation.html" 
                  className="block w-full bg-white border-2 border-orange-600 text-orange-600 text-center px-8 py-4 rounded-xl hover:bg-orange-50 transition-all font-semibold text-lg flex items-center justify-center gap-2 group"
                >
                  Book This Course for Your Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Bottom Badges */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-white text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                Secure booking
              </div>
              <div className="text-white text-sm">•</div>
              <div className="flex items-center gap-2 text-white text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                Limited availability
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MainSiteFooter variant="light" />
    </div>
  );
}
