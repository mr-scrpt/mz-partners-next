import { RowSection } from "@/shared/ui/section/ui/row.section";
import { HeroModule } from "@/widget/hero";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  return <HeroModule />;
};

export default HomePage;
