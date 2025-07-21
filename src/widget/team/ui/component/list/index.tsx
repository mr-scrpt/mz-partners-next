"use client";

import { createAlternatingSlideContainer } from "@/shared/lib/animations/factory/preset.factory";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";
import { withStaggerItem } from "@/shared/lib/animations/vm/hoc";

export const ListTeamAnimated = createAlternatingSlideContainer(ListTeam);

// export const ListTeamAnimated = createSlideBottomStaggerContainer(ListTeam);

export const ItemTeamAnimated = withStaggerItem(ItemTeam);
