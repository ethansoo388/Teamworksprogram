// Main site homepage - CI Agile
// Uses shared navigation and footer components
import { MainSiteNavigation } from "@/main-site/components/MainSiteNavigation";
import { MainSiteFooter } from "@/main-site/components/MainSiteFooter";
import { HomePage } from "@/imports/CiAgileMainEthanWorkingMergeBranch";

export function IndexPage() {
  return (
    <div className="w-full">
      <MainSiteNavigation />
      <HomePage />
      <MainSiteFooter />
    </div>
  );
}