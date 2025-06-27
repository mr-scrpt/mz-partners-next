"use client";
import { useBreadcrumb } from "@/shared/navigation/useBreadcrumbs";
import { FC, HTMLAttributes } from "react";

import sBreadcrumbs from "./breadcrumbs.module.scss";
import clsx from "clsx";
import { useBreadcrumsItemList } from "../vm/useBreadcrumsItemList";
interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {}

export const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { breadcrumbList } = useBreadcrumb();
  const { renderBreadcrumbItem } = useBreadcrumsItemList();

  return (
    <div className={sBreadcrumbs.root}>
      <div className={sBreadcrumbs.inner}>
        <ul className={sBreadcrumbs.list}>
          {breadcrumbList.map((item) => {
            return (
              <li
                key={item.route}
                className={clsx(sBreadcrumbs.item, {
                  [sBreadcrumbs.item_active]: item.isActive,
                })}
              >
                {renderBreadcrumbItem(item, sBreadcrumbs.link)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
