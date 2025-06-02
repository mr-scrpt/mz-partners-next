import { createTranslationObject } from "@/shared/lib/i18n/createTranslationObject";

export const [CALLBACK_FEATURE_NAMESPACE, CALLBACK_FEATURE_DICT_FIELD] =
  createTranslationObject("CallBackFeature", ["button_modal_open_text"]);

export const CallBackFeatureDict = {
  ua: {
    [CALLBACK_FEATURE_NAMESPACE]: {
      [CALLBACK_FEATURE_DICT_FIELD.button_modal_open_text]: "Зворотній зв'язок",
    },
  },
  en: {
    [CALLBACK_FEATURE_NAMESPACE]: {
      [CALLBACK_FEATURE_DICT_FIELD.button_modal_open_text]: "Call back",
    },
  },
} as const;
