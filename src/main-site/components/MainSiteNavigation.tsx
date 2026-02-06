// Shared Navigation Component for Main Site
// Logo is 50% larger, "Case Studies" and "Blogs" removed
// Dropdown interactions use data attributes for static HTML compatibility

function ProgramsDropdown() {
  return (
    <div 
      data-dropdown="programs"
      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-[#e5e7eb] py-2 min-w-[200px] z-50 hidden"
    >
      <a 
        href="teamworks/index.html" 
        className="block px-4 py-2 text-[14px] font-['Inter:Light',sans-serif] font-light text-[#364153] hover:bg-gray-50 no-underline"
      >
        TeamWorks Program
      </a>
      <a 
        href="index.html#enterprise-transformation" 
        className="block px-4 py-2 text-[14px] font-['Inter:Light',sans-serif] font-light text-[#364153] hover:bg-gray-50 no-underline"
      >
        Enterprise Transformation
      </a>
    </div>
  );
}

function AboutDropdown() {
  return (
    <div 
      data-dropdown="about"
      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-[#e5e7eb] py-2 min-w-[200px] z-50 hidden"
    >
      <a 
        href="aboutus.html" 
        className="block px-4 py-2 text-[14px] font-['Inter:Light',sans-serif] font-light text-[#364153] hover:bg-gray-50 no-underline"
      >
        About Us
      </a>
      <a 
        href="aboutus.html#our-team" 
        className="block px-4 py-2 text-[14px] font-['Inter:Light',sans-serif] font-light text-[#364153] hover:bg-gray-50 no-underline"
      >
        Our Team
      </a>
    </div>
  );
}

export function MainSiteNavigation() {
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
          <div className="relative">
            <button 
              data-dropdown-trigger="programs"
              className="flex items-center gap-1 bg-transparent border-0 cursor-pointer hover:opacity-80 transition-opacity py-2"
            >
              <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                Programs
              </span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </button>
            <ProgramsDropdown />
          </div>

          {/* About Dropdown */}
          <div className="relative">
            <button 
              data-dropdown-trigger="about"
              className="flex items-center gap-1 bg-transparent border-0 cursor-pointer hover:opacity-80 transition-opacity py-2"
            >
              <span className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#364153] text-[14px]">
                About
              </span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
              </svg>
            </button>
            <AboutDropdown />
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
