import { CreatePageParams } from "@/page/domain/page.type";
import { generatePageMetadata } from "@/page/vm/generatePageMetadata";
import { PageMetadataMap } from "@/shared/lib/next";

type AboutMetadata = CreatePageParams;

export const generateMetadataAbout = async ({ params }: AboutMetadata) =>
  generatePageMetadata({
    params,
    metadata: aboutMetadata,
  });

const aboutMetadata: PageMetadataMap = {
  ua: {
    title: "Про нас",
    description:
      "Дізнайтеся більше про нашу команду, історію компанії та наші цінності.",
    keywords: "про нас, команда, історія, місія, цінності",
    ogTitle: "Про нас - MZ Partners",
    ogDescription:
      "Дізнайтеся більше про нашу команду, історію компанії та наші цінності.",
  },
  en: {
    title: "About Us - MZ Partners",
    description: "Learn more about our team, company history and our values.",
    keywords: "about us, team, history, mission, values",
    ogTitle: "About Us - MZ Partners",
    ogDescription: "Learn more about our team, company history and our values.",
  },
};
