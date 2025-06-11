import { Locale } from "@/shared/lib/i18n/domain/type";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import { PRINCIPLE_LIST } from "../model/principleList.model";

export const usePrincipleItemList = () => {
  const locale = useLocale();
  const principleItemList = useMemo(() => {
    return PRINCIPLE_LIST[locale as Locale] || [];
  }, [locale]);

  return { principleItemList };
};
