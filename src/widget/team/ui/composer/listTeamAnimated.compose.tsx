"use client";
import { FC, HTMLAttributes } from "react";

import { useTeamItemList } from "@/entity/team";
import { ItemTeamAnimated, ListTeamAnimated } from "../component/list";

interface ListTeamAnimatedComposeProps extends HTMLAttributes<HTMLDivElement> {}

export const ListTeamAnimatedCompose: FC<ListTeamAnimatedComposeProps> = (
  props,
) => {
  console.log("[Compose] Рендер ListTeamAnimatedCompose");
  return (
    <ListTeamAnimated
      ItemComponent={ItemTeamAnimated}
      getDataList={useTeamItemList}
      {...props}
    />
  );
};
