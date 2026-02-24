import { motion } from "motion/react";
import { Book, FileText, Award, Video } from "lucide-react";
import { Button } from "@/site/components/jess/ui/button";

interface ResourcesSectionProps {
  theme?: 'dark' | 'light';
}

export function ResourcesSection({ theme = 'dark' }: ResourcesSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === 'dark';

  return (
    <section className={`py-32 px-4 sm:px-6 lg:px-8 relative border-t ${isDark ? '' : 'border-slate-200 bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`${isDark ? 'text-center' : ''} mb-16`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl sm:text-5xl mb-4 tracking-tight ${isDark ? 'font-bold text-white text-center' : 'font-light text-slate-900'}`}>
              Resources & Learning Materials
            </h2>
            <p className={`text-lg leading-relaxed max-w-3xl ${isDark ? 'text-slate-400 mx-auto text-center' : 'text-slate-600 font-light'}`}>
              Comprehensive resources to support your transformation journey
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Books */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 ${isDark ? 'rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700' : 'rounded-sm bg-slate-50 border border-slate-200'}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30' : 'bg-slate-200 border border-slate-300'}`}>
                <Book className={isDark ? 'text-blue-400' : 'text-slate-700'} size={24} />
              </div>
              <h3 className={`text-2xl ${isDark ? 'font-bold text-white' : 'font-light text-slate-900'}`}>Essential Reading</h3>
            </div>

            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                <h4 className={`mb-2 ${isDark ? 'font-semibold text-white' : 'font-medium text-slate-900'}`}>Scrum: The Art of Doing Twice the Work in Half the Time</h4>
                <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600 font-light'}`}>
                  The revolutionary method behind many of the world's most successful companies
                </p>
                <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  <span className={`px-2 py-1 rounded ${isDark ? 'bg-slate-500/10 text-slate-400' : 'bg-slate-100 text-slate-600 border border-slate-300'}`}>Wall Street Journal Bestseller</span>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                <h4 className={`mb-2 ${isDark ? 'font-semibold text-white' : 'font-medium text-slate-900'}`}>The Scrum@Scale Guide</h4>
                <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600 font-light'}`}>
                  The official guide to implementing Scrum at scale in your organization
                </p>
                <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  <a
                    href="https://www.scrumatscale.com/wp-content/uploads/2020/12/official-scrum-at-scale-guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2 py-1 rounded transition-colors ${isDark ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'}`}
                  >
                    Free Download
                  </a>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                <h4 className={`mb-2 ${isDark ? 'font-semibold text-white' : 'font-medium text-slate-900'}`}>The Scrum Fieldbook</h4>
                <p className={`text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-slate-600 font-light'}`}>
                  A Master Class on Accelerating Performance, Getting Results, and Defining the Future
                </p>
                <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                  <span className={`px-2 py-1 rounded ${isDark ? 'bg-slate-500/10 text-slate-400' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>Bestseller</span>
                  <span>Practical Implementation Guide</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`p-8 ${isDark ? 'rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700' : 'rounded-sm bg-slate-50 border border-slate-200'}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30' : 'bg-slate-200 border border-slate-300'}`}>
                <Award className={isDark ? 'text-blue-400' : 'text-slate-700'} size={24} />
              </div>
              <h3 className={`text-2xl ${isDark ? 'font-bold text-white' : 'font-light text-slate-900'}`}>Certifications</h3>
            </div>

            <div className="mb-6">
              <img
                src="https://i.postimg.cc/fknZJpVR/Asia-teams-received-professional-certification-happy-celebrating.jpg"
                alt="Teams celebrating professional certification achievement"
                className={`w-full h-64 object-cover ${isDark ? 'rounded-lg' : 'rounded-sm'}`}
              />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className={`mb-2 ${isDark ? 'font-semibold text-white' : 'font-medium text-slate-900'}`}>Holistic Knowledge With Comprehensive Credentials</h4>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600 font-light'}`}>
                  Our leadership course offers THREE internationally-acclaimed Scrum+AI credentials. Improve the work process of the Scrum Master, Product Owner, Team, and Multi-Team (Scaling) with AI.
                </p>
                <ul className={`mt-3 space-y-2 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600 font-light'}`}>
                  <li className="flex items-start">
                    <span className="mr-2">{'\u2022'}</span>
                    <span>Registered Scrum Master <sup className="text-[10px]">TM</sup></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">{'\u2022'}</span>
                    <span>Registered Product Owner <sup className="text-[10px]">TM</sup></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">{'\u2022'}</span>
                    <span>Registered Scrum@Scale Fundamentals <sup className="text-[10px]">TM</sup></span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
