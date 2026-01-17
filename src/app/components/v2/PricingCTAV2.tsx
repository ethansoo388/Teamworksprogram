import { ArrowRight, Check } from "lucide-react";

export function PricingCTAV2() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Pricing Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
              Pricing
            </div>
            <h2 className="text-4xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600">
              One price per course. Bring up to 30 team members.
            </p>
          </div>

          {/* Pricing Card - Clean and Minimal */}
          <div className="bg-gray-50 rounded-3xl p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Price */}
              <div>
                <div className="mb-8">
                  <div className="text-sm text-gray-500 mb-4">Per 2-day course</div>
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-7xl tracking-tight">FREE</span>
                    <span className="text-2xl text-gray-500">or MYR 21,000</span>
                  </div>
                  <div className="inline-block bg-white px-4 py-2 rounded-full text-sm">
                    Free with HRD funding (Malaysia)
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-gray-700">2 full days (9am - 5pm)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Up to 30 participants</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Expert instructor (10+ years exp)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-gray-700">All materials and resources included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Free pre-course consultation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-gray-700">Available in 4 countries</span>
                  </div>
                </div>
              </div>

              {/* Right: Location Info */}
              <div>
                <h3 className="text-2xl mb-6">Where we operate</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span>🇲🇾 Malaysia</span>
                    <span className="text-sm text-gray-500">3,000+ trained</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span>🇸🇬 Singapore</span>
                    <span className="text-sm text-gray-500">1,200+ trained</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span>🇮🇩 Indonesia</span>
                    <span className="text-sm text-gray-500">600+ trained</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span>🇹🇭 Thailand</span>
                    <span className="text-sm text-gray-500">200+ trained</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-sm mb-2">💡 Pro Tip</div>
                  <p className="text-sm text-gray-700">
                    Same price for 1 or 30 people. Maximize your value by bringing 
                    20-30 team members!
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <button className="bg-black text-white px-10 py-5 rounded-full hover:bg-gray-800 transition-all inline-flex items-center gap-3 group text-lg">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="mt-6 text-sm text-gray-500">
                Talk to our course advisor to find the perfect fit for your team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
