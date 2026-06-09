import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { MapPin, Globe } from "lucide-react";
import { JessStickyNav } from "@/site/components/jess/JessStickyNav";

export function ClassSchedulePage() {

  const course1Sessions = [
    {
      quarter: "Q3",
      quarterLabel: "July – August",
      sessions: [
        { dates: "7 & 8 July", city: "Jakarta" },
        { dates: "21 & 22 July", city: "Kuala Lumpur" },
        { dates: "6 & 7 August", city: "Bangkok" },
      ],
    },
    {
      quarter: "Q4",
      quarterLabel: "October",
      sessions: [
        { dates: "13 & 14 October", city: "Jakarta" },
        { dates: "20 & 21 October", city: "Kuala Lumpur" },
      ],
    },
  ];

  const course2Sessions = [
    { quarter: "Q3", quarterLabel: "August",   dates: "19 & 20 August",   city: "Online" },
    { quarter: "Q4", quarterLabel: "November",  dates: "18 & 19 November", city: "Online" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <MainSiteNavigation isDarkTheme />

      {/* Hero Section */}
      <section className="relative bg-slate-800 pt-24 pb-16 sm:py-20 lg:py-24 border-t-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

      <JessStickyNav activePage="class-schedule" />

      {/* Schedule Content */}
      <section className="py-16 sm:py-24 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* ── Course 1 ── */}
          <div className="mb-16">

            {/* Course 1 header */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b-2 border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Course 1 · High Performance Agile Leader</h2>
                <p className="text-slate-500 mt-1">Face-to-face · 2 days</p>
              </div>
            </div>

            {/* Course 1 quarter groups */}
            <div className="space-y-10">
              {course1Sessions.map((group) => (
                <div key={group.quarter}>
                  {/* Quarter label */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-500 text-white text-sm font-bold">
                      {group.quarter}
                    </span>
                    <span className="text-base font-medium text-slate-500">{group.quarterLabel}</span>
                  </div>

                  {/* Session cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.sessions.map((session) => (
                      <div
                        key={session.dates}
                        className="bg-gradient-to-br from-slate-50 to-white border border-blue-100 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                      >
                        <p className="text-2xl font-semibold text-slate-900 mb-2">{session.dates}</p>
                        <p className="text-slate-500">{session.city}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Full Programme Callout ── */}
          <div className="mb-16 border-l-4 border-amber-400 bg-amber-50 rounded-r-2xl px-8 py-6">
            <p className="text-slate-800 text-base sm:text-lg leading-relaxed">
              <span className="font-semibold">Most students take the full programme.</span> Choose a quarter, book Course 1 and Course 2 together — one cohort, one quarter, fully done. Individual courses are also available for those who need just one.
            </p>
          </div>

          {/* ── Course 2 ── */}
          <div className="mb-16">

            {/* Course 2 header */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b-2 border-teal-100">
              <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Course 2 · Leading Hyper-Productive Team</h2>
                <p className="text-slate-500 mt-1">Live Virtual · Zoom · Singapore Time (GMT+8)</p>
              </div>
            </div>

            {/* Course 2 cards — two side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course2Sessions.map((session) => (
                <div
                  key={session.dates}
                  className="bg-gradient-to-br from-slate-50 to-white border border-teal-100 rounded-2xl p-6 hover:border-teal-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-500 text-white text-xs font-bold">
                      {session.quarter}
                    </span>
                    <span className="text-sm font-medium text-slate-500">{session.quarterLabel}</span>
                  </div>
                  <p className="text-2xl font-semibold text-slate-900 mb-2">{session.dates}</p>
                  <p className="text-slate-500">{session.city}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Section (unchanged) ── */}
          <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Ready to Enrol?
            </h3>
            <p className="text-lg text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Classes run in small cohorts — seats are limited. Talk to a Program Advisor to confirm your preferred date and reserve your place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/bookseat.html?from=jess-class-schedule&section=enrollment-cta"
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-amber-400 transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                Book a Seat →
              </a>
            </div>
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
