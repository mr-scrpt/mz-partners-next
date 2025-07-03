"use client";
import {
  createAnimationContainerDelayed,
  createAnimationItemOpacityAlternating,
} from "@/shared/lib/animations";
import { ItemCompetency } from "./item/item.competency";
import { ListCompetency } from "./list.competency";

export const ItemCompetencyAnimate =
  createAnimationItemOpacityAlternating(ItemCompetency);

export const ListCompetencyAnimated =
  createAnimationContainerDelayed(ListCompetency);
