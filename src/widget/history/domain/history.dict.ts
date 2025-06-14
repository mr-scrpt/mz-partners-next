export const HISTORY_NAMESPACE = "History" as const;

export const HISTORY_DICT_FIELD = {
  title: "title",
} as const;

export type HistoryDictField = keyof typeof HISTORY_DICT_FIELD;

export const HistoryDict = {
  ua: {
    [HISTORY_NAMESPACE]: {
      [HISTORY_DICT_FIELD.title]: "Історія компанії",
    },
  },
  en: {
    [HISTORY_NAMESPACE]: {
      [HISTORY_DICT_FIELD.title]: "Company history",
    },
  },
} as const;
