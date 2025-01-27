import { ComposeChildren } from "@/shared/lib/react.server";
import { FC, HTMLAttributes } from "react";
import { Locale } from "../lib/i18n";
import { ProviderLang } from "./lang.provider";

interface ProvidersRootProps extends HTMLAttributes<HTMLDivElement> {
  locale: Locale;
}

export const ProvidersRoot: FC<ProvidersRootProps> = async (props) => {
  const { children, locale } = await props;
  return (
    <ComposeChildren>
      <ProviderLang locale={locale} />
      <>{children}</>
    </ComposeChildren>
  );
};
