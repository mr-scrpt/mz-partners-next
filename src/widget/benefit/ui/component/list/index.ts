"use client";
import {
  createAnimationContainerDelayed,
  createAnimationItemSlideBottom,
} from "@/shared/lib/animations";

import { ListBenefit } from "./list.benefit";
import { ItemBenefit } from "./item/item.benefit";

export const ItemBenefitAnimated = createAnimationItemSlideBottom(ItemBenefit);
export const ListBenefitAnimated = createAnimationContainerDelayed(ListBenefit);
