import { useBenefitItemList } from "@/entity/benefit";
import { FC, HTMLAttributes } from "react";

import { ListBenefit } from "../component/list/list.benefit";
import { ItemBenefitAnimated, ListBenefitAnimated } from "../component/list";

interface ListBenefitAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ListBenefitAnimatedCompose: FC<ListBenefitAnimatedComposeProps> = (
  props,
) => {
  return (
    // Используем анимированный контейнер
    <ListBenefitAnimated
      // Инжектируем в него анимированный элемент
      ItemComponent={ItemBenefitAnimated}
      getDataList={useBenefitItemList}
      {...props}
    />
  );
  // return (
  //   <ListBenefit
  //     ItemComponent={ItemBenefitAnimated}
  //     getDataList={useBenefitItemList}
  //     {...props}
  //   />
  // );
};
