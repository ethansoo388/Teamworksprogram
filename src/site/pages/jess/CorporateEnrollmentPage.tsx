import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { Building2, User, Mail, Phone, Users, BookOpen, Monitor } from "lucide-react";

export function CorporateEnrollmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation />

      {/* Hero Section */}
      <section className="relative bg-slate-800 py-16 sm:py-20 lg:py-24 border-t-4 border-amber-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 text-base mb-8">
            <a
              href="class-schedule.html"
              className="text-slate-300 hover:text-white transition-colors relative pb-1 border-b border-transparent hover:border-slate-300"
            >
              Class Schedule
            </a>
            <span className="text-slate-400">›</span>
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Corporate Enrollment</span>
          </div>

          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Enterprise Request</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            Corporate Enrollment Request
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light">
            Complete the form below to request corporate enrollment for your team.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* SUCCESS (hidden by default; toggled by static JS) */}
          <div id="jess-corporate-success" className="hidden">
            <section className="relative bg-slate-800 py-16 sm:py-20 lg:py-24 border-t-4 border-amber-500 rounded-2xl overflow-hidden">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div>
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-light mb-6 text-white">Request Submitted Successfully</h2>
                  <p className="text-lg text-slate-300 font-light mb-8">
                    Your email client should have opened with your enrollment request. If it didn't, please contact us directly at{" "}
                    <a href="mailto:romanoff@ciagile.com" className="text-amber-500 hover:text-amber-400 underline">
                      romanoff@ciagile.com
                    </a>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="class-schedule.html"
                      className="inline-block bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-colors duration-300"
                    >
                      Back to Class Schedule
                    </a>
                    <a
                      href="index.html"
                      className="inline-block bg-transparent border-2 border-slate-400 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-slate-700 hover:border-slate-300 transition-colors duration-300"
                    >
                      Return Home
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* FORM */}
          <form id="jess-corporate-enrollment-form" className="space-y-8" noValidate>
            {/* Company Information */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-amber-500" />
                Company Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                    placeholder="Enter your company name"
                  />
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="company">Company name is required</p>
                </div>

                <div>
                  <label htmlFor="numberOfParticipants" className="block text-sm font-medium text-slate-700 mb-2">
                    Number of Participants <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="number"
                      id="numberOfParticipants"
                      name="numberOfParticipants"
                      required
                      min={1}
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                      placeholder="e.g., 10"
                    />
                  </div>
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="numberOfParticipants">Number of participants is required</p>
                </div>
              </div>
            </div>

            {/* Contact Person */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-amber-500" />
                Contact Person
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                    placeholder="Enter contact person name"
                  />
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="contactPerson">Contact person is required</p>
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                    Role / Position <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                    placeholder="e.g., HR Director"
                  />
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="role">Role is required</p>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                      placeholder="contact@company.com"
                    />
                  </div>
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="email">Please enter a valid email address</p>
                </div>

                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-slate-700 mb-2">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      required
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="contactNumber">Contact number is required</p>
                </div>
              </div>
            </div>

            {/* Program Details */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-amber-500" />
                Program Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="interestedCourse" className="block text-sm font-medium text-slate-700 mb-2">
                    Interested Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="interestedCourse"
                    name="interestedCourse"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300 bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a course</option>
                    <option value="Course 1">Course 1 — Leadership & Transformation</option>
                    <option value="Course 2">Course 2 — Hyper-Productive Teams</option>
                    <option value="Course 1 + 2">Course 1 + 2 (Full Program)</option>
                  </select>
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="interestedCourse">Please select a course</p>
                </div>

                <div>
                  <label htmlFor="preferredDelivery" className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Delivery Mode <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Monitor className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      id="preferredDelivery"
                      name="preferredDelivery"
                      required
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300 bg-white"
                      defaultValue=""
                    >
                      <option value="" disabled>Select delivery mode</option>
                      <option value="Onsite">Onsite (In-person)</option>
                      <option value="Online">Online (Live Virtual)</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="preferredDelivery">Please select a delivery mode</p>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                    placeholder="Share any specific needs, dates, or context"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href="class-schedule.html"
                className="inline-flex items-center justify-center bg-transparent border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-medium text-lg hover:bg-slate-50 transition-colors duration-300"
              >
                Back
              </a>
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-colors duration-300"
              >
                Submit Request
              </button>
            </div>

            <p className="text-sm text-slate-500 mt-4">
              By submitting, your email client will open with a prepared enrollment request to send to our team.
            </p>
          </form>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}
