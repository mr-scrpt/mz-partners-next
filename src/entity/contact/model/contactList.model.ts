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
    addressList: [
      {
        type: "primary",
        value: "м. Харків, вул. Сумська 34",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10075.905390413101!2d36.289730340216146!3d49.97232652532723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270a6936b7c2e1%3A0xc27bae9a1e7b0efd!2sIBC%20Capital!5e0!3m2!1sru!2sua!4v1750678277220!5m2!1sru!2sua",
        videoId: "NqrmUvaU98E",
      },
    ],
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
