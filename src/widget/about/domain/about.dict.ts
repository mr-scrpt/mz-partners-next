export const ABOUT_NAMESPACE = "About" as const;

export const ABOUT_DICT_FIELD = {
  title: "title",
} as const;

export type AboutDictField = keyof typeof ABOUT_DICT_FIELD;

export const AboutDict = {
  ua: {
    [ABOUT_NAMESPACE]: {
      [ABOUT_DICT_FIELD.title]: "Про нас",
    },
  },
  en: {
    [ABOUT_NAMESPACE]: {
      [ABOUT_DICT_FIELD.title]: "About us",
    },
  },
} as const;
