"use client";
import clsx from "clsx";
import { FC } from "react";

import sItemPipline from "./item.pipline.module.scss";
import { ItemPiplineProps } from "./type";

export const ItemPipline: FC<ItemPiplineProps> = (props) => {
  const { className, item, ...rest } = props;
  const { title, description } = item;

  return (
    <div className={clsx(sItemPipline.root, className)} {...rest}>
      <div className={clsx(sItemPipline.inner)}>
        <div className={sItemPipline.title}>{title}</div>
        <div className={sItemPipline.description}>{description}</div>
      </div>
    </div>
  );
};
