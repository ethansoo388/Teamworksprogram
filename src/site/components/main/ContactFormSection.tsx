/**
 * ContactFormSection.tsx — updated contact form design.
 * Ported from CI Agile Main_GerseneCodeForMerge / ContactPage.tsx.
 *
 * form.js contract PRESERVED:
 *  form id="contact-us-form"
 *  id="contact-success-message"
 *  id="contact-error-message"
 *  radio name="contactMethod" (values: email | whatsapp)
 *  fields: fullName, workEmail, organizationRole, challenge, message
 *  interests checkboxes (name="interests")
 *
 * Static-export safe: no React state/hooks, no lucide-react, no React Router.
 * The conditional WhatsApp number field (was state-driven) is rendered with a
 * data-attribute JS hook; main.js can show/hide it, but it degrades gracefully
 * as a always-visible optional field if JS is absent.
 */

import stickyNotesImage from '@/assets/img/main/ciagile-contact-hero-sticky-notes-closeup.webp';

export function ContactFormSection() {
  return (
    <section className="pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-b from-white to-[#FAFBFC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-start">

          {/* ── Left Column ─────────────────────────────────────────────── */}
          <div className="space-y-10">
            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src={stickyNotesImage}
                alt="Team collaborating in workshop"
                className="w-full h-[280px] object-cover"
              />
            </div>

            {/* Text content */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-normal mb-6">
                Start a conversation
              </p>
              <h1 className="text-3xl lg:text-4xl font-semibold leading-[1.15] text-gray-900 mb-8">
                Let's understand what's really getting in the way
              </h1>
              <p className="text-base text-gray-700 font-light leading-relaxed mb-8">
                We work with leaders and teams who want clarity — not buzzwords, not frameworks for the sake of it.
              </p>
              <div className="space-y-3 mb-8">
                <p className="text-sm text-gray-600 font-normal">This conversation helps us understand:</p>
                <ul className="space-y-2 pl-5">
                  <li className="list-disc text-base text-gray-700 font-light leading-relaxed">what's slowing execution down</li>
                  <li className="list-disc text-base text-gray-700 font-light leading-relaxed">what's unclear or misaligned</li>
                  <li className="list-disc text-base text-gray-700 font-light leading-relaxed">and whether we're the right partner to help</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  No obligation. No sales pitch. Just clarity on your next step.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Column — Contact Form ──────────────────────────────── */}
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 lg:p-10">
            <h3 className="text-xl font-medium mb-2 text-gray-900">Get a Custom Recommendation</h3>
            <p className="text-sm text-gray-600 font-light mb-8">
              Share a bit of context. We'll respond with a clear recommendation—not a pitch.
            </p>

            {/* form.js contract: id="contact-us-form" */}
            <form id="contact-us-form" className="space-y-5" noValidate>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-800 mb-1.5">Full Name</label>
                <input type="text" id="fullName" name="fullName" required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all" />
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-800 mb-1.5">Work Email</label>
                <input type="email" id="workEmail" name="workEmail" required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all" />
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contact_number" className="block text-sm font-medium text-gray-800 mb-1.5">Contact Number</label>
                <div className="flex gap-2">
                  <select name="country_code"
                    className="w-32 px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900 bg-white focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all">
                    <option value="+60">+60 (MY)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+852">+852 (HK)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+86">+86 (CN)</option>
                    <option value="+91">+91 (IN)</option>
                    <option value="+62">+62 (ID)</option>
                    <option value="+63">+63 (PH)</option>
                    <option value="+66">+66 (TH)</option>
                    <option value="+84">+84 (VN)</option>
                    <option value="+81">+81 (JP)</option>
                    <option value="+82">+82 (KR)</option>
                  </select>
                  <input type="tel" id="contact_number" name="contact_number" placeholder="123456789"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all" />
                </div>
              </div>

              {/* Preferred contact method — form.js contract: name="contactMethod" */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-3">Preferred contact method</label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="radio" name="contactMethod" value="email" defaultChecked
                      className="mt-0.5 w-4 h-4 border-gray-300 text-[#0066CC] focus:ring-[#0066CC]" />
                    <span className="text-sm text-gray-700 font-light group-hover:text-gray-900">Email</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="radio" name="contactMethod" value="whatsapp"
                      className="mt-0.5 w-4 h-4 border-gray-300 text-[#0066CC] focus:ring-[#0066CC]" />
                    <span className="text-sm text-gray-700 font-light group-hover:text-gray-900">
                      WhatsApp <span className="text-xs text-gray-500">(faster response)</span>
                    </span>
                  </label>
                </div>
                <p className="text-xs text-gray-500 font-light mt-2.5 italic">
                  We respect your preference and won't contact you through other channels without consent.
                </p>
              </div>

              {/* Organization / Role */}
              <div>
                <label htmlFor="organizationRole" className="block text-sm font-medium text-gray-800 mb-1.5">
                  Organization / Role
                </label>
                <input type="text" id="organizationRole" name="organizationRole"
                  placeholder="e.g. Head of Operations, COO, VP Engineering"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all" />
              </div>

              {/* Interest checkboxes — name="interests" */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-3">What best describes your interest?</label>
                <div className="space-y-3">
                  {[
                    { value: "private-inhouse-training", label: "Private / in-house training" },
                    { value: "team-effectiveness-delivery", label: "Team effectiveness & delivery" },
                    { value: "enterprise-transformation", label: "Enterprise transformation" },
                    { value: "ai-enabled-execution", label: "AI-enabled execution" },
                    { value: "not-sure-yet", label: "Not sure yet" },
                  ].map((opt) => (
                    <label key={opt.value} className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" name="interests" value={opt.value}
                        className="mt-0.5 w-4 h-4 border-gray-300 rounded text-[#0066CC] focus:ring-[#0066CC]" />
                      <span className="text-sm text-gray-700 font-light group-hover:text-gray-900">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Challenge */}
              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-800 mb-0.5">
                  Biggest challenge right now
                </label>
                <p className="text-xs text-gray-500 italic mb-2.5">Choose the one that hurts the most.</p>
                <select id="challenge" name="challenge"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 bg-white focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all">
                  <option value="">Select a challenge...</option>
                  <option value="work-is-slow">Work is slow and delivery keeps slipping</option>
                  <option value="priorities-changing">Priorities keep changing</option>
                  <option value="busy-no-outcomes">Teams are busy but outcomes don't improve</option>
                  <option value="too-many-dependencies">Too many dependencies across teams</option>
                  <option value="decisions-not-translating">Leadership decisions don't translate into execution</option>
                  <option value="heavy-processes">Processes are heavy or don't fit how we work</option>
                  <option value="ai-uncertainty">We want to use AI but don't know where it creates value</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </div>

              {/* Message / context */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1.5">
                  Optional: Brief context
                </label>
                <textarea id="message" name="message" rows={3}
                  defaultValue=""
                  placeholder="Describe your situation in a few lines..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0066CC] focus:ring-2 focus:ring-[#0066CC]/20 transition-all resize-none" />
              </div>

              {/* Submit */}
              <div className="pt-3">
                <button type="submit"
                  className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-medium text-base h-12 px-8 rounded-md inline-flex items-center justify-center gap-2 transition-colors">
                  Get My Recommendation
                  <i data-lucide="arrow-right" className="w-[18px] h-[18px]"></i>
                </button>
                <p className="text-xs text-gray-500 font-light text-center mt-3">
                  We usually reply within 1–2 business days.
                </p>
                <p className="text-xs text-gray-600 font-light text-center mt-4 pt-4 border-t border-gray-100">
                  You'll hear directly from a CI Agile consultant — not a sales rep.
                </p>
              </div>

            </form>

            {/* Success Message — form.js contract: id="contact-success-message" */}
            <div id="contact-success-message" className="hidden mt-6 bg-green-50 border border-green-300 rounded-md p-4">
              <p className="font-medium text-green-800 text-sm mb-1">Message sent successfully!</p>
              <p className="font-light text-green-700 text-sm">Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
            </div>

            {/* Error Message — form.js contract: id="contact-error-message" */}
            <div id="contact-error-message" className="hidden mt-6 bg-red-50 border border-red-300 rounded-md p-4">
              <p className="font-medium text-red-800 text-sm mb-1">Oops! Something went wrong.</p>
              <p className="font-light text-red-700 text-sm">Please try again or email us directly at romanoff@ciagile.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
