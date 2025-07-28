"use client";

import {
  createContainerGroupItemRef,
  createContainerGroupSlideAlternating,
} from "@/shared/lib/animations";
import { ItemTeam } from "./item/item.team";
import { ListTeam } from "./list.team";
import { createListTeamAnimatedContainer } from "@/shared/lib/animations/vm/alter/fabric/preset";
import { withAnimatedItem } from "@/shared/lib/animations/vm/alter/vm/hoc";

// export const ListTeamAnimated = createContainerGroupSlideAlternating(ListTeam);
//
// export const ItemTeamAnimated = createContainerGroupItemRef(ItemTeam);

export const ListTeamAnimated = createListTeamAnimatedContainer(ListTeam);
// Оборачиваем дочерний элемент (например, универсальный SectionWrapper)
export const ItemTeamAnimated = withAnimatedItem(ItemTeam);
