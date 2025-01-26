import { i18n } from "@/shared/lib/i18n";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children }: Props) {
  return children;
}
