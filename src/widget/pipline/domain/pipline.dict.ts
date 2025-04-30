export const PIPLINE_NAMESPACE = "Pipline" as const;

export const PIPLINE_DICT_FIELD = {
  title: "title",
} as const;

export type PiplineDictField = keyof typeof PIPLINE_DICT_FIELD;

export const PiplineDict = {
  ua: {
    [PIPLINE_NAMESPACE]: {
      [PIPLINE_DICT_FIELD.title]: "Наші принципи",
    },
  },
  en: {
    [PIPLINE_NAMESPACE]: {
      [PIPLINE_DICT_FIELD.title]: "Our Piplines",
    },
  },
} as const;
