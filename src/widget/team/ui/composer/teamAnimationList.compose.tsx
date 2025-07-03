import { FC, HTMLAttributes } from "react";

import { useTeamItemList } from "@/entity/team";
import { AnimatedItem, AnimatedList } from "../component/list";

interface TeamListAnimatedComposeProps extends HTMLAttributes<HTMLDivElement> {}

export const TeamListAnimatedCompose: FC<TeamListAnimatedComposeProps> = (
  props,
) => {
  return (
    <AnimatedList
      ItemComponent={AnimatedItem}
      getDataList={useTeamItemList}
      {...props}
    />
  );
};
