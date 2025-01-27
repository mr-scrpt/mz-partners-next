import { i18n, Locale } from "@/shared/lib/i18n";
import LayoutBase from "@/shared/ui/layout/ui/base.layout";
import LayoutPage from "@/shared/ui/layout/ui/page.layout";
import { NotFound } from "@/shared/ui/notFound";

interface RootLayoutProps {
  params: Promise<{ lang: Locale }>;
}
export default async function GlobalNotFound({ params }: RootLayoutProps) {
  const lang = (await params).lang;
  return (
    <LayoutBase lang={lang || i18n.defaultLocale}>
      <LayoutPage>
        <div>NOT FOUND GLOBAL</div>
        <NotFound />
      </LayoutPage>
    </LayoutBase>
  );
}
