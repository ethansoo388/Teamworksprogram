const testimonials = [
  {
    quote: "The Airplane Game was hilarious but incredibly insightful! My team immediately applied the lessons and our sprint planning improved by 40%.",
    author: "Ahmad Kamal",
    role: "CEO, TechStart Malaysia"
  },
  {
    quote: "Finally, a training that's NOT boring! The energy was amazing and we saw real mindset shifts. Worth every ringgit.",
    author: "Siti Nurhaliza",
    role: "HR Director, Digital Solutions SG"
  },
  {
    quote: "The Lean Problem Solving course was eye-opening. Explained complex concepts in simple terms. Reduced our defects by 30% in just 3 weeks!",
    author: "David Tan",
    role: "Operation Manager, Manufacturing Malaysia"
  }
];

export function TestimonialsV2() {
  return (
    <section id="testimonials" className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
            What SME leaders say
          </h2>
          <p className="text-lg text-gray-600">
            Leaders share how TeamWorks helped their teams work better — fast.
          </p>
        </div>

        {/* Testimonials Grid - Minimal Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 lg:p-10"
            >
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-gray-200">
                <div className="mb-1 font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
