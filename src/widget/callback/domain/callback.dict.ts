import { createTranslationObject } from "@/shared/lib/i18n/createTranslationObject";

export const [CALLBACK_WIDGET_NAMESPACE, CALLBACK_WIDGET_DICT_FIELD] =
  createTranslationObject("CallBackWidget", ["title", "attention"]);
export const CallBackWidgetDict = {
  ua: {
    [CALLBACK_WIDGET_NAMESPACE]: {
      [CALLBACK_WIDGET_DICT_FIELD.title]: "Надіслати заявку",
      [CALLBACK_WIDGET_DICT_FIELD.attention]:
        "УВАГА! Персональні данні не розголошуються та не передаються стороннім особам. Ми піклуємося про вашу конфіденційність",
    },
  },
  en: {
    [CALLBACK_WIDGET_NAMESPACE]: {
      [CALLBACK_WIDGET_DICT_FIELD.title]: "Send a request",
      [CALLBACK_WIDGET_DICT_FIELD.attention]:
        "Attention! Personal data are not disclosed and are not passed to third parties. We prioritize your confidentiality",
    },
  },
} as const;
