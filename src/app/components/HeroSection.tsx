import { ArrowRight, Play, Sparkles, Users, Calendar } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import heroImage from "@/assets/img/group-gathered-around-table-outdoor-activity.jpg";

export function HeroSection() {
  return (
    <div className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Full-Width Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={heroImage}
          alt="TeamWorks hands-on training workshop with participants collaborating on team exercises"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full mb-6 animate-bounce-slow">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">60% Hands-On Activities • Not Your Boring Training!</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Transform Your Team in Just <span className="text-yellow-400">2 Days</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-gray-100 mb-8 leading-relaxed">
              Fun, practical workshops that deliver real results. 
              <span className="text-yellow-400"> See changes in 2 weeks.</span>
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl text-yellow-400 mb-2">FREE*</div>
                <div className="text-white text-sm">With HRD Funding</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl text-yellow-400 mb-2">5,000+</div>
                <div className="text-white text-sm">Students Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl text-yellow-400 mb-2">10+</div>
                <div className="text-white text-sm">Years Experience</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all inline-flex items-center justify-center gap-2 group shadow-2xl text-lg">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2 text-lg">
                <Play className="w-5 h-5" />
                <span>Watch Highlights</span>
              </button>
            </div>

            {/* Quick Info */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span>2-Day In-Person Workshops</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-400" />
                <span>Max 30 Participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}