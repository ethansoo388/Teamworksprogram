import { ArrowRight, Clock, Users, UserCheck, Zap, Lightbulb, CheckCircle, TrendingUp, Wrench, Check, Briefcase, Users2, Target, Rocket, Star, Menu, X } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import highEnergyTeamImage from "@/assets/img/teamworks/ciagile-teamworks-course01-creating-super-teams-hero.webp";
import successfulAgileImage from "@/assets/img/teamworks/ciagile-teamworks-course01-workshop-classroom-activity.webp";

const faqItems = [
  {
    question: "What makes this course different from other team-building workshops?",
    answer: "Unlike traditional workshops that waste your team's time on activities with no business impact, we teach a practical system your team uses from Day 1. No fluff. No motivational speeches. Just tools that work."
  },
  {
    question: "Do we need to attend as an entire team?",
    answer: "While not mandatory, we strongly recommend sending at least 5-10 people who work together regularly. The more team members who participate, the easier it is to implement the system back at your office."
  },
  {
    question: "What's included in the course fee?",
    answer: "The course fee includes a 2-day intensive workshop, all course materials and workbooks, digital toolkit and frameworks, 90-day email support, and alumni community access."
  },
  {
    question: "Is there a maximum team size for this course?",
    answer: "Yes, we cap each session at 30 participants to ensure quality interaction and personalized attention. This allows everyone to participate actively in the exercises and simulations."
  },
  {
    question: "What if the scheduled dates don't work for us?",
    answer: "All our programs are run as private sessions and scheduled around your team's availability. Get in touch with us and we'll plan the sessions at a time that fits your schedule."
  }
];

export function CoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-400 via-purple-600 to-purple-900">
                <Users2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">TEAMWORKS · COURSE 01</div>
                <div className="font-bold text-lg -mt-0.5">Creating Super Teams</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#modules" className="text-sm hover:text-gray-600 transition-colors">Modules</a>
              <a href="#outcomes" className="text-sm hover:text-gray-600 transition-colors">Outcomes</a>
              <a href="#testimonials" className="text-sm hover:text-gray-600 transition-colors">Testimonials</a>
              <a href="#faq" className="text-sm hover:text-gray-600 transition-colors">FAQ</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="/teamworks/bookConsultation.html" className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-all">
                Book This Course for Your Team
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden"
              aria-label="Open menu"
              aria-controls="tw01-mobile-menu"
              data-mobile-toggle
            >
              <span data-icon="open"><Menu className="w-6 h-6" /></span>
              <span data-icon="close" className="hidden"><X className="w-6 h-6" /></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="tw01-mobile-menu" data-mobile-menu className="md:hidden py-6 border-t border-gray-200 hidden" aria-hidden="true">
            <div className="flex flex-col gap-4">
              <a href="#modules" className="text-sm py-2" data-mobile-close>Modules</a>
              <a href="#outcomes" className="text-sm py-2" data-mobile-close>Outcomes</a>
              <a href="#testimonials" className="text-sm py-2" data-mobile-close>Testimonials</a>
              <a href="#faq" className="text-sm py-2" data-mobile-close>FAQ</a>
              <a href="/teamworks/bookConsultation.html" className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm mt-2 text-center" data-mobile-close>
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
            <a href="../index.html" className="hover:text-purple-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/teamworks/index.html" className="hover:text-purple-600 transition-colors">Teamworks</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">Creating Super Teams</span>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Content */}
            <div>
              {/* Course Badge */}
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">TEAMWORKS · FOUNDATIONS</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl lg:text-6xl leading-tight mb-6 tracking-tight">
                Creating Super Teams
                <span className="block text-base lg:text-lg text-gray-600 font-normal italic mt-4 tracking-normal">
                  Your team delivers. Without you chasing them every day.
                </span>
              </h1>

              {/* Description */}
              <div className="text-xl text-gray-600 leading-relaxed mb-8 space-y-4">
                <p>
                  Every month your team stays stuck costs you time, money, and the best people on your team.
                </p>
                
                <p>
                  <span className="font-semibold text-gray-900 italic">Creating Super Teams</span> builds clear ownership and accountability so teams deliver results — without extra meetings or bureaucracy.
                </p>
              </div>

              {/* Course Info Cards */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-3 gap-6">
                  {/* Duration */}
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Duration</div>
                    <div className="font-semibold text-gray-900">2 days</div>
                  </div>
                  
                  {/* Format */}
                  <div className="text-center">
                    <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Format</div>
                    <div className="font-semibold text-gray-900">In-person</div>
                  </div>
                  
                  {/* Capacity */}
                  <div className="text-center">
                    <UserCheck className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Capacity</div>
                    <div className="font-semibold text-gray-900">Max 30</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all group">
                <span className="font-medium">Talk to Us About Your Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-4">Sessions are capped at 30 people. One short conversation — no commitment needed.</p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={highEnergyTeamImage} 
                  alt="Team collaboration workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Struggles Section */}
      <section className="bg-white py-20 lg:py-32" id="outcomes">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Is Your Business Struggling With These?</h2>
            <p className="text-xl text-gray-600">If you're nodding at any of these, your team has a system problem — not a people problem. And it's fixable.</p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">⏱️</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Constant Delays</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Projects that should take days drag into weeks. Deadlines slip, clients notice, and you're the one explaining why.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Broken Communication</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">The right hand doesn't know what the left is doing. Work gets repeated, mistakes get missed, and your team wastes hours fixing things that shouldn't have broken.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">😔</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Demotivated Staff</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Your best people get tired of the chaos and leave. Replacing one good staff member costs more than running this programme.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">🎯</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Lack of Ownership</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">You hired people to run things — not to be followed up every day. But without the right system, you end up doing both.</p>
            </div>
          </div>

          {/* The Payoff Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">
              2 Days. Real Change. Here's What You Get.
            </h2>
            <p className="text-3xl lg:text-4xl text-purple-600 tracking-tight font-bold">The Payoff</p>
          </div>

          {/* Payoff Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For the Boss */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl text-purple-600 mb-6 font-bold">For the Boss:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">Your team handles problems before they become your problem</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">You always know what's happening — without having to ask</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">Work gets done faster, with fewer excuses and fewer surprises</span>
                </li>
              </ul>
            </div>

            {/* For the Team */}
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl text-purple-600 mb-6 font-bold">For the Team:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">Everyone knows their lane — no more overlapping, guessing, or waiting for instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">High performers stay because the work environment is fair, clear, and energising</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">The team feels proud of what they ship — and so do you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How This Programme Works Section */}
      <section className="bg-purple-50 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">How This Programme Works</h2>
            <p className="text-xl text-gray-700 font-medium mb-3">
              No motivational speeches. No trust falls. Just practical tools your team uses from Day 1.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This is a hands-on programme. Your team works through real scenarios — and walks away with a system, not just notes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 flex flex-col items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">Hands-on simulations that surface the exact problems slowing your team down</p>
            </div>
            <div className="bg-white rounded-2xl p-8 flex flex-col items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">Simple tools to make work visible and improve flow</p>
            </div>
            <div className="bg-white rounded-2xl p-8 flex flex-col items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-5">
                <Wrench className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">Practical exercises based on real work scenarios</p>
            </div>
            <div className="bg-white rounded-2xl p-8 flex flex-col items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-5">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">Immediate application — what you learn can be used the next day</p>
            </div>
          </div>
        </div>
      </section>

      {/* A Practical System for Real-World Results Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">A Practical System for Real-World Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop spending your evenings fixing problems your team should have caught. This programme gives your team the system to deliver — consistently, without you holding their hand.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Clear Ownership & Accountability */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Clear Ownership & Accountability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                No more chasing. No more dropped balls. Everyone knows what they own — and they get it done.
              </p>
            </div>

            {/* Stronger Alignment & Focus */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Stronger Alignment & Focus</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your whole team pulls in the same direction. Less wasted effort. Less confusion. More momentum.
              </p>
            </div>

            {/* Better Collaboration with Less Friction */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Better Collaboration with Less Friction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Issues get caught and fixed fast — before they become expensive. Fewer meetings. Less rework. More done.
              </p>
            </div>

            {/* Consistent Results, Less Firefighting */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Consistent Results, Less Firefighting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Delivery becomes predictable. Your managers stop firefighting and start leading. You get your time back.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all group">
              <span className="font-medium">See If This Course Fits Your Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-600 mt-4">A short conversation. No obligation.</p>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="bg-white py-20 lg:py-32" id="modules">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Modules Content */}
            <div>
              {/* Section Header */}
              <div className="mb-12">
                <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Course Modules</h2>
                <p className="text-xl text-gray-600">
                  Most SME teams aren't underperforming because of attitude — they're stuck because of the wrong system. These 4 modules fix that.
                </p>
              </div>

              {/* Modules List */}
              <div className="space-y-6">
                {/* Module 1 */}
                <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3">Module 1: Why Your Team is Busy But Results Are Slow</h3>
                    <p className="text-gray-600 mb-3">See the hidden system problems that slow work down — even when your people are trying their best.</p>
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      <li>Experience how overload slows teams down</li>
                      <li>Understand how unclear priorities create wasted effort</li>
                      <li>Identify bottlenecks and hidden work</li>
                    </ul>
                  </div>
                </div>

                {/* Module 2 */}
                <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3">Module 2: Get Work Moving — Without Adding More People</h3>
                    <p className="text-gray-600 mb-3">Simple changes that remove the blockages and make delivery faster — without hiring or restructuring.</p>
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      <li>Make work visible and aligned</li>
                      <li>Reduce overload and improve workflow</li>
                      <li>Focus on finishing instead of starting more</li>
                    </ul>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3">Module 3: Stop the Back-and-Forth — Make Decisions Stick</h3>
                    <p className="text-gray-600 mb-3">Half your delays come from unclear decisions and ownership. This module fixes that.</p>
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      <li>Improve decision-making speed</li>
                      <li>Strengthen accountability across the team</li>
                      <li>Reduce rework through better alignment</li>
                    </ul>
                  </div>
                </div>

                {/* Module 4 */}
                <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3">Module 4: Build a Team That Doesn't Need You to Hold It Together</h3>
                    <p className="text-gray-600 mb-3">The goal isn't one good week — it's a team that keeps getting better on its own.</p>
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      <li>Run simple routines to stay aligned</li>
                      <li>Surface problems early</li>
                      <li>Continuously improve how the team works</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Images */}
            <div className="relative h-full min-h-[600px]">
              <img 
                src={successfulAgileImage} 
                alt="Team collaboration in workshop"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Who Should Attend</h2>
            <p className="text-xl text-gray-600">This programme is built for SME bosses and their teams — people who are done with chaos and ready to build something that actually works.</p>
          </div>

          {/* Audience Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Team Leaders</h3>
              <p className="text-gray-600 text-sm">
                You're responsible for results but don't control everything. This gives you the tools to lead — not babysit.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Project Managers</h3>
              <p className="text-gray-600 text-sm">
                Professionals responsible for coordinating work and ensuring smooth delivery.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Business Owners</h3>
              <p className="text-gray-600 text-sm">
                You built this business. Now build the team that runs it properly — so you can focus on growing it, not saving it every day.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Operations and Delivery Teams</h3>
              <p className="text-gray-600 text-sm">
                The people who actually do the work deserve a better system. This is it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Participants Say */}
      <section className="bg-white py-20 lg:py-32" id="testimonials">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">What Participants Say</h2>
            <p className="text-xl text-gray-600">Don't take our word for it. Here's what bosses and team leads said after going through the programme.</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic flex-grow">
                "This program changed how we think about work, delivery, and results. Practical, empowering, and immediately applicable to real teams."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">FA</span>
                </div>
                <div>
                  <div className="font-semibold">Farhana Aina Fu'ad</div>
                  <div className="text-sm text-gray-600">Head of Digital Services</div>
                  <div className="text-xs text-gray-500 mt-0.5">Aviation</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic flex-grow">
                "This course provide hands on involvement that helps the participant to learn and visualize quickly"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">TM</span>
                </div>
                <div>
                  <div className="font-semibold">Tham Meng Tat</div>
                  <div className="text-sm text-gray-600">Manager</div>
                  <div className="text-xs text-gray-500 mt-0.5">Government</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic flex-grow">
                "This program helps small teams work faster and smarter, breaking silos, building accountability, and delivering more results without adding headcount."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">NM</span>
                </div>
                <div>
                  <div className="font-semibold">Nazira Mohamed</div>
                  <div className="text-sm text-gray-600">Business Analyst</div>
                  <div className="text-xs text-gray-500 mt-0.5">Education and Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Common Questions</h2>
            <p className="text-base text-gray-600">
              Everything you need to know about Creating Super Teams.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="w-full px-6 py-5 flex items-center justify-between cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-normal text-sm pr-4">{item.question}</span>
                  <svg 
                    className="w-4 h-4 text-gray-400 transition-transform flex-shrink-0 group-open:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="bg-purple-600 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">
              Your team is one programme away from working the way you always wanted.
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              2 days. Real tools. Results you'll see in the first week back. Let's talk about running this for your team.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12">Course Investment</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: What's Included */}
              <div>
                <h3 className="font-semibold text-xl mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-900">2-day intensive workshop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-900">All course materials & workbooks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-900">Digital toolkit & frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-900">90-day email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-900">Alumni community access</span>
                  </li>
                </ul>
              </div>

              {/* Right: Pricing */}
              <div className="bg-purple-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                <div className="text-sm text-gray-600 mb-2">Starting from</div>
                <div className="text-6xl font-bold text-purple-600 mb-2">RM350</div>
                <div className="text-gray-600 mb-4">Per person per day</div>
                <div className="text-sm text-gray-500 mb-4">Calculated based on the class of 30 pax</div>
                <div className="text-purple-600 font-medium">Group discounts available</div>
              </div>
            </div>

            {/* Enroll Button */}
            <div className="mt-12 text-center">
              <a href="/teamworks/bookConsultation.html" className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all font-semibold text-lg group">
                Start Building a High-Performing Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-600 mt-3">
                Talk to us about running this course for your team.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center text-white mt-8">
            <p className="text-lg">
              Questions? Email us at <a href="mailto:romanoff@ciagile.com" className="underline hover:text-purple-200 transition-colors">romanoff@ciagile.com</a>
            </p>
          </div>
        </div>
      </section>

      <MainSiteFooter variant="light" />
    </div>
  );
}