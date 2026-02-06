import React from 'react';
import ReactDOM from 'react-dom/root';
import '@/styles/index.css';

// Dev-only entry point with simple hash-based routing for preview
// Production uses scripts/export-static.mjs to generate static HTML from /src/site/pages/**

import { IndexPage } from '@/site/pages/index/IndexPage';
import { AboutUsPage } from '@/site/pages/about/AboutUsPage';
import { ContactUsPage } from '@/site/pages/contact/ContactUsPage';
import { LandingPage } from '@/site/pages/teamworks/LandingPage';
import { CreatingSuperTeamsPage } from '@/site/pages/teamworks/CreatingSuperTeamsPage';
import { DesignLikeApplePage } from '@/site/pages/teamworks/DesignLikeApplePage';
import { OperationalExcellencePage } from '@/site/pages/teamworks/OperationalExcellencePage';
import { BookConsultationPage } from '@/site/pages/teamworks/BookConsultationPage';
import { DiagnosticPage } from '@/site/pages/diagnostic/DiagnosticPage';

// Simple hash-based router for dev preview
function DevRouter() {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Global click handler to intercept all navigation links
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href) {
        const url = new URL(anchor.href);
        
        // Only intercept hash-based links (our internal navigation)
        if (url.hash && url.hash.startsWith('#/')) {
          e.preventDefault();
          e.stopPropagation();
          
          // Manually update the hash
          window.location.hash = url.hash;
        }
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
    '': IndexPage,
    '#/': IndexPage,
    '#/index.html': IndexPage,
    '#/aboutus.html': AboutUsPage,
    '#/contactus.html': ContactUsPage,
    '#/teamworks/': LandingPage,
    '#/teamworks/index.html': LandingPage,
    '#/teamworks/creating-super-teams.html': CreatingSuperTeamsPage,
    '#/teamworks/design-thinking.html': DesignLikeApplePage,
    '#/teamworks/critical-thinking-kanban.html': OperationalExcellencePage,
    '#/teamworks/bookConsultation.html': BookConsultationPage,
    '#/diagnostic.html': DiagnosticPage,
  };

  const Component = routes[hash] || IndexPage;

  return <Component />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DevRouter />
  </React.StrictMode>,
);