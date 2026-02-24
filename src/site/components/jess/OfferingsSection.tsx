import { useState } from "react";
import {
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Brain,
  Award,
  Zap,
  BarChart3,
  Shield,
  Rocket,
  Layers,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Plus,
  Sparkles,
  Bot,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";

interface Offering {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  visual?: "icon" | "grid" | "chart" | "badges" | "image";
}

export function OfferingsSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const offerings: Offering[] = [
    {
      id: "leadership",
      icon: Users,
      title: "Leadership Enablement for System-Level Change",
      description:
        "Equip senior leaders to design, govern, and sustain enterprise agility — aligning strategy, funding, and execution from the top.",
      visual: "badges",
    },
    {
      id: "team",
      icon: Zap,
      title: "Teams That Consistently Deliver Business Value",
      description:
        "Create high-performing teams that deliver faster, with fewer handoffs and less rework — aligned to enterprise priorities, not local optimization.",
      visual: "image",
    },
    {
      id: "framework",
      icon: Layers,
      title: "A Proven Enterprise Execution System",
      description:
        "Adopt an execution system proven in large, complex organizations to coordinate strategy, leadership, and delivery across the enterprise.",
      visual: "grid",
    },
    {
      id: "consulting",
      icon: Lightbulb,
      title: "Enterprise Operating Model Design",
      description:
        "Work with experienced advisors to design an operating model tailored to your organization's structure, constraints, and strategic goals.",
      visual: "icon",
    },
    {
      id: "metrics",
      icon: BarChart3,
      title: "Executive-Level Flow & Value Transparency",
      description:
        "Gain real-time visibility into value flow, delivery risk, and bottlenecks — enabling informed decisions without relying on lagging reports.",
      visual: "chart",
    },
    {
      id: "ai-ready",
      icon: Brain,
      title: "An Operating Model Ready for AI Adoption",
      description:
        "Prepare your organization for responsible AI and automation by embedding governance, decision rights, and flow discipline before scaling AI use.",
      visual: "icon",
    },
    {
      id: "transformation",
      icon: Rocket,
      title: "End-to-End Transformation Accountability",
      description:
        "Ensure strategy, funding, governance, and delivery are aligned — so transformation produces outcomes, not disconnected initiatives.",
      visual: "icon",
    },
    {
      id: "roi",
      icon: TrendingUp,
      title: "Investment Decisions Backed by Measurable ROI",
      description:
        "Link transformation investments directly to business outcomes — enabling leaders to justify spend, track returns, and course-correct early.",
      visual: "chart",
    },
    {
      id: "certification",
      icon: Award,
      title: "Capability Building With Industry Recognition",
      description:
        "Build internal capability with globally recognized credentials — supporting sustainability without dependency on external consultants.",
      visual: "badges",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-3xl blur-3xl rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[600px] bg-cyan-500/5 rounded-3xl blur-3xl -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              What Executives Get With JESS
            </h2>
            <p className="text-xl text-slate-400">
              A complete Agile + AI operating model designed to reduce transformation risk, improve execution reliability, and deliver measurable business outcomes.
            </p>
          </div>
        </div>

        {/* Grid of offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 auto-rows-fr">
          {offerings.map((offering, index) => {
            // Create Astro-style layout:
            // Row 1: square, wide, (wide continues)
            // Row 2: tall, square, square
            // Row 3: tall continues, wide, (wide continues)
            // Row 4: square, square, square
            const spanTwoColumns = index === 1 || index === 5; // Cards 2 and 6
            const spanTwoRows = index === 2; // Card 3

            return (
              <OfferingCard
                key={offering.id}
                offering={offering}
                isActive={activeCard === offering.id}
                onHover={() => setActiveCard(offering.id)}
                onLeave={() => setActiveCard(null)}
                delay={index * 0.05}
                spanTwoColumns={spanTwoColumns}
                spanTwoRows={spanTwoRows}
              />
            );
          })}
        </div>

        {/* Closing statement */}
        <div
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-300 max-w-4xl mx-auto">
            JESS delivers results because it changes how decisions are made, how work flows, and how accountability is enforced — not just how teams work.
          </p>
        </div>
      </div>
    </section>
  );
}

interface OfferingCardProps {
  offering: Offering;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  delay: number;
  spanTwoColumns: boolean;
  spanTwoRows: boolean;
}

function OfferingCard({ offering, isActive, onHover, onLeave, delay, spanTwoColumns, spanTwoRows }: OfferingCardProps) {
  const Icon = offering.icon;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative p-4 md:p-6 rounded-2xl border transition-all duration-300 cursor-pointer
        ${
          isActive
            ? "bg-gradient-to-br from-slate-900 to-slate-800 border-blue-500/50 shadow-lg shadow-blue-500/20"
            : "bg-slate-900/40 border-slate-700/50 hover:border-slate-600"
        }
        ${spanTwoColumns ? 'md:col-span-2' : ''}
        ${spanTwoRows ? 'md:row-span-2' : ''}
      `}
    >
      {/* Visual Element */}
      <div className="h-48 mb-6 flex items-center justify-center relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/30">
        {offering.visual === "icon" && (
          <>
            {Icon === Lightbulb ? (
              <div className="flex items-center justify-center gap-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                  >
                    <Lightbulb
                      size={i === 1 ? 96 : 72}
                      className="transition-all duration-300 text-amber-400"
                      strokeWidth={1.5}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <>
                {Icon === Brain ? (
                  <div className="flex items-center justify-center gap-4">
                    <div
                    >
                      <Brain
                        size={72}
                        className="text-pink-500"
                        strokeWidth={1.5}
                      />
                    </div>

                    <div
                    >
                      <Plus
                        size={40}
                        className="text-slate-500"
                        strokeWidth={2}
                      />
                    </div>

                    <div
                    >
                      <Bot
                        size={72}
                        className="text-purple-400"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                  >
                    <Icon
                      size={96}
                      className="text-blue-400"
                      strokeWidth={1.5}
                    />
                  </div>
                )}
              </>
            )}
          </>
        )}

        {offering.visual === "grid" && (
          <div
            className="w-full h-full relative"
          >
            <ImageWithFallback
              src="https://i.postimg.cc/R03PDFP7/books-sas-twicehalf-harvard.webp"
              alt="Scrum@Scale Framework"
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
            />
            {/* Blue accent overlay on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent"
            />
          </div>
        )}

        {offering.visual === "chart" && (
          <>
            {offering.id === "roi" ? (
              <div className="w-full h-full flex items-center justify-center relative p-8">
                {/* ROI Growth Visualization with Icons */}
                <div className="flex items-end justify-center gap-4 w-full h-full">
                  {/* Column 1 - Investment */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="mb-auto"
                    >
                      <DollarSign size={32} className="text-emerald-400" strokeWidth={2} />
                    </div>
                    <div className="w-full rounded-t-lg bg-gradient-to-t from-emerald-600 to-emerald-400"
                    />
                  </div>

                  {/* Column 2 - Growth Arrow */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="mb-auto"
                    >
                      <ArrowUpRight size={36} className="text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <div className="w-full rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-400"
                    />
                  </div>

                  {/* Column 3 - ROI/Returns */}
                  <div className="flex flex-col items-center gap-2 flex-1">
                    <div
                      className="mb-auto"
                    >
                      <TrendingUp size={36} className="text-blue-400" strokeWidth={2.5} />
                    </div>
                    <div className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-blue-400"
                    />
                  </div>
                </div>
              </div>
            ) : offering.id === "metrics" ? (
              <div
                className="w-full h-full absolute inset-0"
              >
                <ImageWithFallback
                  src="https://i.postimg.cc/9X9p9KSw/Pictures-to-describe-flow-and-metrics-of-hyper-performance-team-graphs-numbers.jpg"
                  alt="Data analytics graphs and metrics"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
                />
                {/* Blue accent overlay on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent"
                />
              </div>
            ) : (
              <div className="flex items-end justify-center gap-3 px-8 h-full py-6">
                {[45, 70, 85, 95, 75].map((height, i) => (
                  <div
                    key={i}className={`
                      flex-1 rounded-t-md transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-t from-blue-600 via-blue-500 to-cyan-400"
                          : "bg-slate-700/50"
                      }
                    `}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {offering.visual === "badges" && (
          <div className="grid grid-cols-2 gap-4 p-4 sm:p-8">
            {(() => {
              // Different badge icons based on the offering
              const badgeConfig = offering.id === "leadership"
                ? {
                    icons: [Briefcase, Users, Target, Award],
                    colors: [
                      "text-cyan-300",      // Briefcase - business
                      "text-purple-400",    // Users - leadership
                      "text-emerald-400",   // Target - goals/metrics
                      "text-amber-400"      // Award - certification
                    ]
                  }
                : {
                    icons: [GraduationCap, Shield, TrendingUp, CheckCircle2],
                    colors: [
                      "text-cyan-300",      // GraduationCap - certification/learning
                      "text-purple-400",    // Shield - quality/trust
                      "text-emerald-400",   // TrendingUp - improvement
                      "text-amber-400"      // CheckCircle2 - quality/completion
                    ]
                  };

              return badgeConfig.icons.map((BadgeIcon, i) => (
                <div
                  key={i}className="p-4 rounded-xl border flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30"
                >
                  <BadgeIcon
                    size={32}
                    className={`${badgeConfig.colors[i]} opacity-100`}
                  />
                </div>
              ));
            })()}
          </div>
        )}

        {offering.visual === "image" && (
          <div
            className="w-full h-full relative"
          >
            <ImageWithFallback
              src="https://i.postimg.cc/FHwbfZLb/Busines-Value.webp"
              alt="Hyper-productive teams collaborating"
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"
            />
            {/* Blue accent overlay on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3
          className={`text-lg font-bold mb-2 transition-colors duration-300 ${
            isActive ? "text-white" : "text-slate-200"
          }`}
        >
          {offering.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">{offering.description}</p>

        {/* Additional content for tall cards about certifications */}
        {spanTwoRows && offering.id === "certification" && (
          <div className="mt-6 pt-6 border-t border-slate-700/50 space-y-4"
          >
            <p className="text-sm text-slate-300 leading-relaxed">
              Our leadership course offers <span className="font-semibold text-white">THREE internationally-acclaimed Scrum+AI credentials</span>. Improve the work process of the Scrum Master, Product Owner, Team, and Multi-Team (Scaling) with AI.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Registered Scrum Master™</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Registered Product Owner™</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Registered Scrum@Scale Fundamentals™</h4>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <Award size={14} className="text-blue-400" />
                <span className="text-xs font-medium text-blue-400">Industry-Recognized Certifications</span>
              </div>
            </div>
          </div>
        )}

        {spanTwoRows && offering.id !== "certification" && (
          <div className="mt-6 pt-6 border-t border-slate-700/50"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="text-xs">Proven at enterprise scale</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="text-xs">Executive governance built in</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span className="text-xs">Demonstrated business impact</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Active indicator */}
      {isActive && (
        <div
          className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
        />
      )}
    </div>
  );
}