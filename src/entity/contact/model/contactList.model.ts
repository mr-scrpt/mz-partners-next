import { Locale } from "@/shared/lib/i18n/domain/type";
import { ContactItem } from "../domain/contact.type";
import { SOCIAL_LIST } from "./socialList.model";

export const CONTACT_INFO: Record<Locale, ContactItem> = {
  ua: {
    phoneList: [
      { type: "primary", value: "097 000 000 0" },
      { type: "secondary", value: "097 000 000 1" },
      { type: "tertiary", value: "097 000 000 2" },
    ],
    emailList: [{ type: "office", value: "info@company.com" }],
    addressList: [{ type: "primary", value: "м. Харків, вул. Сумська 34" }],
    socialList: SOCIAL_LIST,
  },
  en: {
    phoneList: [
      { type: "primary", value: "097 000 000 0" },
      { type: "secondary", value: "097 000 000 1" },
      { type: "tertiary", value: "097 000 000 2" },
    ],
    emailList: [{ type: "office", value: "info@company.com" }],
    addressList: [{ type: "primary", value: "Kharkiv, Sumskaya st. 34" }],
    socialList: SOCIAL_LIST,
  },
};
