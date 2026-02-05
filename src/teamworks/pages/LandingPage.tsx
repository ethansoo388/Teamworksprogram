import { NavigationV2 } from "@/teamworks/components/v2/NavigationV2";
import { HeroSectionV2 } from "@/teamworks/components/v2/HeroSectionV2";
import { OurImpactV2 } from "@/teamworks/components/v2/OurImpactV2";
import { DiscoverCoursesV2 } from "@/teamworks/components/v2/DiscoverCoursesV2";
import { WhyDifferentV2 } from "@/teamworks/components/v2/WhyDifferentV2";
import { TestimonialsV2 } from "@/teamworks/components/v2/TestimonialsV2";
import { PricingCTAV2 } from "@/teamworks/components/v2/PricingCTAV2";
import { FooterV2 } from "@/teamworks/components/v2/FooterV2";

export function LandingPage() {
  return (
    <div className="site-teamworks">
      <div className="min-h-screen bg-white">
        <NavigationV2 />
        <HeroSectionV2 />
        <OurImpactV2 />
        <DiscoverCoursesV2 />
        <WhyDifferentV2 />
        <TestimonialsV2 />
        <PricingCTAV2 />
        <FooterV2 />
      </div>
    </div>
  );
}
