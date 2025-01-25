export const LOCALES = ["en", "ua"] as const;
export const LOCALE_DEAFAULT: Locale = "en";
export const LOCALE_FOLDER = "localization";

export type Locale = (typeof LOCALES)[number];
export type LocaleParam = { locale: Locale };
