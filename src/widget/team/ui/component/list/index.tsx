import {
  createAnimationContainerDelayed,
  createAnimationItemSlideAlternating,
} from "@/shared/lib/animations";
import { Item } from "./item";
import { List } from "./list";

export { Item };
export { List };

export const AnimatedItem = createAnimationItemSlideAlternating(Item);
export const AnimatedList = createAnimationContainerDelayed(List);
