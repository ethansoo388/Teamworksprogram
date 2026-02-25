import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { CTASection } from "@/site/components/jess/CTASection";
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";
import { LeadershipAccordion } from "@/site/components/jess/LeadershipAccordion";
import { AIBenefitsCards } from "@/site/components/jess/AIBenefitsCards";
import { ArrowRight, ArrowLeft, Download, MessageCircle, ChevronDown, ChevronUp, Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/site/components/jess/ui/accordion";

const decisionGapStats = [
  {
    stat: "53%",
    label: "Struggle to prioritise the right work",
  },
  {
    stat: "52%",
    label: "Struggle to track business impact",
  },
  {
    stat: "35%",
    label: "Struggle to measure performance fairly",
  },
];

const learningOutcomes = [
  "How to prioritise work that directly moves business outcomes",
  "How to connect execution metrics to real value",
  "How to lead Product Owners and Scrum Masters with clarity",
  "How to integrate AI into Scrum without increasing risk or noise",
  "How to operate an enterprise delivery system with confidence",
];

const targetAudience = [
  "Leaders accountable for business and enterprise-level outcomes",
  "Transformation, PMO, and product leaders shaping execution systems",
  "Senior Scrum Masters and Product Owners influencing beyond a single team",
  "Leaders scaling agility across multiple teams, products, or portfolios",
];

const notFor = [
  "Entry-level or introductory Scrum training",
  "Tool-only Agile courses focused on mechanics",
  "Theory-heavy certification programs without real-world application",
];

export function LeadershipTrainingPage() {

  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation />
      
      {/* Hero Section - Full Width Cinematic */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/t40xXfbZ/jeff-Sutherland3.jpg"
            alt="Jeff Sutherland Leadership Training"
            className="w-full h-full object-cover"
          />
          {/* Dark Left-to-Right Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/30"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              {/* Back Link */}
              <a
                href="/jess/index.html"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mb-12 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to JESS Home Page
              </a>
              
              {/* Eyebrow */}
              <p className="text-sm font-medium text-white/70 uppercase tracking-wider mb-4">Jeff Sutherland's Enterprise Agility Program</p>
              
              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
                Enterprise Agility.<br />
                Led as a System.
              </h1>
              
              {/* Description */}
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-xl">
                A two-course leadership pathway for senior leaders aligning strategy, activating high-performance teams, and scaling execution across complex enterprises.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a 
                  href="#jess-learning-program"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg text-base"
                >
                  Explore the Courses
                  <ArrowRight size={18} />
                </a>
                
                <a 
                  href="/contactus.html?source=jess-develop-agile-leader&cta=talk-to-program-advisor#contact-form"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/60 transition-all text-base backdrop-blur-sm"
                >
                  Talk to a Program Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs Bar */}
      <div className="sticky top-0 z-40 bg-[#2C3E50] border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8 sm:gap-12">
            <span className="relative py-4 text-sm sm:text-base font-medium text-white">
              Overview
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"></div>
            </span>

            <a
              href="course-modules.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-300 hover:text-white"
            >
              Course Modules
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="instructor.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-300 hover:text-white"
            >
              Instructor
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="class-schedule.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-300 hover:text-white"
            >
              Class Schedule
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="individual-enrollment.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-300 hover:text-white"
            >
              Enrollment
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </nav>
        </div>
      </div>

      {/* Why Agile Transformations Stall */}
      <section className="py-16 sm:py-24 border-t border-slate-700 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
          >
            {/* Two Column Layout on Desktop, Stacked on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
              {/* Left Column - Headline + Intro */}
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-amber-500 to-transparent"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-10 text-white leading-[1.2]">
                  Why Agile Transformations Stall
                </h2>
                
                <div className="space-y-6 text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                  <p className="text-white font-normal">Most organizations invest in agile training.</p>
                  <p className="text-white font-normal">Few redesign the system around it.</p>
                  <div className="pt-8 mt-8 border-t-2 border-slate-700 space-y-6">
                    <p className="text-white font-medium text-xl sm:text-2xl">Agile does not fail because of teams.</p>
                    <p className="text-white font-medium text-xl sm:text-2xl">It fails because of system design.</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Structured Bullet List */}
              <div className="jess-reveal bg-slate-800/50 border border-slate-700 rounded-2xl p-8 sm:p-10 shadow-xl hover:shadow-2xl hover:border-slate-600 transition-all duration-300 backdrop-blur-sm" data-delay="0">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8 pb-4 border-b-2 border-amber-500">
                  Common failure patterns:
                </h3>
                
                <ul className="space-y-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  <li className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="group-hover:text-white transition-colors duration-200">Teams improve, but leadership remains misaligned</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="group-hover:text-white transition-colors duration-200">Governance contradicts agility</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="group-hover:text-white transition-colors duration-200">Decision rights are unclear</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="group-hover:text-white transition-colors duration-200">Productivity gains stay local and temporary</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></span>
                    <span className="group-hover:text-white transition-colors duration-200">Consultants are engaged before leaders are ready</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Closing Emphasis Line - Full Width */}
            <div className="jess-reveal max-w-4xl bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 sm:p-10 border-l-4 border-white shadow-2xl" data-delay="120">
              <p className="text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed">
                Agile transformation requires leadership alignment and execution capability — working as one system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Leadership Decision Gap */}
      <section className="py-20 sm:py-32 border-t border-slate-700 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center"
          >
            {/* Accent Line Above */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white tracking-tight leading-[1.15] drop-shadow-lg">
              The real bottleneck isn't speed.
            </h2>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 tracking-tight leading-[1.15] drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              It's decision clarity.
            </h2>
            
            {/* Decorative Divider */}
            <div className="max-w-xl mx-auto mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-xl"></div>
              <p className="jess-reveal text-lg sm:text-xl text-slate-300 font-light leading-relaxed relative z-10 px-6 py-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-2xl" data-delay="240">
                Most leaders are adjacent to Agile—not actively shaping it. This program equips you to run the execution system, not watch from the sidelines.
              </p>
            </div>
            
            {/* Enhanced CTA Button */}
            <div
            >
              <a 
                href="#jess-learning-program"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Get Started on Solving</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>

            {/* Bottom Accent */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-600"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* JESS Enterprise Agility Model */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
          >
            {/* Header */}
            <div className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-sm font-medium text-amber-400 uppercase tracking-wider">PROGRAM OVERVIEW</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-[1.15]">
                Jeff Sutherland's Enterprise Agility Program
              </h2>
              
              <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                A Complete Leadership + Execution System
              </p>
            </div>

            {/* Three Column Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
              {/* Column 1 - Leadership Alignment */}
              <div
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="jess-reveal relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 h-full" data-delay="0">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                    <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Aligned Empowerment</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Empower regional teams to act decisively — within a clear strategic framework that maintains visibility and leadership control.
                  </p>

                </div>
              </div>

              {/* Column 2 - Team Execution */}
              <div
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="jess-reveal relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 h-full" data-delay="120">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                    <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Scalable Enterprise Execution</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Scale from a few teams to enterprise-wide coordination without increasing hierarchy, bureaucracy, or loss of oversight.
                  </p>
                </div>
              </div>

              {/* Column 3 - System Integration */}
              <div
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="jess-reveal relative bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 h-full" data-delay="240">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                    <svg className="w-7 h-7 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Measurable Business Outcomes</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Deliver continuous, verifiable value through disciplined prioritization, transparent metrics, and rapid feedback loops.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left - Text Content */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                      Ready to transform your enterprise?
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                      Whether you're leading a transformation or building team capability, JESS provides the framework and training to succeed at scale.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        <span>Enterprise-ready</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        <span>Individual certifications</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        <span>Consulting support</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contactus.html?source=jess-develop-agile-leader&cta=talk-to-program-advisor#contact-form"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105 relative overflow-hidden"
                    >
                      <span className="relative z-10">Talk to a Program Advisor</span>
                      <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </a>
                    
                    <a
                      href="#jess-learning-program"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-700/50 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-700 hover:border-amber-500/50 transition-all duration-300"
                    >
                      <span>View Program Details</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership in an AI-Driven Environment */}
      <section id="jess-learning-program" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div
          >
            <div className="mb-16 text-center">
              <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
                HOW TO GET STARTED
              </div>
              <h2 className="text-4xl sm:text-5xl font-light mb-2 text-slate-900 tracking-tight leading-[1.43]">
                The Two-Course Leadership Pathway
              </h2>
              <p className="text-xl text-slate-600 font-light max-w-4xl mx-auto mt-6">
                This program is intentionally designed as a sequential system.
              </p>
              <p className="text-xl text-slate-600 font-light max-w-4xl mx-auto mt-4">
                Each course can be taken individually — but together, they create a complete leadership-to-execution operating model.
              </p>
            </div>
            
            {/* Two Course Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Course 1: High Performance Agile Leader */}
              <div
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col shadow-lg">
                  {/* Course Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6 self-start">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Course 1</span>
                  </div>
                  
                  {/* Course Title */}
                  <h3 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
                    High Performance Agile Leader
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-lg text-slate-600 font-light mb-8 leading-relaxed">
                    <span className="font-semibold">Master Jeff Sutherland's system. Lead with clarity.</span>
                    <br />
                    For leaders and managers who drive performance.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">You will learn to:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Align strategy to execution across business units</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Establish governance that enables speed without chaos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Prioritize portfolios based on measurable value</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Create transparency that builds trust with headquarters</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Design an enterprise operating model for scale</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Outcome Statement */}
                  <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 border border-slate-200 rounded-2xl p-6 mb-8">
                    <p className="text-sm font-medium text-slate-900 mb-2">Course Outcome:</p>
                    <p className="text-slate-700 leading-relaxed italic">
                      You leave equipped to architect the system — not just manage within it.
                    </p>
                  </div>
                  
                  {/* CTA */}
                  <a
                    href="class-schedule.html"
                    className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10">View Class Schedule</span>
                    <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                  
                  {/* Duration Badge */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>2-Day Intensive Program</span>
                  </div>
                </div>
              </div>

              {/* Course 2: Leading Hyper-Productive Team */}
              <div
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-8 sm:p-10 hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col shadow-lg">
                  {/* Course Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6 self-start">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <span className="text-sm font-medium text-amber-600 uppercase tracking-wider">Course 2</span>
                  </div>
                  
                  {/* Course Title */}
                  <h3 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4 leading-tight">
                    Leading Hyper-Productive Team
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-lg text-slate-600 font-light mb-8 leading-relaxed">
                    <span className="font-semibold">Execute with momentum. Create sustainable performance.</span>
                    <br />
                    For leaders building and guiding high-performance delivery teams.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">You will learn to:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Implement proven Scrum execution mechanics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Eliminate bottlenecks and decision delays</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Build stable, cross-functional teams</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Use metrics that predict delivery outcomes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 leading-relaxed">Create rapid improvement loops</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Outcome Statement */}
                  <div className="bg-gradient-to-br from-slate-50 to-amber-50/30 border border-slate-200 rounded-2xl p-6 mb-8">
                    <p className="text-sm font-medium text-slate-900 mb-2">Course Outcome:</p>
                    <p className="text-slate-700 leading-relaxed italic">
                      You build teams that deliver consistently — sprint after sprint.
                    </p>
                  </div>
                  
                  {/* CTA */}
                  <a
                    href="class-schedule.html"
                    className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10">View Class Schedule</span>
                    <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  </a>
                  
                  {/* Duration Badge */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>2-Day Intensive Program</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Why Take Both Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
        <div className="max-w-5xl mx-auto">
          <div
          >
            {/* Section Header */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                  <span className="text-xs font-medium text-amber-400 uppercase tracking-widest">Why Take Both?</span>
                </div>
              </div>
              
              <h3 className="text-4xl sm:text-5xl font-light text-white mb-6 leading-tight">
                Why Leaders Should Take Both Courses
              </h3>
              
              <p className="text-xl text-slate-300 font-light">
                Course 1 establishes strategic clarity and governance.<br />
                Course 2 activates disciplined execution at the team level.<br />
                <br />
                Together, they form a complete enterprise agility system.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Course 1 Alone */}
              <div className="jess-reveal bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm" data-delay="0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <span className="text-amber-500 font-semibold">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">Course 1 alone:</h4>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Leaders understand structure, but teams may lack execution rhythm.
                </p>
              </div>

              {/* Course 2 Alone */}
              <div className="jess-reveal bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm" data-delay="120">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <span className="text-amber-500 font-semibold">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">Course 2 alone:</h4>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Teams improve, but leadership structures may limit scale.
                </p>
              </div>
            </div>

            {/* Taking Both Ensures */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-amber-500/20 rounded-3xl p-10 mb-12 shadow-2xl shadow-amber-500/10">
              <h4 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                Taking both ensures:
              </h4>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <svg className="w-3.5 h-3.5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed">Leadership alignment</span>
                </li>
                <li className="flex items-start gap-4 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <svg className="w-3.5 h-3.5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed">Team-level execution capability</span>
                </li>
                <li className="flex items-start gap-4 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <svg className="w-3.5 h-3.5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed">Shared enterprise language</span>
                </li>
                <li className="flex items-start gap-4 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <svg className="w-3.5 h-3.5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed">Minimal bureaucracy</span>
                </li>
                <li className="flex items-start gap-4 text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-amber-500/30">
                    <svg className="w-3.5 h-3.5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg leading-relaxed">Predictable performance at scale</span>
                </li>
              </ul>

              <div className="border-t border-slate-700 pt-8">
                <h5 className="text-lg font-medium text-white mb-6">This combination prepares organizations to:</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Launch transformation confidently</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Reduce consulting risk</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Scale agility intentionally</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="text-center">
              <p className="text-xl text-slate-300 font-light italic mb-8">
                This is the foundation before enterprise-wide transformation consulting.
              </p>
              <a
                href="#jess-learning-program"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:scale-105"
              >
                <span>Explore Full Program</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Program Is For */}
      <section id="who-this-is-for" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div
          >
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border /20 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">Who This Is For</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light mb-6 text-white tracking-tight leading-tight">
                Built for Leaders and Teams<br />Driving Real Outcomes
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                Whether you're scaling agility across an enterprise or advancing your leadership impact
              </p>
            </div>
            
            {/* Two Column Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Enterprise Teams Card */}
              <div
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border /20 rounded-lg mb-6">
                    <span className="text-sm font-medium text-blue-400">Enterprise Teams</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-blue-300 transition-colors">
                    Scale Agility Across Your Organization
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 font-light">
                        <span className="text-white font-medium">Transformation & PMO Leaders</span> shaping execution systems
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 font-light">
                        <span className="text-white font-medium">Department Heads</span> accountable for business outcomes
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 font-light">
                        <span className="text-white font-medium">Product Leaders</span> coordinating multiple teams and portfolios
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <p className="text-sm text-slate-400 font-light">
                      Transform how your organization delivers value at scale
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Individual Leaders Card */}
              <div
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg mb-6">
                    <span className="text-sm font-medium text-purple-400">Individual Leaders</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-6 group-hover:text-purple-300 transition-colors">
                    Elevate Your Leadership Impact
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 font-light">
                        <span className="text-white font-medium">Senior Scrum Masters</span> ready to influence beyond one team
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 font-light">
                        <span className="text-white font-medium">Product Owners</span> stepping into strategic leadership roles
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-300 font-light">
                        <span className="text-white font-medium">Agile Coaches</span> expanding enterprise-level expertise
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <p className="text-sm text-slate-400 font-light">
                      Advance from execution to strategic leadership
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div
              className="text-center mt-16"
            >
              <p className="text-slate-400 font-light mb-6">
                This is not introductory training. It's designed for those ready to lead outcomes, not just facilitate processes.
              </p>
              <a
                href="/contactus.html?source=jess-develop-agile-leader&cta=talk-to-program-advisor#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] group"
              >
                <span className="font-medium">Talk to a Program Advisor</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Private vs Public Training Options */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div
          >
            {/* Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border /20 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-xs font-medium text-blue-400 uppercase tracking-widest">Choose Your Path</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light mb-6 text-white tracking-tight leading-tight">
                Private or Public Training
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto font-light">
                Select the format that aligns with your goals—enterprise transformation or individual advancement.
              </p>
            </div>

            {/* Two Options Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* For Enterprise Leaders & Sponsors */}
              <div
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-slate-700/50 rounded-2xl p-8 sm:p-10 hover:/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="absolute -top-14 left-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-blue-400 text-sm font-medium rounded-full">
                      For Organizations
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-4 mb-4">
                    For Enterprise Leaders
                  </h3>
                  
                  <p className="text-base text-slate-300 font-light mb-8 leading-relaxed">
                    If your goal is to prepare your organization for agile transformation:
                  </p>
                
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Recommended Path:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300 font-light">Send leadership cohort to Course 1</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300 font-light">Send delivery leaders to Course 2</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300 font-light">Align both levels before scaling</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5 mb-6">
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      This creates internal transformation readiness.
                    </p>
                  </div>
                  
                  <div className="mb-6 pt-6 border-t border-slate-700/50">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">What's Included</h4>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Customized to your organization's context</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Aligned leadership team learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Strategic transformation guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">International certifications included</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a 
                    href="mailto:romanoff@ciagile.com?subject=Corporate Proposal Request"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] group"
                  >
                    <span>Request Corporate Proposal</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* For Individual Leaders */}
              <div
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-8 sm:p-10 hover:border-purple-400/70 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="absolute -top-14 left-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 border border-purple-500/50 text-purple-400 text-sm font-medium rounded-full">
                      For Individuals
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-4 mb-4">
                    For Individual Leaders
                  </h3>
                  
                  <p className="text-base text-slate-300 font-light mb-6 leading-relaxed">
                    If your goal is to:
                  </p>
                
                  <div className="mb-8">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Upgrade your enterprise agility capability</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Gain globally recognized credentials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Lead hyper-productive teams</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5 mb-6">
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      You may enroll in either course separately — or complete both for full-system mastery.
                    </p>
                  </div>
                  
                  <div className="mb-6 pt-6 border-t border-slate-700/50">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">Certifications Included</h4>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Scrum@Scale Foundation™</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Registered Scrum Master™</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Registered Product Owner™</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                        <span className="text-slate-300 font-light">Network with industry professionals</span>
                      </li>
                    </ul>
                  </div>
                  
                  <a
                    href="individual-enrollment.html"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02] group"
                  >
                    <span>Register as Individual Participant</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div
              className="mt-16 text-center"
            >
              <p className="text-base text-slate-400 font-light">
                Not sure which option is right for you? <a href="/contactus.html?source=jess-develop-agile-leader&cta=talk-to-program-advisor#contact-form" className="text-blue-400 hover:text-blue-300 font-medium underline">Contact us</a> for a consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-xs font-medium text-amber-400 uppercase tracking-widest">Proven Framework</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.2]">
                Built on Proven Global Patterns
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
                JESS integrates principles from <span className="text-amber-400 font-medium">Scrum@Scale</span>, co-created by <span className="text-white font-medium">Dr. Jeff Sutherland</span>.
              </p>
            </div>

            {/* Authority Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Left: Framework Foundation */}
              <div
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                      <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">Enterprise-Proven Principles</h3>
                      <p className="text-amber-400 text-sm font-medium">Tested at Scale, Globally</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    Concepts such as <span className="text-white font-medium">Minimum Viable Bureaucracy</span> enable organizations to scale without friction, waste, or excessive control layers.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-400 leading-relaxed">Eliminates organizational drag and bureaucratic overhead</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-400 leading-relaxed">Enables rapid decision-making at every organizational level</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-400 leading-relaxed">Scales agility without adding complexity</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Practical Translation */}
              <div
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-3xl blur-2xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-10">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30">
                      <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">Practical Application</h3>
                      <p className="text-amber-400 text-sm font-medium">Theory to Execution</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    This program translates those principles into <span className="text-white font-medium">practical leadership and execution capability</span>.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-400 leading-relaxed">Actionable frameworks for immediate organizational implementation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-400 leading-relaxed">Real-world leadership patterns used by Fortune 500 companies</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-400 leading-relaxed">Executable strategies that deliver results from day one</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome Statement */}
            <div
              className="relative max-w-4xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/30 rounded-3xl p-12 text-center">
                <div className="mb-6">
                  <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">The Outcome</span>
                </div>
                <div className="space-y-4">
                  <p className="text-3xl sm:text-4xl font-light text-white leading-tight">
                    Immediate Clarity.
                  </p>
                  <p className="text-3xl sm:text-4xl font-light text-white leading-tight">
                    Sustainable Performance.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Stop guessing. Start executing with a system trusted by enterprise leaders worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 border-t border-slate-200 bg-white">
        <div className="w-full">
          <div
          >
            {/* Clean Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Left Column - Image */}
              <div className="lg:col-span-2">
                <div className="relative h-[500px] lg:h-[650px] bg-slate-200 overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/WzY2YSVZ/AIDA-CTA-Board-Meeting.jpg"
                    alt="Leadership Excellence"
                    className="w-full h-full object-cover object-left"
                  />
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="lg:col-span-3 flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-0">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-8">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Ready to Transform Your Leadership?
                </div>
                
                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 text-slate-900 leading-[1.15] tracking-tight">
                  Start with a Conversation.<br />
                  Scale with Confidence.
                </h2>
                
                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-slate-700 mb-8 font-light leading-relaxed">
                  Join the leaders who moved from Agile aspiration to enterprise execution. Schedule a 30-minute briefing to see if JESS is right for your organization.
                </p>
                
                {/* Key Points */}
                <div className="mb-10 space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-base text-slate-700 font-normal">
                      <span className="font-semibold">No-pressure conversation</span> to explore fit, scope, and readiness
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-base text-slate-700 font-normal">
                      <span className="font-semibold">Internationally recognized certifications</span> included with every program
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-base text-slate-700 font-normal">
                      <span className="font-semibold">Limited cohort sizes</span> ensure senior-level discussion and outcomes
                    </p>
                  </div>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a 
                    href="/contactus.html?source=jess-develop-agile-leader&cta=talk-to-program-advisor#contact-form"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Talk to a Program Advisor
                    <ArrowRight size={18} strokeWidth={2} />
                  </a>
                  
                  <a 
                    href="#jess-learning-program"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-medium border-2 border-slate-300 rounded-lg hover:border-slate-900 transition-all cursor-pointer"
                  >
                    Review Program Details
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </a>
                </div>
                
                {/* Trust Signal */}
                <div className="bg-slate-100 border border-slate-200 rounded-lg p-4">
                  <p className="text-sm text-slate-600 font-light">
                    <span className="font-semibold text-slate-900">Trusted by enterprise teams worldwide.</span> Learn how JESS has helped organizations achieve 30x faster execution cycles and 2x more value delivered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
          >
            <h2 className="text-4xl sm:text-5xl font-light mb-16 text-slate-900 tracking-tight leading-[1.43]">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-slate-200">
                <AccordionTrigger className="text-slate-900 hover:text-slate-700 text-left text-base sm:text-lg font-light">
                  Is this program mainly a certification or a leadership training?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-light leading-relaxed">
                  This is a leadership training program designed to help senior leaders and leadership teams understand how Agile and AI work together as a system. Certifications are included, but they are by-products of learning, not the primary objective.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-slate-200">
                <AccordionTrigger className="text-slate-900 hover:text-slate-700 text-left text-base sm:text-lg font-light">
                  Do participants receive certifications?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-light leading-relaxed">
                  Yes. Participants may earn internationally recognised credentials such as Registered Scrum Master™, Registered Product Owner™, and Registered Scrum@Scale Fundamentals™. These certifications support professional credibility but are not the focus of the program.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-slate-200">
                <AccordionTrigger className="text-slate-900 hover:text-slate-700 text-left text-base sm:text-lg font-light">
                  What materials or references are used in the program?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-light leading-relaxed">
                  The program is grounded in proven references such as <em>Scrum: The Art of Doing Twice the Work in Half the Time</em>, <em>The Scrum@Scale Guide</em>, and <em>The Scrum Fieldbook</em>. These are used as long-term leadership references rather than academic reading.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-slate-200">
                <AccordionTrigger className="text-slate-900 hover:text-slate-700 text-left text-base sm:text-lg font-light">
                  Is this a self-study or theory-heavy course?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-light leading-relaxed">
                  No. This is not a self-study or theory-heavy program. It is designed for leaders accountable for outcomes, with practical discussions and real-world system application.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-slate-200">
                <AccordionTrigger className="text-slate-900 hover:text-slate-700 text-left text-base sm:text-lg font-light">
                  What typically happens after the training?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-light leading-relaxed">
                  Most organisations use this program as a shared starting point. After leaders align on the system, they decide how far and how fast they want to implement, independently or with further support. There is no obligation beyond the training.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <MainSiteFooter />

    </div>

      
  );
}
