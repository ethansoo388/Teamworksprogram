// Contact Us Page - Fully responsive with center-aligned sections
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { ContactFormSection } from "@/site/components/main/ContactFormSection";
import { ContactCTASection } from "@/site/components/main/ContactCTASection";
import { ContactSpacerSection } from "@/site/components/main/ContactSpacerSection";

export function ContactUsPage() {
  return (
    <div className="site-main">
      <div className="bg-white w-full">
        <MainSiteNavigation />
        
        {/* Main contact form section */}
        <ContactFormSection />
        
        {/* Call-to-action cards (Want to talk directly? / Prefer WhatsApp?) */}
        <ContactCTASection />
        
        {/* Spacer section */}
        <ContactSpacerSection />
        
        <MainSiteFooter />
      </div>
    </div>
  );
}
