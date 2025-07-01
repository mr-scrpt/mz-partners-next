import { CompetencyModule } from "@/widget/competency";

import sPage from "../../ui/page.module.scss";
import { BreadcrumbsModule } from "@/widget/breadcrumbs";

export const PageCompetency = () => {
  return (
    <div className={sPage.root}>
      <BreadcrumbsModule />

      <CompetencyModule className={sPage.root__fall} />
      {/* <CompetencyModule /> */}
    </div>
  );
};
