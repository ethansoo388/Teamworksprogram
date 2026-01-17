import { ArrowRight, CheckCircle2, Calendar, Users, Gift } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative grid md:grid-cols-2 gap-12 p-12 md:p-16">
            {/* Left: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full mb-6">
                <Gift className="w-4 h-4" />
                <span className="font-semibold">FREE with HRD Funding!</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl mb-6">
                Ready to Book Your Team's Workshop?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Choose any course, schedule it at your convenience, and transform your team 
                in just 2 days. Free consultation available to help you pick the right course!
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  <span className="text-blue-50">Pick any course that fits your team's needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  <span className="text-blue-50">Schedule at your convenience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  <span className="text-blue-50">Available in Malaysia, Singapore, Indonesia & Thailand</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  <span className="text-blue-50">Expert instructor with 10+ years experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                  <span className="text-blue-50">60% hands-on activities & fun games</span>
                </div>
              </div>

              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors inline-flex items-center gap-2 group shadow-xl">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="mt-6 text-sm text-blue-200">
                💬 Chat with our course advisor to find the perfect fit for your team
              </p>
            </div>

            {/* Right: Pricing/Details */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Per Course (2 Days)</div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-5xl text-gray-900">FREE*</span>
                    <span className="text-xl text-gray-500">or MYR 21,000</span>
                  </div>
                  <div className="text-sm text-green-600 bg-green-50 px-3 py-2 rounded-lg inline-block">
                    *FREE when using HRD funding (Malaysia only)
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-gray-900">What's Included:</h4>
                  
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-900 mb-1">2 Full Days</div>
                      <div className="text-sm text-gray-600">9am - 5pm both days, in-person at your location</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-900 mb-1">Up to 30 Participants</div>
                      <div className="text-sm text-gray-600">Same price for 1 or 30 people—maximize your value!</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-900 mb-1">All Materials Included</div>
                      <div className="text-sm text-gray-600">Workshop materials, handouts, and take-home resources</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-gray-900 mb-1">Free Pre-Course Consultation</div>
                      <div className="text-sm text-gray-600">We help you analyze and choose the right course</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                  Book Your Course Now
                </button>

                <div className="mt-6 text-center">
                  <a href="#courses" className="text-sm text-gray-600 hover:text-gray-900 underline">
                    View all 5 courses
                  </a>
                </div>
              </div>

              {/* Value Highlight */}
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="text-yellow-900 mb-1">💡 Pro Tip</div>
                <div className="text-sm text-yellow-800">
                  Since the price is the same for any group size, bring 20-30 team members to maximize value!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Teasers */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h4 className="mb-2 text-gray-900">How does HRD funding work?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Malaysian companies can use HRD Corp funding to cover the full course fee.
            </p>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
              Learn more <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h4 className="mb-2 text-gray-900">Can we customize the content?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Yes! We can tailor activities and examples to your industry and challenges.
            </p>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
              Contact us <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h4 className="mb-2 text-gray-900">What if we need multiple courses?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Book them separately based on your team's schedule and development plan.
            </p>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
              Get advice <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}