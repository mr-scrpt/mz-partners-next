import { BenefitModule } from "@/widget/benefit";
import { CallbackModule } from "@/widget/callback";
import { CompetencyModule } from "@/widget/competency";
import { HeroModule } from "@/widget/hero";
import { PiplineModule } from "@/widget/pipline";
import { PrincipleModule } from "@/widget/principle";
import { ProjectModule } from "@/widget/project";
import { SocialLineModule } from "@/widget/socialLine";

import sPage from "../../ui/page.module.scss";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";

export const PageMain = async () => {
  return (
    <div className={sPage.root}>
      <HeroModule />
      <SocialLineModule />
      <CompetencyModule />
      <PrincipleModule />
      <ProjectModule />
      <BenefitModule className={sPage.root__offset} />
      <PiplineModule />
      <CallbackModule className={sPage.root__offset} />
    </div>
  );
};

export const PageMainAnimated = async () => {
  return (
    <PageLayoutAnimatedToChildren className={sPage.root} as="main">
      <HeroModule />
      <SocialLineModule />
      <CompetencyModule />
      <PrincipleModule />
      <ProjectModule />
      <BenefitModule className={sPage.root__offset} />
      <PiplineModule />
      <CallbackModule className={sPage.root__offset} />
    </PageLayoutAnimatedToChildren>
  );
};
