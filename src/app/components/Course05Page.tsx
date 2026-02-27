import { ArrowRight, Menu, X, Clock, Users, FileX, Earth, Rocket, CheckCircle2, Check, Lightbulb } from "lucide-react";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { ImageWithFallback } from "@/shared/ImageWithFallback";
import { StoryCarousel, FAQAccordion, InvestmentGrid, SkillsRadial, CourseModulesGrid, PersonaCards } from "@/app/components/shared";
import { stories, investments, skills, courseModules, learningOutcomes, personas, masterTopics, faqs } from "@/app/components/course05/data";
import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/teamworks/ai-skills-for-your-team",
  filename: "teamworks/ai-skills-for-your-team.html",
  title: "AI Skills for YOUR Team - TeamWorks Course 05",
  description: "Equip your team with practical AI skills they can apply immediately — without coding or technical background. Cut drafting time, improve decisions, and use AI responsibly.",
  siteType: "teamworks",
};

export function Course05Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
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
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#modules" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Modules</a>
              <a href="#outcomes" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Outcomes</a>
              <a href="#opportunity" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Opportunity</a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </div>

            <div className="hidden md:block">
              <a href="/teamworks/bookConsultation.html" className="text-white px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-all font-medium" style={{ backgroundColor: "#0EA7E9" }}>
                Book This Course for Your Team
              </a>
            </div>

            {/* Mobile Menu Button (static-export friendly) */}
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
          <div
            id="tw05-mobile-menu"
            data-mobile-menu
            className="md:hidden py-6 border-t border-gray-200 hidden"
            aria-hidden="true"
          >
            <div className="flex flex-col gap-4">
              <a href="#modules" className="text-sm py-2" data-mobile-close>Modules</a>
              <a href="#outcomes" className="text-sm py-2" data-mobile-close>Outcomes</a>
              <a href="#opportunity" className="text-sm py-2" data-mobile-close>Opportunity</a>
              <a href="#faq" className="text-sm py-2" data-mobile-close>FAQ</a>
              <a href="/teamworks/bookConsultation.html" className="text-white px-6 py-3 rounded-full text-sm mt-2 text-center" style={{ backgroundColor: "#0EA7E9" }} data-mobile-close>
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
            <a href="../index.html" className="hover:text-[#0EA7E9] transition-colors">Home</a>
            <span>/</span>
            <a href="/teamworks/index.html" className="hover:text-[#0EA7E9] transition-colors">Teamworks</a>
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
                  <div className="flex flex-col gap-3 max-w-xl pt-2">
                    {["Cut drafting & research time", "Improve decision clarity", "Use AI responsibly and confidently"].map((text) => (
                      <div key={text} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0EA7E9] mt-2"></div>
                        <p className="text-base sm:text-lg text-gray-700">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
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
                <div className="space-y-4 pt-2">
                  <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg text-base sm:text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl group" style={{ backgroundColor: "#0EA7E9" }}>
                    <span className="font-medium">Talk to Us About Your Team</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#0EA7E9]/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0EA7E9]/5 rounded-full blur-3xl"></div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 bg-gray-900">
                    <video
                      className="w-full h-full"
                      src="/assets/img/teamworks/why-you-need-to-learn-AI.webm"
                      aria-label="Why you need to learn AI -- TeamWorks Course 05"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                  <p className="text-center text-gray-600 mt-4 text-sm">Explore your AI potential with us.</p>
                  <p className="text-center text-gray-500 mt-2 text-xs max-w-md mx-auto">
                    Ref: "9 AI Skills You MUST Have to Become Rich in 2026." YouTube, uploaded by Dan Martell 2024.
                  </p>
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

            <StoryCarousel stories={stories} />

            {/* Carousel inline script + styles for static export */}
            <style
              dangerouslySetInnerHTML={{
                __html: `@keyframes tw05ProgressFill { from { transform: scaleX(0); } to { transform: scaleX(1); } }`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
(function(){
  function initTw05Carousel(){
    var root = document.querySelector('[data-tw05-carousel]');
    if (!root) return;
    if (root.getAttribute('data-tw05-initialized') === 'true') return;
    root.setAttribute('data-tw05-initialized', 'true');
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-tw05-slide]'));
    var dots = Array.prototype.slice.call(root.querySelectorAll('[data-tw05-dot]'));
    var prevBtn = root.querySelector('[data-tw05-prev]');
    var nextBtn = root.querySelector('[data-tw05-next]');
    if (!slides.length) return;
    var current = 0;
    var isPaused = false;
    var DURATION = 5000;
    var progress = root.querySelector('[data-tw05-progress]');

    function show(i){
      var len = slides.length;
      current = ((i % len) + len) % len;
      for (var s = 0; s < slides.length; s++){
        var slide = slides[s];
        if (!slide || !slide.classList) continue;
        if (s === current){ slide.classList.remove('hidden'); slide.classList.add('block'); slide.classList.remove('opacity-0'); slide.classList.add('opacity-100'); }
        else { slide.classList.add('hidden'); slide.classList.remove('block'); slide.classList.add('opacity-0'); slide.classList.remove('opacity-100'); }
      }
      for (var d = 0; d < dots.length; d++){
        var dot = dots[d];
        if (!dot || !dot.classList) continue;
        if (d === current){ dot.classList.add('w-8'); dot.classList.add('h-2'); dot.classList.add('bg-[#0EA7E9]'); dot.classList.remove('w-2'); dot.classList.remove('bg-gray-300'); dot.setAttribute('aria-current', 'true'); }
        else { dot.classList.remove('w-8'); dot.classList.remove('h-2'); dot.classList.remove('bg-[#0EA7E9]'); dot.classList.add('w-2'); dot.classList.add('h-2'); dot.classList.add('bg-gray-300'); dot.removeAttribute('aria-current'); }
      }
    }

    function restartProgress(){
      if (!progress) return;
      progress.style.animation = 'none';
      progress.offsetHeight;
      progress.style.animation = 'tw05ProgressFill ' + (DURATION / 1000) + 's linear forwards';
      progress.style.animationPlayState = isPaused ? 'paused' : 'running';
    }

    function resetAuto(){
      isPaused = false;
      restartProgress();
    }

    function pauseAuto(){
      if (isPaused) return;
      isPaused = true;
      if (progress) progress.style.animationPlayState = 'paused';
    }

    function resumeAuto(){
      if (!isPaused) return;
      isPaused = false;
      if (progress) progress.style.animationPlayState = 'running';
    }

    /* Single source of truth: when the CSS progress animation ends, advance slide */
    if (progress) {
      progress.addEventListener('animationend', function(){
        show(current + 1);
        resetAuto();
      });
    }

    show(0);
    resetAuto();

    for (var i = 0; i < dots.length; i++){
      (function(dot){ dot.addEventListener('click', function(){
        var idx = parseInt(dot.getAttribute('data-index') || '0', 10);
        if (isNaN(idx)) idx = 0;
        show(idx);
        resetAuto();
      }); })(dots[i]);
    }
    if (prevBtn){ prevBtn.addEventListener('click', function(){ show(current - 1); resetAuto(); }); }
    if (nextBtn){ nextBtn.addEventListener('click', function(){ show(current + 1); resetAuto(); }); }

    root.addEventListener('mouseenter', function(){ pauseAuto(); });
    root.addEventListener('mouseleave', function(){ resumeAuto(); });
  }
  if (document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', initTw05Carousel); } else { initTw05Carousel(); }
})();
                `,
              }}
            />

            <div className="text-center mt-16 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                The opportunity is now. <span className="text-[#0EA7E9] font-medium">Invest in your team's growth</span> and watch them thrive in an AI-enhanced workplace.
              </p>
            </div>
          </div>
        </section>

        {/* TrustStrip - Opportunity Section */}
        <section id="opportunity" className="bg-white py-20 lg:py-28">
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
            <InvestmentGrid investments={investments} />
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
              <SkillsRadial skills={skills} />
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
                    <h3 className="text-3xl text-gray-900 mb-4 leading-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
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
              <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">What Your Team Will Be Able to Do</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                After this session, your team will stop asking, "Can AI help with this?" — and start applying it confidently.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
              <div className="sticky top-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto ring-1 ring-gray-900/5">
                  <ImageWithFallback
                    src="/assets/img/teamworks/teamworks-course-05-outcomes-what-your-team-will-be-able-to-do.webp).png"
                    alt="Diverse team collaborating on AI skills training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {learningOutcomes.map((outcome, index) => {
                  const Icon = outcome.icon;
                  return (
                    <div key={index} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden rounded-xl">
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
              <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">What You'll Learn</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                A structured, hands-on journey from AI fundamentals to real-world application — designed for teams who want results, not theory.
              </p>
            </div>
            <CourseModulesGrid modules={courseModules} />
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-cyan-50 text-[#0EA7E9] px-6 py-2 rounded-full text-sm font-medium mb-4">
                TARGET AUDIENCE
              </div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-3">Who Is This Course For?</h2>
              <p className="text-gray-700">
                Built for professionals and teams who want practical AI capability — not technical deep dives.
              </p>
            </div>
            <PersonaCards personas={personas} />
          </div>
        </section>


        {/* Pricing Section */}
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-cyan-50 text-[#0EA7E9] px-6 py-2 rounded-full text-sm font-medium mb-4">INVESTMENT</div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Ready to Empower Your Team?</h2>
              <p className="text-lg text-gray-600">Invest in practical AI skills that deliver immediate results</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 items-start">
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
                      {["2-day intensive workshop", "All course materials & templates", "Expert instructor (10+ years exp)", "Certificate of completion", "Post-workshop support & community", "Pre-course alignment session for your team"].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-gray-900 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-900 text-base">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="/teamworks/bookConsultation.html" className="w-full text-lg text-white py-4 px-8 rounded-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all group" style={{ backgroundColor: "#0EA7E9" }}>
                    Plan This Course for Your Team
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-center text-gray-500 text-sm mt-4">A short discussion to understand your goals and team needs.</p>
                </div>
              </div>
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
              <div className="inline-block bg-cyan-50 text-[#0EA7E9] px-6 py-2 rounded-full text-sm font-medium mb-4">FAQ</div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">Common Questions</h2>
              <p className="text-lg text-gray-600">Everything you need to know about the AI Skills training</p>
            </div>
            <FAQAccordion faqs={faqs} variant="tw05" />
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
                <a href="/teamworks/bookConsultation.html" className="inline-flex items-center gap-2 text-lg px-10 py-4 text-white rounded-lg shadow-lg hover:shadow-xl hover:opacity-90 transition-all" style={{ backgroundColor: "#0EA7E9" }}>
                  Empower Your Team Today
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 text-gray-700">
                {["No coding required", "100% practical workplace application", "Immediate real-world impact"].map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0EA7E9]" />
                    <span className="text-base">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <MainSiteFooter variant="light" />
    </div>
  );
}
