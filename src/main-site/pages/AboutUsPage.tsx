import { MainSiteNavigation } from "@/main-site/components/MainSiteNavigation";
import { MainSiteFooter } from "@/main-site/components/MainSiteFooter";
import { Section1, Section2, Section3, Section4, Section5, Section6 } from "@/imports/CiAgileMainFrozenPreMergeBranch-8009-391";
import { AboutHero } from "@/main-site/components/AboutHero";

// Original About Us Page - Restored from Figma Import
// Uses the shared navigation and footer components
// The original design is preserved exactly as imported, including all content, images, and layout

export function AboutUsPage() {
  return (
    <div className="w-full">
      {/* Use the shared navigation component */}
      <MainSiteNavigation />
      
      {/* New Hero Section */}
      <AboutHero />
      
      {/* Original Figma About Us page content (excluding the old hero/Section) */}
      <div className="relative">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      
      <MainSiteFooter />
    </div>
  );
}