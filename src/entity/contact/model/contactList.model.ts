import { Locale } from "@/shared/lib/i18n/domain/type";
import { ContactItem } from "../domain/contact.type";
import { SOCIAL_LIST } from "./socialList.model";

// Телефони:
//
// 0671597373
// 0632344493
//
// Адрес: Харків, 61037, проспект Героїв Харкова, 199, Д5, оф. 58
//
// Пошта: mz.partners.kh@gmail.com
//
// Соц мережі:
//

export const CONTACT_INFO: Record<Locale, ContactItem> = {
  ua: {
    phoneList: [
      { type: "primary", value: "067 159 73 73" },
      { type: "secondary", value: "063 234 44 93" },
    ],
    emailList: [{ type: "office", value: "mz.partners.kh@gmail.com" }],
    addressList: [
      {
        type: "primary",
        value: "Харків, 61037, проспект Героїв Харкова, 199, Д5, оф. 58",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10075.905390413101!2d36.289730340216146!3d49.97232652532723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270a6936b7c2e1%3A0xc27bae9a1e7b0efd!2sIBC%20Capital!5e0!3m2!1sru!2sua!4v1750678277220!5m2!1sru!2sua",
        videoId: "NqrmUvaU98E",
      },
    ],
    socialList: SOCIAL_LIST,
  },
  en: {
    phoneList: [
      { type: "primary", value: "067 159 73 73" },
      { type: "secondary", value: "063 234 44 93" },
    ],
    emailList: [{ type: "office", value: "info@company.com" }],
    addressList: [
      {
        type: "primary",
        value: "Kharkiv, 61037, Prospect Heroev Kharkova, 199, D5, office 58",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10075.905390413101!2d36.289730340216146!3d49.97232652532723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270a6936b7c2e1%3A0xc27bae9a1e7b0efd!2sIBC%20Capital!5e0!3m2!1sru!2sua!4v1750678277220!5m2!1sru!2sua",
        videoId: "NqrmUvaU98E",
      },
    ],
    socialList: SOCIAL_LIST,
  },
};
