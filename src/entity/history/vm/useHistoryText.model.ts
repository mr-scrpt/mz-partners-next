import { Locale } from "@/shared/lib/i18n/domain/type";
import { useLocale } from "next-intl";
import { HISTORY_TEXT_LIST } from "../model/historyList.model";
import { useMemo } from "react";

export const useHistoryTextList = () => {
  const locale = useLocale();

  const historyTextList = useMemo(() => {
    return HISTORY_TEXT_LIST[locale as Locale] || [];
  }, [locale]);

  return { historyTextList };
};
