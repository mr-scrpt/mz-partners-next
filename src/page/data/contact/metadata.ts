import { CreatePageParams } from "@/page/domain/page.type";
import { generatePageMetadata } from "@/page/vm/generatePageMetadata";
import { PageMetadataMap } from "@/shared/lib/next";

type ContactMetadata = CreatePageParams;
export const generateMetadataContact = async ({ params }: ContactMetadata) =>
  generatePageMetadata({ params, metadata: contactMetadata });

const contactMetadata: PageMetadataMap = {
  ua: {
    title: "Контактна інформація",
    description:
      "Зв'яжіться з нами будь-яким зручним способом — телефон, електронна пошта або месенджери. Ми завжди відкриті до співпраці.",
    keywords:
      "контакти, зв'язок, телефон, електронна пошта, адреса, підтримка, месенджери",
    ogTitle: "Контактна інформація",
    ogDescription:
      "Знайдіть усі способи зв'язку з нами — ми поруч і готові допомогти.",
  },
  en: {
    title: "Contact information",
    description:
      "Get in touch with us via phone, email, or messengers. We're always open to communication and collaboration.",
    keywords:
      "contacts, communication, phone, email, address, support, messengers",
    ogTitle: "Contact information",
    ogDescription:
      "Find all the ways to contact us — we're here and ready to help.",
  },
};
