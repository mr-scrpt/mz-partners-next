"use client";

import {
  createContainerItem,
  createContainerSlideAlternating,
  createContainerSlideSequenceSecondary,
  createContainerSlideSequenceTertiary,
} from "@/shared/lib/animations/factory/container.factory";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";
import {
  createContainerGroupItem,
  createContainerGroupSlideAlternating,
} from "@/shared/lib/animations/factory/group.factory";

export const ListTeamAnimated = createContainerGroupSlideAlternating(ListTeam);

export const ItemTeamAnimated = createContainerGroupItem(ItemTeam);
