import { NavigationV2 } from "@/app/components/v2/NavigationV2";
import { HeroSectionV2 } from "@/app/components/v2/HeroSectionV2";
import { OurImpactV2 } from "@/app/components/v2/OurImpactV2";
import { DiscoverCoursesV2 } from "@/app/components/v2/DiscoverCoursesV2";
import { WhyDifferentV2 } from "@/app/components/v2/WhyDifferentV2";
import { TestimonialsV2 } from "@/app/components/v2/TestimonialsV2";
import { PricingCTAV2 } from "@/app/components/v2/PricingCTAV2";
import { FooterV2 } from "@/app/components/v2/FooterV2";
import { CoursePage } from "@/app/components/CoursePage";
import { Course02Page } from "@/app/components/Course02Page";

export default function App() {
  // PREVIEW MODE: Showing Course 01 page
  return <CoursePage />;
  
  // Uncomment below to show Course 02 page instead
  // return <Course02Page />;
  
  // Uncomment below to show landing page instead
  /*
  return (
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
  );
  */
}