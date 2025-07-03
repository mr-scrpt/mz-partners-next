"use client";
import clsx from "clsx";
import { FC } from "react";

import { Title } from "@/shared/ui/title";
import sDeco from "./deco.module.scss";
import sItemPrinciple from "./item.principle.module.scss";
import { ItemPrincipleProps } from "./type";

export const ItemPrinciple: FC<ItemPrincipleProps> = (props) => {
  const { className, item, idx } = props;
  const { title, description } = item;

  const cDecoBG = clsx(sDeco.deco, {
    [sDeco.deco_bg_dark]: idx % 2 === 0,
    [sDeco.deco_bg_primary]: idx % 2 === 1,
  });

  return (
    <div className={clsx(sItemPrinciple.root, className)}>
      <div className={clsx(sItemPrinciple.inner)}>
        <div className={clsx(sItemPrinciple.titleBox, cDecoBG)}>
          <Title text={title} size="S" view="PRIMARY_INVERTED" as="h3" />
        </div>
        <div className={sItemPrinciple.description}>{description}</div>
      </div>
    </div>
  );
};
