"use client";

import {
  createContainerItem,
  createContainerSlideSequenceSecondary,
} from "@/shared/lib/animations/factory/container.factory";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";

export const ListTeamAnimated = createContainerSlideSequenceSecondary(ListTeam);

export const ItemTeamAnimated = createContainerItem(ItemTeam);
