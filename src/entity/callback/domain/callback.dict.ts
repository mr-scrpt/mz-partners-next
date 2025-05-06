import { createTranslationObject } from "@/shared/lib/i18n/createTranslationObject";

export const [CALLBACK_ENTITY_NAMESPACE, CALLBACK_ENTITY_DICT_FIELD] =
  createTranslationObject("CallBackEntity", [
    "button_submit_text",
    "status_sending",
    "field_first_name_palceholder",
    "field_phone_placeholder",
  ]);

export const CallBackDict = {
  ua: {
    [CALLBACK_ENTITY_NAMESPACE]: {
      [CALLBACK_ENTITY_DICT_FIELD.button_submit_text]: "Надіслати",
      [CALLBACK_ENTITY_DICT_FIELD.field_first_name_palceholder]: "Ім'я",
      [CALLBACK_ENTITY_DICT_FIELD.field_phone_placeholder]: "Телефон",
      [CALLBACK_ENTITY_DICT_FIELD.status_sending]: "Надcілаємо...",
    },
  },
  en: {
    [CALLBACK_ENTITY_NAMESPACE]: {
      [CALLBACK_ENTITY_DICT_FIELD.button_submit_text]: "Send",
      [CALLBACK_ENTITY_DICT_FIELD.field_first_name_palceholder]: "Name",
      [CALLBACK_ENTITY_DICT_FIELD.field_phone_placeholder]: "Phone",
      [CALLBACK_ENTITY_DICT_FIELD.status_sending]: "Sending...",
    },
  },
} as const;
