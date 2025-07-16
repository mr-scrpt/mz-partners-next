"use client";
import {
  createAnimationItemSelfDelayedAlternating,
  createAnimationItemSelfDelayed,
  createAnimationItemSimple,
  createAnimationContainerScrollToChildren,
} from "./domain/fabric";
import { AnimationConfig } from "./domain/type";

import {
  fadeInHalf,
  opacityVariants,
  slideInBottom,
  slideInLeft,
  slideInRight,
} from "./domain/variant";

export const createAnimationItemSlideAlternatingSelfDelayed =
  createAnimationItemSelfDelayedAlternating(slideInLeft, slideInRight);

export const createAnimationItemSlideBottom =
  createAnimationItemSimple(slideInBottom);

export const createAnimationItemSlideLeft =
  createAnimationItemSimple(slideInLeft);

export const createAnimationItemSlideRight =
  createAnimationItemSimple(slideInRight);

export const createAnimationItemSlideLeftSelfDelayed =
  createAnimationItemSelfDelayed(slideInLeft);

export const createAnimationItemSlideRightSelfDelayed =
  createAnimationItemSelfDelayed(slideInRight);

export const createAnimationItemSlideBottomSelfDelayed =
  createAnimationItemSelfDelayed(slideInBottom);

export const createAnimationItemOpacity =
  createAnimationItemSimple(opacityVariants);

export const createAnimationItemOpacitySelfDelayed =
  createAnimationItemSelfDelayed(opacityVariants);

export { createAnimationContainerImmediately } from "./domain/fabric";

const defaultScrollConfig: AnimationConfig = {
  startPixels: 20,
  endPixels: 250,
  springConfig: {
    stiffness: 80,
    damping: 25,
  },
};
export const createAnimationContainerScrollToChildrenFade =
  createAnimationContainerScrollToChildren(defaultScrollConfig);
// export const createAnimationContainerScrollToChildrenFade =
//   createAnimationContainerScrollToChildren([fadeInHalf]);
