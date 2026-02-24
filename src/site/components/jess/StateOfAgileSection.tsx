import { TrendingDown, AlertCircle, Target, Zap, Brain, BarChart3 } from "lucide-react";

export function StateOfAgileSection() {
  return (
    <section id="state-of-agile" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div data-reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
              <AlertCircle size={16} />
              <span className="text-sm">18th State of Agile Report</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              What Enterprise Data Is Telling Leaders
            </h2>
          </div>
        </div>

        {/* The Gap: Tools vs Results */}
        <div className="mb-16 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-red-500/30" data-reveal>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">The Visibility Paradox</h3>
            <p className="text-slate-400">Enterprises have more visibility than ever — yet leadership still struggles to turn it into reliable outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" data-reveal-group data-stagger="140">
            {/* Good Visibility */}
            <div className="text-center" data-reveal-item>
              <div className="mb-4">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  60%
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden max-w-md mx-auto">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  ></div>
                </div>
              </div>
              <p className="text-slate-300 font-semibold mb-2">Report High Delivery Visibility</p>
              <p className="text-sm text-slate-500">Across development and operations</p>
            </div>

            {/* Poor Delivery */}
            <div className="text-center" data-reveal-item>
              <div className="mb-4">
                <div className="text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  63%
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden max-w-md mx-auto">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                  ></div>
                </div>
              </div>
              <p className="text-slate-300 font-semibold mb-2">Struggle to Deliver Predictable Outcomes</p>
              <p className="text-sm text-slate-500">Despite modern tooling and practices</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-700 text-center">
            <p className="text-lg text-slate-300 italic">
              "The infrastructure has improved, but <span className="text-white font-semibold">the system hasn't</span>."
            </p>
            <p className="text-sm text-slate-500 mt-3">
              Our work begins where tooling stops: designing high-performance operating models that turn visibility into value.
            </p>
          </div>
        </div>

        {/* The Fourth Wave: AI Era */}
        <div className="mb-16 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30" data-reveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
              <Brain className="text-purple-400" size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">The Fourth Wave: Agentic AI</h3>
              <p className="text-slate-400">A new era of AI demands a new leadership and operating model.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6" data-reveal-group data-stagger="140">
            <div data-reveal-item>
              <div className="flex items-baseline gap-3 mb-3">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  84%
                </div>
                <div className="text-slate-300">Using or planning to use AI</div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                ></div>
              </div>
            </div>

            <div data-reveal-item>
              <div className="flex items-baseline gap-3 mb-3">
                <div className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  10%
                </div>
                <div className="text-slate-300">Have formal AI delivery models</div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                ></div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-700">
            <p className="text-slate-300 mb-4">
              <span className="font-semibold text-white">The gap is structural:</span> Most organizations adopt AI faster than they redesign how decisions, accountability, and delivery work.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Zap className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Clear decision rights and accountability — so AI improves outcomes, not just accelerates flawed processes</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Teams designed to work with AI responsibly — amplifying judgment, not replacing it</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="text-purple-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Governance and metrics that make AI-driven insights trustworthy, auditable, and actionable</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What Organizations Really Need */}
        <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30" data-reveal>
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            What Organizations Really Need
          </h3>
          <p className="text-center text-slate-400 mb-8">
            When asked what would most help them adapt, leaders didn't ask for more tools or frameworks — they asked for clarity and alignment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-group data-stagger="110">
            <div className="text-center" data-reveal-item>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                29%
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 max-w-xs mx-auto">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                ></div>
              </div>
              <p className="text-slate-300 font-semibold">Outcome Ownership & Adaptability</p>
            </div>

            <div className="text-center" data-reveal-item>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                27%
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 max-w-xs mx-auto">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                ></div>
              </div>
              <p className="text-slate-300 font-semibold">Leadership Support & Alignment</p>
            </div>

            <div className="text-center" data-reveal-item>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                17%
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 max-w-xs mx-auto">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                ></div>
              </div>
              <p className="text-slate-300 font-semibold">Clear Line of Sight from Strategy to Execution</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20" data-reveal>
          <h3 className="text-2xl font-bold text-white mb-4">
            JESS Is Built for This Enterprise Reality
          </h3>
          <p className="text-slate-300 max-w-3xl mx-auto">
            An enterprise operating model that connects leadership decisions, funding, priorities, and execution — so leaders get measurable outcomes, not transformation theatre.
          </p>
        </div>
      </div>
    </section>
  );
}