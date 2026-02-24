import { Hero } from "@/site/components/jess/Hero";
import { ProblemSection } from "@/site/components/jess/ProblemSection";
import { SolutionSection } from "@/site/components/jess/SolutionSection";
import { DifferentiatorsSection } from "@/site/components/jess/DifferentiatorsSection";
import { OfferingsSection } from "@/site/components/jess/OfferingsSection";
import { FrameworkSection } from "@/site/components/jess/FrameworkSection";
import { StateOfAgileSection } from "@/site/components/jess/StateOfAgileSection";
import { FrameworkComparisonSection } from "@/site/components/jess/FrameworkComparisonSection";
import { ServicesSection } from "@/site/components/jess/ServicesSection";
import { TargetAudienceSection } from "@/site/components/jess/TargetAudienceSection";
import { SocialProofSection } from "@/site/components/jess/SocialProofSection";
import { CTASection } from "@/site/components/jess/CTASection";
import { MetricsSection } from "@/site/components/jess/MetricsSection";
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";

export function HomePage() {
  return (
    <>
      <MainSiteNavigation />
      <Hero />
      <MetricsSection />
      <SolutionSection />
      <ProblemSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <OfferingsSection />
      <FrameworkSection />
      <StateOfAgileSection />
      <FrameworkComparisonSection />
      <TargetAudienceSection />
      <SocialProofSection />
      <CTASection />
      <MainSiteFooter />
    </>
  );
}
