export const CONTACT_NAMESPACE = "Contact" as const;

export const CONTACT_DICT_FIELD = {
  title: "title",
  addressTitle: "addressTitle",
  phoneTitle: "phoneTitle",
  additionalTitle: "additionalTitle",
  additionalEmailItemTitle: "additionalEmailItemTitle",
  additionalInstagramItemTitle: "additionalInstagramItemTitle",
  additionalFacebookItemTitle: "additionalFacebookItemTitle",
} as const;

export type ContactDictField = keyof typeof CONTACT_DICT_FIELD;

export const ContactDict = {
  ua: {
    [CONTACT_NAMESPACE]: {
      [CONTACT_DICT_FIELD.title]: "Контакти",
      [CONTACT_DICT_FIELD.addressTitle]: "Адреса",
      [CONTACT_DICT_FIELD.phoneTitle]: "Телефони",
      [CONTACT_DICT_FIELD.additionalTitle]: "Додаткові контакти",
      [CONTACT_DICT_FIELD.additionalEmailItemTitle]: "E-mail",
      [CONTACT_DICT_FIELD.additionalInstagramItemTitle]: "Instagram",
      [CONTACT_DICT_FIELD.additionalFacebookItemTitle]: "Facebook",
    },
  },
  en: {
    [CONTACT_NAMESPACE]: {
      [CONTACT_DICT_FIELD.title]: "Contacts",
      [CONTACT_DICT_FIELD.addressTitle]: "Address",
      [CONTACT_DICT_FIELD.phoneTitle]: "Phones",
      [CONTACT_DICT_FIELD.additionalTitle]: "Additional contacts",
      [CONTACT_DICT_FIELD.additionalEmailItemTitle]: "E-mail",
      [CONTACT_DICT_FIELD.additionalInstagramItemTitle]: "Instagram",
      [CONTACT_DICT_FIELD.additionalFacebookItemTitle]: "Facebook",
    },
  },
} as const;
