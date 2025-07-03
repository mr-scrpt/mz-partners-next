import { Locale } from "@/shared/lib/i18n/domain/type";
import { TEAM_LIST } from "../model/teamList.model";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import { GetTeamDataList } from "../domain/data.type";

export const useTeamItemList: GetTeamDataList = () => {
  const locale = useLocale();
  const teamItemList = useMemo(() => {
    return TEAM_LIST[locale as Locale] || [];
  }, [locale]);

  return { teamItemList };
};
