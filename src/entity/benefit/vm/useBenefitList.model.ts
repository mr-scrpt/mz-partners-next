import { useLocale } from "next-intl";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { BENEFIT_LIST } from "../model/benefitList.model";

export const useBenefitItemList = () => {
  const locale = useLocale();
  return { pojectItemList: Object.values(BENEFIT_LIST[locale as Locale]) };
};
