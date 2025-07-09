"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemSlideBottom,
} from "@/shared/lib/animations";

import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";

export const ItemTeamAnimated = createAnimationItemSlideBottom(ItemTeam);

export const ListTeamAnimated = createAnimationContainerImmediately(ListTeam);
