import { Locale } from "@/shared/lib/i18n/domain/type";
import { ContactWidgetItem } from "../domain/contact.type";

export const CONTACT_WIDGET_INFO: Record<Locale, ContactWidgetItem> = {
  ua: {
    promo: {
      name: "Leks",
      slogan:
        "Безпека та конфіденційність спілкування — пріоритет для нашої компанії. Все це надає нам Leks — месенджер майбутнього.",
      text: "Ми у мессенджері",
      link: "lecksis.com/profile/stinger",
    },
  },
  en: {
    promo: {
      name: "Leks",
      slogan:
        "Security and confidentiality of communication — the priority for our company. Everything this gives us Leks — a messenger of the future.",
      text: "We are in the messenger",
      link: "lecksis.com/profile/stinger",
    },
  },
};
