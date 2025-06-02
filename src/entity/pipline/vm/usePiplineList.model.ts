import { useLocale } from "next-intl";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { PIPLINE_LIST } from "../model/piplineList.model";

export const usePiplineItemList = () => {
  const locale = useLocale();
  return { piplineItemList: Object.values(PIPLINE_LIST[locale as Locale]) };
};
