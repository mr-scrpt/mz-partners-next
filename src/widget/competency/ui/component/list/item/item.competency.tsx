"use client";
import clsx from "clsx";
import { FC } from "react";

import { Title } from "@/shared/ui/title";
import { useCompetencyItemAnimation } from "../../../../vm/useCompetencyItemAnimation.model";
import sItemCopmetency from "./item.competency.module.scss";
import { ItemCompetencyProps } from "./type";

export const ItemCompetency: FC<ItemCompetencyProps> = (props) => {
  const { className, item, idx } = props;
  const { title, description } = item;

  const { orderAnimationClassName, contentAnimationClassName, toggleOpen } =
    useCompetencyItemAnimation();

  return (
    <div className={clsx(sItemCopmetency.root, className)}>
      <div className={clsx(sItemCopmetency.inner)}>
        <div
          className={clsx(sItemCopmetency.order, [orderAnimationClassName])}
          onClick={toggleOpen}
        >
          {`${idx + 1}`.padStart(2, "0")}
        </div>
        <div className={clsx(sItemCopmetency.box, [contentAnimationClassName])}>
          <div className={clsx(sItemCopmetency.content)}>
            <Title
              className={sItemCopmetency.title}
              text={title}
              size="S"
              view="PRIMARY"
              as="h3"
            />
            <div className={sItemCopmetency.description}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
