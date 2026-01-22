import { ArrowRight, Clock, Users, UserCheck, Zap, Lightbulb, CheckCircle, TrendingUp, Wrench, Check, Briefcase, Users2, Target, Rocket, Star, ChevronDown } from "lucide-react";
import { NavigationV2 } from "@/app/components/v2/NavigationV2";
import { FooterV2 } from "@/app/components/v2/FooterV2";

export function CoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationV2 />
      
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
            <span>/</span>
            <a href="/#courses" className="hover:text-gray-900 transition-colors">Programs</a>
            <span>/</span>
            <span className="text-gray-900 font-medium">Creating Super Teams</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Content */}
            <div>
              {/* Course Badge */}
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Course 01</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl lg:text-6xl leading-tight mb-6 tracking-tight">
                Creating Super Teams
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Build high-performance teams through our famous Airplane Game and Tornado Challenge. Learn trust, collaboration, and proven team-building methodologies.
              </p>

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
              <a href="/bookConsultation.html" className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all group">
                <span className="font-medium">Book this course</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.postimg.cc/8zQjWkXx/hyper-productive-Asia-teams-discussing-and-standing-doing-activities-smiling-vibrant-colours-with.jpg" 
                  alt="Team collaboration workshop"
                  className="w-full h-full object-cover"
                />
              </div>
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
              This is a 2-Day Masterclass, where you roll up your sleeves, designed to give you a repeatable "operating system" for your team.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Learn by Doing */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Learn by Doing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use fun exercises to show you why work gets stuck and how to un-stick it. You'll participate in simulations that mirror real business challenges.
              </p>
            </div>

            {/* Immediate Application */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Immediate Application</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You won't leave with just a "theory." Everything you learn can be used in the following week.
              </p>
            </div>

            {/* Built for Speed */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Built for Speed</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Learn how to break big, scary goals into small, winnable tasks.
              </p>
            </div>

            {/* Simple Tools */}
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg mb-3">Simple Tools</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You don't need expensive software. You just need a clear way to see who is doing what.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Modules Content */}
            <div>
              {/* Section Header */}
              <div className="mb-12">
                <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Course Modules</h2>
                <p className="text-xl text-gray-600">
                  Four comprehensive modules designed to transform your team's performance from chaos to high-velocity execution.
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
                    <ul className="space-y-2 text-gray-600">
                      <li>• The Foundation of High Performance</li>
                      <li>• Identifying how traditional management slows down businesses</li>
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
                    <ul className="space-y-2 text-gray-600">
                      <li>• Roles, Expectations & Decision Boundaries</li>
                      <li>• Who decides what (and who shouldn't)</li>
                      <li>• Define vision and align teams</li>
                      <li>• Hyper-productive Systems</li>
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
                    <p className="text-gray-600 mb-3">The "Work Packs" Fix: Method (A simple habit for a winning team)</p>
                    <div className="space-y-2 text-gray-600">
                      <p><span className="font-semibold">1. Focus:</span> Pick the most important job and get it done.</p>
                      <p><span className="font-semibold">2. Check:</span> Spot big-spending problems early, not at deadline</p>
                      <p><span className="font-semibold">3. Fix:</span> If it's wrong, fix it now—not 3 months from now when it's too expensive.</p>
                      <p><span className="font-semibold">4. Repeat:</span> Keep the momentum going.</p>
                    </div>
                  </div>
                </div>

                {/* Module 4 */}
                <div className="bg-purple-50 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-3">Module 4: The "1% Sharper" Every time</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Inspect, Improve, Repeat</li>
                      <li>• Continuous Improvement Mindset</li>
                      <li>• Turning mistakes into learning</li>
                      <li>• Building a culture of continuous improvement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Images */}
            <div className="relative h-full min-h-[600px]">
              <img 
                src="https://i.postimg.cc/SQ1hX6rN/Successful-asia-agile-team-doing-work-and-having-fun-in-workshop-activities-classroom-environment.jpg" 
                alt="Team collaboration in workshop"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Struggles Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Is Your Business Struggling With These?</h2>
            <p className="text-xl text-gray-600">If these sound familiar, your current way of working is costing you money.</p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">⏱️</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Constant Delays</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Projects that should take weeks are taking months.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">💬</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Broken Communication</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Things get "lost in translation" between you and your team.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">😔</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Demotivated Staff</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Good people are burnt out because priorities change every day.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">🎯</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Lack of Ownership</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">You feel like you have to micromanage everything just to get it done.</p>
            </div>
          </div>

          {/* The Payoff Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl mb-3 tracking-tight">There Is a Better Way to Work. We'll Guide You.</h2>
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

      {/* Who Should Attend */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Who Should Attend</h2>
            <p className="text-xl text-gray-600">This course is designed for teams and leaders who want to elevate their performance.</p>
          </div>

          {/* Audience Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Team Leaders</h3>
              <p className="text-gray-600 text-sm">
                Department heads and team managers looking to build stronger teams.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Project Managers</h3>
              <p className="text-gray-600 text-sm">
                PMs who need to coordinate cross-functional teams effectively.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Business Owners</h3>
              <p className="text-gray-600 text-sm">
                SME owners wanting to create a high-performance culture.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">HR Professionals</h3>
              <p className="text-gray-600 text-sm">
                HR leaders focused on organizational development and culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Participants Say */}
      <section className="bg-white py-20 lg:py-32">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about Creating Super Teams.</p>
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white border border-gray-200 rounded-2xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                What makes this course different from other team-building workshops?
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Unlike traditional workshops that focus on trust falls and motivational speeches, we teach you a practical system based on Agile and Scrum methodologies. You'll learn frameworks you can implement immediately.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-2xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                Do we need to attend as an entire team?
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                While not mandatory, we strongly recommend sending at least 5-10 people who work together regularly. The more team members who participate, the easier it is to implement the system back at your office.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-2xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                What's included in the course fee?
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The course fee includes a 2-day intensive workshop, all course materials and workbooks, digital toolkit and frameworks, 90-day email support, and alumni community access. We also provide refreshments and meals throughout the workshop.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-2xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                Is there a maximum team size for this course?
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, we cap each session at 30 participants to ensure quality interaction and personalized attention. This allows everyone to participate actively in the exercises and simulations.
              </p>
            </details>

            <details className="bg-white border border-gray-200 rounded-2xl p-6 group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex items-center justify-between">
                What if we can't attend on the scheduled dates?
                <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We run this course multiple times throughout the year. If the current dates don't work for you, contact us and we'll help you find the next available session that fits your schedule.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="bg-purple-600 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">
              Let's Unlock Your <span className="italic">Super Team</span>
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
            <div className="mt-12">
              <a href="/bookConsultation.html" className="block w-full bg-purple-600 text-white text-center px-8 py-4 rounded-xl hover:bg-purple-700 transition-all font-semibold text-lg flex items-center justify-center gap-2 group">
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
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

      <FooterV2 />
    </div>
  );
}