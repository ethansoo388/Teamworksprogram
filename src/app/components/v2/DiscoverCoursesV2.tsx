import { ArrowRight, Users, Palette, Zap, TrendingUp, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const courses = [
  {
    id: "01",
    title: "Creating Super Teams",
    description: "Build high-performance teams through our famous Airplane Game and Tornado Challenge. Learn trust, collaboration, and proven team-building methodologies.",
    image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY4MjEyMTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Users,
    colors: {
      primary: "#6D28D9",
      light: "#EDE9FE",
      dark: "#5B21B6"
    }
  },
  {
    id: "02",
    title: "Design Like Apple",
    description: "Master Apple's design thinking principles through hands-on prototyping. Create products and experiences that customers truly love.",
    image: "https://images.unsplash.com/photo-1565351167686-7a19c5114965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBicmFpbnN0b3JtaW5nfGVufDF8fHx8MTc2ODI2ODE5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Palette,
    colors: {
      primary: "#EC4899",
      light: "#FCE7F3",
      dark: "#DB2777"
    }
  },
  {
    id: "03",
    title: "Work Clear, Work Fast",
    description: "Adopt Amazon's operational excellence frameworks. Eliminate waste, accelerate delivery, and optimize your team's workflow.",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4MjIzNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Zap,
    colors: {
      primary: "#F59E0B",
      light: "#FEF3C7",
      dark: "#D97706"
    }
  },
  {
    id: "04",
    title: "Lean Six Sigma Problem Solving",
    description: "Apply data-driven techniques to eliminate defects. Simplified, non-technical approach with practical tools your team will actually use.",
    image: "https://images.unsplash.com/photo-1573496130103-a442a3754d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2ODI4MjY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: TrendingUp,
    colors: {
      primary: "#16A34A",
      light: "#DCFCE7",
      dark: "#15803D"
    }
  },
  {
    id: "05",
    title: "Prompt Your AI Better",
    description: "Harness AI tools through strategic prompting and workflow integration. Hands-on practice with real tools and business scenarios.",
    image: "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzY4MjE0MjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Sparkles,
    colors: {
      primary: "#0EA5E9",
      light: "#E0F2FE",
      dark: "#0284C7"
    }
  }
];

export function DiscoverCoursesV2() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
            Discover TeamWorks
          </div>
          <h2 className="text-4xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            Choose what your team needs
          </h2>
          <p className="text-lg text-gray-600">
            Each 2-day workshop can be booked individually. Mix and match 
            based on your team's development goals.
          </p>
        </div>

        {/* Courses - Clean Grid Layout */}
        <div className="space-y-32">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={course.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Color Overlay on Hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                      style={{ backgroundColor: course.colors.primary }}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="max-w-md">
                    <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: course.colors.primary }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs tracking-[0.2em] uppercase text-gray-500">
                        Course {course.id}
                      </div>
                    </div>

                    <h3 className="text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-6">
                      {course.title}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: course.colors.primary }}
                        ></div>
                        <span>2 days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: course.colors.primary }}
                        ></div>
                        <span>In-person</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: course.colors.primary }}
                        ></div>
                        <span>Max 30 pax</span>
                      </div>
                    </div>

                    <button 
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm transition-all hover:gap-3"
                      style={{ 
                        backgroundColor: course.colors.primary,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = course.colors.dark;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = course.colors.primary;
                      }}
                    >
                      <span>Book this course</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Minimal */}
        <div className="mt-32 relative -mx-6 lg:-mx-12">
          {/* Full Width Dark Section with Image */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 items-center">
              {/* Left: Content */}
              <div className="px-6 lg:px-12 py-20 lg:py-32">
                <div className="max-w-xl">
                  <h3 className="text-4xl lg:text-5xl mb-6 tracking-tight leading-[1.1]">
                    Not sure which course to choose?
                  </h3>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    Book a free consultation with our course advisor. We'll help you 
                    pick the perfect course for your team.
                  </p>
                  <button className="bg-white text-slate-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all inline-flex items-center gap-2 group text-lg font-medium">
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {/* Color accent bars - inspired by Apollo image */}
                  <div className="mt-12 flex gap-2">
                    <div className="h-1 w-16 rounded-full bg-purple-500"></div>
                    <div className="h-1 w-16 rounded-full bg-pink-500"></div>
                    <div className="h-1 w-16 rounded-full bg-amber-500"></div>
                    <div className="h-1 w-16 rounded-full bg-green-500"></div>
                    <div className="h-1 w-16 rounded-full bg-sky-500"></div>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-[400px] lg:h-[600px]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRhdGlvbiUyMG1lZXRpbmclMjBhZHZpc29yfGVufDF8fHx8MTc2ODM5NTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Free consultation"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay to blend with background */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}