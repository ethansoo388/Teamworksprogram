import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";

interface FAQAccordionProps {
  faqs: FAQItem[];
  /** Use data-tw05-faq attributes for static-export JS (Course 05 only) */
  variant?: "default" | "tw05";
}

export function FAQAccordion({ faqs, variant = "default" }: FAQAccordionProps) {
  if (variant === "tw05") {
    return (
      <div className="space-y-4 mb-8 pb-2" data-tw05-faq data-open-index="0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            data-tw05-faq-item
            data-index={index}
            className={`border-2 rounded-lg px-6 transition-colors ${index === 0 ? "border-[#0EA7E9]" : "border-gray-200"}`}
          >
            <button
              type="button"
              data-tw05-faq-button
              data-index={index}
              className="w-full text-left hover:no-underline py-6 cursor-pointer flex items-center justify-between"
            >
              <span className="font-semibold text-gray-900 text-base lg:text-lg">{faq.question}</span>
              <ChevronDown data-tw05-faq-icon className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ml-4 ${index === 0 ? "rotate-180" : ""}`} />
            </button>
            <div
              data-tw05-faq-answer
              data-index={index}
              className={`text-gray-600 pb-6 text-base leading-relaxed ${index === 0 ? "" : "hidden"}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default variant using <details> for native HTML accordion
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden group">
          <summary className="w-full px-6 py-5 flex items-center justify-between cursor-pointer list-none hover:bg-gray-50 transition-colors">
            <span className="font-normal text-sm pr-4">{faq.question}</span>
            <svg
              className="w-4 h-4 text-gray-400 transition-transform flex-shrink-0 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
