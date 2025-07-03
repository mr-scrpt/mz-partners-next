"use client";
import {
  createAnimationContainerDelayed,
  createAnimationItemOpacity,
} from "@/shared/lib/animations";
import { ItemCompetency } from "./item/item.competency";
import { ListCompetency } from "./list.competency";

export const ItemCompetencyAnimate = createAnimationItemOpacity(ItemCompetency);

export const ListCompetencyAnimated =
  createAnimationContainerDelayed(ListCompetency);
