"use client";

import {
  createContainerGroupFadeMovement,
  createContainerGroupItemRef,
} from "@/shared/lib/animations";
import { ItemProject } from "./item/item.project";
import { ListProject } from "./list.project";

export const ItemProjectAnimated = createContainerGroupItemRef(ItemProject);

export const ListProjectAnimated =
  createContainerGroupFadeMovement(ListProject);
