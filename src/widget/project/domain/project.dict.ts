export const PROJECT_NAMESPACE = "Project" as const;

export const PROJECT_DICT_FIELD = {
  title: "title",
} as const;

export type ProjectDictField = keyof typeof PROJECT_DICT_FIELD;

export const ProjectDict = {
  ua: {
    [PROJECT_NAMESPACE]: {
      [PROJECT_DICT_FIELD.title]: "Наші проєкти",
    },
  },
  en: {
    [PROJECT_NAMESPACE]: {
      [PROJECT_DICT_FIELD.title]: "Our Pojects",
    },
  },
} as const;
