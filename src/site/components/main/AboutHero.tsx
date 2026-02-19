/**
 * AboutHero.tsx — updated hero for the About Us page.
 * Ported from CI Agile Main_GerseneCodeForMerge / AboutPage.tsx hero section.
 * Static-export safe: no React state, no React Router, no lucide-react imports.
 */

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 bg-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://i.postimg.cc/85hs1WcJ/CI-AGILE-About-Us.png"
          alt="Professional business consulting environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90"></div>
      </div>

      {/* Decorative left circle */}
      <div className="absolute left-0 top-1/4 -translate-x-1/3 w-[400px] h-[400px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#FF6B6B" strokeWidth="3" opacity="0.6" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#FF6B6B" strokeWidth="3" opacity="0.5" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#FF6B6B" strokeWidth="3" opacity="0.4" />
          <circle cx="200" cy="200" r="90"  fill="none" stroke="#FF6B6B" strokeWidth="3" opacity="0.3" />
          <circle cx="200" cy="200" r="60"  fill="none" stroke="#FF6B6B" strokeWidth="3" opacity="0.2" />
        </svg>
      </div>

      {/* Decorative right circle */}
      <div className="absolute right-0 bottom-1/4 translate-x-1/3 w-[450px] h-[450px] opacity-20 pointer-events-none">
        <svg viewBox="0 0 450 450" className="w-full h-full">
          <circle cx="225" cy="225" r="200" fill="none" stroke="#4ECDC4" strokeWidth="3" opacity="0.6" />
          <circle cx="225" cy="225" r="165" fill="none" stroke="#4ECDC4" strokeWidth="3" opacity="0.5" />
          <circle cx="225" cy="225" r="130" fill="none" stroke="#4ECDC4" strokeWidth="3" opacity="0.4" />
          <circle cx="225" cy="225" r="95"  fill="none" stroke="#4ECDC4" strokeWidth="3" opacity="0.3" />
          <circle cx="225" cy="225" r="60"  fill="none" stroke="#4ECDC4" strokeWidth="3" opacity="0.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="w-full px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-light leading-[1.15] text-white mb-8">
            We Help Teams and Organizations{" "}
            <span className="text-[#2196F3] font-normal">Deliver Better Business Outcomes.</span>
          </h1>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
            Through practical training and hands-on consulting, we strengthen leadership, improve execution
            systems, and build teams that deliver with speed and clarity.
          </p>
          <div className="pt-6 border-t border-gray-700 max-w-2xl mx-auto">
            <p className="text-base text-gray-400 font-light leading-relaxed">
              From capability building to enterprise transformation, we help organizations turn strategy into
              sustained results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
