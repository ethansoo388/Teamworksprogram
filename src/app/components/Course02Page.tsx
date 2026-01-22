import { ArrowRight, Lightbulb, PiggyBank, Trophy, Rocket, AlertCircle, Users, Target, Zap, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

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
    question: "Do I need design experience to attend?",
    answer: "No design experience required. We teach you the principles and give you practical tools you can use immediately."
  },
  {
    question: "Will this work for non-tech products?",
    answer: "Absolutely! Apple's design principles apply to any product or service—physical, digital, or hybrid. We'll show you how."
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
    question: "Can I bring my team?",
    answer: "Yes! We recommend bringing 2-5 team members. Team cohesion and shared learning lead to better implementation."
  }
];

export function Course02Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-500 via-pink-600 to-fuchsia-600">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">TEAMWORKS · COURSE 02</div>
                <div className="font-bold text-lg -mt-0.5">Design Like Apple</div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#modules" className="text-sm hover:text-gray-600 transition-colors">Modules</a>
              <a href="#outcomes" className="text-sm hover:text-gray-600 transition-colors">Outcomes</a>
              <a href="#testimonials" className="text-sm hover:text-gray-600 transition-colors">Reviews</a>
              <a href="#faq" className="text-sm hover:text-gray-600 transition-colors">FAQ</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="/bookConsultation.html" className="text-white px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-all" style={{ backgroundColor: '#E91E8C' }}>
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
            <a href="https://www.ciagile.com" className="transition-all" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#E91E8C'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Home</a>
            <span>/</span>
            <a href="/index.html" className="transition-all" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#E91E8C'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>Programs</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">Design Like Apple</span>
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
                <span>Course 02 • Design Excellence</span>
              </div>

              <h1 className="text-5xl lg:text-7xl leading-[1.1] mb-6 tracking-tight">
                Design Like<br /><span style={{ color: '#E91E8C' }}>Apple.</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                Master the art of designing and building products customers truly love, through hands-on learning that replaces guesswork with clarity.
              </p>

              <a href="/bookConsultation.html" className="inline-flex items-center gap-2 text-white px-8 py-3.5 rounded-xl hover:opacity-90 transition-all group mb-12" style={{ backgroundColor: '#E91E8C' }}>
                <span className="font-medium text-base">Enroll Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-8"></div>

              {/* Course Info Cards with Vertical Dividers */}
              <div className="flex items-start divide-x divide-gray-200">
                <div className="pr-8">
                  <div className="text-3xl font-semibold mb-1">2 Days</div>
                  <div className="text-base text-gray-500">Intensive</div>
                </div>
                <div className="px-8">
                  <div className="text-3xl font-semibold mb-1">In-Person</div>
                  <div className="text-base text-gray-500">Workshop</div>
                </div>
                <div className="pl-8">
                  <div className="text-3xl font-semibold mb-1">Max 30</div>
                  <div className="text-base text-gray-500">Participants</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="https://i.postimg.cc/wBFsdRQS/A-happy-young-Japanese-lady-holding-pen-and-paper-smiling-and-thinking.jpg" 
                  alt="Design thinking workshop"
                  className="w-full h-full object-cover"
                />
              </div>
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
              Learn the step-by-step way to understand your customers, fix their real problems, and stay ahead of your competitors.
            </p>
            <p className="text-xl text-gray-600">
              This is a 2-day hands-on workshop to build products and services that people love.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Think Different */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E91E8C' }}>
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Think Different</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn the principles behind Apple's iconic products, obsess over details, simplify relentlessly, and design for human emotion.
              </p>
            </div>

            {/* Save Thousands in Wasted Development */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E91E8C' }}>
                <PiggyBank className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Thousands in Wasted Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Test fast, fail cheap. Learn to prototype and validate in days, not months.
              </p>
            </div>

            {/* Ready to Compete */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E91E8C' }}>
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ready to compete</h3>
              <p className="text-gray-600 leading-relaxed">
                Level the playing field and go beyond theory. Design experiences that solve real problems beautifully
              </p>
            </div>

            {/* From Good to Insanely Great */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E91E8C' }}>
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">From Good to Insanely Great</h3>
              <p className="text-gray-600 leading-relaxed">
                Aligning teams around customer value. Making customer focus a habit, not a slogan.
              </p>
            </div>
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
              Five practical modules to transform how you understand customers and design solutions.
            </p>
          </div>

          {/* Modules List */}
          <div className="space-y-6">
            {/* Module 1 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img 
                    src="https://i.postimg.cc/65mXFWZH/Creating-products-people-love-Have-a-person-delighted-on-designing-and-improving-customer-experien.jpg" 
                    alt="Understanding Real Customer Problems"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 1
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-6">Understanding Real Customer Problems</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Separating opinions from evidence</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Asking better questions, not more questions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="grid lg:grid-cols-[1fr_300px] gap-0">
                <div className="p-8 lg:p-10 order-2 lg:order-1">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 2
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-6">Mapping the Customer Experience</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Where customers get stuck, annoyed, or confused</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Identifying moments that matter</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
                  <img 
                    src="https://i.postimg.cc/8zmqNTJd/A-team-working-on-amazing-ideas-young-asia-smiling-happy.jpg" 
                    alt="Mapping the Customer Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img 
                    src="https://i.postimg.cc/7YGHHJwn/A-team-working-on-amazing-ideas-young-asia-smiling-happy-(1).jpg" 
                    alt="Turning Insights into Better Ideas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 3
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-6">Turning Insights into Better Ideas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Generating ideas that solve real problems</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Avoiding "cool but useless" features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="grid lg:grid-cols-[1fr_300px] gap-0">
                <div className="p-8 lg:p-10 order-2 lg:order-1">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 4
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-6">Testing Before Committing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Validate fast, cheap, and early</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Reduce risk before spending big money</span>
                    </li>
                  </ul>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
                  <img 
                    src="https://i.postimg.cc/cLkPrXhn/Untitled-design-(11).png" 
                    alt="Testing Before Committing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-white border border-pink-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img 
                    src="https://i.postimg.cc/xdRJvNkN/a-team-building-something-together-asia-young-happy-bright-amazing.jpg" 
                    alt="From Idea to Action"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                    Module 5
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-6">From Idea to Action</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Aligning teams around customer value</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-pink-500 mt-0.5">✓</span>
                      <span>Making customer focus a habit, not a slogan</span>
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
                This course is perfect for the "Action Takers"
              </p>

              <div className="space-y-6">
                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300 cursor-pointer">
                  <h3 className="font-semibold text-lg mb-2">Product Managers & Designers</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You want to create products people love, not just use. Learn to blend functionality with emotional design like Apple does.
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300 cursor-pointer">
                  <h3 className="font-semibold text-lg mb-2">SME Founders & Innovators</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You're building new products or services and want them to stand out. Apply Apple's design thinking to create competitive advantage.
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300 cursor-pointer">
                  <h3 className="font-semibold text-lg mb-2">Marketing & Brand Teams</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You need to communicate value through design. Learn how Apple makes every touchpoint an experience that builds brand loyalty.
                  </p>
                </div>

                <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 hover:bg-pink-50/50 transition-all duration-300 cursor-pointer">
                  <h3 className="font-semibold text-lg mb-2">UX/UI & Creative Professionals</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    You want to elevate your craft. Study Apple's approach to simplicity, elegance, and user-centered design excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: What You'll Achieve */}
            <div>
              <div className="bg-gradient-to-br from-pink-600 via-pink-600 to-fuchsia-600 rounded-3xl p-10 lg:p-12 text-white shadow-2xl sticky top-24">
                <h2 className="text-2xl lg:text-3xl mb-3 tracking-tight">What You'll Achieve</h2>
                <p className="text-pink-100 mb-8 text-sm">
                  Real outcomes that transform how you design and build products.
                </p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Design products and experiences that customers emotionally connect with</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Master rapid prototyping to validate ideas before building</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Apply Apple's simplicity principles to solve complex problems</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Create user journeys that delight at every touchpoint</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-base leading-relaxed">Build a design-thinking mindset that drives innovation</span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <p className="text-sm leading-relaxed">
                    <strong className="font-semibold">Real Impact:</strong> Teams applying design principles report 45% higher customer satisfaction scores and 60% increase in product adoption rates.
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
              Stop letting mediocre design hold your products back.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-pink-100 group-hover:bg-pink-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <AlertCircle className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Products That Work But Don't Delight</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn to design beyond functionality. Create experiences that customers fall in love with, not just tolerate.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-pink-100 group-hover:bg-pink-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <svg className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Low Adoption Despite Good Features</h3>
              <p className="text-gray-600 leading-relaxed">
                Master user-centered design to build what customers actually want, not what you think they need. Make products intuitive and irresistible.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-pink-100 group-hover:bg-pink-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Users className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Can't Compete on Design Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Apply Apple's simplicity and elegance principles. Stand out in crowded markets through superior design thinking and execution.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 bg-pink-100 group-hover:bg-pink-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Lightbulb className="w-6 h-6 text-pink-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ideas That Never Get Validated</h3>
              <p className="text-gray-600 leading-relaxed">
                Use rapid prototyping to test concepts quickly and cheaply. Fail fast, learn faster, and build products people actually want.
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
              Product leaders who transformed their approach in design principles.
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
              Everything you need to know about designing like Apple.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-normal text-sm pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
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
                Investment
              </div>
              <h2 className="text-4xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                Ready to Design Like Apple?
              </h2>
              <p className="text-lg text-gray-600">
                Create products and experiences that customers truly love. Transform your approach to design excellence.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-gray-50 rounded-3xl p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Price */}
                <div>
                  <div className="mb-8">
                    <div className="text-sm text-gray-500 mb-4">Per 2-day course</div>
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-7xl tracking-tight font-bold">RM350</span>
                      <span className="text-2xl text-gray-500">per person/day</span>
                    </div>
                    <div className="inline-block bg-white px-4 py-2 rounded-full text-sm">
                      Up to 30 participants per session
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
                      <span className="text-gray-700">Free pre-course consultation</span>
                    </div>
                  </div>
                </div>

                {/* Right: What You'll Get */}
                <div>
                  <h3 className="text-2xl mb-6 font-semibold">What You'll Master</h3>
                  <div className="space-y-4 mb-8">
                    <div className="p-4 bg-white rounded-xl">
                      <div className="font-medium mb-1">Customer-Centric Design</div>
                      <div className="text-sm text-gray-600">Design products customers emotionally connect with</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl">
                      <div className="font-medium mb-1">Rapid Prototyping</div>
                      <div className="text-sm text-gray-600">Validate ideas before building</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl">
                      <div className="font-medium mb-1">Apple's Simplicity Principles</div>
                      <div className="text-sm text-gray-600">Solve complex problems elegantly</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl">
                      <div className="font-medium mb-1">User Journey Mapping</div>
                      <div className="text-sm text-gray-600">Create delightful touchpoints</div>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded-xl p-6">
                    <div className="text-sm mb-2 font-semibold">💡 Real Impact</div>
                    <p className="text-sm text-gray-700">
                      Teams applying design principles report 45% higher customer satisfaction scores and 60% increase in product adoption rates.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12 text-center">
                <a 
                  href="/bookConsultation.html" 
                  className="bg-black text-white px-10 py-5 rounded-full hover:bg-gray-800 transition-all inline-flex items-center gap-3 group text-lg"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-6 text-sm text-gray-500">
                  Talk to our course advisor to find the perfect fit for your team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-3xl mb-4 tracking-tight font-semibold">TeamWorks</div>
              <p className="text-gray-600 max-w-md leading-relaxed">
                Fun, hands-on training workshops for SME teams across Southeast Asia. 
                Transform your team in just 2 days.
              </p>
            </div>

            {/* Courses */}
            <div>
              <h4 className="mb-4 text-sm tracking-wider uppercase text-gray-500 font-semibold">Courses</h4>
              <div className="space-y-3 text-sm">
                <div><a href="/" className="hover:text-gray-600 transition-colors">Creating Super Teams</a></div>
                <div><a href="/" className="hover:text-gray-600 transition-colors">Design Like Apple</a></div>
                <div><a href="/" className="hover:text-gray-600 transition-colors">Work Clear, Work Fast</a></div>
                <div><a href="/" className="hover:text-gray-600 transition-colors">Lean Six Sigma</a></div>
                <div><a href="/" className="hover:text-gray-600 transition-colors">Prompt Your AI Better</a></div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm tracking-wider uppercase text-gray-500 font-semibold">Company</h4>
              <div className="space-y-3 text-sm">
                <div><a href="/" className="hover:text-gray-600 transition-colors">About Us</a></div>
                <div><a href="/" className="hover:text-gray-600 transition-colors">Our Instructors</a></div>
                <div><a href="/" className="hover:text-gray-600 transition-colors">Testimonials</a></div>
                <div><a href="/" className="hover:text-gray-600 transition-colors">Contact</a></div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2026 TeamWorks. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="/" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="/" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}