import { Locale } from "../lib/i18n/domain/type";
import { PageRouteComposedType, PageRouteType } from "./type";

export const useRouteItemList = (
  routeList: Array<PageRouteType>,
  locale: Locale,
): Array<PageRouteComposedType> => {
  return routeList.map((routeItem) => {
    const localeItems = routeItem[locale];

    return {
      ...localeItems,
      id: routeItem.id,
    };
  });
};
