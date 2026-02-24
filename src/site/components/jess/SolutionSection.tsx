import { CheckCircle2, Shield, Zap, Network } from "lucide-react";
export function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl jess-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div data-reveal>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              What is Jeff Sutherland's Enterprise Scrum System (JESS)?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              JESS is a proven execution system that equips leaders and teams with the clarity and structure to deliver results — starting small and scaling with confidence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16" data-reveal-group data-stagger="100">
          <div data-reveal-item>
            <h3 className="text-3xl font-bold text-white mb-6">
              The Problems We Solve
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-blue-400" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Aligns Leadership to Enable Execution</h4>
                  <p className="text-slate-400">
                    Equips executives with clear decision boundaries and the right questions — so leadership accelerates delivery instead of unintentionally blocking it.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-blue-400" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Scales Seamlessly from Teams to the Enterprise</h4>
                  <p className="text-slate-400">
                    Built on Jeff Sutherland's Scrum@Scale, JESS enables hundreds of teams to coordinate execution without dependency overload or delivery paralysis.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-blue-400" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Eliminates Silos Through Operating Model Design</h4>
                  <p className="text-slate-400">
                    Product, Engineering, Marketing, Legal, and Operations align through a single execution system — not meetings, committees, or escalations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-blue-400" size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">A Proven Enterprise Blueprint — Not Experimentation</h4>
                  <p className="text-slate-400">
                    Adopt a battle-tested execution system used by global enterprises, rather than experimenting with unproven transformation approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-reveal-item>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:-translate-y-1 transition-transform duration-300">
              <Shield className="text-blue-400 mb-4" size={32} />
              <h4 className="font-bold text-white mb-2">Enterprise Risk Management</h4>
              <p className="text-sm text-slate-400">
                Early visibility into delivery, dependency, and execution risks — before they become escalations.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:-translate-y-1 transition-transform duration-300">
              <Zap className="text-cyan-400 mb-4" size={32} />
              <h4 className="font-bold text-white mb-2">Faster Time to Measurable Outcomes</h4>
              <p className="text-sm text-slate-400">
                Shift from transformation roadmaps to real execution gains in weeks, not years.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:-translate-y-1 transition-transform duration-300">
              <Network className="text-blue-400 mb-4" size={32} />
              <h4 className="font-bold text-white mb-2">Designed to Scale by Design</h4>
              <p className="text-sm text-slate-400">
                One execution system that works consistently from pilot teams to enterprise-wide adoption.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:-translate-y-1 transition-transform duration-300">
              <CheckCircle2 className="text-cyan-400 mb-4" size={32} />
              <h4 className="font-bold text-white mb-2">Proven in Complex Enterprises</h4>
              <p className="text-sm text-slate-400">
                Successfully applied in highly regulated, multi-country, and high-complexity environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}