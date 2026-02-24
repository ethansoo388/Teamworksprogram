import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";
import { 
  Users, ArrowLeft, CheckCircle2, Lightbulb, Target, 
  Palette, Brain, Heart, Zap, Mail, TrendingUp, Award, ArrowRight, Crown, Check, Briefcase, Package
} from "lucide-react";

const audienceList = [
  {
    icon: Crown,
    title: "Business Leaders",
  },
  {
    icon: Briefcase,
    title: "Corporate Executives",
  },
  {
    icon: Package,
    title: "Product Owners",
  },
  {
    icon: Target,
    title: "Product Managers",
  },
  {
    icon: Users,
    title: "Agile Practitioners",
  },
  {
    icon: Lightbulb,
    title: "Innovators",
  }
];

const courseForYouIf = [
  "You are seeking guidance on how to leverage Design Thinking practices in business operations.",
  "You want to learn on how to be innovative and responsive to customer needs.",
  "You love to get into actions on both discovering opportunities and problem solving.",
  "You are always thinking on ways to improve the way you do product management.",
  "You are accountable for delivery outcomes and need a structured approach to reduce execution risk."
];

const learningOutcomes = [
  {
    title: "Frame and Prioritise the Right Problems",
    description: "Develop the capability to identify which problems are worth solving before solutions are built — reducing wasted effort, aligning teams, and accelerating decision-making under uncertainty."
  },
  {
    title: "Validate Ideas and Reduce Risk",
    description: "Gain confidence in testing assumptions early through structured techniques — enabling faster, evidence-based decisions that lower costly mistakes and strengthen stakeholder alignment."
  },
  {
    title: "Decide with Clarity and Speed",
    description: "Build repeatable decision-making processes that balance creativity and feasibility — so teams can move from insight to execution without sacrificing quality or strategic coherence."
  }
];

const workProblems = [
  "Understand users at a deep emotional level through proven research and empathy techniques.",
  "Build skills to identify the real problems worth solving, not just symptoms.",
  "Learn customer-centric innovation methodologies.",
  "Create and test solutions rapidly before committing resources.",
  "Foster a culture of creative collaboration and continuous experimentation."
];

const modules = [
  {
    number: "01",
    title: "Understanding Users' Needs",
    tagline: "Observe, interview, and empathise to uncover meaningful insights",
    description: "Learn how to observe, interview, and empathise with users to uncover insights that truly matter.",
    image: "https://i.postimg.cc/8CWjS28S/DT-picture-1.webp"
  },
  {
    number: "02",
    title: "Problems Worth Solving",
    tagline: "Define and prioritise problems that deliver the most impact",
    description: "Translate insights into clearly articulated problem statements and prioritise what matters most.",
    image: "https://i.postimg.cc/SRvSXD4r/thinking.jpg"
  },
  {
    number: "03",
    title: "Generate Ideas",
    tagline: "Explore creative techniques to generate breakthrough solutions",
    description: "Explore creative, out-of-the-box thinking techniques to generate a wide range of possible solutions.",
    image: "https://i.postimg.cc/wv4FnmHF/ideas.jpg"
  },
  {
    number: "04",
    title: "Prototype & Test",
    tagline: "Build, test, and learn fast through real user feedback",
    description: "Build tangible prototypes, test with real users, and learn fast through real feedback.",
    image: "https://i.postimg.cc/QCrfxGYf/prototype2.webp"
  },
  {
    number: "05",
    title: "Synthesize Insights",
    tagline: "Extract learnings and determine clear next steps",
    description: "Make sense of findings, extract learnings, and determine clear next steps with confidence.",
    image: "https://i.postimg.cc/P5fFwHfq/Malaysia-team-work-activities-in-office-building-something.jpg"
  },
  {
    number: "06",
    title: "Bringing It All Together",
    tagline: "Adapt the process to your organisation and context",
    description: "Designing your process. Explore and adapt the process and approach to your project and situation",
    image: "https://i.postimg.cc/qBhyLYtD/Untitled-design-(21).png"
  }
];

export function DesignThinkingCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation />
      
      {/* Hero Section - Full Cover Image */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {/* Full Cover Image */}
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/gJZy1Ssv/DT-Hero-page.webp"
            alt="Design Thinking 201 - Professional Training"
            className="w-full h-full object-cover object-right lg:object-center"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative h-full px-4 sm:px-6 lg:px-8 flex items-center lg:justify-end">
          <div className="max-w-7xl mx-auto w-full flex lg:justify-end pt-32 sm:pt-56 lg:pt-36 pb-10 lg:pb-20">
            <div className="max-w-2xl w-full"
            >
              {/* Back to NOVA Series - Mobile Only (in hero) */}
              <div className="lg:hidden mb-5">
                <a
                  href="../team-level-training.html"
                  className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm"
                >
                  <ArrowLeft size={18} />
                  <span>Back to NOVA Series</span>
                </a>
              </div>

              {/* NOVA Badge - Mobile Only */}
              <div className="lg:hidden flex justify-center mb-5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Lightbulb size={14} className="text-white" />
                  <span className="text-xs font-medium text-white">NOVA by CI Agile</span>
                </div>
              </div>

              {/* Title - Mobile: Combined "Design Thinking 201", Desktop: Separate */}
              <h1 className="lg:hidden text-5xl font-bold text-white leading-tight mb-5 text-center">
                Design Thinking 201
              </h1>
              
              {/* Desktop Title */}
              <h1 className="hidden lg:block text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3 text-left">
                Design Thinking
              </h1>
              
              {/* 201 with Badge - Desktop Only */}
              <div className="hidden lg:flex items-center gap-4 mb-6">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">201</span>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Lightbulb size={16} className="text-white" />
                  <span className="text-sm font-medium text-white">NOVA by CI Agile</span>
                </div>
              </div>
              
              {/* Subtitle */}
              <h2 className="text-xl lg:text-2xl lg:font-medium mb-5 lg:mb-6 text-white leading-snug text-center lg:text-left font-normal">
                De-Risk Innovation and Accelerate Decision Velocity
              </h2>

              {/* Description - Mobile: smaller text, more compact */}
              <p className="text-sm lg:text-base text-white/90 mb-4 lg:mb-2 leading-relaxed text-center lg:text-left">
                Slow or misaligned decision-making exposes organisations to delayed launches, budget overruns, and missed market opportunities.
              </p>

              <p className="text-sm lg:text-base lg:text-lg text-white/90 mb-7 lg:mb-6 leading-relaxed text-center lg:text-left">
                Move beyond theory. Master the high-stakes framework used by global transformation leaders to solve complex business problems, align cross-functional stakeholders, and deliver validated solutions with speed.
              </p>
              
              {/* CTA - Always centered */}
              <div className="flex flex-col items-center mb-3">
                <button 
                  onClick={() => {
                    const section = document.getElementById('how-we-turn-ideas');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg mb-2 text-sm lg:text-base"
                >
                  <span>Explore the Course</span>
                </button>

                <p className="text-xs lg:text-sm text-white/60 lg:text-white/80 text-center">
                  Private corporate delivery · Customised for your organisation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 leading-tight">
              Bridging the Gap Between Strategy and Execution
            </h2>
            
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              Most corporate initiatives don't fail because of poor strategy — they fail because teams cannot translate intent into clear, testable decisions fast enough.
            </p>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              This course helps professionals slow down <span className="italic">just enough</span> to deeply understand users, align stakeholders, and move forward with confidence; reducing rework, wasted effort, and political friction.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Through engaging business case studies, participants will learn how to optimize processes, foster continuous improvement, and apply these strategies in real-world scenarios.
            </p>
            <div className="w-32 h-0.5 bg-slate-300 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Who This Course Is For */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-visible">
        {/* Background Image - Right Side - Desktop Only */}
        <div className="hidden lg:block absolute right-[5%] bottom-0 w-2/5">
          <img 
            src="https://i.postimg.cc/kGrwnd6x/zi-yuan-34.webp"
            alt="Design thinking learning environment"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
            {/* Column 1 - This Course Is Tailored For */}
            <div>
              <div
                className="mb-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                  This Course Is Tailored For
                </h2>
                <p className="text-base text-slate-600 mb-6">
                  Typically commissioned by HR, L&D, Transformation Offices, and Business Unit Leaders.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {audienceList.map((audience, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center flex-shrink-0">
                      <audience.icon className="text-slate-900" size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-base text-slate-900">{audience.title}</span>
                  </div>
                ))}
              </div>
              
              {/* Mobile Image - Shows below content on mobile */}
              <div
                className="lg:hidden mt-12"
              >
                <img 
                  src="https://i.postimg.cc/kGrwnd6x/zi-yuan-34.webp"
                  alt="Design thinking learning environment"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Column 2 - Empty space for background image on desktop */}
            <div className="hidden lg:block"></div>
          </div>

          {/* New Row - This Course Is For You If... - Full Width */}
          <div className="max-w-3xl">
            <div
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                This Course Is For You If...
              </h2>
            </div>

            <ul className="space-y-4">
              {courseForYouIf.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <span className="text-slate-900 mt-1 flex-shrink-0">•</span>
                  <span className="text-base text-slate-900 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Learning Outcomes
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              At the end of this course, you will be able to...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {learningOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white rounded-sm p-8 border border-slate-200/60 hover:border-slate-300 transition-colors"
              >
                <div className="mb-6">
                  <span className="text-4xl font-light text-slate-300">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 leading-tight mb-3">
                  {outcome.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>

          {/* Work Problems Section */}
          <div className="pt-4">
            <div
              className="text-center mb-3"
            >
              <div className="w-16 h-0.5 bg-slate-300 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Results - Dark Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900" id="how-we-turn-ideas">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              How We Turn Ideas Into Outcomes
            </h2>
            <p className="text-base text-slate-300 max-w-2xl mx-auto">
              A repeatable decision-making system teams can apply immediately after the programme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Deep User Understanding */}
            <div
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <Heart className="text-blue-400" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Deep User Understanding
                <ArrowRight size={16} className="text-slate-400" />
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Understand users at a deep emotional level through proven research and empathy techniques.
              </p>
            </div>

            {/* Card 2 - Problem Discovery */}
            <div
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <Lightbulb className="text-blue-400" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Problem Discovery
                <ArrowRight size={16} className="text-slate-400" />
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Build skills to identify the real problems worth solving, not just symptoms.
              </p>
            </div>

            {/* Card 3 - Rapid Validation */}
            <div
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <Zap className="text-blue-400" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Rapid Validation
                <ArrowRight size={16} className="text-slate-400" />
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Create and test solutions rapidly before committing significant resources to development.
              </p>
            </div>

            {/* Card 4 - Innovation Culture */}
            <div
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <Award className="text-blue-400" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Innovation Culture
                <ArrowRight size={16} className="text-slate-400" />
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Foster a culture of creative collaboration and continuous experimentation across teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Course Modules
            </h2>
            <p className="text-lg text-slate-600">
              Each module builds toward a single practical decision framework applied to real business challenges.
            </p>
          </div>

          <div className="space-y-16">
            {/* Module 01 - Image Left, Content Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://i.postimg.cc/8CWjS28S/DT-picture-1.webp"
                  alt="Understanding Users' Needs Module"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 01
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Understanding Users' Needs
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Problem we solve: Teams often jump into solutions without truly understanding users, leading to rework, misalignment, and wasted effort.
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Learn how to uncover real user needs. You'll practice practical research and empathy techniques to reveal hidden pain points and unmet expectations that actually matter to the business.
                </p>
              </div>
            </div>

            {/* Module 02 - Content Left, Image Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 02
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Problems Worth Solving
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Problem we solve: Many teams spend months solving the wrong problem, driven by assumptions, opinions, or internal politics.
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Translate insights into clear, focused problem statements that align teams and stakeholders. You'll learn how to prioritize what truly matters so effort is spent on high-impact problems.
                </p>
              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <ImageWithFallback
                  src="https://i.postimg.cc/SRvSXD4r/thinking.jpg"
                  alt="Prototype & Test Module"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Module 03 - Image Left, Content Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://i.postimg.cc/wv4FnmHF/ideas.jpg"
                  alt="Prototype & Test Module"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 03
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Generating Meaningful Ideas
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Problem we solve: Brainstorming sessions often produce safe, obvious ideas or endless discussions with no direction.
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  You'll learn how to move beyond the "first obvious solution" and explore options that balance creativity, feasibility, and business value.
                </p>
              </div>
            </div>

            {/* Module 04 - Content Left, Image Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 04
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Validating Ideas Before You Invest
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Problem we solve: Decisions are delayed because teams rely on opinions instead of evidence — or only validate ideas after heavy investment.
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Build tangible prototypes, test with real users, and learn fast through real feedback.
                </p>
              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <ImageWithFallback
                  src="https://i.postimg.cc/QCrfxGYf/prototype2.webp"
                  alt="Prototype & Test Module"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Module 05 - Image Left, Content Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://i.postimg.cc/P5fFwHfq/Malaysia-team-work-activities-in-office-building-something.jpg"
                  alt="Synthesize Insights Module"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 05
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Synthesizing Insights & Making Decisions
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Problem we solve: Extract learnings and determine clear next steps
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Make sense of findings, extract learnings, and determine clear next steps with confidence.
                </p>
              </div>
            </div>

            {/* Module 06 - Content Left, Image Right */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 06
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Bringing It All Together in Real Work Context
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Adapt the process to your organisation and context
                  </p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Walk away with a practical problem-solving mindset you can reuse across initiatives, teams, and roles.
                </p>
              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <ImageWithFallback
                  src="https://i.postimg.cc/qBhyLYtD/Untitled-design-(21).png"
                  alt="Bringing It All Together Module"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Organisations Typically Use This Programme */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How Organisations Typically Use This Programme
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Organisations engage this programme when decision quality, alignment, and risk reduction matter most — particularly before high-stakes initiatives, during transformation efforts, or when teams need a shared decision-making framework that withstands pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Users className="text-blue-600" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 leading-tight">Leadership Alignment</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Aligning leadership teams before major product, service, or transformation decisions</p>
                </div>
              </div>
            </div>

            <div
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Target className="text-blue-600" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 leading-tight">Risk Reduction</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">De-risking innovation initiatives before committing significant budget or resources</p>
                </div>
              </div>
            </div>

            <div
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Brain className="text-blue-600" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 leading-tight">Shared Framework</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Equipping cross-functional teams with a shared decision-making language and framework</p>
                </div>
              </div>
            </div>

            <div
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-blue-600" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 leading-tight">Breaking Deadlocks</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Breaking decision deadlocks caused by competing assumptions or siloed perspectives</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-slate-900 rounded-lg p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-1 h-12 bg-blue-400"></div>
              <p className="text-lg text-white leading-relaxed">
                This programme is positioned as a <span className="font-semibold text-blue-400">strategic intervention</span> rather than a training event.
              </p>
              <div className="w-1 h-12 bg-blue-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore a Private Corporate Run - Final Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Explore a Private Corporate Run
            </h2>
            
            <p className="text-base text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              This programme is delivered exclusively as a private corporate engagement and tailored to your organisational context and objectives.
            </p>

            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-base text-slate-600 mb-6 text-left">
                The discussion will cover:
              </p>
              <ul className="space-y-4 text-left">
                <li
                  className="flex items-start gap-3"
                >
                  <span className="text-slate-900 mt-1 flex-shrink-0">•</span>
                  <span className="text-base text-slate-900 leading-relaxed">Understanding organisational challenges and decision context</span>
                </li>
                <li
                  className="flex items-start gap-3"
                >
                  <span className="text-slate-900 mt-1 flex-shrink-0">•</span>
                  <span className="text-base text-slate-900 leading-relaxed">Assess fit and scope for your organisation</span>
                </li>
                <li
                  className="flex items-start gap-3"
                >
                  <span className="text-slate-900 mt-1 flex-shrink-0">•</span>
                  <span className="text-base text-slate-900 leading-relaxed">Exploring delivery options and expected outcomes</span>
                </li>
              </ul>
            </div>

            <a href="/contactus.html?source=nova-design-thinking&cta=discuss-private-corporate-run#contact-form"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 mb-3"
            >
              <span>Discuss a Private Corporate Run</span>
            </a>
            <p className="text-sm text-slate-600">
              We'll help you assess fit, scope, and outcomes — no obligation.
            </p>
          </div>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}