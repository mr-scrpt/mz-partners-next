import { Locale } from "@/shared/lib/i18n/domain/type";
import { ContactItem } from "../domain/contact.type";

export const CONTACT_INFO: Record<Locale, ContactItem> = {
  ua: {
    phoneList: [
      { type: "primary", value: "097 000 000 0" },
      { type: "secondary", value: "097 000 000 0" },
      { type: "primary", value: "097 000 000 0" },
    ],
    emailList: [{ type: "office", value: "info@company.com" }],
    addressList: [{ type: "primary", value: "м. Харків, вул. Сумська 34" }],
  },
  en: {
    phoneList: [
      { type: "primary", value: "097 000 000 0" },
      { type: "secondary", value: "097 000 000 0" },
      { type: "primary", value: "097 000 000 0" },
    ],
    emailList: [{ type: "office", value: "info@company.com" }],
    addressList: [{ type: "primary", value: "Kharkiv, Sumskaya st. 34" }],
  },
};
