"use client";
import {
  createAnimationContainerDelayed,
  createAnimationItemSlideAlternating,
} from "@/shared/lib/animations";
import { ItemPrinciple } from "./item/item.principle";
import { ListPrinciple } from "./list.principle";

export const ItemPrincipleAnimated =
  createAnimationItemSlideAlternating(ItemPrinciple);
export const ListPrincipleAnimated =
  createAnimationContainerDelayed(ListPrinciple);
