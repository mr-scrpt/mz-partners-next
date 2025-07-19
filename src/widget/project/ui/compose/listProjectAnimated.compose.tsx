import { FC, HTMLAttributes } from "react";

import { useProjectItemList } from "@/entity/project";
import { ItemProjectAnimated } from "../component/list";
import { ListProject } from "../component/list/list.project";

interface ListProjectAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListProjectAnimatedCompose: FC<ListProjectAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListProject
      ItemComponent={ItemProjectAnimated}
      getDataList={useProjectItemList}
      {...props}
    />
  );
};
