"use client";

import { ItemBenefit } from "./item/item.benefit";
import { ListBenefit } from "./list.benefit";
import {
  createContainerItem,
  createFourStapSlideContainer,
  createFourWaySlideContainer,
} from "@/shared/lib/animations/factory/preset.factory";

export const ListBenefitAnimated = createFourWaySlideContainer(ListBenefit);
// export const ListBenefitAnimated = createFourStapSlideContainer(ListBenefit);

export const ItemBenefitAnimated = createContainerItem(ItemBenefit);
