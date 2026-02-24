import { motion } from "motion/react";
import { ImageWithFallback } from "@/site/components/jess/figma/ImageWithFallback";

const clientLogos = [
  { name: "Amazon", width: "w-48", imageUrl: "https://i.postimg.cc/bJJF9rQf/amazon-logo.png", scale: "scale-[1.75]" },
  { name: "Microsoft", width: "w-48", imageUrl: "https://i.postimg.cc/3RxJjXSd/Microsoft-Logo-Transparent.png", scale: "scale-100" },
  { name: "Toyota", width: "w-48", imageUrl: "https://i.postimg.cc/NF1sBdLz/toyota-logo-png-5.jpg", scale: "scale-90" },
  { name: "AT&T", width: "w-48", imageUrl: "https://i.postimg.cc/VkH8yxDj/AT-T-logo-2016-svg.png", scale: "scale-75" },
  { name: "Salesforce", width: "w-48", imageUrl: "https://i.postimg.cc/NFNN9cyN/salesforce-logo.png", scale: "scale-100" },
  { name: "Maersk", width: "w-48", imageUrl: "https://i.postimg.cc/vmdvmBP7/Maersk-Logo.png", scale: "scale-100" },
  { name: "SAP", width: "w-48", imageUrl: "https://i.postimg.cc/WbkrJVq9/SAP-logo.png", scale: "scale-75" },
  { name: "Bosch", width: "w-48", imageUrl: "https://i.postimg.cc/D0bWsQ06/Bosch-logo.png", scale: "scale-100" },
  { name: "Spotify", width: "w-48", imageUrl: "https://i.postimg.cc/y87mq5W5/Spotify.png", scale: "scale-100" },
  { name: "OpenView", width: "w-48", imageUrl: "https://i.postimg.cc/K8sR9sTq/openview-logo-png-seeklogo-380181.png", scale: "scale-100" },
  { name: "Schlumberger", width: "w-48", imageUrl: "https://i.postimg.cc/QxY8sKM1/Schlumberger.png", scale: "scale-100" },
  { name: "BAC Credomatic", width: "w-48", imageUrl: "https://i.postimg.cc/908hWscH/Bac-credomatic-logo.png", scale: "scale-100" },
  { name: "Comcast", width: "w-48", imageUrl: "https://i.postimg.cc/Kv1XPqZc/Comcast-svg.png", scale: "scale-100" },
  { name: "General Electric", width: "w-48", imageUrl: "https://i.postimg.cc/D0mNc03H/General-Electric-Logo-wine.png", scale: "scale-100" },
];

export function SocialProofSection() {
  return (
    <section id="social-proof" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Trusted by Global Enterprises
            </h2>
            <p className="text-slate-400 text-lg">
              Proven to scale execution across complex, large-scale organizations
            </p>
          </motion.div>
        </div>

        {/* Client Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-8"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
