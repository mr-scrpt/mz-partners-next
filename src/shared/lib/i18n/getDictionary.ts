// import "server-only";
import { Locale } from "./domain/type";

const dictionaries = {
  en: () => import("#/dictionaries/en.json").then((module) => module.default),
  ua: () => import("#/dictionaries/ua.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
