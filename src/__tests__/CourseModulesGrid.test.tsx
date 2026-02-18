import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { CourseModulesGrid } from "@/app/components/shared/CourseModulesGrid";
import type { CourseModule } from "@/types";

const sampleModules: CourseModule[] = [
  { number: "01", title: "Getting Started", description: "Learn the basics.", highlight: "Foundation" },
  { number: "02", title: "Advanced Topics", description: "Go deeper.", highlight: "Deep dive" },
];

describe("CourseModulesGrid", () => {
  it("renders all module titles", () => {
    const html = renderToStaticMarkup(<CourseModulesGrid modules={sampleModules} />);
    expect(html).toContain("Getting Started");
    expect(html).toContain("Advanced Topics");
  });

  it("renders module numbers", () => {
    const html = renderToStaticMarkup(<CourseModulesGrid modules={sampleModules} />);
    expect(html).toContain("01");
    expect(html).toContain("02");
  });

  it("renders highlight badges", () => {
    const html = renderToStaticMarkup(<CourseModulesGrid modules={sampleModules} />);
    expect(html).toContain("Foundation");
    expect(html).toContain("Deep dive");
  });

  it("renders descriptions", () => {
    const html = renderToStaticMarkup(<CourseModulesGrid modules={sampleModules} />);
    expect(html).toContain("Learn the basics.");
    expect(html).toContain("Go deeper.");
  });
});
