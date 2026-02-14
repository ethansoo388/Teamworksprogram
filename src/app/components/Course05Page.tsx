import { ArrowRight, Menu, X, Clock, Users, MapPin, Sparkles, FileX, Earth, Rocket, Heart, Quote, ChevronLeft, ChevronRight, CheckCircle2, Target, Zap, Shield, Lightbulb, TrendingUp, Building, Briefcase, User, Check, ChevronDown, Building2, Settings, Hand } from "lucide-react";
import { FooterV2 } from "@/site/components/teamworks/v2/FooterV2";
import { ImageWithFallback } from "@/site/components/teamworks/ImageWithFallback";
import { useState, useEffect, useRef } from "react";

export function Course05Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openInvestmentIndex, setOpenInvestmentIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [windowWidth, setWindowWidth] = useState(1024);
  const slideTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stories = [
    {
      image: "https://i.postimg.cc/3xxh89jd/Untitled-design-(34).png",
      title: "From Overwhelmed to Empowered",
      emotion: "Relief & Confidence",
      story: "AI drafts emails, summarizes reports, and organizes data in seconds. Your team focuses on what truly matters.",
      highlight: "3-5 hours saved weekly per team member",
    },
    {
      image: "https://images.unsplash.com/photo-1557562645-4eee56b29bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYW4lMjBkZXZlbG9wZXIlMjBjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzA4Njk3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Faster Coding with AI Assistance",
      emotion: "Speed & Efficiency",
      story: "AI helps debug code, suggests optimizations, and generates documentation. Developers ship features faster with fewer errors.",
      highlight: "50% faster code reviews and debugging",
    },
    {
      image: "https://i.postimg.cc/6qx7gFvQ/teamwork.jpg",
      title: "Teams Working Smarter Together",
      emotion: "Collaboration & Growth",
      story: "AI generates ideas, creates presentations, and solves problems faster. Everyone contributes more effectively.",
      highlight: "Shared skills that elevate the entire team",
    },
    {
      image: "https://i.postimg.cc/sxkHqYPx/Malaysian-team-have-more-imaginative-solutions-at-work.jpg",
      title: "More Imaginative Solutions",
      emotion: "Innovation & Creativity",
      story: "AI generates alternative approaches, explores new angles, and challenges assumptions. Teams break through creative blocks.",
      highlight: "Unlock 10x more ideas in brainstorming sessions",
    },
    {
      image: "https://i.postimg.cc/gjzSVt23/confident.jpg",
      title: "Confidence in Every Task",
      emotion: "Pride & Achievement",
      story: "AI handles repetitive tasks like formatting and extracting information. Your team works faster with less stress.",
      highlight: "Skills that boost morale and productivity",
    },
    {
      image: "https://i.postimg.cc/BZmKpZSP/Heading.png",
      title: "Data Insights in Minutes, Not Days",
      emotion: "Precision & Clarity",
      story: "AI analyzes spreadsheets, identifies patterns, and creates visualizations instantly. Make data-driven decisions faster.",
      highlight: "Transform complex data into actionable insights",
    },
    {
      image: "https://i.postimg.cc/mDjfWHcr/Malaysian-employees-celebrating-win-together.jpg",
      title: "Celebrating Wins Together",
      emotion: "Joy & Success",
      story: "AI accelerates projects and improves output quality. Your team delivers better results and meets deadlines easier.",
      highlight: "Building momentum for lasting change",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 1500);
    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [stories.length]);

  // Window width for radial layout
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stories.length);
    }, 1500);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + stories.length) % stories.length);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % stories.length);
  };

  const investments = [
    {
      company: "Microsoft",
      amount: "$13 billion",
      year: "2023",
      focus: "OpenAI & Azure AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
      description: "Microsoft invested heavily in OpenAI, integrating AI capabilities across Office 365, Azure cloud services, and enterprise solutions, making AI tools accessible to millions of businesses worldwide.",
    },
    {
      company: "Google",
      amount: "$70 billion",
      year: "2024",
      focus: "AI Infrastructure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
      description: "Google's massive investment in AI infrastructure powers Gemini, Bard, and enterprise AI solutions, transforming how businesses leverage data and automation at scale.",
    },
    {
      company: "Amazon",
      amount: "$4 billion",
      year: "2024",
      focus: "Anthropic & AWS AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
      description: "Amazon's investment in Anthropic and AWS AI services brings advanced language models and machine learning tools to businesses of all sizes through cloud infrastructure.",
    },
    {
      company: "Meta",
      amount: "$30+ billion",
      year: "2024",
      focus: "AI Research & Development",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png",
      description: "Meta's commitment to open-source AI through LLaMA and extensive R&D investments are democratizing access to powerful AI models for developers and businesses globally.",
    },
  ];

  const skills = [
    { title: "Prompt better", details: "Tools, ideas, images, solutions" },
    { title: "Write better", details: "Emails, reports, marketing content" },
    { title: "Analyze better", details: "Reports, documents, trends, patterns" },
    { title: "Automate better", details: "Remove repetition, eliminate mundane tasks" },
    { title: "Decide better", details: "Quick insights, accurate data, confidence" },
    { title: "Use AI responsibly", details: "Ethics, safety, privacy, trust" },
  ];

  const courseModules = [
    {
      number: "01",
      title: "AI Basics for Busy Teams",
      description: "Understand what AI can and cannot do at work. Learn where AI adds real value, where it doesn't, and experience your first hands-on interaction with AI in a safe, guided way.",
      highlight: "Get hands-on from day one",
    },
    {
      number: "02",
      title: "Prompting That Actually Works",
      description: "Learn how to communicate with AI clearly and effectively. Participants are guided step-by-step through simple prompt structures to get better, more useful outputs.",
      highlight: "Master the art of AI conversation",
    },
    {
      number: "03",
      title: "AI for Everyday Work",
      description: "Apply AI to common workplace tasks such as emails, reports, summaries, research, and planning through group-based activities focused on real work scenarios.",
      highlight: "Use AI for real tasks immediately",
    },
    {
      number: "04",
      title: 'The "Role-Based Deep Dives" with AI (Specialist Tracks)',
      description: "Explore practical AI use cases for different teams including Marketing, Operations, HR, IT, and Sales. Learn how AI supports each role without replacing human judgement.",
      highlight: "Tailored to your team's needs",
    },
    {
      number: "05",
      title: "Safe and Responsible AI at Work",
      description: "Understand common AI risks such as data privacy, hallucinations, and over-reliance. Learn how to use AI responsibly through demonstrations using simulated data.",
      highlight: "Build trust and confidence",
    },
    {
      number: "06",
      title: "Final AI Challenge: End-to-End Simulation",
      description: "Teams take on realistic departmental scenarios and use AI tools end-to-end to solve problems, improve outputs, and present results based on everything learned during the course.",
      highlight: "Apply everything you've learned",
    },
  ];

  const learningOutcomes = [
    { icon: Target, title: "Use AI tools confidently for daily work tasks", color: "from-blue-500 to-cyan-500" },
    { icon: Sparkles, title: "Write effective prompts to get useful results", color: "from-purple-500 to-pink-500" },
    { icon: Zap, title: "Automate repetitive thinking and admin work", color: "from-amber-500 to-orange-500" },
    { icon: Shield, title: "Apply AI safely within workplace boundaries", color: "from-green-500 to-emerald-500" },
    { icon: Lightbulb, title: "Identify high-impact AI use cases for your role or team", color: "from-yellow-500 to-amber-500" },
    { icon: TrendingUp, title: "Leave with a practical AI action plan for immediate application", color: "from-indigo-500 to-blue-500" },
  ];

  const personas = [
    { icon: Users, title: "Team Leaders and Supervisors", description: "Want their teams to work faster without increasing stress or burnout.", color: "bg-blue-100 text-[#0EA7E9]" },
    { icon: Building, title: "SME Owners and Managers", description: "Need AI to save time and improve efficiency without technical complexity.", color: "bg-teal-100 text-teal-600" },
    { icon: Briefcase, title: "Corporate Teams", description: "Operations, HR, Sales, IT, and Support teams looking for practical AI skills.", color: "bg-sky-100 text-sky-600" },
    { icon: User, title: "Individual Professionals", description: "Want to stay relevant, productive, and AI-savvy at work.", color: "bg-emerald-100 text-emerald-600" },
  ];

  const masterTopics = [
    "AI Fundamentals for Teams",
    "Effective Prompt Engineering",
    "Workplace AI Applications",
    "Department-Specific Use Cases",
    "Responsible AI Practices",
    "End-to-End AI Implementation",
  ];

  const faqs = [
    {
      question: "Do I need any technical background or coding experience?",
      answer: "Not at all! This course is specifically designed for non-technical professionals. We start from the basics and focus on practical applications you can use immediately in your daily work, regardless of your technical expertise.",
    },
    {
      question: "How is this different from free online AI courses?",
      answer: "Unlike generic online courses, this training is hands-on, interactive, and tailored for Malaysian workplace contexts. You'll work on real scenarios relevant to your industry, get immediate feedback from expert instructors, and network with peers facing similar challenges.",
    },
    {
      question: "Will AI replace my job or my team's jobs?",
      answer: "AI is a tool that augments human capabilities, not replaces them. This course teaches you how to use AI to eliminate repetitive tasks so you can focus on creative, strategic, and relationship-driven work that only humans can do well.",
    },
    {
      question: "Is this course suitable for small businesses and SMEs?",
      answer: "Absolutely! The course is specifically designed with SMEs and small teams in mind. All examples and use cases are practical and immediately applicable without requiring large budgets or IT departments.",
    },
    {
      question: "How quickly can my team see results after the training?",
      answer: "Most teams start seeing productivity gains within the first week. You'll leave the course with ready-to-use prompts, templates, and workflows that you can implement immediately in your daily operations.",
    },
  ];

  const courseDetails = [
    { icon: Clock, label: "Duration", value: "2 days" },
    { icon: MapPin, label: "Format", value: "In-person training" },
    { icon: Users, label: "Group size", value: "Max 30 participants" },
    { icon: Hand, label: "Learning style", value: "Hands-on, guided, practical" },
    { icon: Building2, label: "Location", value: "Malaysia" },
    { icon: Settings, label: "Customization", value: "Custom private runs available for companies" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="../index.html" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(to bottom right, #0EA7E9, #0c87ba)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">TEAMWORKS COURSE SERIES · COURSE 05</div>
                <div className="font-bold text-base text-gray-900 -mt-0.5">AI Skills for YOUR Team</div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#modules" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Modules</a>
              <a href="#outcomes" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Outcomes</a>
              <a href="#opportunity" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Opportunity</a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="bookConsultation.html" className="text-white px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all font-medium" style={{ backgroundColor: "#0EA7E9" }}>
                Book This Course for Your Team
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#modules" className="text-sm py-2">Modules</a>
                <a href="#outcomes" className="text-sm py-2">Outcomes</a>
                <a href="#opportunity" className="text-sm py-2">Opportunity</a>
                <a href="#faq" className="text-sm py-2">FAQ</a>
                <a href="bookConsultation.html" className="text-white px-6 py-3 rounded-full text-sm mt-2 text-center" style={{ backgroundColor: "#0EA7E9" }}>
                  Book This Course
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="../index.html" className="hover:text-[#0EA7E9] transition-colors">Home</a>
            <span>/</span>
            <a href="index.html" className="hover:text-[#0EA7E9] transition-colors">Programs</a>
            <span>/</span>
            <span className="text-gray-900 font-bold">AI Skills for YOUR Team</span>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#0EA7E9]/10 border border-[#0EA7E9]/20 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-[#0EA7E9] rounded-full animate-pulse"></div>
                  <span className="text-sm text-[#0EA7E9] font-medium">TEAMWORKS · AI ENABLEMENT</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] tracking-tight">
                    Turn{" "}
                    <span className="relative inline-block">
                      <span className="text-[#0EA7E9]">YOUR</span>
                      <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 9C50 3 150 3 198 9" stroke="#0EA7E9" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                    </span>
                    {" "}Team Into AI-Capable Performers
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-xl leading-relaxed">
                    AI is reshaping how work gets done.<br />
                    Equip your team with practical AI skills they can apply immediately — without coding or technical background.
                  </p>

                  {/* Micro-outcomes */}
                  <div className="flex flex-col gap-3 max-w-xl pt-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0EA7E9] mt-2"></div>
                      <p className="text-base sm:text-lg text-gray-700">Cut drafting & research time</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0EA7E9] mt-2"></div>
                      <p className="text-base sm:text-lg text-gray-700">Improve decision clarity</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0EA7E9] mt-2"></div>
                      <p className="text-base sm:text-lg text-gray-700">Use AI responsibly and confidently</p>
                    </div>
                  </div>
                </div>

                {/* Info Pills */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 bg-gray-50 px-4 sm:px-6 lg:px-8 py-6 rounded-2xl">
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="h-6 w-6 text-[#0EA7E9] mb-1" />
                    <span className="text-xs text-gray-600">Duration</span>
                    <span className="text-base font-bold text-gray-900">2 days</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Users className="h-6 w-6 text-[#0EA7E9] mb-1" />
                    <span className="text-xs text-gray-600">Format</span>
                    <span className="text-base font-bold text-gray-900 whitespace-nowrap">In-person</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Users className="h-6 w-6 text-[#0EA7E9] mb-1" />
                    <span className="text-xs text-gray-600">Capacity</span>
                    <span className="text-base font-bold text-gray-900 whitespace-nowrap">Max 30</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-4 pt-2">
                  <a href="bookConsultation.html" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg text-base sm:text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl group" style={{ backgroundColor: "#0EA7E9" }}>
                    <span className="font-medium">Talk to Us About Your Team</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#0EA7E9]/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0EA7E9]/5 rounded-full blur-3xl"></div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
                    <ImageWithFallback
                      src="https://i.postimg.cc/Vsh77KpY/Untitled-design-(33).png"
                      alt="Diverse team collaborating on AI skills training"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhyNow - Carousel Section */}
        <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#0EA7E9]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#0EA7E9]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center bg-[#0EA7E9]/10 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-medium text-[#0EA7E9]">YOUR ADVANTAGE</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
                Turn AI Into Your Team's Competitive Edge
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                The smartest companies are not just adopting AI tools — they're training their people to use them well.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
                When your team understands how to apply AI properly, productivity increases, decisions become clearer, and repetitive work gets reduced.
              </p>
            </div>

            {/* Carousel */}
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {stories.map((story, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-600 ${currentSlide === index ? "block opacity-100" : "hidden opacity-0"}`}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4">
                      {/* Image */}
                      <div className="relative order-1 mb-12 lg:mb-8">
                        <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                          <ImageWithFallback
                            src={story.image}
                            alt={story.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-4 right-4 bg-white px-6 py-3 rounded-xl border-2 border-[#0EA7E9] shadow-lg">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#0EA7E9]" />
                            <span className="text-sm font-medium text-gray-900">{story.emotion}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="order-2 space-y-6">
                        <div>
                          <Quote className="w-10 h-10 text-[#0EA7E9]/20 mb-4" />
                          <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4 leading-tight">
                            {story.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {story.story}
                          </p>
                          <div className="bg-[#0EA7E9]/5 border-l-4 border-[#0EA7E9] px-5 py-4 rounded-r-lg">
                            <p className="text-base font-medium text-gray-900">
                              {story.highlight}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-[#0EA7E9] hover:bg-[#0EA7E9] text-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex gap-2">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          currentSlide === index
                            ? "w-8 h-2 bg-[#0EA7E9]"
                            : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-[#0EA7E9] hover:bg-[#0EA7E9] text-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="text-center mt-16 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                The opportunity is now. <span className="text-[#0EA7E9] font-medium">Invest in your team's growth</span> and watch them thrive in an AI-enhanced workplace.
              </p>
            </div>
          </div>
        </section>

        {/* TrustStrip - Opportunity Section */}
        <section id="opportunity" className="bg-white py-20 lg:py-28">
          {/* Investment Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-[#0EA7E9]/10 text-[#0EA7E9] px-4 py-2 rounded-full text-sm font-medium mb-6">
              YOUR OPPORTUNITY
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight px-4">
              AI-Capable Teams Are Pulling Ahead. Fast.
            </h2>
            <div className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 px-4">
              <p>Companies are investing billions into AI infrastructure. But technology alone doesn't create advantage — trained teams do.</p>
              <p className="mt-4">The gap between AI-capable teams and everyone else is widening.</p>
            </div>

            {/* Investment Grid */}
            <div className="px-4 sm:px-6 lg:px-16 xl:px-32">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20 max-w-7xl mx-auto items-start">
                {investments.map((investment, index) => {
                  const isOpen = openInvestmentIndex === index;
                  return (
                    <div
                      key={index}
                      className={`bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-300 self-start ${
                        isOpen ? "shadow-xl" : "shadow-sm hover:shadow-md"
                      }`}
                    >
                      <div className="p-4 sm:p-8 flex items-center justify-start border-b border-gray-100">
                        <ImageWithFallback
                          src={investment.logo}
                          alt={`${investment.company} logo`}
                          className="h-6 w-auto max-w-[80px] object-contain object-left"
                        />
                      </div>
                      <div className="p-4 sm:p-6 text-left">
                        <p className="text-3xl text-[#0EA7E9] mb-2">{investment.amount}</p>
                        <p className="text-xs text-gray-500 mb-1">invested in {investment.year}</p>
                        <p className="text-sm text-gray-700 font-medium mb-4">{investment.focus}</p>

                        <button
                          onClick={() => setOpenInvestmentIndex(isOpen ? null : index)}
                          className="flex items-center gap-2 text-sm text-[#0EA7E9] hover:text-[#0c87bb] transition-colors w-full"
                        >
                          <span className="font-medium">Learn more</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 mt-4" : "max-h-0"}`}>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {investment.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center bg-[#0EA7E9]/10 text-[#0EA7E9] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                CORE SKILLS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                Immediate AI Skills Your Team Will Use Daily
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16 px-4">
                Build the foundational AI skillset that improves everyday productivity — without technical overwhelm.
              </p>

              {/* Radial Skills Display - Desktop / Grid - Mobile */}
              <div>
                {/* Mobile Grid Layout */}
                <div className="md:hidden">
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center justify-center bg-blue-50 text-[#0EA7E9] px-6 py-3 rounded-full shadow-lg">
                      <span className="text-base font-bold">AI Capability</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto px-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="bg-white border-2 border-gray-200 rounded-xl px-4 py-4 shadow-md">
                        <p className="text-gray-900 text-sm font-medium leading-snug mb-2">{skill.title}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{skill.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Radial Layout */}
                <div className="hidden md:block relative max-w-6xl mx-auto min-h-[500px] py-8">
                  <div className="absolute z-20 w-32 h-32 rounded-full bg-blue-50 flex items-center justify-center shadow-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="text-[#0EA7E9] text-xl font-bold text-center leading-tight px-2">AI<br/>Capability</span>
                  </div>
                  <div className="absolute w-[700px] h-[400px] rounded-full border border-gray-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                  <div className="relative w-full h-[500px]">
                    {skills.map((skill, index) => {
                      const angle = (index * 360) / skills.length - 90;
                      const radiusX = 350;
                      const radiusY = 200;
                      let x = Math.cos((angle * Math.PI) / 180) * radiusX;
                      let y = Math.sin((angle * Math.PI) / 180) * radiusY;

                      if (index === 3) {
                        y = y + 30;
                      }

                      const adjustedX = x;
                      const adjustedY = y;

                      return (
                        <div key={index}>
                          <svg
                            className="absolute left-1/2 top-1/2 pointer-events-none z-0"
                            style={{
                              width: radiusX * 2,
                              height: radiusY * 2,
                              marginLeft: -radiusX,
                              marginTop: -radiusY,
                            }}
                          >
                            <line
                              x1={radiusX}
                              y1={radiusY}
                              x2={radiusX + adjustedX}
                              y2={radiusY + adjustedY}
                              stroke="#d1d5db"
                              strokeWidth="2"
                            />
                          </svg>
                          <div
                            className="absolute z-10"
                            style={{
                              left: "50%",
                              top: "50%",
                              transform: `translate(calc(-50% + ${adjustedX}px), calc(-50% + ${adjustedY}px))`,
                            }}
                          >
                            <div className="relative bg-white border-2 border-gray-200 hover:border-[#0EA7E9] rounded-xl px-6 py-4 shadow-md hover:shadow-xl transition-all duration-300">
                              <p className="text-gray-900 text-lg font-medium whitespace-nowrap">{skill.title}</p>
                              <p className="text-gray-500 text-sm mt-1">{skill.details}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview Section */}
        <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center bg-[#0EA7E9]/10 px-4 py-2 rounded-full text-sm mb-6">
                <span className="text-[#0EA7E9] font-medium">COURSE BENEFITS</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                Designed for Busy Teams Who Need Real Results
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Practical AI skills for real workplace challenges — not technical theory.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: FileX, title: "No coding required", description: "No technical background needed. Built for everyday professionals." },
                { icon: Earth, title: "Real-world applications", description: "Based on realistic workplace scenarios and team workflows." },
                { icon: Rocket, title: "Immediate impact", description: "Apply what you learn the very next working day." },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group relative">
                    <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-[#0EA7E9]" />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-0.5 bg-[#0EA7E9]"></div>
                    </div>
                    <h3 className="text-3xl text-gray-900 mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#0EA7E9]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#0EA7E9]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#0EA7E9]"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Learning Outcomes Section */}
        <section id="outcomes" className="bg-gradient-to-b from-white to-blue-50/30 py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96"></div>
          </div>

          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center bg-[#0EA7E9]/10 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-medium text-[#0EA7E9]">OUTCOMES</span>
              </div>
              <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
                What Your Team Will Be Able to Do
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                After this session, your team will stop asking, "Can AI help with this?" — and start applying it confidently.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
              {/* Left Side - Video */}
              <div className="sticky top-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-[4/3] max-w-md mx-auto">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/qEVSB4rNANI?autoplay=1&loop=1&playlist=qEVSB4rNANI&mute=1"
                    title="AI Training Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-gray-600 mt-4 text-sm">
                  Explore your AI potential with us.
                </p>
                <p className="text-center text-gray-500 mt-2 text-xs max-w-md mx-auto">
                  Ref: "9 AI Skills You MUST Have to Become Rich in 2026." YouTube, uploaded by Dan Martell 2024.
                </p>
              </div>

              {/* Right Side - Outcomes Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {learningOutcomes.map((outcome, index) => {
                  const Icon = outcome.icon;
                  return (
                    <div
                      key={index}
                      className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden rounded-xl"
                    >
                      <div className="p-6 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${outcome.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        <div className="relative">
                          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0EA7E9]/10 group-hover:bg-[#0EA7E9] transition-colors duration-300">
                            <Icon className="h-6 w-6 text-[#0EA7E9] group-hover:text-white transition-colors duration-300" />
                          </div>
                          <p className="text-gray-700 font-medium leading-relaxed">{outcome.title}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0EA7E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Course Modules Section */}
        <section id="modules" className="relative bg-white py-20 lg:py-28 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center bg-[#0EA7E9]/10 px-4 py-2 rounded-full mb-6">
                <span className="text-sm text-[#0EA7E9] font-medium">COURSE MODULES</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                What You'll Learn
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                A structured, hands-on journey from AI fundamentals to real-world application — designed for teams who want results, not theory.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {courseModules.map((module) => (
                <div
                  key={module.number}
                  className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-[#0EA7E9]/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0EA7E9]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-6xl text-[#0EA7E9]/30 group-hover:text-[#0EA7E9]/50 transition-colors">
                        {module.number}
                      </div>
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-3 leading-tight">
                      {module.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 bg-[#0EA7E9]/10 text-[#0EA7E9] px-3 py-1.5 rounded-full text-sm mb-4">
                      <Sparkles className="w-3.5 h-3.5" />
                      {module.highlight}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-cyan-50 text-[#0EA7E9] px-6 py-2 rounded-full text-sm font-medium mb-4">
                TARGET AUDIENCE
              </div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-3">
                Who Is This Course For?
              </h2>
              <p className="text-gray-700">
                Built for professionals and teams who want practical AI capability — not technical deep dives.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {personas.map((persona, index) => {
                const Icon = persona.icon;
                return (
                  <div key={index} className="border-2 hover:border-blue-200 transition-colors text-center rounded-xl bg-white overflow-hidden">
                    <div className="pb-2 sm:pb-6 pt-6 px-4">
                      <div className={`w-10 h-10 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center ${persona.color} mb-2 sm:mb-4`}>
                        <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{persona.title}</h3>
                    </div>
                    <div className="pt-0 pb-3 sm:pb-6 px-4">
                      <p className="text-xs sm:text-base text-gray-500">
                        {persona.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Course Details
            </h2>

            <div className="border-2 rounded-xl bg-white overflow-hidden">
              <div className="p-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {courseDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-[#0EA7E9]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">{detail.label}</p>
                          <p className="font-semibold text-gray-900">{detail.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-cyan-50 text-[#0EA7E9] px-6 py-2 rounded-full text-sm font-medium mb-4">
                INVESTMENT
              </div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                Ready to Empower Your Team?
              </h2>
              <p className="text-lg text-gray-600">
                Invest in practical AI skills that deliver immediate results
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-start">
              {/* Left - Pricing */}
              <div className="h-full">
                <div className="p-8 lg:p-10">
                  <div className="text-left mb-8">
                    <p className="text-gray-500 text-base mb-4">Per 2-day course</p>
                    <div className="mb-2">
                      <span className="text-5xl lg:text-6xl font-bold text-gray-900">RM350</span>
                      <span className="text-gray-600 text-xl ml-2">per person/day</span>
                    </div>
                    <p className="text-gray-900 text-base mt-4">Up to 30 participants per session</p>
                  </div>

                  <div className="mb-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-gray-900 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-900 text-base">2-day intensive workshop</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-gray-900 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-900 text-base">All course materials & templates</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-gray-900 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-900 text-base">Expert instructor (10+ years exp)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-gray-900 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-900 text-base">Certificate of completion</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-gray-900 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-900 text-base">Post-workshop support & community</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-gray-900 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-900 text-base">Pre-course alignment session for your team</p>
                      </div>
                    </div>
                  </div>

                  <a href="bookConsultation.html" className="w-full text-lg text-white py-4 px-8 rounded-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all group" style={{ backgroundColor: "#0EA7E9" }}>
                    Plan This Course for Your Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    A short discussion to understand your goals and team needs.
                  </p>
                </div>
              </div>

              {/* Right - What You'll Master */}
              <div className="h-full">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-2 mb-6">
                    <h3 className="text-2xl font-semibold text-gray-900">What You'll Master</h3>
                  </div>

                  <div className="space-y-3 mb-8">
                    {masterTopics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-[#0EA7E9] flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{topic}</p>
                      </div>
                    ))}
                  </div>

                  {/* Real Impact Box */}
                  <div className="bg-[#0EA7E9]/10 border-2 border-[#0EA7E9]/30 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#0EA7E9] flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Real Impact</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Teams who complete this training report saving 5-10 hours per week on routine tasks,
                          enabling them to focus on high-value work that drives business results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white pt-16 lg:pt-24 pb-32 lg:pb-40">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-cyan-50 text-[#0EA7E9] px-6 py-2 rounded-full text-sm font-medium mb-4">
                FAQ
              </div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about the AI Skills training
              </p>
            </div>

            <div className="space-y-4 mb-8 pb-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-lg px-6 transition-colors ${openFaqIndex === index ? "border-[#0EA7E9]" : "border-gray-200"}`}
                >
                  <button
                    className="w-full text-left hover:no-underline py-6 cursor-pointer flex items-center justify-between"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900 text-base lg:text-lg">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openFaqIndex === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaqIndex === index && (
                    <div className="text-gray-600 pb-6 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 text-gray-900 py-20 lg:py-32">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl leading-tight text-gray-900">
                Don't Let Your Team Fall Behind the AI Curve.
              </h2>

              <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
                AI tools are evolving rapidly — but tools alone don't create advantage. <span className="text-gray-900 font-normal">Trained, confident teams do.</span> Equip your people with practical AI skills they can apply immediately.
              </p>

              <div className="space-y-6 pt-6">
                <a href="bookConsultation.html" className="inline-flex items-center gap-2 text-lg px-10 py-4 text-white rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all" style={{ backgroundColor: "#0EA7E9" }}>
                  Empower Your Team Today
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#0EA7E9]" />
                  <span className="text-base">No coding required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#0EA7E9]" />
                  <span className="text-base">100% practical workplace application</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#0EA7E9]" />
                  <span className="text-base">Immediate real-world impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterV2 />
    </div>
  );
}
