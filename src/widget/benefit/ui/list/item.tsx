"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { BenefitItem } from "@/entity/benefit";
import sItem from "./item.module.scss";
import { Icon } from "@/shared/ui/icon";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: BenefitItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item, idx } = props;
  const { indicator, description } = item;

  return (
    <div className={clsx(sItem.root, className)}>
      <div className={clsx(sItem.inner)}>
        <div className={clsx(sItem.iconBox)}>
          <div className={sItem.iconWrap}>
            <Icon icon="BENEFIT" className={sItem.icon} />
          </div>
        </div>
        <div className={sItem.content}>
          <div className={sItem.indicator}>{indicator}</div>
          <div className={sItem.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};
