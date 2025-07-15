import { TeamModule } from "@/widget/team";

import sPage from "../../ui/page.module.scss";

import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";
import { TeamSecondaryModule } from "@/widget/team/ui/teamSecondary.module";
import { CompetencyModule } from "@/widget/competency";

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
      {/* <CompetencyModule className={sPage.root__fall} /> */}
      <TeamSecondaryModule className={sPage.root__fall} />
    </PageLayoutAnimatedToChildren>
  );
};
