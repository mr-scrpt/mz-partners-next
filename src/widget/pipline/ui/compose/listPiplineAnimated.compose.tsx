import { usePiplineItemList } from "@/entity/pipline";
import { FC, HTMLAttributes } from "react";
import { ItemPiplineAnimated } from "../component/list";
import { ListPipline } from "../component/list/list.pipline";

interface ListPiplineAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListPiplineAnimatedCompose: FC<ListPiplineAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListPipline
      ItemComponent={ItemPiplineAnimated}
      getDataList={usePiplineItemList}
      {...props}
    />
  );
};
