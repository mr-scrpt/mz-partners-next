"use client";

import {
  createAlternatingSlideContainer,
  createContainerItem,
  createFourStapSlideContainer,
} from "@/shared/lib/animations/factory/preset.factory";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";

export const ListTeamAnimated = createAlternatingSlideContainer(ListTeam);
// export const ListTeamAnimated = createFourStapSlideContainer(ListTeam);

export const ItemTeamAnimated = createContainerItem(ItemTeam);
