"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { PrincipleItem } from "../../domain/principle.type";

import { useTranslations } from "next-intl";
import { PRINCIPLE_NAMESPACE } from "../../domain/principle.dict";
import sItem from "./item.module.scss";
import sDeco from "./deco.module.scss";
import { Title } from "@/shared/ui/title";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: PrincipleItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item, idx } = props;
  const { title, description } = item;
  const t = useTranslations(PRINCIPLE_NAMESPACE);

  const cDecoBG = clsx(sDeco.deco, {
    [sDeco.deco_bg_dark]: idx % 2 === 0,
    [sDeco.deco_bg_primary]: idx % 2 === 1,
  });

  return (
    <div className={clsx(sItem.root, className)}>
      <div className={clsx(sItem.inner)}>
        <div className={clsx(sItem.titleBox, cDecoBG)}>
          <Title text={t(title)} size="S" view="PRIMARY_INVERTED" as="h3" />
        </div>
        <div className={sItem.description}>{t(description)}</div>
      </div>
    </div>
  );
};
