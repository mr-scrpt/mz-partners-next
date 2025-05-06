import { createTranslationObject } from "@/shared/lib/i18n/createTranslationObject";

export const [CALLBACK_WIDGET_NAMESPACE, CALLBACK_WIDGET_DICT_FIELD] =
  createTranslationObject("CallBackWidget", ["title"]);
export const CallBackWidgetDict = {
  ua: {
    [CALLBACK_WIDGET_NAMESPACE]: {
      [CALLBACK_WIDGET_DICT_FIELD.title]: "Надіслати заявку",
    },
  },
  en: {
    [CALLBACK_WIDGET_NAMESPACE]: {
      [CALLBACK_WIDGET_DICT_FIELD.title]: "Send a request",
    },
  },
} as const;
