"use client";
import { createAnimationItemSlideAlternatingSelfDelayed } from "@/shared/lib/animations";

import { ItemTeam } from "./item/item.team";

export const ItemTeamAnimated =
  createAnimationItemSlideAlternatingSelfDelayed(ItemTeam);
