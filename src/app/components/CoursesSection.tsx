import { ArrowRight, Users, Palette, Zap, TrendingUp, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const courses = [
  {
    number: "01",
    title: "Creating Super Teams",
    description: "Build high-performance teams through trust, collaboration, and proven methodologies. Includes our famous Airplane Game and Tornado Challenge!",
    duration: "2 days",
    activities: "Team building games, trust exercises, collaboration workshops",
    icon: Users,
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-50",
    image: "@/assets/img/teamworks/team-working-on-ideas-group-discussion.jpg"
  },
  {
    number: "02",
    title: "Design Like Apple",
    description: "Master Apple's design thinking principles to create products and experiences that customers love. Learn through hands-on prototyping and real case studies.",
    duration: "2 days",
    activities: "Design sprints, prototyping sessions, customer journey mapping",
    icon: Palette,
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-50",
    image: "@/assets/img/teamworks/designer-working-at-desk-with-drawing-tablet.jpg"
  },
  {
    number: "03",
    title: "Work Clear, Work Fast - Lessons from Amazon",
    description: "Adopt Amazon's operational excellence frameworks to eliminate waste and accelerate delivery. Practice with real-world problem-solving scenarios.",
    duration: "2 days",
    activities: "Process optimization games, workflow simulations, efficiency challenges",
    icon: Zap,
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-50",
    image: "@/assets/img/teamworks/one-on-one-office-discussion-with-laptop.jpg"
  },
  {
    number: "04",
    title: "Analyze and Solve Problems Like a Lean Six Sigma Green Belt",
    description: "Apply data-driven problem-solving techniques to eliminate defects and optimize processes. Simplified, non-technical approach with practical tools.",
    duration: "2 days",
    activities: "Problem-solving challenges, data analysis workshops, process improvement games",
    icon: TrendingUp,
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-green-50",
    image: "@/assets/img/teamworks/business-presentation-meeting-room.jpg"
  },
  {
    number: "05",
    title: "Prompt Your AI Better",
    description: "Harness the full potential of AI tools through strategic prompting and workflow integration. Hands-on practice with real AI tools and business scenarios.",
    duration: "2 days",
    activities: "AI tool workshops, prompt engineering exercises, automation challenges",
    icon: Sparkles,
    color: "from-indigo-600 to-blue-600",
    bgColor: "bg-indigo-50",
    image: "@/assets/img/teamworks/professional-woman-thinking-with-pen.jpg"
  }
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm">Pick What Your Team Needs</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Choose Your Course
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each 2-day workshop is packed with hands-on activities, real-world challenges, and expert guidance. 
            Choose one or mix-and-match based on your team's needs.
          </p>
        </div>

        {/* Courses Grid - Alternating Layout */}
        <div className="space-y-12">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                {/* Image Side */}
                <div className={`relative ${isEven ? "" : "md:col-start-2"}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${course.color} opacity-20`}></div>
                    
                    {/* Course Number Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className={`bg-gradient-to-br ${course.color} text-white px-4 py-2 rounded-lg shadow-lg`}>
                        <span className="text-sm">Course {course.number}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={isEven ? "" : "md:col-start-1 md:row-start-1"}>
                  <div className={`${course.bgColor} rounded-2xl p-8 md:p-10`}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${course.color} rounded-xl mb-6`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-3xl mb-4">{course.title}</h3>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="bg-white rounded-lg p-4 mb-6">
                      <div className="text-sm text-gray-600 mb-1">What You'll Do:</div>
                      <div className="text-gray-800">{course.activities}</div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>{course.duration} in-person</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>Expert instructor</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>Max 30 pax</span>
                      </div>
                    </div>

                    <button className={`bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2 group`}>
                      <span>Book This Course</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 text-gray-900 rounded-2xl p-12">
            <h3 className="text-3xl mb-4">Not Sure Which Course to Choose?</h3>
            <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation with our course advisor. We'll analyze your team's situation 
              and help you pick the perfect course—absolutely free, no obligation!
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}