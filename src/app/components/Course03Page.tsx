import { ArrowRight, Menu, X, Eye, Zap, Target, TrendingUp, Clock, Users, UserCheck } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import heroImage from "@/assets/img/teamworks/ciagile-teamworks-course03-critical-thinking-hero.webp";
import moduleImage1 from "@/assets/img/teamworks/ciagile-teamworks-course03-module01-kanban.webp";
import moduleImage2 from "@/assets/img/teamworks/ciagile-teamworks-course03-module02-better-communication.webp";
import moduleImage3 from "@/assets/img/teamworks/ciagile-teamworks-course03-module03-make-work-visible.webp";

export function Course03Page() {

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
                <div className="font-bold text-base text-gray-900 -mt-0.5">Critical Thinking for Maximum Business Profitability</div>
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
              type="button"
              className="md:hidden"
              aria-label="Open menu"
              aria-controls="tw03-mobile-menu"
              data-mobile-toggle
            >
              <span data-icon="open"><Menu className="w-6 h-6" /></span>
              <span data-icon="close" className="hidden"><X className="w-6 h-6" /></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="tw03-mobile-menu" data-mobile-menu className="md:hidden py-6 border-t border-gray-200 hidden" aria-hidden="true">
            <div className="flex flex-col gap-4">
              <a href="#modules" className="text-sm py-2" data-mobile-close>Modules</a>
              <a href="#outcomes" className="text-sm py-2" data-mobile-close>Outcomes</a>
              <a href="#faq" className="text-sm py-2" data-mobile-close>FAQ</a>
              <a href="/teamworks/bookConsultation.html" className="bg-orange-600 text-white px-6 py-3 rounded-full text-sm mt-2 text-center" data-mobile-close>
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
            <a href="../index.html" className="hover:text-orange-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/teamworks/index.html" className="hover:text-orange-600 transition-colors">Teamworks</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">Critical Thinking for Maximum Business Profitability</span>
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
                <h1 className="text-5xl lg:text-5xl xl:text-7xl font-bold leading-tight mb-6 tracking-tight">
                  Critical Thinking for <span className="text-orange-600">Maximum Business Profitability</span>
                </h1>

                {/* Sub-tagline */}
                <p className="text-base lg:text-lg italic text-gray-600 mb-6">
                  Train your team to see problems clearly, question assumptions, and make better decisions at work.
                </p>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  <strong>Stop losing margins to avoidable mistakes.</strong><br />
                  Equip your team with the <strong>2-day framework</strong> to identify root causes, eliminate "analysis paralysis," and drive measurable ROI through sharper decision-making.
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
                  <span className="font-medium">Book This Course For Your Team</span>
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

        {/* Stop These Daily Frustrations Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                Is Your Company Being Held Back by These Hidden Costs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't let inefficiency block your growth. Recognize these daily business drains?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Frustration 1 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Management Overload</h3>
                <p className="text-gray-600">
                  Teams rely on you for decisions on routine tasks, preventing you from scaling the business.
                </p>
              </div>

              {/* Frustration 2 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">The "Error-Prone" Loop</h3>
                <p className="text-gray-600">
                  Recurring, avoidable mistakes that drain time and erode your profit margins.
                </p>
              </div>

              {/* Frustration 3 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Analysis Paralysis</h3>
                <p className="text-gray-600">
                  Critical discussions become endless circular meetings with zero clear outcomes.
                </p>
              </div>

              {/* Frustration 4 */}
              <div className="border-2 border-red-200 rounded-2xl p-8 bg-red-50/50">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Lack of Initiative</h3>
                <p className="text-gray-600">
                  Staff wait for instructions instead of taking ownership when facing a problem.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl group">
                Solve These Problems with Your Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section - "See the work. Remove the friction." */}
        <section id="benefits" className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
                See the Work. Remove the Friction.<br />
                <span className="text-orange-600">Maximize the Profit.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most business waste is invisible. This 2-day workshop gives your team a visual framework to identify bottlenecks and stop "guessing" at solutions.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Make Profit Leaks Visible (Observe)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Make dependencies and hidden work visible so your team can reason together. Stop wasting time on "shadow tasks" that don't add value to your bottom line.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Uncover Missing Information (Orient)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Use practical questioning techniques to uncover missing information, weak assumptions, and hidden issues.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Compare &amp; Weigh Trade-offs (Decide)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stop the circular arguments. Teach your team to compare possible responses logically, weighing the cost vs. the gain before they spend company resources.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 185, 0) 0%, rgb(255, 105, 0) 100%)" }}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Continuous ROI Improvement (Act)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Turn clearer thinking into practical action. We don't just "do" — we reflect and refine, ensuring the next round of decision-making is even more profitable than the last.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl group">
                See If This Course Fits Your Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                A short conversation. No obligation.
              </p>
            </div>
          </div>
        </section>

        {/* Course Modules Section */}
        <section id="modules" className="bg-white py-16 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="mb-10 lg:mb-14">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">A Practical Roadmap to Sharper Business Decisions</h2>
              <p className="text-xl text-gray-600">
                We teach a simple, visual way to improve thinking quality so your team chooses better actions and delivers consistent results.
              </p>
            </div>

            {/* Mobile only: 3-col image strip — between header and module list */}
            <div className="lg:hidden mb-10 grid grid-cols-3 gap-3">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-square">
                <img src={moduleImage1} alt="Visual thinking tools" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-square">
                <img src={moduleImage2} alt="Collaborative decisions" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm aspect-square">
                <img src={moduleImage3} alt="Bottleneck identification" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 2-col layout: module list left, image stack right */}
            <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16">
              {/* Left: Module List */}
              <div>
                {/* Module 1 */}
                <div className="py-7 border-b border-gray-100">
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Module 1</span>
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900">Clear Sight — Eliminating Rushed Judgment</h3>
                  <p className="text-gray-600">
                    Learn to slow down when the stakes are high. Separate facts from assumptions and make the workflow visible so problems can be examined properly before they become costly.
                  </p>
                </div>

                {/* Module 2 */}
                <div className="py-7 border-b border-gray-100">
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Module 2</span>
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900">Better Judgment — Filtering Out Bias</h3>
                  <p className="text-gray-600">
                    Understand how context and incomplete information lead to bad choices. Train your staff to interpret complex business situations more carefully to avoid "expensive mistakes."
                  </p>
                </div>

                {/* Module 3 */}
                <div className="py-7 border-b border-gray-100">
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Module 3</span>
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900">Flow Mastery — Removing Profit Bottlenecks</h3>
                  <p className="text-gray-600">
                    Use structured observation and visual tools to identify delays and recurring workflow problems. Find exactly where your business is losing time and money.
                  </p>
                </div>

                {/* Module 4 */}
                <div className="py-7 border-b border-gray-100">
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Module 4</span>
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900">Decisive Action — Proposing Logic-Backed Changes</h3>
                  <p className="text-gray-600">
                    Move from "firefighting" to Kaizen thinking. Your staff will learn to identify waste and propose changes backed by logic and data that management can actually approve.
                  </p>
                </div>

                {/* Module 5 */}
                <div className="py-7">
                  <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Module 5</span>
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-gray-900">The Loop — Reflect, Refine, and Scale</h3>
                  <p className="text-gray-600">
                    Turn clearer thinking into a repeatable habit. Review outcomes and refine decisions over time, building a culture of continuous learning that scales with your business growth.
                  </p>
                </div>
              </div>

              {/* Right: Image stack — desktop only, evenly distributed to match left column height */}
              <div className="hidden lg:flex flex-col justify-between">
                <div className="group">
                  <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-gray-900/5 aspect-[16/9]">
                    <img src={moduleImage1} alt="Visual thinking tools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="mt-2 text-xs text-gray-400 font-medium uppercase tracking-wide pl-1">Modules 1–2 · Visual thinking tools</p>
                </div>
                <div className="group">
                  <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-gray-900/5 aspect-[16/9]">
                    <img src={moduleImage2} alt="Collaborative decisions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="mt-2 text-xs text-gray-400 font-medium uppercase tracking-wide pl-1">Modules 2–3 · Collaborative decisions</p>
                </div>
                <div className="group">
                  <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-gray-900/5 aspect-[16/9]">
                    <img src={moduleImage3} alt="Bottleneck identification" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="mt-2 text-xs text-gray-400 font-medium uppercase tracking-wide pl-1">Modules 3–4 · Bottleneck identification</p>
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
                  Tailored for Teams Fighting "Daily Chaos"
                </h2>

                <p className="text-xl text-gray-600 mb-12">
                  If your team is struggling with unclear priorities and decision fatigue, this private workshop is their reset button.
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
                      <p className="text-gray-600">Stop juggling urgent requests and start making decisions based on clear, logical priorities.</p>
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
                      <p className="text-gray-600">Equip your busy team with a repeatable way to think through trade-offs without getting "stuck."</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Business Owners (The Boss)</h3>
                      <p className="text-gray-600">Get faster execution and fewer costly mistakes — finally lead a team that doesn't need micromanaging.</p>
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
                      <p className="text-gray-600">Fix broken handoffs and "hidden" dependencies that nobody can currently explain.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: What You'll Achieve Box */}
              <div>
                <div className="bg-orange-600 rounded-3xl p-8 lg:p-12 text-white h-full flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-8">What Your Business Achieves</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Clearer decisions even when the pressure is high.</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Explicit priorities that the whole team actually agrees on.</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Evidence-based bottlenecks identified without playing the "blame game."</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Increased throughput: Less mental overload and more finished work.</p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg">Predictable growth through small, measured, and profitable improvements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* By the end / Outcomes Section */}
        <section id="outcomes" className="bg-white py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: By the end of this 2-day course */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">
                  By the end of this 2-day private class, your team walks away with:
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">A practical, battle-tested framework for critical thinking in a fast-paced SME environment.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">The <strong>Observe — Orient — Decide — Act (OODA)</strong> method for rapid daily decision-making.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Proven techniques to expose hidden bottlenecks and choose the "next best step" for profit.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">A customized improvement plan with clear measures to validate your ROI.</p>
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
                    <p className="text-gray-700">Smoother Workflow: Better thinking habits lead to fewer operational "hiccups."</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Reduced Delays: Eliminate the "wait time" caused by unexamined assumptions.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Balanced Workload: Focused, reasoned action reduces team burnout and overload.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">Disciplined Judgment: A team that analyses evidence before spending your company's budget.</p>
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
                  Zero fluff. This is a "working" session. We use your current business bottlenecks as the case studies. Your team will walk away with a visual toolkit they can apply the very next morning to identify waste and improve margins.
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
                  Absolutely. In fact, it's critical for growing SMEs. As you scale, you can no longer micromanage every decision. This course gives your team the autonomy to think like owners, ensuring the business stays profitable as it gets more complex.
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
                  It does the opposite. Most "slowness" in SMEs comes from circular meetings and fixing mistakes. Our framework (OODA) is designed for speed. It helps your team skip the confusion and move straight to the most profitable "next best step."
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
                  You will see a shift in communication immediately. By the end of Day 2, your team will have identified at least one hidden bottleneck in your current workflow. Most teams see a reduction in "re-work" and project delays within the first 30 days.
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
                  No. The goal of this private class is to build <strong>internal capability</strong>. We give your team the simple, visual tools they need to maintain and improve their own processes long after the workshop is over.
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
                Ready to Drive Maximum Business Profitability?
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto italic">
              Give your team the framework to stop wasting resources, prioritize high-value work, and deliver measurable ROI.
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
                      <span className="text-gray-700">2-day practical, hands-on workshop focused on your specific business bottlenecks.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">The Profitability Toolkit & Templates tailored to your team's daily workflow.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Value visualisation & mapping tools to identify and eliminate operational waste.</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">Executive Reference Materials for sustained decision-making excellence.</span>
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
                  Secure This Private Class for Your Team
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
