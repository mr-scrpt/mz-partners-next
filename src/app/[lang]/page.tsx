import { Locale } from "@/shared/lib/i18n";
import { getDictionary } from "@/shared/lib/i18n";
import { LangSwitcher } from "@/shared/ui/langSwitcher";
import PageLayout from "@/shared/ui/layout/ui/page.layout";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);

  return (
    <PageLayout>
      <LangSwitcher />
      <div>
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{" "}
          {dictionary["server-component"].welcome}
        </p>
      </div>
    </PageLayout>
  );
}
