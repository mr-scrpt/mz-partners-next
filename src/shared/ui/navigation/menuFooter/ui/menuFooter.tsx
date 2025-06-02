"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import sMenu from "./menuFooter.module.scss";

import { useNavigationData } from "@/shared/navigation/navigation.provider";
import { NAVIGATION_LIST } from "@/shared/navigation/type";
import { MenuFooterItem } from "./menuFooterItem";
interface MenuFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const MenuFooter: FC<MenuFooterProps> = (props) => {
  const { className } = props;

  const menuList = useNavigationData(NAVIGATION_LIST.footer);

  return (
    <nav className={clsx(sMenu.root, className)} {...props}>
      <div className={clsx(sMenu.inner)}>
        <ul className={clsx(sMenu.list)}>
          {menuList.map((item) => (
            <MenuFooterItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </nav>
  );
};
