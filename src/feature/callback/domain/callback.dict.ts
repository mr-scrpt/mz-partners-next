export const CALLBACK_NAMESPACE = "CallBack" as const;

export const CALLBACK_DICT_FIELD = {
  button_text: "button_text" as const,
};
export type CallBackDictField = keyof typeof CALLBACK_DICT_FIELD;

export const CallBackDict = {
  ua: {
    [CALLBACK_NAMESPACE]: {
      [CALLBACK_DICT_FIELD.button_text]: "Зворотній зв'язок",
    },
  },
  en: {
    [CALLBACK_NAMESPACE]: {
      [CALLBACK_DICT_FIELD.button_text]: "Call back",
    },
  },
} as const;
