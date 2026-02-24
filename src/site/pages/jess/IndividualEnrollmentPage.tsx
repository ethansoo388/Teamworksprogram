import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { Calendar, MapPin, Clock, Award, DollarSign } from "lucide-react";

export function IndividualEnrollmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation />

      {/* Hero Section */}
      <section className="relative bg-slate-800 py-16 sm:py-20 lg:py-24 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-3 text-base mb-8">
            <a
              href="leadership-training.html"
              className="text-slate-300 hover:text-white transition-colors relative pb-1 border-b border-transparent hover:border-slate-300"
            >
              Leadership Training
            </a>
            <span className="text-slate-400">›</span>
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Registration</span>
          </div>

          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
            Register for JESS Courses
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            Choose Your Pathway
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl">
            Complete one course or both for full-system mastery.
          </p>
        </div>
      </section>

      {/* Sticky Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex gap-8 sm:gap-12">
            <a
              href="leadership-training.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Overview
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="course-modules.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Course Modules
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="instructor.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Instructor
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <a
              href="class-schedule.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Class Schedule
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            <span className="relative py-4 text-sm sm:text-base font-medium text-slate-900">
              Enrollment
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"></div>
            </span>
          </nav>
        </div>
      </div>

      {/* Course Options Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Option A - Course 1 */}
            <div
              className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 hover:border-amber-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Option A</div>
                  <h2 className="text-2xl font-light text-slate-900">
                    Course 1 – High Performance Agile Leader
                  </h2>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Dates</div>
                    <div className="text-sm text-slate-600">Multiple sessions available - view schedule</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Delivery Mode</div>
                    <div className="text-sm text-slate-600">Onsite / In-person</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Duration</div>
                    <div className="text-sm text-slate-600">2 days intensive training</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Certification</div>
                    <div className="text-sm text-slate-600">Registered Scrum@Scale Fundamentals</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Price</div>
                    <div className="text-2xl font-light text-slate-900">USD 1,250</div>
                  </div>
                </div>
              </div>

              <a
                href="individual-enrollment-form.html"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-colors duration-300"
              >
                Enroll in Course 1
              </a>
            </div>

            {/* Option B - Course 2 */}
            <div
              className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-8 hover:border-amber-500 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Option B</div>
                  <h2 className="text-2xl font-light text-slate-900">
                    Course 2 – Hyper-Productive Scrum Team
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">(RSM / RPO)</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Dates</div>
                    <div className="text-sm text-slate-600">Multiple sessions available - view schedule</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Delivery Mode</div>
                    <div className="text-sm text-slate-600">Online Virtual - Singapore time (GMT+8)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Duration</div>
                    <div className="text-sm text-slate-600">2 days intensive training</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Single Credential Information</div>
                    <div className="text-sm text-slate-600">Registered Scrum Master or Registered Product Owner</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-700 mb-1">Price</div>
                    <div className="text-2xl font-light text-slate-900">USD 1,000</div>
                  </div>
                </div>
              </div>

              <a
                href="individual-enrollment-form.html"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-colors duration-300"
              >
                Enroll in Course 2
              </a>
            </div>
          </div>

          {/* Option C - Bundle (Full Width) */}
          <div
            className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-400 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 px-6 py-2 text-sm font-medium">
              RECOMMENDED
            </div>

            <div className="max-w-4xl">
              <div className="mb-6">
                <div className="text-sm font-medium text-amber-700 uppercase tracking-wider mb-2">
                  Option C
                </div>
                <h2 className="text-3xl font-light text-slate-900 mb-3">
                  Bundle: Course 1 + Course 2
                </h2>
                <p className="text-lg text-slate-700 font-light">
                  Complete JESS Pathway
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-3">Combined Benefits</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Full leadership transformation framework</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Master both organizational and team-level agility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Ideal for leaders preparing for transformation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>All certifications included (3 credentials)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-700 mb-3">Special Bundle Price</h3>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl text-slate-400 line-through">USD 2,250</span>
                    <span className="text-4xl font-light text-slate-900">USD 2,000</span>
                  </div>
                  <p className="text-sm text-green-700 font-medium">Save USD 250 when you enroll in the full JESS Enterprise Agility System.</p>

                  <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-600 italic">
                      Taking both courses equips you to design leadership alignment and activate hyper-productive teams — creating true transformation readiness, not isolated improvement.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="individual-enrollment-form.html"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 px-12 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-colors duration-300"
              >
                Enroll in Full JESS Pathway
              </a>
            </div>
          </div>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}
