"use client";
import { FC, HTMLAttributes } from "react";

import { useTeamItemList } from "@/entity/team";
import { ItemTeam } from "../component/list/item/item.team";
import { ListTeam } from "../component/list/list.team";
import { ItemTeamAnimated, ListTeamAnimated } from "../component/list";

interface ListTeamAnimatedComposeProps extends HTMLAttributes<HTMLDivElement> {}

export const ListTeamAnimatedCompose: FC<ListTeamAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListTeamAnimated
      ItemComponent={ItemTeamAnimated}
      getDataList={useTeamItemList}
      {...props}
    />
  );
};
