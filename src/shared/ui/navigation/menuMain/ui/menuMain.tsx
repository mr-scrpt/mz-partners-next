"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sMenu from "./menuMain.module.scss";

import { useNavigationData } from "@/shared/navigation/navigation.provider";
import { NAVIGATION_LIST } from "@/shared/navigation/type";

import { MenuMainItem } from "./menuMainItem";

interface MenuMainProps extends HTMLAttributes<HTMLDivElement> {}

export const MenuMain: FC<MenuMainProps> = (props) => {
  const { className } = props;

  const menuList = useNavigationData(NAVIGATION_LIST.footer);

  return (
    <nav className={clsx(sMenu.root, className)} {...props}>
      <div className={clsx(sMenu.inner)}>
        <ul className={clsx(sMenu.list)}>
          {menuList.map((item) => (
            <MenuMainItem item={item} key={item.id} className={sMenu.item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
