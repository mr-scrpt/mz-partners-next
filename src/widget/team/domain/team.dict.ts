export const TEAM_NAMESPACE = "Team" as const;

export const TEAM_DICT_FIELD = {
  title: "title",
} as const;

export type TeamDictField = keyof typeof TEAM_DICT_FIELD;

export const TeamDict = {
  ua: {
    [TEAM_NAMESPACE]: {
      [TEAM_DICT_FIELD.title]: "Концепція",
      // Jurisprudence
    },
  },
  en: {
    [TEAM_NAMESPACE]: {
      [TEAM_DICT_FIELD.title]: "Team",
    },
  },
} as const;
