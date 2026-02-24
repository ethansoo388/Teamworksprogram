import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { CTASection } from "@/site/components/jess/CTASection";
import { Briefcase, CheckCircle2, TrendingUp, Users, Target, Zap, ArrowLeft } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Discovery & Assessment",
    duration: "1-2 months",
    description: "Deep dive into your organization to understand current state, challenges, and opportunities.",
    deliverables: [
      "Comprehensive organizational assessment",
      "Current state analysis and pain points",
      "Stakeholder interviews and workshops",
      "Initial roadmap recommendations",
    ],
  },
  {
    phase: "Phase 2",
    title: "Design & Planning",
    duration: "1-2 months",
    description: "Create a customized transformation roadmap aligned with your business objectives.",
    deliverables: [
      "Detailed transformation roadmap",
      "Framework customization plan",
      "Training and enablement strategy",
      "Success metrics and KPIs",
    ],
  },
  {
    phase: "Phase 3",
    title: "Implementation",
    duration: "3-6 months",
    description: "Roll out the transformation with hands-on support and guidance.",
    deliverables: [
      "Pilot team implementation",
      "Coaching and mentoring",
      "Process optimization",
      "Scaled rollout across teams",
    ],
  },
  {
    phase: "Phase 4",
    title: "Optimization & Scaling",
    duration: "3-8 months",
    description: "Continuously improve and scale practices across the entire organization.",
    deliverables: [
      "Performance monitoring and tuning",
      "Scaling to additional teams",
      "Advanced coaching",
      "Sustainability planning",
    ],
  },
];

const benefits = [
  {
    icon: Target,
    title: "Customized Solutions",
    description: "No cookie-cutter approaches. We design solutions specifically for your organization's unique context.",
  },
  {
    icon: Users,
    title: "Embedded Partnership",
    description: "Our consultants work alongside your teams, not just advise from the sidelines.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of successful transformations at Fortune 500 companies and enterprises.",
  },
  {
    icon: Zap,
    title: "Rapid Value Delivery",
    description: "See measurable improvements within the first 90 days of engagement.",
  },
];

export function EnterpriseConsultingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <MainSiteNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <a
              href="/jess/index.html"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to JESS Home Page
            </a>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6 mx-auto w-fit">
              <Briefcase size={16} className="text-green-400" />
              <span className="text-sm font-medium text-green-400">Bringing Business to Next Level</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Enterprise Consulting
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Our consultants embed with your organization to design, implement, and optimize your transformation journey. 
              We don't just advise—we roll up our sleeves and work alongside you to deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Why Choose Our Consulting Services
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Partner with experts who have successfully guided hundreds of enterprise transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-900/40 border border-slate-700/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Phases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Our Engagement Approach
            </h2>
            <p className="text-slate-400">
              A structured, proven methodology that adapts to your organization's unique needs and pace.
            </p>
          </div>

          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-900/40 border border-slate-700/50 hover:border-slate-600 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-green-400">{phase.phase}</span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-xs text-slate-500">{phase.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-slate-400 mb-6">{phase.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        Key Deliverables
                      </p>
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
              What's Included
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">🎯 Strategic Planning</h4>
                <p className="text-sm text-slate-400">
                  Comprehensive roadmap aligned with business objectives and organizational capacity.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">🤝 Hands-On Coaching</h4>
                <p className="text-sm text-slate-400">
                  Direct coaching for teams, leaders, and stakeholders at all levels of the organization.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">📊 Metrics & Reporting</h4>
                <p className="text-sm text-slate-400">
                  Customized dashboards and regular reports to track progress and demonstrate ROI.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">🔧 Framework Customization</h4>
                <p className="text-sm text-slate-400">
                  Adapt proven frameworks to fit your organization's unique structure and culture.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">🎓 Training Programs</h4>
                <p className="text-sm text-slate-400">
                  Comprehensive training for all roles, from executives to individual contributors.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">🚀 Change Management</h4>
                <p className="text-sm text-slate-400">
                  Expert guidance on managing organizational change and building sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
              Ideal For Organizations That
            </h2>
            
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  Have <strong className="text-white">50+ teams</strong> or are planning to scale agile practices enterprise-wide
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  Need <strong className="text-white">hands-on support</strong> throughout the transformation journey
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  Want <strong className="text-white">customized solutions</strong> tailored to their unique context and challenges
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  Require <strong className="text-white">measurable ROI</strong> and business impact from their transformation
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">
                  Have <strong className="text-white">complex dependencies</strong> across multiple teams and departments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <MainSiteFooter />
    </div>
  );
}