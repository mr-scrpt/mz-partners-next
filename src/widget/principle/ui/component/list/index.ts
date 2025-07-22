"use client";
import { ItemPrinciple } from "./item/item.principle";
import {
  createContainerGroupItem,
  createContainerGroupSlideAlternating,
} from "@/shared/lib/animations/factory/group.factory";
import { ListPrinciple } from "./list.principle";

export const ListPrincipleAnimated =
  createContainerGroupSlideAlternating(ListPrinciple);
export const ItemPrincipleAnimated = createContainerGroupItem(ItemPrinciple);
