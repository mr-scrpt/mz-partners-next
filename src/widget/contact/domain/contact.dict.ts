export const CONTACT_NAMESPACE = "Contact" as const;

export const CONTACT_DICT_FIELD = {
  title: "title",
} as const;

export type ContactDictField = keyof typeof CONTACT_DICT_FIELD;

export const ContactDict = {
  ua: {
    [CONTACT_NAMESPACE]: {
      [CONTACT_DICT_FIELD.title]: "Як ми працюємо",
    },
  },
  en: {
    [CONTACT_NAMESPACE]: {
      [CONTACT_DICT_FIELD.title]: "How we work",
    },
  },
} as const;
