import { Locale } from "@/shared/lib/i18n/domain/type";
import { CONCEPT_LIST } from "../model/conceptList.model";
import { useLocale } from "next-intl";

export const useConceptItemList = () => {
  const locale = useLocale();
  return { conceptItemList: Object.values(CONCEPT_LIST[locale as Locale]) };
};
