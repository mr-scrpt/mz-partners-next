import { MenuMainHamburger } from "@/shared/ui/navigation";
import { FC, HTMLAttributes } from "react";

import { NavigationMainLayout } from "./layout/navigationMain.layout";

interface NavigationMainProps extends HTMLAttributes<HTMLDivElement> {}

export const NavigationMainModule: FC<NavigationMainProps> = (props) => {
  return <NavigationMainLayout MenuSlost={<MenuMainHamburger />} />;
};
