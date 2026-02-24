import type { ComponentType, LucideIcon } from "lucide-react";

// ---------------------------------------------------------------------------
// Page metadata — used by routes.ts and auto-discovery in export-static.mjs
// ---------------------------------------------------------------------------

export type SiteType = "main" | "teamworks" | "jess";

export interface PageMeta {
  /** URL path for react-router (dev). E.g. "/" or "/teamworks/creating-super-teams" */
  path: string;
  /** Output filename relative to public/ (e.g. "index.html", "teamworks/index.html") */
  filename: string;
  /** HTML <title> */
  title: string;
  /** Meta description */
  description: string;
  /** Site section — controls CSS/JS path prefixes and image path fixups */
  siteType: SiteType;
  /** Whether to include form.js in the static HTML shell */
  includeFormJS?: boolean;
}

// ---------------------------------------------------------------------------
// Shared data types used across course pages
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CourseModule {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface StorySlide {
  image: string;
  title: string;
  emotion: string;
  story: string;
  highlight: string;
}

export interface InvestmentCard {
  company: string;
  amount: string;
  year: string;
  focus: string;
  logo: string;
  description: string;
}

export interface SkillItem {
  title: string;
  details: string;
}

export interface LearningOutcome {
  icon: LucideIcon;
  title: string;
  color: string;
}

export interface PersonaCard {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface CourseDetail {
  icon: LucideIcon;
  label: string;
  value: string;
}
