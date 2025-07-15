import clsx from "clsx";
import { ComponentProps, FC } from "react";
import { LinkI18 } from "../../../Link/ui/linkI18";
import { MenuItem } from "../../domain/menu.type";
import sMenu from "./menuMainHamburger.module.scss";

interface MenuMainItemProps extends ComponentProps<"li"> {
  item: MenuItem;
}

export const MenuMainHamburgerItem: FC<MenuMainItemProps> = (props) => {
  const { item, ...rest } = props;

  return (
    <li key={item.id} className={sMenu.item} {...rest}>
      <LinkI18 href={item.route} className={clsx(sMenu.link)}>
        {item.title}
      </LinkI18>
    </li>
  );
};
