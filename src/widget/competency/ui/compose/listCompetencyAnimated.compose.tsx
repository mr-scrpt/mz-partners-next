import { useCompetencyItemList } from "@/entity/competency";
import { FC, HTMLAttributes } from "react";
import { ItemCompetencyAnimated } from "../component/list";
import { ListCompetency } from "../component/list/list.competency";

interface ListCompetencyAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListCompetencyAnimatedCompose: FC<
  ListCompetencyAnimatedComposeProps
> = (props) => {
  return (
    <ListCompetency
      ItemComponent={ItemCompetencyAnimated}
      getDataList={useCompetencyItemList}
      {...props}
    />
  );
};
