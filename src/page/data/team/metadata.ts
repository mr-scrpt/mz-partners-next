import { generatePageMetadata } from "@/page/vm/generatePageMetadata";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { PageMetadataMap } from "@/shared/lib/next";

export const generateMetadataTeam = async (
  params: Promise<{ locale: Locale }>,
) => generatePageMetadata({ params, metadata: teamMetadata });

const teamMetadata: PageMetadataMap = {
  ua: {
    title: "Наша команда",
    description:
      "Познайомтеся з командою наших юристів — досвідчених фахівців, які спеціалізуються на судовій практиці, банкрутстві, фінансовому праві та консультуванні приватних клієнтів.",
    keywords:
      "юристи, команда, правники, адвокати, юридична команда, експерти, фахівці, юридична фірма",
    ogTitle: "Наша команда юристів",
    ogDescription:
      "Ми — команда досвідчених юристів, яка об'єднує експертизу, професіоналізм та індивідуальний підхід до кожного клієнта.",
  },
  en: {
    title: "Our Team",
    description:
      "Meet our team of lawyers — experienced professionals specializing in litigation, bankruptcy, financial law, and private client consulting.",
    keywords:
      "lawyers, legal team, attorneys, professionals, experts, legal specialists, law firm",
    ogTitle: "Our Legal Team",
    ogDescription:
      "We are a team of experienced lawyers combining expertise, professionalism, and a personalized approach for every client.",
  },
};
