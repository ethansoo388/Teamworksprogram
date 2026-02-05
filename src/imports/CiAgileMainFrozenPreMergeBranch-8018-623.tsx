import svgPaths from "./svg-45b13tylfc";
import imgImageWithFallback from "figma:asset/40b1d8b8c250769ef13971a417b0e95fe4fbfc1f.png";
import imgImageCiAgile from "figma:asset/fd7a81c1c75169f5c53cda037245ef314f926517.png";

function ImageWithFallback() {
  return (
    <div className="h-[280px] relative rounded-[10px] shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[534.414px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[0.6px] uppercase">Start a conversation</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[82.797px] left-0 top-[40px] w-[534.414px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[41.4px] left-0 not-italic text-[#101828] text-[36px] top-[-0.5px] tracking-[-0.72px] w-[505px] whitespace-pre-wrap">{`Let's understand what's really getting in the way`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[52px] left-0 top-[154.8px] w-[534.414px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[517px] whitespace-pre-wrap">We work with leaders and teams who want clarity — not buzzwords, not frameworks for the sake of it.</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">This conversation helps us understand:</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-1px]">{`what's slowing execution down`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-1px]">{`what's unclear or misaligned`}</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-1px]">{`and whether we're the right partner to help`}</p>
    </div>
  );
}

function List() {
  return (
    <div className="h-[94px] relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[126px] items-start left-0 top-[238.8px] w-[534.414px]" data-name="Container">
      <Paragraph2 />
      <List />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">No obligation. No sales pitch. Just clarity on your next step.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[47.75px] items-start left-0 pt-[25px] top-[396.8px] w-[534.414px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[444.547px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Heading />
      <Paragraph1 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[764.547px] items-start left-0 top-0 w-[534.414px]" data-name="Container">
      <ImageWithFallback />
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-[-0.5px]">Get a Custom Recommendation</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">{`Share a bit of context. We'll respond with a clear recommendation—not a pitch.`}</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px]">Full Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px]">Work Email</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Email Input">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <EmailInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px]">Preferred contact method</p>
    </div>
  );
}

function RadioButton() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Radio Button" />;
}

function Text() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[35.328px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Email</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <RadioButton />
      <Text />
    </div>
  );
}

function RadioButton1() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Radio Button" />;
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[14.5px] items-start left-[72.52px] top-[3.5px] w-[97.258px]" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">(faster response)</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[169.773px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">WhatsApp</p>
      <Text2 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <RadioButton1 />
      <Text1 />
    </div>
  );
}

function RadioButton2() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Radio Button" />;
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[14.5px] items-start left-[45.99px] top-[3.5px] w-[28.148px]" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px]">(call)</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[74.141px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Phone</p>
      <Text4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <RadioButton2 />
      <Text3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Label4 />
      <Label5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Light_Italic',sans-serif] font-light italic leading-[16px] left-0 text-[#6a7282] text-[12px] top-[0.5px]">{`We respect your preference and won't contact you through other channels without consent.`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[142px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container9 />
      <Paragraph5 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px]">Organization / Role</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px]">e.g. Head of Operations, COO, VP Engineering</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <TextInput1 />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px]">What best describes your interest?</p>
    </div>
  );
}

function Checkbox() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text5() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[171.094px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Private / in-house training</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox />
      <Text5 />
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text6() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[198.5px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">{`Team effectiveness & delivery`}</p>
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox1 />
      <Text6 />
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text7() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[168.438px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Enterprise transformation</p>
    </div>
  );
}

function Label10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox2 />
      <Text7 />
    </div>
  );
}

function Checkbox3() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text8() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[141.039px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">AI-enabled execution</p>
    </div>
  );
}

function Label11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox3 />
      <Text8 />
    </div>
  );
}

function Checkbox4() {
  return <div className="absolute left-0 size-[16px] top-[2px]" data-name="Checkbox" />;
}

function Text9() {
  return (
    <div className="absolute h-[20px] left-[28px] top-0 w-[80.609px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px]">Not sure yet</p>
    </div>
  );
}

function Label12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Checkbox4 />
      <Text9 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[148px] items-start relative shrink-0 w-full" data-name="Container">
      <Label8 />
      <Label9 />
      <Label10 />
      <Label11 />
      <Label12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[180px] items-start relative shrink-0 w-full" data-name="Container">
      <Label7 />
      <Container12 />
    </div>
  );
}

function Label13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px]">Biggest challenge right now</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[16px] left-0 text-[#6a7282] text-[12px] top-[0.5px]">Choose the one that hurts the most.</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-703.41px] size-0 top-[-943px] hidden" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Select a challenge...</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-703.41px] size-0 top-[-943px] hidden" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Work is slow and delivery keeps slipping</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-703.41px] size-0 top-[-943px] hidden" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Priorities keep changing</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-703.41px] size-0 top-[-943px] hidden" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">{`Teams are busy but outcomes don't improve`}</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-703.41px] size-0 top-[-943px] hidden" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">Too many dependencies across teams</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-703.41px] size-0 top-[-943px] hidden" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">{`Leadership decisions don't translate into execution`}</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="absolute left-[-703.41px] size-0 top-[-943px] hidden" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">{`Processes are heavy or don't fit how we work`}</p>
    </div>
  );
}

function Option7() {
  return (
    <div className="absolute left-[-703.41px] size-0 top-[-943px] hidden" data-name="Option">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#101828] text-[14px] top-0 w-0 whitespace-pre-wrap">{`We want to use AI but don't know where it creates value`}</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white h-[45px] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
      <Option7 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[93px] items-start relative shrink-0 w-full" data-name="Container">
      <Label13 />
      <Paragraph6 />
      <Dropdown />
    </div>
  );
}

function Label14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px]">Optional: Brief context</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[86px] relative rounded-[8px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Describe your situation in a few lines...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[118.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label14 />
      <TextArea />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[362.72px] size-[16px] top-[16px]" data-name="Icon">
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
    <div className="bg-[#06c] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[249.85px] not-italic text-[16px] text-center text-white top-[11px]">Get My Recommendation</p>
      <Icon />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-[266.52px] not-italic text-[#6a7282] text-[12px] text-center top-[0.5px]">We usually reply within 1–2 business days.</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Paragraph">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[16px] left-[266.11px] not-italic text-[#4a5565] text-[12px] text-center top-[17.5px]">{`You'll hear directly from a CI Agile consultant — not a sales rep.`}</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[137px] items-start pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[1026.5px] items-start relative shrink-0 w-full" data-name="Form">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container10 />
      <Container11 />
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[1196.5px] items-start left-[598.41px] pb-px pt-[41px] px-[41px] rounded-[10px] top-0 w-[614.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <Heading1 />
      <Paragraph4 />
      <Form />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1196.5px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-gradient-to-b from-white h-[1404.5px] relative shrink-0 to-[#fafbfc] w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start pt-[128px] px-[64px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.63%_8.8%]" data-name="Vector">
        <div className="absolute inset-[-3.76%_-3.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.5183 28.571">
            <path d={svgPaths.p20605b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[41px] pr-[450px] top-[41px] w-[482px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[41px] top-[97px] w-[482px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-h-px min-w-px not-italic relative text-[30px] text-white whitespace-pre-wrap">Want to talk directly?</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[52px] left-[41px] top-[149px] w-[482px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.9)] top-[-1px] w-[432px] whitespace-pre-wrap">Skip the form. Get on a call with our team to discuss your challenges and explore how we can help.</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[11.734px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px]">✓</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[20px] left-[23.73px] top-0 w-[237.797px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.9)] top-[0.5px]">15–30 minute conversation, no pitch</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[11.734px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px]">✓</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[20px] left-[23.73px] top-0 w-[277.594px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.9)] top-[0.5px]">Speak with an actual consultant, not sales</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[11.734px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px]">✓</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[20px] left-[23.73px] top-0 w-[187.031px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.9)] top-[0.5px]">Get clarity on your next step</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text14 />
      <Text15 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[90px] items-start left-[41px] top-[225px] w-[482px]" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[300.02px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[224.98px] not-italic text-[#06c] text-[16px] text-center top-[11px]">Schedule a Call</p>
      <Icon2 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[240.89px] not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-center top-[0.5px]">Available Mon–Fri, 9 AM – 6 PM (SGT)</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[80px] items-start left-[41px] top-[347px] w-[482px]" data-name="Container">
      <Button1 />
      <Paragraph10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-gradient-to-b col-[1] css-3foyfs from-[#06c] relative rounded-[10px] row-[1] self-stretch shrink-0 to-[#0052a3]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#06c] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container17 />
      <Heading2 />
      <Paragraph9 />
      <List1 />
      <Container18 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.47%_12.47%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-3.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3438 27.3438">
            <path d={svgPaths.p322e3480} id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[41px] pr-[450px] top-[41px] w-[482px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[41px] top-[97px] w-[482px]" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-h-px min-w-px not-italic relative text-[#101828] text-[30px] whitespace-pre-wrap">Prefer WhatsApp?</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[52px] left-[41px] top-[149px] w-[482px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[478px] whitespace-pre-wrap">If WhatsApp is easier for you, send us a message and our team will follow up during business hours.</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[11.734px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px]">✓</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[20px] left-[23.73px] top-0 w-[297.836px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">{`Message anytime, we'll respond within hours`}</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[11.734px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px]">✓</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[20px] left-[23.73px] top-0 w-[259.406px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Share files, questions, or context easily</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[20px] left-0 top-[2px] w-[11.734px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#06c] text-[14px] top-[0.5px]">✓</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[20px] left-[23.73px] top-0 w-[260.367px]" data-name="Text">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px]">Continue the conversation at your pace</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="List Item">
      <Text20 />
      <Text21 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[90px] items-start left-[41px] top-[225px] w-[482px]" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[340.88px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0066CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#06c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[225.62px] not-italic text-[#06c] text-[16px] text-center top-[11px]">Message us on WhatsApp</p>
      <Icon4 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start relative shrink-0 w-full" data-name="Link">
      <Button2 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[241.84px] not-italic text-[#6a7282] text-[14px] text-center top-[0.5px]">Responses during business hours</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[80px] items-start left-[41px] top-[347px] w-[482px]" data-name="Container">
      <Link />
      <Paragraph12 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f8fafc] col-[2] css-3foyfs relative rounded-[10px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container20 />
      <Heading3 />
      <Paragraph11 />
      <List2 />
      <Container21 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white h-[596px] relative shrink-0 w-full" data-name="Section">
      <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] px-[94.5px] py-[64px] relative size-full">
        <Container16 />
        <Container19 />
      </div>
    </div>
  );
}

function Section2() {
  return <div className="bg-white h-[112px] shrink-0 w-full" data-name="Section" />;
}

function ImageCiAgile() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[96.273px]" data-name="Image (CI Agile)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCiAgile} />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[52px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[22.75px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px] w-[314px] whitespace-pre-wrap">Transforming organizations with AI-driven agile methodology to deliver better business results.</p>
    </div>
  );
}

function Icon5() {
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

function Link1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
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

function Link2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
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

function Link3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#364153] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[40px] items-start left-0 top-[129.5px] w-[352px]" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[216px] left-0 top-[64px] w-[352px]" data-name="Container">
      <ImageCiAgile />
      <Paragraph13 />
      <Container24 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">Programs</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[62.75px]" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">For SMEs</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[100.406px]" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">For Enterprises</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[216px] items-start left-[400px] top-[64px] w-[152px]" data-name="Container">
      <Heading4 />
      <List3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">Resources</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[86.938px]" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Case Studies</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[36.922px]" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Blogs</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[216px] items-start left-[600px] top-[64px] w-[152px]" data-name="Container">
      <Heading5 />
      <List4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">About</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[61.234px]" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">About Us</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[73.727px]" data-name="Link">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Contact Us</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[60px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem13 />
      <ListItem14 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[216px] items-start left-[800px] top-[64px] w-[152px]" data-name="Container">
      <Heading6 />
      <List5 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[152px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">Contact</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[152px]" data-name="Link">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px]">romanoff@ciagile.com</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[152px]" data-name="Link">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[0.5px]">+60 19 298 1055</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function List6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[52px] items-start left-0 top-[36px] w-[152px]" data-name="List">
      <ListItem15 />
      <ListItem16 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[16px] left-0 top-[120px] w-[152px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.5px] tracking-[1.2px] uppercase">Our Location</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[58.07px]" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Malaysia</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[4px] w-[67.266px]" data-name="Text">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Singapore</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text23 />
    </div>
  );
}

function List7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[60px] items-start left-0 top-[156px] w-[152px]" data-name="List">
      <ListItem17 />
      <ListItem18 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[216px] left-[1000px] top-[64px] w-[152px]" data-name="Container">
      <Heading7 />
      <List6 />
      <Heading8 />
      <List7 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[345px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-b border-solid inset-0 pointer-events-none" />
      <Container23 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Paragraph14() {
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

function Container30() {
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

function Container29() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
      <Container30 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0f1419] h-[425px] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start px-[94.5px] relative size-full">
        <Container22 />
        <Container29 />
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[2537.5px] items-start left-0 top-0 w-[1341px]" data-name="ContactPage">
      <Section />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Navigation">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCiAgile} />
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[82.523px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Navigation1 />
      </div>
    </div>
  );
}

function Icon8() {
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

function Button3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[81.75px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[32.5px] not-italic text-[#364153] text-[14px] text-center top-[8.5px]">Programs</p>
        <Icon8 />
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[17px] relative shrink-0 w-[86.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">Case Studies</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[17px] relative shrink-0 w-[36.922px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Light',sans-serif] font-light leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px]">Blogs</p>
      </div>
    </div>
  );
}

function Icon9() {
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

function Button4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[57.484px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[20px] left-[20px] not-italic text-[#364153] text-[14px] text-center top-[8.5px]">About</p>
        <Icon9 />
      </div>
    </div>
  );
}

function Button5() {
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

function Container32() {
  return (
    <div className="h-[40px] relative shrink-0 w-[549.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Button3 />
        <Link16 />
        <Link17 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link15 />
      <Container32 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[65px] items-start left-0 pb-px px-[94.5px] top-0 w-[1341px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container31 />
    </div>
  );
}

export default function CiAgileMainFrozenPreMergeBranch() {
  return (
    <div className="bg-white relative size-full" data-name="CI Agile Main (Frozen) Pre-Merge Branch">
      <ContactPage />
      <Navigation />
    </div>
  );
}

// Named exports for use in ContactUsPage
export { Section as ContactSection, Section1 as ContactCTASection, Section2 as ContactSpacerSection };