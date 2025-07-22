"use client";
import { ItemCompetency } from "./item/item.competency";
import {
  createContainerGroupFadeMovementAlternating,
  createContainerGroupItem,
} from "@/shared/lib/animations/factory/group.factory";
import { ListCompetency } from "./list.competency";

export const ListCompetencyAnimated =
  createContainerGroupFadeMovementAlternating(ListCompetency);

export const ItemCompetencyAnimated = createContainerGroupItem(ItemCompetency);
