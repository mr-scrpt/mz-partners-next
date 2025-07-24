"use client";

import {
  createContainerGroupItemRef,
  createContainerGroupSlideAlternating,
} from "@/shared/lib/animations";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";

export const ListTeamAnimated = createContainerGroupSlideAlternating(ListTeam);

export const ItemTeamAnimated = createContainerGroupItemRef(ItemTeam);
