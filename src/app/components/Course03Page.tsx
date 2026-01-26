import { ArrowRight, Menu, X, Eye, Zap, Target, TrendingUp } from "lucide-react";
import { FooterV2 } from "@/app/components/v2/FooterV2";
import { useState } from "react";
import imgImageWithFallback from "figma:asset/c4c6d9eeeebe6650cdc10ae0a9bcac6684ae5dd6.png";
import imgImageWithFallback1 from "figma:asset/ccce80f32ae85f4ef385dd09c5b316f600e5094a.png";
import imgImageWithFallback2 from "figma:asset/09fa8596b9e25fc2415289c627b981364389292f.png";
import imgImageModernOfficeWorkspace from "figma:asset/2d5d0858df8af35125d4387d9c6ce2157063eb05.png";
import imgContainer from "figma:asset/ee206343ea0ca4d20f3d455b1136ba6e57235c34.png";

export function Course03Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-600 to-orange-900">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">TEAMWORKS · COURSE 03</div>
                <div className="font-bold text-lg -mt-0.5">Work Clear. Work Fast.</div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#benefits" className="text-sm hover:text-gray-600 transition-colors">Benefits</a>
              <a href="#modules" className="text-sm hover:text-gray-600 transition-colors">Modules</a>
              <a href="#audience" className="text-sm hover:text-gray-600 transition-colors">Who's It For</a>
              <a href="#faq" className="text-sm hover:text-gray-600 transition-colors">FAQ</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="/bookConsultation.html" className="bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-all">
                Book This Course
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
                <a href="#benefits" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
                <a href="#modules" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Modules</a>
                <a href="#audience" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Who's It For</a>
                <a href="#faq" className="text-sm py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
                <a href="/bookConsultation.html" className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm mt-2 text-center">
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
            <a href="https://www.ciagile.com" className="transition-all" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Home</a>
            <span>/</span>
            <a href="/index.html" className="transition-all" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#EA580C'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Programs</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">Work Clear. Work Fast.</span>
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
                <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-6">
                  <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Course 03</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                  Work Clear. <span className="text-orange-600">Work Fast.</span>
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  A 2-Day hands-on workshop to clear the mess, stop the bottlenecks, improves collaboration and get your team moving at double speed.
                </p>

                {/* Course Info Cards */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Duration */}
                    <div className="text-center">
                      <svg className="w-6 h-6 text-orange-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <div className="text-xs text-gray-600 mb-1">Duration</div>
                      <div className="font-semibold text-gray-900">2 days</div>
                    </div>
                    
                    {/* Format */}
                    <div className="text-center">
                      <svg className="w-6 h-6 text-orange-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                      </svg>
                      <div className="text-xs text-gray-600 mb-1">Format</div>
                      <div className="font-semibold text-gray-900">In-person</div>
                    </div>
                    
                    {/* Capacity */}
                    <div className="text-center">
                      <svg className="w-6 h-6 text-orange-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      <div className="text-xs text-gray-600 mb-1">Capacity</div>
                      <div className="font-semibold text-gray-900">Max 30</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/bookConsultation.html" className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all group">
                  <span className="font-medium">Book this course</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={imgImageModernOfficeWorkspace}
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
                See the work. Remove the friction. <span className="text-orange-600">Deliver faster.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A 2-Day hands-on workshop to clear the mess, stop the bottlenecks, improves collaboration and get your team moving at double speed.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Visualize Everything</h3>
                <p className="text-gray-600 leading-relaxed">
                  See your work in real-time. Understand bottlenecks instantly and make smarter decisions with visual management systems.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cut Cycle Time in Half</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deliver faster without working harder. Learn how to identify and eliminate delays that slow your team down.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Stop Starting, Start Finishing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Focus on completion, not just activity. Limit work-in-progress to accelerate delivery and reduce stress.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">From Chaos to Control</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transform reactive firefighting into predictable flow. Build systems that scale without burning out your team.
                </p>
              </div>
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
                    Learn the simple, visual way to manage your workflow and collaborate with others so you can stop guessing, start hitting your deadlines and achieve success.
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
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>The hidden cost of multitasking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>Why "busy" ≠ productive</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Module 2 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 2: Making Work Visible</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>Seeing problems early instead of firefighting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>One shared view across departments</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Module 3 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 3: Limiting Work In Progress</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>Doing less at the same time = more output</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>Protecting teams from overload</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Module 4 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 4: Managing Dependencies Across Teams</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>How departments can work together without chaos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>Reducing handover delays</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Module 5 */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Module 5: From Chaos to Cadence</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>Simple metrics that actually help</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0"></span>
                          <span>Fixing bottlenecks step by step</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Images */}
              <div className="relative h-full min-h-[700px]">
                <div className="absolute top-0 left-0 w-3/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={imgImageWithFallback}
                    alt="Team collaboration"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-3/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={imgImageWithFallback1}
                    alt="Workshop activity"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-3/5 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={imgImageWithFallback2}
                    alt="Team planning"
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
                <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-4 py-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span>
                  <span className="text-sm font-medium text-orange-900">Target Audience</span>
                </div>

                <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                  Who Is This Course For?
                </h2>

                <p className="text-xl text-gray-600 mb-12">
                  Perfect for SME teams dealing with chaos, delay and the constant feeling of busyness but nothing gets done.
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
                      <p className="text-gray-600">Who need to coordinate workflows across multiple teams and departments.</p>
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
                      <p className="text-gray-600">Struggling with missed deadlines and unclear priorities.</p>
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
                      <p className="text-gray-600">Who want visibility without micromanaging every detail.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Anyone Fed Up With Firefighting</h3>
                      <p className="text-gray-600">And ready for predictable, sustainable workflows.</p>
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
                      <p className="text-lg">Faster delivery cycles with less stress</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Transparency that builds trust and accountability</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">A simple visual system everyone understands</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Better collaboration between departments</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Reduced firefighting and fewer surprises</p>
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
                <h3 className="text-xl font-bold mb-3 text-gray-900">I'm drowning in tasks...</h3>
                <p className="text-gray-600">
                  You're juggling ten things at once, and nothing is actually finished. Every day feels like you're "busy" but you're not making progress.
                </p>
              </div>

              {/* Frustration 2 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Where's the bottleneck?</h3>
                <p className="text-gray-600">
                  Work just piles up. You don't know where it's stuck, who has it, or when it'll actually get done.
                </p>
              </div>

              {/* Frustration 3 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">My team is always firefighting</h3>
                <p className="text-gray-600">
                  Everything is urgent. Deadlines get missed. You only find out about problems when it's too late.
                </p>
              </div>

              {/* Frustration 4 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Coordination is a nightmare</h3>
                <p className="text-gray-600">
                  Different teams use different systems. Handoffs fail. Nobody has a clear view of what's really happening.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* By the end / Outcomes Section */}
        <section className="bg-gray-50 py-20 lg:py-32">
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
                    <p className="text-gray-700">A Kanban board system customized for your actual work</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Clear WIP limits that prevent overload</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Metrics that show where you're actually stuck</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Faster delivery without adding headcount</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">A shared language your whole team can use</p>
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
                    <p className="text-gray-700">Deliver 30–50% faster</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Cut firefighting in half</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Know exactly where work is stuck</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Reduce team burnout and overtime</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Hit deadlines consistently</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Build trust across departments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What SME Teams Say Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
                What SME Teams Say
              </h2>
              <p className="text-lg text-gray-600">
                Real results from teams who stopped firefighting and started flowing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                  "Very clear and concise course, applicable for current working scope."
                </p>
                
                {/* Metric Box */}
                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-orange-600 mb-0.5">60% fewer</div>
                  <div className="text-sm text-gray-700">status meetings</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">HM</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Handito Muhammad</div>
                    <div className="text-sm text-gray-600">Team Leader</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                  "Can achieve adaptive solutions to complex problems by applying the knowledge learned."
                </p>
                
                {/* Metric Box */}
                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-orange-600 mb-0.5">2x output</div>
                  <div className="text-sm text-gray-700">in 8 weeks</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">BP</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Bayu Pradiyansyah</div>
                    <div className="text-sm text-gray-600">Product Team</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                  "This course has given me a clearer understanding of the values and understanding how a team should operate."
                </p>
                
                {/* Metric Box */}
                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4 mb-6">
                  <div className="text-2xl font-bold text-orange-600 mb-0.5">94%</div>
                  <div className="text-sm text-gray-700">on-time delivery</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">AC</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Arvind Chandran</div>
                    <div className="text-sm text-gray-600">Business Analyst</div>
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
              <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-sm font-medium">
                <span className="text-orange-500">✦</span>
                FAQ
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Your Questions Answered</h2>
              <p className="text-base text-gray-600">
                Common concerns about adopting operational excellence in SMEs.
              </p>
            </div>

            <div className="space-y-4">
              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  Is this just theory or will we get practical tools?
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  This is a hands-on workshop where you'll build a custom system for your own team, complete with visual boards, flow metrics, and a clear 'battle plan' to stop the firefighting and start delivering faster as soon!
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  Our business is too small for 'operational excellence.' True?
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  No. Small teams benefit the most—you can't afford waste. Operational excellence means less chaos, faster delivery, and happier clients. That's good for any business.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  Will this add bureaucracy and slow us down?
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  The opposite. We help you eliminate unnecessary steps and make work visible so you move faster, not slower.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  How long does it take to see results?
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 text-base leading-relaxed">
                  Most teams see improvements in 2-4 weeks. You'll leave Day 2 with a working system and start seeing bottlenecks immediately.
                </p>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl p-6 group hover:border-orange-500 transition-colors open:border-orange-500">
                <summary className="font-medium text-base cursor-pointer list-none flex items-center justify-between text-gray-900">
                  Do we need to hire consultants to implement this?
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                Limited Seats Available
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center text-white mb-4">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Work Clear,<br />Work Fast?
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto">
              Eliminate waste. Accelerate delivery. Transform your workflow with world-class frameworks.
            </p>

            {/* Pricing Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Pricing */}
                <div>
                  <div className="text-orange-600 text-sm font-medium mb-2">+ Early Bird Pricing</div>
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
                      <span className="text-gray-700">2-day intensive workshop</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Operations toolkit & templates</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Value stream mapping tools</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Post-workshop support & resources</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <a 
                  href="/bookConsultation.html" 
                  className="block w-full bg-white border-2 border-orange-600 text-orange-600 text-center px-8 py-4 rounded-xl hover:bg-orange-50 transition-all font-semibold text-lg flex items-center justify-center gap-2 group"
                >
                  Book This Course
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
      <FooterV2 />
    </div>
  );
}
