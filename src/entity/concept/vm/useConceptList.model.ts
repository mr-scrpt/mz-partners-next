import { Locale } from "@/shared/lib/i18n/domain/type";
import { CONCEPT_LIST } from "../model/conceptList.model";
import { useLocale } from "next-intl";
import { useMemo } from "react";

export const useConceptItemList = () => {
  const locale = useLocale();
  const conceptItemList = useMemo(() => {
    return CONCEPT_LIST[locale as Locale] || [];
  }, [locale]);

  return { conceptItemList };
};
