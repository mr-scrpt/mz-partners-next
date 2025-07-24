"use client";
import clsx from "clsx";
import { FC } from "react";

import sItemBenefit from "./item.benefit.module.scss";
import { Icon } from "@/shared/ui/icon";
import { ItemBenefitProps } from "./type";

export const ItemBenefit: FC<ItemBenefitProps> = (props) => {
  const { className, item, ...rest } = props;
  const { indicator, description } = item;

  return (
    <div className={clsx(sItemBenefit.root, className)} {...rest}>
      <div className={clsx(sItemBenefit.inner)}>
        <div className={clsx(sItemBenefit.iconBox)}>
          <div className={sItemBenefit.iconWrap}>
            <Icon icon="BENEFIT" className={sItemBenefit.icon} />
          </div>
        </div>
        <div className={sItemBenefit.content}>
          <div className={sItemBenefit.indicator}>{indicator}</div>
          <div className={sItemBenefit.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};
