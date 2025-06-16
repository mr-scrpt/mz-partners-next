export const CONTACT_NAMESPACE = "Contact" as const;

export const CONTACT_DICT_FIELD = {
  title: "title",
  addressTitle: "addressTitle",
  phoneTitle: "phoneTitle",
  additionalTitle: "additionalTitle",
} as const;

export type ContactDictField = keyof typeof CONTACT_DICT_FIELD;

export const ContactDict = {
  ua: {
    [CONTACT_NAMESPACE]: {
      [CONTACT_DICT_FIELD.title]: "Контакти",
      [CONTACT_DICT_FIELD.addressTitle]: "Адреса",
      [CONTACT_DICT_FIELD.phoneTitle]: "Телефони",
      [CONTACT_DICT_FIELD.additionalTitle]: "Додаткові контакти",
    },
  },
  en: {
    [CONTACT_NAMESPACE]: {
      [CONTACT_DICT_FIELD.title]: "Contacts",
      [CONTACT_DICT_FIELD.addressTitle]: "Address",
      [CONTACT_DICT_FIELD.phoneTitle]: "Phones",
      [CONTACT_DICT_FIELD.additionalTitle]: "Additional contacts",
    },
  },
} as const;
