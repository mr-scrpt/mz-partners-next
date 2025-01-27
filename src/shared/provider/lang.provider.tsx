"use client";
import { Locale } from "../lib/i18n";
import { langContext } from "../lib/i18n/provider";

interface ProviderLangProps extends React.PropsWithChildren {
  locale: Locale;
}

export const ProviderLang = (props: ProviderLangProps) => {
  const { children, locale } = props;
  return <langContext.Provider value={locale}>{children}</langContext.Provider>;
};
