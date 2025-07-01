import { TeamModule } from "@/widget/team";

import sPage from "../../ui/page.module.scss";

import { BreadcrumbsModule } from "@/widget/breadcrumbs";

export const PageTeam = () => {
  return (
    <div className={sPage.root}>
      <BreadcrumbsModule />
      <TeamModule className={sPage.root__fall} />
    </div>
  );
};
