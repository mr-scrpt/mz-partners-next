import { PageRouteType } from "@/shared/navigation/type";

const ROUTE_PATH_NEWS = "/news";
export const pageRouteNews: PageRouteType = {
  id: "news",
  ua: {
    title: "Новини",
    route: ROUTE_PATH_NEWS,
  },
  en: {
    title: "News",
    route: ROUTE_PATH_NEWS,
  },
};
