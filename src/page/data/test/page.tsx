import { BenefitModule } from "@/widget/benefit";
import { CallbackModule } from "@/widget/callback";
import { PiplineModule } from "@/widget/pipline";
import { PrincipleModule } from "@/widget/principle";
import { ProjectModule } from "@/widget/project";

import sPage from "../../ui/page.module.scss";
import { PageLayoutWithHOC, SectionCompetency } from "./hocInit";

export const PageTest = async () => {
  return (
    <PageLayoutWithHOC className={sPage.root}>
      <SectionCompetency />
      <PrincipleModule />
      <ProjectModule />
      <BenefitModule className={sPage.root__offset} />
      <PiplineModule />
      <CallbackModule className={sPage.root__offset} />
    </PageLayoutWithHOC>
  );
};
{
  /* <HeroModule /> */
}
{
  /* <SocialLineModule /> */
}
