export const CONCEPT_NAMESPACE = "Concept" as const;

export const CONCEPT_DICT_FIELD = {
  title: "title",
} as const;

export type ConceptDictField = keyof typeof CONCEPT_DICT_FIELD;

export const ConceptDict = {
  ua: {
    [CONCEPT_NAMESPACE]: {
      [CONCEPT_DICT_FIELD.title]: "Концепція",
      // Jurisprudence
    },
  },
  en: {
    [CONCEPT_NAMESPACE]: {
      [CONCEPT_DICT_FIELD.title]: "Concept",
    },
  },
} as const;
