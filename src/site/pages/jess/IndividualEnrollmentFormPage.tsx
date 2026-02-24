import { motion } from "motion/react";
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { useState, useEffect } from "react";
import { User, Mail, Phone, Building2, Briefcase, CreditCard } from "lucide-react";

export function IndividualEnrollmentFormPage() {
  const courseParam = '';

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    organization: "",
    jobTitle: "",
    courseSelected: "",
    classDate: "",
    paymentMethod: "",
    invoiceNeeded: "no",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill course based on URL parameter
  useEffect(() => {
    let courseName = "";
    if (courseParam === "course1") {
      courseName = "Course 1: High Performance Agile Leader";
    } else if (courseParam === "course2") {
      courseName = "Course 2: Hyper-Productive Scrum Team (RSM + RPO)";
    } else if (courseParam === "bundle") {
      courseName = "Bundle: Course 1 + Course 2 (Full JESS Pathway)";
    }
    setFormData(prev => ({ ...prev, courseSelected: courseName }));
  }, [courseParam]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
    if (!formData.organization.trim()) newErrors.organization = "Organization is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.paymentMethod) newErrors.paymentMethod = "Please select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Prepare email body
    const emailBody = `
Individual Enrollment Request

Full Name: ${formData.fullName}
Email: ${formData.email}
Contact Number: ${formData.contactNumber}
Organization: ${formData.organization}
Job Title: ${formData.jobTitle}
Course Selected: ${formData.courseSelected}
Class Date: ${formData.classDate}
Payment Method: ${formData.paymentMethod}
Invoice Needed: ${formData.invoiceNeeded === 'yes' ? 'Yes' : 'No'}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:romanoff@ciagile.com?subject=Individual Enrollment Request - ${formData.fullName}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <MainSiteNavigation />

        <section className="relative bg-slate-800 py-16 sm:py-20 lg:py-24 border-t-4 border-amber-500">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl font-light mb-6 text-white">
                Enrollment Request Submitted
              </h1>
              <p className="text-lg text-slate-300 font-light mb-8">
                Your email client should have opened with your enrollment request. If it didn't, please contact us directly at{" "}
                <a href="mailto:romanoff@ciagile.com" className="text-amber-500 hover:text-amber-400 underline">
                  romanoff@ciagile.com
                </a>
              </p>
              <div className="bg-slate-700 rounded-xl p-6 mb-8 text-left">
                <h3 className="text-lg font-medium text-white mb-3">What Happens Next?</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✓ We'll confirm your seat within 24 hours</li>
                  <li>✓ You'll receive a confirmation email with course details</li>
                  <li>✓ Pre-course materials will be sent to your email</li>
                  <li>✓ Access to certification details (for Course 2)</li>
                  <li>✓ Calendar invite for the official session</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="individual-enrollment.html"
                  className="inline-block bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-colors duration-300"
                >
                  Enroll Another Course
                </a>
                <a
                  href="index.html"
                  className="inline-block bg-transparent border-2 border-slate-400 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-slate-700 hover:border-slate-300 transition-colors duration-300"
                >
                  Return Home
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <MainSiteFooter />
      </div>
    );
  }

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
            <a
              href="individual-enrollment.html"
              className="text-slate-300 hover:text-white transition-colors relative pb-1 border-b border-transparent hover:border-slate-300"
            >
              Individual Registration
            </a>
            <span className="text-slate-400">›</span>
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Enrollment Form</span>
          </div>

          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
            Simple Enrollment Form
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            Complete Your Enrollment
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light">
            Do NOT overcomplicate. Keep it simple.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Personal Information */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-amber-500" />
                Your Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                        placeholder="you@company.com"
                      />
                    </div>
                    {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
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
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                          errors.contactNumber ? 'border-red-500' : 'border-slate-300'
                        }`}
                        placeholder="+60 12 345 6789"
                      />
                    </div>
                    {errors.contactNumber && <p className="mt-2 text-sm text-red-500">{errors.contactNumber}</p>}
                  </div>
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
                      value={formData.organization}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                        errors.organization ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="Your company or organization"
                    />
                  </div>
                  {errors.organization && <p className="mt-2 text-sm text-red-500">{errors.organization}</p>}
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-2">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                        errors.jobTitle ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="e.g., Scrum Master, Product Owner"
                    />
                  </div>
                  {errors.jobTitle && <p className="mt-2 text-sm text-red-500">{errors.jobTitle}</p>}
                </div>
              </div>
            </div>

            {/* Course & Payment */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-amber-500" />
                Course & Payment
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="courseSelected" className="block text-sm font-medium text-slate-700 mb-2">
                    Course Selected (auto-filled)
                  </label>
                  <input
                    type="text"
                    id="courseSelected"
                    name="courseSelected"
                    value={formData.courseSelected}
                    readOnly
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-slate-100 text-slate-700"
                  />
                </div>

                <div>
                  <label htmlFor="classDate" className="block text-sm font-medium text-slate-700 mb-2">
                    Select Class Date <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="classDate"
                    name="classDate"
                    value={formData.classDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.classDate ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Choose your preferred date</option>

                    {courseParam === 'course1' && (
                      <>
                        <option value="2026-04-07-08">April 7-8, 2026 (Tue-Wed) - Jakarta - Face-to-face</option>
                        <option value="2026-04-21-22">April 21-22, 2026 (Tue-Wed) - Kuala Lumpur - Face-to-face</option>
                        <option value="2026-07-08-09">July 8-9, 2026 (Wed-Thu) - Jakarta - Face-to-face</option>
                        <option value="2026-07-21-22">July 21-22, 2026 (Tue-Wed) - Kuala Lumpur - Face-to-face</option>
                        <option value="2026-10-14-15">October 14-15, 2026 (Wed-Thu) - Jakarta - Face-to-face</option>
                        <option value="2026-10-20-21">October 20-21, 2026 (Tue-Wed) - Kuala Lumpur - Face-to-face</option>
                      </>
                    )}

                    {courseParam === 'course2' && (
                      <>
                        <option value="2026-05-20-21">May 20-21, 2026 (Wed-Thu) - Online / Zoom - Singapore Time (GMT+8)</option>
                        <option value="2026-08-19-20">August 19-20, 2026 (Wed-Thu) - Online / Zoom - Singapore Time (GMT+8)</option>
                        <option value="2026-11-18-19">November 18-19, 2026 (Wed-Thu) - Online / Zoom - Singapore Time (GMT+8)</option>
                      </>
                    )}

                    {courseParam === 'bundle' && (
                      <>
                        <optgroup label="Course 1 Dates (Face-to-face)">
                          <option value="course1-2026-04-07-08">Course 1: April 7-8, 2026 (Tue-Wed) - Jakarta - Face-to-face</option>
                          <option value="course1-2026-04-21-22">Course 1: April 21-22, 2026 (Tue-Wed) - Kuala Lumpur - Face-to-face</option>
                          <option value="course1-2026-07-08-09">Course 1: July 8-9, 2026 (Wed-Thu) - Jakarta - Face-to-face</option>
                          <option value="course1-2026-07-21-22">Course 1: July 21-22, 2026 (Tue-Wed) - Kuala Lumpur - Face-to-face</option>
                          <option value="course1-2026-10-14-15">Course 1: October 14-15, 2026 (Wed-Thu) - Jakarta - Face-to-face</option>
                          <option value="course1-2026-10-20-21">Course 1: October 20-21, 2026 (Tue-Wed) - Kuala Lumpur - Face-to-face</option>
                        </optgroup>
                        <optgroup label="Course 2 Dates (Online / Zoom - Singapore Time GMT+8)">
                          <option value="course2-2026-05-20-21">Course 2: May 20-21, 2026 (Wed-Thu) - Online / Zoom - Singapore Time (GMT+8)</option>
                          <option value="course2-2026-08-19-20">Course 2: August 19-20, 2026 (Wed-Thu) - Online / Zoom - Singapore Time (GMT+8)</option>
                          <option value="course2-2026-11-18-19">Course 2: November 18-19, 2026 (Wed-Thu) - Online / Zoom - Singapore Time (GMT+8)</option>
                        </optgroup>
                      </>
                    )}
                  </select>
                  {errors.classDate && <p className="mt-2 text-sm text-red-500">{errors.classDate}</p>}
                  {courseParam === 'bundle' && (
                    <p className="mt-2 text-xs text-slate-500">
                      Note: For the bundle, you'll attend both Course 1 and Course 2 on their respective dates.
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-slate-700 mb-2">
                    Payment Method <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.paymentMethod ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select payment method</option>
                    <option value="pay-now">Pay Now</option>
                    <option value="invoice">Reserve seat + Pay Later (Invoice)</option>
                  </select>
                  {errors.paymentMethod && <p className="mt-2 text-sm text-red-500">{errors.paymentMethod}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Invoice Needed? (Optional)
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="invoiceNeeded"
                        value="yes"
                        checked={formData.invoiceNeeded === 'yes'}
                        onChange={handleChange}
                        className="w-4 h-4 text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-sm text-slate-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="invoiceNeeded"
                        value="no"
                        checked={formData.invoiceNeeded === 'no'}
                        onChange={handleChange}
                        className="w-4 h-4 text-amber-500 focus:ring-amber-500"
                      />
                      <span className="text-sm text-slate-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-amber-500 text-slate-900 px-12 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Enrollment"}
              </button>

              <a
                href="individual-enrollment.html"
                className="w-full sm:w-auto text-center bg-transparent border-2 border-slate-300 text-slate-700 px-12 py-4 rounded-lg font-medium text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
              >
                Back to Courses
              </a>
            </div>

            <p className="text-sm text-slate-500 text-center">
              <span className="text-red-500">*</span> Required fields
            </p>

            {/* WhatsApp Support */}
            <div className="text-center pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-2">
                Have a quick question before enrolling?
              </p>
              <a
                href="https://wa.me/60192981055"
                className="text-sm text-slate-600 hover:text-slate-900 underline transition-colors"
              >
                Chat with our team on WhatsApp
              </a>
              <p className="text-xs text-slate-500 mt-2 italic">Support. Not main action.</p>
            </div>
          </motion.form>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}
