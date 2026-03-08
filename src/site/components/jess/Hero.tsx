import { Button } from "@/site/components/jess/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <>
      {/* ── MOBILE LAYOUT (< lg) ──────────────────────────────────────────── */}
      <section className="block lg:hidden">

        {/* Top: Jeff portrait, cropped to face/upper body */}
        <div className="relative w-full overflow-hidden" style={{ height: "480px" }}>
          <img
            src="/assets/img/jess/people-jeff-sutherland-leadership-training.webp"
            alt="Dr. Jeff Sutherland – Co-Creator of Scrum"
            className="w-full h-full object-cover"
            style={{ objectPosition: "95% 15%" }}
          />
          {/* Bottom fade to blend into dark panel */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0F1724] to-transparent" />
          {/* Credential badge */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-[#0F1724]/85 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2 z-10">
            <div className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
            <span className="text-xs text-sky-300 font-medium">Co-Creator of Scrum · Dr. Jeff Sutherland</span>
          </div>
        </div>

        {/* Bottom: Dark text panel */}
        <div className="bg-[#0F1724] px-6 pt-6 pb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4"
            data-reveal
          >
            <Sparkles size={14} />
            <span className="text-xs">AI-Driven Business Transformation</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 leading-[1.15]"
            data-reveal
            data-delay="80"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Enterprise Agility,{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Built for Execution at Scale
            </span>
          </h1>

          <p className="mb-6 leading-relaxed"
            data-reveal
            data-delay="140"
          >
            <span className="block text-base text-slate-300 mb-2">Align strategy, leadership, and teams — powered by Dr. Jeff Sutherland's knowledge and advanced AI.</span>
            <span className="block text-sm text-slate-500">
              Trusted by global enterprises to move from transformation intent to measurable results.
            </span>
          </p>

          <div className="flex flex-col gap-3"
            data-reveal
            data-delay="200"
          >
            <Button
              size="lg"
              asChild
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-6 text-base group"
            >
              <a href="/jess/leadership-training.html" className="inline-flex items-center justify-center">
                Start Agile Leadership Program
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full border-cyan-500 text-cyan-400 hover:bg-slate-800 hover:text-cyan-300 py-6 text-base"
            >
              <a href="/jess/class-schedule.html" className="flex items-center justify-center">View Certification Class Schedule</a>
            </Button>
          </div>
        </div>

      </section>

      {/* ── DESKTOP LAYOUT (≥ lg) ─────────────────────────────────────────── */}
      <section className="hidden lg:flex relative h-[85vh] min-h-[600px] items-center overflow-hidden">

        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/img/jess/people-jeff-sutherland-leadership-training.webp"
            alt="Jeff Sutherland Leadership Training"
            className="w-full h-full object-cover jess-hero-bg-img"
          />
          {/* Dark Left-to-Right Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-6 lg:px-8 xl:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
                  data-reveal
                >
                  <Sparkles size={16} />
                  <span className="text-sm">AI-Driven Business Transformation</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
                  data-reveal
                  data-delay="80"
                >
                  <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                    Enterprise Agility,{" "}
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Built for Execution at Scale
                  </span>
                </h1>

                <p className="text-slate-300 mb-8 leading-relaxed"
                  data-reveal
                  data-delay="140"
                >
                  <span className="block text-xl mb-3">Align strategy, leadership, and teams — powered by Dr. Jeff Sutherland's knowledge and advanced AI.</span>
                  <span className="block text-lg">
                    Trusted by global enterprises to move from transformation intent to measurable results.
                  </span>
                </p>

                <div className="flex flex-row items-start justify-start gap-4"
                  data-reveal
                  data-delay="200"
                >
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg group"
                  >
                    <a href="/jess/leadership-training.html" className="inline-flex items-center">
                      Start Agile Leadership Program
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-cyan-500 text-cyan-400 hover:bg-slate-800 hover:text-cyan-300 px-6 py-6 text-lg"
                  >
                    <a href="/jess/class-schedule.html">View Certification Class Schedule</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
