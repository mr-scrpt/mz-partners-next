import { FC, HTMLAttributes } from "react";
import { LinkI18 } from "../../Link/ui/linkI18";
import { MenuItem } from "../domain/menu.type";
import sMenu from "./menuMain.module.scss";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { MENU_DICT_FIELD, MENU_NAMESPACE } from "../domain/menu.dict";

interface MenuMainItemProps extends HTMLAttributes<HTMLDivElement> {
  item: MenuItem;
}

export const MenuMainItem: FC<MenuMainItemProps> = (props) => {
  const { item } = props;

  const t = useTranslations(MENU_NAMESPACE);
  return (
    <li key={item.id} className={sMenu.item}>
      <LinkI18 href={item.href} className={clsx(sMenu.link)}>
        {t(MENU_DICT_FIELD[item.tag])}
      </LinkI18>
    </li>
  );
};
