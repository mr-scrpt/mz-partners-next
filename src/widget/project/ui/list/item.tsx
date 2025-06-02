"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { Title } from "@/shared/ui/title";
import Image from "next/image";
import { useProjectItemAnimation } from "../../vm/useProjectItemAnimation.model";
import sItem from "./item.module.scss";
import { ProjectItem } from "@/entity/project";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: ProjectItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item } = props;
  const { title, img, description } = item;

  const {
    rootAnimationClass,
    innerAnimationClass,
    textAnimationClass,
    imgAnimationClass,
    trigger,
  } = useProjectItemAnimation();

  return (
    <div
      className={clsx(sItem.root, [className, rootAnimationClass])}
      {...trigger}
    >
      <div className={clsx(sItem.inner, innerAnimationClass)}>
        <div className={sItem.imgBox}>
          <Image
            src={img}
            alt={title}
            className={clsx(sItem.img, [imgAnimationClass])}
            fill={true}
            sizes="100%"
          />
        </div>
        <div className={clsx(sItem.titleBox)}>
          <Title
            text={title}
            size="S"
            view="SECONDARY"
            as="h3"
            className={textAnimationClass}
          />
        </div>
        <div className={clsx(sItem.description, [textAnimationClass])}>
          {description}
        </div>
      </div>
    </div>
  );
};
