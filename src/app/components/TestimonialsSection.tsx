import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "@/shared/ImageWithFallback";
import handsClayImage from "@/assets/img/teamworks/ciagile-teamworks-course02-prototyping-hands-on.webp";

const testimonials = [
  {
    name: "Ahmad Kamal",
    role: "CEO",
    company: "TechStart Malaysia",
    quote: "The Airplane Game was hilarious but incredibly insightful! My team immediately applied the lessons and our sprint planning improved by 40%.",
    rating: 5
  },
  {
    name: "Siti Nurhaliza",
    role: "HR Director",
    company: "Digital Solutions SG",
    quote: "Finally, a training that's NOT boring! The energy was amazing and we saw real mindset shifts. Worth every ringgit.",
    rating: 5
  },
  {
    name: "David Tan",
    role: "Operations Manager",
    company: "Manufacturing Co.",
    quote: "The Lean Six Sigma course was eye-opening. Explained complex concepts in simple terms. Reduced our defects by 30% in just 3 weeks!",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-900 px-4 py-2 rounded-full mb-4">
            <span className="text-sm">What SME Bosses Say</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Real Results from Real Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 5,000 professionals across Southeast Asia have experienced TeamWorks. 
            Here's what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-10 h-10 text-blue-600 opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Highlight */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 mb-16">
          <h3 className="text-center text-2xl mb-8 text-gray-700">
            Proven Track Record Across Southeast Asia
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🇲🇾</div>
              <div className="text-2xl text-gray-900 mb-1">Malaysia</div>
              <div className="text-sm text-gray-600">3,000+ trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇸🇬</div>
              <div className="text-2xl text-gray-900 mb-1">Singapore</div>
              <div className="text-sm text-gray-600">1,200+ trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇮🇩</div>
              <div className="text-2xl text-gray-900 mb-1">Indonesia</div>
              <div className="text-sm text-gray-600">600+ trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇹🇭</div>
              <div className="text-2xl text-gray-900 mb-1">Thailand</div>
              <div className="text-sm text-gray-600">200+ trained</div>
            </div>
          </div>
        </div>

        {/* Featured Success Story */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative h-64 md:h-auto">
              <ImageWithFallback
                src={handsClayImage}
                alt="Workshop success"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Content */}
            <div className="p-10 md:p-12 flex flex-col justify-center text-white">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4 self-start">
                <span className="text-xs">Success Story</span>
              </div>
              
              <h3 className="text-3xl mb-4">
                "We Went from Chaos to Clarity in 2 Days"
              </h3>
              
              <p className="text-blue-100 mb-4 leading-relaxed">
                A 50-person e-commerce company was struggling with missed deadlines and low morale. 
                After the "Work Clear, Work Fast" course, they implemented Amazon's frameworks and 
                saw immediate improvements.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-blue-100">40% faster delivery times</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-blue-100">Employee satisfaction up 65%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className="text-blue-100">Results visible within 2 weeks</span>
                </div>
              </div>

              <div className="text-sm text-blue-200">
                — Sarah Lee, COO of E-commerce Ventures
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}