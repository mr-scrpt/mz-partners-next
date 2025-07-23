"use client";
import { ItemCompetency } from "./item/item.competency";
import {
  createContainerGroupFadeMovement,
  createContainerGroupItem,
  createContainerListFadeMovement,
  createContainerListItem,
} from "@/shared/lib/animations";
import { ListCompetency } from "./list.competency";

export const ListCompetencyAnimated2 =
  createContainerGroupFadeMovement(ListCompetency);

export const ItemCompetencyAnimated2 = createContainerGroupItem(ItemCompetency);
//
export const ListCompetencyAnimated =
  createContainerListFadeMovement(ListCompetency);

export const ItemCompetencyAnimated = createContainerListItem(ItemCompetency);
