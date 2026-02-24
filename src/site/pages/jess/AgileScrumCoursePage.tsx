import { motion } from "motion/react";
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";
import { 
  Users, ArrowLeft, CheckCircle2, Briefcase, Target, 
  Settings, Building2, Check, Mail, Zap, TrendingUp, Heart, Award, ArrowRight, Crown,
  Clock, MessageSquare, UsersRound
} from "lucide-react";
const heroImage = "/src/assets/img/jess/13710a2218ff3dbfa7f73a0f93db5eeecab72c44.png";
const learningOutcomesImage = "/src/assets/img/jess/8ecbe07a136fd90d769d331eb2663bf4d45ffcc4.png";

const audienceList = [
  {
    icon: Users,
    title: "Delivery & Development Teams",
    description: "(New to Agile or already practicing)"
  },
  {
    icon: Users,
    title: "Cross-Functional Team Members",
    description: "(Working across roles and silos)"
  },
  {
    icon: Settings,
    title: "Operations & Support Teams",
    description: "(Supporting or enabling Agile delivery)"
  },
  {
    icon: Briefcase,
    title: "Managers & Leaders",
    description: "(Overseeing or guiding Agile teams)"
  },
  {
    icon: Building2,
    title: "Teams Transitioning",
    description: "(From traditional ways of working to Agile)"
  },
  {
    icon: Target,
    title: "Outcome-Driven Teams",
    description: "(Focused on results, not just ceremonies)"
  }
];

const learningOutcomes = [
  "Become a confident and skilled Agile practitioner, prepared to thrive in a dynamic Scrum team environment.",
  "Gain a deep understanding of Agile and Scrum values and principles, and learn how to apply them effectively.",
  "Elevate professional credentials and unlock career opportunities in Agile project management the AI-driven way."
];

const workProblems = [
  "Gain insights into accelerating time-to-market and achieving business outcomes through Agile practices.",
  "Build skills to prioritize work for maximum value and overcome delays and communication challenges.",
  "Learn what customer-centric development means.",
  "Learn to deliver products from planning and development to production.",
  "Learn how to define product vision and align teams with that vision."
];

const modules = [
  {
    number: "01",
    title: "Agile & Scrum",
    content: [
      "Importance of adopting Agile values and principles in today's fast-paced economy.",
      "Learn the Scrum framework and how it fits into Agile ways of working.",
      "Learn how Lean principles in Scrum enable continuous improvement and waste elimination."
    ]
  },
  {
    number: "02",
    title: "Deliver Product Quickly",
    content: [
      "Define product vision and align teams.",
      "From planning to production.",
      "Prioritize work.",
      "Customer-centric development.",
      "Optional: AI-driven work planning."
    ]
  },
  {
    number: "03",
    title: "Hyper-Productivity",
    content: [
      "How Scrum builds hyper-productive systems.",
      "Optional: AI-driven work optimization.",
      "Sprint cycle simulation.",
      "Leadership in Agile teams.",
      "Five key Scrum events."
    ]
  },
  {
    number: "04",
    title: "Continuous Improvement",
    content: [
      "Effective planning and estimation.",
      "Optional: AI-driven performance analysis.",
      "Best practices for continuous improvement.",
      "Common challenges in Agile environments."
    ]
  }
];

export function AgileScrumCoursePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <MainSiteNavigation />
      
      {/* Hero Section - Full Cover Image */}
      <section className="relative h-[90vh] min-h-[500px] sm:min-h-[600px] overflow-hidden">
        {/* Full Cover Image */}
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/NFGmGnM3/AS201-Hero-image.webp"
            alt="Agile & Scrum 201 - Professional Training"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Back Link - Mobile Only - Top Left - Absolute to section */}
        <a
          href="../team-level-training.html"
          className="lg:hidden absolute top-24 left-4 inline-flex items-center gap-2 text-white hover:text-slate-200 transition-colors group z-20"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to NOVA Series</span>
        </a>

        {/* Content Overlay */}
        <div className="relative h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-end">
          <div className="max-w-7xl mx-auto w-full flex justify-center lg:justify-end pt-32 sm:pt-56 lg:pt-28 pb-10 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center lg:text-left"
            >
              {/* Badge - Mobile centered, Desktop left */}
              <div className="lg:hidden flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/20 backdrop-blur-sm mb-5 mt-3 w-fit mx-auto">
                <Users size={14} className="text-white" />
                <span className="text-xs font-medium text-white">NOVA by CI Agile</span>
              </div>
              
              {/* Title - Mobile: Combined, Desktop: Split */}
              <h1 className="lg:hidden text-5xl font-bold mb-5 text-white leading-tight">
                Agile & Scrum 201
              </h1>

              {/* Desktop Title - Split into two lines */}
              <h1 className="hidden lg:block text-6xl font-bold text-white leading-tight mb-2">
                Agile & Scrum
              </h1>
              
              {/* Desktop: 201 with Badge on same line */}
              <div className="hidden lg:flex items-center gap-4 mb-5">
                <span className="text-6xl font-bold text-white leading-tight">201</span>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">
                  <Users size={16} className="text-white" />
                  <span className="text-sm font-medium text-white">NOVA by CI Agile</span>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl lg:text-2xl font-medium mb-5 sm:mb-8 lg:mb-5 text-white leading-snug">
                Turn Agile Theory into Measurable Team Performance
              </h2>
              
              <p className="text-sm sm:text-base lg:text-base text-white/90 leading-relaxed mb-4 lg:mb-3">
                A private, instructor-led course for organizations building effective Agile teams — whether members are new to Scrum and Agile or already practicing them. The course creates shared understanding and practical skills so teams can plan, execute, and deliver with confidence in real business environments.
              </p>
              
              <p className="text-sm sm:text-base lg:text-sm text-white/90 leading-relaxed mb-7 lg:mb-6">
                This is a private, organization-run course. Delivery format, customization, and investment are discussed after understanding your team context.
              </p>
              
              <div className="flex flex-col items-center lg:items-start">
                <button 
                  onClick={() => window.location.href = "mailto:romanoff@ciagile.com"}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg text-sm sm:text-base whitespace-nowrap mb-2"
                >
                  <span>Talk to Us About a Private Run</span>
                </button>
                <p className="text-xs lg:text-sm text-white/60 lg:text-slate-400">
                  No pricing or commitment — just a short discussion to assess fit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 leading-tight">
              Why Organizations Choose Agile & Scrum 201
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Many organizations adopt Agile with teams at very different levels of experience. Some are new to Scrum and Agile, while others are already practicing — often leading to misalignment, confusion, and inconsistent outcomes.
            </p>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Agile & Scrum 201 is designed to bring teams onto the same page quickly. It builds a strong foundation for those new to Agile, while helping experienced practitioners sharpen execution, collaboration, and delivery discipline.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              The focus is not on theory alone, but on applying Agile principles in day-to-day work to achieve real delivery results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who This Course Is For */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-visible">
        {/* Background Image - Right Side - Desktop Only */}
        <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 w-2/5">
          <img 
            src="https://i.postimg.cc/LsxXVW5h/zi-yuan-4.webp"
            alt="Professional learning agile and scrum"
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                  Who This Program Is Designed For
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
                {audienceList.map((audience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-slate-300 flex items-center justify-center mb-3">
                      <audience.icon className="text-slate-900" size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xs sm:text-sm font-medium text-slate-900 leading-tight mb-1">{audience.title}</h3>
                    <p className="text-xs text-slate-500 leading-tight">{audience.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Image - Shows below content on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:hidden mt-12"
              >
                <img 
                  src="https://i.postimg.cc/LsxXVW5h/zi-yuan-4.webp"
                  alt="Professional learning agile and scrum"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>

            {/* Right Side - Empty space for background image on desktop */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Team & Delivery Outcomes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column - Solve Real Delivery Challenges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-6 py-3 bg-slate-700 text-white rounded-full mb-8">
                <span className="font-medium">Solve Real Delivery Challenges</span>
              </div>

              {/* Problem Icons Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                    <Clock className="text-slate-700" size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-slate-600 leading-tight">Delivery<br />Delays</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                    <UsersRound className="text-slate-700" size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-slate-600 leading-tight">Demotivated<br />Teams</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                    <MessageSquare className="text-slate-700" size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-slate-600 leading-tight">Breakdowns in<br />Communication</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                    <Users className="text-slate-700" size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-slate-600 leading-tight">Lack of<br />Team Collaboration</span>
                </div>
              </div>

              {/* Problem Solutions */}
              <div className="space-y-6">
                <p className="text-base text-slate-700 leading-relaxed">
                  Teams gain practical clarity on how to reduce delivery delays, improve coordination, and achieve business outcomes in real-world work scenarios using Agile principles.
                </p>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  Teams learn how to prioritize work for maximum value, reduce delivery friction, and address the root causes behind delays and miscommunication.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1">•</span>
                    <span className="text-base text-slate-700">Understand Agile and Scrum fundamentals with clear, shared language across the team.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1">•</span>
                    <span className="text-base text-slate-700">Learn how work flows from planning to delivery in a Scrum-based environment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1">•</span>
                    <span className="text-base text-slate-700">Align teams around priorities, goals, and outcomes — even with mixed experience levels.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Deliver with Scrum, Supported by AI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block px-6 py-3 bg-slate-700 text-white rounded-full mb-8">
                <span className="font-medium">Deliver with Scrum, Supported by AI</span>
              </div>

              {/* Outcomes */}
              <div className="space-y-6 mb-8">
                <p className="text-base text-slate-700 leading-relaxed">
                  Build confidence in applying Scrum and Agile ways of working, whether teams are new to Agile or already practicing within a Scrum environment.
                </p>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  Develop a shared understanding of Agile and Scrum values so teams can apply the framework consistently and effectively in real delivery situations.
                </p>
                
                <p className="text-base text-slate-700 leading-relaxed">
                  Apply AI in a practical and responsible way to support planning, communication, and delivery — reducing manual overhead without adding unnecessary complexity.
                </p>
              </div>

              {/* Circular Diagram */}
              <div className="flex justify-center">
                <ImageWithFallback 
                  src="https://i.postimg.cc/1XHqq0dD/Scrum.webp"
                  alt="Agile iterative process"
                  className="w-full max-w-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Deliver Results - Dark Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              How We Deliver Results
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Accelerate Time-to-Market */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <Zap className="text-blue-400" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Accelerate Time-to-Market
                <ArrowRight size={16} className="text-slate-400" />
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Help teams reduce delivery delays and move work from idea to release more smoothly by applying Agile principles in real work scenarios.
              </p>
            </motion.div>

            {/* Card 2 - Maximize Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <TrendingUp className="text-blue-400" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Maximize Value
                <ArrowRight size={16} className="text-slate-400" />
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Enable teams to prioritize the right work, make trade-offs visible, and focus effort on outcomes that matter most to the business.
              </p>
            </motion.div>

            {/* Card 3 - Customer-Centric Approach */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <Heart className="text-blue-400" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Customer-Centric Approach
                <ArrowRight size={16} className="text-slate-400" />
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Build a shared understanding of customer value so teams can align decisions, delivery, and priorities throughout the end-to-end workflow.
              </p>
            </motion.div>

            {/* Card 4 - Vision Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
                <Award className="text-blue-400" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                Vision Alignment
                <ArrowRight size={16} className="text-slate-400" />
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Help teams align around clear goals and direction, enabling more consistent execution even when experience levels differ.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Course Modules
            </h2>
            <p className="text-lg text-slate-600">
              Modules are structured to build strong fundamentals first, then progress into practical application and delivery improvement.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Module 01 - Image Left, Content Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://i.postimg.cc/xjzJVQTx/Mod-1.jpg"
                  alt="Agile & Scrum Module"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 01
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Agile & Scrum
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Master the foundational principles that drive modern delivery
                  </p>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Understanding why Agile values and principles matter in today's fast-paced economy is essential. Learn the Scrum framework and discover how Lean principles enable continuous improvement and waste elimination.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Agile values & principles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Scrum framework</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Lean principles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Continuous improvement</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Module 02 - Content Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 02
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Deliver Product Quickly
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Turn strategy into execution — at scale.
                  </p>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Learn to define product vision and align teams from planning to production. Master prioritization techniques and customer-centric development with optional AI-driven work planning.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Define product vision</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Customer-centric delivery</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Prioritize work effectively</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">AI-driven planning</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <ImageWithFallback
                  src="https://i.postimg.cc/fLKzjMc5/Mod-2-2.jpg"
                  alt="Product Delivery Module"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Module 03 - Image Left, Content Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://i.postimg.cc/VNS10jvs/mod-3.jpg"
                  alt="Hyper-Productivity Module"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 03
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Hyper-Productivity
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Build high-performing teams that deliver exceptional results
                  </p>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Discover how Scrum creates hyper-productive systems. Practice sprint cycles, master the five key Scrum events, and learn leadership approaches for Agile teams with optional AI-driven optimization.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Hyper-productive systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Five Scrum events</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Sprint cycle simulation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">AI-driven optimization</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Module 04 - Content Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="text-xs font-semibold text-slate-500 tracking-wider mb-3">
                  MODULE 04
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Continuous Improvement
                </h3>
                <div className="border-l-2 border-slate-900 pl-4 mb-6">
                  <p className="text-base text-slate-700">
                    Sustain excellence through iterative refinement and learning
                  </p>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Master effective planning and estimation techniques. Learn best practices for continuous improvement and navigate common challenges in Agile environments with optional AI-driven performance analysis.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Effective planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Best practices</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">Common challenges</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 text-sm">•</span>
                    <span className="text-sm text-slate-700">AI performance analysis</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <ImageWithFallback
                  src="https://i.postimg.cc/ZnVXDgg8/Mod-4.jpg"
                  alt="Continuous Improvement Module"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Options */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Delivery Options for Your Organization
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Standard Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg border border-slate-200 p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Invisible spacer to match AI-Driven badge height */}
              <div className="h-8 mb-4"></div>
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">Standard</h3>
                <p className="text-sm text-slate-600 mb-6 h-10">Ideal for teams building a strong Agile foundation</p>
                
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-8xl font-bold text-slate-900 leading-none">2</span>
                  <div className="flex flex-col items-start pb-1">
                    <span className="text-lg text-slate-600">Days</span>
                    <span className="text-lg text-slate-600">(Instructor-Led)</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.location.href = "mailto:romanoff@ciagile.com"}
                  className="w-full mt-6 px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  Discuss Standard Delivery
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Face to Face Version</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Live Virtual Version</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700"><span className="font-semibold">100%</span> PSM I Syllabus Coverage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700"><span className="font-semibold">100%</span> CSM Syllabus Coverage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700"><span className="font-semibold">100%</span> Scrum Guide Coverage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">3 Roles, 5 Events, 3 Artifacts</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Continuous Improvement</span>
                </div>
                
                {/* Not included - grayed out */}
                <div className="flex items-start gap-3 opacity-40">
                  <Check size={18} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-500">2025 Next-Gen Approach</span>
                </div>
                <div className="flex items-start gap-3 opacity-40">
                  <Check size={18} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-500">AI-Driven Scrum Events</span>
                </div>
                <div className="flex items-start gap-3 opacity-40">
                  <Check size={18} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-500">AI Tools Integration</span>
                </div>
                <div className="flex items-start gap-3 opacity-40">
                  <Check size={18} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-500">AI Prompt Engineering</span>
                </div>
                <div className="flex items-start gap-3 opacity-40">
                  <Check size={18} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-500">AI-Driven Multi-Teams Sync</span>
                </div>
                <div className="flex items-start gap-3 opacity-40">
                  <Check size={18} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-500">1-Click Project Status Reporting</span>
                </div>
              </div>

              {/* Footnote */}
              <p className="text-xs text-slate-500 mt-6 text-center">
                Final structure, emphasis, and investment depend on team size and delivery context.
              </p>
            </motion.div>

            {/* AI-Driven Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg border-2 border-slate-300 p-10 shadow-lg relative"
            >
              {/* Best Value Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-2.5 rounded-bl-xl rounded-tr-lg shadow-lg flex items-center gap-2">
                <Crown size={14} className="text-amber-400" strokeWidth={2.5} />
                <span className="text-xs font-bold tracking-wide">PREMIUM CHOICE</span>
              </div>

              {/* Spacer for badge */}
              <div className="h-8 mb-4"></div>

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">AI-Driven</h3>
                <p className="text-sm text-slate-600 mb-6 h-10">Ideal for teams ready to enhance delivery with AI support</p>
                
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-8xl font-bold text-slate-900 leading-none">3</span>
                  <div className="flex flex-col items-start pb-1">
                    <span className="text-lg text-slate-600">Days</span>
                    <span className="text-lg text-slate-600">(Instructor-Led)</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.location.href = "mailto:romanoff@ciagile.com"}
                  className="w-full mt-6 px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  Discuss AI-Driven Delivery
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Face to Face Version</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Live Virtual Version</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700"><span className="font-semibold">100%</span> PSM I Syllabus Coverage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700"><span className="font-semibold">100%</span> CSM Syllabus Coverage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700"><span className="font-semibold">100%</span> Scrum Guide Coverage</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">3 Roles, 5 Events, 3 Artifacts</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Continuous Improvement</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">2025 <span className="font-semibold">Next-Gen</span> Approach</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">AI-Driven Scrum Events</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">AI Tools Integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">AI Prompt Engineering</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">AI-Driven Multi-Teams Sync</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">1-Click Project Status Reporting</span>
                </div>
              </div>

              {/* Footnote */}
              <p className="text-xs text-slate-500 mt-6 text-center">
                Final structure, emphasis, and investment depend on team size and delivery context.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-sm text-slate-600 mb-4">
              Contact us to discuss the right delivery approach for your organization
            </p>
            <button 
              onClick={() => window.location.href = "mailto:romanoff@ciagile.com"}
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              <span>Discuss Delivery Options</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Explore This for Your Organization?
            </h2>
            
            <p className="text-xl text-slate-300 mb-4 leading-relaxed">
              Let's discuss your teams, delivery challenges, and the right way to run this program in your context.
            </p>
            
            <p className="text-sm text-slate-400 mb-12">
              This is a no-obligation conversation to assess fit and approach.
            </p>
            
            <button 
              onClick={() => window.location.href = "mailto:romanoff@ciagile.com"}
              className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 shadow-lg text-lg"
            >
              Schedule a Corporate Discussion
            </button>
            
            <p className="text-xs text-slate-500 mt-6">
              Typically a 30-minute conversation with a senior facilitator.
            </p>
          </motion.div>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}