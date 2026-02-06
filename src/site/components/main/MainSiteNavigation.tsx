// Shared Navigation Component for Main Site
// Logo is 50% larger, "Case Studies" and "Blogs" removed
// Dropdown interactions use data attributes for static HTML compatibility

import { useState } from 'react';

function ProgramsDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <div 
      data-dropdown="programs"
      className={`absolute top-full left-0 mt-0 bg-white rounded-lg shadow-lg border border-[#e5e7eb] py-2 min-w-[420px] z-50 ${isOpen ? '' : 'hidden'}`}
    >
      <a 
        href="teamworks/index.html" 
        className="block px-6 py-4 text-[14px] font-['Inter:Light',sans-serif] text-[#364153] hover:bg-[#f0f7ff] hover:text-[#0066CC] transition-colors no-underline"
      >
        <div className="font-['Inter:Regular',sans-serif] text-[18px] mb-2 text-[#101828]">For SMEs</div>
        <div className="text-[14px] text-[#6a7282] font-['Inter:Light',sans-serif]">Improve team execution, speed, and clarity</div>
      </a>
      <a 
        href="index.html#enterprise-section" 
        data-scroll-to="enterprise-section"
        className="block px-6 py-4 text-[14px] font-['Inter:Light',sans-serif] text-[#364153] hover:bg-[#f0f7ff] hover:text-[#0066CC] transition-colors no-underline"
      >
        <div className="font-['Inter:Regular',sans-serif] text-[18px] mb-2 text-[#101828]">For Enterprises</div>
        <div className="text-[14px] text-[#6a7282] font-['Inter:Light',sans-serif]">Enable delivery at scale, across functions, strategy execution with Agile+AI</div>
      </a>
    </div>
  );
}

function AboutDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <div 
      data-dropdown="about"
      className={`absolute top-full left-0 mt-0 bg-white rounded-lg shadow-lg border border-[#e5e7eb] py-2 min-w-[200px] z-50 ${isOpen ? '' : 'hidden'}`}
    >
      <a 
        href="aboutus.html" 
        className="block px-6 py-4 text-[18px] font-['Inter:Regular',sans-serif] text-[#101828] hover:bg-[#f0f7ff] transition-colors no-underline"
      >
        About Us
      </a>
      <a 
        href="contactus.html" 
        className="block px-6 py-4 text-[18px] font-['Inter:Regular',sans-serif] text-[#101828] hover:bg-[#f0f7ff] transition-colors no-underline"
      >
        Contact Us
      </a>
    </div>
  );
}

export function MainSiteNavigation() {
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="fixed bg-[rgba(255,255,255,0.95)] h-[65px] left-0 px-8 md:px-16 lg:px-24 top-0 w-full z-50 backdrop-blur-sm border-b border-[#e5e7eb]">
      <div className="flex h-[64px] items-center justify-between">
        {/* Logo - 50% larger */}
        <div className="h-[36px]">
          <a href="index.html" className="no-underline flex items-center h-full">
            <img 
              alt="CI Agile Logo" 
              className="h-full w-auto object-contain" 
              src="https://i.postimg.cc/C155yBn1/white-bg-big.jpg" 
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          {/* Programs Dropdown */}
          <div 
            className="relative" 
            data-dropdown-container="programs"
            onMouseEnter={() => {
              setProgramsOpen(true);
              setAboutOpen(false);
            }}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <button 
              data-dropdown-trigger="programs"
              className="flex items-center gap-1 bg-transparent border-0 cursor-pointer transition-colors py-2 pb-4"
            >
              <span 
                className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[14px] transition-colors" 
                data-dropdown-text
                style={{ color: programsOpen ? '#0066CC' : '#364153' }}
              >
                Programs
              </span>
              <svg 
                className="w-3.5 h-3.5 transition-colors" 
                fill="none" 
                viewBox="0 0 14 14" 
                data-dropdown-icon
                style={{ color: programsOpen ? '#0066CC' : '#364153' }}
              >
                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </button>
            <ProgramsDropdown isOpen={programsOpen} />
          </div>

          {/* About Dropdown */}
          <div 
            className="relative" 
            data-dropdown-container="about"
            onMouseEnter={() => {
              setAboutOpen(true);
              setProgramsOpen(false);
            }}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button 
              data-dropdown-trigger="about"
              className="flex items-center gap-1 bg-transparent border-0 cursor-pointer transition-colors py-2 pb-4"
            >
              <span 
                className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[14px] transition-colors" 
                data-dropdown-text
                style={{ color: aboutOpen ? '#0066CC' : '#364153' }}
              >
                About
              </span>
              <svg 
                className="w-3.5 h-3.5 transition-colors" 
                fill="none" 
                viewBox="0 0 14 14" 
                data-dropdown-icon
                style={{ color: aboutOpen ? '#0066CC' : '#364153' }}
              >
                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </button>
            <AboutDropdown isOpen={aboutOpen} />
          </div>

          {/* Contact Button */}
          <a 
            href="contactus.html" 
            className="bg-[#101828] h-[40px] px-6 py-2 flex items-center justify-center rounded no-underline hover:opacity-80 transition-opacity"
          >
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[14px] text-center text-white">
              Talk to an Expert
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
