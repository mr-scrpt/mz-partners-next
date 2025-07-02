import {
  withAlternatingAnimation,
  withStaggerContainer,
} from "@/shared/lib/animations/domain/hoc";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/shared/lib/animations/domain/variant";
import { Item } from "./item";
import { List } from "./list";

export const AnimatedItem = withAlternatingAnimation(
  Item,
  slideInLeft,
  slideInRight,
);

export const AnimatedList = withStaggerContainer(List, staggerContainer);
