"use client";

import { ItemBenefit } from "./item/item.benefit";
import { ListBenefit } from "./list.benefit";
import {
  createContainerGroupItemRef,
  createContainerGroupSlideAround,
} from "@/shared/lib/animations";

export const ListBenefitAnimated = createContainerGroupSlideAround(ListBenefit);

export const ItemBenefitAnimated = createContainerGroupItemRef(ItemBenefit);
