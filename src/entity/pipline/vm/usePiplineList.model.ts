"use client";
import { useLocale } from "next-intl";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { PIPLINE_LIST } from "../model/piplineList.model";
import { useMemo } from "react";

export const usePiplineItemList = () => {
  const locale = useLocale();
  const piplineItemList = useMemo(() => {
    return PIPLINE_LIST[locale as Locale] || [];
  }, [locale]);

  return { piplineItemList };
};
