"use client";

import {
  createContainerItem,
  createContainerSlideSequencePrimary,
} from "@/shared/lib/animations/factory/container.factory";
import { ItemBenefit } from "./item/item.benefit";
import { ListBenefit } from "./list.benefit";

export const ListBenefitAnimated =
  createContainerSlideSequencePrimary(ListBenefit);
// export const ListBenefitAnimated = createFourStapSlideContainer(ListBenefit);

export const ItemBenefitAnimated = createContainerItem(ItemBenefit);
