"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { ContactItem } from "@/entity/contact";
import sItem from "./item.module.scss";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  item: ContactItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item } = props;
  const { title, description } = item;

  return (
    <div className={clsx(sItem.root, className)}>
      <div className={clsx(sItem.inner)}>
        <div className={sItem.title}>{title}</div>
        <div className={sItem.description}>{description}</div>
      </div>
    </div>
  );
};
