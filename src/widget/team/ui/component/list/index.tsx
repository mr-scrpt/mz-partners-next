"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemSlideBottomSelfDelayed,
} from "@/shared/lib/animations";

import { ListTeam } from "./list.team";
import { ItemTeam } from "./item/item.team";

export const ItemTeamAnimated =
  createAnimationItemSlideBottomSelfDelayed(ItemTeam);
createAnimationItemSlideBottomSelfDelayed(ItemTeam);
export const ListTeamAnimated = createAnimationContainerImmediately(ListTeam);
