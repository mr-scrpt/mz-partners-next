import { RowSection } from "@/shared/ui/section/ui/row.section";

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
    </RowSection>
  );
};

export default HomePage;
