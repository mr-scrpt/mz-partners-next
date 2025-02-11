export const LANG_SWITCHER_NAMESPACE = "LangSwitcher" as const;

export const LANG_SWITCHER_DICT_FIELD = {
  label: "label" as const,
  locale: "locale" as const,
};
export type LangSwitcherDictField = keyof typeof LANG_SWITCHER_DICT_FIELD;

export const LangSwitcherDict = {
  ua: {
    [LANG_SWITCHER_NAMESPACE]: {
      [LANG_SWITCHER_DICT_FIELD.label]: "Змінити мову",
      [LANG_SWITCHER_DICT_FIELD.locale]:
        "{locale, select, ua {ua} en {en} other {Unknown}}",
    },
  },
  en: {
    [LANG_SWITCHER_NAMESPACE]: {
      [LANG_SWITCHER_DICT_FIELD.label]: "Change language",
      [LANG_SWITCHER_DICT_FIELD.locale]:
        "{locale, select, ua {yкр} en {en} other {Unknown}}",
    },
  },
} as const;
