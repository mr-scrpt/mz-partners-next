import { useCompetencyItemList } from "@/entity/competency";
import { FC, HTMLAttributes } from "react";
import {
  ItemCompetencyAnimate,
  ListCompetencyAnimated,
} from "../component/list";

interface ListCompetencyAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListCompetencyAnimatedCompose: FC<
  ListCompetencyAnimatedComposeProps
> = (props) => {
  return (
    <ListCompetencyAnimated
      ItemComponent={ItemCompetencyAnimate}
      getDataList={useCompetencyItemList}
      {...props}
    />
  );
};
