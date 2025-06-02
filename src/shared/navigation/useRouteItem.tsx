import { Locale } from "../lib/i18n/domain/type";
import { PageRouteType } from "./type";

export const useRouteItem = (routeItem: PageRouteType, locale: Locale) => {
  return {
    id: routeItem.id,
    ...Object.values(routeItem[locale as Locale]),
  };
};
