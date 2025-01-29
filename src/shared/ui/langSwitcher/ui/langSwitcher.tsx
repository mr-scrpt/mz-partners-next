"use client";
import { Locale, i18n } from "@/shared/lib/i18n/domain/type";
import { usePathname, useRouter } from "@/shared/lib/i18n/routing";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { FC, HTMLAttributes, useTransition } from "react";

interface LangSwitcherProps extends HTMLAttributes<HTMLDivElement> {}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const localeActive = useLocale();
  const { children, ...rest } = props;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    <div
      className={clsx("flex items-center gap-2", isPending && "opacity-30")}
      {...rest}
    >
      <div className="flex items-center gap-1">
        {i18n.locales.map((locale) => (
          <button
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            disabled={isPending || localeActive === locale}
            className={clsx(
              "px-2 py-1 text-sm transition-colors",
              locale === locale
                ? "text-gray-900 font-medium"
                : "text-gray-400 hover:text-gray-600",
              "disabled:cursor-not-allowed",
            )}
          >
            {locale.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};
