// Main site homepage - CI Agile
// Uses shared navigation and footer components
import { MainSiteNavigation } from "@/site/components/main/MainSiteNavigation";
import { MainSiteFooter } from "@/site/components/main/MainSiteFooter";
import { HomePage } from "@/site/components/main/imported/CiAgileMainEthanWorkingMergeBranch";

export function IndexPage() {
  return (
    <div className="w-full">
      <MainSiteNavigation />
      <HomePage />
      <MainSiteFooter />
    </div>
  );
}
