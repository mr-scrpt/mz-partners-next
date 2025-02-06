import { i18n, isValidLocale } from "@/shared/lib/i18n/domain/type";
import { routing } from "@/shared/lib/i18n/routing";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !isValidLocale(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages:
      // await import(`../../../shared/${i18n.dictionaryPath}/${locale}.json`)
      (await import(`./dict/compile.${locale}.ts`)).messages,
  };
});
