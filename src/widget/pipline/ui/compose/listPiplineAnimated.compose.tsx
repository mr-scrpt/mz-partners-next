import { usePiplineItemList } from "@/entity/pipline";
import { FC, HTMLAttributes } from "react";
import { ItemPiplineAnimated, ListPiplineAnimated } from "../component/list";

interface ListPiplineAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListPiplineAnimatedCompose: FC<ListPiplineAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListPiplineAnimated
      ItemComponent={ItemPiplineAnimated}
      getDataList={usePiplineItemList}
      {...props}
    />
  );
};
