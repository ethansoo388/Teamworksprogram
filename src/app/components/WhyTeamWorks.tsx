import { CheckCircle2, Award, Users, TrendingUp, Target, Rocket, Gamepad2, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import celebrationImage from "@/assets/img/teamworks/ciagile-teamworks-course04-team-celebration.webp";

const benefits = [
  {
    icon: Gamepad2,
    title: "60% Hands-On Fun",
    description: "Forget boring PowerPoints! Our famous Airplane Game, Tornado Challenge, and problem-solving activities keep everyone engaged."
  },
  {
    icon: Lightbulb,
    title: "Non-Technical & Simple",
    description: "Complex concepts explained in easy terms. Perfect for teams of all backgrounds and experience levels."
  },
  {
    icon: Target,
    title: "Immediate Results",
    description: "See changes right after the workshop. Within 2 weeks, your team will be delivering better work results."
  },
  {
    icon: Award,
    title: "Expert Instructors",
    description: "All courses taught by industry experts with 10+ years of real-world experience, not just theory."
  }
];

const stats = [
  { value: "5,000+", label: "Students trained across Asia" },
  { value: "60%", label: "Hands-on activities & games" },
  { value: "2 weeks", label: "To see real improvements" },
  { value: "10+ years", label: "Training experience" }
];

export function WhyTeamWorks() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-2xl opacity-30"></div>
              <ImageWithFallback
                src={celebrationImage}
                alt="Business team celebrating successful training outcomes and improvements"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:col-span-3">
            <div className="inline-block bg-yellow-100 text-orange-900 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">What Makes Us Different</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6">
              Not Your Typical Training Program
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Tired of boring lectures and death by PowerPoint? TeamWorks brings energy, 
              fun, and practical learning that actually sticks. We've trained over 5,000 
              professionals across Malaysia, Singapore, Indonesia, and Thailand.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2">{benefit.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-10 shadow-2xl mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-200 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Activities Showcase */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-10 mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl mb-4">Our Famous Fun Activities</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These aren't just games—they're carefully designed experiences that teach 
              real business skills while keeping your team energized and engaged.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-3">✈️</div>
              <h4 className="mb-2">The Airplane Game</h4>
              <p className="text-sm text-gray-600">
                Teams compete to build paper airplanes that hit targets. Teaches project management, 
                quality control, and iterative improvement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-3">🌪️</div>
              <h4 className="mb-2">Tornado Challenge</h4>
              <p className="text-sm text-gray-600">
                Build structures that can withstand a simulated tornado. Learn about planning, 
                resource management, and resilience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-3">🧩</div>
              <h4 className="mb-2">Problem-Solving Mini Games</h4>
              <p className="text-sm text-gray-600">
                Real-life business scenarios turned into interactive challenges. Practice decision-making 
                and creative thinking in a safe environment.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Format */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <CheckCircle2 className="w-10 h-10 text-green-600 mb-4" />
            <h4 className="mb-3">In-Person Training</h4>
            <p className="text-gray-600">
              Available in Malaysia, Singapore, Indonesia, and Thailand. We bring the energy and 
              materials to your location.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <Users className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="mb-3">Private Sessions</h4>
            <p className="text-gray-600">
              Book exclusively for your team. Schedule at your convenience with max 30 participants 
              per session.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <Rocket className="w-10 h-10 text-purple-600 mb-4" />
            <h4 className="mb-3">Quick Impact</h4>
            <p className="text-gray-600">
              Just 2 days to transform your team. Immediate mindset shift with measurable 
              results in 2 weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}