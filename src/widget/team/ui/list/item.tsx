"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { TeamItem } from "@/entity/team";
import Image from "next/image";
import sItem from "./item.module.scss";
import { Title } from "@/shared/ui/title";
interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  idx: number;
  item: TeamItem;
}

export const Item: FC<ItemProps> = (props) => {
  const { className, item, idx } = props;

  const isEven = idx % 2 === 0;

  return (
    <div
      className={clsx(sItem.root, className, {
        [sItem.even]: isEven,
        [sItem.odd]: !isEven,
      })}
    >
      <div className={clsx(sItem.inner)}>
        <div className={clsx(sItem.imgBox)}>
          <Image
            src={item.photo}
            alt={item.firstName + " " + item.lastName}
            className={sItem.img}
          />
        </div>
        <div className={clsx(sItem.content)}>
          <Title
            text={`${item.lastName} ${item.firstName} ${item.fatherName}`}
            size="M"
            view="SECONDARY"
            className={sItem.title}
          />
          <div className={sItem.position}>{item.position}</div>
          <div className={sItem.specialization}>{item.specialization}</div>
          <div className={sItem.expirience}>{item.expirience}</div>
          <div className={sItem.regalies}>{item.regalies}</div>
          <div className={sItem.description}>{item.description}</div>
        </div>
      </div>
    </div>
  );
};
