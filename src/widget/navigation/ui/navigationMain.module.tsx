import { MenuMain } from "@/shared/ui/menu";
import { FC, HTMLAttributes } from "react";
import { NavigationMainLayout } from "./layout/navigationMain.layout";

interface NavigationMainProps extends HTMLAttributes<HTMLDivElement> {}

export const NavigationMainModule: FC<NavigationMainProps> = (props) => {
  return <NavigationMainLayout MenuSlost={<MenuMain />} />;
};
