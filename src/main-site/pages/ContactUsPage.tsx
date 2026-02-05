// Contact Us Page - Fully responsive with center-aligned sections
import { MainSiteNavigation } from "@/main-site/components/MainSiteNavigation";
import { MainSiteFooter } from "@/main-site/components/MainSiteFooter";
import { ContactFormSection } from "@/main-site/components/ContactFormSection";
import { ContactCTASection } from "@/main-site/components/ContactCTASection";
import { ContactSpacerSection } from "@/main-site/components/ContactSpacerSection";

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