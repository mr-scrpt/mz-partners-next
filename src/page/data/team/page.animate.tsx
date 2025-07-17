"use client";

import sPage from "../../ui/page.module.scss";

import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";
import { TeamSecondaryModule } from "@/widget/team/ui/teamSecondary.module";
import { ElementConfig } from "@/shared/lib/animations";

const teamPageElements: ElementConfig[] = [
  { component: BreadcrumbsModule, options: { skipAnimation: true } },
  { component: TeamSecondaryModule, props: { className: sPage.root__fall } },
];
export const PageTeamAnimated = () => {
  return (
    <PageLayoutAnimatedToChildren
      elements={teamPageElements}
      className={sPage.root}
      as="main"
      itemAs="section"
      itemClassName={sPage.section}
    />
  );
};
