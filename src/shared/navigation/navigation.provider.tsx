import { createStrictContext, useStrictContext } from "../lib/react";

import { NavigationListType, PageNavigation } from "./type";

export const navigationContext = createStrictContext<PageNavigation>();

export const NavigationProviderData = navigationContext.Provider;

export const useNavigationData = (navigationType: NavigationListType) => {
  const navigationData = useStrictContext(navigationContext);
  return navigationData[navigationType];
};
