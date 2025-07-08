"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemSlideBottomSelfDelayed,
} from "@/shared/lib/animations";

import { ListProject } from "./list.project";
import { ItemProject } from "./item/item.project";

export const ItemProjectAnimated =
  createAnimationItemSlideBottomSelfDelayed(ItemProject);
export const ListProjectAnimated =
  createAnimationContainerImmediately(ListProject);
