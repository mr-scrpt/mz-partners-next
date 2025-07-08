"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemOpacitySelfDelayed,
} from "@/shared/lib/animations";
import { ItemPipline } from "./item/item.pipline";
import { ListPipline } from "./list.pipline";

export const ItemPiplineAnimated =
  createAnimationItemOpacitySelfDelayed(ItemPipline);

export const ListPiplineAnimated =
  createAnimationContainerImmediately(ListPipline);
