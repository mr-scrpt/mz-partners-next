import { BenefitModule } from "@/widget/benefit";
import { CallbackModule } from "@/widget/callback";
import { CompetencyModule } from "@/widget/competency";
import { HeroModule } from "@/widget/hero";
import { PiplineModule } from "@/widget/pipline";
import { PrincipleModule } from "@/widget/principle";
import { ProjectModule } from "@/widget/project";
import { SocialLineModule } from "@/widget/socialLine";

export const PageMain = async () => {
  return (
    <>
      <HeroModule />
      <SocialLineModule />
      <CompetencyModule />
      <PrincipleModule />
      <ProjectModule />
      <BenefitModule />
      <PiplineModule />
      <CallbackModule />
    </>
  );
};
