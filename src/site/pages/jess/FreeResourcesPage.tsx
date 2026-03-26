import { CTASection } from "@/site/components/jess/CTASection";
import { Book, Download, FileText, GraduationCap, Target, Rocket } from "lucide-react";
import { Button } from "@/site/components/jess/ui/button";
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";

export function FreeResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <MainSiteNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-left">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 w-fit mx-auto text-center">
              <Book size={16} className="text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Executive Reference Library</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">FREE Learnings for All</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">Executive-ready insights to help you decide, align, and act — before transformation gets expensive.</p>
          </div>
        </div>
      </section>

      {/* Self-Paced Learning */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-slate-900 max-w-2xl">Self-Paced Learning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 - Learn Agile & AI */}
            <a href="https://education.ciagile.com/course/agilein30m" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <GraduationCap className="text-white/20" size={120} strokeWidth={1} />
                <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0"><GraduationCap className="text-white" size={18} strokeWidth={2} /></div>
                  <span className="text-slate-900 font-medium text-sm">Quick Learn</span>
                </div>
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Learn Agile & AI in 10 minutes</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">A fast, no-fluff overview of what Agile and AI actually change in organizations.</p>
                <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border hover:bg-blue-50 transition-colors">View Course</button></div>
              </div>
            </a>

            {/* Card 2 - Decision Guide (Coming Soon) */}
            <div className="group bg-white rounded-2xl overflow-hidden opacity-60 cursor-not-allowed">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Target className="text-white/20" size={120} strokeWidth={1} />
                <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0"><Target className="text-white" size={18} strokeWidth={2} /></div>
                  <span className="text-slate-900 font-medium text-sm">Decision Guide</span>
                </div>
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Getting Agile: Yes, No, or Not Yet</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">A decision guide to help leaders avoid premature Agile transformations.</p>
                <div className="mt-6 pt-4 border-t border-slate-100"><div className="w-full py-3 text-slate-500 font-medium text-sm text-center rounded-lg border border-slate-200 bg-slate-50">Coming Soon</div></div>
              </div>
            </div>

            {/* Card 3 - Quick Start (Coming Soon) */}
            <div className="group bg-white rounded-2xl overflow-hidden opacity-60 cursor-not-allowed">
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Rocket className="text-white/20" size={120} strokeWidth={1} />
                <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0"><Rocket className="text-white" size={18} strokeWidth={2} /></div>
                  <span className="text-slate-900 font-medium text-sm">Quick Start</span>
                </div>
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Start Your Agile Team in 150 minutes</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">A practical starting point to align teams early and reduce execution chaos.</p>
                <div className="mt-6 pt-4 border-t border-slate-100"><div className="w-full py-3 text-slate-500 font-medium text-sm text-center rounded-lg border border-slate-200 bg-slate-50">Coming Soon</div></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Official Guides */}
      <section className="py-16 lg:py-20 px-6 lg:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-slate-900 max-w-2xl">Official Guides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 4 - Scrum Guide */}
            <a href="https://scrumguides.org/download.html" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Download className="text-white/20" size={120} strokeWidth={1} />
                <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0"><Download className="text-white" size={18} strokeWidth={2} /></div>
                  <span className="text-slate-900 font-medium text-sm">Official Guide</span>
                </div>
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Scrum Guide</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">The official rules of Scrum — so leadership decisions reinforce the system.</p>
                <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border hover:bg-blue-50 transition-colors">Download</button></div>
              </div>
            </a>

            {/* Card 5 - Scrum@Scale Guide */}
            <a href="https://www.scrumatscale.com/scrum-at-scale-guide/" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Download className="text-white/20" size={120} strokeWidth={1} />
                <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0"><Download className="text-white" size={18} strokeWidth={2} /></div>
                  <span className="text-slate-900 font-medium text-sm">Official Guide</span>
                </div>
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Scrum@Scale Guide</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">The official Scrum@Scale guide — the complete framework for scaling Scrum across your organization.</p>
                <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border hover:bg-blue-50 transition-colors">Download Guide</button></div>
              </div>
            </a>

            {/* Card 6 - Agile Manifesto */}
            <a href="https://agilemanifesto.org/" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <FileText className="text-white/20" size={120} strokeWidth={1} />
                <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0"><FileText className="text-white" size={18} strokeWidth={2} /></div>
                  <span className="text-slate-900 font-medium text-sm">Agile Manifesto</span>
                </div>
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Agile Manifesto</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">Read the foundational principles and values that define agile software development.</p>
                <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border hover:bg-blue-50 transition-colors">Read Manifesto</button></div>
              </div>
            </a>

          </div>
        </div>
      </section>

      <CTASection />
      <MainSiteFooter />
    </div>
  );
}
