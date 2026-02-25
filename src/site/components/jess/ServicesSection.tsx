import { Button } from "@/site/components/jess/ui/button";
import { Book, GraduationCap, Users, Briefcase, ArrowRight, ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
// react-slick Slider is not SSR-compatible; use a plain div wrapper for static export.
// The mobile carousel becomes a simple horizontal scroll strip.
const Slider = ({ children, ...props }: any) => <div {...props}>{children}</div>;
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";

const services = [
  {
    id: 'free-learnings',
    icon: Book,
    title: "Executive Insights & Resources",
    subtitle: "Build shared understanding of enterprise agility before making structural decisions.",
    description:
      "Access our comprehensive library of free resources, guides, and learning materials. Start your transformation journey with proven frameworks and best practices available to everyone.",
    features: [
      "Scrum@Scale Guide (free download)",
      "Essential reading recommendations",
      "Public workshops and webinars",
      "Community resources",
      "Open-source frameworks",
    ],
    duration: "Always available",
    color: "from-amber-500 to-orange-500",
    link: "free-resources.html",
  },
  {
    id: 'leadership-training',
    icon: GraduationCap,
    title: "JESS Learning Program",
    subtitle: "Equip senior leaders to design, govern, and sustain agility at scale — beyond team-level adoption.",
    description:
      "Equip your C-suite and senior leadership with the knowledge, frameworks, and confidence to champion enterprise-wide transformation. Our programs create genuine understanding of agile principles and their strategic application.",
    features: [
      "Executive workshop series",
      "Strategic alignment coaching",
      "Change leadership certification",
      "Risk management for leaders",
      "Stakeholder communication frameworks",
    ],
    duration: "4-week intensive program",
    color: "from-purple-500 to-pink-500",
    link: "leadership-training.html",
  },
  {
    id: 'team-level-training',
    icon: Users,
    title: "Nova Series",
    subtitle: "Align teams to enterprise priorities while maintaining speed, accountability, and delivery discipline.",
    description:
      "Transform your teams into agile powerhouses. From Scrum Masters to Product Owners to development teams, we provide hands-on training that builds real capability, not just theoretical knowledge.",
    features: [
      "Scrum Master certification",
      "Product Owner excellence",
      "Cross-functional team workshops",
      "Sprint execution mastery",
      "Continuous improvement practices",
    ],
    duration: "8-week immersive program",
    color: "from-blue-500 to-cyan-500",
    link: "team-level-training.html",
  },
  {
    id: 'enterprise-consulting',
    icon: Briefcase,
    title: "Enterprise Consulting",
    subtitle: "End-to-End Transformation Partnership",
    description:
      "Our consultants embed with your organization to design, implement, and optimize your transformation journey. We don't just advise—we roll up our sleeves and work alongside you to deliver results.",
    features: [
      "Transformation roadmap design",
      "Organizational assessment",
      "Framework customization",
      "Implementation support",
      "Ongoing optimization & coaching",
    ],
    duration: "6-18 month engagement",
    color: "from-green-500 to-emerald-500",
    link: "enterprise-consulting.html",
  },
];

export function ServicesSection() {
  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div data-reveal>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white text-center">Enterprise Transformation Roadmap</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto text-center">
              How enterprises move from strategic intent to repeatable, high-performance execution — without relying on hero teams or isolated Agile pockets.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          {/* Mobile Slider */}
          <div className="block sm:hidden" data-carousel="jess-services" data-carousel-initial="0">
            <div data-carousel-track>
              {/* Card 1 - Free Resources */}
              <div className="px-2" data-carousel-slide>
                <a
                  href="free-resources.html"
                  className="block h-full"
                >
                  <div className="relative h-[500px] rounded-3xl overflow-hidden bg-slate-900">
                    <div className="absolute top-6 left-6 z-10">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                        <span className="text-slate-900 font-bold text-lg">1</span>
                      </div>
                    </div>
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758691736508-a85d1f7d5a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9uJTIwcmVzb3VyY2VzfGVufDF8fHx8MTc3MTUxNjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Free Learning Resources"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider">
                          Learn
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        Assessment & Ground Work
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Build shared understanding of enterprise agility before making structural decisions.
                      </p>
                      <span className="w-full py-3 px-6 bg-white text-slate-900 font-semibold text-sm rounded-lg flex items-center justify-center gap-2">
                        Access Resources
                        <ArrowRight size={18} strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 2 - JESS Program */}
              <div className="px-2" data-carousel-slide>
                <a
                  href="leadership-training.html"
                  className="block h-full"
                >
                  <div className="relative h-[500px] rounded-3xl overflow-hidden bg-slate-900">
                    <div className="absolute top-6 left-6 z-10">
                      <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                        <span className="text-slate-900 font-bold text-lg">2</span>
                      </div>
                    </div>
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXJzaGlwJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MTUxNjMwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="JESS Leadership Program"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold uppercase tracking-wider">
                          For Leaders
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        JESS Program
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Equip senior leaders to design, govern, and sustain agility at scale — beyond team-level adoption.
                      </p>
                      <span className="w-full py-3 px-6 bg-white text-slate-900 font-semibold text-sm rounded-lg flex items-center justify-center gap-2">
                        View Courses
                        <ArrowRight size={18} strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Card 3 - Nova Series */}
              <div className="px-2" data-carousel-slide>
                <a
                  href="team-level-training.html"
                  className="block h-full"
                >
                  <div className="relative h-[500px] rounded-3xl overflow-hidden bg-slate-900">
                    <div className="absolute top-6 left-6 z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-slate-900 font-bold text-lg">3</span>
                      </div>
                    </div>
                    <div className="absolute inset-0">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758876202468-5ffe0ee61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTQzMDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Nova Series Team Training"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="mb-4">
                        <span className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-sm border /30 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider">
                          For Teams
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                        Nova Series
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        Align teams to enterprise priorities while maintaining speed, accountability, and delivery discipline.
                      </p>
                      <span className="w-full py-3 px-6 bg-white text-slate-900 font-semibold text-sm rounded-lg flex items-center justify-center gap-2">
                        View Courses
                        <ArrowRight size={18} strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                data-carousel-prev
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="text-white" size={24} strokeWidth={2} />
              </button>
              <button
                data-carousel-next
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="text-white" size={24} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Desktop Horizontal Scroll */}
          <div
            data-scroll-container
            className="hidden sm:grid sm:grid-cols-3 gap-6 pb-4 relative"
            data-reveal-group data-stagger="140"
          >
            {/* Arrow between Card 1 and 2 */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:block">
              <MoveRight className="text-slate-400" size={40} strokeWidth={2} />
            </div>

            {/* Arrow between Card 2 and 3 */}
            <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden lg:block">
              <MoveRight className="text-slate-400" size={40} strokeWidth={2} />
            </div>

            {/* Card 1 - Free Resources */}
            <div
              className="relative"
              data-reveal-item
            >
              <a
                href="free-resources.html"
                className="block h-full group"
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden bg-slate-900">
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-slate-900 font-bold text-lg">1</span>
                    </div>
                  </div>
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758691736508-a85d1f7d5a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9uJTIwcmVzb3VyY2VzfGVufDF8fHx8MTc3MTUxNjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Free Learning Resources"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1.5 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider">
                        Learn
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                      Assessment & Ground Work
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Build shared understanding of enterprise agility before making structural decisions.
                    </p>
                    <span className="w-full py-3 px-6 bg-white text-slate-900 font-semibold text-sm rounded-lg flex items-center justify-center gap-2">
                      Access Resources
                      <ArrowRight size={18} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 2 - JESS Program */}
            <div
              className="relative"
              data-reveal-item
            >
              <a
                href="leadership-training.html"
                className="block h-full group"
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden bg-slate-900">
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                      <span className="text-slate-900 font-bold text-lg">2</span>
                    </div>
                  </div>
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXJzaGlwJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MTUxNjMwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="JESS Leadership Program"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1.5 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold uppercase tracking-wider">
                        For Leaders
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                      Develop Agile Leaders
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Equip senior leaders to design, govern, and sustain agility at scale — beyond team-level adoption.
                    </p>
                    <span className="w-full py-3 px-6 bg-white text-slate-900 font-semibold text-sm rounded-lg flex items-center justify-center gap-2">
                      View Courses
                      <ArrowRight size={18} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Card 3 - Nova Series */}
            <div
              className="relative"
              data-reveal-item
            >
              <a
                href="team-level-training.html"
                className="block h-full group"
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden bg-slate-900">
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-slate-900 font-bold text-lg">3</span>
                    </div>
                  </div>
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1758876202468-5ffe0ee61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTQzMDkxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Nova Series Team Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <span className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-sm border /30 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-wider">
                        For Teams
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                      Strengthen Teams
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      Align teams to enterprise priorities while maintaining speed, accountability, and delivery discipline.
                    </p>
                    <span className="w-full py-3 px-6 bg-white text-slate-900 font-semibold text-sm rounded-lg flex items-center justify-center gap-2">
                      View Courses
                      <ArrowRight size={18} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Anchoring Sentence */}
          <div
            className="mt-12 text-center"
          >
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Organizations that succeed don't "roll out Agile".
              <br />
              <span className="text-white font-semibold">They redesign how leadership, strategy, and execution work together.</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
