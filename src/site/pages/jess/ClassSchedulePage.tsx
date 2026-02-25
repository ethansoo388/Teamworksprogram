import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { Calendar, MapPin, Globe } from "lucide-react";

export function ClassSchedulePage() {

  const scheduleData = [
    {
      month: "April 2026",
      courses: [
        { location: "Indonesia", type: "Course 1", dates: "7th and 8th", icon: <MapPin className="w-5 h-5" /> },
        { location: "Malaysia", type: "Course 1", dates: "21st and 22nd", icon: <MapPin className="w-5 h-5" /> },
      ]
    },
    {
      month: "May 2026",
      courses: [
        { location: "All countries - online", type: "Course 2", dates: "20th and 21st", icon: <Globe className="w-5 h-5" /> },
      ]
    },
    {
      month: "July 2026",
      courses: [
        { location: "Indonesia", type: "Course 1", dates: "8th and 9th", icon: <MapPin className="w-5 h-5" /> },
        { location: "Malaysia", type: "Course 1", dates: "21st and 22nd", icon: <MapPin className="w-5 h-5" /> },
      ]
    },
    {
      month: "August 2026",
      courses: [
        { location: "All countries - online", type: "Course 2", dates: "19th and 20th", icon: <Globe className="w-5 h-5" /> },
      ]
    },
    {
      month: "October 2026",
      courses: [
        { location: "Indonesia", type: "Course 1", dates: "14th and 15th", icon: <MapPin className="w-5 h-5" /> },
        { location: "Malaysia", type: "Course 1", dates: "20th and 21st", icon: <MapPin className="w-5 h-5" /> },
      ]
    },
    {
      month: "November 2026",
      courses: [
        { location: "All countries - online", type: "Course 2", dates: "18th and 19th", icon: <Globe className="w-5 h-5" /> },
      ]
    },
  ];

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
            <span className="text-white font-medium relative pb-1 border-b-2 border-amber-500">Class Schedule</span>
          </div>

          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
            Available Sessions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-white tracking-tight leading-[1.43]">
            2-Day Course Training Schedule
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl">
            Choose your preferred training date and location for the Jeff Enterprise Scrum System (JESS) program — a two-course Leadership & Execution pathway.
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

            <span className="relative py-4 text-sm sm:text-base font-medium text-slate-900">
              Class Schedule
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B]"></div>
            </span>

            <a
              href="individual-enrollment.html"
              className="group relative py-4 text-sm sm:text-base font-medium transition-colors text-slate-600 hover:text-slate-900"
            >
              Enrollment
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </nav>
        </div>
      </div>

      {/* Schedule Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Horizontal Quarter Timeline - Top */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex items-center justify-center gap-4 sm:gap-8 min-w-max mx-auto pb-4">
              {/* Q2 - Blue */}
              <a href="#april-2026"
                
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xs sm:text-sm">Q2</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 sm:w-20 bg-blue-500"></div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium whitespace-nowrap">
                    Apr - May
                  </div>
                </div>
              </a>

              {/* Connector */}
              <div className="h-0.5 w-8 sm:w-16 bg-slate-300"></div>

              {/* Q3 - Emerald */}
              <a href="#july-2026"
                
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xs sm:text-sm">Q3</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 sm:w-20 bg-emerald-500"></div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium whitespace-nowrap">
                    Jul - Aug
                  </div>
                </div>
              </a>

              {/* Connector */}
              <div className="h-0.5 w-8 sm:w-16 bg-slate-300"></div>

              {/* Q4 - Purple */}
              <a href="#october-2026"
                
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-xs sm:text-sm">Q4</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 sm:w-20 bg-purple-500"></div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium whitespace-nowrap">
                    Oct - Nov
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Schedule Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {scheduleData.map((monthData, index) => {
              // Determine quarter and color based on month
              const getQuarterInfo = (month: string) => {
                const monthName = month.split(' ')[0].toLowerCase();
                if (['april', 'may'].includes(monthName)) return { quarter: 'Q2', color: 'blue' };
                if (['july', 'august'].includes(monthName)) return { quarter: 'Q3', color: 'emerald' };
                if (['october', 'november'].includes(monthName)) return { quarter: 'Q4', color: 'purple' };
                return { quarter: '', color: 'amber' };
              };

              // Generate ID from month
              const monthId = monthData.month.toLowerCase().replace(' ', '-');

              const quarterInfo = getQuarterInfo(monthData.month);

              return (
              <div
                key={monthData.month}
                id={monthId}
                className={`bg-gradient-to-br from-slate-50 to-white border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 scroll-mt-32 ${
                  quarterInfo.color === 'blue' ? '/30 hover:' :
                  quarterInfo.color === 'emerald' ? 'border-emerald-500/30 hover:border-emerald-500' :
                  quarterInfo.color === 'purple' ? 'border-purple-500/30 hover:border-purple-500' :
                  'border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className={`w-6 h-6 ${
                      quarterInfo.color === 'blue' ? 'text-blue-500' :
                      quarterInfo.color === 'emerald' ? 'text-emerald-500' :
                      quarterInfo.color === 'purple' ? 'text-purple-500' :
                      'text-amber-500'
                    }`} />
                    <h2 className="text-2xl sm:text-3xl font-light text-slate-900">
                      {monthData.month}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {monthData.courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-500 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 text-blue-600">
                          {course.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col gap-1 mb-2">
                            <h3 className="text-lg font-medium text-slate-900">
                              {course.location === "Malaysia" ? "Malaysia, Kuala Lumpur - Face-to-face" :
                               course.location === "Indonesia" ? "Indonesia, Jakarta - Face-to-face" :
                               course.location === "All countries - online" ? "Live Virtual (Zoom) – Singapore Time (GMT+8)" :
                               course.location}
                            </h3>
                            <div className="text-slate-600 font-light">
                              {course.type === "Course 1" ? "Course 1 - High Performance Agile Leader" : "Course 2 - Leading Hyper-Productive Team"}
                            </div>
                          </div>
                          <p className="text-slate-700">
                            {course.dates}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div
            className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-center"
          >
            <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-lg text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Secure your spot in one of our upcoming sessions and start your journey with the Jeff Enterprise Scrum System.
            </p>

            {/* Primary and Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/contactus.html?source=jess-class-schedule&cta=request-corporate-proposal#contact-form"
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                Request Corporate Proposal
              </a>

              <a
                href="/jess/individual-enrollment.html?source=jess-class-schedule&cta=view-enrollment-options"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-slate-400 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-slate-700 hover:border-slate-300 transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                View Enrollment Options
              </a>
            </div>

            {/* WhatsApp Link */}
            <div className="mt-4">
              <a
                href="https://wa.me/60192981055"
                className="text-sm text-slate-400 hover:text-slate-200 underline transition-colors duration-300"
              >
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <MainSiteFooter />
    </div>
  );
}
