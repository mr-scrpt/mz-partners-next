import { Namespace } from "@/app/(plugin)/i18n/domain/namespace.type";

export const i18n = {
  defaultLocale: "ua",
  locales: ["en", "ua"],
  dictionaryPath: "dictionary",
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const validLocales = Array.from(i18n.locales) as string[];

//Guard
export const isValidLocale = (value: string): value is Locale =>
  i18n.locales.includes(value as Locale);
