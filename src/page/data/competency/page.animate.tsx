"use client";
import { CompetencyModule } from "@/widget/competency";

import sPage from "../../ui/page.module.scss";
import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";
import { ElementConfig } from "@/shared/lib/animations";

const competencyPageElements: ElementConfig[] = [
  { component: BreadcrumbsModule, options: { skipAnimation: true } },
  { component: CompetencyModule, props: { className: sPage.root__fall } },
];
export const PageCompetencyAnimated = () => {
  return (
    <PageLayoutAnimatedToChildren
      className={sPage.root}
      elements={competencyPageElements}
      as="main"
      itemAs="section"
      itemClassName={sPage.section}
    />
  );
};
