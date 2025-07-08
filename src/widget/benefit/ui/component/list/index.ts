"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemSlideBottomSelfDelayed,
} from "@/shared/lib/animations";

import { ListBenefit } from "./list.benefit";
import { ItemBenefit } from "./item/item.benefit";

export const ItemBenefitAnimated =
  createAnimationItemSlideBottomSelfDelayed(ItemBenefit);
export const ListBenefitAnimated =
  createAnimationContainerImmediately(ListBenefit);
