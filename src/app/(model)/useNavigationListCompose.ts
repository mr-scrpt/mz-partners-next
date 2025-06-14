import { pageRouteAbout } from "@/page/about";
import { pageRouteCareer } from "@/page/career";
import { pageRouteCompetency } from "@/page/competency";
import { pageRouteNews } from "@/page/news";
import { pageRouteProjects } from "@/page/project";
import { pageRouteTeam } from "@/page/team";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { useRouteItemList } from "@/shared/navigation/useRouteItemList";
import { useMemo } from "react";

export const useNavigationListCompose = (locale: Locale) => {
  const composeRoute = useMemo(() => {
    return useRouteItemList(
      [
        pageRouteAbout,
        pageRouteCompetency,
        pageRouteTeam,
        pageRouteProjects,
        pageRouteCareer,
        pageRouteNews,
      ],
      locale,
    );
  }, [
    locale,
    pageRouteAbout,
    pageRouteCompetency,
    pageRouteTeam,
    pageRouteProjects,
    pageRouteCareer,
    pageRouteNews,
  ]);

  return {
    main: composeRoute,
    footer: composeRoute,
  };
};
