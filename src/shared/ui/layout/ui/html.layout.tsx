import { ProvidersRoot } from "@/shared/provider";
import { sGlobal, sPage, sTheme } from "@/shared/style/module";
import clsx from "clsx";
import type { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { Montserrat } from "next/font/google";
import { HTMLAttributes } from "react";

const MontserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface LayoutHTMLProps extends HTMLAttributes<HTMLHtmlElement> {
  locale: string;
}

const LayoutHTML = async ({ children, locale }: LayoutHTMLProps) => {
  const messages = await getMessages();
  return (
    <html
      lang={locale}
      className={clsx(sGlobal.html, sGlobal.reset, sTheme.theme)}
    >
      <body className={clsx(sPage.page, MontserratSans.variable)}>
        <ProvidersRoot>{children}</ProvidersRoot>
      </body>
    </html>
  );
};

export default LayoutHTML;
