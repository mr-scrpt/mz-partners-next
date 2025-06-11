import { useLocale } from "next-intl";
import { PROJECT_LIST } from "../model/projectList.model";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { useMemo } from "react";

export const useProjectItemList = () => {
  const locale = useLocale();
  const pojectItemList = useMemo(() => {
    return PROJECT_LIST[locale as Locale] || [];
  }, [locale]);

  return { pojectItemList };
};
