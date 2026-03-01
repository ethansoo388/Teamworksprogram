import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { Users, Award, Zap, Target, BookOpen, Lightbulb, ArrowRight, ArrowLeft, Video, MapPin, Check, Rocket, TrendingUp, Calendar, Layers, Clock } from "lucide-react";

const courses = [
  {
    title: "Agile & Scrum 201: For Teams That Need Stronger Execution",
    subtitle: "Designed for teams that want to:",
    duration: "2-Day Intensive",
    color: "from-blue-500 to-cyan-500",
    accentColor: "bg-blue-600",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: Users,
    path: "/jess/nova/agile-scrum.html",
    image: "/assets/img/jess/jess-agile-scrum-201-nova-agile-scrum-for-delivery-teams.webp",
    cardBg: "bg-slate-100",
    ctaColor: "bg-slate-600 hover:bg-slate-700",
    highlights: [
      "Predictable sprint delivery",
      "Clear role accountability",
      "Better backlog prioritization",
      "Effective retrospectives"
    ],
    outcome: "Outcome: Teams ship work faster, with fewer bottlenecks and clearer ownership.",
    description: "Build the foundation for faster, clearer, and more predictable delivery through hands-on Agile and Scrum practices tailored to your team's real business context."
  },
  {
    title: "Design Thinking 201: For Teams That Need Better Problem Definition",
    subtitle: "Designed for teams that want to:",
    duration: "2-Day Intensive",
    color: "from-purple-500 to-pink-500",
    accentColor: "bg-indigo-600",
    lightBg: "bg-indigo-50",
    borderColor: "border-indigo-200",
    icon: Lightbulb,
    path: "/jess/nova/design-thinking.html",
    image: "/assets/img/jess/jess-design-thinking-201-design-thinking-201-professional-training.webp",
    cardBg: "bg-blue-900",
    ctaColor: "bg-blue-800 hover:bg-blue-900",
    highlights: [
      "User-centered problem framing",
      "Rapid prototyping & testing",
      "Cross-functional innovation",
      "Real empathy-driven solutions"
    ],
    outcome: "Outcome: Teams solve the right problems — not just build features.",
    description: "Master the high-stakes framework used by transformation leaders to solve complex problems, align stakeholders, and deliver validated solutions with speed."
  }
];

const outcomes = [
  {
    icon: Award,
    title: "Industry-Recognized Credentials",
    description: "Earn certifications that are respected across the industry and validate your expertise.",
  },
  {
    icon: Zap,
    title: "Hands-On Practice",
    description: "Apply concepts immediately through real-world scenarios and interactive workshops.",
  },
  {
    icon: Target,
    title: "Performance Improvement",
    description: "Learn proven patterns that consistently drive 400%+ productivity gains.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Access to ongoing resources, community support, and advanced training opportunities.",
  },
];

export function TeamLevelTrainingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <style>{`
        .nova-quadrant path { fill: #64748B; transition: fill 0.3s ease; }
        .nova-quadrant image { pointer-events: none; }
        .nova-circle:hover .nova-quadrant path { fill: #CBD5E1; transition: fill 0.3s ease; }
        .nova-q0:hover path { fill: #F59E0B !important; }
        .nova-q1:hover path { fill: #22D3EE !important; }
        .nova-q2:hover path { fill: #3FA9F5 !important; }
        .nova-q3:hover path { fill: #F43F5E !important; }
        .nova-desc h3 { transition: color 0.3s ease; }
        .nova-desc-0:hover h3 { color: #F59E0B; }
        .nova-desc-1:hover h3 { color: #22D3EE; }
        .nova-desc-3:hover h3 { color: #F43F5E; }
      `}</style>
      <MainSiteNavigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 overflow-hidden">
        {/* Back Button - Above Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <a
            href="/jess/index.html"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Main Page</span>
          </a>
        </div>

        {/* Full-Width Hero with Gradient Background */}
        <div className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/img/jess/nova/nova_class.webp"
              alt="Nova Series Hero"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="min-h-[600px] py-20 flex items-center">
              {/* Single Column - Text Content (Left-aligned) */}
              <div className="max-w-6xl">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-8 shadow-lg">
                  Nova Series
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                  Turn Enterprise Teams<br />Into High-Performance Execution Engines
                </h1>

                <div className="w-16 h-1 bg-white mb-8"></div>

                <p className="text-xl sm:text-2xl text-white mb-10 leading-relaxed font-medium">
                  2-day intensive programs designed to improve delivery speed, decision clarity, and cross-functional alignment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contactus.html#contact-form"
                    className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 text-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <span className="relative z-10">Talk to Program Advisor</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurable Business Impact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6 shadow-lg">
                Measurable Business Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                What Enterprise Teams Achieve Through the NOVA Series
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Measurable outcomes from intensive, hands-on training designed for real-world impact
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-center">
              {/* Left Column - 2 Cards */}
              <div className="space-y-16">
                <div
                  className="nova-desc nova-desc-0 cursor-pointer group"
                >
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    2-Day Intensive Bootcamp
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Focused capability-building for intact teams — not theory, not certification fluff.
                  </p>
                </div>

                <div
                  className="nova-desc nova-desc-1 cursor-pointer group"
                >
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    100% Applied Learning
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Teams work on real business scenarios relevant to their industry.
                  </p>
                </div>
              </div>

              {/* Center - Circular Diagram */}
              <div className="flex justify-center">
                <div className="relative w-96 h-96">
                  {/* Circle with 4 quadrants */}
                  <svg viewBox="0 0 200 200" className="nova-circle w-full h-full">
                    {/* Top-Left Quadrant (0 - 2-Day Intensive) - Yellow/Orange */}
                    <g className="nova-quadrant nova-q0 cursor-pointer">
                      <path
                        d="M 100 100 L 20 100 A 80 80 0 0 1 100 20 Z"
                      />
                      <image
                        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E"
                        x="48"
                        y="48"
                        width="28"
                        height="28"
                      />
                    </g>

                    {/* Top-Right Quadrant (3 - Reduced Latency) - Pink/Red */}
                    <g className="nova-quadrant nova-q3 cursor-pointer">
                      <path
                        d="M 100 100 L 100 20 A 80 80 0 0 1 180 100 Z"
                      />
                      <image
                        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E"
                        x="124"
                        y="48"
                        width="28"
                        height="28"
                      />
                    </g>

                    {/* Bottom-Left Quadrant (1 - 100% Applied) - Cyan */}
                    <g className="nova-quadrant nova-q1 cursor-pointer">
                      <path
                        d="M 100 100 L 100 180 A 80 80 0 0 1 20 100 Z"
                      />
                      <image
                        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 2 7 12 12 22 7 12 2'%3E%3C/polygon%3E%3Cpolyline points='2 17 12 22 22 17'%3E%3C/polyline%3E%3Cpolyline points='2 12 12 17 22 12'%3E%3C/polyline%3E%3C/svg%3E"
                        x="48"
                        y="124"
                        width="28"
                        height="28"
                      />
                    </g>

                    {/* Bottom-Right Quadrant (2 - 3X Productivity) - Dark Navy */}
                    <g className="nova-quadrant nova-q2 cursor-pointer">
                      <path
                        d="M 100 100 L 180 100 A 80 80 0 0 1 100 180 Z"
                      />
                      <image
                        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='22 7 13.5 15.5 8.5 10.5 2 17'%3E%3C/polyline%3E%3Cpolyline points='16 7 22 7 22 13'%3E%3C/polyline%3E%3C/svg%3E"
                        x="124"
                        y="124"
                        width="28"
                        height="28"
                      />
                    </g>

                    {/* Center White Circle */}
                    <circle cx="100" cy="100" r="32" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Right Column - 2 Cards */}
              <div className="space-y-16">
                <div
                  className="nova-desc nova-desc-3 cursor-pointer group"
                >
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Reduced Decision Latency
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Faster alignment and clearer execution.
                  </p>
                </div>

                <div
                  className="nova-desc cursor-pointer group"
                >
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Up to 3X Productivity Gains
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    When Agile principles are applied consistently post-training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is NOVA Series Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6 shadow-lg">
                Why NOVA
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Enterprise Team Acceleration Framework
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                NOVA is CI Agile's flagship team-level training program. It's not a traditional certification course — it's a capability accelerator designed to help teams execute better, align faster, and deliver with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Rocket size={48} className="text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Built for Intact Teams
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Private training for your real teams — not public classes. Every exercise is tailored to your industry and context.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Target size={48} className="text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Practical & Hands-On
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Real business simulations. Real tools. Immediate application — no theory overload.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <TrendingUp size={48} className="text-slate-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Proven Business Impact
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Faster delivery cycles. Clearer decisions. Stronger cross-team alignment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Training Approach Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6 shadow-lg">
                How We Deliver Impact
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Execution-Focused Delivery Model
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Built to translate learning into measurable execution outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Delivery Model */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Users size={24} className="text-white" />
                  </div>
                  Delivery Model
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-blue-400/20 rounded mt-1">
                      <Check size={18} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-base text-slate-200">
                      <span className="font-semibold text-white">2-Day Intensive Format:</span> Deep dives, not surface-level overviews
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-blue-400/20 rounded mt-1">
                      <Check size={18} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-base text-slate-200">
                      <span className="font-semibold text-white">Private Enterprise Delivery:</span> Customized for your team's context
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-blue-400/20 rounded mt-1">
                      <Check size={18} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-base text-slate-200">
                      <span className="font-semibold text-white">Flexible Delivery:</span> Onsite, virtual, or hybrid options available
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-blue-400/20 rounded mt-1">
                      <Check size={18} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-base text-slate-200">
                      <span className="font-semibold text-white">Interactive Workshops:</span> Minimal lectures, maximum hands-on practice
                    </p>
                  </li>
                </ul>
              </div>

              {/* Business Outcomes */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-emerald-600 rounded-lg">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  Business Outcomes
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-emerald-400/20 rounded mt-1">
                      <Check size={18} className="text-emerald-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-base text-slate-200">
                      <span className="font-semibold text-white">Faster Delivery Cycles:</span> Teams ship work more predictably
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-emerald-400/20 rounded mt-1">
                      <Check size={18} className="text-emerald-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-base text-slate-200">
                      <span className="font-semibold text-white">Improved Collaboration:</span> Cross-functional alignment without friction
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-emerald-400/20 rounded mt-1">
                      <Check size={18} className="text-emerald-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-base text-slate-200">
                      <span className="font-semibold text-white">Clearer Decision-Making:</span> Reduced bottlenecks and ambiguity
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1 bg-emerald-400/20 rounded mt-1">
                      <Check size={18} className="text-emerald-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-base text-slate-200">
                      <span className="font-semibold text-white">Sustainable Practices:</span> Skills that stick beyond the training
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your NOVA Course Section */}
      <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6 shadow-lg">
                Program Selection Guide
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Which Challenge Is Holding Your Team Back?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
                Choose the right program based on your team's biggest execution gap
              </p>

              {/* Modern Card-Based Selection Guide */}
              <div className="max-w-6xl mx-auto mb-16 space-y-6">
                {/* Card 1 - Agile & Scrum */}
                <div className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Challenge */}
                    <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-500 transition-colors duration-300">
                          <Clock size={28} className="text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">If Your Team Struggles With</h3>
                          <p className="text-lg text-slate-700 font-medium leading-relaxed">
                            Missed deadlines, unclear roles, slow execution
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Right Side - Solution */}
                    <div className="p-8 bg-white border-l-2 border-slate-100 flex items-center">
                      <div className="text-left w-full">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Start With</h3>
                        <p className="text-2xl font-bold text-slate-900">Agile & Scrum 201</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Design Thinking */}
                <div className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Challenge */}
                    <div className="p-8 bg-gradient-to-br from-purple-50 to-white">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-500 transition-colors duration-300">
                          <Lightbulb size={28} className="text-purple-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2">If Your Team Struggles With</h3>
                          <p className="text-lg text-slate-700 font-medium leading-relaxed">
                            Solving the wrong problems, unclear requirements
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Right Side - Solution */}
                    <div className="p-8 bg-white border-l-2 border-slate-100 flex items-center">
                      <div className="text-left w-full">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Start With</h3>
                        <p className="text-2xl font-bold text-slate-900">Design Thinking 201</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Both */}
                <div className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-orange-400 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Challenge */}
                    <div className="p-8 bg-gradient-to-br from-orange-50 to-white">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-100 rounded-xl group-hover:bg-orange-500 transition-colors duration-300">
                          <Zap size={28} className="text-orange-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                        </div>
                        <div className="text-left flex-1">
                          <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">If Your Team Struggles With</h3>
                          <p className="text-lg text-slate-700 font-medium leading-relaxed">
                            Both execution and problem clarity
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Right Side - Solution */}
                    <div className="p-8 bg-white border-l-2 border-slate-100 flex items-center">
                      <div className="text-left w-full">
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Recommended Solution</h3>
                        <p className="text-2xl font-bold text-slate-900">Combine Both Programs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {courses.map((course, index) => {
                return (
                  <div
                    key={course.title}
                    className={`${course.cardBg} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    {/* Course Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Course Content */}
                    <div className={`p-8 ${index === 1 ? 'text-white' : 'text-slate-900'}`}>
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 leading-tight">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-base leading-relaxed mb-8 ${index === 1 ? 'text-white/90' : 'text-slate-700'}`}>
                        {course.description}
                      </p>

                      {/* CTA Button - Bottom Right */}
                      <div className="flex justify-end">
                        <a
                          href={course.path}
                          className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${course.ctaColor} text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg group`}
                        >
                          <span>Learn More</span>
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Private Enterprise Delivery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div>
            {/* Header */}
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white text-sm font-semibold uppercase tracking-wider rounded-full mb-6 shadow-lg">
                Engagement Model
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Private Enterprise Delivery
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                The NOVA Series is delivered exclusively as private training for organizations.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column - What's Included */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <Check size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Each engagement includes:
                  </h3>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group/item">
                    <div className="p-2.5 bg-blue-500/20 rounded-lg mt-1 group-hover/item:bg-blue-500/30 transition-colors duration-300">
                      <Check size={18} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-lg text-slate-200 group-hover/item:text-white transition-colors duration-300">Pre-session alignment call</span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="p-2.5 bg-blue-500/20 rounded-lg mt-1 group-hover/item:bg-blue-500/30 transition-colors duration-300">
                      <Check size={18} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-lg text-slate-200 group-hover/item:text-white transition-colors duration-300">Industry-relevant customization</span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="p-2.5 bg-blue-500/20 rounded-lg mt-1 group-hover/item:bg-blue-500/30 transition-colors duration-300">
                      <Check size={18} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-lg text-slate-200 group-hover/item:text-white transition-colors duration-300">Interactive facilitation</span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="p-2.5 bg-blue-500/20 rounded-lg mt-1 group-hover/item:bg-blue-500/30 transition-colors duration-300">
                      <Check size={18} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-lg text-slate-200 group-hover/item:text-white transition-colors duration-300">Team-based exercises</span>
                  </li>
                </ul>
              </div>

              {/* Right Column - Available Delivery Methods */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-10 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl shadow-lg">
                    <Layers size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Available:
                  </h3>
                </div>
                <ul className="space-y-6">
                  <li className="group/item">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="p-3 bg-emerald-500/20 rounded-xl group-hover/item:bg-emerald-500/30 group-hover/item:scale-110 transition-all duration-300">
                        <MapPin size={24} className="text-emerald-400" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white mb-1">Onsite</p>
                        <p className="text-base text-slate-300">In-person training at your location</p>
                      </div>
                    </div>
                  </li>
                  <li className="group/item">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                      <div className="p-3 bg-cyan-500/20 rounded-xl group-hover/item:bg-cyan-500/30 group-hover/item:scale-110 transition-all duration-300">
                        <Video size={24} className="text-cyan-400" strokeWidth={2.5} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white mb-1">Virtual</p>
                        <p className="text-base text-slate-300">Remote facilitation via video</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Banner - Industry Reassurance */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-12 text-center shadow-2xl">
                <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto font-medium">
                  Designed for teams across industries — from technology to finance, manufacturing, healthcare, and professional services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div>
            {/* Badge */}
            <div className="inline-block mb-8">
              <span className="px-6 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-cyan-500 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-2xl">
                Transform Your Team In 2 Days
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Guessing.<br />Start Executing.
            </h2>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
              Give your team the frameworks that Fortune 500 companies use to ship faster, align better, and deliver with confidence.
            </p>

            {/* Value Props Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Calendar size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white">2-Day Format</h3>
                </div>
                <p className="text-sm text-slate-300">Intensive, hands-on training with immediate application</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-500 rounded-lg">
                    <Target size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Customized</h3>
                </div>
                <p className="text-sm text-slate-300">Tailored to your industry and team context</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="p-2 bg-cyan-500 rounded-lg">
                    <TrendingUp size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Proven Results</h3>
                </div>
                <p className="text-sm text-slate-300">Up to 3X productivity gains for committed teams</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
              <a
                href="/contactus.html#contact-form"
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10">Talk to Program Advisor</span>
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-base"
              >
                <span>Explore the NOVA Courses</span>
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Check size={16} className="text-emerald-400" strokeWidth={2.5} />
                <span>No commitment required</span>
              </div>
              <p className="text-slate-400 text-sm max-w-2xl">
                Trusted by teams across technology, finance, manufacturing, healthcare, and professional services
              </p>
            </div>
          </div>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}
