import {
  createAnimationContainerDelayed,
  createAnimationItemSlideAlternating,
} from "@/shared/lib/animations";

import { ListTeam } from "./list.team";
import { ItemTeam } from "./item/item.team";

export const ItemTeamAnimated = createAnimationItemSlideAlternating(ItemTeam);
export const ListTeamAnimated = createAnimationContainerDelayed(ListTeam);
