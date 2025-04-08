import { ConceptModule } from "@/widget/concept";
import { HeroModule } from "@/widget/hero";
import { PrincipleModule } from "@/widget/principle";
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
    </>
  );
};

export default HomePage;
