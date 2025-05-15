import { pageRouteAbout } from "@/page/about";
import { pageRouteCareer } from "@/page/career";
import { pageRouteConception } from "@/page/conception";
import { pageRouteNews } from "@/page/news";
import { pageRouteProjects } from "@/page/project";
import { pageRouteTeam } from "@/page/team";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { useRouteItemList } from "@/shared/navigation/useRouteItemList";

export const useNavigationListCompose = (locale: Locale) => ({
  main: useRouteItemList(
    [
      pageRouteAbout,
      pageRouteConception,
      pageRouteTeam,
      pageRouteProjects,
      pageRouteCareer,
      pageRouteNews,
    ],
    locale,
  ),
});
