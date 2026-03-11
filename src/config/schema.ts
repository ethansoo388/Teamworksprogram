/**
 * Structured data configuration (build-time)
 *
 * This file is imported during static export via Vite SSR (ssrLoadModule).
 * Keep it dependency-free and deterministic.
 */

export const breadcrumbLabels: Record<string, string> = {
  teamworks: 'TeamWorks',
  jess: 'JESS',
  nova: 'NOVA',
};

export const courseSchemaByFilename: Record<
  string,
  {
    name?: string;
    description?: string;
    inLanguage?: string;
    courseMode?: string;
    areaServed?: string;
    educationalLevel?: string;
  }
> = {
  // --------------------------
  // TeamWorks (course pages)
  // --------------------------
  'teamworks/ai-skills-for-your-team.html': {
    name: 'AI Skills for Your Team',
    courseMode: 'In-person (private corporate) or live online',
    areaServed: 'MY',
    educationalLevel: 'Professional',
  },
  'teamworks/creating-super-teams.html': {
    name: 'Creating Super Teams',
    courseMode: 'In-person (private corporate) or live online',
    areaServed: 'MY',
    educationalLevel: 'Professional',
  },
  'teamworks/critical-thinking-kanban.html': {
    name: 'Critical Thinking for Maximum Business Profitability',
    courseMode: 'In-person (private corporate) or live online',
    areaServed: 'MY',
    educationalLevel: 'Professional',
  },
  'teamworks/design-thinking.html': {
    name: 'Win Customers Through Design (Design Thinking)',
    courseMode: 'In-person (private corporate) or live online',
    areaServed: 'MY',
    educationalLevel: 'Professional',
  },
  'teamworks/practical-lean-problem-solving.html': {
    name: 'Practical Lean Problem Solving',
    courseMode: 'In-person (private corporate) or live online',
    areaServed: 'MY',
    educationalLevel: 'Professional',
  },

  // --------------------------
  // JESS (course page)
  // --------------------------
  'jess/leadership-training.html': {
    name: "JESS Enterprise Agility Leadership Training",
    courseMode: 'In-person or live online',
    areaServed: 'MY',
    educationalLevel: 'Advanced / Leadership',
  },

  // --------------------------
  // JESS NOVA (course pages)
  // --------------------------
  'jess/nova/agile-scrum.html': {
    name: 'NOVA Agile & Scrum (Enterprise)',
    courseMode: 'In-person or live online',
    areaServed: 'MY',
    educationalLevel: 'Advanced / Leadership',
  },
  'jess/nova/design-thinking.html': {
    name: 'NOVA Design Thinking (Enterprise)',
    courseMode: 'In-person or live online',
    areaServed: 'MY',
    educationalLevel: 'Advanced / Leadership',
  },
};
