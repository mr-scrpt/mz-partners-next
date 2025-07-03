import { FC, HTMLAttributes } from "react";

import { useProjectItemList } from "@/entity/project";
import { ItemProjectAnimated, ListProjectAnimated } from "../component/list";

interface ListProjectAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListProjectAnimatedCompose: FC<ListProjectAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListProjectAnimated
      ItemComponent={ItemProjectAnimated}
      getDataList={useProjectItemList}
      {...props}
    />
  );
};
