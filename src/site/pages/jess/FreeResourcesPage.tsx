import { motion } from "motion/react";
import { CTASection } from "@/site/components/jess/CTASection";
import { Book, Download, Video, FileText, Users, ExternalLink, ArrowLeft, GraduationCap, Target, Rocket, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/site/components/jess/ui/button";
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { useRef, useState } from "react";

const resources = [
  {
    title: "Scrum Guide",
    description: "The Scrum Guide contains the definition of Scrum. Each element of the framework serves a specific purpose that is essential to the overall value and results realized with Scrum.",
    icon: Download,
    type: "PDF Download",
    color: "from-blue-500 to-cyan-500",
    url: "https://scrumguides.org/download.html",
    available: true,
  },
  {
    title: "Essential Reading List",
    description: "Curated books and articles that form the foundation of high-performance agile practices.",
    icon: FileText,
    type: "Resource List",
    color: "from-purple-500 to-pink-500",
    url: "#",
    available: false,
  },
  {
    title: "Public Workshops",
    description: "Join our free webinars and workshops to learn from experts and connect with the community.",
    icon: Video,
    type: "Live & Recorded",
    color: "from-green-500 to-emerald-500",
    url: "#",
    available: false,
  },
  {
    title: "Community Forums",
    description: "Connect with practitioners worldwide, share experiences, and get answers to your questions.",
    icon: Users,
    type: "Community Access",
    color: "from-amber-500 to-orange-500",
    url: "https://www.linkedin.com/company/ciagile/",
    available: true,
  },
];

export function FreeResourcesPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 356;
    const newScrollLeft = direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <MainSiteNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-left">
            <a href="index.html" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors mb-4 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to JESS Home Page
            </a>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 w-fit mx-auto text-center">
              <Book size={16} className="text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Executive Reference Library</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">FREE Learnings for All</h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">Executive-ready insights to help you decide, align, and act — before transformation gets expensive.</p>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="mb-12 text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 max-w-2xl">Getting Started Resources</h2>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
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
                    <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">View Course</button></div>
                  </div>
                </a>
                {/* Card 2 */}
                <a href="https://education.ciagile.com/course/going-agile" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">View Course</button></div>
                  </div>
                </a>
                {/* Card 3 */}
                <a href="https://education.ciagile.com/course/startagileteam" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                    <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">View Course</button></div>
                  </div>
                </a>
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
                    <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">Download</button></div>
                  </div>
                </a>
                {/* Card 5 - Essential Reading List */}
                <div className="group bg-white rounded-2xl overflow-hidden opacity-60 cursor-not-allowed">
                  <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <FileText className="text-white/20" size={120} strokeWidth={1} />
                    <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0"><FileText className="text-white" size={18} strokeWidth={2} /></div>
                      <span className="text-slate-900 font-medium text-sm">Reading List</span>
                    </div>
                  </div>
                  <div className="p-6 pt-10">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Essential Reading List</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">Curated books and articles that form the foundation of high-performance agile practices.</p>
                    <div className="mt-6 pt-4 border-t border-slate-100"><div className="w-full py-3 text-slate-500 font-medium text-sm text-center rounded-lg border border-slate-200 bg-slate-50">Launching soon</div></div>
                  </div>
                </div>
                {/* Card 6 - Public Workshops */}
                <div className="group bg-white rounded-2xl overflow-hidden opacity-60 cursor-not-allowed">
                  <div className="relative h-48 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Video className="text-white/20" size={120} strokeWidth={1} />
                    <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0"><Video className="text-white" size={18} strokeWidth={2} /></div>
                      <span className="text-slate-900 font-medium text-sm">Workshops</span>
                    </div>
                  </div>
                  <div className="p-6 pt-10">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Public Workshops</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">Join our free webinars and workshops to learn from experts and connect with the community.</p>
                    <div className="mt-6 pt-4 border-t border-slate-100"><div className="w-full py-3 text-slate-500 font-medium text-sm text-center rounded-lg border border-slate-200 bg-slate-50">Launching soon</div></div>
                  </div>
                </div>
                {/* Card 7 - Community Forums */}
                <a href="https://www.linkedin.com/company/ciagile/" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Users className="text-white/20" size={120} strokeWidth={1} />
                    <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0"><Users className="text-white" size={18} strokeWidth={2} /></div>
                      <span className="text-slate-900 font-medium text-sm">Community</span>
                    </div>
                  </div>
                  <div className="p-6 pt-10">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Community Forums</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">Join our LinkedIn community to follow real practitioner discussions and insights.</p>
                    <div className="mt-6 pt-4 border-t border-slate-100"><button className="w-full py-3 text-blue-600 font-medium text-sm rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">Join Now</button></div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <MainSiteFooter />
    </div>
  );
}
