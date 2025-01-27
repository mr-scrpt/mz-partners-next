import { getDictionary, Locale } from "@/shared/lib/i18n";
import LayoutPage from "@/shared/ui/layout/ui/page.layout";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <LayoutPage>
      <div>
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{" "}
          {dictionary["server-component"].welcome}
        </p>
      </div>
    </LayoutPage>
  );
}
