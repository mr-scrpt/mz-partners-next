"use client";
import clsx from "clsx";
import { FC } from "react";

import { Title } from "@/shared/ui/title";
import Image from "next/image";
import sItem from "./item.team.module.scss";
import { ItemTeamProps } from "./type";

export const ItemTeam: FC<ItemTeamProps> = (props) => {
  const { className, item, idx } = props;

  const isEven = idx % 2 === 0;
  console.log("output_log:  =>>>", idx, isEven);

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
            text={`${item.firstName} ${item.lastName} `}
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
