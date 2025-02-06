import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { LinkI18 } from "../../Link/ui/linkI18";
// import { menuText } from "../model/i18.model";
import { MENU_DATA } from "../model/menu.model";
import sMenu from "./menuMain.module.scss";

import { useTranslations } from "next-intl";
interface MenuMainProps extends HTMLAttributes<HTMLDivElement> {}

export const MenuMain: FC<MenuMainProps> = (props) => {
  const { className } = props;

  const menuText = useTranslations("Menu");

  return (
    <nav className={clsx(sMenu.menu, className)} {...props}>
      <ul className={sMenu.list}>
        {Object.values(MENU_DATA).map((item) => (
          <li key={item.id} className={sMenu.item}>
            <LinkI18 href={item.href} className={clsx(sMenu.link)}>
              {menuText(item.tag)}
            </LinkI18>
          </li>
        ))}
      </ul>
    </nav>
  );
};
