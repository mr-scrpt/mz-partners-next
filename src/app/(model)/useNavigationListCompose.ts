import {
  pageRouteAbout,
  pageRouteCompetency,
  pageRouteTeam,
  pageRouteContact,
  pageRouteMain,
} from "@/page";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { useRouteItemList } from "@/shared/navigation/useRouteItemList";
import { useMemo } from "react";

export const useNavigationListCompose = (locale: Locale) => {
  const composeRoute = useMemo(() => {
    return useRouteItemList(
      [pageRouteAbout, pageRouteCompetency, pageRouteTeam, pageRouteContact],
      locale,
    );
  }, [
    locale,
    pageRouteAbout,
    pageRouteCompetency,
    pageRouteTeam,
    pageRouteContact,
  ]);

  const mainRoute = useMemo(() => {
    return useRouteItemList([pageRouteMain], locale);
  }, [locale, pageRouteMain]);

  const composePageList = useMemo(() => {
    return [...mainRoute, ...composeRoute];
  }, [mainRoute, composeRoute]);

  return {
    main: composeRoute,
    footer: composeRoute,
    pageList: composePageList,
  };
};
