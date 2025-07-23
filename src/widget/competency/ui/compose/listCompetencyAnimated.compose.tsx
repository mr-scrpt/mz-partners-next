import { useCompetencyItemList } from "@/entity/competency";
import { FC, HTMLAttributes } from "react";
import {
  ItemCompetencyAnimated,
  ItemCompetencyAnimated2,
  ListCompetencyAnimated,
  ListCompetencyAnimated2,
} from "../component/list";

interface ListCompetencyAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListCompetencyAnimatedCompose: FC<
  ListCompetencyAnimatedComposeProps
> = (props) => {
  return (
    <>
      <ListCompetencyAnimated
        ItemComponent={ItemCompetencyAnimated}
        getDataList={useCompetencyItemList}
        {...props}
      />
      <ListCompetencyAnimated2
        ItemComponent={ItemCompetencyAnimated2}
        getDataList={useCompetencyItemList}
        {...props}
      />
    </>
  );
};
