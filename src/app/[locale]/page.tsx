import { RowSection } from "@/shared/ui/section/ui/row.section";
import { HeroModule } from "@/widget/hero";
import { SocialLineModule } from "@/widget/socialLine/ui/socialLine.module";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  return (
    <>
      <HeroModule />
      <SocialLineModule />
    </>
  );
};

export default HomePage;
