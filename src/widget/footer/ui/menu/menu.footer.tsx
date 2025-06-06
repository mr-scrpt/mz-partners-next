import { MenuMain } from "@/shared/ui/navigation";
import { FC, HTMLAttributes } from "react";

interface MenuFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const MenuFooter: FC<MenuFooterProps> = (props) => {
  return <MenuMain />;
};
