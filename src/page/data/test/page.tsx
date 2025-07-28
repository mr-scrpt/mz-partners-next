import { BenefitModule } from "@/widget/benefit";
import { CallbackModule } from "@/widget/callback";
import { PiplineModule } from "@/widget/pipline";

import sPage from "../../ui/page.module.scss";
import {
  PageLayoutWithHOC,
  SectionBenefit,
  SectionCompetency,
  SectionPrinciple,
  SectionProject,
} from "./hocInit";

export const PageTest = async () => {
  return (
    <PageLayoutWithHOC className={sPage.root}>
      <SectionCompetency />
      <SectionPrinciple />
      <SectionProject />

      <SectionBenefit className={sPage.root__offset} />
      <PiplineModule />
      <CallbackModule className={sPage.root__offset} />
    </PageLayoutWithHOC>
  );
};
