"use client";

import { ItemBenefit } from "./item/item.benefit";
import { ListBenefit } from "./list.benefit";
import {
  createDefaultStaggerContainer,
  createStaggerItemFadeIn,
  createStaggerItemSlideBottom,
} from "@/shared/lib/animations/factory/preset.factory";

export const ListBenefitAnimated = createDefaultStaggerContainer(ListBenefit);

export const ItemBenefitAnimated = createStaggerItemSlideBottom(ItemBenefit);
