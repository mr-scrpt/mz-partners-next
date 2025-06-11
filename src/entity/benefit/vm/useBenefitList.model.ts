import { useLocale } from "next-intl";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { BENEFIT_LIST } from "../model/benefitList.model";
import { useMemo } from "react";

export const useBenefitItemList = () => {
  const locale = useLocale();
  const benefitItemList = useMemo(() => {
    return BENEFIT_LIST[locale as Locale] || [];
  }, [locale]);

  return { benefitItemList };
};
