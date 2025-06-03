export const FOOTER_NAMESPACE = "Footer" as const;

export const FOOTER_DICT_FIELD = {
  contact_phone_title: "phone_title",
  contact_address_title: "address_title",
} as const;

export type FooterDictField = keyof typeof FOOTER_DICT_FIELD;

export const FooterDict = {
  ua: {
    [FOOTER_NAMESPACE]: {
      [FOOTER_DICT_FIELD.contact_phone_title]: "Телефони",
      [FOOTER_DICT_FIELD.contact_address_title]: "Адреса",
    },
  },
  en: {
    [FOOTER_NAMESPACE]: {
      [FOOTER_DICT_FIELD.contact_phone_title]: "Phones",
      [FOOTER_DICT_FIELD.contact_address_title]: "Address",
    },
  },
} as const;
