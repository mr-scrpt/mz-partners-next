import { useBenefitItemList } from "@/entity/benefit";
import { FC, HTMLAttributes } from "react";

import { ItemBenefitAnimated } from "../component/list";
import { ListBenefit } from "../component/list/list.benefit";

interface ListBenefitAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListBenefitAnimatedCompose: FC<ListBenefitAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListBenefit
      ItemComponent={ItemBenefitAnimated}
      getDataList={useBenefitItemList}
      {...props}
    />
  );
};
