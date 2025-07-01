"use client";
import { FC, HTMLAttributes } from "react";
import { useLocale } from "next-intl";
import { Locale } from "@/shared/lib/i18n/domain/type";
import { NavigationProviderData } from "@/shared/navigation/navigation.provider";
import { useNavigationListCompose } from "@/page/vm/useNavigationListCompose";

interface NavigationProviderProps extends HTMLAttributes<HTMLDivElement> {}

export const NavigationProvider: FC<NavigationProviderProps> = (props) => {
  const { children } = props;
  const locale = useLocale();
  const navigationList = useNavigationListCompose(locale as Locale);

  return (
    <NavigationProviderData value={navigationList}>
      {children}
    </NavigationProviderData>
  );
};
