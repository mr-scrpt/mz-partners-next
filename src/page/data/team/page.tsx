import { TeamModule } from "@/widget/team";

import sPage from "../../ui/page.module.scss";

import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";

export const PageTeam = () => {
  return (
    <div className={sPage.root}>
      <BreadcrumbsModule />
      <TeamModule className={sPage.root__fall} />
    </div>
  );
};

export const PageTeamAnimated = async () => {
  return (
    <PageLayoutAnimatedToChildren className={sPage.root}>
      <BreadcrumbsModule />
      <TeamModule className={sPage.root__fall} />
    </PageLayoutAnimatedToChildren>
  );
};
