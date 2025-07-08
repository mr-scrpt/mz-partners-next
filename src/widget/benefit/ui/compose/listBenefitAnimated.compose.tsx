import { useBenefitItemList } from "@/entity/benefit";
import { FC, HTMLAttributes } from "react";

import { ItemBenefitAnimated, ListBenefitAnimated } from "../component/list";

interface ListBenefitAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListBenefitAnimatedCompose: FC<ListBenefitAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListBenefitAnimated
      ItemComponent={ItemBenefitAnimated}
      getDataList={useBenefitItemList}
      {...props}
    />
  );
};
