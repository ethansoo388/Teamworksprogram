// Dev-only wrapper - imports from /src/site/pages/** which are the canonical pages
// Production uses scripts/export-static.mjs to generate static HTML

import { useState, useEffect } from 'react';
import { IndexPage } from "@/site/pages/index/IndexPage";
import { AboutUsPage } from "@/site/pages/about/AboutUsPage";
import { ContactUsPage } from "@/site/pages/contact/ContactUsPage";
import { ThankYouPage } from "@/site/pages/thankyou/ThankYouPage";
import { LandingPage } from "@/site/pages/teamworks/LandingPage";
import { CreatingSuperTeamsPage } from "@/site/pages/teamworks/CreatingSuperTeamsPage";
import { DesignLikeApplePage } from "@/site/pages/teamworks/DesignLikeApplePage";
import { OperationalExcellencePage } from "@/site/pages/teamworks/OperationalExcellencePage";
import { BookConsultationPage } from "@/site/pages/teamworks/BookConsultationPage";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      
      // Only scroll to top if it's a navigation link (starts with #/)
      // For anchor links like #courses, let the browser handle scrolling
      if (newHash.startsWith('#/')) {
        setHash(newHash);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Global click handler to intercept all navigation links
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        const url = new URL(anchor.href);
        
        // Only intercept hash-based NAVIGATION links (starting with #/)
        if (url.hash && url.hash.startsWith('#/')) {
          e.preventDefault();
          e.stopPropagation();
          
          // Manually update the hash
          window.location.hash = url.hash;
        }
        // For regular anchor links like #courses, #impact, etc.
        // Let the browser handle the smooth scrolling automatically
      }
    };

    // Capture phase to intercept before other handlers
    document.addEventListener('click', handleGlobalClick, true);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  // Route mapping
  const routes: Record<string, React.ComponentType> = {
    '': ThankYouPage,
    '#/': IndexPage,
    '#/index.html': IndexPage,
    '#/aboutus.html': AboutUsPage,
    '#/contactus.html': ContactUsPage,
    '#/thankyou.html': ThankYouPage,
    '#/teamworks/': LandingPage,
    '#/teamworks/index.html': LandingPage,
    '#/teamworks/creating-super-teams.html': CreatingSuperTeamsPage,
    '#/teamworks/design-thinking.html': DesignLikeApplePage,
    '#/teamworks/critical-thinking-kanban.html': OperationalExcellencePage,
    '#/teamworks/bookConsultation.html': BookConsultationPage,
  };

  const Component = routes[hash] || ThankYouPage;

  return <Component />;
}