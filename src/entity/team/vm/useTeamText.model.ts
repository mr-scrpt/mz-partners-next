"use client";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { useLocale } from "next-intl";
import { TEAM_TEXT } from "../model/team.model";
import { useMemo } from "react";

export const useTeamText = () => {
  const locale = useLocale();
  const teamText = useMemo(() => {
    return TEAM_TEXT[locale as Locale] || [];
  }, [locale]);

  return { teamText };
};
