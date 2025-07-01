import { generatePageMetadata } from "@/page/vm/generatePageMetadata";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { PageMetadataMap } from "@/shared/lib/next";

export const generateMetadataMain = async (
  params: Promise<{ locale: Locale }>,
) => generatePageMetadata(params, mainMetadata);

const mainMetadata: PageMetadataMap = {
  ua: {
    title: "Про нас - Ваша компанія",
    description:
      "Дізнайтеся більше про нашу команду, історію компанії та наші цінності.",
    keywords: "про нас, команда, історія, місія, цінності",
    ogTitle: "Про нас - Ваша компанія",
    ogDescription:
      "Дізнайтеся більше про нашу команду, історію компанії та наші цінності.",
  },
  en: {
    title: "About Us - Your Company",
    description: "Learn more about our team, company history and our values.",
    keywords: "about us, team, history, mission, values",
    ogTitle: "About Us - Your Company",
    ogDescription: "Learn more about our team, company history and our values.",
  },
};
