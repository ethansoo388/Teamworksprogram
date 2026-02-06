// Responsive Contact CTA Section - refactored from Figma import
// Two side-by-side cards: "Want to talk directly?" and "Prefer WhatsApp?"

export function ContactCTASection() {
  return (
    <div className="bg-white w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Want to talk directly? (Blue gradient) */}
          <div className="bg-gradient-to-b from-[#06c] to-[#0052a3] rounded-[10px] p-8 md:p-10 flex flex-col gap-6 border border-[#06c]">
            {/* Icon - Phone */}
            <div className="w-8 h-8">
              <svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
                <path 
                  d="M29.3333 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7428 28.2848 28.4695 28.5358C28.1961 28.7868 27.8739 28.9779 27.5231 29.0969C27.1722 29.2159 26.8007 29.2601 26.4333 29.2267C22.3611 28.7822 18.4564 27.3677 15.0533 25.0933C11.9047 23.0368 9.24149 20.3736 7.18499 17.225C4.89997 13.8015 3.4847 9.87442 3.05332 5.78C3.01999 5.41364 3.06393 5.04296 3.18224 4.69296C3.30055 4.34296 3.49063 4.02174 3.74058 3.74921C3.99054 3.47667 4.29473 3.25878 4.6339 3.11014C4.97306 2.9615 5.33968 2.88543 5.70999 2.88667H9.70999C10.3514 2.88029 10.9722 3.10828 11.4543 3.53126C11.9365 3.95424 12.2465 4.54274 12.3233 5.18C12.4674 6.45358 12.7556 7.70831 13.1833 8.92C13.3619 9.40992 13.3959 9.94258 13.2808 10.4518C13.1658 10.961 12.9069 11.4228 12.5367 11.7833L10.8433 13.4767C12.7907 16.7682 15.4652 19.4427 18.7567 21.39L20.45 19.6967C20.8104 19.3265 21.2723 19.0675 21.7815 18.9525C22.2907 18.8374 22.8234 18.8714 23.3133 19.05C24.53 19.4777 25.7847 19.7659 27.0583 19.91C27.7013 19.9873 28.2946 20.3021 28.7191 20.7912C29.1436 21.2804 29.3692 21.9091 29.3533 22.5533" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic text-white text-[24px] md:text-[30px]">
              Want to talk directly?
            </h3>

            {/* Description */}
            <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[rgba(255,255,255,0.9)] text-[16px]">
              Skip the form. Get on a call with our team to discuss your challenges and explore how we can help.
            </p>

            {/* Benefits List */}
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-white text-[14px] mt-0.5">✓</span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[rgba(255,255,255,0.9)] text-[14px]">
                  15–30 minute conversation, no pitch
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-white text-[14px] mt-0.5">✓</span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[rgba(255,255,255,0.9)] text-[14px]">
                  Speak with an actual consultant, not sales
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-white text-[14px] mt-0.5">✓</span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[rgba(255,255,255,0.9)] text-[14px]">
                  Get clarity on your next step
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="flex flex-col gap-3 mt-2">
              <button className="bg-white h-[48px] rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#06c] text-[16px] text-center hover:bg-gray-50 transition-colors">
                Schedule a Call
              </button>
              <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[rgba(255,255,255,0.7)] text-[14px] text-center">
                Available Mon–Fri, 9 AM – 6 PM (SGT)
              </p>
            </div>
          </div>

          {/* Card 2: Prefer WhatsApp? (Light background) */}
          <div className="bg-[#f8fafc] rounded-[10px] p-8 md:p-10 flex flex-col gap-6 border border-[#e5e7eb]">
            {/* Icon - WhatsApp */}
            <div className="w-8 h-8">
              <svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
                <path 
                  d="M29.3333 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7428 28.2848 28.4695 28.5358C28.1961 28.7868 27.8739 28.9779 27.5231 29.0969C27.1722 29.2159 26.8007 29.2601 26.4333 29.2267C22.3611 28.7822 18.4564 27.3677 15.0533 25.0933C11.9047 23.0368 9.24149 20.3736 7.18499 17.225C4.89997 13.8015 3.4847 9.87442 3.05332 5.78C3.01999 5.41364 3.06393 5.04296 3.18224 4.69296C3.30055 4.34296 3.49063 4.02174 3.74058 3.74921C3.99054 3.47667 4.29473 3.25878 4.6339 3.11014C4.97306 2.9615 5.33968 2.88543 5.70999 2.88667H9.70999C10.3514 2.88029 10.9722 3.10828 11.4543 3.53126C11.9365 3.95424 12.2465 4.54274 12.3233 5.18C12.4674 6.45358 12.7556 7.70831 13.1833 8.92C13.3619 9.40992 13.3959 9.94258 13.2808 10.4518C13.1658 10.961 12.9069 11.4228 12.5367 11.7833L10.8433 13.4767C12.7907 16.7682 15.4652 19.4427 18.7567 21.39L20.45 19.6967C20.8104 19.3265 21.2723 19.0675 21.7815 18.9525C22.2907 18.8374 22.8234 18.8714 23.3133 19.05C24.53 19.4777 25.7847 19.7659 27.0583 19.91C27.7013 19.9873 28.2946 20.3021 28.7191 20.7912C29.1436 21.2804 29.3692 21.9091 29.3533 22.5533" 
                  stroke="#0066CC" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] not-italic text-[#101828] text-[24px] md:text-[30px]">
              Prefer WhatsApp?
            </h3>

            {/* Description */}
            <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#364153] text-[16px]">
              If WhatsApp is easier for you, send us a message and our team will follow up during business hours.
            </p>

            {/* Benefits List */}
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#06c] text-[14px] mt-0.5">✓</span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">
                  Message anytime, we'll respond within hours
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#06c] text-[14px] mt-0.5">✓</span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">
                  Share files, questions, or context easily
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#06c] text-[14px] mt-0.5">✓</span>
                <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">
                  Continue the conversation at your pace
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="flex flex-col gap-3 mt-2">
              <a 
                href="https://wa.me/60192981055?text=Service%20Inquiry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-[48px] rounded-[8px] border-2 border-[#06c] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic text-[#06c] text-[16px] text-center hover:bg-[#06c] hover:text-white transition-colors flex items-center justify-center no-underline"
              >
                Message us on WhatsApp
              </a>
              <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#6a7282] text-[14px] text-center">
                Responses during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}