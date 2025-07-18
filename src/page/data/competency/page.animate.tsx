"use client";
import { CompetencyModule } from "@/widget/competency";

import sPage from "../../ui/page.module.scss";
import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { ElementConfig } from "@/shared/lib/animations";
import { PageLayoutAnimatedPrimaryToChildren } from "@/shared/ui/layout";

const competencyPageElements: ElementConfig[] = [
  { component: BreadcrumbsModule, options: { skipAnimation: true } },
  { component: CompetencyModule, props: { className: sPage.root__fall } },
];
export const PageCompetencyAnimated = () => {
  return (
    <PageLayoutAnimatedPrimaryToChildren
      className={sPage.root}
      elements={competencyPageElements}
      as="main"
      itemAs="section"
      itemClassName={sPage.section}
    />
  );
};
