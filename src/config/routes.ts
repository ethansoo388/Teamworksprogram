import type { SiteType } from "@/types";

// ---------------------------------------------------------------------------
// Route definitions — single source of truth for static export.
// Used by scripts/export-static.mjs to generate /public HTML files.
//
// SEO strategy:
//   Primary market   : Malaysia (MY)
//   Secondary market : Indonesia (ID)
//   Tertiary market  : Broader Southeast Asia (SG, TH, PH, VN)
//
//   Primary products :
//     1. JESS — Jeff Sutherland's Enterprise Agile Training & Certification
//     2. TeamWorks — 2-day private team training workshops for SMEs
// ---------------------------------------------------------------------------

export interface RouteEntry {
  modulePath: string;
  componentName: string;
  filename: string;
  title: string;
  description: string;
  siteType: SiteType;
  includeFormJS?: boolean;
}

export const routes: RouteEntry[] = [
  // ── Main site (CI Agile — Enterprise Consulting) ───────────────────────
  // Tier 1 targets: enterprise agile consulting Malaysia · agile transformation Indonesia
  //                 business transformation consulting Asia Pacific
  {
    modulePath: "/src/site/pages/index/IndexPage.tsx",
    componentName: "IndexPage",
    filename: "index.html",
    title: "CI Agile | Enterprise Agile Consulting Malaysia & Indonesia",
    description:
      "Leading enterprise agile consulting firm in Malaysia and Indonesia. We deliver business transformation and proven delivery systems across Asia Pacific.",
    siteType: "main",
  },
  {
    modulePath: "/src/site/pages/about/AboutUsPage.tsx",
    componentName: "AboutUsPage",
    filename: "aboutus.html",
    title: "About CI Agile | Business Transformation Consulting Malaysia",
    description:
      "CI Agile helps organizations across Malaysia, Indonesia, and Southeast Asia transform through enterprise agile consulting and proven delivery systems.",
    siteType: "main",
    includeFormJS: true,
  },
  {
    modulePath: "/src/site/pages/contact/ContactUsPage.tsx",
    componentName: "ContactUsPage",
    filename: "contactus.html",
    title: "Contact CI Agile | Enterprise Agile Consulting Malaysia",
    description:
      "Get in touch with CI Agile — Malaysia's enterprise agile consulting firm serving clients in Malaysia, Indonesia, and across Southeast Asia.",
    siteType: "main",
    includeFormJS: true,
  },
  {
    modulePath: "/src/site/pages/thankyou/ThankYouPage.tsx",
    componentName: "ThankYouPage",
    filename: "thankyou.html",
    title: "Thank You - CI Agile",
    description:
      "Thank you for contacting CI Agile. We will get back to you within 24 hours.",
    siteType: "main",
  },

  // ── Legal (Main site) ────────────────────────────────────────────────────
  {
    modulePath: "/src/site/pages/legal/PrivacyPolicyPage.tsx",
    componentName: "PrivacyPolicyPage",
    filename: "privacy-policy.html",
    title: "Privacy Policy - CI Agile",
    description:
      "Read CI Agile's Privacy Policy, including how we collect, use, and protect your personal data.",
    siteType: "main",
  },
  {
    modulePath: "/src/site/pages/legal/TermsOfUsePage.tsx",
    componentName: "TermsOfUsePage",
    filename: "terms-of-use.html",
    title: "Terms of Use - CI Agile",
    description:
      "Read CI Agile's Terms of Use for using our website, programs, and services.",
    siteType: "main",
  },
  {
    modulePath: "/src/site/pages/legal/CookiePolicyPage.tsx",
    componentName: "CookiePolicyPage",
    filename: "cookie-policy.html",
    title: "Cookie Policy - CI Agile",
    description:
      "Read CI Agile's Cookie Policy, including how cookies and similar technologies are used on our website.",
    siteType: "main",
  },

  // ── TeamWorks — SME Team Workshops ────────────────────────────────────────
  // Tier 1 targets: team training workshop Malaysia · ai training for SMEs Malaysia
  //                 2-day team productivity workshop
  // Tier 2 targets: design thinking workshop Malaysia · lean training Malaysia
  //                 AI skills training for corporate teams
  {
    modulePath: "/src/site/pages/teamworks/LandingPage.tsx",
    componentName: "LandingPage",
    filename: "teamworks/index.html",
    title: "TeamWorks | 2-Day Team Training Workshop Malaysia for SMEs",
    description:
      "Hands-on team training workshops for SMEs in Malaysia — Agile, design thinking, lean problem solving, and AI skills. Private corporate 2-day workshops.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/CreatingSuperTeamsPage.tsx",
    componentName: "CreatingSuperTeamsPage",
    filename: "teamworks/creating-super-teams.html",
    title: "Creating Super Teams | Corporate Team Workshop Malaysia",
    description:
      "Build high-performing teams with Agile and Scrum frameworks. Hands-on 2-day corporate team training workshop for Malaysian SMEs that deliver results.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/DesignLikeApplePage.tsx",
    componentName: "DesignLikeApplePage",
    filename: "teamworks/design-thinking.html",
    title: "Design Thinking Workshop Malaysia | Win Customers Through Design",
    description:
      "Design thinking workshop Malaysia — create customer-focused products and services using proven design methods. 2-day corporate training for SMEs.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/OperationalExcellencePage.tsx",
    componentName: "OperationalExcellencePage",
    filename: "teamworks/critical-thinking-kanban.html",
    title: "Critical Thinking & Kanban Workshop | Team Training Malaysia",
    description:
      "Apply critical thinking and Kanban to make better decisions and deliver faster. 2-day corporate team training workshop for Malaysian SMEs.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/PracticalLeanPage.tsx",
    componentName: "PracticalLeanPage",
    filename: "teamworks/practical-lean-problem-solving.html",
    title: "Lean Training Malaysia | Practical Lean Problem Solving Workshop",
    description:
      "Lean training Malaysia — empower frontline teams to solve problems using practical Lean thinking. 2-day corporate workshop for SMEs. Reduce recurring issues.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/AISkillsPage.tsx",
    componentName: "AISkillsPage",
    filename: "teamworks/ai-skills-for-your-team.html",
    title: "AI Training for SMEs Malaysia | AI Skills Workshop for Teams",
    description:
      "AI training for SMEs Malaysia — equip your corporate team with practical AI skills they can apply immediately. No coding required. 2-day hands-on workshop.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/BookConsultationPage.tsx",
    componentName: "BookConsultationPage",
    filename: "teamworks/bookConsultation.html",
    title: "Book Free Consultation | TeamWorks Corporate Training Malaysia",
    description:
      "Book a free consultation to find the right TeamWorks corporate team training workshop for your Malaysian or Southeast Asian team. Private workshops for SMEs.",
    siteType: "teamworks",
    includeFormJS: true,
  },

  // ── JESS — Jeff's Enterprise Scrum System ─────────────────────────────────
  // Tier 1 targets: Jeff Sutherland Scrum training Malaysia
  //                 Scrum at Scale certification Southeast Asia
  //                 enterprise scrum certification Malaysia
  // Tier 2 targets: agile leadership certification Southeast Asia
  //                 Jeff Sutherland enterprise scrum system
  //                 enterprise agile certification APAC
  {
    modulePath: "/src/site/pages/jess/HomePage.tsx",
    componentName: "HomePage",
    filename: "jess/index.html",
    title: "JESS | Jeff Sutherland Scrum Training Malaysia & Southeast Asia",
    description:
      "Jeff Sutherland's Enterprise Scrum System — Scrum at Scale certification and enterprise agile training in Malaysia and Southeast Asia.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/FreeResourcesPage.tsx",
    componentName: "FreeResourcesPage",
    filename: "jess/free-resources.html",
    title: "Free Agile Resources | JESS Enterprise Scrum Malaysia",
    description:
      "Free learning resources for agile leaders in Malaysia and Southeast Asia — guides, workshop materials, and community forums on enterprise scrum.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/LeadershipTrainingPage.tsx",
    componentName: "LeadershipTrainingPage",
    filename: "jess/leadership-training.html",
    title: "Jeff Sutherland Leadership Training | Agile Leadership Certification Malaysia",
    description:
      "Two-day intensive agile leadership certification for enterprise transformation. Build execution clarity and scalable leadership in Malaysia and Southeast Asia.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/CourseModulesPage.tsx",
    componentName: "CourseModulesPage",
    filename: "jess/course-modules.html",
    title: "Course Modules | JESS Scrum at Scale Certification Malaysia",
    description:
      "Detailed curriculum for the JESS enterprise agile leadership program — Scrum at Scale modules designed for enterprise teams in Malaysia and Southeast Asia.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/InstructorPage.tsx",
    componentName: "InstructorPage",
    filename: "jess/instructor.html",
    title: "JESS Instructor | Jeff Sutherland Certified Enterprise Agile Coach",
    description:
      "Meet Ethan Soo — certified enterprise agile coach delivering Jeff Sutherland's Scrum at Scale certification training in Malaysia and Southeast Asia.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/ClassSchedulePage.tsx",
    componentName: "ClassSchedulePage",
    filename: "jess/class-schedule.html",
    title: "Class Schedule | Scrum at Scale Training Malaysia & Southeast Asia",
    description:
      "Upcoming Jeff Sutherland enterprise scrum certification and Scrum at Scale training schedule in Malaysia and Southeast Asia. Register for the next cohort.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/TeamLevelTrainingPage.tsx",
    componentName: "TeamLevelTrainingPage",
    filename: "jess/team-level-training.html",
    title: "Team Level Training | JESS NOVA Series Malaysia",
    description:
      "NOVA Series enterprise team-level agile training in Malaysia and Southeast Asia — Agile & Scrum and Design Thinking courses for delivery teams.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/EnterpriseConsultingPage.tsx",
    componentName: "EnterpriseConsultingPage",
    filename: "jess/enterprise-consulting.html",
    title: "Enterprise Consulting | Agile Transformation Malaysia & Indonesia",
    description:
      "Enterprise agile consulting and organizational transformation services in Malaysia and Indonesia. Proven frameworks for scaling agile across enterprise teams.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/AgileScrumCoursePage.tsx",
    componentName: "AgileScrumCoursePage",
    filename: "jess/nova/agile-scrum.html",
    title: "Agile & Scrum 201 | NOVA Series Enterprise Scrum Training Malaysia",
    description:
      "Agile & Scrum 201 professional course for enterprise delivery teams in Malaysia — build hyper-productive teams with Jeff Sutherland's proven Scrum framework.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/DesignThinkingCoursePage.tsx",
    componentName: "DesignThinkingCoursePage",
    filename: "jess/nova/design-thinking.html",
    title: "Design Thinking 201 | NOVA Series Enterprise Training Malaysia",
    description:
      "Design Thinking 201 course for enterprise delivery teams — solve real-world problems with user-centered design methodology in Malaysia and Southeast Asia.",
    siteType: "jess",
  },
];
