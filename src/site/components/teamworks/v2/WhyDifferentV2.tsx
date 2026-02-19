import { ImageWithFallback } from "@/shared/ImageWithFallback";
import { Gamepad2, GraduationCap, Zap, Users } from "lucide-react";
import workshopImage from "@/assets/img/teamworks/ciagile-teamworks-course-high-interactivity.webp";

const features = [
  {
    title: "Hands-on, not slides",
    description: "Teams work on real scenarios, not generic case studies.",
    icon: Gamepad2,
    color: "#6D28D9", // Purple
    lightColor: "#EDE9FE"
  },
  {
    title: "Designed for real workplaces",
    description: "Built for SMEs dealing with time, resource, and delivery pressure.",
    icon: GraduationCap,
    color: "#EC4899", // Pink
    lightColor: "#FCE7F3"
  },
  {
    title: "Focused on behaviour change",
    description: "We don't just teach concepts — we change how teams work day to day.",
    icon: Zap,
    color: "#F59E0B", // Orange
    lightColor: "#FEF3C7"
  },
  {
    title: "Built to be sustained",
    description: "Simple practices teams can continue using long after the workshop.",
    icon: Users,
    color: "#16A34A", // Green
    lightColor: "#DCFCE7"
  }
];

const activities = [
  {
    emoji: "✈️",
    name: "Airplane Game",
    description: "Teams compete to build paper airplanes that hit targets",
    color: "#6D28D9",
    lightColor: "#EDE9FE"
  },
  {
    emoji: "🌪️",
    name: "Tornado Challenge",
    description: "Build structures that can withstand a simulated tornado",
    color: "#F59E0B",
    lightColor: "#FEF3C7"
  },
  {
    emoji: "🧩",
    name: "Problem-Solving Games",
    description: "Real business scenarios turned into interactive challenges",
    color: "#0EA5E9",
    lightColor: "#E0F2FE"
  }
];

export function WhyDifferentV2() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Why Different Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left: Content */}
          <div className="max-w-xl">
            <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
              What Makes Us Different
            </div>
            <h2 className="text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
              Not your typical training program
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Tired of boring lectures? TeamWorks brings energy, fun, and practical 
              learning that actually sticks. We've trained over 5,000 professionals 
              across Southeast Asia.
            </p>

            {/* Features List - With Colorful Icons */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{ backgroundColor: feature.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-2 font-semibold">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div>
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <ImageWithFallback
                src={workshopImage}
                alt="Highly interactive workshop training session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Famous Activities Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
            Our Famous Activities
          </div>
          <h2 className="text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-6">
            Learning through play
          </h2>
          <p className="text-lg text-gray-600">
            We use carefully designed simulations and activities to help teams experience better ways of working — not just talk about them.
          </p>
        </div>

        {/* Activities Grid - With Colorful Accents */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl border-2 hover:shadow-xl transition-all"
              style={{ 
                borderColor: activity.color,
                backgroundColor: activity.lightColor
              }}
            >
              <div className="text-5xl mb-4">{activity.emoji}</div>
              <h4 className="text-lg mb-3 font-semibold">{activity.name}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
