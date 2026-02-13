import svgPaths from "./svg-qtx8o74vey";
import imgImageWithFallback from "@/assets/img/main/ciagile-about-hero-workshop-table-legacy.webp";
import imgImageWithFallback1 from "@/assets/img/main/ciagile-about-different-banner-team-meeting.webp";
import imgImageEthanSoo from "@/assets/img/main/ciagile-about-founder-portrait-alt.webp";
import imgImageWithFallback2 from "@/assets/img/main/ciagile-about-recommendation-panel-image.webp";
import imgNavigation from "@/assets/img/main/ciagile-main-logo-legacy-nav.webp";
import businessMeetingImage from "@/assets/img/main/ciagile-about-different-section-team-meeting.webp";
import ciAgileConsultingImage from "@/assets/img/main/ciagile-main-consulting-methodology-overview.webp";
import ciAgileLogoImage from "@/assets/img/main/ciagile-main-logo.webp";
import enterpriseTeamImage from "@/assets/img/main/ciagile-main-enterprise-delivery-frameworks.webp";
import ethanSooImage from "@/assets/img/main/ciagile-about-founder-portrait.webp";
import stickyNotesWideImage from "@/assets/img/main/ciagile-about-recommendation-hero-sticky-notes-wide.webp";
import teamCollabImage from "@/assets/img/main/ciagile-about-recommendation-sticky-notes-duplicate.webp";

function Container1() {
  return <div className="absolute bg-[#06c] h-[4px] left-0 top-[32px] w-[48px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="absolute h-[138.5px] left-0 top-[-3.5px] w-[483.484px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[66px] left-0 not-italic text-[#06c] text-[60px] top-[3px] tracking-[-1.2px] w-[484px] whitespace-pre-wrap">Work Gets Done</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[132px] left-0 top-[68px] w-[602.18px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[66px] left-0 not-italic text-[#101828] text-[60px] top-[-0.5px] tracking-[-1.2px]">We Fix How</p>
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[224px] w-[602.18px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[29.25px] left-0 not-italic text-[#4a5565] text-[18px] top-[0.5px] w-[595px] whitespace-pre-wrap">{`CI Agile helps organizations move faster, deliver better outcomes, and build teams that don't burn out.`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[314.5px] left-[279px] top-[80px] w-[602.18px]" data-name="Container">
      <Container1 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[400px] left-[929.18px] top-[80px] w-[501.82px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f3f4f6] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-[544px] relative shrink-0 w-full" data-name="Section">
      <Container />
      <ImageWithFallback />
    </div>
  );
}

function OurBeliefHeader() {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-xs font-normal text-[#6a7282] tracking-[1.2px] uppercase">Our Belief</p>
      <div className="flex flex-col gap-6">
        <div className="border-l-4 border-[#06c] pl-7">
          <p className="text-4xl font-normal text-[#101828] leading-[45px] max-w-3xl">{`Most organizations don't fail because they lack good ideas. They fail because execution is broken.`}</p>
        </div>
        <p className="text-base font-light text-[#4a5565] leading-[26px] max-w-3xl">Work is unclear. Priorities change constantly. Teams move fast but rarely in the same direction. People burn out before outcomes materialize.</p>
      </div>
    </div>
  );
}

function WhatWeStandAgainst() {
  return (
    <div className="flex flex-col gap-8 bg-[#f9fafb] border-r border-[#e5e7eb] p-10">
      <div className="flex items-center gap-3">
        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
          <path d="M18 6L6 18" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6 6L18 18" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
        <h3 className="text-sm font-normal text-[#6a7282] tracking-[0.7px] uppercase">What We Stand Against</h3>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-base font-light text-[#4a5565] leading-[26px]">Theater over outcomes</p>
        <p className="text-base font-light text-[#4a5565] leading-[26px]">Frameworks treated as rules</p>
        <p className="text-base font-light text-[#4a5565] leading-[26px]">Consultants who disappear after delivery</p>
        <p className="text-base font-light text-[#4a5565] leading-[26px]">Speed without clarity</p>
        <p className="text-base font-light text-[#4a5565] leading-[26px]">AI hype without real value</p>
      </div>
    </div>
  );
}

function WhatWeBuild() {
  return (
    <div className="flex flex-col gap-8 bg-white border-l-4 border-[#06c] p-10 pl-11">
      <div className="flex items-center gap-3">
        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24">
          <path d={svgPaths.pace200} stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 12L11 14L15 10" stroke="#0066CC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
        <h3 className="text-sm font-normal text-[#101828] tracking-[0.7px] uppercase">What We Build</h3>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-base font-normal text-[#101828] leading-[26px]">Clarity on what to build and why</p>
        <p className="text-base font-normal text-[#101828] leading-[26px]">Teams that ship value fast</p>
        <p className="text-base font-normal text-[#101828] leading-[26px]">Adaptive systems, not rigid processes</p>
        <p className="text-base font-normal text-[#101828] leading-[26px]">Execution that scales with AI</p>
        <p className="text-base font-normal text-[#101828] leading-[26px]">Results that last beyond the project</p>
      </div>
    </div>
  );
}

function OurBeliefSection() {
  return (
    <div className="flex flex-col gap-16">
      <OurBeliefHeader />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-8">
        <WhatWeStandAgainst />
        <WhatWeBuild />
      </div>
      
      <div className="border-t border-[#e5e7eb] pt-8">
        <p className="text-xl font-light italic text-[#06c] leading-[32.5px] text-center max-w-4xl mx-auto">{`We don't just teach Agile. We embed it into how your organization thinks, plans, and delivers—so it works without us.`}</p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white border-t border-[#e5e7eb] py-20" data-name="Section">
      <div className="max-w-7xl mx-auto px-8">
        <OurBeliefSection />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[40px] left-[215px] top-[80px] w-[672px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-0 tracking-[-0.36px]">What Makes CI Agile Different</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-1px] w-[446px] whitespace-pre-wrap">{`We don't advise from the sidelines. We work where execution happens.`}</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[112px] items-start left-0 pl-[36px] pr-[32px] pt-[24px] top-[84px] w-[563.633px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#06c] border-l-4 border-solid inset-0 pointer-events-none" />
      <Paragraph14 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[280px] left-[603.63px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[676.367px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f3f4f6] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgImageWithFallback1} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[280px] left-[215px] top-[152px] w-[1280px]" data-name="Container">
      <Container14 />
      <ImageWithFallback1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p2f1426c0} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p3bf14f60} id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[32px] size-[48px] top-[32px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[100px] w-[341.328px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0">We Stay Until It Sticks</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[140px] w-[341.328px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] w-[313px] whitespace-pre-wrap">We embed with your teams until transformation becomes culture.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white h-[221.5px] left-0 top-0 w-[405.328px]" data-name="Container">
      <Container17 />
      <Heading5 />
      <Paragraph15 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p360a300} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[32px] size-[48px] top-[32px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[100px] w-[337.336px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0">Execution at Machine Speed</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[140px] w-[337.336px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] w-[310px] whitespace-pre-wrap">AI-powered workflows that accelerate delivery without replacing people.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white border-2 border-[#06c] border-solid h-[221.5px] left-[437.33px] top-0 w-[405.336px]" data-name="Container">
      <Container19 />
      <Heading6 />
      <Paragraph16 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3997a780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p275e0300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[32px] size-[48px] top-[32px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[100px] w-[341.336px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0">From Teams to Enterprises</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[140px] w-[341.336px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] w-[283px] whitespace-pre-wrap">Methods that scale from 5 to 500+ without breaking.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white h-[221.5px] left-[874.66px] top-0 w-[405.336px]" data-name="Container">
      <Container21 />
      <Heading7 />
      <Paragraph17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[221.5px] left-[215px] top-[496px] w-[1280px]" data-name="Container">
      <Container16 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#f7f9f8] relative w-full py-20" data-name="Section">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl font-light text-[#101828] tracking-[-0.36px] mb-16">
          What Makes CI Agile Different
        </h2>
        
        {/* Quote and Image Section */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {/* Quote Box */}
          <div className="bg-white p-9 border-l-4 border-[#06c]">
            <p className="text-2xl font-medium text-[#101828] leading-8">
              We don't advise from the sidelines. We work where execution happens.
            </p>
          </div>
          
          {/* Image */}
          <div className="shadow-lg">
            <img 
              src={businessMeetingImage}
              alt="Business team meeting" 
              className="w-full h-[280px] object-cover"
            />
          </div>
        </div>
        
        {/* Three Cards */}
        <div className="grid grid-cols-3 gap-8">
          {/* Card 1: We Stay Until It Sticks */}
          <div className="bg-white p-8 border-2 border-transparent hover:border-[#06c] transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                <path d="M14 3.5v21M3.5 14h21" stroke="currentColor" className="text-[#99A1AF] group-hover:text-[#0066CC] transition-colors" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                <circle cx="14" cy="14" r="10.5" stroke="currentColor" className="text-[#99A1AF] group-hover:text-[#0066CC] transition-colors" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#101828] mb-3">
              We Stay Until It Sticks
            </h3>
            <p className="text-sm font-light text-[#4a5565] leading-[22.75px]">
              We embed with your teams until transformation becomes culture.
            </p>
          </div>
          
          {/* Card 2: Execution at Machine Speed */}
          <div className="bg-white p-8 border-2 border-transparent hover:border-[#06c] transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                <path d="M24.5 14L14 3.5 3.5 14M14 3.5v21" stroke="currentColor" className="text-[#99A1AF] group-hover:text-[#0066CC] transition-colors" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#101828] mb-3">
              Execution at Machine Speed
            </h3>
            <p className="text-sm font-light text-[#4a5565] leading-[22.75px]">
              AI-powered workflows that accelerate delivery without replacing people.
            </p>
          </div>
          
          {/* Card 3: From Teams to Enterprises */}
          <div className="bg-white p-8 border-2 border-transparent hover:border-[#06c] transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
                <path d="M10.5 24.5v-7h7v7M3.5 10.5l10.5-7 10.5 7v11.667c0 .884-.351 1.732-.976 2.357-.625.625-1.473.976-2.357.976H7.833c-.884 0-1.732-.351-2.357-.976-.625-.625-.976-1.473-.976-2.357V10.5z" stroke="currentColor" className="text-[#99A1AF] group-hover:text-[#0066CC] transition-colors" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#101828] mb-3">
              From Teams to Enterprises
            </h3>
            <p className="text-sm font-light text-[#4a5565] leading-[22.75px]">
              Methods that scale from 5 to 500+ without breaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageEthanSoo() {
  return (
    <div className="col-[1] css-3foyfs h-[240px] opacity-90 relative row-[1] shrink-0" data-name="Image (Ethan Soo)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageEthanSoo} />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-[-1px] tracking-[-0.24px]">Ethan Soo</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[0.6px] uppercase">Founder</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.33%_8.33%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-5.77%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 12.0833">
            <path d={svgPaths.p36e22880} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[8.33%] right-3/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.58333 11.25">
            <path d={svgPaths.p2674f680} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[8.33%] right-3/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-18.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.58333 4.58333">
            <path d={svgPaths.p3eebe600} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-[29.17%] right-1/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.75%_-6.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4167 17.9167">
            <path d={svgPaths.p922f280} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph18 />
      <Container25 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Ethan Soo founded CI Agile to help organizations do what most struggle with: execute with speed, clarity, and sustainability.</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[972px] whitespace-pre-wrap">With decades of experience scaling teams, building products, and transforming how enterprises deliver, Ethan has worked across industries—from startups to global corporations—fixing broken execution models and building systems that last.</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#06c] border-l-2 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[18px] not-italic text-[#101828] text-[14px] top-[0.5px]">{`"The best consulting leaves clients more capable, not more dependent."`}</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[955px] whitespace-pre-wrap">{`He developed the JESS (Jeff's Enterprise Scrum System) framework to address the unique challenges of scaling Agile in complex organizations, integrating AI to accelerate delivery without losing the human element.`}</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">{`CI Agile exists to embed change, transfer knowledge, and build teams that thrive long after we're gone.`}</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[239.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function Container23() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[32px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container24 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-[48px] grid grid-cols-[__minmax(0,_240fr)_minmax(0,_1fr)] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[355.25px] relative shrink-0 w-full" data-name="Container">
      <ImageEthanSoo />
      <Container23 />
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-white relative w-full py-20" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Ethan Soo Section */}
        <div className="flex gap-12 w-full">
          {/* Image */}
          <div className="flex-shrink-0">
            <img 
              src={ethanSooImage} 
              alt="Ethan Soo" 
              className="w-[240px] h-[240px] object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-light text-[#101828] tracking-[-0.24px]">Ethan Soo</h2>
              <p className="text-xs text-[#6a7282] tracking-[0.6px] uppercase">FOUNDER</p>
              
              {/* Social Icons */}
              <div className="flex gap-3 mt-3">
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/ethansoo/" className="w-5 h-5" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 text-[#99A1AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                  </svg>
                </a>
                
                {/* WhatsApp Icon */}
                <a href="https://wa.me/60197889169" className="w-5 h-5" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 text-[#99A1AF]" role="img" viewBox="0 0 24 24" fill="currentColor" aria-label="WhatsApp">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.769.967-.942 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.075-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.214 3.074.148.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 5.232h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64.001 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.896 6.994c-.001 5.45-4.436 9.884-9.891 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.87 11.87 0 0 0 5.735 1.465h.005c6.554 0 11.89-5.335 11.893-11.892a11.82 11.82 0 0 0-3.474-8.402"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col gap-5">
              <p className="text-sm font-light text-[#364153] leading-[22.75px]">
                Ethan Soo founded CI Agile to help organizations do what most struggle with: execute with speed, clarity, and sustainability.
              </p>
              
              <p className="text-sm font-light text-[#364153] leading-[22.75px]">
                With decades of experience scaling teams, building products, and transforming how enterprises deliver, Ethan has worked across industries—from startups to global corporations—fixing broken execution models and building systems that last.
              </p>
              
              {/* Quote */}
              <div className="border-l-2 border-[#06c] pl-[18px] py-0.5">
                <p className="text-sm text-[#101828] leading-[22.75px]">
                  "The best consulting leaves clients more capable, not more dependent."
                </p>
              </div>
              
              <p className="text-sm font-light text-[#364153] leading-[22.75px]">
                He developed the JESS (Jeff's Enterprise Scrum System) framework to address the unique challenges of scaling Agile in complex organizations, integrating AI to accelerate delivery without losing the human element.
              </p>
              
              <p className="text-sm font-light text-[#364153] leading-[22.75px]">
                CI Agile exists to embed change, transfer knowledge, and build teams that thrive long after we're gone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">About CI Agile</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[58.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#101828] text-[18px] top-[0.5px] w-[748px] whitespace-pre-wrap">CI Agile is a business transformation consultancy that specializes in Agile delivery, team optimization, and AI-enabled execution.</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light_Italic',sans-serif] font-light italic leading-[26px] left-0 text-[#364153] text-[16px] top-[-1px]">From teams to enterprises, across industries and regions.</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[29.5px] items-start left-[454.83px] top-[2px] w-[283.008px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[33.6px] not-italic relative shrink-0 text-[#101828] text-[24px]">execution beats strategy</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[33.594px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[33.6px] left-[26px] not-italic text-[#4a5565] text-[24px] top-[-1px]">CI Agile is built on one core principle:</p>
      <Text1 />
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[33.6px] left-[737.84px] not-italic text-[#4a5565] text-[24px] top-[-1px]">.</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[238.094px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start pr-[512px] relative size-full">
        <Paragraph24 />
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-[#f7f9f8] relative w-full py-20" data-name="Section">
      {/* Full-width section with content aligned to the left edge (matching Ethan's image position) */}
      <div className="max-w-7xl mx-auto px-8">
        {/* Content starts at the same position as Ethan's image */}
        <div className="flex flex-col gap-10">
          {/* Heading */}
          <h2 className="text-xs text-[#6a7282] tracking-[1.2px] uppercase">
            About CI Agile
          </h2>
          
          {/* Content */}
          <div className="flex flex-col gap-12">
            {/* Main description */}
            <p className="text-lg text-[#101828] leading-[29.25px]">
              CI Agile is a business transformation consultancy that specializes in Agile delivery, team optimization, and AI-enabled execution.
            </p>
            
            {/* Subtitle */}
            <p className="text-base font-light italic text-[#364153] leading-[26px]">
              From teams to enterprises, across industries and regions.
            </p>
            
            {/* Core principle statement */}
            <div className="border-l-2 border-[#d1d5dc] pl-[26px]">
              <p className="text-2xl font-light text-[#4a5565] leading-[33.6px]">
                CI Agile is built on one core principle: <span className="font-medium text-[#101828]">execution beats strategy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1280px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-0 tracking-[-0.36px]">Experience That Scales</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[26px] left-0 top-[52px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light_Italic',sans-serif] font-light italic leading-[26px] left-0 text-[#4a5565] text-[16px] top-[-1px]">From teams to enterprises, across industries and regions.</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Paragraph27 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p3279c480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p2f66b600} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[48px] top-0" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[60px] left-0 top-[68px] w-[384px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 not-italic text-[#101828] text-[60px] top-[-0.5px] tracking-[-1.5px]">20+</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[140px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Years helping teams execute and scale</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container32 />
      <Container33 />
      <Paragraph28 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p25667780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p1747f000} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p3ee2f100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[48px] top-0" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[60px] left-0 top-[68px] w-[384px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 not-italic text-[#101828] text-[60px] top-[-0.5px] tracking-[-1.5px]">500+</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[140px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Teams trained and transformed</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="col-[2] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container35 />
      <Container36 />
      <Paragraph29 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p25667780} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d={svgPaths.p1906a300} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
          <path d="M3 18H33" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[48px] top-0" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[60px] left-0 top-[68px] w-[384px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[60px] left-0 not-italic text-[#101828] text-[60px] top-[-0.5px] tracking-[-1.5px]">Global</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[22.75px] left-0 top-[140px] w-[384px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Experience across regions and industries</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="col-[3] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container38 />
      <Container39 />
      <Paragraph30 />
    </div>
  );
}

function Container30() {
  return (
    <div className="gap-[64px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[162.75px] relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
      <Container37 />
    </div>
  );
}

function WhereWeFocusSection() {
  return (
    <div className="flex flex-col gap-12 border-t border-[#e5e7eb] pt-12">
      {/* Header */}
      <div className="flex flex-col gap-3 pb-3 border-b border-[#f3f4f6]">
        <h2 className="text-4xl font-semibold text-[#101828]">Where We Focus</h2>
        <p className="text-sm font-light italic text-[#6a7282]">The areas where we consistently create impact.</p>
      </div>

      {/* Four column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Execution & Teams */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p25397b80} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p2c4f400} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p16b3b0c0} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p1fe14e00} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
              <h3 className="text-lg font-bold text-[#101828]">Execution & Teams</h3>
            </div>
            <div className="w-8 h-0.5 bg-[#101828] ml-8"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold text-[#101828]">Execution transformation at enterprise scale</p>
            <p className="text-sm font-light text-[#4a5565]">Team performance & delivery effectiveness</p>
            <p className="text-sm font-light text-[#4a5565] opacity-70">Scrum, Design Thinking & Kanban — practical, not theoretical</p>
          </div>
        </div>

        {/* Column 2: Leadership & Operating Model */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <svg className="w-[17.3px] h-[17.3px] flex-shrink-0" fill="none" viewBox="0 0 17.2969 17.2969">
                <path d={svgPaths.p2408dd00} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44141" />
                <path d={svgPaths.p3354a000} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44141" />
                <path d={svgPaths.p28568980} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44141" />
              </svg>
              <h3 className="text-lg font-bold text-[#101828]">Leadership & Operating Model</h3>
            </div>
            <div className="w-8 h-0.5 bg-[#101828] ml-8"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-light text-[#4a5565]">Organizational design & scaling</p>
            <p className="text-sm font-semibold text-[#101828]">Executive alignment & decision flow</p>
            <p className="text-sm font-light text-[#4a5565]">Strategy-to-execution operating models</p>
          </div>
        </div>

        {/* Column 3: AI-Enabled Execution */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p2810b200} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
              <h3 className="text-lg font-bold text-[#101828]">AI-Enabled Execution</h3>
            </div>
            <div className="w-8 h-0.5 bg-[#101828] ml-8"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-light text-[#4a5565]">AI-enabled workflow improvement</p>
            <p className="text-sm font-light text-[#4a5565]">Automation of repetitive execution work</p>
            <p className="text-sm font-semibold text-[#101828]">Insight-driven prioritization & flow</p>
          </div>
        </div>

        {/* Column 4: Outcomes */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 20 20">
                <path d={svgPaths.p3c797180} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                <path d={svgPaths.p3ac0b600} stroke="#101828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
              <h3 className="text-lg font-bold text-[#101828]">Outcomes</h3>
            </div>
            <div className="w-8 h-0.5 bg-[#101828] ml-8"></div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-bold text-[#101828]">Product delivery acceleration</p>
            <p className="text-sm font-light text-[#4a5565]">Predictability, throughput, and flow</p>
            <p className="text-sm font-light text-[#4a5565]">Sustainable ways of working</p>
          </div>
        </div>
      </div>
    </div>
  );
}



function Container40() {
  return (
    <div className="pt-12" data-name="Container">
      <WhereWeFocusSection />
    </div>
  );
}

function Container28() {
  return (
    <div className="flex flex-col gap-16" data-name="Container">
      <Container29 />
      <Container30 />
      <Container40 />
    </div>
  );
}

function Section5() {
  return (
    <div className="bg-white relative w-full py-20" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8">
        <Container28 />
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[320px] items-start left-0 overflow-clip rounded-[10px] top-0 w-[580px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[84.898px] left-0 top-[-1.5px] w-[516.641px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[41.4px] left-0 not-italic text-[#101828] text-[36px] top-px tracking-[-0.36px] w-[517px] whitespace-pre-wrap">Most execution problems have patterns.</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[84.898px] left-0 top-[81.3px] w-[527.422px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[41.4px] left-0 not-italic text-[#101828] text-[36px] top-px tracking-[-0.36px] w-[528px] whitespace-pre-wrap">We help you see yours—and fix them.</p>
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[165.594px] left-0 top-[344px] w-[580px]" data-name="Heading 2">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[52px] left-0 top-[525.59px] w-[580px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[572px] whitespace-pre-wrap">{`Whether you're scaling a team, fixing delivery flow, or building an execution system that scales, the right approach depends on where you are now.`}</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px]">No obligation. No sales pitch. Just clarity on your next step.</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[41px] items-start left-0 pt-[21px] top-[601.59px] w-[580px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph33 />
    </div>
  );
}

function Container60() {
  return (
    <div className="col-[1] css-3foyfs h-[642.594px] relative row-[1] shrink-0" data-name="Container">
      <Container61 />
      <Heading16 />
      <Paragraph32 />
      <Container62 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[18px] top-0">Get a Custom Recommendation</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">{`Tell us where you are. We'll show you the best path forward.`}</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Work Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Email Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Organization / Role</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px]">e.g., Acme Corp / VP Engineering</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <TextInput1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">What best describes your interest?</p>
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text4() {
  return (
    <div className="absolute h-[20px] left-[26px] top-0 w-[90.008px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Public course</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox />
      <Text4 />
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text5() {
  return (
    <div className="absolute h-[20px] left-[26px] top-0 w-[171.094px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Private / in-house training</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox1 />
      <Text5 />
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text6() {
  return (
    <div className="absolute h-[20px] left-[26px] top-0 w-[168.438px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Enterprise transformation</p>
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox2 />
      <Text6 />
    </div>
  );
}

function Checkbox3() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text7() {
  return (
    <div className="absolute h-[20px] left-[26px] top-0 w-[80.609px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Not sure yet</p>
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox3 />
      <Text7 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[110px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Label5 />
      <Label6 />
      <Label7 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[140px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container68 />
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px]">Biggest challenge right now</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[16px] left-0 text-[#6a7282] text-[12px] top-[0.5px]">Choose the one that hurts the most.</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Select a challenge...</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Slow delivery — work takes too long to get done</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Unclear priorities — everything feels urgent</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">{`Teams are busy but outcomes don't improve`}</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Too many dependencies across teams or functions</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">{`Leadership decisions don't translate into execution`}</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">{`Processes are heavy, rigid, or don't fit how we work`}</p>
    </div>
  );
}

function Option7() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">{`We want to use AI, but don't know where it creates real value`}</p>
    </div>
  );
}

function Option8() {
  return (
    <div className="absolute left-[-920px] size-0 top-[-4722.09px]" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Other (please specify)</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white h-[41px] relative shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none" />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
      <Option7 />
      <Option8 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[87px] items-start relative shrink-0 w-full" data-name="Container">
      <Label8 />
      <Paragraph35 />
      <Dropdown />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[357.18px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#06c] h-[44px] relative shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[253.32px] not-italic text-[16px] text-center text-white top-[9px]">Get a Recommendation</p>
      <Icon14 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[563px] items-start relative shrink-0 w-full" data-name="Form">
      <Container64 />
      <Container65 />
      <Container66 />
      <Container67 />
      <Container69 />
      <Button />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white col-[2] css-por8k5 relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[37px] px-[37px] relative size-full">
        <Heading17 />
        <Paragraph34 />
        <Form />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="gap-[56px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[717px] relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container63 />
    </div>
  );
}

function Section6() {
  return (
    <div className="bg-[#f7f9f8] relative w-full py-20" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-solid border-t inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="flex flex-col gap-6">
            <img 
              src={stickyNotesWideImage} 
              alt="Team collaboration and problem-solving" 
              className="w-full h-auto rounded-lg"
            />
            
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-medium text-[#101828] leading-tight tracking-[-0.36px]">
                Most execution problems have patterns.
              </h2>
              <h3 className="text-4xl font-light text-[#101828] leading-tight tracking-[-0.36px]">
                We help you see yours—and fix them.
              </h3>
              <p className="text-base font-light text-[#364153] leading-relaxed">
                Whether you're scaling a team, fixing delivery flow, or building an execution system that scales, the right approach depends on where you are now.
              </p>
              
              <div className="border-t border-[#d1d5dc] pt-5 mt-1">
                <p className="text-sm font-light text-[#6a7282]">
                  No obligation. No sales pitch. Just clarity on your next step.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white border border-[#e5e7eb] rounded-lg p-9 shadow-sm">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-medium text-[#101828] mb-1">
                  Get a Custom Recommendation
                </h3>
                <p className="text-sm font-light text-[#4a5565]">
                  Tell us where you are. We'll show you the best path forward.
                </p>
              </div>

              <form className="flex flex-col gap-4" id="about-us-form">
                {/* Error Message */}
                <div id="aboutus-error-message" className="hidden message error">
                  <p className="text-sm">Unable to submit form. Please try again.</p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-normal text-[#364153]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="fullName"
                    required
                    className="border border-[#d1d5dc] rounded-none px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>

                {/* Work Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-normal text-[#364153]">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="workEmail"
                    required
                    className="border border-[#d1d5dc] rounded-none px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>

                {/* Organization / Role */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="org" className="text-sm font-normal text-[#364153]">
                    Organization / Role
                  </label>
                  <input
                    type="text"
                    id="org"
                    name="organizationRole"
                    placeholder="e.g., Acme Corp / VP Engineering"
                    className="border border-[#d1d5dc] rounded-none px-3.5 py-2.5 text-sm placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  />
                </div>

                {/* What best describes your interest? */}
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-normal text-[#364153]">
                    What best describes your interest?
                  </label>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="interests" value="Public course" className="w-4 h-4 border-[#d1d5dc] rounded-sm text-[#0066CC] focus:ring-[#0066CC]" />
                      <span className="text-sm font-light text-[#364153]">Public course</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="interests" value="Private / in-house training" className="w-4 h-4 border-[#d1d5dc] rounded-sm text-[#0066CC] focus:ring-[#0066CC]" />
                      <span className="text-sm font-light text-[#364153]">Private / in-house training</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="interests" value="Enterprise transformation" className="w-4 h-4 border-[#d1d5dc] rounded-sm text-[#0066CC] focus:ring-[#0066CC]" />
                      <span className="text-sm font-light text-[#364153]">Enterprise transformation</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="interests" value="Not sure yet" className="w-4 h-4 border-[#d1d5dc] rounded-sm text-[#0066CC] focus:ring-[#0066CC]" />
                      <span className="text-sm font-light text-[#364153]">Not sure yet</span>
                    </label>
                  </div>
                </div>

                {/* Biggest challenge right now */}
                <div className="flex flex-col gap-0.5">
                  <label htmlFor="challenge" className="text-sm font-normal text-[#364153]">
                    Biggest challenge right now
                  </label>
                  <p className="text-xs text-[#6a7282] mb-1">Choose the one that hurts the most.</p>
                  <select
                    id="challenge"
                    name="challenge"
                    className="border border-[#d1d5dc] rounded-none px-3.5 py-2.5 text-sm text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:border-transparent"
                  >
                    <option value="">Select a challenge...</option>
                    <option value="slow-delivery">Slow delivery — work takes too long to get done</option>
                    <option value="unclear-priorities">Unclear priorities — everything feels urgent</option>
                    <option value="busy-no-improvement">Teams are busy but outcomes don't improve</option>
                    <option value="too-many-dependencies">Too many dependencies across teams or functions</option>
                    <option value="leadership-execution-gap">Leadership decisions don't translate into execution</option>
                    <option value="processes-heavy">Processes are heavy, rigid, or don't fit how we work</option>
                    <option value="ai-value">We want to use AI, but don't know where it creates real value</option>
                    <option value="other">Other (please specify)</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#0066CC] text-white font-normal py-2.5 px-6 rounded-none flex items-center justify-center gap-2 hover:bg-[#0052a3] transition-colors mt-2"
                >
                  Get a Recommendation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.33} d="M3.33 8h9.34M9.33 4.67L12.67 8l-3.34 3.33" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[5193.094px] items-start left-0 top-0 w-[1710px]" data-name="AboutPage">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Navigation">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavigation} />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[82.523px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Navigation1 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[67.75px] size-[14px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[81.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[32.5px] not-italic text-[#364153] text-[14px] text-center top-[8.5px]">Programs</p>
        <Icon15 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[17px] relative shrink-0 w-[86.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">Case Studies</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[17px] relative shrink-0 w-[36.922px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">Blogs</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[43.48px] size-[14px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[57.484px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[20px] not-italic text-[#364153] text-[14px] text-center top-[8.5px]">About</p>
        <Icon16 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#101828] flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Talk to an Expert</p>
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[40px] relative shrink-0 w-[549.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Button1 />
        <Link3 />
        <Link4 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Container71 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[65px] items-start left-0 pb-px px-[279px] top-[245px] w-[1710px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container70 />
    </div>
  );
}

export { AboutPage, Section1, Section2, Section3, Section4, Section5, Section6 };

export default function CiAgileMainFrozenPreMergeBranch() {
  return (
    <div className="bg-white relative size-full" data-name="CI Agile Main (Frozen) Pre-Merge Branch">
      <AboutPage />
      <Navigation />
    </div>
  );
}