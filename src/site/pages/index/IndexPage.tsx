// Main site homepage - CI Agile
// Uses shared navigation and footer components
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { HomePage } from "@/site/components/main/imported/CiAgileMainEthanWorkingMergeBranch";

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
