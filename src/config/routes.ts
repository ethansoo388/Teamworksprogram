import type { SiteType } from "@/types";

// ---------------------------------------------------------------------------
// Route definitions — single source of truth for static export.
// Used by scripts/export-static.mjs to generate /public HTML files.
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
  // ── Main site ──────────────────────────────────────────────────────────
  {
    modulePath: "/src/site/pages/index/IndexPage.tsx",
    componentName: "IndexPage",
    filename: "index.html",
    title: "CI Agile - Transform Your Organization",
    description:
      "Proven delivery systems that help organizations execute and achieve measurable business outcomes across Asia Pacific.",
    siteType: "main",
  },
  {
    modulePath: "/src/site/pages/about/AboutUsPage.tsx",
    componentName: "AboutUsPage",
    filename: "aboutus.html",
    title: "About Us - CI Agile",
    description:
      "Learn about CI Agile and our mission to transform organizations through proven delivery systems.",
    siteType: "main",
    includeFormJS: true,
  },
  {
    modulePath: "/src/site/pages/contact/ContactUsPage.tsx",
    componentName: "ContactUsPage",
    filename: "contactus.html",
    title: "Contact Us - CI Agile",
    description:
      "Get in touch with CI Agile to discuss how we can help transform your organization.",
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

  // ── Legal (Main site) ────────────────────────────────────────────────
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

  // ── TeamWorks ──────────────────────────────────────────────────────────
  {
    modulePath: "/src/site/pages/teamworks/LandingPage.tsx",
    componentName: "LandingPage",
    filename: "teamworks/index.html",
    title: "TeamWorks - Transform Your Team in Just 2 Days",
    description:
      "Fun, hands-on training workshops for SME teams across Southeast Asia. Build super teams, design like Apple, achieve operational excellence.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/CreatingSuperTeamsPage.tsx",
    componentName: "CreatingSuperTeamsPage",
    filename: "teamworks/creating-super-teams.html",
    title: "Creating Super Teams - TeamWorks Course 01",
    description:
      "Learn practical Agile and Scrum frameworks to build high-performing teams that deliver results in just 2 weeks.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/DesignLikeApplePage.tsx",
    componentName: "DesignLikeApplePage",
    filename: "teamworks/design-thinking.html",
    title: "Win Customers Through Design - TeamWorks Course 02",
    description:
      "Create customer-focused products and services using design thinking.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/OperationalExcellencePage.tsx",
    componentName: "OperationalExcellencePage",
    filename: "teamworks/critical-thinking-kanban.html",
    title: "Critical Thinking for Better Work - TeamWorks Course 03",
    description:
      "Apply critical thinking and Kanban to make better decisions and deliver faster.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/PracticalLeanPage.tsx",
    componentName: "PracticalLeanPage",
    filename: "teamworks/practical-lean-problem-solving.html",
    title: "Practical Lean Problem Solving - TeamWorks Course 04",
    description:
      "Empower your frontline to solve problems using practical Lean thinking. Reduce recurring issues, improve customer satisfaction, and build a problem-solving culture.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/AISkillsPage.tsx",
    componentName: "AISkillsPage",
    filename: "teamworks/ai-skills-for-your-team.html",
    title: "AI Skills for YOUR Team - TeamWorks Course 05",
    description:
      "Equip your team with practical AI skills they can apply immediately — without coding or technical background. Cut drafting time, improve decisions, and use AI responsibly.",
    siteType: "teamworks",
  },
  {
    modulePath: "/src/site/pages/teamworks/BookConsultationPage.tsx",
    componentName: "BookConsultationPage",
    filename: "teamworks/bookConsultation.html",
    title: "Book Free Consultation - TeamWorks",
    description:
      "Schedule a free consultation to discuss which TeamWorks course is perfect for your team.",
    siteType: "teamworks",
    includeFormJS: true,
  },

  // ── JESS (Jeff's Enterprise Scrum System) ──────────────────────────────
  {
    modulePath: "/src/site/pages/jess/HomePage.tsx",
    componentName: "HomePage",
    filename: "jess/index.html",
    title: "JESS - Enterprise Agility Built for Execution at Scale",
    description:
      "Jeff's Enterprise Scrum System — proven execution system for enterprise agility, built on Scrum@Scale and AI-driven methodology.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/FreeResourcesPage.tsx",
    componentName: "FreeResourcesPage",
    filename: "jess/free-resources.html",
    title: "Free Resources - JESS",
    description:
      "Free learning resources for agile leaders — guides, workshops, and community forums.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/LeadershipTrainingPage.tsx",
    componentName: "LeadershipTrainingPage",
    filename: "jess/leadership-training.html",
    title: "Leadership Training - JESS",
    description:
      "Two-day intensive leadership training for enterprise agile transformation. Build execution clarity and scalable leadership.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/CourseModulesPage.tsx",
    componentName: "CourseModulesPage",
    filename: "jess/course-modules.html",
    title: "Course Modules - JESS",
    description:
      "Detailed course modules for the JESS leadership training program.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/InstructorPage.tsx",
    componentName: "InstructorPage",
    filename: "jess/instructor.html",
    title: "Instructor - JESS",
    description:
      "Meet the instructor behind the JESS program — credentials, experience, and client testimonials.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/ClassSchedulePage.tsx",
    componentName: "ClassSchedulePage",
    filename: "jess/class-schedule.html",
    title: "Class Schedule - JESS",
    description:
      "Upcoming class schedule for JESS leadership training courses across Southeast Asia.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/TeamLevelTrainingPage.tsx",
    componentName: "TeamLevelTrainingPage",
    filename: "jess/team-level-training.html",
    title: "Team Level Training - JESS NOVA Series",
    description:
      "NOVA Series team-level training — Agile & Scrum and Design Thinking courses for delivery teams.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/EnterpriseConsultingPage.tsx",
    componentName: "EnterpriseConsultingPage",
    filename: "jess/enterprise-consulting.html",
    title: "Enterprise Consulting - JESS",
    description:
      "Enterprise consulting services for agile transformation at scale.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/AgileScrumCoursePage.tsx",
    componentName: "AgileScrumCoursePage",
    filename: "jess/nova/agile-scrum.html",
    title: "Agile & Scrum 201 - NOVA Series",
    description:
      "Agile & Scrum 201 course for delivery teams — build hyper-productive teams with proven frameworks.",
    siteType: "jess",
  },
  {
    modulePath: "/src/site/pages/jess/DesignThinkingCoursePage.tsx",
    componentName: "DesignThinkingCoursePage",
    filename: "jess/nova/design-thinking.html",
    title: "Design Thinking 201 - NOVA Series",
    description:
      "Design Thinking 201 course — solve real-world problems with user-centered design methodology.",
    siteType: "jess",
  },
];
