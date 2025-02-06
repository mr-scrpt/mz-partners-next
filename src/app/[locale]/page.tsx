import { RowSection } from "@/shared/ui/section/ui/row.section";
import { NavigationMain } from "@/widget/navigation/ui/navigationMain";
import { setRequestLocale } from "next-intl/server";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  // const locale = (await params).locale;
  // setRequestLocale(locale);
  return (
    <RowSection topology="ROW_FULL">
      <div>Home</div>
      <NavigationMain />
    </RowSection>
  );
};

export default HomePage;
