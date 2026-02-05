export function BookConsultationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="index.html" className="text-2xl tracking-tight font-semibold hover:text-gray-700 transition-colors">
              TeamWorks
            </a>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              <a href="index.html#courses" className="text-sm hover:text-gray-600 transition-colors">Courses</a>
              <a href="index.html#testimonials" className="text-sm hover:text-gray-600 transition-colors">Testimonials</a>
            </div>

            {/* Mobile Menu Button */}
            <button id="mobile-menu-btn" className="md:hidden">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="index.html#courses" className="text-sm py-2">Courses</a>
              <a href="index.html#testimonials" className="text-sm py-2">Testimonials</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              {/* Label */}
              <div className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-6 font-medium">
                Free Consultation
              </div>
              
              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl leading-tight mb-6 tracking-tight">
                Let's build your custom training plan
              </h1>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-16">
                Tell us about your team and goals. Our course advisor will create a personalized recommendation—no pressure, just practical advice.
              </p>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {/* Stat 1 */}
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-semibold">5,000+</div>
                    <div className="text-sm text-gray-600">Students Trained</div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-semibold">10+ Years</div>
                    <div className="text-sm text-gray-600">Instructor Experience</div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-semibold">FREE</div>
                    <div className="text-sm text-gray-600">HRD Funding (MY)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
              <form id="consultation-form" className="space-y-8">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all"
                      placeholder="e.g., John Tan"
                    />
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="workEmail" className="block text-sm font-medium text-gray-900 mb-2">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all"
                      placeholder="e.g., john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-900 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all"
                      placeholder="e.g., ABC Solutions Sdn Bhd"
                    />
                  </div>

                  {/* Team Size */}
                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-900 mb-2">
                      Team Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all"
                    >
                      <option value="">Select team size</option>
                      <option value="1-5">1-5 people</option>
                      <option value="5-10">5-10 people</option>
                      <option value="11-15">11-15 people</option>
                      <option value="16-20">16-20 people</option>
                      <option value="21-30">21-30 people</option>
                      <option value="30+">30+ people</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Delivery Format */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    Preferred Delivery Format <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="radio"
                        name="deliveryFormat"
                        value="in-person"
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm font-medium">In-Person Workshop</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="radio"
                        name="deliveryFormat"
                        value="virtual"
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm font-medium">Virtual (Online)</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="radio"
                        name="deliveryFormat"
                        value="hybrid"
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm font-medium">Hybrid</span>
                    </label>
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    What outcomes are you looking for? <span className="text-gray-500">(Select all that apply)</span>
                  </label>
                  <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="outcomes"
                        value="eliminate-delays"
                        className="w-5 h-5 mt-0.5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <div>
                        <div className="font-medium">Eliminate Project Delays</div>
                        <div className="text-sm text-gray-600">Ship projects on time, every time—no more excuses</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="outcomes"
                        value="team-collaboration"
                        className="w-5 h-5 mt-0.5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <div>
                        <div className="font-medium">Improve Team Collaboration</div>
                        <div className="text-sm text-gray-600">Break down silos and get everyone rowing in the same direction</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="outcomes"
                        value="productivity"
                        className="w-5 h-5 mt-0.5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <div>
                        <div className="font-medium">Increase Team Productivity</div>
                        <div className="text-sm text-gray-600">Do more with less—eliminate waste and focus on what matters</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="outcomes"
                        value="visibility"
                        className="w-5 h-5 mt-0.5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <div>
                        <div className="font-medium">Gain Total Visibility & Transparency</div>
                        <div className="text-sm text-gray-600">See exactly what's happening without micromanaging</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="outcomes"
                        value="prevent-firefighting"
                        className="w-5 h-5 mt-0.5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <div>
                        <div className="font-medium">Stop Firefighting & Start Preventing</div>
                        <div className="text-sm text-gray-600">Catch problems early when they're cheap to fix</div>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="outcomes"
                        value="accountability"
                        className="w-5 h-5 mt-0.5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                      />
                      <div>
                        <div className="font-medium">Build Accountability Culture</div>
                        <div className="text-sm text-gray-600">Create teams that own their work and deliver results</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Contact Preference */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    How would you like us to contact you? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm">📧 <strong>Email</strong> (I prefer written communication)</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm">📞 <strong>Phone Call</strong> (I want to discuss immediately)</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="video"
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm">🎥 <strong>Video Call</strong> (Let's meet face-to-face virtually)</span>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm">💬 <strong>WhatsApp</strong> (Quick and convenient)</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all text-lg font-semibold flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Get My Custom Plan
                </button>
              </form>

              {/* Success Message (hidden by default) */}
              <div id="success-message" className="hidden mt-8 p-6 bg-green-50 border-2 border-green-500 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-1">Request Submitted Successfully!</h3>
                    <p className="text-green-800">
                      Thank you for your interest in TeamWorks. Our team will review your request and contact you within 24 hours to schedule your free consultation. We will go back to the program page in 5 seconds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Message (hidden by default) */}
              <div id="error-message" className="hidden mt-8 p-6 bg-red-50 border-2 border-red-500 rounded-lg">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 mb-1">Submission Failed</h3>
                    <p className="text-red-800">
                      There was an error submitting your request. Please try again or email us directly at hello@ciagile.com or call +60 12-345 6789.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-3xl mb-4 tracking-tight font-semibold">TeamWorks</div>
              <p className="text-gray-600 max-w-md leading-relaxed">
                Fun, hands-on training workshops for SME teams across Southeast Asia. 
                Transform your team in just 2 days.
              </p>
            </div>

            {/* Courses */}
            <div>
              <h4 className="mb-4 text-sm tracking-wider uppercase text-gray-500 font-semibold">Courses</h4>
              <div className="space-y-3 text-sm">
                <div><a href="creating-super-teams.html" className="hover:text-gray-600 transition-colors">Creating Super Teams</a></div>
                <div><a href="design-thinking.html" className="hover:text-gray-600 transition-colors">Win Customers Through Design</a></div>
                <div><a href="critical-thinking-kanban.html" className="hover:text-gray-600 transition-colors">Critical Thinking for Better Work</a></div>
                <div><a href="bookConsultation.html" className="hover:text-gray-600 transition-colors">Practical Lean Problem Solving</a></div>
                <div><a href="bookConsultation.html" className="hover:text-gray-600 transition-colors">AI Skills for YOUR Team</a></div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm tracking-wider uppercase text-gray-500 font-semibold">Company</h4>
              <div className="space-y-3 text-sm">
                <div><a href="https://www.ciagile.com" className="hover:text-gray-600 transition-colors">About Us</a></div>
                <div><a href="https://www.ciagile.com" className="hover:text-gray-600 transition-colors">Our Instructors</a></div>
                <div><a href="index.html#testimonials" className="hover:text-gray-600 transition-colors">Testimonials</a></div>
                <div><a href="bookConsultation.html" className="hover:text-gray-600 transition-colors">Contact</a></div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2026 TeamWorks. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}