"use client";
import { ItemCompetency } from "./item/item.competency";
import {
  createContainerGroupFadeMovement,
  createContainerGroupItemRef,
} from "@/shared/lib/animations";
import { ListCompetency } from "./list.competency";

export const ListCompetencyAnimated =
  createContainerGroupFadeMovement(ListCompetency);

export const ItemCompetencyAnimated =
  createContainerGroupItemRef(ItemCompetency);
