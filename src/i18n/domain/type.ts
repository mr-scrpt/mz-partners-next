export const LOCALES = ["en", "ua"] as const;
export const LOCALE_DEAFAULT: Locale = "en";

export type Locale = (typeof LOCALES)[number];
export type LocaleParam = { locale: Locale };
