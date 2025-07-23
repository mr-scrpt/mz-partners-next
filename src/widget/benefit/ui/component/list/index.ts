"use client";

import { ItemBenefit } from "./item/item.benefit";
import { ListBenefit } from "./list.benefit";
import {
  createContainerGroupItem,
  createContainerGroupSlideAround,
} from "@/shared/lib/animations";

export const ListBenefitAnimated = createContainerGroupSlideAround(ListBenefit);

export const ItemBenefitAnimated = createContainerGroupItem(ItemBenefit);
