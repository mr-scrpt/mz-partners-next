import { CreatePageParams } from "@/page/domain/page.type";
import { generatePageMetadata } from "@/page/vm/generatePageMetadata";
import { PageMetadataMap } from "@/shared/lib/next";

type TestMetadata = CreatePageParams;

export const generateMetadataTest = async ({ params }: TestMetadata) =>
  generatePageMetadata({ params, metadata: testMetadata });

const testMetadata: PageMetadataMap = {
  ua: {
    title: "Юридичне об'єднання",
    description:
      "Ми вирішуємо складні юридичні питання і допомагаємо знайти оптимальне рішення",
    keywords:
      "юридичне об'єднання, юридичні питання, оптимальне рішення, консультування юриста",
    ogTitle: "Юридичне об'єднання",
    ogDescription:
      "Ми вирішуємо складні юридичні питання і допомагаємо знайти оптимальне рішення",
  },
  en: {
    title: "Legal association",
    description:
      "We solve complex legal questions and help find the optimal solution",
    keywords:
      "legal association, legal questions, optimal solution, consulting lawyer",
    ogTitle: "Legal association",
    ogDescription:
      "We solve complex legal questions and help find the optimal solution",
  },
};
