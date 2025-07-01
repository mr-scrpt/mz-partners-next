import { generatePageMetadata } from "@/page/vm/generatePageMetadata";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { PageMetadataMap } from "@/shared/lib/next";

export const generateMetadataCompetency = async (
  params: Promise<{ locale: Locale }>,
) => generatePageMetadata({ params, metadata: competencyMetadata });

const competencyMetadata: PageMetadataMap = {
  ua: {
    title: "Компетенції",
    description:
      "Наші ключові компетенції включають судову практику, банкрутство, інвестиції в стресові активи, фінансове право та юридичний супровід приватних клієнтів.",
    keywords:
      "судова практика, банкрутство, реструктуризація, інвестиції, стресові активи, банківське право, фінансове право, приватні клієнти, юридичні послуги",
    ogTitle: "Наші компетенції",
    ogDescription:
      "Дізнайтеся більше про наші спеціалізації: судові справи, банкрутство, інвестиції в проблемні активи, фінансове право та робота з приватними клієнтами.",
  },
  en: {
    title: "Competencies",
    description:
      "Our core competencies include litigation, bankruptcy, distressed asset investments, financial law, and legal services for private clients.",
    keywords:
      "litigation, bankruptcy, restructuring, investments, distressed assets, banking law, financial law, private clients, legal services",
    ogTitle: "Our Competencies",
    ogDescription:
      "Explore our areas of expertise: litigation, bankruptcy, distressed assets, financial law, and private client services.",
  },
};
