import { useLocale } from "next-intl";
import { PRINCIPLE_LIST } from "../model/principleList.model";
import { Locale } from "@/shared/lib/i18n/domain/type";

export const usePrincipleItemList = () => {
  const locale = useLocale();
  return { principleItemList: Object.values(PRINCIPLE_LIST[locale as Locale]) };
};
