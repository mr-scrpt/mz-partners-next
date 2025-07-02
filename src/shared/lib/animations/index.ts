import {
  createAnimationContainer,
  createAnimationItemAlternating,
} from "./domain/fabric";
import {
  slideInLeft,
  slideInRight,
  staggerContainerDelayed,
  staggerContainerImmediately,
} from "./domain/variant";

export const createAnimationItemSlideAlternating =
  createAnimationItemAlternating(slideInLeft, slideInRight);

export const createAnimationContainerDelayed = createAnimationContainer(
  staggerContainerDelayed,
);

export const createAnimationContainerImmediately = createAnimationContainer(
  staggerContainerImmediately,
);
