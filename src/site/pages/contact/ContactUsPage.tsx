import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { ContactFormSection } from "@/site/components/main/ContactFormSection";
import { ContactCTASection } from "@/site/components/main/ContactCTASection";
import { ContactSpacerSection } from "@/site/components/main/ContactSpacerSection";
import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/contactus",
  filename: "contactus.html",
  title: "Contact Us - CI Agile",
  description: "Get in touch with CI Agile to discuss how we can help transform your organization.",
  siteType: "main",
  includeFormJS: true,
};

export function ContactUsPage() {
  return (
    <div className="site-main">
      <div className="bg-white w-full">
        <MainSiteNavigation />
        
        {/* Main contact form section */}
        <div id="contact-form">
          <ContactFormSection />
        </div>
        
        {/* Call-to-action cards (Want to talk directly? / Prefer WhatsApp?) */}
        <ContactCTASection />
        
        {/* Spacer section */}
        <ContactSpacerSection />
        
        <MainSiteFooter />
      </div>
    </div>
  );
}
