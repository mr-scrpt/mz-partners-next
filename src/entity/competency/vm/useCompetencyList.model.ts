"use client";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { COMPETENCY_LIST } from "../model/competencyList.model";
import { useLocale } from "next-intl";
import { useMemo } from "react";

export const useCompetencyItemList = () => {
  const locale = useLocale();
  const competencyItemList = useMemo(() => {
    return COMPETENCY_LIST[locale as Locale] || [];
  }, [locale]);

  return { competencyItemList };
};
