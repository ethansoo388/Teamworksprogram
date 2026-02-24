/**
 * ContactCTASection.tsx — updated alternate contact options.
 * Ported from CI Agile Main_GerseneCodeForMerge / ContactPage.tsx secondary section.
 * Static-export safe: no React state, no lucide-react, no React Router.
 * Icons rendered as inline SVG (not lucide-react).
 */

export function ContactCTASection() {
  return (
    <section className="py-16 px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">

          {/* ── Card 1: Talk to an Expert (Blue) ─── */}
          <div className="bg-gradient-to-br from-[#0066CC] to-[#0052A3] border border-[#0066CC] rounded-lg p-8 lg:p-10 text-white">
            {/* Phone icon (inline SVG) */}
            <div className="mb-6">
              <svg width="32" height="32" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>

            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Want to talk directly?</h3>
            <p className="text-base text-white/90 font-light leading-relaxed mb-6">
              Skip the form. Get on a call with our team to discuss your challenges and explore how we can help.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-white/90 font-light">
              <li className="flex items-start gap-3"><span className="text-white mt-0.5">✓</span><span>15–30 minute conversation, no pitch</span></li>
              <li className="flex items-start gap-3"><span className="text-white mt-0.5">✓</span><span>Speak with an actual consultant, not sales</span></li>
              <li className="flex items-start gap-3"><span className="text-white mt-0.5">✓</span><span>Get clarity on your next step</span></li>
            </ul>

            <div className="space-y-3">
              <a href="/contactus.html"
                className="block w-full bg-white hover:bg-gray-50 text-[#0066CC] font-medium text-base h-12 px-8 rounded-md transition-all shadow-md text-center leading-[3rem]">
                Schedule a Call
              </a>
              <p className="text-sm text-white/70 font-light text-center">Available Mon–Fri, 9 AM – 6 PM (SGT)</p>
            </div>
          </div>

          {/* ── Card 2: Prefer WhatsApp? (Light) ─── */}
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg p-8 lg:p-10">
            {/* Message-circle icon (inline SVG) */}
            <div className="mb-6">
              <svg width="32" height="32" fill="none" stroke="#0066CC" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>

            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">Prefer WhatsApp?</h3>
            <p className="text-base text-gray-700 font-light leading-relaxed mb-6">
              If WhatsApp is easier for you, send us a message and our team will follow up during business hours.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-600 font-light">
              <li className="flex items-start gap-3"><span className="text-[#0066CC] mt-0.5">✓</span><span>Message anytime, we'll respond within hours</span></li>
              <li className="flex items-start gap-3"><span className="text-[#0066CC] mt-0.5">✓</span><span>Share files, questions, or context easily</span></li>
              <li className="flex items-start gap-3"><span className="text-[#0066CC] mt-0.5">✓</span><span>Continue the conversation at your pace</span></li>
            </ul>

            <div className="space-y-3">
              <a href="https://wa.me/60192981055?text=Service%20Inquiry" target="_blank" rel="noopener noreferrer"
                className="block w-full bg-transparent hover:bg-[#0066CC] text-[#0066CC] hover:text-white border-2 border-[#0066CC] font-medium text-base h-12 px-8 rounded-md transition-all text-center leading-[2.75rem]">
                Message us on WhatsApp
              </a>
              <p className="text-sm text-gray-500 font-light text-center">Responses during business hours</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
