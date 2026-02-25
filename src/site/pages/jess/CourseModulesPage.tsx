import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";

export function CourseModulesPage() {

  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation />
      
      {/* Hero Section */}
      <section className="relative bg-slate-800 py-16 sm:py-20 lg:py-24 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 text-base mb-8">
            <a
              href="leadership-training.html"
              className="text-slate-300 hover:text-white transition-colors relative pb-1 border-b border-transparent hover:border-slate-300"
            >
              Leadership Training
            </a>
            <span className="text-slate-400">›</span>
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Course Modules</span>
          </div>
          
          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
            What's inside JESS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            The JESS Course Modules
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl">
            Build shared leadership understanding before scaling execution across the organization.
          </p>
        </div>
      </section>

      {/* Sticky Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8 sm:gap-12">
            <a
              href="leadership-training.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Overview
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <span className="relative py-4 text-sm sm:text-base font-medium text-slate-900">
              Course Modules
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"></div>
            </span>

            <a
              href="instructor.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Instructor
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="class-schedule.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Class Schedule
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </nav>
        </div>
      </div>

      {/* Course Modules Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Part 1: Foundations */}
          <div
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-slate-200 text-slate-900 px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg font-medium inline-block w-fit">Course 1</div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-900">High Performance Agile Leader</h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-light">Create a shared leadership baseline for how Agile actually works at scale.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Module 1 */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="w-full px-4 py-3 sm:px-5 sm:py-3.5 flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-blue-600 font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">Module 1</div>
                    <h4 className="text-base sm:text-lg font-light text-slate-900">Right People, Right Roles — How Leadership Enables Execution</h4>
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-3 border-t border-slate-100">
                  <p className="text-slate-900 font-medium text-sm sm:text-base pt-4">What leaders align on in this module:</p>
                  <ul className="space-y-2 text-slate-600 text-sm font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Why Scrum was created and the problem it was designed to solve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>How leadership behaviour directly shapes team performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>What hyper-productivity means in real organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>How ready teams and the organization truly are</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>A realistic, step-by-step path for Agile adoption without disruption theatre</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 2 */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="w-full px-4 py-3 sm:px-5 sm:py-3.5 flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-blue-600 font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">Module 2</div>
                    <h4 className="text-base sm:text-lg font-light text-slate-900">Making the Right Trade-Offs: Priorities, Value, and Timing</h4>
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-3 border-t border-slate-100">
                  <p className="text-slate-900 font-medium text-sm sm:text-base pt-4">What leaders will be able to do after this module:</p>
                  <ul className="space-y-2 text-slate-600 text-sm font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>View Scrum from a Product Owner and business perspective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Translate strategy into clear, prioritized work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Make prioritization decisions without political escalation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Set realistic expectations on scope, timing, and value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Align teams around outcomes instead of competing requests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2: Execution */}
          <div
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="bg-slate-200 text-slate-900 px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg font-medium inline-block w-fit">Course 2</div>
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-900">Leading Hyper-Productive Team</h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-light">Deep-Dive for Scrum Masters and Product Owners</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Module 3 */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="w-full px-4 py-3 sm:px-5 sm:py-3.5 flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-blue-600 font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">Module 3</div>
                    <h4 className="text-base sm:text-lg font-light text-slate-900">AI-Driven Scrum Execution</h4>
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-3 border-t border-slate-100">
                  <p className="text-slate-900 font-medium text-sm sm:text-base pt-4">What changes after this module:</p>
                  <ul className="space-y-2 text-slate-600 text-sm font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Leaders understand how AI fits into the Scrum execution cycle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Teams move from manual coordination to AI-supported readiness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Behaviour shifts from "doing Agile" to working in a predictable system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Sprint execution becomes calmer, clearer, and more focused</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Work enters sprints with higher confidence and less rework</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 4 */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="w-full px-4 py-3 sm:px-5 sm:py-3.5 flex items-start gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 4 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-blue-600 font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">Module 4</div>
                    <h4 className="text-base sm:text-lg font-light text-slate-900">Scaling Lean Execution with AI-Driven Agile</h4>
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-3 border-t border-slate-100">
                  <p className="text-slate-900 font-medium text-sm sm:text-base pt-4">What leaders gain from this module:</p>
                  <ul className="space-y-2 text-slate-600 text-sm font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>How Lean principles strengthen Scrum execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>How AI reshapes planning, refinement, and Scrum events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>Which metrics matter at leadership level</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>How to monitor progress without micromanaging teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>How continuous improvement becomes systematic rather than heroic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-1">•</span>
                      <span>How leaders and teams prepare for sustained rollout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}