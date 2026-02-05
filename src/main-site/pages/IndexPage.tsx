// Main site homepage - CI Agile
// Uses shared navigation component
import { MainSiteNavigation } from "@/main-site/components/MainSiteNavigation";
import { HomePage } from "@/imports/CiAgileMainEthanWorkingMergeBranch";

export function IndexPage() {
  return (
    <div className="w-full">
      <MainSiteNavigation />
      <HomePage />
    </div>
  );
}