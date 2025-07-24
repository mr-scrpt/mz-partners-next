"use client";
import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import { Title } from "@/shared/ui/title";
import Image from "next/image";
import sItem from "./item.team.module.scss";
import { ItemTeamProps } from "./type";

import type { ComponentProps } from "react";

type itemTeamProps = ComponentProps<"div">;

export const ItemTeam = (props: itemTeamProps) => {
  const { className, ref, ...rest } = props;

  return (
    <div className={clsx(sItem.root, className)} {...rest}>
      <div className={clsx(sItem.title)}>TITLE</div>
      <div className={clsx(sItem.contend)}>CONTENT</div>
    </div>
  );
};

// import sList from "./item.team.module.scss";
// export const ListTeam: FC = () => {
//   return (
//     <div className={sList.root}>
//       <ItemTeam className={sList.item} />
//     </div>
//   );
// };
//
// import type { ComponentProps } from 'react';
//
// type itemTeamProps = ComponentProps<'div'>;
//
// export const itemTeam2 = (props: itemTeamProps) => {
//   const { children, ref, ...rest } = props;
//
//   return (
//     <div {...rest}>
//       29H
//     </div>
//   );
// };
