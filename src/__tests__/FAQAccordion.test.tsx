import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { FAQAccordion } from "@/app/components/shared/FAQAccordion";
import type { FAQItem } from "@/types";

const sampleFaqs: FAQItem[] = [
  { question: "What is AI?", answer: "Artificial Intelligence." },
  { question: "Is coding required?", answer: "No coding needed." },
];

describe("FAQAccordion", () => {
  it("renders all FAQ items in default variant", () => {
    const html = renderToStaticMarkup(<FAQAccordion faqs={sampleFaqs} />);
    expect(html).toContain("What is AI?");
    expect(html).toContain("Artificial Intelligence.");
    expect(html).toContain("Is coding required?");
    expect(html).toContain("No coding needed.");
  });

  it("uses <details> elements in default variant", () => {
    const html = renderToStaticMarkup(<FAQAccordion faqs={sampleFaqs} />);
    expect(html).toContain("<details");
    expect(html).toContain("<summary");
  });

  it("uses data-tw05-faq attributes in tw05 variant", () => {
    const html = renderToStaticMarkup(<FAQAccordion faqs={sampleFaqs} variant="tw05" />);
    expect(html).toContain("data-tw05-faq-item");
    expect(html).toContain("data-tw05-faq-button");
    expect(html).toContain("data-tw05-faq-answer");
  });

  it("opens first item by default in tw05 variant", () => {
    const html = renderToStaticMarkup(<FAQAccordion faqs={sampleFaqs} variant="tw05" />);
    // First item should NOT have "hidden" on its answer
    // Second item SHOULD have "hidden" on its answer
    expect(html).toContain('data-index="0"');
    expect(html).toContain('data-index="1"');
  });

  it("renders correct number of items", () => {
    const html = renderToStaticMarkup(<FAQAccordion faqs={sampleFaqs} />);
    const detailsCount = (html.match(/<details/g) || []).length;
    expect(detailsCount).toBe(2);
  });
});
