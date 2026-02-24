import { Building2, Users2, Target, Users } from "lucide-react";
import { motion } from "motion/react";

const audiences = [
  {
    icon: Building2,
    title: "CTO, CIO, or CPO",
    description:
      "Accountable for enterprise execution beyond IT. Ready to transform delivery, governance, and outcomes at scale.",
  },
  {
    icon: Users2,
    title: "Enterprise Leaders",
    description:
      "Responsible for scaling execution across hundreds of people — requiring alignment, clarity, and control without added bureaucracy.",
  },
  {
    icon: Target,
    title: "Transformation Leads",
    description:
      "Mandated to unify strategy, delivery, and operations into a single, governable enterprise system.",
  },
  {
    icon: Users,
    title: "Delivery Team Leaders & Key Practitioners",
    description:
      "Enabling disciplined collaboration and continuous improvement within an enterprise-aligned execution system.",
  },
];

export function TargetAudienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-400 text-sm font-semibold tracking-wider uppercase mb-3">
              WHO THIS IS DESIGNED FOR
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Your Blueprint for Sustainable High Performance
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg border border-slate-700 bg-slate-900/40 mb-6">
                <audience.icon className="text-slate-300" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 text-slate-500 text-sm italic"
        >
          JESS is designed for leaders who are accountable for outcomes — not just teams executing tasks.
        </motion.p>
      </div>
    </section>
  );
}
