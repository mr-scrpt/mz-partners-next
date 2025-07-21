"use client";

import { createStaggerItem } from "@/shared/lib/animations/factory/builder.factory";
import { ItemBenefit } from "./item/item.benefit";
import { ListBenefit } from "./list.benefit";
import { createAlternatingSlideContainer } from "@/shared/lib/animations/factory/preset.factory";
import { withStaggerItem } from "@/shared/lib/animations/vm/hoc";
// import {
//   createDefaultStaggerContainer,
//   createStaggerItemFadeIn,
//   createStaggerItemSlideBottom,
// } from "@/shared/lib/animations/factory/preset.factory";

export const ListBenefitAnimated = createAlternatingSlideContainer(ListBenefit);

export const ItemBenefitAnimated = withStaggerItem(ItemBenefit);
