import { Gauge, Rocket, Lock, LineChart, Brain, Shield, Layers, Zap, Target, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
// react-slick Slider is not SSR-compatible; use a plain div wrapper for static export.
const Slider = ({ children, ...props }: any) => <div {...props}>{children}</div>;

const differentiators = [
  {
    icon: Shield,
    title: "Enterprise Risk Is Designed Out — Not Managed After the Fact",
    description:
      "JESS embeds governance, escalation paths, and system-level checks across leadership, strategy, and execution — reducing transformation risk before it compounds.",
    stats: "Enterprise-grade risk controls",
  },
  {
    icon: Layers,
    title: "Built to Scale Without Losing Alignment",
    description:
      "JESS enables organizations to move beyond pilot success, coordinating hundreds of teams while preserving strategic alignment, decision clarity, and accountability.",
    stats: "500+ teams coordinated",
  },
  {
    icon: Zap,
    title: "Speed With Control — Not Heroics",
    description:
      "Execution accelerates because priorities are clear, dependencies are managed, and decisions are made at the right level — not because teams are pushed harder.",
    stats: "Faster time-to-value",
  },
  {
    icon: Target,
    title: "Business Outcomes, Not Agile Activity",
    description:
      "JESS connects strategy to execution through metrics leaders actually use — value realization, responsiveness, risk exposure, and return on investment.",
    stats: "Real-time metrics",
  },
  {
    icon: Brain,
    title: "AI as a Decision Advantage — Not Automation Noise",
    description:
      "AI augments leadership and delivery decisions by identifying systemic bottlenecks, forecasting risk, and highlighting improvement opportunities across the enterprise.",
    stats: "AI-powered insights",
  },
];

export function DifferentiatorsSection() {
  const sliderRef = useRef<Slider>(null);

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true, // Right to left movement
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '20px',
  };

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
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Why Executives Choose <span className="text-blue-400">JESS</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              What makes JESS a controllable, scalable enterprise operating model — not another Agile rollout.
            </p>
          </motion.div>
        </div>

        {/* Mobile Slider */}
        <div className="block lg:hidden">
          <Slider {...settings} ref={sliderRef}>
            {differentiators.map((item, index) => (
              <div key={index} className="px-2">
                <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                        <item.icon className="text-blue-400" size={28} />
                      </div>
                      <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                        {item.stats}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronRight className="text-white" size={24} strokeWidth={2} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:border-slate-600 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronLeft className="text-white" size={24} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 ${
                index === differentiators.length - 1 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                    <item.icon className="text-blue-400" size={28} />
                  </div>
                  <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {item.stats}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-slate-300 max-w-4xl mx-auto">
            JESS works because it treats agility as a leadership and operating model decision — not a team-level practice change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}