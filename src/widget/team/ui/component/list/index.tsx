"use client";

import { createStaggerItem } from "@/shared/lib/animations/factory/builder.factory";
import { createAlternatingSlideContainer } from "@/shared/lib/animations/factory/preset.factory";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";
export const ListTeamAnimated = createAlternatingSlideContainer(ListTeam);

// export const ItemTeamAnimated =
//   createAnimationItemSlideAlternatingSelfDelayed(ItemTeam);
export const ItemTeamAnimated = createStaggerItem(ItemTeam);
