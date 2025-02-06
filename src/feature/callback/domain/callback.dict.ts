export const CALLBACK_NAMESPACE = "CallBack" as const;

export const CallBackDict = {
  ua: {
    [CALLBACK_NAMESPACE]: {
      button_text: "Зворотній зв'язок",
    },
  },
  en: {
    [CALLBACK_NAMESPACE]: {
      button_text: "Call back",
    },
  },
} as const;
