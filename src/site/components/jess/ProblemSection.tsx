import { AlertTriangle, TrendingDown, Users, Target } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const statsData = [
  {
    title: "Leadership Misalignment",
    percentage: 44,
    label: "Leaders sponsor transformation but do not change decision-making models",
    detail: "or governance behaviours",
    color: "#ef4444",
  },
  {
    title: "Lack of Scalable Execution Model",
    percentage: 35,
    label: "Organizations attempt to scale without redesigning structure, funding,",
    detail: "and coordination mechanisms",
    color: "#f97316",
  },
  {
    title: "Persistent Silos and Inconsistent Practices",
    percentage: 37,
    label: "Teams operate under different rules, incentives, and priorities,",
    detail: "creating friction and delays",
    color: "#f59e0b",
  },
  {
    title: "No Enterprise Execution Blueprint",
    percentage: 60,
    label: "Transformation is driven by training and initiatives",
    detail: "instead of a unified enterprise execution system",
    color: "#dc2626",
  },
];

const problems = [
  {
    icon: AlertTriangle,
    title: "Leadership Doesn't Get It",
    description: "Your executives approved the budget but don't understand Agile. They demand roadmaps, fixed scope, and annual plans. 58% of transformations die here—killed by well-meaning leaders asking the wrong questions.",
  },
  {
    icon: TrendingDown,
    title: "You Can't Scale Past 3 Teams",
    description: "Your pilot teams are crushing it. But when you try to scale to 10, 50, or 100 teams? Chaos. 40% of companies hit this wall and never break through. Dependencies multiply, alignment vanishes, and delivery grinds to a halt.",
  },
  {
    icon: Users,
    title: "Teams Work in Silos",
    description: "Engineering doesn't talk to Product. Product doesn't talk to Marketing. Nobody talks to Legal. 47% struggle with this dysfunction. The result? Duplicated work, conflicting priorities, and a culture of blame.",
  },
  {
    icon: Target,
    title: "No Real Plan to Scale",
    description: "You hired Agile coaches, ran workshops, and declared victory. But you have no framework for coordinating hundreds of teams. 60% of transformations fail here—good intentions without a proven blueprint.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Why Most Enterprise Transformations Fail?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Data from the 18th State of Agile Report shows why most enterprise transformations fail to deliver measurable outcomes.
            </p>
          </div>
        </div>

        {/* Bar chart visualization */}
        <div
          className="max-w-5xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 backdrop-blur-sm"
        >
          <p className="text-sm text-slate-400 mb-8">
            The four most common enterprise transformation failure patterns, based on the 18th State of Agile Report:
          </p>

          <div className="space-y-6">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  {/* Label */}
                  <div className="sm:w-40 sm:text-right">
                    <p className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors">
                      {stat.title}
                    </p>
                  </div>

                  {/* Bar and Percentage Container on Mobile */}
                  <div className="flex items-center gap-2 flex-1">
                    {/* Bar */}
                    <div className="flex-1 relative h-10 sm:h-12 bg-slate-800/50 rounded-lg border border-slate-700/50 overflow-hidden">
                      <div
                        className="h-full rounded-lg relative"
                        style={{
                          background: index === 0 || index === 3
                            ? `linear-gradient(90deg, ${stat.color} 0%, #f97316 100%)`
                            : stat.color,
                        }}
                      >
                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>

                    {/* Percentage */}
                    <div className="w-12 sm:w-16 flex-shrink-0">
                      <span
                        className="text-sm sm:text-xl font-bold text-white"
                      >
                        {stat.percentage}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Detail text */}
                <div className="flex items-start gap-2 sm:gap-4 mt-1">
                  <div className="hidden sm:block sm:w-40"></div>
                  <p className="flex-1 text-xs text-slate-500 italic">
                    {stat.label} — {stat.detail}
                  </p>
                  <div className="hidden sm:block sm:w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-12 max-w-5xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 text-center"
        >
          <p className="text-lg text-slate-300">
            <span className="font-bold text-white">The result:</span> billions wasted annually on stalled
            transformations, leadership frustration, and declining competitive advantage.
          </p>
        </div>

        {/* Training Programs CTA */}
        <div
          className="mt-16 text-center relative"
        >
          {/* Decorative glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20 blur-3xl -z-10"></div>

          <div className="relative p-12 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl shadow-emerald-500/10">
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">PROVEN SOLUTION</span>
            </div>

            {/* Company Logos */}
            <div className="flex items-center justify-center gap-6 md:gap-8 mb-6 py-4 md:py-6 flex-wrap">
              <img
                src="https://i.postimg.cc/fTvH20dx/Tesla-Logo.png"
                alt="Tesla"
                className="h-16 w-auto"
              />
              <img
                src="https://i.postimg.cc/B689svqv/rocket-mortgage-logo-brandlogos-net-u4k97-512x145.png"
                alt="Rocket Mortgage"
                className="h-12 w-auto"
              />
              <img
                src="https://i.postimg.cc/VLTScKXw/Bank-of-China-transparent.png"
                alt="Bank of China"
                className="h-16 w-auto"
              />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How High-Performing Enterprises Actually Fix This
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              A proven enterprise operating model, designed by Jeff Sutherland, to move organizations from stalled transformation to measurable execution at scale.
            </p>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              See the Enterprise Roadmap
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}