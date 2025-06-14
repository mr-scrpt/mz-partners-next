export const COMPETENCY_NAMESPACE = "Competency" as const;

export const COMPETENCY_DICT_FIELD = {
  title: "title",
} as const;

export type CompetencyDictField = keyof typeof COMPETENCY_DICT_FIELD;

export const CompetencyDict = {
  ua: {
    [COMPETENCY_NAMESPACE]: {
      [COMPETENCY_DICT_FIELD.title]: "Компетенції",
      // Jurisprudence
    },
  },
  en: {
    [COMPETENCY_NAMESPACE]: {
      [COMPETENCY_DICT_FIELD.title]: "Competencies",
    },
  },
} as const;
