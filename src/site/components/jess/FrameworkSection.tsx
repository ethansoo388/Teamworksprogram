import { Target, Users, TrendingUp, Repeat } from "lucide-react";
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";

export function FrameworkSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              The Framework
            </h2>
            <p className="text-xl text-slate-400">
              An enterprise operating model that connects leadership decisions to execution—aligning strategy, funding, and delivery to produce measurable business outcomes at scale.
            </p>

            {/* 2-Column Image Layout */}
            <div className="mt-12 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-700/50">
                {/* Left Column - White Background */}
                <div className="relative w-full bg-white" style={{ aspectRatio: '16/9' }}>
                  <ImageWithFallback
                    src="https://i.postimg.cc/SQMh1qmJ/1.jpg"
                    alt="Scrum@Scale Framework"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right Column - Black Background */}
                <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
                  <ImageWithFallback
                    src="https://i.postimg.cc/HW5q42t6/scrum.jpg"
                    alt="Hyper-Productive Scrum"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Image section removed */}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Scrum Master Cycle */}
          <div
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <Repeat className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Scrum@Scale – The Lightweight Enterprise Alignment System</h3>
                  <p className="text-slate-400 text-sm">Connect regional execution with global strategy — without adding bureaucracy.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Enterprise Strategic Alignment</h4>
                    <p className="text-sm text-slate-400">
                      Translate global priorities into clear regional backlogs that support enterprise objectives with full transparency to headquarters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Portfolio, Product & Investment Prioritization</h4>
                    <p className="text-sm text-slate-400">
                      Prioritize funding on high-value initiatives while exposing redundant work to drive measurable results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Faster, Predictable Time to Market</h4>
                    <p className="text-sm text-slate-400">
                      Reduce decision latency across departments and geographies to accelerate delivery while preserving governance, compliance, and reporting standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-400 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Coordinated Cross-Team Execution</h4>
                    <p className="text-sm text-slate-400">
                      Synchronize teams through scalable structure where dependencies and risks surface early for real-time leadership insight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Owner Cycle */}
          <div
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Target className="text-cyan-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Hyper-Productive Scrum — Build & Lead High-Performance Teams</h3>
                  <p className="text-slate-400 text-sm">Empower teams to deliver exceptional results — consistently and sustainably.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Proven Structure for High-Performance Teams</h4>
                    <p className="text-sm text-slate-400">
                      Clear roles, disciplined cadences, and visible metrics create accountability without micromanagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Value-Driven Work Prioritization</h4>
                    <p className="text-sm text-slate-400">
                      Teams focus on the single most important initiative at a time — maximizing throughput and eliminating wasted effort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Short, Controlled Delivery Cycles</h4>
                    <p className="text-sm text-slate-400">
                      Frequent execution cycles provide measurable progress, rapid learning, and greater predictability in complex environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Continuous Feedback & System Improvement</h4>
                    <p className="text-sm text-slate-400">
                      Built-in inspection and adaptation loops improve performance, morale, and delivery outcomes — every cycle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 text-center">
            <Users className="text-blue-400 mx-auto mb-4" size={32} />
            <h4 className="font-bold text-white mb-2">Aligned Empowerment</h4>
            <p className="text-sm text-slate-400">
              Empower regional teams to act decisively — within a clear strategic framework that maintains visibility and leadership control.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 text-center">
            <TrendingUp className="text-cyan-400 mx-auto mb-4" size={32} />
            <h4 className="font-bold text-white mb-2">Scalable Enterprise Execution</h4>
            <p className="text-sm text-slate-400">
              Scale from a few teams to enterprise-wide coordination without increasing hierarchy, bureaucracy, or loss of oversight.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 text-center">
            <Target className="text-blue-400 mx-auto mb-4" size={32} />
            <h4 className="font-bold text-white mb-2">Measurable Business Outcomes</h4>
            <p className="text-sm text-slate-400">
              Deliver continuous, verifiable value through disciplined prioritization, transparent metrics, and rapid feedback loops.
            </p>
          </div>
        </div>

        {/* Why it works statement */}
        <div
          className="mt-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            For Global Enterprises Operating in Southeast Asia
          </h3>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto">
            Regional leaders must deliver local speed while maintaining global alignment and oversight. Scrum@Scale and Hyper-Productive Scrum provide a disciplined operating system that strengthens execution, increases transparency, and builds confidence with headquarters.
          </p>
        </div>
      </div>
    </section>
  );
}