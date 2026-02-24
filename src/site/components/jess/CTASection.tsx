import { Button } from "@/site/components/jess/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";
export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div
          className="text-center"
          data-reveal
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Ready to Make Enterprise Agility a Confident Leadership Decision?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Engage in a structured, executive-level conversation about your current operating model, risks, and path to measurable outcomes.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-3">
            <a href="mailto:romanoff@ciagile.com?subject=Schedule%20an%20Executive%20Briefing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg group"
              >
                <Calendar className="mr-2" size={20} />
                Schedule an Executive Briefing
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
          </div>

          <p className="text-slate-500 text-sm italic mb-12">
            No obligation. No framework rollout. Just clarity for senior decision-makers.
          </p>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700" data-reveal data-delay="120">
            <h3 className="text-xl font-bold text-white mb-4">What Happens Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left" data-reveal-group data-stagger="90">
              <div data-reveal-item>
                <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                <h4 className="font-semibold text-white mb-2">Executive Discovery Session</h4>
                <p className="text-sm text-slate-400">
                  A focused discussion on your current operating model, constraints, and transformation risks.
                </p>
              </div>
              <div data-reveal-item>
                <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                <h4 className="font-semibold text-white mb-2">Executive Recommendation</h4>
                <p className="text-sm text-slate-400">
                  A clear, tailored recommendation aligned to your structure, priorities, and risk profile.
                </p>
              </div>
              <div data-reveal-item>
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <h4 className="font-semibold text-white mb-2">Structured Engagement Kickoff</h4>
                <p className="text-sm text-slate-400">
                  Proceed only if there is a strong, defensible case to move forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}