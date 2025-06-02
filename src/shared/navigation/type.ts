import { Locale } from "../lib/i18n/domain/type";

export interface PageRouteItem {
  title: string;
  route: string;
}

export type PageRouteType = {
  id: string;
} & {
  [key in Locale]: PageRouteItem;
};
// export interface PageRouteType {
//   id: string;
//   ua: PageRouteItem;
//   en: PageRouteItem;
// }

export interface PageRouteComposedType extends PageRouteItem {
  id: string;
}

export const NAVIGATION_LIST = {
  main: "main",
  footer: "footer",
} as const;

export type NavigationListType = keyof typeof NAVIGATION_LIST;

export interface PageNavigation {
  [NAVIGATION_LIST.main]: Array<PageRouteComposedType>;
  [NAVIGATION_LIST.footer]: Array<PageRouteComposedType>;
}
