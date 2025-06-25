export const BENEFIT_NAMESPACE = "Benefit" as const;

export const BENEFIT_DICT_FIELD = {
  title: "title",
} as const;

export type BenefitDictField = keyof typeof BENEFIT_DICT_FIELD;

export const BenefitDict = {
  ua: {
    [BENEFIT_NAMESPACE]: {
      [BENEFIT_DICT_FIELD.title]: "Наші преваги",
    },
  },
  en: {
    [BENEFIT_NAMESPACE]: {
      [BENEFIT_DICT_FIELD.title]: "Our Benefits",
    },
  },
} as const;
