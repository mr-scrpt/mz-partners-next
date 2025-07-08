"use client";
import clsx from "clsx";
import { FC } from "react";

import { Title } from "@/shared/ui/title";
import Image from "next/image";
import sItemProject from "./item.project.module.scss";
import { ItemProjectProps } from "./type";
import { useProjectItemAnimation } from "../../../../vm/useProjectItemAnimation.model";

export const ItemProject: FC<ItemProjectProps> = (props) => {
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
      className={clsx(sItemProject.root, [className, rootAnimationClass])}
      {...trigger}
    >
      <div className={clsx(sItemProject.inner, innerAnimationClass)}>
        <div className={sItemProject.imgBox}>
          <Image
            src={img}
            alt={title}
            className={clsx(sItemProject.img, [imgAnimationClass])}
            fill={true}
            sizes="100%"
          />
        </div>
        <div className={clsx(sItemProject.titleBox)}>
          <Title
            text={title}
            size="S"
            view="SECONDARY"
            as="h3"
            className={textAnimationClass}
          />
        </div>
        <div className={clsx(sItemProject.description, [textAnimationClass])}>
          {description}
        </div>
      </div>
    </div>
  );
};
