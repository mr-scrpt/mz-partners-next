"use client";

import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";
import { BenefitModule } from "@/widget/benefit";
import { CallbackModule } from "@/widget/callback";
import { CompetencyModule } from "@/widget/competency";
import { HeroModule } from "@/widget/hero";
import { PiplineModule } from "@/widget/pipline";
import { PrincipleModule } from "@/widget/principle";
import { ProjectModule } from "@/widget/project";
import { SocialLineModule } from "@/widget/socialLine";

import sPage from "../../ui/page.module.scss";
import { ElementConfig } from "@/shared/lib/animations";

const mainPageElements: ElementConfig[] = [
  { component: HeroModule, options: { skipAnimation: true } },
  { component: SocialLineModule, options: { skipAnimation: true } },
  { component: CompetencyModule },
  { component: PrincipleModule },
  { component: ProjectModule },
  { component: BenefitModule, props: { className: sPage.root__offset } },
  { component: PiplineModule },
  { component: CallbackModule, props: { className: sPage.root__offset } },
];

export const PageMainAnimated = () => {
  return (
    <PageLayoutAnimatedToChildren
      elements={mainPageElements}
      className={sPage.root}
      as="main"
      itemAs="section"
      itemClassName={sPage.section}
    />
  );
};
