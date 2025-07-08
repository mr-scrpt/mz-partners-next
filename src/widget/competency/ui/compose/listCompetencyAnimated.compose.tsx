import { useCompetencyItemList } from "@/entity/competency";
import { FC, HTMLAttributes } from "react";
import {
  ItemCompetencyAnimated,
  ListCompetencyAnimated,
} from "../component/list";

interface ListCompetencyAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListCompetencyAnimatedCompose: FC<
  ListCompetencyAnimatedComposeProps
> = (props) => {
  return (
    <ListCompetencyAnimated
      ItemComponent={ItemCompetencyAnimated}
      getDataList={useCompetencyItemList}
      {...props}
    />
  );
};
