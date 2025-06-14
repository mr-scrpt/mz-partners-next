import { BenefitModule } from "@/widget/benefit";
import { CallbackModule } from "@/widget/callback";
import { ConceptModule } from "@/widget/concept";
import { HeroModule } from "@/widget/hero";
import { PiplineModule } from "@/widget/pipline";
import { PrincipleModule } from "@/widget/principle";
import { ProjectModule } from "@/widget/project";
import { SocialLineModule } from "@/widget/socialLine";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  return (
    <>
      <HeroModule />
      <SocialLineModule />
      <ConceptModule />
      <PrincipleModule />
      <ProjectModule />
      <BenefitModule />
      <PiplineModule />
      <CallbackModule />
    </>
  );
};

export default HomePage;

