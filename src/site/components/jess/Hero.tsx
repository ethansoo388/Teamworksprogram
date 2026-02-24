import { Button } from "@/site/components/jess/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";

export function Hero() {

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6"
            >
              <Sparkles size={16} />
              <span className="text-sm">AI-Driven Business Transformation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Enterprise Agility,{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Built for Execution at Scale
              </span>
            </h1>

            <p className="text-slate-300 mb-8 leading-relaxed"
            >
              <span className="block text-2xl mb-3">Align strategy, leadership, and teams — powered by Dr. Jeff Sutherland's knowledge and advanced AI.</span>
              <span className="block text-lg">
                Trusted by global enterprises to move from transformation intent to measurable results.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg group"
              >
                <a href="#contact" className="inline-flex items-center">
                  Talk About Enterprise Execution
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-cyan-500 text-cyan-400 hover:bg-slate-800 hover:text-cyan-300 px-6 py-6 text-lg"
              >
                <a href="#solution">Explore the JESS System</a>
              </Button>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900">
              <ImageWithFallback
                src="https://i.postimg.cc/VLF7hxYW/jeff-sutherland.webp"
                alt="Jeff Sutherland - Inventor of Scrum"
                className="w-[90%] h-auto relative z-10 mx-auto"
              />
              {/* Gradient overlay for better blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 mix-blend-overlay"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}