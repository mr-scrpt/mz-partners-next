"use client";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { useLocale } from "next-intl";
import { HISTORY_TEXT } from "../model/history.model";
import { useMemo } from "react";

export const useHistoryTextList = () => {
  const locale = useLocale();

  const historyTextList = useMemo(() => {
    return HISTORY_TEXT[locale as Locale] || [];
  }, [locale]);

  return { historyTextList };
};
