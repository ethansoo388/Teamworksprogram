import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { User, Mail, Phone, Building2, Briefcase, CreditCard } from "lucide-react";

export function IndividualEnrollmentFormPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation />

      {/* Hero */}
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
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Individual Enrollment</span>
          </div>

          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Enrollment</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            Individual Enrollment Request
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light">
            Fill in your details and we’ll guide you through enrollment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* SUCCESS (hidden by default; toggled by static JS) */}
          <div id="jess-individual-success" className="hidden">
            <section className="relative bg-slate-800 py-16 sm:py-20 lg:py-24 border-t-4 border-amber-500 rounded-2xl overflow-hidden">
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div>
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-light mb-6 text-white">Enrollment Request Submitted</h2>
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

          <form id="jess-individual-enrollment-form" className="space-y-8" noValidate>
            {/* Personal */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-amber-500" />
                Your Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                    placeholder="Enter your full name"
                  />
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="fullName">Full name is required</p>
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
                      placeholder="name@company.com"
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

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                    Organization <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                      placeholder="Company / Organization"
                    />
                  </div>
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="organization">Organization is required</p>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-2">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      required
                      className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                      placeholder="e.g., Head of Transformation"
                    />
                  </div>
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="jobTitle">Job title is required</p>
                </div>
              </div>
            </div>

            {/* Enrollment */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-amber-500" />
                Enrollment Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="courseSelected" className="block text-sm font-medium text-slate-700 mb-2">
                    Course Selected
                  </label>
                  <select
                    id="courseSelected"
                    name="courseSelected"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300 bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a course</option>
                    <option value="Course 1: High Performance Agile Leader">Course 1: High Performance Agile Leader</option>
                    <option value="Course 2: Hyper-Productive Scrum Team (RSM + RPO)">Course 2: Hyper-Productive Scrum Team (RSM + RPO)</option>
                    <option value="Bundle: Course 1 + Course 2 (Full JESS Pathway)">Bundle: Course 1 + Course 2 (Full JESS Pathway)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="classDate" className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Class Date
                  </label>
                  <input
                    type="text"
                    id="classDate"
                    name="classDate"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300"
                    placeholder="e.g., April 21-22, 2026 (Malaysia)"
                  />
                </div>

                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-slate-700 mb-2">
                    Payment Method <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all border-slate-300 bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>Select payment method</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Invoice">Invoice</option>
                  </select>
                  <p className="mt-2 text-sm text-red-500 hidden" data-error-for="paymentMethod">Please select a payment method</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Invoice Needed?</label>
                  <div className="flex items-center gap-6">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="invoiceNeeded" value="no" defaultChecked className="accent-amber-500" />
                      <span className="text-sm text-slate-700">No</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="invoiceNeeded" value="yes" className="accent-amber-500" />
                      <span className="text-sm text-slate-700">Yes</span>
                    </label>
                  </div>
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
