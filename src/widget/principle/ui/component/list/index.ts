"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemSlideAlternatingSelfDelayed,
} from "@/shared/lib/animations";
import { ItemPrinciple } from "./item/item.principle";
import { ListPrinciple } from "./list.principle";

export const ItemPrincipleAnimated =
  createAnimationItemSlideAlternatingSelfDelayed(ItemPrinciple);

export const ListPrincipleAnimated =
  createAnimationContainerImmediately(ListPrinciple);
