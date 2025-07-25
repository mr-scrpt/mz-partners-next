"use client";

import {
  createContainerGroupItemRef,
  createContainerGroupSlideAlternating,
  createContainerListItemRef,
  createContainerListItemWrapper,
  createContainerListSlideAlternating,
} from "@/shared/lib/animations";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";

export const ListTeamAnimated = createContainerGroupSlideAlternating(ListTeam);

export const ItemTeamAnimated = createContainerGroupItemRef(ItemTeam);

// export const ListTeamAnimated = createContainerListSlideAlternating(ListTeam);
//
// export const ItemTeamAnimated = createContainerListItemWrapper(ItemTeam);
