"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sAnimation from "./menuMain.animation.module.scss";
import sMenu from "./menuMain.module.scss";

import { useMenu } from "@/shared/lib/menu";
import { Icon } from "@/shared/ui/icon";
import { MenuMainItem } from "./menuMainItem";
import { useNavigationData } from "@/shared/navigation/navigation.provider";
import { NAVIGATION_LIST } from "@/shared/navigation/type";
interface MenuMainProps extends HTMLAttributes<HTMLDivElement> {}

export const MenuMain: FC<MenuMainProps> = (props) => {
  const { className } = props;
  const { isOpen, toggleMenu, menuRef } = useMenu();

  const menuList = useNavigationData(NAVIGATION_LIST.main);

  return (
    <nav className={clsx(sMenu.root, className)} {...props} ref={menuRef}>
      <div className={clsx(sMenu.inner)}>
        <div className={clsx(sMenu.controller)} onClick={() => toggleMenu()}>
          <Icon icon="HAMBURGER" className={sMenu.icon} />
          <div className={clsx(sMenu.text)}>Menu</div>
        </div>
        <ul
          className={clsx(sMenu.list, sAnimation.showing, {
            [sAnimation.showing_open]: isOpen,
            [sAnimation.showing_close]: !isOpen,
          })}
        >
          {menuList.map((item) => (
            <MenuMainItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
