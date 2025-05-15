import { FC, HTMLAttributes } from "react";
import { LinkI18 } from "../../../Link/ui/linkI18";
import sMenu from "./menuFooter.module.scss";
import clsx from "clsx";
import { MenuItem } from "../../domain/menu.type";

interface MenuFooterItemProps extends HTMLAttributes<HTMLDivElement> {
  item: MenuItem;
}

export const MenuFooterItem: FC<MenuFooterItemProps> = (props) => {
  const { item } = props;

  return (
    <li key={item.id} className={sMenu.item}>
      <LinkI18 href={item.route} className={clsx(sMenu.link)}>
        {item.title}
      </LinkI18>
    </li>
  );
};
