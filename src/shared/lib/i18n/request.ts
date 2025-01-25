import { getRequestConfig } from "next-intl/server";
import { Locale, LOCALE_FOLDER } from "./domain/type";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`#/${LOCALE_FOLDER}/${locale}.json`)).default,
  };
});
