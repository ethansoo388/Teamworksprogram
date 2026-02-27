import { ArrowRight, Clock, Users, UserCheck, Zap, Lightbulb, CheckCircle, TrendingUp, Wrench, Check, Briefcase, Users2, Target, Rocket, Star, Menu } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import highEnergyTeamImage from "@/assets/img/teamworks/ciagile-teamworks-course01-creating-super-teams-hero.webp";
import successfulAgileImage from "@/assets/img/teamworks/ciagile-teamworks-course01-workshop-classroom-activity.webp";

const faqItems = [
  {
    question: "What makes this course different from other team-building workshops?",
    answer: "Unlike traditional workshops that focus on trust falls and motivational speeches, we teach you a practical system based on Agile and Scrum methodologies. You'll learn frameworks you can implement immediately."
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
              id="mobile-menu-btn"
              className="md:hidden"
              aria-label="Open menu"
              type="button"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="md:hidden py-6 border-t border-gray-200 hidden">
            <div className="flex flex-col gap-4">
              <a href="#modules" className="text-sm py-2">Modules</a>
              <a href="#outcomes" className="text-sm py-2">Outcomes</a>
              <a href="#testimonials" className="text-sm py-2">Testimonials</a>
              <a href="#faq" className="text-sm py-2">FAQ</a>
              <a href="/teamworks/bookConsultation.html" className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm mt-2 text-center">
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
                  Turn everyday teams into aligned, accountable teams that deliver results.
                </span>
              </h1>

              {/* Description */}
              <div className="text-xl text-gray-600 leading-relaxed mb-8 space-y-4">
                <p>
                  When teams aren't aligned, work slows down and leaders end up firefighting.
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
            <p className="text-xl text-gray-600">If these sound familiar, the way your team is currently working is costing you time, money, and momentum.</p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">⏱️</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Constant Delays</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Projects that should take weeks keep dragging into months because teams aren't aligned on priorities.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Broken Communication</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Important details get lost between leaders and teams, causing misunderstandings and rework.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">😔</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Demotivated Staff</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Good people feel frustrated and burned out when priorities keep changing and nothing sticks.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">🎯</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Lack of Ownership</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">You end up micromanaging everything because no one is truly accountable for results.</p>
            </div>
          </div>

          {/* The Payoff Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">
              There Is a Better Way to Work. We'll Guide You.
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
                  <span className="text-gray-700 leading-relaxed">Teams that solve problems before they reach your desk.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">Total visibility without the need to micromanage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">Faster delivery cycles and zero handoff errors.</span>
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
                  <span className="text-gray-700 leading-relaxed">Clear roles and zero "guessing" what the priority is.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">A culture of excellence where high performers actually want to stay.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">The satisfaction of actually shipping great work on time.</span>
                </li>
              </ul>
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
              This course focuses on changing how teams work day to day — so results improve without adding more meetings, tools, or complexity.
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
                Teams know exactly who owns what. Less chasing, fewer dropped balls, and stronger follow-through.
              </p>
            </div>

            {/* Stronger Alignment & Focus */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Stronger Alignment & Focus</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Everyone understands priorities and works toward the same goals, reducing confusion and misalignment.
              </p>
            </div>

            {/* Better Collaboration with Less Friction */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Better Collaboration with Less Friction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teams work together effectively without extra meetings, resolving issues faster and avoiding rework.
              </p>
            </div>

            {/* Consistent Results, Less Firefighting */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Consistent Results, Less Firefighting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Work flows more smoothly, delivery becomes predictable, and managers spend less time fixing problems.
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
                  Four comprehensive modules designed to transform how teams work — from confusion and delays to clear ownership and consistent delivery.
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
                    <h3 className="text-xl mb-3">Module 1: The Cost of Chaos</h3>
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      <li>Why teams struggle to perform consistently</li>
                      <li>Identify how unclear ownership and traditional management practices slow teams down and create hidden business costs</li>
                    </ul>
                  </div>
                </div>

                {/* Module 2 */}
                <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3">Module 2: The New Team Contract</h3>
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      <li>Clear roles, expectations, and decision boundaries</li>
                      <li>Who decides what — and who shouldn't</li>
                      <li>Align teams around a shared vision and priorities</li>
                      <li>Build systems that enable teams to operate productively without constant escalation</li>
                    </ul>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3">Module 3: Effective Delivery</h3>
                    <p className="text-gray-600 mb-3">The "Work Packs" Fix — a simple habit used by high-performing teams</p>
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      <li><span className="font-semibold">Focus</span> — Pick the most important work and get it done without distraction</li>
                      <li><span className="font-semibold">Check</span> — Spot risks and issues early, not at the last minute</li>
                      <li><span className="font-semibold">Fix</span> — If it's wrong, fix it now—not 3 months from now when it's too expensive</li>
                      <li><span className="font-semibold">Repeat</span> — Keep the momentum going</li>
                    </ul>
                  </div>
                </div>

                {/* Module 4 */}
                <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3">Module 4: Sustaining High Performance</h3>
                    <ul className="space-y-2 text-gray-600 list-disc pl-5">
                      <li>Turn teamwork behaviours into daily habits</li>
                      <li>Create simple rhythms that keep teams aligned and accountable</li>
                      <li>Ensure results remain consistent even as priorities change</li>
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
            <p className="text-xl text-gray-600">This course is designed for leaders and teams who want stronger ownership, better alignment, and more consistent results.</p>
          </div>

          {/* Audience Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Team Leaders</h3>
              <p className="text-gray-600 text-sm">
                Department heads and team leads who want aligned teams that take ownership and deliver without constant follow-up.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Project Managers</h3>
              <p className="text-gray-600 text-sm">
                PMs responsible for coordinating cross-functional teams and keeping work moving without delays and confusion.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Business Owners</h3>
              <p className="text-gray-600 text-sm">
                SME owners who want teams that execute reliably, reduce firefighting, and free leaders to focus on growth.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">HR Professionals</h3>
              <p className="text-gray-600 text-sm">
                HR leaders focused on building accountable teams, improving collaboration, and strengthening performance culture.
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
            <p className="text-xl text-gray-600">Real feedback from leaders who've transformed their teams.</p>
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
              There Is a Better Way to Work. We'll Guide You.
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              Click enroll now and transform your team's performance in just 2 days.
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