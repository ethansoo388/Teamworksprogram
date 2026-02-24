import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { CTASection } from "@/site/components/jess/CTASection";
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";
import { Users, Award, Zap, Target, BookOpen, Lightbulb, ArrowRight, ArrowLeft, Video, MapPin, Check } from "lucide-react";
const heroImage = "/src/assets/img/jess/13710a2218ff3dbfa7f73a0f93db5eeecab72c44.png";

const courses = [
  {
    title: "NOVA: Agile & Scrum for Delivery Teams",
    description: "For teams who need better execution, clearer roles, and more predictable delivery.\n\nThis course focuses on improving how teams plan, collaborate, and deliver work — without adding unnecessary process.",
    duration: "4 weeks",
    color: "from-blue-500 to-cyan-500",
    accentColor: "bg-blue-600",
    lightBg: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: Users,
    path: "nova/agile-scrum.html",
    highlights: [
      "Registered Scrum Master™ certification",
      "Advanced sprint facilitation techniques",
      "AI-powered agile workflows",
      "Real-world case studies",
      "Hands-on team simulations"
    ]
  },
  {
    title: "NOVA: Design Thinking for Real-World Problem Solving",
    description: "For teams facing messy, people-centric problems and unclear requirements.\n\nThis course builds practical problem-solving skills to help teams understand users, define the right problems, and test better solutions.",
    duration: "4 weeks",
    color: "from-purple-500 to-pink-500",
    accentColor: "bg-indigo-600",
    lightBg: "bg-indigo-50",
    borderColor: "border-indigo-200",
    icon: Lightbulb,
    path: "nova/design-thinking.html",
    highlights: [
      "Certified Design Thinking practitioner",
      "User research & empathy mapping",
      "Rapid prototyping techniques",
      "Innovation frameworks",
      "Cross-functional collaboration"
    ]
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
      <MainSiteNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <a
            href="index.html"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-16 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Main Page</span>
          </a>
          
          {/* Two Column Layout - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px] lg:min-h-[700px] mb-32">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center"
            >            
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-slate-900 leading-tight">
                High Performance.<br />Real Value.
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                The NOVA Series equips teams with practical skills, delivery rhythm, and the right mindset to perform at a higher level — through two focused, hands-on courses.
              </p>
              
              <p className="text-lg text-slate-500 mb-12 font-medium">
                Choose the course that fits your team's most urgent challenge today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-lg"
                >
                  <span>Explore the NOVA Courses</span>
                  <ArrowRight size={22} />
                </button>
                <a
                  href="mailto:romanoff@ciagile.com"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 text-lg"
                >
                  <span>Talk to an Expert</span>
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full min-h-[500px] lg:min-h-[700px]"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-slate-100 shadow-2xl">
                <ImageWithFallback 
                  src="https://i.postimg.cc/Jtwx459D/HERO-IMAGE-NOVA.png"
                  alt="Team collaborating and working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <p className="text-center text-lg text-slate-600 mb-6">What teams experience across the NOVA Series</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">2 Days</div>
              <p className="text-sm text-slate-600">Intensive coaching to transform your team</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">100% Hands-On</div>
              <p className="text-sm text-slate-600">Trusted by teams across multiple industries</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">3X</div>
              <p className="text-sm text-slate-600">Average productivity improvement</p>
            </div>
          </div>

          {/* What is NOVA Series Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-12 mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is the NOVA Series?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The NOVA Series is a structured set of hands-on courses designed to help teams collaborate better, solve real problems, and deliver results with confidence.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Instead of one-size-fits-all training, the NOVA Series offers <span className="font-semibold text-slate-900">two focused courses</span>, allowing organisations to start where they need the most impact — execution or problem-solving.
            </p>
          </div>

          {/* Training Approach & Business Outcomes */}
          <p className="text-center text-lg text-slate-600 mb-8">Every course in the NOVA Series follows the same proven approach — focused, practical, and outcome-driven.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Training Approach */}
            <div className="bg-slate-50 rounded-xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Training Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Expert-led coaching with 10+ years experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Hands-on practice with real-world scenarios</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Interactive workshops and team simulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Industry-recognized certifications</span>
                </li>
              </ul>
            </div>

            {/* Business Outcomes */}
            <div className="bg-slate-50 rounded-xl p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Business Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Improved team collaboration and communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Faster time-to-market for products</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Higher quality deliverables and reduced defects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-slate-900 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Increased employee engagement and retention</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Choose Your NOVA Course
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Each course in the NOVA Series targets a different team challenge. Start with the one that matters most to your team today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
              >
                <a
                  href={course.path}
                  className="group block bg-white border border-slate-200 rounded-lg p-10 hover:bg-blue-50 hover:border-blue-600 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Icon - No color background */}
                  <div className="mb-6">
                    <course.icon className="text-slate-900" size={28} strokeWidth={1.5} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {course.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base text-slate-600 leading-relaxed mb-8 flex-grow">
                    {course.description}
                  </p>
                  
                  {/* CTA - Simple text link */}
                  <div className="inline-flex items-center gap-2 text-slate-900 group-hover:text-blue-600 font-medium self-start group-hover:gap-3 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Team Training Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Private Team Training
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The NOVA Series is delivered exclusively as private training for organisations.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Each course is tailored to your team's context, challenges, and business goals. Delivery format, schedule, and investment are aligned based on your needs and scope.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
              Start with the NOVA course that fits your team
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
              >
                <span>Explore the NOVA Courses</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="mailto:romanoff@ciagile.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
              >
                <span>Talk to an Expert</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}