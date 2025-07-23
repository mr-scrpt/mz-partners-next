"use client";
import { ItemCompetency } from "./item/item.competency";
import {
  createContainerGroupFadeMovement,
  createContainerGroupItem,
} from "@/shared/lib/animations";
import { ListCompetency } from "./list.competency";

export const ListCompetencyAnimated =
  createContainerGroupFadeMovement(ListCompetency);

export const ItemCompetencyAnimated = createContainerGroupItem(ItemCompetency);
