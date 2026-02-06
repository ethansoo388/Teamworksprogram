import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { Section1, Section2, Section3, Section4, Section5, Section6 } from "@/site/components/main/imported/CiAgileMainFrozenPreMergeBranch-8009-391";
import { AboutHero } from "@/site/components/main/AboutHero";

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
