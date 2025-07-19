"use client";
import { FC, HTMLAttributes } from "react";

import { useTeamItemList } from "@/entity/team";
import { ItemTeamAnimated } from "../component/list";
import { ListTeam } from "../component/list/list.team";

interface ListTeamAnimatedComposeProps extends HTMLAttributes<HTMLDivElement> {}

export const ListTeamAnimatedCompose: FC<ListTeamAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListTeam
      ItemComponent={ItemTeamAnimated}
      getDataList={useTeamItemList}
      {...props}
    />
  );
};
