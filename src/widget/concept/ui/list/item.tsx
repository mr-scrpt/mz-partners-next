"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { ConceptItem } from "../../domain/concept.type";

import { useConceptItemAnimationClass } from "../vm/useConceptItemAnimationClass.model";
import sItem from "./item.module.scss";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: ConceptItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item, idx } = props;
  const { title, description } = item;

  const { orderAnimationClassName, contentAnimationClassName, toggleOpen } =
    useConceptItemAnimationClass();

  return (
    <div className={clsx(sItem.root, className)}>
      <div className={clsx(sItem.inner)}>
        <div
          className={clsx(sItem.order, [orderAnimationClassName])}
          onClick={toggleOpen}
        >
          {`${idx + 1}`.padStart(2, "0")}
        </div>
        <div className={clsx(sItem.content, [contentAnimationClassName])}>
          <div className={sItem.title}>{title}</div>
          <div className={sItem.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};
