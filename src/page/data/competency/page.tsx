import { CompetencyModule } from "@/widget/competency";

import sPage from "../../ui/page.module.scss";
import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";

export const PageCompetency = () => {
  return (
    <div className={sPage.root}>
      <BreadcrumbsModule />

      <CompetencyModule className={sPage.root__fall} />
    </div>
  );
};

export const PageCompetencyAnimated = async () => {
  return (
    <PageLayoutAnimatedToChildren className={sPage.root}>
      <BreadcrumbsModule />
      <CompetencyModule className={sPage.root__fall} />
    </PageLayoutAnimatedToChildren>
  );
};
