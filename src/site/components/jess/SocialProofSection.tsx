import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";

const clientLogos = [
  { name: "Amazon", width: "w-48", imageUrl: "/assets/img/jess/logo-amazon.webp", scale: "scale-[1.75]" },
  { name: "Microsoft", width: "w-48", imageUrl: "/assets/img/jess/logo-microsoft.webp", scale: "scale-100" },
  { name: "Toyota", width: "w-48", imageUrl: "/assets/img/jess/logo-toyota.webp", scale: "scale-90" },
  { name: "AT&T", width: "w-48", imageUrl: "/assets/img/jess/logo-att.webp", scale: "scale-75" },
  { name: "Salesforce", width: "w-48", imageUrl: "/assets/img/jess/logo-salesforce.webp", scale: "scale-100" },
  { name: "Maersk", width: "w-48", imageUrl: "/assets/img/jess/logo-maersk.webp", scale: "scale-100" },
  { name: "SAP", width: "w-48", imageUrl: "/assets/img/jess/logo-sap.webp", scale: "scale-75" },
  { name: "Bosch", width: "w-48", imageUrl: "/assets/img/jess/logo-bosch.webp", scale: "scale-100" },
  { name: "Spotify", width: "w-48", imageUrl: "/assets/img/jess/logo-spotify.webp", scale: "scale-100" },
  { name: "OpenView", width: "w-48", imageUrl: "/assets/img/jess/logo-openview.webp", scale: "scale-100" },
  { name: "Schlumberger", width: "w-48", imageUrl: "/assets/img/jess/logo-schlumberger.webp", scale: "scale-100" },
  { name: "BAC Credomatic", width: "w-48", imageUrl: "/assets/img/jess/logo-bac-credomatic.webp", scale: "scale-100" },
  { name: "Comcast", width: "w-48", imageUrl: "/assets/img/jess/logo-comcast.webp", scale: "scale-100" },
  { name: "General Electric", width: "w-48", imageUrl: "/assets/img/jess/logo-general-electric.webp", scale: "scale-100" },
];

export function SocialProofSection() {
  return (
    <section id="social-proof" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div data-reveal>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Trusted by Global Enterprises
            </h2>
            <p className="text-slate-400 text-lg">
              Proven to scale execution across complex, large-scale organizations
            </p>
          </div>
        </div>

        {/* Client Logos Placeholder */}
        <div className="p-8" data-reveal>
          <div className="overflow-hidden">
            <div
              className="flex items-center gap-8 jess-logo-marquee"
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className={`${logo.width} h-24 flex items-center justify-center flex-shrink-0 bg-white rounded-lg p-2`}
                >
                  {logo.imageUrl ? (
                    <ImageWithFallback
                      src={logo.imageUrl}
                      alt={logo.name}
                      className={`w-full h-full object-contain ${logo.scale || ''}`}
                    />
                  ) : (
                    <span className="text-slate-600 text-xs text-center px-2">{logo.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
