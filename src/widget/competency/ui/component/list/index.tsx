"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemOpacitySelfDelayed,
} from "@/shared/lib/animations";
import { ItemCompetency } from "./item/item.competency";
import { ListCompetency } from "./list.competency";

export const ItemCompetencyAnimated =
  createAnimationItemOpacitySelfDelayed(ItemCompetency);

export const ListCompetencyAnimated =
  createAnimationContainerImmediately(ListCompetency);
