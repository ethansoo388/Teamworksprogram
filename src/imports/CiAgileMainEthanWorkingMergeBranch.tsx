import svgPaths from "./svg-0jlmd5mwk8";
import { useState, type ReactNode } from "react";
import agileTeamImage from "@/assets/img/main/team-working-together-sticky-note-on-wall.jpg";
import businessPresentationImage from "@/assets/img/main/business-presentation-meeting-room.jpg";
import ciAgileLogoWhite from "@/assets/img/main/ci-agile-logo-white.png";
import imageWithFallback48 from "@/assets/img/main/48aa90649a4e56f3a94eb6f4c6e253b63dfc1bc1.png";
import imageWithFallback6d from "@/assets/img/main/6d210643b84c08db9772a3b123a072f99723cbe2.png";
import imageWithFallbackc6 from "@/assets/img/main/c6d2c7633e2d949942ac8c8f2f4005858cf4f3da.png";
import presenterImage from "@/assets/img/main/presenter-at-flip-chart-black-and-white.jpg";
import ciAgileLogo from "@/assets/img/main/ci-agile-logo.png";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

function SectionContainer({ children, className = "" }: SectionContainerProps) {
  const base = "w-full max-w-7xl mx-auto px-8 lg:px-16";
  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}


function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#99a1af] text-[12px] text-center tracking-[1.2px] uppercase">Trusted by Industry Leaders</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[40px] not-italic text-[#101828] text-[36px] text-center tracking-[-0.36px]">Transforming organizations across Asia Pacific</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Heading1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-lg">HSBC</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-4 not-italic text-[#99a1af] text-xs">Banking</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="col-[1] css-por8k5 relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[26px] relative size-full">
          <Container3 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-lg">Bank of China</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-4 not-italic text-[#99a1af] text-xs">Banking</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-[2] css-por8k5 relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[26px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-lg">DBS</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-4 not-italic text-[#99a1af] text-xs">Banking</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-[3] css-por8k5 relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[26px] relative size-full">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-lg">GovTech Singapore</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-4 not-italic text-[#99a1af] text-xs">Government</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-[4] css-por8k5 relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[26px] relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-lg">Bank Negara Malaysia</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-4 not-italic text-[#99a1af] text-xs">Government</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-[1] css-por8k5 relative row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[26px] relative size-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-lg">Cisco</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-4 not-italic text-[#99a1af] text-xs">Technology</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-[2] css-por8k5 relative row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[26px] relative size-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-lg">Infineon</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-4 not-italic text-[#99a1af] text-xs">Technology</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-[3] css-por8k5 relative row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[26px] relative size-full">
          <Container21 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-lg">Shell</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="w-auto" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-4 not-italic text-[#99a1af] text-xs">Energy</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="col-[4] css-por8k5 relative row-[2] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[26px] relative size-full">
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-[40px] gap-[48px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(2,_minmax(0,_1fr))] h-[136px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container5 />
      <Container8 />
      <Container11 />
      <Container14 />
      <Container17 />
      <Container20 />
      <Container23 />
    </div>
  );
}

function ClientLogos() {
  return (
    <div className="bg-[#f9fafb] w-full py-16" data-name="ClientLogos">
      <SectionContainer className="content-stretch flex flex-col gap-16 min-h-[272px] items-start">
        <Container />
        <Container1 />
      </SectionContainer>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[48px] w-full" data-name="Heading 2">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic text-[#101828] text-[48px] tracking-[-0.48px]">Challenges We Solve</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-auto w-full mt-6" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic text-[#4a5565] text-[18px] max-w-[768px] whitespace-pre-wrap">Organizations face common roadblocks that prevent them from achieving their full potential. We help you overcome these challenges.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="min-h-[128px] w-full flex flex-col" data-name="Container">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="min-h-[20px] w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px]">01</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="min-h-[28px] w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic text-[#101828] text-[20px]">Missed Opportunities</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="min-h-[52px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#4a5565] text-[16px] max-w-[356px] whitespace-pre-wrap">Critical business opportunities slipping through inefficient processes and lack of agility.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex flex-col gap-[16px] min-h-[158px] w-full pt-[26px] border-t-2 border-[#101828] border-solid" data-name="Container">
      <Container29 />
      <Heading3 />
      <Paragraph2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="min-h-[20px] w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px]">02</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="min-h-[28px] w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic text-[#101828] text-[20px]">Frustrated Teams</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="min-h-[52px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#4a5565] text-[16px] max-w-[343px] whitespace-pre-wrap">Teams struggling with unclear priorities, poor collaboration, and outdated methodologies.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex flex-col gap-[16px] min-h-[158px] w-full pt-[26px] border-t-2 border-[#101828] border-solid" data-name="Container">
      <Container31 />
      <Heading4 />
      <Paragraph3 />
    </div>
  );
}

function Container33() {
  return (
    <div className="min-h-[20px] w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px]">03</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="min-h-[28px] w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic text-[#101828] text-[20px]">Transformation Fatigue</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="min-h-[52px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#4a5565] text-[16px] max-w-[354px] whitespace-pre-wrap">Failed transformation initiatives leading to burnout, skepticism, and resistance to change.</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex flex-col gap-[16px] min-h-[158px] w-full pt-[26px] border-t-2 border-[#101828] border-solid" data-name="Container">
      <Container33 />
      <Heading5 />
      <Paragraph4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[64px] w-full" data-name="Container">
      <Container28 />
      <Container30 />
      <Container32 />
    </div>
  );
}

function ProblemSection() {
  return (
    <SectionContainer className="bg-white content-stretch flex flex-col gap-20 min-h-[558px] items-start pt-24">
      <Container26 />
      <Container27 />
    </SectionContainer>
  );
}

function Heading6() {
  return (
    <div className="min-h-[120px] w-full" data-name="Heading 2">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[60px] not-italic text-[#101828] text-[48px] tracking-[-0.48px] max-w-[271px] whitespace-pre-wrap">The CI Agile Difference</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="min-h-[52px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#4a5565] text-[16px] max-w-[465px] whitespace-pre-wrap">We help organizations execute delivery systems that produce measurable business outcomes.</p>
    </div>
  );
}

function Container36() {
  return <div className="hidden lg:block bg-gradient-to-b from-[rgba(0,0,0,0)] h-full to-[rgba(0,0,0,0)] via-1/2 via-[#d1d5dc] w-px absolute left-0 top-0" data-name="Container" />;
}

function Heading7() {
  return (
    <div className="min-h-[24px] w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#364153] group-hover:text-[#101828] text-[16px] transition-colors">Proven Delivery Systems That Scale</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="min-h-[22.75px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[22.75px] not-italic text-[#6a7282] group-hover:text-[#4a5565] text-[14px] transition-colors">Frameworks adapted to enterprise operating requirements</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="min-h-[16px] w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic text-[#99a1af] group-hover:text-[#101828] text-[12px] whitespace-pre-wrap transition-colors">01</p>
    </div>
  );
}

function Button() {
  return (
    <div className="border-[rgba(0,0,0,0)] hover:border-[#101828] hover:bg-white border-l-2 border-solid min-h-[102.75px] w-full max-w-[512px] group transition-colors p-6 flex flex-col gap-2" data-name="Button">
      <Container37 />
      <Heading7 />
      <Paragraph6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="min-h-[24px] w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#364153] group-hover:text-[#101828] text-[16px] transition-colors">Operating Models Built for Execution</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="min-h-[22.75px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[22.75px] not-italic text-[#6a7282] group-hover:text-[#4a5565] text-[14px] transition-colors">Governance and structures designed for decision clarity</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="min-h-[16px] w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic text-[#99a1af] group-hover:text-[#101828] text-[12px] whitespace-pre-wrap transition-colors">02</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="border-[rgba(0,0,0,0)] hover:border-[#101828] hover:bg-white border-l-2 border-solid min-h-[102.75px] w-full max-w-[512px] group transition-colors p-6 flex flex-col gap-2" data-name="Button">
      <Container38 />
      <Heading8 />
      <Paragraph7 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="min-h-[24px] w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#364153] group-hover:text-[#101828] text-[16px] transition-colors">AI Embedded Into Everyday Work</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="min-h-[22.75px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[22.75px] not-italic text-[#6a7282] group-hover:text-[#4a5565] text-[14px] transition-colors">Technology applied where it improves speed and quality</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="min-h-[16px] w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic text-[#99a1af] group-hover:text-[#101828] text-[12px] whitespace-pre-wrap transition-colors">03</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="border-[rgba(0,0,0,0)] hover:border-[#101828] hover:bg-white border-l-2 border-solid min-h-[102.75px] w-full max-w-[512px] group transition-colors p-6 flex flex-col gap-2" data-name="Button">
      <Container39 />
      <Heading9 />
      <Paragraph8 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="min-h-[24px] w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#364153] group-hover:text-[#101828] text-[16px] transition-colors">Experience from Complex, Real Enterprises</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="min-h-[45.5px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[22.75px] not-italic text-[#6a7282] group-hover:text-[#4a5565] text-[14px] max-w-[386px] whitespace-pre-wrap transition-colors">500+ engagements across regulated industries and global operations</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="min-h-[16px] w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic text-[#99a1af] group-hover:text-[#101828] text-[12px] whitespace-pre-wrap transition-colors">04</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="border-[rgba(0,0,0,0)] hover:border-[#101828] hover:bg-white border-l-2 border-solid min-h-[125.5px] w-full max-w-[512px] group transition-colors p-6 flex flex-col gap-2" data-name="Button">
      <Container40 />
      <Heading10 />
      <Paragraph9 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative w-full flex flex-col gap-2" data-name="Container">
      <Container36 />
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start w-full lg:w-1/2" data-name="Container">
      <Heading6 />
      <Paragraph5 />
      <Container35 />
    </div>
  );
}

function Container42() {
  return <div className="absolute bg-gradient-to-b from-[#e5edf0] left-1/4 opacity-50 rounded-[32px] w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 to-[#edf2f4] top-20" data-name="Container" />;
}

function Container43() {
  return <div className="absolute bg-gradient-to-b from-[#dce8ed] left-1/6 opacity-60 rounded-3xl w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 to-[#e8eff1] top-32 md:top-48" data-name="Container" />;
}

function Container44() {
  return <div className="absolute bg-gradient-to-b from-[#d0dfe5] left-1/3 opacity-70 rounded-2xl w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 to-[#dde7ea] top-48 md:top-60" data-name="Container" />;
}

function Container45() {
  return <div className="absolute bg-[#c5d9e0] left-1/3 md:left-2/5 opacity-35 rounded-xl w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 top-60 md:top-72" data-name="Container" />;
}

function Container41() {
  return (
    <div className="relative h-[600px] w-full lg:w-1/2 min-w-[400px]" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function CtaSection() {
  return (
    <div className="bg-[#f7f9f8] w-full min-h-[957.75px] flex flex-col items-center justify-center py-16" data-name="CTASection">
      <SectionContainer className="flex flex-col lg:flex-row gap-8 items-center">
        <Container34 />
        <Container41 />
      </SectionContainer>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[48px] w-full mb-12" data-name="Heading 2">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic text-[#101828] text-[48px] tracking-[-0.48px]">Programs</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-auto w-full mt-6" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic text-[#4a5565] text-[18px] max-w-[768px] whitespace-pre-wrap">We work with organizations from SMEs to global enterprises. Programs are designed for specific operating contexts and team sizes.</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="min-h-[128px] w-full flex flex-col" data-name="Container">
      <Heading11 />
      <Paragraph10 />
    </div>
  );
}

function Text() {
  return (
    <div className="flex items-start min-h-[14.5px] w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#99a1af] text-[12px] tracking-[1.2px] uppercase">{`For Teams & SMEs`}</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="flex items-start min-h-[36px] w-full" data-name="Heading 3">
      <p className="flex-1 font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic text-[#101828] text-[30px] whitespace-pre-wrap">TeamWorks Program</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="border-[#101828] border-l-2 border-solid min-h-[28px] w-full pl-4" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic text-[#364153] text-[20px]">Make your team work better. Faster. Together.</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="min-h-[104px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#4a5565] text-[16px] max-w-[470px] whitespace-pre-wrap">Teams fail when work is unclear and priorities shift constantly. TeamWorks cuts through the chaos—helping your team focus on what matters, collaborate seamlessly, and deliver without burnout.</p>
    </div>
  );
}

function Container52() {
  return <div className="bg-[#101828] size-[4px] shrink-0 mt-2" data-name="Container" />;
}

function Text1() {
  return (
    <div className="min-h-[20px] flex-1" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">Agile fundamentals</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="flex gap-2 items-start" data-name="Container">
      <Container52 />
      <Text1 />
    </div>
  );
}

function Container54() {
  return <div className="bg-[#101828] size-[4px] shrink-0 mt-2" data-name="Container" />;
}

function Text2() {
  return (
    <div className="min-h-[20px] flex-1" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">Team collaboration</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="flex gap-2 items-start" data-name="Container">
      <Container54 />
      <Text2 />
    </div>
  );
}

function Container56() {
  return <div className="bg-[#101828] size-[4px] shrink-0 mt-2" data-name="Container" />;
}

function Text3() {
  return (
    <div className="min-h-[20px] flex-1" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">Delivery optimization</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex gap-2 items-start" data-name="Container">
      <Container56 />
      <Text3 />
    </div>
  );
}

function Container58() {
  return <div className="bg-[#101828] size-[4px] shrink-0 mt-2" data-name="Container" />;
}

function Text4() {
  return (
    <div className="min-h-[20px] flex-1" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">Continuous improvement</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="flex gap-2 items-start" data-name="Container">
      <Container58 />
      <Text4 />
    </div>
  );
}

function Container50() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" data-name="Container">
      <Container51 />
      <Container53 />
      <Container55 />
      <Container57 />
    </div>
  );
}

function Icon() {
  return (
    <div className="size-[16px] ml-2" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <a href="teamworks/index.html" className="border-[#101828] border-b border-solid min-h-[25px] w-fit inline-flex items-center gap-1 no-underline hover:border-[#4a5565] transition-colors" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#101828] text-[14px]">Learn More</p>
      <Icon />
    </a>
  );
}

function Container49() {
  return (
    <div className="flex flex-col gap-8 w-full p-16" data-name="Container">
      <Text />
      <Heading12 />
      <Paragraph11 />
      <Paragraph12 />
      <Container50 />
      <Link />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="w-full h-[500px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="relative h-full w-full">
        <div className="absolute bg-[#f3f4f6] inset-0" />
        <img alt="Agile team collaboration" className="absolute max-w-none object-cover size-full" src={agileTeamImage} />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" data-name="Container">
      <ImageWithFallback />
      <Container49 />
    </div>
  );
}

function Text5() {
  return (
    <div className="flex items-start min-h-[14.5px] w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#99a1af] text-[12px] tracking-[1.2px] uppercase">For Enterprises</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="min-h-[40px] w-full mt-2" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#6a7282] text-[14px] max-w-[467px] whitespace-pre-wrap">{`Powered by the Nova Program and Jeff Sutherland's Enterprise Scrum System (JESS)`}</p>
    </div>
  );
}

function Heading13() {
  return (
    <div className="min-h-[120px] w-full flex flex-col" data-name="Heading 3">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[36px] not-italic text-[#101828] text-[30px] max-w-[321px] whitespace-pre-wrap">{`Enterprise Execution & Transformation`}</p>
      <Container61 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="border-[#101828] border-l-2 border-solid min-h-[28px] w-full pl-4" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic text-[#364153] text-[20px]">Turn strategy into execution — at scale.</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="min-h-[78px] w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[26px] not-italic text-[#4a5565] text-[16px] max-w-[465px] whitespace-pre-wrap">{`Big ideas don't fail. Execution does. This program aligns leadership and teams, fixes slow delivery, and leverages AI to accelerate decision-making and outcomes at scale.`}</p>
    </div>
  );
}

function Container64() {
  return <div className="bg-[#101828] size-[4px] shrink-0 mt-2" data-name="Container" />;
}

function Text6() {
  return (
    <div className="min-h-[20px] flex-1" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">Executive alignment</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex gap-2 items-start" data-name="Container">
      <Container64 />
      <Text6 />
    </div>
  );
}

function Container66() {
  return <div className="bg-[#101828] size-[4px] shrink-0 mt-2" data-name="Container" />;
}

function Text7() {
  return (
    <div className="min-h-[20px] flex-1" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">Operating model design</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="flex gap-2 items-start" data-name="Container">
      <Container66 />
      <Text7 />
    </div>
  );
}

function Container68() {
  return <div className="bg-[#101828] size-[4px] shrink-0 mt-2" data-name="Container" />;
}

function Text8() {
  return (
    <div className="min-h-[20px] flex-1" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">AI enablement</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="flex gap-2 items-start" data-name="Container">
      <Container68 />
      <Text8 />
    </div>
  );
}

function Container70() {
  return <div className="bg-[#101828] size-[4px] shrink-0 mt-2" data-name="Container" />;
}

function Text9() {
  return (
    <div className="min-h-[20px] flex-1" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#4a5565] text-[14px]">Scale transformation</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="flex gap-2 items-start" data-name="Container">
      <Container70 />
      <Text9 />
    </div>
  );
}

function Container62() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full" data-name="Container">
      <Container63 />
      <Container65 />
      <Container67 />
      <Container69 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="size-[16px] ml-2" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="border-[#101828] border-b border-solid min-h-[25px] w-fit inline-flex items-center gap-1" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#101828] text-[14px]">Learn More</p>
      <Icon1 />
    </div>
  );
}

function Container60() {
  return (
    <div className="flex flex-col gap-8 w-full p-16" data-name="Container">
      <Text5 />
      <Heading13 />
      <Paragraph13 />
      <Paragraph14 />
      <Container62 />
      <Link1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="w-full h-[500px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="relative h-full w-full">
        <div className="absolute bg-[#f3f4f6] inset-0" />
        <img alt="JESS (Jeff Sutherland's Enterprise Scrum System)" className="absolute max-w-none object-cover size-full" src={businessPresentationImage} />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div id="enterprise-section" className="bg-white w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" data-name="Container">
      <Container60 />
      <ImageWithFallback1 />
    </div>
  );
}

function Container47() {
  return (
    <div className="flex flex-col w-full" data-name="Container">
      <Container48 />
      <Container59 />
    </div>
  );
}

function ProgramsSection() {
  return (
    <div id="programs-section" className="bg-[#f9fafb] content-stretch flex flex-col gap-20 min-h-[1313px] w-full py-16" data-name="ProgramsSection">
      <SectionContainer className="content-stretch flex flex-col gap-20 items-center">
        <div className="w-full">
          <Container46 />
        </div>
        <div className="w-full">
          <Container47 />
        </div>
      </SectionContainer>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[16px] w-full mb-8 mt-16" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic text-[#99a1af] text-[12px] text-center tracking-[1.2px] uppercase">Our Methodology</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[60px] w-full mb-12" data-name="Heading 2">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[60px] not-italic text-[48px] text-center text-white tracking-[-0.48px]">How We Deliver Results</p>
    </div>
  );
}

function Container74() {
  return <div className="absolute border-2 border-[rgba(0,102,204,0.4)] border-solid left-1/4 rounded-full w-16 h-16 md:w-20 md:h-20 top-12" data-name="Container" />;
}

function Container75() {
  return <div className="absolute border-2 border-[rgba(0,102,204,0.3)] border-solid left-1/3 rounded-full w-16 h-16 md:w-20 md:h-20 top-16" data-name="Container" />;
}

function Container76() {
  return <div className="absolute bg-[rgba(0,102,204,0.15)] right-1/4 rounded-full w-12 h-12 md:w-16 md:h-16 top-20" data-name="Container" />;
}

function Container73() {
  return (
    <div className="bg-gradient-to-b from-[#1e3a52] h-48 overflow-clip relative shrink-0 to-[#0d2b3c] w-full" data-name="Container">
      <Container74 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Text10() {
  return (
    <span className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#6a7282] text-lg ml-2" data-name="Text">›</span>
  );
}

function Heading15() {
  return (
    <div className="flex items-center w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-lg text-white">Diagnose the Real Problem</p>
      <Text10 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-6 not-italic text-[#d1d5dc] text-sm max-w-xs">We start with what truly matters. We align on outcomes, constraints, and real business context — not pre-packaged frameworks.</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="w-full" data-name="Container">
      <div className="flex flex-col gap-3 items-start pt-6 px-6">
        <Heading15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#0d1f2d] col-[1] content-stretch css-vsca90 flex flex-col items-start overflow-clip relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container73 />
      <Container77 />
    </div>
  );
}

function Container81() {
  return <div className="border border-[rgba(0,102,204,0.3)] border-solid h-9" data-name="Container" />;
}

function Container82() {
  return <div className="border border-[rgba(0,102,204,0.2)] border-solid h-9" data-name="Container" />;
}

function Container83() {
  return <div className="border border-[rgba(0,102,204,0.3)] border-solid h-9" data-name="Container" />;
}

function Container84() {
  return <div className="border border-[rgba(0,102,204,0.2)] border-solid h-9" data-name="Container" />;
}

function Container85() {
  return <div className="bg-[rgba(0,102,204,0.2)] border border-[rgba(0,102,204,0.4)] border-solid h-9" data-name="Container" />;
}

function Container86() {
  return <div className="border border-[rgba(0,102,204,0.2)] border-solid h-9" data-name="Container" />;
}

function Container87() {
  return <div className="border border-[rgba(0,102,204,0.3)] border-solid h-9" data-name="Container" />;
}

function Container88() {
  return <div className="border border-[rgba(0,102,204,0.2)] border-solid h-9" data-name="Container" />;
}

function Container89() {
  return <div className="border border-[rgba(0,102,204,0.3)] border-solid h-9" data-name="Container" />;
}

function Container80() {
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-[240px]" data-name="Container">
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-gradient-to-b from-[#1e3a52] h-[192px] relative shrink-0 to-[#0d2b3c] w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <span className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#6a7282] text-lg ml-2" data-name="Text">›</span>
  );
}

function Heading16() {
  return (
    <div className="flex items-center w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-lg text-white">Design the Right System</p>
      <Text11 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-6 not-italic text-[#d1d5dc] text-sm max-w-xs">Built for how your organization actually works. Operating models, governance, ways of working, and AI enablement tailored to your reality.</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[201.75px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] relative size-full">
        <Heading16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-[#0d1f2d] col-[2] content-stretch css-vsca90 flex flex-col items-start overflow-clip relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container79 />
      <Container90 />
    </div>
  );
}

function Container93() {
  return <div className="absolute border-2 border-[rgba(0,102,204,0.4)] border-solid left-8 md:left-12 w-10 h-10 md:w-12 md:h-12 top-20 md:top-24" data-name="Container" />;
}

function Container94() {
  return <div className="absolute border-2 border-[rgba(0,102,204,0.35)] border-solid left-20 md:left-24 w-12 h-12 md:w-16 md:h-16 top-12 md:top-16" data-name="Container" />;
}

function Container95() {
  return <div className="absolute border-2 border-[rgba(0,102,204,0.3)] border-solid right-12 md:right-16 w-16 h-16 md:w-20 md:h-20 top-8" data-name="Container" />;
}

function Container96() {
  return <div className="absolute bg-[rgba(0,102,204,0.2)] right-4 md:right-8 w-8 h-8 top-8" data-name="Container" />;
}

function Container92() {
  return (
    <div className="bg-gradient-to-b from-[#1e3a52] h-48 overflow-clip relative shrink-0 to-[#0d2b3c] w-full" data-name="Container">
      <Container93 />
      <Container94 />
      <Container95 />
      <Container96 />
    </div>
  );
}

function Text12() {
  return (
    <span className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#6a7282] text-lg ml-2" data-name="Text">›</span>
  );
}

function Heading17() {
  return (
    <div className="flex items-center w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-lg text-white">{`Enable Teams & Execution`}</p>
      <Text12 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-6 not-italic text-[#d1d5dc] text-sm max-w-xs">Change that sticks, not theory. We work with leaders and teams on the ground to embed new ways of working into daily execution.</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="w-full" data-name="Container">
      <div className="flex flex-col gap-3 items-start pt-6 px-6">
        <Heading17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#0d1f2d] col-[3] content-stretch css-vsca90 flex flex-col items-start overflow-clip relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container92 />
      <Container97 />
    </div>
  );
}

function Container100() {
  return <div className="absolute border-2 border-[rgba(0,102,204,0.5)] border-solid left-1/3 rounded-full w-20 h-20 md:w-24 md:h-24 top-12" data-name="Container" />;
}

function Container101() {
  return <div className="absolute border-2 border-[rgba(0,102,204,0.4)] border-solid left-2/5 rounded-full w-12 h-12 md:w-16 md:h-16 top-16" data-name="Container" />;
}

function Container102() {
  return <div className="absolute bg-[rgba(0,102,204,0.3)] left-1/2 rounded-full w-6 h-6 md:w-8 md:h-8 top-20" data-name="Container" />;
}

function Container103() {
  return <div className="absolute border border-[rgba(0,102,204,0.2)] border-solid left-1/4 rounded-full w-28 h-28 md:w-32 md:h-32 top-8" data-name="Container" />;
}

function Container99() {
  return (
    <div className="bg-gradient-to-b from-[#1e3a52] h-48 overflow-clip relative shrink-0 to-[#0d2b3c] w-full" data-name="Container">
      <Container100 />
      <Container101 />
      <Container102 />
      <Container103 />
    </div>
  );
}

function Text13() {
  return (
    <span className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#6a7282] text-lg ml-2" data-name="Text">›</span>
  );
}

function Heading18() {
  return (
    <div className="flex items-center w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-lg text-white">Deliver Measurable Results</p>
      <Text13 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-6 not-italic text-[#d1d5dc] text-sm max-w-xs">Results you can see and sustain. Clear metrics, faster flow, better decisions, and outcomes that matter to the business.</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="w-full" data-name="Container">
      <div className="flex flex-col gap-3 items-start pt-6 px-6">
        <Heading18 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[#0d1f2d] col-[4] content-stretch css-vsca90 flex flex-col items-start overflow-clip relative row-[1] self-stretch shadow-[0px_0px_0px_1px_rgba(0,102,204,0.3)] shrink-0" data-name="Container">
      <Container99 />
      <Container104 />
    </div>
  );
}

function Container71() {
  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full" data-name="Container">
      <Container72 />
      <Container78 />
      <Container91 />
      <Container98 />
    </div>
  );
}

function HowWeWorkSection() {
  return (
    <div className="bg-[#1a2837] w-full min-h-[843px] flex flex-col items-center justify-center py-16" data-name="HowWeWorkSection">
      <SectionContainer className="flex flex-col gap-8">
        <Paragraph15 />
        <Heading14 />
        <Container71 />
      </SectionContainer>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[48px] w-full" data-name="Heading 2">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic text-[#101828] text-[48px] tracking-[-0.48px]">Industries We Transform</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-auto w-full mt-6" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic text-[#4a5565] text-[18px] max-w-[768px]">Deep expertise across diverse sectors, delivering tangible business results</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="min-h-[100px] w-full flex flex-col" data-name="Container">
      <Heading19 />
      <Paragraph20 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-xl transition-colors">{`Banking & Financial Services`}</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-7 not-italic text-[#4a5565] group-hover:text-[#101828] text-base transition-colors">Accelerate digital transformation while maintaining compliance and security.</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="col-[1] css-por8k5 relative row-[1] self-stretch shrink-0 cursor-pointer group" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] group-hover:border-[#101828] border-l-2 border-solid inset-0 pointer-events-none transition-colors" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[34px] relative size-full">
        <Heading20 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-xl transition-colors">{`Government & GLC`}</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-7 not-italic text-[#4a5565] group-hover:text-[#101828] text-base transition-colors">Modernize public sector operations with proven agile frameworks.</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="col-[2] css-por8k5 relative row-[1] self-stretch shrink-0 cursor-pointer group" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] group-hover:border-[#101828] border-l-2 border-solid inset-0 pointer-events-none transition-colors" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[34px] relative size-full">
        <Heading21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-xl transition-colors">{`Technology & Product Teams`}</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-7 not-italic text-[#4a5565] group-hover:text-[#101828] text-base transition-colors">Build innovative products faster with agile best practices.</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="col-[1] css-por8k5 relative row-[2] self-stretch shrink-0 cursor-pointer group" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] group-hover:border-[#101828] border-l-2 border-solid inset-0 pointer-events-none transition-colors" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[34px] relative size-full">
        <Heading22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-7 not-italic text-[#101828] text-xl transition-colors">{`Corporate Operations & Shared Services`}</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-7 not-italic text-[#4a5565] group-hover:text-[#101828] text-base transition-colors">Optimize operations and drive efficiency across the organization.</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="col-[2] css-por8k5 relative row-[2] self-stretch shrink-0 cursor-pointer group" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] group-hover:border-[#101828] border-l-2 border-solid inset-0 pointer-events-none transition-colors" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[34px] relative size-full">
        <Heading23 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(2,_auto)] relative w-full" data-name="Container">
      <Container107 />
      <Container108 />
      <Container109 />
      <Container110 />
    </div>
  );
}

function IndustriesSection() {
  return (
    <div className="bg-white w-full py-20" data-name="IndustriesSection">
      <SectionContainer className="content-stretch flex flex-col gap-12 items-start">
        <Container105 />
        <Container106 />
      </SectionContainer>
    </div>
  );
}

function Container113() {
  return <div className="hidden lg:block absolute border border-[#06c] border-solid right-0 rounded-full w-64 h-64 lg:w-96 lg:h-96 top-20" data-name="Container" />;
}

function Container114() {
  return <div className="hidden md:block absolute bg-[rgba(0,102,204,0.3)] blur-[64px] left-1/6 w-48 h-48 md:w-64 md:h-64 top-52" data-name="Container" />;
}

function Container115() {
  return <div className="hidden md:block absolute border border-[rgba(0,102,204,0.6)] border-solid left-1/4 rounded-full w-56 h-56 md:w-80 md:h-80 top-80" data-name="Container" />;
}

function Container116() {
  return <div className="hidden lg:block absolute bg-[rgba(0,136,255,0.15)] blur-[40px] right-1/4 w-32 h-32 lg:w-48 lg:h-48 top-[360px]" data-name="Container" />;
}

function Container117() {
  return <div className="hidden lg:block absolute inset-0" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 102, 204, 0.08) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(rgba(0, 102, 204, 0.08) 0.15823%, rgba(0, 0, 0, 0) 0.15823%)" }} />;
}

function Container112() {
  return (
    <div className="absolute inset-0 opacity-8 pointer-events-none" data-name="Container">
      <Container113 />
      <Container114 />
      <Container115 />
      <Container116 />
      <Container117 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[75px] not-italic text-[60px] text-white tracking-[-0.6px]">Proven Results</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[32.5px] not-italic text-[#d1d5dc] text-[20px] max-w-[477px]">Real outcomes from real organizations. Our clients consistently achieve measurable improvements.</p>
    </div>
  );
}

function Container119() {
  return (
    <div className="flex flex-col gap-[24px] items-start justify-center flex-1" data-name="Container">
      <Heading24 />
      <Paragraph25 />
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="bg-clip-text font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic text-5xl text-[rgba(0,0,0,0)]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 136, 255) 100%)", WebkitTextFillColor: "transparent" }}>
        40%
      </p>
    </div>
  );
}

function Container124() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px] tracking-[0.35px] uppercase">Faster Time-to-Market</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full" data-name="Container">
      <Container123 />
      <Container124 />
    </div>
  );
}

function Container125() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[136px] left-[270.25px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,136,255,0.5)] w-px" data-name="Container" />;
}

function Container126() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-[135px] via-1/2 via-[rgba(0,136,255,0.5)] w-[271.25px]" data-name="Container" />;
}

function Container121() {
  return (
    <div className="relative border-r border-b border-[rgba(0,136,255,0.3)]" data-name="Container">
      <Container122 />
    </div>
  );
}

function Container129() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="bg-clip-text font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic text-5xl text-[rgba(0,0,0,0)]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 136, 255) 100%)", WebkitTextFillColor: "transparent" }}>
        60%
      </p>
    </div>
  );
}

function Container130() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px] tracking-[0.35px] uppercase">Team Productivity Boost</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full" data-name="Container">
      <Container129 />
      <Container130 />
    </div>
  );
}

function Container131() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 to-[rgba(0,0,0,0)] top-[135px] via-1/2 via-[rgba(0,136,255,0.5)] w-[271.25px]" data-name="Container" />;
}

function Container127() {
  return (
    <div className="relative border-b border-[rgba(0,136,255,0.3)]" data-name="Container">
      <Container128 />
    </div>
  );
}

function Container134() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="bg-clip-text font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic text-5xl text-[rgba(0,0,0,0)] max-w-[255px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 136, 255) 100%)", WebkitTextFillColor: "transparent" }}>
        3 Months
      </p>
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px] tracking-[0.35px] uppercase">To Measurable Impact</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full" data-name="Container">
      <Container134 />
      <Container135 />
    </div>
  );
}

function Container136() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[208px] left-[270.25px] to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,136,255,0.5)] w-px" data-name="Container" />;
}

function Container132() {
  return (
    <div className="relative border-r border-[rgba(0,136,255,0.3)]" data-name="Container">
      <Container133 />
    </div>
  );
}

function Container138() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="bg-clip-text font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic text-5xl text-[rgba(0,0,0,0)]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgb(255, 255, 255) 0%, rgb(0, 136, 255) 100%)", WebkitTextFillColor: "transparent" }}>
        98%
      </p>
    </div>
  );
}

function Container139() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px] tracking-[0.35px] uppercase">Client Satisfaction</p>
    </div>
  );
}

function Container137() {
  return (
    <div className="relative" data-name="Container">
      <div className="flex flex-col gap-[12px] items-start w-full">
        <Container138 />
        <Container139 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="gap-[32px] grid grid-cols-2 flex-1" data-name="Container">
      <Container121 />
      <Container127 />
      <Container132 />
      <Container137 />
    </div>
  );
}

function Container118() {
  return (
    <SectionContainer className="py-20 lg:py-32">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left side - Heading and description */}
        <div className="flex flex-col gap-6 flex-1 max-w-[500px]">
          <h2 className="font-['Inter:Light',sans-serif] font-light leading-[75px] not-italic text-[60px] text-white tracking-[-0.6px]">
            Proven Results
          </h2>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[32.5px] not-italic text-[#d1d5dc] text-[20px]">
            Real outcomes from real organizations. Our clients consistently achieve measurable improvements.
          </p>
        </div>

        {/* Right side - Stats grid */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12 flex-1 max-w-[600px]">
          {/* Stat 1 - 40% */}
          <div className="flex flex-col gap-3">
            <div className="text-5xl lg:text-6xl font-['Inter:Light',sans-serif] font-light leading-tight bg-gradient-to-b from-white to-[#0088ff] bg-clip-text text-transparent">
              40%
            </div>
            <div className="font-['Inter:Light',sans-serif] font-light leading-[20px] text-[#99a1af] text-[14px] tracking-[0.35px] uppercase">
              Faster Time-to-Market
            </div>
          </div>

          {/* Stat 2 - 60% */}
          <div className="flex flex-col gap-3">
            <div className="text-5xl lg:text-6xl font-['Inter:Light',sans-serif] font-light leading-tight bg-gradient-to-b from-white to-[#0088ff] bg-clip-text text-transparent">
              60%
            </div>
            <div className="font-['Inter:Light',sans-serif] font-light leading-[20px] text-[#99a1af] text-[14px] tracking-[0.35px] uppercase">
              Team Productivity Boost
            </div>
          </div>

          {/* Stat 3 - 3 Months */}
          <div className="flex flex-col gap-3">
            <div className="font-['Inter:Light',sans-serif] font-light leading-tight bg-gradient-to-b from-white to-[#0088ff] bg-clip-text text-transparent">
              <span className="text-5xl lg:text-6xl">3</span>
              <br />
              <span className="text-[24px] lg:text-[30px]">Months</span>
            </div>
            <div className="font-['Inter:Light',sans-serif] font-light leading-[20px] text-[#99a1af] text-[14px] tracking-[0.35px] uppercase">
              To Measurable Impact
            </div>
          </div>

          {/* Stat 4 - 98% */}
          <div className="flex flex-col gap-3">
            <div className="text-5xl lg:text-6xl font-['Inter:Light',sans-serif] font-light leading-tight bg-gradient-to-b from-white to-[#0088ff] bg-clip-text text-transparent">
              98%
            </div>
            <div className="font-['Inter:Light',sans-serif] font-light leading-[20px] text-[#99a1af] text-[14px] tracking-[0.35px] uppercase">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

function Container111() {
  return (
    <div className="bg-[#0a1929] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container118 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="w-full" data-name="Heading 3">
      <p className="font-['Inter:Light',sans-serif] font-light leading-10 not-italic text-[#101828] text-4xl">What Our Clients Say</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light_Italic',sans-serif] font-light italic leading-[26px] left-0 text-[#364153] text-[16px] top-[-1px] w-[501px] whitespace-pre-wrap">{`"Agile isn't just a framework — it's a mindset shift. This program changed how we think about work, delivery, and results. Practical, empowering, and immediately applicable to real teams."`}</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-6 not-italic text-[#101828] text-base">Head of Digital Services</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-5 not-italic text-[#6a7282] text-sm">POS Aviation</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col h-[69px] items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container144 />
      <Container145 />
    </div>
  );
}

function Container142() {
  return (
    <div className="col-[1] css-por8k5 relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pl-[34px] relative size-full">
        <Paragraph26 />
        <Container143 />
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light_Italic',sans-serif] font-light italic leading-[26px] left-0 text-[#364153] text-[16px] top-[-1px] w-[549px] whitespace-pre-wrap">{`"This program reframed change and uncertainty as a competitive advantage. The training delivered practical insights, hands-on exercises, and clear ways to help organizations navigate complexity and perform better."`}</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-6 not-italic text-[#101828] text-base">General Manager</p>
    </div>
  );
}

function Container149() {
  return (
    <div className="w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-5 not-italic text-[#6a7282] text-sm">Malaysia Airport</p>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col h-[69px] items-start pt-[25px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container148 />
      <Container149 />
    </div>
  );
}

function Container146() {
  return (
    <div className="col-[2] css-por8k5 relative row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start pl-[34px] relative size-full">
        <Paragraph27 />
        <Container147 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[205px] relative shrink-0 w-full" data-name="Container">
      <Container142 />
      <Container146 />
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-white h-[501px] relative shrink-0 w-full" data-name="Container">
      <SectionContainer className="py-20">
        <h3 className="font-['Inter:Light',sans-serif] font-light leading-10 not-italic text-[#101828] text-4xl mb-12">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="flex flex-col gap-6">
            <p className="font-['Inter:Light_Italic',sans-serif] font-light italic leading-[26px] text-[#364153] text-[16px]">
              "Agile isn't just a framework — it's a mindset shift. This program changed how we think about work, delivery, and results. Practical, empowering, and immediately applicable to real teams."
            </p>
            <div className="border-t border-[#e5e7eb] pt-4">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-6 text-[#101828] text-base">
                Head of Digital Services
              </p>
              <p className="font-['Inter:Light',sans-serif] font-light leading-5 text-[#6a7282] text-sm mt-1">
                POS Aviation
              </p>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="flex flex-col gap-6">
            <p className="font-['Inter:Light_Italic',sans-serif] font-light italic leading-[26px] text-[#364153] text-[16px]">
              "This program reframed change and uncertainty as a competitive advantage. The training delivered practical insights, hands-on exercises, and clear ways to help organizations navigate complexity and perform better."
            </p>
            <div className="border-t border-[#e5e7eb] pt-4">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-6 text-[#101828] text-base">
                General Manager
              </p>
              <p className="font-['Inter:Light',sans-serif] font-light leading-5 text-[#6a7282] text-sm mt-1">
                Malaysia Airport
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

function ProvenResultsSection() {
  return (
    <div className="bg-[#f9fafb] w-full" data-name="ProvenResultsSection">
      <SectionContainer className="content-stretch flex flex-col items-start">
        <Container111 />
      </SectionContainer>
      <Container140 />
    </div>
  );
}


function Container151() {
  return (
    <div className="bg-[#1e2939] h-[24px] w-auto mx-auto px-4 rounded mb-4" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#d1d5dc] text-[12px] text-center tracking-[1.2px] uppercase py-1">Get Started Today</p>
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-auto w-full mb-6" data-name="Heading 2">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[48px] not-italic text-[48px] text-center text-white tracking-[-0.48px]">Ready to Transform Your Organization?</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-auto w-full max-w-[672px] mx-auto mb-8" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[28px] not-italic text-[#d1d5dc] text-[18px] text-center whitespace-pre-wrap">Join 500+ organizations that have transformed their delivery and business outcomes with our proven methodology.</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="flex flex-col items-center w-full mb-12" data-name="Container">
      <Container151 />
      <Heading26 />
      <Paragraph28 />
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[16px] text-center text-white whitespace-pre-wrap">Free Strategy Consultation</p>
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px] text-center whitespace-pre-wrap">30-minute session with our experts</p>
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-center flex-1 px-8 py-6 border-r border-[rgba(255,255,255,0.1)]" data-name="Container">
      <Container154 />
      <Container155 />
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[16px] text-center text-white">Customized Roadmap</p>
    </div>
  );
}

function Container158() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px] text-center whitespace-pre-wrap">Tailored to your unique context</p>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-center flex-1 px-8 py-6 border-r border-[rgba(255,255,255,0.1)]" data-name="Container">
      <Container157 />
      <Container158 />
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[16px] text-center text-white">No Commitment</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic text-[#99a1af] text-[14px] text-center">Explore with zero obligation</p>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-center flex-1 px-8 py-6" data-name="Container">
      <Container160 />
      <Container161 />
    </div>
  );
}

function Container152() {
  return (
    <div className="flex w-full max-w-[768px] mx-auto mb-12" data-name="Container">
      <Container153 />
      <Container156 />
      <Container159 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="size-[18px] shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3.75 9H14.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 3.75L14.25 9L9 14.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <a href="contactus.html" className="bg-[#06c] h-[48px] relative shrink-0 w-auto min-w-[268.359px] block no-underline" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full flex items-center justify-center gap-2 px-6 hover:opacity-80 transition-opacity">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[16px] text-center text-white whitespace-nowrap">Schedule Consultation</p>
        <Icon2 />
      </div>
    </a>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-[224.922px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[34px] py-[2px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] text-center">Download Our Guide</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex gap-4 h-[48px] items-start justify-center w-full" data-name="Container">
      <Link2 />
      <Button4 />
    </div>
  );
}

function FinalCtaSection() {
  return (
    <div className="bg-[#101828] w-full flex items-center justify-center py-32" data-name="FinalCTASection">
      <SectionContainer className="flex flex-col items-center">
        <Container150 />
        <Container152 />
        <Container162 />
      </SectionContainer>
    </div>
  );
}

function ImageCiAgile() {
  return (
    <div className="h-[48px] w-[210px]" data-name="Image (CI Agile)">
      <img alt="CI Agile Logo" className="h-full w-full object-contain object-left" src={ciAgileLogoWhite} />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="w-full max-w-[352px]" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[22.75px] text-[#99a1af] text-[14px] max-w-[314px] whitespace-pre-wrap">Transforming organizations with AI-driven agile methodology to deliver better business results.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p204bd7c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d={svgPaths.pad25e80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d={svgPaths.p127a4d00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <a href="https://www.linkedin.com/company/ciagile/" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[40px] hover:opacity-80 transition-opacity" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon3 />
      </div>
    </a>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p1e200900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d={svgPaths.p35138200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <a href="https://www.youtube.com/channel/UC3J5gbjuIOwPep5c3b7x2Tw" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[40px] hover:opacity-80 transition-opacity" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon4 />
      </div>
    </a>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3c358280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <a href="https://web.facebook.com/ciagile.education" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[40px] hover:opacity-80 transition-opacity" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon5 />
      </div>
    </a>
  );
}

function Container165() {
  return (
    <div className="flex gap-[16px] items-start" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container164() {
  return (
    <div className="w-[352px]" data-name="Container">
      <div className="flex flex-col gap-4">
        <ImageCiAgile />
        <Paragraph29 />
        <Container165 />
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">Programs</p>
    </div>
  );
}

function Link6() {
  return (
    <a href="teamworks/index.html" className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[62.75px] no-underline hover:opacity-80 transition-opacity" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">For SMEs</p>
    </a>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <a href="index.html#enterprise-section" data-scroll-to="enterprise-section" className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[100.406px] no-underline hover:opacity-80 transition-opacity cursor-pointer" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">For Enterprises</p>
    </a>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

function Container166() {
  return (
    <div className="flex flex-col gap-[20px] items-start w-[152px]" data-name="Container">
      <Heading27 />
      <List />
    </div>
  );
}

function Heading28() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">About</p>
    </div>
  );
}

function Link8() {
  return (
    <a href="aboutus.html" className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[61.234px] no-underline hover:opacity-80 transition-opacity" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">About Us</p>
    </a>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <a href="contactus.html" className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[73.727px] no-underline hover:opacity-80 transition-opacity" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Contact Us</p>
    </a>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container167() {
  return (
    <div className="flex flex-col gap-[20px] items-start w-[152px]" data-name="Container">
      <Heading28 />
      <List1 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#6a7282] text-[12px] tracking-[1.2px] uppercase">Contact</p>
    </div>
  );
}

function Link10() {
  return (
    <a href="mailto:romanoff@ciagile.com?subject=Service%20Inquiry" className="absolute h-[20px] left-0 top-0 w-[352px] no-underline hover:opacity-80 transition-opacity" data-name="Link">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px]">romanoff@ciagile.com</p>
    </a>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <a href="https://wa.me/60192981055?text=Service%20Inquiry" target="_blank" rel="noopener noreferrer" className="absolute h-[20px] left-0 top-0 w-[352px] no-underline hover:opacity-80 transition-opacity" data-name="Link">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px]">+60 19 298 1055</p>
    </a>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function List2() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="w-full" data-name="Heading 3">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#6a7282] text-[12px] tracking-[1.2px] uppercase">Our Location</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[58.07px]" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Malaysia</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text14 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[67.266px]" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Singapore</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text15 />
    </div>
  );
}

function List3() {
  return (
    <div className="flex flex-col gap-[12px] items-start w-full" data-name="List">
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container168() {
  return (
    <div className="w-[352px]" data-name="Container">
      <div className="flex flex-col gap-[20px]">
        <Heading29 />
        <List2 />
        <Heading30 />
        <List3 />
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="relative shrink-0 w-full py-16" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex items-start gap-8 w-full">
        <Container164 />
        <div className="flex gap-[48px] items-start ml-auto">
          <Container166 />
          <Container167 />
          <Container168 />
        </div>
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[204.328px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px]">© 2025 CI Agile. All rights reserved.</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[79.344px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[16px] relative shrink-0 w-[76.992px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px]">Cookie Policy</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[16px] relative shrink-0 w-[316.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-start relative size-full">
        <Link12 />
        <Link13 />
        <Link14 />
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph30 />
      <Container170 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0f1419] content-stretch flex flex-col min-h-[425px] items-start w-full py-16" data-name="Footer">
      <SectionContainer className="flex flex-col gap-8">
        <Container163 />
        <Container169 />
      </SectionContainer>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[138px] w-full" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[69px] not-italic text-[#101828] text-[60px] tracking-[-1.2px] whitespace-pre-wrap">Faster, Clearer, At Scale</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-auto w-full mb-6" data-name="Heading 1">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[69px] not-italic text-[#101828] text-[60px] tracking-[-1.2px] whitespace-pre-wrap mb-4">Deliver Better Results</p>
      <Text16 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-auto w-full mb-6" data-name="Paragraph">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[29.25px] not-italic text-[#4a5565] text-[18px] whitespace-pre-wrap">Turn your business challenges into real results. We help you fix missed opportunities, energize frustrated teams, and overcome transformation fatigue.</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="size-[16px] shrink-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <a href="contactus.html" className="bg-[#101828] h-[48px] relative shrink-0 w-auto block no-underline" data-name="Button">
      <div className="relative size-full flex items-center justify-center gap-2 px-6 hover:opacity-80 transition-opacity">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[16px] text-center text-white whitespace-nowrap">Talk to an Expert</p>
        <Icon6 />
      </div>
    </a>
  );
}

function Link15() {
  return (
    <div className="h-[48px] relative shrink-0 w-[190.391px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <a href="#programs-section" className="bg-white h-[48px] relative shrink-0 w-auto block no-underline" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#101828] border-solid inset-0 pointer-events-none" />
      <div className="relative size-full flex items-center justify-center px-6 cursor-pointer hover:opacity-80 transition-opacity">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[#101828] text-[16px] text-center whitespace-nowrap">View Our Programs</p>
      </div>
    </a>
  );
}

function Link16Programs() {
  return (
    <div className="h-[48px] relative shrink-0 w-[214.617px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button6 />
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex gap-4 h-[48px] items-start w-full mb-8" data-name="Container">
      <Link15 />
      <Link16Programs />
    </div>
  );
}

function Container175() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[40px] not-italic text-[#101828] text-[36px]">500+</p>
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#6a7282] text-[12px] tracking-[0.6px] uppercase">Organizations</p>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col gap-1 h-[60px] items-start flex-1" data-name="Container">
      <Container175 />
      <Container176 />
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[40px] not-italic text-[#101828] text-[36px]">15+</p>
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#6a7282] text-[12px] tracking-[0.6px] uppercase">Years</p>
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col gap-1 h-[60px] items-start flex-1" data-name="Container">
      <Container178 />
      <Container179 />
    </div>
  );
}

function Container181() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[40px] not-italic text-[#101828] text-[36px]">98%</p>
    </div>
  );
}

function Container182() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic text-[#6a7282] text-[12px] tracking-[0.6px] uppercase">Satisfaction</p>
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col gap-1 h-[60px] items-start flex-1" data-name="Container">
      <Container181 />
      <Container182 />
    </div>
  );
}

function Container173() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t min-h-[93px] w-full flex gap-4 pt-8" data-name="Container">
      <Container174 />
      <Container177 />
      <Container180 />
    </div>
  );
}

function Container171() {
  return (
    <div className="flex flex-col items-start justify-center py-8 lg:py-16" data-name="Container">
      <Heading />
      <Paragraph31 />
      <Container172 />
      <Container173 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="w-full h-full min-h-[400px]" data-name="ImageWithFallback">
      <img alt="Corporate training and consulting" className="w-full h-full object-cover pointer-events-none" src={presenterImage} />
    </div>
  );
}

function Container184() {
  return <div className="hidden" data-name="Container" />;
}

function Container183() {
  return (
    <div className="bg-[#f3f4f6] flex items-center justify-center overflow-hidden" data-name="Container">
      <ImageWithFallback2 />
      <Container184 />
    </div>
  );
}

function Hero() {
  return (
    <SectionContainer className="bg-white grid grid-cols-1 lg:grid-cols-2 pt-16 min-h-[864.75px]">
      <Container171 />
      <Container183 />
    </SectionContainer>
  );
}

function HomePage() {
  return (
    <div className="bg-white w-full flex flex-col" data-name="HomePage">
      <Hero />
      <ClientLogos />
      <ProblemSection />
      <CtaSection />
      <ProgramsSection />
      <HowWeWorkSection />
      <IndustriesSection />
      <ProvenResultsSection />
      <FinalCtaSection />
      {/* Footer removed - will be added explicitly in IndexPage for consistency with other pages */}
    </div>
  );
}

function Navigation1() {
  return (
    <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative" data-name="Navigation">
      <img alt="CI Agile Logo" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={ciAgileLogo} />
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[82.523px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <a href="index.html" className="no-underline flex items-center h-full">
          <img alt="CI Agile Logo" className="h-full w-auto object-contain" src={ciAgileLogo} />
        </a>
      </div>
    </div>
  );
}

function Icon7() {
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

function Button8({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <div className="h-[36px] relative shrink-0 w-[81.75px]" data-name="Button">
      <button 
        onClick={onClick}
        className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full cursor-pointer bg-transparent hover:opacity-80 transition-opacity"
      >
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[32.5px] not-italic text-[#364153] text-[14px] text-center top-[8.5px]">Programs</p>
        <Icon7 />
      </button>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[17px] relative shrink-0 w-[86.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">Case Studies</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="h-[17px] relative shrink-0 w-[36.922px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">Blogs</p>
      </div>
    </div>
  );
}

function Icon8() {
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

function Button9({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <div className="h-[36px] relative shrink-0 w-[57.484px]" data-name="Button">
      <button 
        onClick={onClick}
        className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full cursor-pointer bg-transparent hover:opacity-80 transition-opacity"
      >
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[20px] not-italic text-[#364153] text-[14px] text-center top-[8.5px]">About</p>
        <Icon8 />
      </button>
    </div>
  );
}

function Button10() {
  return (
    <a href="contactus.html" className="bg-[#101828] flex-[1_0_0] h-[40px] min-h-px min-w-px relative block no-underline" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full hover:opacity-80 transition-opacity">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Talk to an Expert</p>
        </div>
      </div>
    </a>
  );
}

function ProgramsDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  
  const scrollToEnterpriseSection = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose(); // Close dropdown before scrolling
    
    // Check if we're on the homepage
    const isHomepage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname === '';
    
    if (isHomepage) {
      // On homepage, scroll to the section
      const section = document.getElementById('enterprise-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // On other pages, navigate to homepage with hash
      window.location.href = 'index.html#enterprise-section';
    }
  };
  
  return (
    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[420px] z-50 border border-[#e5e7eb]">
      <a href="teamworks/index.html" onClick={onClose} className="block px-6 py-4 text-[14px] font-['Inter:Light',sans-serif] text-[#364153] hover:bg-gray-50 transition-colors">
        <div className="font-['Inter:Regular',sans-serif] text-[18px] mb-2 text-[#101828]">For SMEs</div>
        <div className="text-[14px] text-[#6a7282] font-['Inter:Light',sans-serif]">Improve team execution, speed, and clarity</div>
      </a>
      <a href="#enterprise-section" onClick={scrollToEnterpriseSection} className="block px-6 py-4 text-[14px] font-['Inter:Light',sans-serif] text-[#364153] hover:bg-gray-50 transition-colors">
        <div className="font-['Inter:Regular',sans-serif] text-[18px] mb-2 text-[#101828]">For Enterprises</div>
        <div className="text-[14px] text-[#6a7282] font-['Inter:Light',sans-serif]">Enable delivery at scale, across functions, strategy execution with Agile+AI</div>
      </a>
    </div>
  );
}

function AboutDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50 border border-[#e5e7eb]">
      <a href="aboutus.html" onClick={onClose} className="block px-4 py-3 text-[14px] font-['Inter:Light',sans-serif] text-[#364153] hover:bg-gray-50 transition-colors">
        About Us
      </a>
      <a href="contactus.html" onClick={onClose} className="block px-4 py-3 text-[14px] font-['Inter:Light',sans-serif] text-[#364153] hover:bg-gray-50 transition-colors">
        Contact Us
      </a>
    </div>
  );
}

function Container187({ 
  programsOpen, 
  aboutOpen, 
  togglePrograms, 
  toggleAbout 
}: { 
  programsOpen: boolean; 
  aboutOpen: boolean; 
  togglePrograms: () => void; 
  toggleAbout: () => void; 
}) {
  const closePrograms = () => togglePrograms();
  const closeAbout = () => toggleAbout();
  
  return (
    <div className="h-[40px] relative shrink-0 w-[549.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <div className="relative">
          <Button8 onClick={togglePrograms} isOpen={programsOpen} />
          <ProgramsDropdown isOpen={programsOpen} onClose={closePrograms} />
        </div>
        <Link17 />
        <Link18 />
        <div className="relative">
          <Button9 onClick={toggleAbout} isOpen={aboutOpen} />
          <AboutDropdown isOpen={aboutOpen} onClose={closeAbout} />
        </div>
        <Button10 />
      </div>
    </div>
  );
}

function Container186({ 
  programsOpen, 
  aboutOpen, 
  togglePrograms, 
  toggleAbout 
}: { 
  programsOpen: boolean; 
  aboutOpen: boolean; 
  togglePrograms: () => void; 
  toggleAbout: () => void; 
}) {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link16 />
      <Container187 
        programsOpen={programsOpen}
        aboutOpen={aboutOpen}
        togglePrograms={togglePrograms}
        toggleAbout={toggleAbout}
      />
    </div>
  );
}

function Navigation() {
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const togglePrograms = () => {
    setProgramsOpen(!programsOpen);
    setAboutOpen(false);
  };

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
    setProgramsOpen(false);
  };

  return (
    <div className="fixed bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[65px] items-start left-0 pb-px px-8 md:px-16 lg:px-24 top-0 w-full z-50 backdrop-blur-sm" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container186 
        programsOpen={programsOpen}
        aboutOpen={aboutOpen}
        togglePrograms={togglePrograms}
        toggleAbout={toggleAbout}
      />
    </div>
  );
}

export { Navigation as MainSiteNavigation, Footer as MainSiteFooter, HomePage };

export default function CiAgileMainEthanWorkingMergeBranch() {
  return (
    <div className="bg-white relative size-full" data-name="CI Agile Main (Ethan Working Merge) Branch">
      <HomePage />
      <Navigation />
    </div>
  );
}