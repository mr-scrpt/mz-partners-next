import { PageRouteType } from "@/shared/navigation/type";

const ROUTE_PATH = "/about";

export const pageRouteAbout: PageRouteType = {
  id: "about",
  ua: {
    title: "Про нас",
    route: ROUTE_PATH,
  },

  en: {
    title: "About",
    route: ROUTE_PATH,
  },
};
