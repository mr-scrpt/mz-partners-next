"use client";
import { createAnimationItemSlideAlternatingSelfDelayed } from "@/shared/lib/animations";

import { ItemTeam } from "./item/item.team";
import {
  createDefaultStaggerContainer,
  createStaggerItemSlideBottom,
} from "@/shared/lib/animations/factory/preset.factory";
import { ListTeam } from "./list.team";

// export const ItemTeamAnimated =
//   createAnimationItemSlideAlternatingSelfDelayed(ItemTeam);
export const ListTeamAnimated = createDefaultStaggerContainer(ListTeam);

export const ItemTeamAnimated = createStaggerItemSlideBottom(ItemTeam);
