import { BenefitModule } from "@/widget/benefit";
import { ConceptModule } from "@/widget/concept";
import { HeroModule } from "@/widget/hero";
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
    </>
  );
};

export default HomePage;
