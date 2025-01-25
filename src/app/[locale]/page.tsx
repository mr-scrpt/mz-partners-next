import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  setRequestLocale(locale);
  const lang = (await params).locale;
  return (
    <div>
      <h1>!!{lang}!!</h1>
    </div>
  );
}
