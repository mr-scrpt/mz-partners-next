import { FC, HTMLAttributes } from "react";
import { ItemPrincipleAnimated } from "../component/list";
import { usePrincipleItemList } from "@/entity/principle";
import { ListPrinciple } from "../component/list/list.principle";

interface ListPrincipleAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListPrincipleAnimatedCompose: FC<
  ListPrincipleAnimatedComposeProps
> = (props) => {
  return (
    <ListPrinciple
      ItemComponent={ItemPrincipleAnimated}
      getDataList={usePrincipleItemList}
    />
  );
};
