"use client";

import { ItemBenefit } from "./item/item.benefit";
import { ListBenefit } from "./list.benefit";
import {
  createDefaultStaggerContainer,
  createStaggerItemFadeIn,
  createStaggerItemSlideBottom,
} from "@/shared/lib/animations/factory/preset.factory";

// import { createAnimationItemSlideBottomSelfDelayed } from "@/shared/lib/animations";
//
// import { ItemBenefit } from "./item/item.benefit";
//
// export const ItemBenefitAnimated =
export const ListBenefitAnimated = createDefaultStaggerContainer(ListBenefit);

// ✅ Создаем анимированный ЭЛЕМЕНТ
// export const ItemBenefitAnimated = createStaggerItemFadeIn(ItemBenefit);
export const ItemBenefitAnimated = createStaggerItemSlideBottom(ItemBenefit);
