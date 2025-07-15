"use client";
import {
  createAnimationContainerImmediately,
  createAnimationItemSlideAlternatingSelfDelayed,
} from "@/shared/lib/animations";

import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";

export const ItemTeamAnimated =
  createAnimationItemSlideAlternatingSelfDelayed(ItemTeam);

export const ListTeamAnimated = createAnimationContainerImmediately(ListTeam);
