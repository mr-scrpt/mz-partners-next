import { FC, HTMLAttributes } from "react";

import { useTeamItemList } from "@/entity/team";
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
