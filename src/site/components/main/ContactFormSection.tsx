// Responsive Contact Form Section - refactored from Figma import

export function ContactFormSection() {
  return (
    <div className="bg-gradient-to-b from-white to-[#fafbfc] w-full py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Image and Info */}
          <div className="flex flex-col gap-6 lg:gap-10">
            {/* Hero Image */}
            <div className="w-full rounded-[10px] overflow-hidden">
              <img 
                alt="Team collaborating in workshop" 
                className="w-full h-[280px] object-cover" 
                src="https://images.unsplash.com/photo-1735639013995-086e648eaa38" 
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#6a7282] text-[12px] tracking-[0.6px] uppercase">
                  Start a conversation
                </p>
                
                <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[41.4px] not-italic text-[#101828] text-[28px] md:text-[36px] tracking-[-0.72px]">
                  Let's understand what's really getting in the way
                </h1>
                
                <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#364153] text-[16px]">
                  We work with leaders and teams who want clarity — not buzzwords, not frameworks for the sake of it.
                </p>
              </div>

              {/* List Section */}
              <div className="flex flex-col gap-3">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#4a5565] text-[14px]">
                  This conversation helps us understand:
                </p>
                
                <ul className="pl-5 list-disc flex flex-col gap-2">
                  <li className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#364153] text-[16px]">
                    what's slowing execution down
                  </li>
                  <li className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#364153] text-[16px]">
                    what's unclear or misaligned
                  </li>
                  <li className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#364153] text-[16px]">
                    and whether we're the right partner to help
                  </li>
                </ul>
              </div>

              {/* Bottom Note */}
              <div className="pt-6 border-t border-[#e5e7eb]">
                <p className="font-['Inter:Light',sans-serif] font-light leading-[22.75px] not-italic text-[#4a5565] text-[14px]">
                  No obligation. No sales pitch. Just clarity on your next step.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic text-[#101828] text-[20px]">
                Get a Custom Recommendation
              </h3>
              <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">
                Share a bit of context. We'll respond with a clear recommendation—not a pitch.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#1e2939] text-[14px]">
                  Full Name
                </label>
                <input 
                  type="text" 
                  className="h-[46px] px-4 py-3 rounded-[8px] border border-[#d1d5dc] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#101828]"
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#1e2939] text-[14px]">
                  Work Email
                </label>
                <input 
                  type="email" 
                  className="h-[46px] px-4 py-3 rounded-[8px] border border-[#d1d5dc] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#101828]"
                />
              </div>

              {/* Preferred Contact Method */}
              <div className="flex flex-col gap-3">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#1e2939] text-[14px]">
                  Preferred contact method
                </label>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="contact" className="w-4 h-4" />
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                      Email
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="contact" className="w-4 h-4" />
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                      WhatsApp
                      <span className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic text-[#6a7282] text-[12px] ml-2">
                        (faster response)
                      </span>
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="contact" className="w-4 h-4" />
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                      Phone
                      <span className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic text-[#6a7282] text-[12px] ml-2">
                        (call)
                      </span>
                    </span>
                  </label>
                </div>
                <p className="font-['Inter:Light_Italic',sans-serif] font-light italic leading-[16px] text-[#6a7282] text-[12px]">
                  We respect your preference and won't contact you through other channels without consent.
                </p>
              </div>

              {/* Organization / Role */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#1e2939] text-[14px]">
                  Organization / Role
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Head of Operations, COO, VP Engineering"
                  className="h-[46px] px-4 py-3 rounded-[8px] border border-[#d1d5dc] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#101828] placeholder:text-[#99a1af]"
                />
              </div>

              {/* Interest Checkboxes */}
              <div className="flex flex-col gap-3">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#1e2939] text-[14px]">
                  What best describes your interest?
                </label>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                      Private / in-house training
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                      Team effectiveness & delivery
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                      Enterprise transformation
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                      AI-enabled execution
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                      Not sure yet
                    </span>
                  </label>
                </div>
              </div>

              {/* Challenge Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#1e2939] text-[14px]">
                  What challenge do you relate to most?
                </label>
                <select className="h-[46px] px-4 py-3 rounded-[8px] border border-[#d1d5dc] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#101828] bg-white">
                  <option>Select a challenge...</option>
                  <option>Work is slow and delivery keeps slipping</option>
                  <option>Priorities keep changing</option>
                  <option>Teams are busy but outcomes don't improve</option>
                  <option>Too many dependencies across teams</option>
                  <option>Leadership decisions don't translate into execution</option>
                  <option>Processes are heavy or don't fit how we work</option>
                  <option>We want to use AI but don't know where it creates value</option>
                </select>
              </div>

              {/* Additional Context */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic text-[#1e2939] text-[14px]">
                  Anything else you'd like us to know?
                </label>
                <textarea 
                  placeholder="(Optional) What's your current setup, biggest bottleneck, or something you're curious about?"
                  rows={4}
                  className="px-4 py-3 rounded-[8px] border border-[#d1d5dc] font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#101828] placeholder:text-[#99a1af] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="h-[46px] px-6 rounded-[8px] bg-[#0f1419] text-white font-['Inter:Medium',sans-serif] font-medium text-[14px] hover:bg-[#1a2028] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
