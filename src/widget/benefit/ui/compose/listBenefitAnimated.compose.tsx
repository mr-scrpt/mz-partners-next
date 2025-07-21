import { useBenefitItemList } from "@/entity/benefit";
import { FC, HTMLAttributes } from "react";
import { ListBenefitAnimated } from "../component/list";
import { ItemBenefit } from "../component/list/item/item.benefit";

interface ListBenefitAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListBenefitAnimatedCompose: FC<ListBenefitAnimatedComposeProps> = (
  props,
) => {
  return (
    <ListBenefitAnimated
      ItemComponent={ItemBenefit}
      getDataList={useBenefitItemList}
      {...props}
    />
  );
};
