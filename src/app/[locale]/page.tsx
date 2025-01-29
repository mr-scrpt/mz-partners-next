import { setRequestLocale } from "next-intl/server";

const HomePage = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const locale = (await params).locale;
  setRequestLocale(locale);
  return (
    <div>
      <h1>!!{locale}!!</h1>
    </div>
  );
};

export default HomePage;
