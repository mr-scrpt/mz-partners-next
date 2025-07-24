"use client";
import {
  createContainerGroupFade,
  createContainerGroupItemRef,
} from "@/shared/lib/animations";
import { ListPipline } from "./list.pipline";
import { ItemPipline } from "./item/item.pipline";

export const ListPiplineAnimated = createContainerGroupFade(ListPipline);

export const ItemPiplineAnimated = createContainerGroupItemRef(ItemPipline);
