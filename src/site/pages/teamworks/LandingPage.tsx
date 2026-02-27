import { NavigationV2 } from "@/site/components/teamworks/v2/NavigationV2";
import { HeroSectionV2 } from "@/site/components/teamworks/v2/HeroSectionV2";
import { OurImpactV2 } from "@/site/components/teamworks/v2/OurImpactV2";
import { DiscoverCoursesV2 } from "@/site/components/teamworks/v2/DiscoverCoursesV2";
import { WhyDifferentV2 } from "@/site/components/teamworks/v2/WhyDifferentV2";
import { TestimonialsV2 } from "@/site/components/teamworks/v2/TestimonialsV2";
import { PricingCTAV2 } from "@/site/components/teamworks/v2/PricingCTAV2";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/teamworks",
  filename: "teamworks/index.html",
  title: "TeamWorks - Transform Your Team in Just 2 Days",
  description: "Fun, hands-on training workshops for SME teams across Southeast Asia.",
  siteType: "teamworks",
};

export function LandingPage() {
  return (
    <div className="site-teamworks">
      <div className="min-h-screen bg-white">
        <NavigationV2 />
        
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href="../index.html" className="hover:text-gray-900 transition-colors">Home</a>
              <span>/</span>
              <span className="text-gray-900 font-bold">Programs</span>
            </div>
          </div>
        </div>
        
        <HeroSectionV2 />
        <OurImpactV2 />
        <DiscoverCoursesV2 />
        <WhyDifferentV2 />
        <TestimonialsV2 />
        <PricingCTAV2 />
        <MainSiteFooter variant="light" />
      </div>
    </div>
  );
}