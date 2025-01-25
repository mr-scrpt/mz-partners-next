export const LOCALES = ["en", "ua"] as const;
export type Locale = (typeof LOCALES)[number];
export type LocaleParam = { locale: Locale };
export const DEFAULT_LOCALE: Locale = "en";
