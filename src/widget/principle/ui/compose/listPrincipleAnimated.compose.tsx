import { FC, HTMLAttributes } from "react";
import {
  ItemPrincipleAnimated,
  ListPrincipleAnimated,
} from "../component/list";
import { usePrincipleItemList } from "@/entity/principle";

interface ListPrincipleAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListPrincipleAnimatedCompose: FC<
  ListPrincipleAnimatedComposeProps
> = (props) => {
  return (
    <ListPrincipleAnimated
      ItemComponent={ItemPrincipleAnimated}
      getDataList={usePrincipleItemList}
    />
  );
};
