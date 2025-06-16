import { pageRouteAbout } from "@/page/about";
import { pageRouteCompetency } from "@/page/competency";
import { pageRouteContact } from "@/page/contact";
import { pageRouteTeam } from "@/page/team";
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

  return {
    main: composeRoute,
    footer: composeRoute,
  };
};
