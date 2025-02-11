"use client";
import clsx from "clsx";
import { FC, HTMLAttributes, useState } from "react";
import sMenu from "./menuMain.module.scss";
import sAnimation from "./menuMainAnimation.module.scss";

import { useMenuItemList } from "../vm/getMenuItemList.model";
import { MenuMainItem } from "./menuMainItem";
import { Icon } from "@/shared/ui/icon";
interface MenuMainProps extends HTMLAttributes<HTMLDivElement> {}

export const MenuMain: FC<MenuMainProps> = (props) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const { menuItemList } = useMenuItemList();

  return (
    <nav className={clsx(sMenu.root, className)} {...props}>
      <div className={clsx(sMenu.inner)}>
        <div className={clsx(sMenu.controller)}>
          <Icon icon="dd" />
          <div className={clsx(sMenu.text)} onClick={() => setIsOpen(!isOpen)}>
            Menu
          </div>
        </div>
        <ul
          className={clsx(sMenu.list, sAnimation.box, {
            [sAnimation.box_open]: isOpen,
            [sAnimation.box_close]: !isOpen,
          })}
        >
          {menuItemList.map((item) => (
            <MenuMainItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
