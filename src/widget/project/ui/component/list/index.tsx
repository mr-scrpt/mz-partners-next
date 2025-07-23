"use client";

import {
  createContainerGroupFadeMovement,
  createContainerGroupItem,
} from "@/shared/lib/animations";
import { ItemProject } from "./item/item.project";
import { ListProject } from "./list.project";

export const ItemProjectAnimated = createContainerGroupItem(ItemProject);

export const ListProjectAnimated =
  createContainerGroupFadeMovement(ListProject);
