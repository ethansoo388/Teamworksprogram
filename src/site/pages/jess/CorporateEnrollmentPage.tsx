import { motion } from "motion/react";
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { useState } from "react";
import { Building2, User, Mail, Phone, Users, BookOpen, Monitor } from "lucide-react";

export function CorporateEnrollmentPage() {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    contactNumber: "",
    role: "",
    numberOfParticipants: "",
    interestedCourse: "",
    preferredDelivery: "",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.contactNumber.trim()) newErrors.contactNumber = "Contact number is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.numberOfParticipants.trim()) {
      newErrors.numberOfParticipants = "Number of participants is required";
    } else if (isNaN(Number(formData.numberOfParticipants)) || Number(formData.numberOfParticipants) < 1) {
      newErrors.numberOfParticipants = "Please enter a valid number";
    }
    if (!formData.interestedCourse) newErrors.interestedCourse = "Please select a course";
    if (!formData.preferredDelivery) newErrors.preferredDelivery = "Please select a delivery mode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Prepare email body
    const emailBody = `
Corporate Enrollment Request

Company: ${formData.company}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Contact Number: ${formData.contactNumber}
Role: ${formData.role}
Number of Participants: ${formData.numberOfParticipants}
Interested Course: ${formData.interestedCourse}
Preferred Delivery Mode: ${formData.preferredDelivery}

Additional Notes:
${formData.additionalNotes || "N/A"}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:romanoff@ciagile.com?subject=Corporate Enrollment Request - ${formData.company}&body=${encodeURIComponent(emailBody)}`;

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
                Request Submitted Successfully
              </h1>
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
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Corporate Enrollment</span>
          </div>

          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
            Enterprise Request
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            Corporate Enrollment Request
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light">Complete the form below to request corporate enrollment for your team.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
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
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.company ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Enter your company name"
                  />
                  {errors.company && <p className="mt-2 text-sm text-red-500">{errors.company}</p>}
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
                      value={formData.numberOfParticipants}
                      onChange={handleChange}
                      min="1"
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                        errors.numberOfParticipants ? 'border-red-500' : 'border-slate-300'
                      }`}
                      placeholder="e.g., 10"
                    />
                  </div>
                  {errors.numberOfParticipants && <p className="mt-2 text-sm text-red-500">{errors.numberOfParticipants}</p>}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-amber-500" />
                Contact Person
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.contactPerson ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.contactPerson && <p className="mt-2 text-sm text-red-500">{errors.contactPerson}</p>}
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-2">
                    Role / Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.role ? 'border-red-500' : 'border-slate-300'
                    }`}
                    placeholder="e.g., Head of Engineering, HR Manager"
                  />
                  {errors.role && <p className="mt-2 text-sm text-red-500">{errors.role}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                        placeholder="your.email@company.com"
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
              </div>
            </div>

            {/* Course Details */}
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-amber-500" />
                Course Preferences
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="interestedCourse" className="block text-sm font-medium text-slate-700 mb-2">
                    Interested Course <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="interestedCourse"
                    name="interestedCourse"
                    value={formData.interestedCourse}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${
                      errors.interestedCourse ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select a course</option>
                    <option value="Course 1: High Performance Agile Leader">Course 1: High Performance Agile Leader</option>
                    <option value="Course 2: Leading Hyper-Productive Team">Course 2: Leading Hyper-Productive Team</option>
                    <option value="Both Courses">Both Courses</option>
                  </select>
                  {errors.interestedCourse && <p className="mt-2 text-sm text-red-500">{errors.interestedCourse}</p>}
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
                      value={formData.preferredDelivery}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all appearance-none ${
                        errors.preferredDelivery ? 'border-red-500' : 'border-slate-300'
                      }`}
                    >
                      <option value="">Select delivery mode</option>
                      <option value="Face-to-face">Face-to-face</option>
                      <option value="Live Virtual (Zoom) - Singapore Time (GMT+8)">Live Virtual (Zoom) - Singapore Time (GMT+8)</option>
                      <option value="Flexible - Any mode">Flexible - Any mode</option>
                    </select>
                  </div>
                  {errors.preferredDelivery && <p className="mt-2 text-sm text-red-500">{errors.preferredDelivery}</p>}
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-slate-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Any specific requirements, preferred dates, or questions..."
                  />
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
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>

              <a
                href="class-schedule.html"
                className="w-full sm:w-auto text-center bg-transparent border-2 border-slate-300 text-slate-700 px-12 py-4 rounded-lg font-medium text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
              >
                Cancel
              </a>
            </div>

            <p className="text-sm text-slate-500 text-center">
              <span className="text-red-500">*</span> Required fields
            </p>
          </motion.form>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}
