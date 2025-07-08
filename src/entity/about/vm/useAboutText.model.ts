"use client";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { useLocale } from "next-intl";
import { ABOUT_TEXT_LIST } from "../model/aboutList.model";
import { useMemo } from "react";

export const useAboutTextList = () => {
  const locale = useLocale();

  const aboutTextList = useMemo(() => {
    return ABOUT_TEXT_LIST[locale as Locale] || [];
  }, [locale]);

  return { aboutTextList };
};
