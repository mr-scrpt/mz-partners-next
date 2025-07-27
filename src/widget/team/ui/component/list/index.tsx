"use client";

import {
  createContainerGroupItemRef,
  createContainerGroupSlideAlternating,
} from "@/shared/lib/animations";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";
import { withAnimatedItem } from "@/shared/lib/animations/vm/alter";
import {
  ListTeamAnimatedContainer,
  PageLayoutAnimatedPrimary,
} from "@/shared/lib/animations/vm/alter/strategy";

// export const ListTeamAnimated = createContainerGroupSlideAlternating(ListTeam);
//
// export const ItemTeamAnimated = createContainerGroupItemRef(ItemTeam);

export const ListTeamAnimated = ListTeamAnimatedContainer(ListTeam);
// Оборачиваем дочерний элемент (например, универсальный SectionWrapper)
export const ItemTeamAnimated = withAnimatedItem(ItemTeam);
