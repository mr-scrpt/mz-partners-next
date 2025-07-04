"use client";
import {
  createAnimationContainerDelayed,
  createAnimationItemOpacity,
} from "@/shared/lib/animations";
import { ItemPipline } from "./item/item.pipline";
import { ListPipline } from "./list.pipline";

export const ItemPiplineAnimated = createAnimationItemOpacity(ItemPipline);

export const ListPiplineAnimated = createAnimationContainerDelayed(ListPipline);
