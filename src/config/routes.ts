import type { ComponentType } from "react";
import { lazy } from "react";
import type { SiteType } from "@/types";

// ---------------------------------------------------------------------------
// Route types
// Each page also exports a `pageMeta` const (see src/types/index.ts → PageMeta)
// that the export script can read at build time for auto-discovery.
// ---------------------------------------------------------------------------

export interface RouteEntry {
  path: string;
  component: () => Promise<{ default: ComponentType }>;
  modulePath: string;
  componentName: string;
  filename: string;
  title: string;
  description: string;
  siteType: SiteType;
  includeFormJS?: boolean;
}

// ---------------------------------------------------------------------------
// Helper – wraps a dynamic import so the default export is the named export.
// This lets React.lazy work with named exports.
// ---------------------------------------------------------------------------

function lazyNamed<T extends Record<string, ComponentType>>(
  factory: () => Promise<T>,
  name: keyof T,
) {
  return lazy(() =>
    factory().then((mod) => ({ default: mod[name] })),
  );
}

// ---------------------------------------------------------------------------
// Route definitions — single source of truth for dev router + static export
// ---------------------------------------------------------------------------

export const routes: RouteEntry[] = [
  // ── Main site ──────────────────────────────────────────────────────────
  {
    path: "/",
    component: () => import("@/site/pages/index/IndexPage"),
    modulePath: "/src/site/pages/index/IndexPage.tsx",
    componentName: "IndexPage",
    filename: "index.html",
    title: "CI Agile - Transform Your Organization",
    description:
      "Proven delivery systems that help organizations execute and achieve measurable business outcomes across Asia Pacific.",
    siteType: "main",
  },
  {
    path: "/aboutus",
    component: () => import("@/site/pages/about/AboutUsPage"),
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
    path: "/contactus",
    component: () => import("@/site/pages/contact/ContactUsPage"),
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
    path: "/thankyou",
    component: () => import("@/site/pages/thankyou/ThankYouPage"),
    modulePath: "/src/site/pages/thankyou/ThankYouPage.tsx",
    componentName: "ThankYouPage",
    filename: "thankyou.html",
    title: "Thank You - CI Agile",
    description:
      "Thank you for contacting CI Agile. We will get back to you within 24 hours.",
    siteType: "main",
  },

  // ── TeamWorks ──────────────────────────────────────────────────────────
  {
    path: "/teamworks",
    component: () => import("@/site/pages/teamworks/LandingPage"),
    modulePath: "/src/site/pages/teamworks/LandingPage.tsx",
    componentName: "LandingPage",
    filename: "teamworks/index.html",
    title: "TeamWorks - Transform Your Team in Just 2 Days",
    description:
      "Fun, hands-on training workshops for SME teams across Southeast Asia. Build super teams, design like Apple, achieve operational excellence.",
    siteType: "teamworks",
  },
  {
    path: "/teamworks/creating-super-teams",
    component: () => import("@/site/pages/teamworks/CreatingSuperTeamsPage"),
    modulePath: "/src/site/pages/teamworks/CreatingSuperTeamsPage.tsx",
    componentName: "CreatingSuperTeamsPage",
    filename: "teamworks/creating-super-teams.html",
    title: "Creating Super Teams - TeamWorks Course 01",
    description:
      "Learn practical Agile and Scrum frameworks to build high-performing teams that deliver results in just 2 weeks.",
    siteType: "teamworks",
  },
  {
    path: "/teamworks/design-thinking",
    component: () => import("@/site/pages/teamworks/DesignLikeApplePage"),
    modulePath: "/src/site/pages/teamworks/DesignLikeApplePage.tsx",
    componentName: "DesignLikeApplePage",
    filename: "teamworks/design-thinking.html",
    title: "Win Customers Through Design - TeamWorks Course 02",
    description:
      "Create customer-focused products and services using design thinking.",
    siteType: "teamworks",
  },
  {
    path: "/teamworks/critical-thinking-kanban",
    component: () =>
      import("@/site/pages/teamworks/OperationalExcellencePage"),
    modulePath: "/src/site/pages/teamworks/OperationalExcellencePage.tsx",
    componentName: "OperationalExcellencePage",
    filename: "teamworks/critical-thinking-kanban.html",
    title: "Critical Thinking for Better Work - TeamWorks Course 03",
    description:
      "Apply critical thinking and Kanban to make better decisions and deliver faster.",
    siteType: "teamworks",
  },
  {
    path: "/teamworks/practical-lean-problem-solving",
    component: () => import("@/site/pages/teamworks/PracticalLeanPage"),
    modulePath: "/src/site/pages/teamworks/PracticalLeanPage.tsx",
    componentName: "PracticalLeanPage",
    filename: "teamworks/practical-lean-problem-solving.html",
    title: "Practical Lean Problem Solving - TeamWorks Course 04",
    description:
      "Empower your frontline to solve problems using practical Lean thinking. Reduce recurring issues, improve customer satisfaction, and build a problem-solving culture.",
    siteType: "teamworks",
  },
  {
    path: "/teamworks/ai-skills-for-your-team",
    component: () => import("@/site/pages/teamworks/AISkillsPage"),
    modulePath: "/src/site/pages/teamworks/AISkillsPage.tsx",
    componentName: "AISkillsPage",
    filename: "teamworks/ai-skills-for-your-team.html",
    title: "AI Skills for YOUR Team - TeamWorks Course 05",
    description:
      "Equip your team with practical AI skills they can apply immediately — without coding or technical background. Cut drafting time, improve decisions, and use AI responsibly.",
    siteType: "teamworks",
  },
  {
    path: "/teamworks/bookConsultation",
    component: () => import("@/site/pages/teamworks/BookConsultationPage"),
    modulePath: "/src/site/pages/teamworks/BookConsultationPage.tsx",
    componentName: "BookConsultationPage",
    filename: "teamworks/bookConsultation.html",
    title: "Book Free Consultation - TeamWorks",
    description:
      "Schedule a free consultation to discuss which TeamWorks course is perfect for your team.",
    siteType: "teamworks",
    includeFormJS: true,
  },
];

// ---------------------------------------------------------------------------
// Lazy component map — for use with React.lazy() in the dev router
// ---------------------------------------------------------------------------

export const lazyComponents: Record<string, ReturnType<typeof lazy>> = {};
for (const route of routes) {
  lazyComponents[route.path] = lazyNamed(
    route.component as () => Promise<Record<string, ComponentType>>,
    route.componentName,
  );
}

// Dev-only diagnostic page (not part of static export)
export const diagnosticRoute = {
  path: "/diagnostic",
  component: lazyNamed(
    () => import("@/site/pages/diagnostic/DiagnosticPage") as Promise<Record<string, ComponentType>>,
    "DiagnosticPage",
  ),
};
