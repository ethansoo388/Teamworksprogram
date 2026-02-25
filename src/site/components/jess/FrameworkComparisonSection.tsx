import { Award, TrendingUp } from "lucide-react";

export function FrameworkComparisonSection() {
  const frameworks = [
    { name: "Scrum", percentage: 66, color: "from-blue-500 to-cyan-500", delay: 0.1 },
    { name: "Kanban", percentage: 45, color: "from-slate-500 to-slate-400", delay: 0.2 },
    { name: "SAFe", percentage: 29, color: "from-slate-500 to-slate-400", delay: 0.3 },
    { name: "Lean", percentage: 22, color: "from-slate-500 to-slate-400", delay: 0.4 },
    { name: "XP", percentage: 12, color: "from-slate-500 to-slate-400", delay: 0.5 },
    { name: "Other", percentage: 18, color: "from-slate-500 to-slate-400", delay: 0.6 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-reveal-group data-stagger="140">
          {/* Left side - Content */}
          <div data-reveal-item>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border /20 text-blue-400 mb-6">
              <Award size={16} />
              <span className="text-sm">Industry Leader</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Why <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Scrum</span> and <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Scrum@Scale</span> Remain the Enterprise Standard for Execution
            </h2>

            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              Scrum remains the most widely adopted Agile execution framework because it provides leaders with a simple, disciplined way to deliver results at scale—without increasing organizational risk.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-slate-300 font-semibold mb-1">66% Enterprise Adoption</p>
                  <p className="text-sm text-slate-500">
                    Two-thirds of Agile organizations rely on Scrum as their primary execution backbone
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Battle-Tested at Enterprise Scale</p>
                  <p className="text-sm text-slate-500">
                    Decades of proven use in complex, regulated, and global organizations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-slate-300 font-semibold mb-1">Foundation for Enterprise Operating Models</p>
                  <p className="text-sm text-slate-500">
                    The execution layer underpinning Scrum@Scale and other large-scale delivery systems
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-blue-500/5 border /20">
              <p className="text-sm text-slate-400">
                <span className="text-blue-400 font-semibold">Source:</span> 18th Annual State of Agile Report
              </p>
            </div>
          </div>

          {/* Right side - Chart */}
          <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700 backdrop-blur-sm" data-reveal-item>
            <h3 className="text-lg text-slate-400 mb-8">Enterprise Agile Execution Adoption</h3>

            <div className="space-y-6" data-reveal-group data-stagger="90">
              {frameworks.map((framework, index) => (
                <div
                  key={framework.name}
                  data-reveal-item
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold ${index === 0 ? 'text-white text-lg' : 'text-slate-300'}`}>
                      {framework.name}
                    </span>
                    <span className={`font-bold ${index === 0 ? 'text-cyan-400 text-xl' : 'text-slate-400'}`}>
                      {framework.percentage}%
                    </span>
                  </div>

                  <div className="relative h-3 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
                    <div
                      className={`h-full bg-gradient-to-r ${framework.color} jess-bar-fill transition-[width] duration-1000 ease-out ${
                        index === 0 ? 'shadow-lg shadow-blue-500/50' : ''
                      }`}
                      data-bar-target={framework.percentage}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-xs text-slate-500">
                Based on real-world adoption data from the 18th Annual State of Agile Report.
                Organizations often use multiple frameworks in combination.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border /20 text-center" data-reveal>
          <p className="text-slate-300 text-lg">
            <span className="text-white font-semibold">Why leaders continue to trust it:</span> Scrum provides disciplined execution without unnecessary complexity. Scrum@Scale extends this foundation into an enterprise operating model, refined by Jeff Sutherland to handle real-world scale and governance.
          </p>
        </div>
      </div>
    </section>
  );
}