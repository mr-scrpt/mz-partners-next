import { LocaleParam } from "@/i18n/domain/type";
import { sGlobal } from "@/shared/style";
import { HeaderModule } from "@/widget/header";
import clsx from "clsx";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Montserrat } from "next/font/google";
import { ProvidersRoot } from "./_provider/root.provider";

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

const MontserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const LocalLayout = async ({ children }: RootLayoutProps) => {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={clsx(sGlobal.html, sGlobal.reset, sGlobal.color)}
    >
      <body className={`${MontserratSans.variable}`}>
        <ProvidersRoot>
          <HeaderModule />
          {children}
        </ProvidersRoot>
      </body>
    </html>
  );
};
export default LocalLayout;
