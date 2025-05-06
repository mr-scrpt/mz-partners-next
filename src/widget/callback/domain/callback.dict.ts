import { createTranslationObject } from "@/shared/lib/i18n/createTranslationObject";

export const [CALLBACK_WIDGET_NAMESPACE, CALLBACK_WIDGET_DICT_FIELD] =
  createTranslationObject("CallBackWidget", ["title"]);
export const CallbackDict = {
  ua: {
    [CALLBACK_WIDGET_NAMESPACE]: {
      [CALLBACK_WIDGET_DICT_FIELD.title]: "Як ми працюємо",
    },
  },
  en: {
    [CALLBACK_WIDGET_NAMESPACE]: {
      [CALLBACK_WIDGET_DICT_FIELD.title]: "How we work",
    },
  },
} as const;
