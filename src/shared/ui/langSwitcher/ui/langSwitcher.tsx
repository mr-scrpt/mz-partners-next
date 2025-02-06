"use client";
import { Locale, i18n } from "@/shared/lib/i18n/domain/type";
import { usePathname, useRouter } from "@/shared/lib/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { FC, HTMLAttributes, useTransition } from "react";

import sLangSwitcher from "./langSwitcher.module.scss";
import clsx from "clsx";
import { LANG_SWITCHER_NAMESPACE } from "../domain/dict/langSwitcher.dict";

interface LangSwitcherProps extends HTMLAttributes<HTMLDivElement> {}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const localeActive = useLocale();
  const { children, ...rest } = props;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations(LANG_SWITCHER_NAMESPACE);

  const handleLocaleChange = (nextLocale: string) => {
    startTransition(() => {
      const queryParams = Object.fromEntries(new URLSearchParams(searchParams));

      router.replace(
        {
          pathname,
          query: queryParams,
        },
        { locale: nextLocale as Locale },
      );
    });
  };

  return (
    <div className={sLangSwitcher.langSwitcher} {...rest}>
      <div className={sLangSwitcher.inner}>
        {i18n.locales.map((locale) => (
          <button
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            disabled={isPending || localeActive === locale}
            className={clsx(sLangSwitcher.button, {
              [sLangSwitcher.button_active]: localeActive === locale,
            })}
          >
            {t("locale", { locale })}
          </button>
        ))}
      </div>
    </div>
  );
};
