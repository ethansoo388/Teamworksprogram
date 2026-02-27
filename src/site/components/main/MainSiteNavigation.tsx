// Shared Navigation Component for Main Site
// Ported from headerFooter_porting Navigation.tsx reference
// All interactivity uses data attributes for static HTML compatibility (main.js)
// NO React state for dropdown/mobile behavior — static export only

import ciAgileLogo from '@/assets/img/main/ciagile-main-logo.webp';

export function MainSiteNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/index.html" className="flex items-center space-x-2 no-underline">
              <img
                alt="CI Agile Logo"
                className="h-[24px] w-auto object-contain"
                src={ciAgileLogo}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-2">
            {/* Programs Dropdown */}
            <div
              className="relative"
              data-dropdown-container="programs"
            >
              <button
                aria-expanded="false"
                className="px-4 py-2 flex items-center space-x-1 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
                data-dropdown-trigger="programs"
              >
                <span data-dropdown-text>Programs</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16" data-dropdown-icon>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>

              {/* Mega Menu for Programs */}
              <div
                data-dropdown="programs"
                className="hidden fixed left-1/2 -translate-x-1/2 bg-white rounded-2xl overflow-hidden z-50"
                style={{
                  top: '80px',
                  width: '1440px',
                  maxWidth: '95vw',
                  maxHeight: 'calc(100vh - 96px)',
                  overflowY: 'auto',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="px-4 sm:px-6 md:px-8 xl:px-[120px] py-6 md:py-8 lg:py-12">
                  {/* Header Section */}
                  <div className="mb-6 md:mb-8 lg:mb-10">
                    <h2 className="text-xl md:text-2xl xl:text-[32px] font-bold text-[#0066FF] mb-2 md:mb-3 flex items-center space-x-2">
                      <span>Programs</span>
                      <svg className="w-6 h-6 text-[#0066FF]" fill="none" viewBox="0 0 24 24">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </h2>
                    <p className="text-sm md:text-base xl:text-[18px] text-gray-700 leading-relaxed max-w-[800px]">
                      Accelerate execution, build high-performance teams, and scale enterprise agility with structured programs designed for real business outcomes.
                    </p>
                  </div>

                  {/* Columns Grid */}
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
                    {/* Column 1 - Enterprise Pathways */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-[#6B7280] tracking-[0.02em] uppercase mb-4 md:mb-5">
                        ENTERPRISE PATHWAYS
                      </h3>
                      <div className="space-y-4 md:space-y-6">
                        {/* Jeff Sutherland's Enterprise Agility Program */}
                        <div className="space-y-2 md:space-y-3">
                          <div className="block py-2 md:py-3 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl md:rounded-2xl">
                            <div className="flex items-center space-x-2 mb-1 md:mb-2">
                              <h4 className="text-sm md:text-base font-semibold text-[#0F172A]">
                                Jeff Sutherland's Enterprise Agility Program
                              </h4>
                            </div>
                            <p className="text-xs md:text-sm text-[#475569] leading-snug">
                              Align strategy and scale disciplined enterprise execution effectively.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide px-3 md:px-4">
                              Signature Series
                            </p>
                            <div className="space-y-1">
                              <a
                                href="/jess/leadership-training.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  International Certification Courses
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  Globally recognised certifications for enterprise leaders.
                                </p>
                              </a>
                              <a
                                href="/jess/class-schedule.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  Public Certification Class
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  View Upcoming Class Schedule
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Nova Series */}
                        <div className="space-y-2 md:space-y-3">
                          <div className="block py-2 md:py-3 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl md:rounded-2xl">
                            <h4 className="text-sm md:text-base font-semibold text-[#0F172A] mb-1 md:mb-2">
                              Nova Series
                            </h4>
                            <p className="text-xs md:text-sm text-[#475569] leading-snug">
                              Enterprise team training to align and accelerate delivery.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide px-3 md:px-4">
                              Courses
                            </p>
                            <div className="space-y-1">
                              <a
                                href="/jess/nova/agile-scrum.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  Agile &amp; Scrum 201
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  Strengthen Scrum foundations for clarity and faster delivery.
                                </p>
                              </a>
                              <a
                                href="/jess/nova/design-thinking.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  Design Thinking 201
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  Build customer-focused solutions teams can confidently deliver.
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 2 - Capability Tracks */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-[#6B7280] tracking-[0.02em] uppercase mb-4 md:mb-5">
                        CAPABILITY TRACKS
                      </h3>
                      <div className="space-y-4 md:space-y-6">
                        {/* TeamWorks Program */}
                        <div className="space-y-2 md:space-y-3">
                          <div className="block py-2 md:py-3 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl md:rounded-2xl">
                            <h4 className="text-sm md:text-base font-semibold text-[#0F172A] mb-1 md:mb-2">
                              TeamWorks Program
                            </h4>
                            <p className="text-xs md:text-sm text-[#475569] leading-snug">
                              Practical training to improve team execution performance consistently.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide px-3 md:px-4">
                              Courses
                            </p>
                            <div className="space-y-1">
                              <a
                                href="/teamworks/creating-super-teams.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  Creating Super Team
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  Build aligned teams that consistently deliver strong results.
                                </p>
                              </a>
                              <a
                                href="/teamworks/design-thinking.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  Win Customer Through Design
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  Design customer-driven solutions teams can execute effectively.
                                </p>
                              </a>
                              <a
                                href="/teamworks/critical-thinking-kanban.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  Critical Thinking for Better Work
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  Improve prioritisation and decisions using clear structured workflows.
                                </p>
                              </a>
                              <a
                                href="/teamworks/practical-lean-problem-solving.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  Practical Lean Problem Solving
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  Eliminate recurring problems using practical Lean methods.
                                </p>
                              </a>
                              <a
                                href="/teamworks/ai-skills-for-your-team.html"
                                className="block group/course py-2 md:py-2.5 px-3 md:px-4 rounded-lg hover:bg-gray-100 transition-colors no-underline"
                              >
                                <h5 className="text-xs md:text-sm font-semibold text-[#0F172A] group-hover/course:text-[#0066FF] transition-colors mb-1">
                                  AI Skills for YOUR Team
                                </h5>
                                <p className="text-xs text-[#475569] group-hover/course:text-[#0066FF] leading-relaxed transition-colors">
                                  Enable teams to use AI tools effectively daily.
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Column 3 - Spotlight */}
                    <div className="flex-1 min-w-0 lg:max-w-[280px]">
                      <h3 className="text-xs font-semibold text-[#A16207] tracking-[0.02em] uppercase mb-4 md:mb-5">
                        SPOTLIGHT
                      </h3>
                      <div className="space-y-4 md:space-y-5">
                        <a
                          href="/jess/free-resources.html"
                          className="block rounded-xl md:rounded-2xl p-4 md:p-5 no-underline"
                          style={{
                            background: 'linear-gradient(135deg, #7C3AED 0%, #3B0764 100%)',
                          }}
                        >
                          <h4 className="text-sm md:text-base font-semibold text-white flex items-center justify-between">
                            <span>Start Here: Agile &amp; AI in 10 Minutes</span>
                            <span className="text-lg md:text-xl">→</span>
                          </h4>
                        </a>
                        <a
                          href="/contactus.html"
                          className="block rounded-xl md:rounded-2xl p-4 md:p-5 no-underline"
                          style={{
                            background: 'linear-gradient(135deg, #7C3AED 0%, #3B0764 100%)',
                          }}
                        >
                          <h4 className="text-sm md:text-base font-semibold text-white flex items-center justify-between">
                            <span>Talk to an Expert</span>
                            <span className="text-lg md:text-xl">→</span>
                          </h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              data-dropdown-container="resources"
            >
              <button
                aria-expanded="false"
                className="px-4 py-2 flex items-center space-x-1 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
                data-dropdown-trigger="resources"
              >
                <span data-dropdown-text>Resources</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16" data-dropdown-icon>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>

              {/* Mega Menu for Resources */}
              <div
                data-dropdown="resources"
                className="hidden fixed left-1/2 -translate-x-1/2 bg-white rounded-2xl overflow-hidden z-50"
                style={{
                  top: '80px',
                  width: '1440px',
                  maxWidth: '95vw',
                  maxHeight: 'calc(100vh - 96px)',
                  overflowY: 'auto',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="px-8 xl:px-[120px] py-12">
                  {/* Header Section */}
                  <div className="mb-10">
                    <h2 className="text-2xl xl:text-[32px] font-bold text-[#0066FF] mb-3 flex items-center space-x-2">
                      <span>Resources</span>
                      <svg className="w-6 h-6 text-[#0066FF]" fill="none" viewBox="0 0 24 24">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </h2>
                    <p className="text-base xl:text-[18px] text-gray-700 leading-relaxed max-w-[800px]">
                      Practical guides, decision tools, and real-world proof to accelerate agile and AI-enabled execution.
                    </p>
                  </div>

                  {/* Columns Grid */}
                  <div className="flex gap-12">
                    {/* Column 1 - Getting Started */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-[#6B7280] tracking-[0.02em] uppercase mb-5">
                        GETTING STARTED
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="/jess/free-resources.html"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Learn Agile &amp; AI in 10 Minutes
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            A fast, no-fluff overview of Agile and AI in modern organisations.
                          </p>
                        </a>
                      </div>
                    </div>

                    {/* Column 2 - Official Guides */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-[#6B7280] tracking-[0.02em] uppercase mb-5">
                        OFFICIAL GUIDES
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="https://scrumguides.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Scrum Guide
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            The official rules of Scrum for leadership clarity.
                          </p>
                        </a>
                        <a
                          href="https://www.scrumatscale.com/scrum-at-scale-guide/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Scrum@Scale Guide
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            The framework for scaling Scrum across the enterprise.
                          </p>
                        </a>
                        <a
                          href="https://agilemanifesto.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Agile Manifesto
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            Foundational principles shaping modern agile organisations.
                          </p>
                        </a>
                      </div>
                    </div>

                    {/* Column 3 - Proof & Community */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-[#6B7280] tracking-[0.02em] uppercase mb-5">
                        PROOF &amp; COMMUNITY
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="/jess/free-resources.html#community-forums"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Community
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            Join practitioner discussions and leadership insights.
                          </p>
                        </a>
                      </div>
                    </div>

                    {/* Column 4 - Spotlight */}
                    <div className="flex-1 min-w-0 max-w-[280px]">
                      <h3 className="text-xs font-semibold text-[#A16207] tracking-[0.02em] uppercase mb-5">
                        SPOTLIGHT
                      </h3>
                      <div className="space-y-5">
                        <a
                          href="/jess/free-resources.html"
                          className="block rounded-2xl p-5 no-underline"
                          style={{
                            background: 'linear-gradient(135deg, #7C3AED 0%, #3B0764 100%)',
                          }}
                        >
                          <h4 className="text-base font-semibold text-white flex items-center justify-between">
                            <span>Start Here: Agile &amp; AI in 10 Minutes</span>
                            <span className="text-xl">→</span>
                          </h4>
                        </a>
                        <a
                          href="/contactus.html"
                          className="block rounded-2xl p-5 no-underline"
                          style={{
                            background: 'linear-gradient(135deg, #7C3AED 0%, #3B0764 100%)',
                          }}
                        >
                          <h4 className="text-base font-semibold text-white flex items-center justify-between">
                            <span>Talk to an Expert</span>
                            <span className="text-xl">→</span>
                          </h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              data-dropdown-container="company"
            >
              <button
                aria-expanded="false"
                className="px-4 py-2 flex items-center space-x-1 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
                data-dropdown-trigger="company"
              >
                <span data-dropdown-text>Company</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 16 16" data-dropdown-icon>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>

              {/* Mega Menu for Company */}
              <div
                data-dropdown="company"
                className="hidden fixed left-1/2 -translate-x-1/2 bg-white rounded-2xl overflow-hidden z-50"
                style={{
                  top: '80px',
                  width: '1440px',
                  maxWidth: '95vw',
                  maxHeight: 'calc(100vh - 96px)',
                  overflowY: 'auto',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="px-8 xl:px-[120px] py-12">
                  {/* Header Section */}
                  <div className="mb-10">
                    <h2 className="text-2xl xl:text-[32px] font-bold text-[#0066FF] mb-3 flex items-center space-x-2">
                      <span>Company</span>
                      <svg className="w-6 h-6 text-[#0066FF]" fill="none" viewBox="0 0 24 24">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </h2>
                    <p className="text-base xl:text-[18px] text-gray-700 leading-relaxed max-w-[800px]">
                      The people, principles, and experience behind CI Agile's enterprise transformation work.
                    </p>
                  </div>

                  {/* Columns Grid */}
                  <div className="flex gap-12">
                    {/* Column 1 - About */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-[#6B7280] tracking-[0.02em] uppercase mb-5">
                        ABOUT
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="/aboutus.html"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            About Us
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            Our mission and regional experience across Southeast Asia.
                          </p>
                        </a>
                        <a
                          href="/index.html#methodology"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Our Methodology
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            How we deliver measurable execution results.
                          </p>
                        </a>
                        <a
                          href="/contactus.html"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Contact Us
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            Discuss programs, consulting, or private runs.
                          </p>
                        </a>
                      </div>
                    </div>

                    {/* Column 2 - Leadership Philosophy */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-[#6B7280] tracking-[0.02em] uppercase mb-5">
                        LEADERSHIP PHILOSOPHY
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="/aboutus.html#founder"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Our Founder
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            The practitioner behind CI Agile's enterprise agility systems.
                          </p>
                        </a>
                        <a
                          href="/aboutus.html#services"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Our Services
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            Training, consulting, and AI-enabled execution programs.
                          </p>
                        </a>
                        <a
                          href="/aboutus.html#philosophy"
                          className="block group py-3 px-4 -mx-4 rounded-2xl hover:bg-gray-100 transition-colors no-underline"
                        >
                          <h4 className="text-base font-semibold text-[#0F172A] group-hover:text-[#0066FF] transition-colors mb-2">
                            Our Philosophy
                          </h4>
                          <p className="text-sm text-[#475569] group-hover:text-[#0066FF] leading-snug transition-colors line-clamp-2">
                            Structured agility. Measurable outcomes. No theatre.
                          </p>
                        </a>
                      </div>
                    </div>

                    {/* Column 3 - Spotlight */}
                    <div className="flex-1 min-w-0 max-w-[280px]">
                      <h3 className="text-xs font-semibold text-[#A16207] tracking-[0.02em] uppercase mb-5">
                        SPOTLIGHT
                      </h3>
                      <div className="space-y-5">
                        <a
                          href="/jess/free-resources.html"
                          className="block rounded-2xl p-5 no-underline"
                          style={{
                            background: 'linear-gradient(135deg, #7C3AED 0%, #3B0764 100%)',
                          }}
                        >
                          <h4 className="text-base font-semibold text-white flex items-center justify-between">
                            <span>Start Here: Agile &amp; AI in 10 Minutes</span>
                            <span className="text-xl">→</span>
                          </h4>
                        </a>
                        <a
                          href="/contactus.html"
                          className="block rounded-2xl p-5 no-underline"
                          style={{
                            background: 'linear-gradient(135deg, #7C3AED 0%, #3B0764 100%)',
                          }}
                        >
                          <h4 className="text-base font-semibold text-white flex items-center justify-between">
                            <span>Talk to an Expert</span>
                            <span className="text-xl">→</span>
                          </h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden xl:flex items-center space-x-4">
            <a
              href="https://education.ciagile.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-[#0066FF] text-sm font-medium rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-colors no-underline"
            >
              Student Portal
            </a>
            <a
              href="/contactus.html"
              className="px-6 py-2.5 bg-[#0066FF] text-white text-sm font-medium rounded-full hover:bg-[#0052CC] transition-colors no-underline"
            >
              Talk to an Expert
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-controls="mainsite-mobile-menu"
              data-mobile-toggle
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {/* Hamburger icon */}
              <svg data-icon="open" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg data-icon="close" className="h-6 w-6 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (static-export friendly: always rendered, toggled via main.js) */}
      <div
        id="mainsite-mobile-menu"
        data-mobile-menu
        className="xl:hidden fixed inset-0 z-40 hidden"
        aria-hidden="true"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20" data-mobile-backdrop />

        {/* Panel */}
        <div className="absolute left-0 right-0 top-[72px] bg-white border-b border-gray-200 shadow-lg max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {/* Programs Section */}
            <div className="border-b border-gray-100 pb-4">
              <button
                data-nav-accordion="programs"
                className="w-full flex items-center justify-between px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Programs</span>
                <svg className="w-5 h-5 transition-transform" data-nav-accordion-icon fill="none" viewBox="0 0 20 20">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
              <div data-nav-accordion-panel="programs" className="hidden mt-2 pl-4 space-y-6">
                {/* Enterprise Pathways */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Enterprise Pathways</h4>
                  <div className="space-y-4">
                    {/* JESS Program */}
                    <div className="space-y-2">
                      <div className="block">
                        <h5 className="text-sm font-semibold text-gray-900">Jeff Sutherland's Enterprise Agility Program</h5>
                        <p className="text-xs text-gray-600 mt-1">Align strategy and scale disciplined enterprise execution effectively.</p>
                      </div>
                      <div className="ml-3 mt-2 space-y-2">
                        <p className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide">Signature Series</p>
                        <div className="space-y-2">
                          <a href="/jess/leadership-training.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">International Certification Courses</h6>
                            <p className="text-xs text-gray-600 mt-0.5">Globally recognised certifications for enterprise leaders.</p>
                          </a>
                          <a href="/jess/class-schedule.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">Public Certification Class</h6>
                            <p className="text-xs text-gray-600 mt-0.5">View Upcoming Class Schedule</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Nova Series */}
                    <div className="space-y-2">
                      <div className="block">
                        <h5 className="text-sm font-semibold text-gray-900">Nova Series</h5>
                        <p className="text-xs text-gray-600 mt-1">Enterprise team training to align and accelerate delivery.</p>
                      </div>
                      <div className="ml-3 mt-2 space-y-2">
                        <p className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide">Courses</p>
                        <div className="space-y-2">
                          <a href="/jess/nova/agile-scrum.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">Agile &amp; Scrum 201</h6>
                            <p className="text-xs text-gray-600 mt-0.5">Strengthen Scrum foundations for clarity and faster delivery.</p>
                          </a>
                          <a href="/jess/nova/design-thinking.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">Design Thinking 201</h6>
                            <p className="text-xs text-gray-600 mt-0.5">Build customer-focused solutions teams can confidently deliver.</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Capability Tracks */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Capability Tracks</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="block">
                        <h5 className="text-sm font-semibold text-gray-900">TeamWorks Program</h5>
                        <p className="text-xs text-gray-600 mt-1">Practical training to improve team execution performance consistently.</p>
                      </div>
                      <div className="ml-3 mt-2 space-y-2">
                        <p className="text-xs font-semibold text-[#0066FF] uppercase tracking-wide">Courses</p>
                        <div className="space-y-2">
                          <a href="/teamworks/creating-super-teams.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">Creating Super Team</h6>
                            <p className="text-xs text-gray-600 mt-0.5">Build aligned teams that consistently deliver strong results.</p>
                          </a>
                          <a href="/teamworks/design-thinking.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">Win Customer Through Design</h6>
                            <p className="text-xs text-gray-600 mt-0.5">Design customer-driven solutions teams can execute effectively.</p>
                          </a>
                          <a href="/teamworks/critical-thinking-kanban.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">Critical Thinking for Better Work</h6>
                            <p className="text-xs text-gray-600 mt-0.5">Improve prioritisation and decisions using clear structured workflows.</p>
                          </a>
                          <a href="/teamworks/practical-lean-problem-solving.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">Practical Lean Problem Solving</h6>
                            <p className="text-xs text-gray-600 mt-0.5">Eliminate recurring problems using practical Lean methods.</p>
                          </a>
                          <a href="/teamworks/ai-skills-for-your-team.html" className="block pl-2 border-l-2 border-gray-200 hover:border-[#0066FF] transition-colors no-underline" data-mobile-close>
                            <h6 className="text-xs font-semibold text-gray-900 hover:text-[#0066FF] transition-colors">AI Skills for YOUR Team</h6>
                            <p className="text-xs text-gray-600 mt-0.5">Enable teams to use AI tools effectively daily.</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spotlight */}
                <div>
                  <h4 className="text-xs font-semibold text-[#A16207] uppercase tracking-wide mb-3">Spotlight</h4>
                  <div className="space-y-3">
                    <a
                      href="/jess/free-resources.html"
                      className="block rounded-xl p-4 no-underline"
                      style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #3B0764 100%)' }}
                      data-mobile-close
                    >
                      <h5 className="text-sm font-semibold text-white flex items-center justify-between">
                        <span>Start Here: Agile &amp; AI in 10 Minutes</span>
                        <span className="text-lg">→</span>
                      </h5>
                    </a>
                    <a
                      href="/contactus.html"
                      className="block rounded-xl p-4 no-underline"
                      style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #3B0764 100%)' }}
                      data-mobile-close
                    >
                      <h5 className="text-sm font-semibold text-white flex items-center justify-between">
                        <span>Talk to an Expert</span>
                        <span className="text-lg">→</span>
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="border-b border-gray-100 pb-4">
              <button
                data-nav-accordion="resources"
                className="w-full flex items-center justify-between px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Resources</span>
                <svg className="w-5 h-5 transition-transform" data-nav-accordion-icon fill="none" viewBox="0 0 20 20">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
              <div data-nav-accordion-panel="resources" className="hidden mt-2 pl-4 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Getting Started</h4>
                  <a href="/jess/free-resources.html" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>
                    Learn Agile &amp; AI in 10 Minutes
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Official Guides</h4>
                  <a href="https://scrumguides.org/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>
                    Scrum Guide
                  </a>
                  <a href="https://www.scrumatscale.com/scrum-at-scale-guide/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>
                    Scrum@Scale Guide
                  </a>
                  <a href="https://agilemanifesto.org/" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>
                    Agile Manifesto
                  </a>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Proof &amp; Community</h4>
                  <a href="/jess/free-resources.html#community-forums" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>
                    Community
                  </a>
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div className="border-b border-gray-100 pb-4">
              <button
                data-nav-accordion="company"
                className="w-full flex items-center justify-between px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Company</span>
                <svg className="w-5 h-5 transition-transform" data-nav-accordion-icon fill="none" viewBox="0 0 20 20">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </button>
              <div data-nav-accordion-panel="company" className="hidden mt-2 pl-4 space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">About</h4>
                  <a href="/aboutus.html" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>About Us</a>
                  <a href="/index.html#methodology" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>Our Methodology</a>
                  <a href="/contactus.html" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>Contact Us</a>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Leadership Philosophy</h4>
                  <a href="/aboutus.html#founder" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>Our Founder</a>
                  <a href="/aboutus.html#services" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>Our Services</a>
                  <a href="/aboutus.html#philosophy" className="block py-2 text-sm text-gray-700 hover:text-[#0066FF] no-underline" data-mobile-close>Our Philosophy</a>
                </div>
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3">
              <a
                href="https://education.ciagile.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 text-[#0066FF] text-center font-medium rounded-full border-2 border-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-colors no-underline"
                data-mobile-close
              >
                Student Portal
              </a>
              <a
                href="/contactus.html"
                className="block w-full px-6 py-3 bg-[#0066FF] text-white text-center font-medium rounded-full hover:bg-[#0052CC] transition-colors no-underline"
                data-mobile-close
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
