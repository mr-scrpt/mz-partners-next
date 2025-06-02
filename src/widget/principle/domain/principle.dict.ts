export const PRINCIPLE_NAMESPACE = "Principle" as const;

export const PRINCIPLE_DICT_FIELD = {
  title: "title",
} as const;

export type PrincipleDictField = keyof typeof PRINCIPLE_DICT_FIELD;

export const PrincipleDict = {
  ua: {
    [PRINCIPLE_NAMESPACE]: {
      [PRINCIPLE_DICT_FIELD.title]: "Наші принципи",
    },
  },
  en: {
    [PRINCIPLE_NAMESPACE]: {
      [PRINCIPLE_DICT_FIELD.title]: "Our Principles",
    },
  },
} as const;
