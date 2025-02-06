export const LANG_SWITCHER_NAMESPACE = "LangSwitcher" as const;

export const LangSwitcherDict = {
  ua: {
    [LANG_SWITCHER_NAMESPACE]: {
      label: "Змінити мову",
      locale: "{locale, select, ua {ua} en {en} other {Unknown}}",
    },
  },
  en: {
    [LANG_SWITCHER_NAMESPACE]: {
      label: "Change language",
      locale: "{locale, select, ua {yкр} en {en} other {Unknown}}",
    },
  },
} as const;
