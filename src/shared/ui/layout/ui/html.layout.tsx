import { sGlobal, sPage, sTheme } from "@/shared/style/module";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { ElementType, HTMLAttributes, Suspense } from "react";
import { Loader } from "../../loader/ui/loader";

const MontserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

interface LayoutHTMLProps extends HTMLAttributes<HTMLHtmlElement> {
  locale: string;
}

const LayoutHTML = async ({ children, locale }: LayoutHTMLProps) => {
  return (
    <html
      lang={locale}
      className={clsx(sGlobal.layer, sGlobal.html, sGlobal.reset)}
    >
      <body className={clsx(sPage.page, MontserratSans.variable, sTheme.theme)}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
};

export default LayoutHTML;
