import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { HomePage } from "@/site/components/main/imported/CiAgileMainEthanWorkingMergeBranch";
import type { PageMeta } from "@/types";

export const pageMeta: PageMeta = {
  path: "/",
  filename: "index.html",
  title: "CI Agile - Transform Your Organization",
  description: "Proven delivery systems that help organizations execute and achieve measurable business outcomes across Asia Pacific.",
  siteType: "main",
};

export function IndexPage() {
  return (
    // Main site homepage only: clamp horizontal overflow on small screens.
    // This prevents sideways panning into blank space caused by any over-wide child elements.
    <div className="w-full overflow-x-hidden">
      <MainSiteNavigation />
      <HomePage />
      <MainSiteFooter />
    </div>
  );
}
