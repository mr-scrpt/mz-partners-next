import { useLocale } from "next-intl";
import { PROJECT_LIST } from "../model/projectList.model";
import { Locale } from "@/shared/lib/i18n/domain/type";

export const useProjectItemList = () => {
  const locale = useLocale();
  return { pojectItemList: Object.values(PROJECT_LIST[locale as Locale]) };
};
