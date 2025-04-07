"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { ConceptItem } from "../../domain/concept.type";

import { useConceptItemAnimationClass } from "../vm/useConceptItemAnimationClass.model";
import sItem from "./item.module.scss";
import { useTranslations } from "next-intl";
import { CONCEPT_NAMESPACE } from "../../domain/concept.dict";
import { Title } from "@/shared/ui/title";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: ConceptItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item, idx } = props;
  const { title, description } = item;
  const t = useTranslations(CONCEPT_NAMESPACE);

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
        <div className={clsx(sItem.box, [contentAnimationClassName])}>
          <div className={clsx(sItem.content)}>
            <Title
              className={sItem.title}
              text={t(title)}
              size="S"
              view="PRIMARY"
              as="h3"
              // onClick={toggleOpen}
            />
            <div className={sItem.description}>{t(description)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
