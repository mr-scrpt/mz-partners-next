import { Locale } from "@/shared/lib/i18n/domain/type";
import { routing } from "@/shared/lib/i18n/routing";
import { sPage } from "@/shared/style/module";
import LayoutHTML from "@/shared/ui/layout/ui/html.layout";
import { FooterModule } from "@/widget/footer";
import { HeaderModule } from "@/widget/header";
import { NavigationMainModule } from "@/widget/navigation/";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProvidersRoot } from "../(provider)";

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const LocalLayout = async ({ children, params }: RootLayoutProps) => {
  const locale = (await params).locale;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  return (
    <LayoutHTML locale={locale}>
      <ProvidersRoot>
        <HeaderModule />
        <NavigationMainModule />
        <>{children}</>
        <FooterModule className={sPage.page__last} />
      </ProvidersRoot>
    </LayoutHTML>
  );
};
export default LocalLayout;
