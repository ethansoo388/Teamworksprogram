import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { OurBeliefSection, WhatMakesDifferentSection, FounderProfileSection, AboutCIAgileSection, ExperienceScalesSection, ExecutionPatternsSection } from "@/site/components/main/AboutPageSections";
import { AboutHero } from "@/site/components/main/AboutHero";
import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/aboutus",
  filename: "aboutus.html",
  title: "About Us - CI Agile",
  description: "Learn about CI Agile and our mission to transform organizations through proven delivery systems.",
  siteType: "main",
  includeFormJS: true,
};

export function AboutUsPage() {
  return (
    <div className="w-full">
      {/* Use the shared navigation component */}
      <MainSiteNavigation />
      
      {/* New Hero Section */}
      <AboutHero />
      
      {/* Original Figma About Us page content (excluding the old hero/Section) */}
      <div className="relative">
        <OurBeliefSection />
        <WhatMakesDifferentSection />
        <FounderProfileSection />
        <AboutCIAgileSection />
        <ExperienceScalesSection />
        <ExecutionPatternsSection />
      </div>
      
      <MainSiteFooter />
    </div>
  );
}