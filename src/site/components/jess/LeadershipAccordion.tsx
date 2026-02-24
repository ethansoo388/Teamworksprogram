import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const items: AccordionItem[] = [
  {
    id: "effective-system",
    title: "Effective System",
    description:
      "Design an execution system that aligns strategy, teams, and governance — so work flows end-to-end without constant intervention.",
    image:
      "https://i.postimg.cc/hGqpcy3m/Effective-leadership-Malaysian-leaders-look-like.jpg",
  },
  {
    id: "clear-roles",
    title: "Clear Roles",
    description:
      "Make accountability explicit across teams, products, and portfolios — so decisions don't stall, duplicate, or escalate unnecessarily.",
    image:
      "https://i.postimg.cc/8sQ9pS5d/Asian-team-with-deciding-look-with-a-wall-board.jpg",
  },
  {
    id: "decision-rights",
    title: "Decision Rights",
    description:
      "Clarify who decides what, at which level, and with what constraints — removing decision bottlenecks and reducing escalation overhead.",
    image: "https://i.postimg.cc/2yKt2j57/making-decisions-2.jpg",
  },
  {
    id: "outcome-models",
    title: "Outcome-Driven Models",
    description:
      "Connect delivery metrics to business outcomes and customer impact — so leaders can steer by value, not activity.",
    image:
      "https://i.postimg.cc/FsvQXyLQ/Image-of-airport-operation-SME-for-Malaysia.jpg",
  },
];

export function LeadershipAccordion() {
  // Use a single static image (matches previous behavior)
  const staticImage =
    "https://i.postimg.cc/8sQ9pS5d/Asian-team-with-deciding-look-with-a-wall-board.jpg";

  return (
    <div className="bg-slate-50 rounded-3xl p-4 sm:p-8 lg:p-12 xl:p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16" data-reveal-group data-stagger="160">
        {/* Left Column - Accordion */}
        <div className="space-y-2 sm:space-y-3 lg:space-y-4 -ml-4 sm:-ml-8 lg:-ml-12 xl:-ml-16" data-reveal-item>
          {items.map((item, idx) => (
            <details
              key={item.id}
              data-jess-accordion
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/50 transition-all duration-300"
              open={idx === 0}
            >
              <summary
                className="w-full py-4 px-4 sm:py-5 sm:px-6 lg:py-6 lg:px-8 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors cursor-pointer list-none"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-normal text-slate-900">
                  {item.title}
                </h3>
                <div className="ml-3 sm:ml-4 mr-1 sm:mr-2 flex-shrink-0">
                  <ChevronDown
                    size={20}
                    className="jess-accordion-icon text-slate-400 sm:w-6 sm:h-6"
                  />
                </div>
              </summary>

              <div
                data-jess-accordion-content
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-5 sm:pt-2 lg:px-8 lg:pb-6">
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Right Column - Image */}
        <div className="relative lg:sticky lg:top-8 h-fit" data-reveal-item>
          <div className="w-full aspect-[4/3] bg-slate-200 rounded-sm overflow-hidden">
            <img
              src={staticImage}
              alt="Leadership System"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
