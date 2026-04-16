import { ArrowRight, Clock, Users, UserCheck, Zap, Check, Star, Menu, X, MessageCircle, Target, TrendingUp, ShieldCheck } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import heroImage from "@/assets/img/teamworks/ciagile-teamworks-course05-build-trust-retail-sales-counter.webp";

const THEME = "#0097df";
const THEME_DARK = "#007db8";
const THEME_LIGHT = "#E0F4FD";

const faqItems = [
  {
    question: "Is this course suitable for teams with no prior sales training?",
    answer: "Yes. The course starts from the ground up — we don't assume any prior training. Every technique is introduced simply and practiced immediately, so participants build confidence from Day 1."
  },
  {
    question: "Will this work for industries outside of retail?",
    answer: "Absolutely. The communication frameworks taught here apply to any frontline role involving customer interaction — banking, healthcare, government counters, call centres, and more."
  },
  {
    question: "How hands-on is the workshop?",
    answer: "Very hands-on. The programme is 80% practice, 20% input. Participants do real role-plays, video recordings, and live simulations that mirror what they face at the counter every day."
  },
  {
    question: "What will participants walk away with?",
    answer: "Each participant leaves with a personal script framework, objection-handling techniques, and a closing method they've already practiced multiple times. Skills are ready to apply the very next day."
  },
  {
    question: "Is there a maximum team size for this course?",
    answer: "Yes, we cap each session at 30 participants to ensure every person gets coaching and role-play time. For larger teams, we can schedule back-to-back sessions."
  }
];

export function Course05SalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: THEME }}
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-semibold">TEAMWORKS · COURSE 05</div>
                <div className="font-bold text-lg -mt-0.5">Build Trust, Win Hearts, Close Sales</div>
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
              <a
                href="/teamworks/bookConsultation.html"
                className="text-white px-6 py-2.5 rounded-full text-sm hover:opacity-90 transition-all"
                style={{ backgroundColor: THEME }}
              >
                Book This Course for Your Team
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden"
              aria-label="Open menu"
              aria-controls="tw05-mobile-menu"
              data-mobile-toggle
            >
              <span data-icon="open"><Menu className="w-6 h-6" /></span>
              <span data-icon="close" className="hidden"><X className="w-6 h-6" /></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="tw05-mobile-menu" data-mobile-menu className="md:hidden py-6 border-t border-gray-200 hidden" aria-hidden="true">
            <div className="flex flex-col gap-4">
              <a href="#modules" className="text-sm py-2" data-mobile-close>Modules</a>
              <a href="#outcomes" className="text-sm py-2" data-mobile-close>Outcomes</a>
              <a href="#testimonials" className="text-sm py-2" data-mobile-close>Testimonials</a>
              <a href="#faq" className="text-sm py-2" data-mobile-close>FAQ</a>
              <a
                href="/teamworks/bookConsultation.html"
                className="text-white px-6 py-3 rounded-full text-sm mt-2 text-center"
                style={{ backgroundColor: THEME }}
                data-mobile-close
              >
                Book This Course
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="../index.html" className="hover:text-gray-900 transition-colors">Home</a>
            <span>/</span>
            <a href="/teamworks/index.html" className="hover:text-gray-900 transition-colors">Teamworks</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">Build Trust, Win Hearts, Close Sales</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              {/* Course Badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border"
                style={{ backgroundColor: THEME_LIGHT, borderColor: "#93D8F5" }}
              >
                <Zap className="w-4 h-4" style={{ color: THEME }} />
                <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: THEME }}>TEAMWORKS · FRONTLINE SALES</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl lg:text-6xl leading-tight mb-6 tracking-tight">
                Build Trust, Win Hearts, Close Sales
                <span className="block text-base lg:text-lg text-gray-600 font-normal italic mt-4 tracking-normal">
                  Communication mastery for retail frontliners.
                </span>
              </h1>

              {/* Description */}
              <div className="text-xl text-gray-600 leading-relaxed mb-8 space-y-4">
                <p>
                  Your frontliners work hard. But if they're losing sales not because of effort — but because they can't read the customer, ask the right questions, or close confidently — effort alone won't fix it.
                </p>
                <p>
                  <span className="font-semibold text-gray-900 italic">Build Trust, Win Hearts, Close Sales</span> gives your team simple, repeatable conversation frameworks to convert more walk-ins, upsell naturally, and handle objections without losing momentum.
                </p>
              </div>

              {/* Course Info Cards */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-6">
                  <div className="text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2" style={{ color: THEME }} />
                    <div className="text-xs text-gray-600 mb-1">Duration</div>
                    <div className="font-semibold text-gray-900">2 days</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto mb-2" style={{ color: THEME }} />
                    <div className="text-xs text-gray-600 mb-1">Format</div>
                    <div className="font-semibold text-gray-900">In-person</div>
                  </div>
                  <div className="text-center">
                    <UserCheck className="w-6 h-6 mx-auto mb-2" style={{ color: THEME }} />
                    <div className="text-xs text-gray-600 mb-1">Capacity</div>
                    <div className="font-semibold text-gray-900">Max 30</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="/teamworks/bookConsultation.html"
                className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full hover:opacity-90 transition-all group"
                style={{ backgroundColor: THEME }}
              >
                <span className="font-medium">Talk to Us About Your Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-500 mt-4">Every walk-in your team fails to convert is revenue that walks out the door. The first step takes 10 minutes.</p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Retail frontliner building trust with a customer at the counter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Problems Section */}
      <section className="bg-white py-20 lg:py-32" id="outcomes">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Is Your Frontline Team Struggling With These?</h2>
            <p className="text-xl text-gray-600">These aren't attitude problems — they're skill gaps. And every single one is fixable.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">💬</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Pitching Without Listening</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Frontliners jump straight into product features before understanding what the customer actually needs — and lose the sale before it starts.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">😶</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Freezing at Objections</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">"Too expensive." "Let me think about it." Most frontliners don't have a confident response — so the customer walks out and the sale dies.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">🤷</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Weak First Impressions</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Customers decide within the first 30 seconds whether they trust the person in front of them. A poor opening kills the deal before any product is mentioned.</p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg">
              <div className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-30 transition-opacity">📉</div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold relative z-10">Low Upselling Rate</h3>
              <p className="text-gray-700 leading-relaxed relative z-10">Frontliners don't confidently recommend higher-value plans or add-ons — leaving revenue on the table in every single transaction.</p>
            </div>
          </div>

          {/* Payoff Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">
              2 Days. Real Conversations. Here's What Changes.
            </h2>
            <p className="text-3xl lg:text-4xl tracking-tight font-bold" style={{ color: THEME }}>The Payoff</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl mb-6 font-bold" style={{ color: THEME }}>For the Business:</h3>
              <ul className="space-y-4">
                {[
                  "Higher conversion rate from walk-in enquiries to completed sales",
                  "Increased upselling of higher-value plans and add-ons",
                  "Better customer experience scores and fewer complaints",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: THEME }}>
                      <Check className="w-4 h-4" style={{ color: THEME }} />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl mb-6 font-bold" style={{ color: THEME }}>For the Team:</h3>
              <ul className="space-y-4">
                {[
                  "Confidence at the counter — no more freezing at difficult customers",
                  "A repeatable script they can use immediately from the next shift",
                  "Pride in their work when conversations go well consistently",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: THEME }}>
                      <Check className="w-4 h-4" style={{ color: THEME }} />
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How This Programme Works */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: THEME_LIGHT }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">How This Programme Works</h2>
            <p className="text-xl text-gray-700 font-medium mb-3">
              80% practice. 20% input. Everything your team learns, they practice on the spot.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Participants work through real counter scenarios — from the opening greeting to closing the deal — with live coaching and immediate feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, text: "Real role-plays that mirror what happens at the counter every day" },
              { icon: MessageCircle, text: "Structured conversation frameworks your team memorises through repetition" },
              { icon: ShieldCheck, text: "Video recording so participants see themselves — and see the improvement" },
              { icon: TrendingUp, text: "Skills ready to apply the very next shift — no warm-up required" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 flex flex-col items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: THEME_LIGHT }}>
                  <Icon className="w-6 h-6" style={{ color: THEME }} />
                </div>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="bg-white py-20 lg:py-32" id="modules">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Course Modules</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four modules that take your team from a weak opening to a confident close — covering every stage of the customer conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "1",
                title: "Module 1: The Power of First Impression",
                desc: "Build trust from the first interaction — before any selling happens.",
                bullets: [
                  "Present yourself with professionalism and approachability",
                  "Use body language and tone that make customers comfortable",
                  "Open conversations in a natural, engaging way",
                  "Avoid common mistakes that turn customers away early",
                ],
              },
              {
                num: "2",
                title: "Module 2: Understand Customer Problems and Needs",
                desc: "Move beyond assumptions — identify what customers actually want.",
                bullets: [
                  "Observe customer behaviour, signals, and intent",
                  "Apply the L.E.A.R.N active listening framework",
                  "Ask effective, structured questions to uncover real requirements",
                  "Clarify and confirm understanding before recommending",
                ],
              },
              {
                num: "3",
                title: "Module 3: Effective Products Presentation",
                desc: "Turn understanding into clear, relevant, and convincing recommendations.",
                bullets: [
                  "Translate product features into meaningful customer benefits",
                  "Use the DISC profile to adapt your communication style",
                  "Structure recommendations based on individual customer needs",
                  "Guide customers toward decisions without being pushy",
                ],
              },
              {
                num: "4",
                title: "Module 4: Confident Closing — Sealing the Deal",
                desc: "Handle objections and drive conversations to successful outcomes.",
                bullets: [
                  "Handle common objections using the Feel–Felt–Found method",
                  "Stay professional and composed under pressure",
                  "Apply 4 proven closing techniques (Assumptive, Choice, Next-Step, Summary)",
                  "Leave every customer with a positive final impression",
                ],
              },
            ].map((mod) => (
              <div
                key={mod.num}
                className="rounded-2xl p-6 flex items-start gap-4"
                style={{ backgroundColor: THEME_LIGHT }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: THEME }}
                >
                  <span className="text-white font-bold text-lg">{mod.num}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-3">{mod.title}</h3>
                  <p className="text-gray-600 mb-3">{mod.desc}</p>
                  <ul className="space-y-2 text-gray-600 list-disc pl-5">
                    {mod.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">Who Should Attend</h2>
            <p className="text-xl text-gray-600">Built for any team whose job involves talking to customers — and whose results depend on how well those conversations go.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Retail Frontliners", desc: "Sales associates and store staff who interact with walk-in customers every day." },
              { icon: Target, title: "Sales Advisors", desc: "Consultants responsible for recommending plans, products, and upgrades to customers." },
              { icon: MessageCircle, title: "Customer Service Teams", desc: "Service counter and support staff who handle enquiries and resolve issues at the point of contact." },
              { icon: TrendingUp, title: "Call Centre & Engagement Teams", desc: "Phone and digital teams who need to build rapport and close conversations confidently." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: THEME_LIGHT }}>
                  <Icon className="w-8 h-8" style={{ color: THEME }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 lg:py-32" id="testimonials">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">What Participants Say</h2>
            <p className="text-xl text-gray-600">Feedback from frontliners and managers after going through the programme.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I used to panic when customers said 'too expensive'. Now I know exactly what to say. My closing rate went up noticeably within the first week.",
                name: "Sarah Lim",
                role: "Retail Sales Advisor",
                industry: "Telecommunications",
                initials: "SL",
              },
              {
                quote: "The role-plays were tough but that's exactly why it works. By Day 2 I felt like I could handle any customer. The frameworks are simple enough to actually use.",
                name: "Ahmad Fadzillah",
                role: "Customer Service Executive",
                industry: "Banking",
                initials: "AF",
              },
              {
                quote: "Our team's upselling numbers improved after this course. More importantly, the team feels more confident — and customers can feel that confidence.",
                name: "Priya Nair",
                role: "Branch Manager",
                industry: "Retail",
                initials: "PN",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic flex-grow">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold" style={{ backgroundColor: THEME }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{t.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 tracking-tight">Common Questions</h2>
            <p className="text-base text-gray-600">
              Everything you need to know about Build Trust, Win Hearts, Close Sales.
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

      {/* Pricing CTA */}
      <section className="py-20 lg:py-32 text-white" style={{ backgroundColor: THEME }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl mb-6 tracking-tight">
              Your team is talking to customers every day. Make every conversation count.
            </h2>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
              2 days. Real tools. Measurable improvement from the very next shift. Let's talk about running this for your team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12 text-gray-900">Course Investment</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="font-semibold text-xl mb-6 text-gray-900">What's Included:</h3>
                <ul className="space-y-4">
                  {[
                    "2-day intensive workshop",
                    "All course materials & workbooks",
                    "Role-play scripts and conversation frameworks",
                    "90-day email support",
                    "Alumni community access",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: THEME }}>
                        <Check className="w-4 h-4" style={{ color: THEME }} />
                      </div>
                      <span className="text-gray-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-8 flex flex-col items-center justify-center text-center" style={{ backgroundColor: THEME_LIGHT }}>
                <div className="text-sm text-gray-600 mb-2">Starting from</div>
                <div className="text-6xl font-bold mb-2" style={{ color: THEME }}>RM350</div>
                <div className="text-gray-600 mb-4">Per person per day</div>
                <div className="text-sm text-gray-500 mb-4">Calculated based on a class of 30 pax</div>
                <div className="font-medium" style={{ color: THEME }}>Group discounts available</div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100">
              <h3 className="font-semibold text-xl mb-6 text-gray-900">What Changes After 2 Days:</h3>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { title: "More walk-ins convert", desc: "Frontliners open confidently, ask better questions, and guide customers to a decision — naturally" },
                  { title: "Objections stop killing deals", desc: "Your team has a practised response for every common objection — no more freezing at the counter" },
                  { title: "Upselling happens consistently", desc: "Staff recommend higher-value options confidently because they know how to frame benefits, not features" },
                  { title: "The skill sustains itself", desc: "Frameworks are simple enough to remember and repeat every day — no ongoing training needed" },
                ].map(({ title, desc }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ borderColor: THEME }}>
                      <Check className="w-4 h-4" style={{ color: THEME }} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 mb-1">{title}</div>
                      <div className="text-sm text-gray-600">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/teamworks/bookConsultation.html"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all font-semibold text-lg group"
                style={{ backgroundColor: THEME }}
              >
                Book This Course for Your Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-sm text-gray-600 mt-3">
                Every week your frontliners underperform at the counter costs you in lost sales and missed upsells.
              </p>
            </div>
          </div>

          <div className="text-center text-white mt-8">
            <p className="text-lg">
              Questions? Email us at <a href="mailto:romanoff@ciagile.com" className="underline hover:opacity-80 transition-opacity">romanoff@ciagile.com</a>
            </p>
          </div>
        </div>
      </section>

      <MainSiteFooter variant="light" />
    </div>
  );
}
