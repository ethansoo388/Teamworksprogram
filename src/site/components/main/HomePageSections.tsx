/**
 * HomePageSections.tsx
 * Updated landing page design ported from CI Agile Main_GerseneCodeForMerge.
 *
 * Static-export rules:
 *  - No React Router, no client-side navigation, no React state for UI toggles
 *  - No lucide-react imports (Lucide loaded via CDN; lucide.createIcons() in main.js)
 *  - All interactive behaviours (mobile menu, dropdowns) handled by main.js via data attributes
 *  - External Unsplash/postimg images are allowed (per design source)
 *  - Local assets used for logos
 *
 * Preserved exports:
 *  - HomePage        → used by IndexPage.tsx
 *  - MainSiteFooter  → re-exported by MainSiteFooter.tsx
 *  - Navigation      → NOT exported here; MainSiteNavigation is its own component
 */

import ciAgileLogoWhite from "@/assets/img/main/ci-agile-logo-white.png";
import ciAgileLogoDark from "@/assets/img/main/ciagile-main-logo-dark.webp";
import presenterImage from "@/assets/img/main/ciagile-home-hero-presenter-flipchart.webp";
import agileTeamImage from "@/assets/img/main/ciagile-home-programs-sticky-wall-collaboration.webp";
import businessPresentationImage from "@/assets/img/main/ciagile-home-programs-enterprise-presentation.webp";

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative pt-16 pb-0 bg-white">
      <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[500px] lg:min-h-[600px]">
        {/* Left — Content */}
        <div className="px-6 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] text-gray-900 mb-6">
            Deliver Better Results
            <span className="block font-normal text-gray-900 mt-2">Faster, Clearer, At Scale</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 font-light max-w-xl">
            Turn your business challenges into real results. We help you fix missed opportunities,
            energize frustrated teams, and overcome transformation fatigue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contactus.html"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-normal text-base h-12 px-8 transition-colors"
            >
              Talk to an Expert
              {/* Lucide arrow-right via CDN */}
              <i data-lucide="arrow-right" className="w-[18px] h-[18px]"></i>
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 font-normal text-base h-12 px-8 transition-colors"
            >
              View Our Programs
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-1">500+</div>
              <div className="text-xs text-gray-500 font-normal uppercase tracking-wider">Organizations</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-1">15+</div>
              <div className="text-xs text-gray-500 font-normal uppercase tracking-wider">Years</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-1">98%</div>
              <div className="text-xs text-gray-500 font-normal uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Right — Hero Image */}
        <div className="relative h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-gray-100">
          <img
            src={presenterImage}
            alt="CI Agile training and consulting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:from-transparent"></div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Client Logos — infinite scroll strip (CSS animation in style.css)
// ---------------------------------------------------------------------------
function ClientLogosSection() {
  const clients = [
    { name: "AIS",                 industry: "Telecommunications", logo: "/assets/img/main/logo-ais.webp" },
    { name: "Axon Thai",           industry: "Technology",         logo: "/assets/img/main/logo-axon.webp" },
    { name: "Bank of China",       industry: "Banking",            logo: "/assets/img/main/logo-bank-of-china.png" },
    { name: "Bank Negara Malaysia", industry: "Government",        logo: "/assets/img/main/logo-bank-negara-malaysia.webp" },
    { name: "CIMB Thai",           industry: "Banking",            logo: "/assets/img/main/logo-cimb.webp" },
    { name: "Cisco",               industry: "Technology",         logo: "/assets/img/main/logo-cisco.webp" },
    { name: "DBS",                 industry: "Banking",            logo: "/assets/img/main/logo-dbs.webp" },
    { name: "GovTech Singapore",   industry: "Government",         logo: "/assets/img/main/logo-govtech-singapore.webp" },
    { name: "HSBC",                industry: "Banking",            logo: "/assets/img/main/logo-hsbc.webp" },
    { name: "Infineon",            industry: "Technology",         logo: "/assets/img/main/logo-infineon.webp" },
    { name: "Shell",               industry: "Energy",             logo: "/assets/img/main/logo-shell.webp" },
    { name: "Sinar Mas",           industry: "Conglomerate",       logo: "/assets/img/main/logo-sinar-mas.webp" },
    { name: "ZTE",                 industry: "Telecommunications", logo: "/assets/img/main/logo-zte.webp" },
  ];

  return (
    <section className="py-24 bg-white border-t border-b border-gray-100">
      <div className="w-full">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 px-6">
          <p className="text-xs font-normal text-gray-400 mb-3 uppercase tracking-[0.2em]">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight">
            Transforming organizations<br className="hidden sm:block" /> across Asia Pacific
          </h2>
        </div>

        {/* Scrolling logo strip — animation defined in style.css */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-16"
            style={{ animation: "scroll 40s linear infinite", width: "fit-content" }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: "180px" }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 md:max-h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Problem Section
// ---------------------------------------------------------------------------
function ProblemSection() {
  const problems = [
    {
      number: "01",
      title: "Missed Opportunities",
      description: "Critical business opportunities slipping through inefficient processes and lack of agility.",
    },
    {
      number: "02",
      title: "Frustrated Teams",
      description: "Teams struggling with unclear priorities, poor collaboration, and outdated methodologies.",
    },
    {
      number: "03",
      title: "Transformation Fatigue",
      description: "Failed transformation initiatives leading to burnout, skepticism, and resistance to change.",
    },
  ];

  return (
    <section className="py-24 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">Challenges We Solve</h2>
          <p className="text-lg text-gray-600 max-w-3xl font-light">
            Organizations face common roadblocks that prevent them from achieving their full potential.
            We help you overcome these challenges.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {problems.map((p) => (
            <div key={p.number} className="border-t-2 border-gray-900 pt-6">
              <div className="text-sm text-gray-400 mb-4 font-light">{p.number}</div>
              <h3 className="text-xl font-normal mb-4 text-gray-900">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// CI Agile Difference (formerly CTASection) — static version of interactive accordion
// All 4 items displayed; no React state needed
// ---------------------------------------------------------------------------
function DifferenceSection() {
  const items = [
    {
      num: "01",
      title: "Proven Delivery Systems That Scale",
      description: "Frameworks adapted to enterprise operating requirements",
    },
    {
      num: "02",
      title: "Operating Models Built for Execution",
      description: "Governance and structures designed for decision clarity",
    },
    {
      num: "03",
      title: "AI Embedded Into Everyday Work",
      description: "Technology applied where it improves speed and quality",
    },
    {
      num: "04",
      title: "Experience from Complex, Real Enterprises",
      description: "500+ engagements across regulated industries and global operations",
    },
  ];

  return (
    <section className="py-32 px-8 lg:px-16 bg-[#F7F9F8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Content */}
          <div className="max-w-lg">
            <h2 className="text-5xl font-light text-gray-900 mb-6 leading-tight">The CI Agile Difference</h2>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-12">
              We help organizations execute delivery systems that produce measurable business outcomes.
            </p>
            <div className="space-y-2 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              {items.map((item) => (
                <div
                  key={item.num}
                  className="w-full text-left pl-8 pr-6 py-6 relative bg-white border-l-2 border-gray-200 hover:border-gray-900 hover:bg-white transition-all"
                >
                  <div className="absolute left-3 top-6 text-xs font-light text-gray-400">{item.num}</div>
                  <h3 className="text-base font-normal mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm font-light leading-relaxed text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <img
              src="/assets/img/main/main-home-professional-team-collaboration.webp"
              alt="Professional team collaboration"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Programs Section — uses local assets
// ---------------------------------------------------------------------------
function ProgramsSection() {
  const programs = [
    {
      title: "TeamWorks Program",
      target: "For Teams & SMEs",
      tagline: "Make your team work better. Faster. Together.",
      description:
        "Teams fail when work is unclear and priorities shift constantly. TeamWorks cuts through the chaos—helping your team focus on what matters, collaborate seamlessly, and deliver without burnout.",
      image: agileTeamImage,
      features: ["Agile fundamentals", "Team collaboration", "Delivery optimization", "Continuous improvement"],
      // Use absolute paths so links resolve correctly from nested pages (e.g., /jess/*)
      link: "/teamworks/index.html",
    },
    {
      title: "Enterprise Execution & Transformation",
      target: "For Enterprises",
      tagline: "Turn strategy into execution — at scale.",
      description:
        "Big ideas don't fail. Execution does. This program aligns leadership and teams, fixes slow delivery, and leverages AI to accelerate decision-making and outcomes at scale.",
      image: businessPresentationImage,
      features: ["Executive alignment", "Operating model design", "AI enablement", "Scale transformation"],
      // Use absolute paths so links resolve correctly from nested pages (e.g., /jess/*)
      link: "/jess/index.html?source=main-home&cta=enterprise-learn-more",
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 text-gray-900">Programs</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl font-light">
            We work with organizations from SMEs to global enterprises. Programs are designed for specific operating
            contexts and team sizes.
          </p>
        </div>

        <div className="space-y-8 md:space-y-0">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-0 items-center bg-white mb-0 ${index % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div className={`relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 ${index % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`p-6 md:p-10 lg:p-16 ${index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="mb-3 md:mb-4">
                  <span className="text-xs font-normal text-gray-400 uppercase tracking-widest">
                    {program.target}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light mb-3 md:mb-4 text-gray-900">
                  {program.title}
                  {index === 1 && (
                    <div className="text-xs md:text-sm font-light text-gray-500 mt-2">
                      Powered by the Nova Program and Jeff's Enterprise Scrum System (JESS)
                    </div>
                  )}
                </h3>
                <p className="text-lg md:text-xl font-light text-gray-700 mb-4 md:mb-6 border-l-2 border-gray-900 pl-3 md:pl-4">
                  {program.tagline}
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8 font-light">
                  {program.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                  {program.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-900 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 font-light">{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={program.link}
                  className="inline-flex items-center gap-2 text-gray-900 font-normal hover:gap-3 transition-all text-sm border-b border-gray-900 pb-1"
                >
                  Learn More
                  <i data-lucide="arrow-right" className="w-4 h-4"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// How We Work Section
// ---------------------------------------------------------------------------
function HowWeWorkSection() {
  const steps = [
    {
      title: "Diagnose the Real Problem",
      description:
        "We start with what truly matters. We align on outcomes, constraints, and real business context — not pre-packaged frameworks.",
      image: "/assets/img/main/main-home-diagnose-the-real-problem.webp",
    },
    {
      title: "Design the Right System",
      description:
        "Built for how your organization actually works. Operating models, governance, ways of working, and AI enablement tailored to your reality.",
      image: "/assets/img/main/main-home-design-the-right-system.webp",
    },
    {
      title: "Enable Teams & Execution",
      description:
        "Change that sticks, not theory. We work with leaders and teams on the ground to embed new ways of working into daily execution.",
      image: "/assets/img/main/main-home-enable-teams-execution.webp",
    },
    {
      title: "Deliver Measurable Results",
      description:
        "Results you can see and sustain. Clear metrics, faster flow, better decisions, and outcomes that matter to the business.",
      image: "/assets/img/main/people-deliver-measurable-results.webp",
    },
  ];

  return (
    <section id="methodology" className="py-32 px-8 lg:px-16 bg-[#1A2837]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-light">Our Methodology</p>
        </div>
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight max-w-4xl mx-auto">
            How We Deliver Results
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0D1F2D] overflow-hidden hover:bg-[#152838] transition-colors"
            >
              <div className="h-48 relative bg-gradient-to-br from-[#1E3A52] to-[#0D2B3C] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-normal text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Industries Section
// ---------------------------------------------------------------------------
function IndustriesSection() {
  const industries = [
    {
      title: "Banking & Financial Services",
      description: "Accelerate digital transformation while maintaining compliance and security.",
    },
    {
      title: "Government & GLC",
      description: "Modernize public sector operations with proven agile frameworks.",
    },
    {
      title: "Technology & Product Teams",
      description: "Build innovative products faster with agile best practices.",
    },
    {
      title: "Corporate Operations & Shared Services",
      description: "Optimize operations and drive efficiency across the organization.",
    },
  ];

  return (
    <section id="industries" className="py-24 px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">Industries We Transform</h2>
          <p className="text-lg text-gray-600 max-w-3xl font-light">
            Deep expertise across diverse sectors, delivering tangible business results
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {industries.map((ind, i) => (
            <div key={i} className="border-l-2 border-gray-300 pl-8 hover:border-gray-900 transition-colors">
              <h3 className="text-xl font-normal mb-4 text-gray-900">{ind.title}</h3>
              <p className="text-gray-600 leading-relaxed font-light">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Proven Results + Testimonials
// ---------------------------------------------------------------------------
function ProvenResultsSection() {
  const results = [
    { metric: "40%",      label: "Faster Time-to-Market" },
    { metric: "60%",      label: "Team Productivity Boost" },
    { metric: "3 Months", label: "To Measurable Impact" },
    { metric: "98%",      label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      quote:
        "Agile isn't just a framework — it's a mindset shift. This program changed how we think about work, delivery, and results. Practical, empowering, and immediately applicable to real teams.",
      author: "Head of Digital Services",
      company: "POS Aviation",
    },
    {
      quote:
        "This program reframed change and uncertainty as a competitive advantage. The training delivered practical insights, hands-on exercises, and clear ways to help organizations navigate complexity and perform better.",
      author: "General Manager",
      company: "Malaysia Airport",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Metrics */}
      <div className="relative py-16 md:py-24 lg:py-32 px-8 lg:px-16 bg-[#0A1929] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-[#0066CC]"></div>
          <div className="absolute bottom-40 left-40 w-64 h-64 bg-[#0066CC]/30 blur-3xl"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right,rgba(0,102,204,0.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,102,204,0.08) 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4 md:mb-6 leading-tight">
                Proven Results
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed">
                Real outcomes from real organizations. Our clients consistently achieve measurable improvements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:pr-8 xl:pr-16">
              {results.map((r, i) => (
                <div key={i} className="relative">
                  {i % 2 === 0 && (
                    <div className="absolute top-0 right-0 w-px h-full bg-[#0088FF]/30"></div>
                  )}
                  {i < 2 && (
                    <div className="absolute bottom-0 left-0 w-full h-px bg-[#0088FF]/30"></div>
                  )}
                  <div className="pr-4 pb-4 md:pr-6 md:pb-6 lg:pr-8 lg:pb-8">
                    <div
                      className={
                        r.metric === "3 Months"
                          ? "font-light mb-2 md:mb-3 text-[#2B9BF4] whitespace-nowrap leading-none text-[clamp(1.75rem,5.2vw,4.5rem)]"
                          : "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-2 md:mb-3 text-[#2B9BF4] whitespace-nowrap"
                      }
                    >
                      {r.metric === "3 Months" ? (
                        <>
                          3 <span className="text-[0.5em]">Months</span>
                        </>
                      ) : (
                        r.metric
                      )}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 font-light uppercase tracking-wide">
                      {r.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-16">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="border-l-2 border-gray-300 pl-8">
                <p className="text-gray-700 text-base leading-relaxed mb-8 font-light italic">"{t.quote}"</p>
                <div className="pt-6 border-t border-gray-200">
                  <div className="font-normal text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-500 font-light">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Final CTA Section
// ---------------------------------------------------------------------------
function FinalCTASection() {
  return (
    <section className="py-32 px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-1 bg-gray-800 text-gray-300 text-xs uppercase tracking-widest mb-8">
            Get Started Today
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-lg text-gray-300 font-light mb-12 max-w-2xl mx-auto">
            Join 500+ organizations that have transformed their delivery and business outcomes with our proven
            methodology.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 mb-16 max-w-3xl mx-auto">
          <div className="text-center px-8 py-6 border-r border-gray-700/50">
            <div className="font-normal text-white mb-2 text-base">Free Strategy Consultation</div>
            <div className="text-sm text-gray-400 font-light">30-minute session with our experts</div>
          </div>
          <div className="text-center px-8 py-6 border-r border-gray-700/50">
            <div className="font-normal text-white mb-2 text-base">Customized Roadmap</div>
            <div className="text-sm text-gray-400 font-light">Tailored to your unique context</div>
          </div>
          <div className="text-center px-8 py-6">
            <div className="font-normal text-white mb-2 text-base">No Commitment</div>
            <div className="text-sm text-gray-400 font-light">Explore with zero obligation</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contactus.html"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-[#0066CC] hover:bg-[#0052A3] text-white font-normal text-base transition-all"
          >
            Schedule Consultation
            <i data-lucide="arrow-right" className="w-[18px] h-[18px]"></i>
          </a>
          <a
            href="/contactus.html"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 border-2 border-white text-gray-900 bg-white hover:bg-gray-800 hover:text-white hover:border-gray-800 font-normal text-base transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Footer — updated design, Link replaced with <a>, logo uses local asset
// ---------------------------------------------------------------------------
export function MainSiteFooter({ variant = 'dark' }: { variant?: 'dark' | 'light' } = {}) {
  const isLight = variant === 'light';

  const footerLinkClass = isLight
    ? "text-gray-900 hover:text-[#2A64C5] transition-colors text-sm font-light"
    : "text-gray-300 hover:text-[#8FB3FF] transition-colors text-sm font-light";

  const footerMetaLinkClass = isLight
    ? "text-gray-600 hover:text-[#2A64C5] transition-colors font-light"
    : "text-gray-300 hover:text-[#8FB3FF] transition-colors font-light";

  // Used for subsection header-style links like "NOVA Series".
  const footerSubsectionLinkClass = isLight
    ? "block text-xs text-gray-500 uppercase tracking-widest font-normal hover:text-[#2A64C5] transition-colors"
    : "block text-xs text-gray-500 uppercase tracking-widest font-normal hover:text-[#8FB3FF] transition-colors";

  const headingClass = isLight
    ? "text-xs text-gray-600 mb-6 uppercase tracking-widest font-semibold"
    : "text-xs text-white mb-6 uppercase tracking-widest font-semibold";

  const footerBgClass = isLight ? 'bg-white text-gray-900' : 'bg-[#0f1419] text-white';
  const dividerClass = isLight ? 'border-gray-200' : 'border-gray-800';
  const taglineClass = isLight ? 'text-gray-600' : 'text-gray-400';
  const iconBaseClass = isLight ? 'border-gray-300 text-gray-700' : 'border-gray-700 text-gray-300';
  const iconHoverClass = isLight ? 'hover:text-[#2A64C5] hover:border-[#2A64C5]' : 'hover:text-[#8FB3FF] hover:border-[#8FB3FF]';
  const copyrightClass = isLight ? 'text-gray-500' : 'text-gray-500';

  const logoSrc = isLight ? ciAgileLogoDark : ciAgileLogoWhite;
  const logoImgClass = isLight ? 'h-7 w-auto' : 'h-7 w-auto brightness-0 invert';

  return (
    <footer className={footerBgClass}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Brand block (top tier) */}
        <div className="pt-16">
          <div className="mb-6">
            <a
              href="/index.html"
              className="inline-block"
            >
              <img
                src={logoSrc}
                alt="CI Agile"
                className={logoImgClass}
              />
            </a>
          </div>
          <p className={`${taglineClass} leading-relaxed mb-8 font-light text-sm max-w-sm`}>
            Transforming organizations with AI-driven agile methodology to deliver better business results.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/ciagile/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 border ${iconBaseClass} flex items-center justify-center ${iconHoverClass} transition-all`}
              aria-label="LinkedIn"
            >
              <i data-lucide="linkedin" className="w-[18px] h-[18px]" style={{ strokeWidth: "1.5" }}></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UC3J5gbjuIOwPep5c3b7x2Tw"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 border ${iconBaseClass} flex items-center justify-center ${iconHoverClass} transition-all`}
              aria-label="YouTube"
            >
              <i data-lucide="youtube" className="w-[18px] h-[18px]" style={{ strokeWidth: "1.5" }}></i>
            </a>
            <a
              href="https://www.facebook.com/ciagile.education"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 border ${iconBaseClass} flex items-center justify-center ${iconHoverClass} transition-all`}
              aria-label="Facebook"
            >
              <i data-lucide="facebook" className="w-[18px] h-[18px]" style={{ strokeWidth: "1.5" }}></i>
            </a>
          </div>
        </div>

        {/* Sitemap (second tier) */}
        <div className="pt-16 pb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Enterprise Pathways */}
          <div>
            <h3 className={headingClass}>Enterprise Pathways</h3>
            <a href="/jess/index.html" className={footerSubsectionLinkClass}>
              Jeff Sutherland&apos;s Enterprise Agility Program
            </a>
            <ul className="space-y-3 mt-4">
              <li>
                <a href="/jess/leadership-training.html" className={footerLinkClass}>
                  International Certification Courses
                </a>
              </li>
              <li>
                <a href="/jess/class-schedule.html" className={footerLinkClass}>
                  Public Certification Class Schedule
                </a>
              </li>
            </ul>

            <a
              href="/jess/team-level-training.html"
              className={`${footerSubsectionLinkClass} mt-10`}
            >
              NOVA Series
            </a>
            <ul className="space-y-3 mt-4">
              <li>
                <a href="/jess/nova/agile-scrum.html" className={footerLinkClass}>
                  Agile &amp; Scrum 201
                </a>
              </li>
              <li>
                <a href="/jess/nova/design-thinking.html" className={footerLinkClass}>
                  Design Thinking 201
                </a>
              </li>
            </ul>
          </div>

          {/* Capability Tracks */}
          <div>
            <h3 className={headingClass}>Capability Tracks</h3>
            <a href="/teamworks/index.html" className={footerSubsectionLinkClass}>
              TeamWorks Program
            </a>
            <ul className="space-y-3 mt-4">
              <li>
                <a href="/teamworks/creating-super-teams.html" className={footerLinkClass}>
                  Creating Super Teams
                </a>
              </li>
              <li>
                <a href="/teamworks/design-thinking.html" className={footerLinkClass}>
                  Win Customers Through Design
                </a>
              </li>
              <li>
                <a href="/teamworks/critical-thinking-kanban.html" className={footerLinkClass}>
                  Critical Thinking for Better Work
                </a>
              </li>
              <li>
                <a href="/teamworks/practical-lean-problem-solving.html" className={footerLinkClass}>
                  Practical Lean Problem Solving
                </a>
              </li>
              <li>
                <a href="/teamworks/ai-skills-for-your-team.html" className={footerLinkClass}>
                  AI Skills for YOUR Teams
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={headingClass}>Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="/jess/free-resources.html" className={footerLinkClass}>
                  Free Resources &amp; Official Guides
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/69641858/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  Community Forums
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={headingClass}>Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/aboutus.html" className={footerLinkClass}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contactus.html" className={footerLinkClass}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t ${dividerClass}`} />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-xs order-2 md:order-1 flex-wrap justify-center">
            <a href="/privacy-policy.html" className={footerMetaLinkClass}>Privacy Policy</a>
            <a href="/terms-of-use.html" className={footerMetaLinkClass}>Terms of Use</a>
            <a href="/cookie-policy.html" className={footerMetaLinkClass}>Cookie Policy</a>
          </div>
          <p className={`${copyrightClass} text-xs font-light order-1 md:order-2`}>© 2026 CI Agile. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// HomePage — composes all sections; navigation is handled by MainSiteNavigation
// ---------------------------------------------------------------------------
export function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <ProblemSection />
      <DifferenceSection />
      <ProgramsSection />
      <HowWeWorkSection />
      <IndustriesSection />
      <ProvenResultsSection />
      <FinalCTASection />
    </>
  );
}
