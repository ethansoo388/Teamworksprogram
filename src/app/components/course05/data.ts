import { Clock, Users, MapPin, Target, Sparkles, Zap, Shield, Lightbulb, TrendingUp, Building, Briefcase, User, Building2, Settings, Hand } from "lucide-react";
import type { StorySlide, InvestmentCard, SkillItem, CourseModule, LearningOutcome, PersonaCard, FAQItem, CourseDetail } from "@/types";

// ---------------------------------------------------------------------------
// Pure data (strings/numbers only) — loaded from JSON
// ---------------------------------------------------------------------------
import course05Json from "@/data/course05.json";

export const stories: StorySlide[] = course05Json.stories;
export const investments: InvestmentCard[] = course05Json.investments;
export const skills: SkillItem[] = course05Json.skills;
export const courseModules: CourseModule[] = course05Json.courseModules;
export const masterTopics: string[] = course05Json.masterTopics;
export const faqs: FAQItem[] = course05Json.faqs;

// ---------------------------------------------------------------------------
// Data with Lucide icon references — must stay in TS
// ---------------------------------------------------------------------------

export const learningOutcomes: LearningOutcome[] = [
  { icon: Target, title: "Use AI tools confidently for daily work tasks", color: "from-blue-500 to-cyan-500" },
  { icon: Sparkles, title: "Write effective prompts to get useful results", color: "from-purple-500 to-pink-500" },
  { icon: Zap, title: "Automate repetitive thinking and admin work", color: "from-amber-500 to-orange-500" },
  { icon: Shield, title: "Apply AI safely within workplace boundaries", color: "from-green-500 to-emerald-500" },
  { icon: Lightbulb, title: "Identify high-impact AI use cases for your role or team", color: "from-yellow-500 to-amber-500" },
  { icon: TrendingUp, title: "Leave with a practical AI action plan for immediate application", color: "from-indigo-500 to-blue-500" },
];

export const personas: PersonaCard[] = [
  { icon: Users, title: "Team Leaders and Supervisors", description: "Want their teams to work faster without increasing stress or burnout.", color: "bg-blue-100 text-[#0EA7E9]" },
  { icon: Building, title: "SME Owners and Managers", description: "Need AI to save time and improve efficiency without technical complexity.", color: "bg-teal-100 text-teal-600" },
  { icon: Briefcase, title: "Corporate Teams", description: "Operations, HR, Sales, IT, and Support teams looking for practical AI skills.", color: "bg-sky-100 text-sky-600" },
  { icon: User, title: "Individual Professionals", description: "Want to stay relevant, productive, and AI-savvy at work.", color: "bg-emerald-100 text-emerald-600" },
];

export const courseDetails: CourseDetail[] = [
  { icon: Clock, label: "Duration", value: "2 days" },
  { icon: MapPin, label: "Format", value: "In-person training" },
  { icon: Users, label: "Group size", value: "Max 30 participants" },
  { icon: Hand, label: "Learning style", value: "Hands-on, guided, practical" },
  { icon: Building2, label: "Location", value: "Malaysia" },
  { icon: Settings, label: "Customization", value: "Custom private runs available for companies" },
];
