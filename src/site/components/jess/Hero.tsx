import { Button } from "@/site/components/jess/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/img/jess/people-jeff-sutherland-leadership-training.webp"
          alt="Jeff Sutherland Leadership Training"
          className="w-full h-full object-cover jess-hero-bg-img"
        />
        {/* Dark Left-to-Right Gradient Overlay */}
        
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 lg:px-8 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border /20 text-blue-400 mb-6"
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

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
                data-reveal
                data-delay="200"
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg group"
                >
                  <a
                    href="/jess/leadership-training.html"
                    className="inline-flex items-center"
                  >
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
  );
}