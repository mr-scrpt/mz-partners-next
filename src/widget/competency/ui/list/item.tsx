"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { CompetencyItem } from "@/entity/competency";
import { Title } from "@/shared/ui/title";
import { useCompetencyItemAnimation } from "../../vm/useCompetencyItemAnimation.model";
import sItem from "./item.module.scss";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: CompetencyItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item, idx } = props;
  const { title, description } = item;

  const { orderAnimationClassName, contentAnimationClassName, toggleOpen } =
    useCompetencyItemAnimation();

  return (
    <div className={clsx(sItem.root, className)}>
      <div className={clsx(sItem.inner)}>
        <div
          className={clsx(sItem.order, [orderAnimationClassName])}
          onClick={toggleOpen}
        >
          {`${idx + 1}`.padStart(2, "0")}
        </div>
        <div className={clsx(sItem.box, [contentAnimationClassName])}>
          <div className={clsx(sItem.content)}>
            <Title
              className={sItem.title}
              text={title}
              size="S"
              view="PRIMARY"
              as="h3"
            />
            <div className={sItem.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
