"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { PiplineItem } from "@/entity/pipline";
import sItem from "./item.module.scss";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: PiplineItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item, idx } = props;
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
