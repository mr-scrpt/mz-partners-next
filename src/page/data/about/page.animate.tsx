"use client";
import { AboutModule } from "@/widget/about";
import { BenefitModule } from "@/widget/benefit";
import { HistoryModule } from "@/widget/history";
import { PiplineModule } from "@/widget/pipline";
import { PrincipleModule } from "@/widget/principle";
import { TeamModule } from "@/widget/team";

import { BreadcrumbsModule } from "@/widget/breadcrumbs";

import { ElementConfig } from "@/shared/lib/animations";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";
import sPage from "../../ui/page.module.scss";

const aboutPageElements: ElementConfig[] = [
  { component: BreadcrumbsModule, options: { skipAnimation: true } },
  { component: AboutModule },
  { component: HistoryModule },
  { component: BenefitModule },
  { component: TeamModule },
  { component: PiplineModule },
  { component: PrincipleModule, props: { className: sPage.root__offset } },
];

export const PageAboutAnimated = () => {
  return (
    <PageLayoutAnimatedToChildren
      elements={aboutPageElements}
      className={sPage.root}
      as="main"
      itemAs="section"
      itemClassName={sPage.section}
    />
  );
};
