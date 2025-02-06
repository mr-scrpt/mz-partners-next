import { MenuMain } from "@/shared/ui/menu";
import { FC, HTMLAttributes } from "react";

interface NavigationMainProps extends HTMLAttributes<HTMLDivElement> {}

export const NavigationMain: FC<NavigationMainProps> = (props) => {
  return <MenuMain className={props.className} />;
};
