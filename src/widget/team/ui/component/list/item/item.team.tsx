"use client";
import clsx from "clsx";

import { Title } from "@/shared/ui/title";
import Image from "next/image";
import sItem from "./item.team.module.scss";
import { ItemTeamProps } from "./type";

export const ItemTeam = (props: ItemTeamProps) => {
  const { className, item, idx, ...rest } = props;

  const isEven = idx % 2 === 0;

  return (
    <div
      className={clsx(sItem.root, className, {
        [sItem.even]: isEven,
        [sItem.odd]: !isEven,
      })}
      {...rest}
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
        </div>
      </div>
    </div>
  );
};
