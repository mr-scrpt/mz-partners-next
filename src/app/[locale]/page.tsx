import { RowSection } from "@/shared/ui/section/ui/row.section";
import { ConceptModule } from "@/widget/concept";
import { HeroModule } from "@/widget/hero";
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
    </>
  );
};

export default HomePage;
