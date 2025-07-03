"use client";
import {
  createAnimationContainerDelayed,
  createAnimationItemSlideBottom,
} from "@/shared/lib/animations";

import { ListProject } from "./list.project";
import { ItemProject } from "./item/item.project";

export const ItemProjectAnimated = createAnimationItemSlideBottom(ItemProject);
export const ListProjectAnimated = createAnimationContainerDelayed(ListProject);
