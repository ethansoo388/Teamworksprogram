import { ArrowRight, Lightbulb, PiggyBank, Trophy, Rocket, AlertCircle, Users, Target, Zap, Star, Clock, UserCheck, Menu, X } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import moduleGraphicImage from "@/assets/img/teamworks/ciagile-teamworks-course05-ai-skills-designer-desk.webp";
import productDesignImage from "@/assets/img/teamworks/ciagile-teamworks-course02-product-design-customer-experience.webp";
import professionalWomanImage from "@/assets/img/teamworks/ciagile-teamworks-course04-root-cause-thinking.webp";
import teamBuildingImage from "@/assets/img/teamworks/ciagile-teamworks-team-building-outdoor-collaboration.webp";
import teamIdeasBrainstormImage from "@/assets/img/teamworks/ciagile-teamworks-course02-design-thinking-brainstorming.webp";
import teamIdeasGroupImage from "@/assets/img/teamworks/ciagile-teamworks-course04-lean-problem-solving-group-discussion.webp";

const testimonials = [
  {
    quote: "A high-energy course that combines engaging activities with real-project application, so teams can immediately apply what they learn to create products customers love.",
    name: "Fatin Liana",
    role: "Product Team",
    rating: 5
  },
  {
    quote: "What I found valuable was the clear methodology, hands-on activities, and practical adoption strategy that directly impacted how we shape and improve our product.",
    name: "Nik Abbas Zawawi",
    role: "Product Design",
    rating: 4
  },
  {
    quote: "The course reinforced key concepts through engaging activities that had a clear, practical impact on our product delivery.",
    name: "Yeoh Ying Shan",
    role: "Product Executive",
    rating: 5
  }
];

const faqItems = [
  {
    question: "Will this work for non-tech or service businesses?",
    answer: "Absolutely. This approach works for any product, service, or process — physical, digital, or hybrid. Retail, operations, professional services — all covered."
  },
  {
    question: "What tools or software do we use?",
    answer: "We use simple, accessible tools like paper prototypes, Figma basics, and collaboration frameworks. No expensive software required."
  },
  {
    question: "How hands-on is this workshop?",
    answer: "Very hands-on! 70% practical exercises and real case studies. You'll leave with actionable frameworks and templates."
  },
  {
    question: "What will we walk away with after the workshop?",
    answer: "Your team will leave with clearer priorities, shared understanding, and practical actions you can apply immediately. The goal is tangible progress, not just new ideas."
  },
  {
    question: "Is this practical for real SME teams?",
    answer: "Yes. The course is designed specifically for SMEs and focuses on real constraints like limited time, resources, and fast decision-making."
  }
];

export function Course02Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-500 via-pink-600 to-fuchsia-600">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">TEAMWORKS · COURSE 02</div>
                <div className="font-bold text-lg -mt-0.5">Build What Customers Want</div>
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
              <a href="/teamworks/bookConsultation.html" className="text-white px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-all" style={{ backgroundColor: '#E91E8C' }}>
                Book This Course for Your Team
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden"
              aria-label="Open menu"
              aria-controls="tw02-mobile-menu"
              data-mobile-toggle
            >
              <span data-icon="open"><Menu className="w-6 h-6" /></span>
              <span data-icon="close" className="hidden"><X className="w-6 h-6" /></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="tw02-mobile-menu" data-mobile-menu className="md:hidden py-6 border-t border-gray-200 hidden" aria-hidden="true">
            <div className="flex flex-col gap-4">
              <a href="#modules" className="text-sm py-2" data-mobile-close>Modules</a>
              <a href="#outcomes" className="text-sm py-2" data-mobile-close>Outcomes</a>
              <a href="#testimonials" className="text-sm py-2" data-mobile-close>Testimonials</a>
              <a href="#faq" className="text-sm py-2" data-mobile-close>FAQ</a>
              <a href="/teamworks/bookConsultation.html" className="text-white px-6 py-3 rounded-full text-sm mt-2 text-center" style={{ backgroundColor: '#E91E8C' }} data-mobile-close>
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
            <a href="../index.html" className="hover:text-pink-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/teamworks/index.html" className="hover:text-pink-600 transition-colors">Teamworks</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">Build What Customers Want</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full mb-8 text-sm">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>TEAMWORKS · CUSTOMER</span>
              </div>

              <h1 className="text-4xl lg:text-7xl leading-[1.1] mb-6 tracking-tight">
                Build What Your<br /><span style={{ color: '#E91E8C' }}>Customers Want</span>
              </h1>

              <p className="text-lg text-gray-600 italic mb-6">
                When sales are slow and customers keep complaining, the root cause is almost always the same — your team is building what they <em>think</em> customers want, not what customers <em>actually</em> need.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-4 max-w-lg">
                Most SME teams don't have a customer problem. They have a customer-<strong className="font-semibold">understanding</strong> problem. They guess, launch, and hope. When it doesn't work, they rebuild and hope again.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                <strong className="font-semibold">Build What Customers Want</strong> gives your team a repeatable method to find out what customers truly need — and build the right thing, right the first time.
              </p>

              {/* Course Info Cards */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-6">
                  {/* Duration */}
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Duration</div>
                    <div className="font-semibold text-gray-900">2 days</div>
                  </div>
                  
                  {/* Format */}
                  <div className="text-center">
                    <Users className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Format</div>
                    <div className="font-semibold text-gray-900">In-person</div>
                  </div>
                  
                  {/* Capacity */}
                  <div className="text-center">
                    <UserCheck className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Capacity</div>
                    <div className="font-semibold text-gray-900">Max 30</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full hover:opacity-90 transition-all group" style={{ backgroundColor: '#E91E8C' }}>
                <span className="font-medium">Talk to Us About Your Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-4">Every month your team builds something customers don't choose is budget you won't recover. The sooner they have this method, the sooner that stops.</p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={professionalWomanImage} 
                  alt="Design thinking workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is Your Business Facing These? Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Is Your Business Facing These?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">If any of these sound like your business right now, the problem isn't your team's effort. It's the method. This course fixes that.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">📉</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Your Product Isn't Selling the Way It Should</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">You've invested time and money building it. But sales are lower than expected — and you're not sure why customers aren't choosing you.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">😤</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Customers Are Unhappy With What They Received</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Complaints, refund requests, poor reviews. Customers expected something different from what you delivered — and the gap keeps widening.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">🔁</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Your Team Keeps Building Things That Don't Land</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">You launch. Customers don't respond. You rebuild. It happens again. The cycle is expensive and demoralising — because the real customer need was never properly understood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stop Guessing. Start Solving Section */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">Stop Guessing. Start Solving.</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              A practical, step-by-step approach to understanding customers, testing ideas cheaply, and designing solutions you can sell — without wasting months on the wrong direction.
            </p>
            <p className="text-xl text-gray-600">
              Move from gut-feel decisions to clear, evidence-based choices — so your team stops burning budget on the wrong things.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Think Differently */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E91E8C' }}>
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Think Differently</h3>
              <p className="text-gray-600 leading-relaxed">
                Stop relying on opinions — decide based on what real customers tell you.
              </p>
            </div>

            {/* Save Time & Rework */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E91E8C' }}>
                <PiggyBank className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Time & Rework</h3>
              <p className="text-gray-600 leading-relaxed">
                Catch bad ideas early — before they cost you time, money, and team morale.
              </p>
            </div>

            {/* Design What Customers Want */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E91E8C' }}>
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Design What Customers Want</h3>
              <p className="text-gray-600 leading-relaxed">
                Build solutions based on real needs — not internal assumptions or wishful thinking.
              </p>
            </div>

            {/* From Good Ideas to Market Fit */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E91E8C' }}>
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">From Ideas to Market Fit</h3>
              <p className="text-gray-600 leading-relaxed">
                Turn customer insights into products and services people pay for.
              </p>
            </div>
          </div>

          {/* Mid-section CTA */}
          <div className="text-center mt-12">
            <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors text-lg font-medium">
              <span>See If This Course Fits Your Team</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section id="modules" className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 tracking-tight">Course Modules</h2>
            <p className="text-xl text-gray-600">
              Five focused modules. Real exercises. Practical tools your team applies immediately — no theory overload.
            </p>
          </div>

          {/* Modules List */}
          <div className="space-y-6">
            {/* Module 1 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img 
                    src={productDesignImage} 
                    alt="Understanding Real Customer Problems"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 1
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4">Identify the Right Customer Problems</h3>
                  <p className="text-gray-600 mb-4">Stop building the wrong things — understand what customers actually need before you waste time and money on it.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Uncover real customer needs through structured conversations</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Identify the problems that are truly worth solving</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Turn insights into clear, actionable problem definitions your team can act on</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="grid lg:grid-cols-[1fr_300px] gap-0">
                <div className="p-8 lg:p-10 order-2 lg:order-1">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 2
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4">Find Where You're Losing Customers</h3>
                  <p className="text-gray-600 mb-4">Every drop-off is lost revenue. See exactly where your customer experience breaks — and fix it.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Map the customer journey across key touchpoints</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Identify friction points that cause drop-offs or dissatisfaction</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Pinpoint where and why customers disengage — so you know exactly what to fix first</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
                  <img 
                    src={teamIdeasBrainstormImage} 
                    alt="Mapping the Customer Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img 
                    src={teamIdeasGroupImage} 
                    alt="Turning Insights into Better Ideas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 3
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4">Turn Customer Pain into Valuable Solutions</h3>
                  <p className="text-gray-600 mb-4">Stop guessing what to build. Use customer pain points to generate solutions people will actually pay for.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Translate insights into clear problem statements your team agrees on</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Generate focused ideas that solve real customer pain — not internal wish lists</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Prioritize solutions by business impact — not loudest opinion in the room</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="grid lg:grid-cols-[1fr_300px] gap-0">
                <div className="p-8 lg:p-10 order-2 lg:order-1">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 4
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4">Validate Before You Commit</h3>
                  <p className="text-gray-600 mb-4">Don't spend months building something customers don't want. Test and validate ideas before committing real budget.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Build simple, low-cost prototypes to test ideas quickly</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Gather real customer feedback — not opinions from the office</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Validate and refine ideas using evidence — before writing a single line of code or brief</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
                  <img 
                    src={moduleGraphicImage} 
                    alt="Testing Before Committing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img 
                    src={teamBuildingImage} 
                    alt="From Idea to Action"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 5
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-4">From Insight to Execution</h3>
                  <p className="text-gray-600 mb-4">Leave with a clear execution plan — not just another list of ideas gathering dust.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Translate validated ideas into a clear, prioritized action plan</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Align your team around what to build next — and why it matters to customers</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Set success metrics so you know when the solution is working — and when to pivot</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For & What You'll Achieve - Side by Side */}
      <section id="outcomes" className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Who Is This Course For */}
            <div>
              <h2 className="text-3xl lg:text-4xl mb-4 tracking-tight">Who Is This Course For?</h2>
              <p className="text-base text-gray-600 mb-10">
                Built for SME leaders and teams who are tired of guessing — and ready to make decisions that actually grow the business.
              </p>

              <div className="space-y-6">
                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2">Business Owners & SME Founders</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You've invested in products or services that didn't take off. This course helps you make smarter bets — grounded in what customers actually need.
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2">Product & Customer-Facing Teams</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your team ships features — but adoption is lower than expected. Learn to build what customers actually value, not what looks good in a meeting.
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2">Marketing & Growth Teams</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Struggling with low conversion or high churn? Better customer understanding is the fastest way to fix both — before you spend more on ads.
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2">Operations & Service Delivery Teams</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your team executes well — but misalignment upstream causes rework, delays, and frustrated customers. Get aligned on what matters before work begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: What You'll Achieve */}
            <div>
              <div className="bg-gradient-to-br from-pink-600 via-pink-600 to-fuchsia-600 rounded-3xl p-10 lg:p-12 text-white shadow-2xl sticky top-24">
                <h2 className="text-2xl lg:text-3xl mb-3 tracking-tight">What You'll Achieve</h2>
                <p className="text-pink-100 mb-8 text-sm">
                  Walk away with skills, tools, and a shared approach your team uses from day one.
                </p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Design products and services customers actively choose — not just tolerate</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Avoid costly mistakes by validating ideas before committing budget</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Make faster, more confident decisions using real customer evidence</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Improve adoption, satisfaction, and repeat business</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Go from ideas to a clear execution plan — with your whole team aligned</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed">
                    Teams that validate ideas early consistently reduce rework, launch faster, and build products their customers actually use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Challenges We Solve */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Design Challenges We Solve</h2>
            <p className="text-lg text-gray-600">
              Every wrong assumption costs you time, money, and customers. Here's how we fix that.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-pink-100 group-hover:bg-pink-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <AlertCircle className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Products That Don't Get Adopted</h3>
              <p className="text-gray-600 leading-relaxed">
                When customers don't adopt your product, it's rarely about the features — it's because the problem wasn't understood deeply enough. We fix that.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-pink-100 group-hover:bg-pink-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Low Adoption Despite Good Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Good features built on bad assumptions still fail. Learn to validate what's worth building before you invest — so adoption follows naturally.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-pink-100 group-hover:bg-pink-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Users className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Teams Disagree on What to Build</h3>
              <p className="text-gray-600 leading-relaxed">
                Disagreements based on opinions waste weeks and drain morale. Customer evidence ends the debate — and gives everyone a shared reason to move forward.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-pink-100 group-hover:bg-pink-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Lightbulb className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Solutions That Don't Drive Results</h3>
              <p className="text-gray-600 leading-relaxed">
                SMEs can't afford to build and hope. Test your ideas with real customers early, learn fast, and only commit resources to what actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Excellence Stories</h2>
            <p className="text-xl text-gray-600">
              What teams said after learning to build what customers actually want.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic flex-grow">
                "{testimonials[0].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E91E8C' }}>
                  <span className="text-white font-semibold">FL</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonials[0].name}</div>
                  <div className="text-sm text-gray-600">{testimonials[0].role}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < testimonials[1].rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic flex-grow">
                "{testimonials[1].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E91E8C' }}>
                  <span className="text-white font-semibold">NA</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonials[1].name}</div>
                  <div className="text-sm text-gray-600">{testimonials[1].role}</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic flex-grow">
                "{testimonials[2].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E91E8C' }}>
                  <span className="text-white font-semibold">YY</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonials[2].name}</div>
                  <div className="text-sm text-gray-600">{testimonials[2].role}</div>
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
              Everything you need to know about this course.
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

      {/* Final CTA Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
                Course Investment
              </div>
              <h2 className="text-4xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                Ready to Stop Guessing and Start Winning Customers?
              </h2>
              <p className="text-lg text-gray-600">
                Two days. One course. A practical, repeatable approach that changes how your team builds — and what your customers choose.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Price */}
                <div>
                  <div className="mb-8">
                    <div className="text-sm text-gray-500 mb-4">Per 2-day course</div>
                    <div className="flex flex-wrap items-baseline gap-4 mb-4">
                      <span className="text-5xl sm:text-7xl tracking-tight font-bold">RM350</span>
                      <span className="text-2xl text-gray-500">Only</span>
                    </div>
                    <div className="inline-block bg-white px-4 py-2 rounded-full text-sm">
                      / Person / Day. Based on Class of 30.
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">2-day intensive workshop</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">All course materials & templates</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Expert instructor (10+ years exp)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Certificate of completion</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Post-workshop support & community</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 mt-0.5">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Pre-course alignment session for your team</span>
                    </div>
                  </div>
                </div>

                {/* Right: What You'll Get */}
                <div>
                  <h3 className="text-2xl mb-6 font-semibold">What You'll Master</h3>
                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-white rounded-xl">
                      <div className="font-medium mb-1">Customer-Centric Design</div>
                      <div className="text-sm text-gray-600">Design products and services customers actively seek out — grounded in real insight, not internal assumptions.</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl">
                      <div className="font-medium mb-1">Rapid Prototyping</div>
                      <div className="text-sm text-gray-600">Test ideas quickly and cheaply — before committing your team's time and your business budget.</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl">
                      <div className="font-medium mb-1">Design for Clarity & Focus</div>
                      <div className="text-sm text-gray-600">Cut through complexity. Design solutions that are clear, focused, and easy for customers to adopt.</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl">
                      <div className="font-medium mb-1">User Journey Mapping</div>
                      <div className="text-sm text-gray-600">See exactly where customers drop off or disengage — and design fixes that improve retention and satisfaction.</div>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded-xl p-6">
                    <div className="text-sm mb-2 font-semibold">💡 Real Impact</div>
                    <p className="text-sm text-gray-700">
                      SME teams that validate ideas before building consistently ship faster, waste less, and see stronger customer adoption from day one.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12 text-center">
                <a 
                  href="/teamworks/bookConsultation.html" 
                  className="text-white px-10 py-5 rounded-full hover:opacity-90 transition-all inline-flex items-center gap-3 group text-lg"
                  style={{ backgroundColor: '#E91E8C' }}
                >
                  <span>Plan This Course for Your Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-6 text-sm text-gray-500">
                  Your customers are making decisions right now. Every month without this method is another month of missed sales and avoidable complaints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MainSiteFooter variant="light" />
    </div>
  );
}