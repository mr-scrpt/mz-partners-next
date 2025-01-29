import { getRequestConfig } from "next-intl/server";
import { i18n, isValidLocale, Locale } from "./domain/type";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !isValidLocale(locale)) {
    locale = routing.defaultLocale;
  }
  console.log("output_log:::: Locale in config =>>>", locale);

  return {
    locale,
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../../../../dictionary/en.json")
        : import(`../../../../dictionary/${locale}.json`))
    ).default,
    // messages: (
    //   await import(`../../../../${i18n.dictionaryPath}/${locale}.json`)
    // ).default,
  };
});
