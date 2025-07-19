"use client";
export {
  createAnimationItemSlideAlternatingSelfDelayed,
  createAnimationItemSlideBottom,
  createAnimationItemSlideBottomSelfDelayed,
  createScrollAnimatedScaleOpacityContainer,
  createScrollAnimatedShiftOpacityContainer,
  createAnimationItemSlideLeft,
  createAnimationItemSlideRight,
  createAnimationItemOpacity,
  createAnimationItemOpacitySelfDelayed,
} from "./domain/element.fabric";
export type { ElementConfig } from "./domain/type";
import {
  createAnimationItemSelfDelayed,
  createAnimationItemSimple,
} from "./domain/fabric";

import { opacityVariants, slideInLeft, slideInRight } from "./domain/variant";

// export const createAnimationItemSlideRight =
//   createAnimationItemSimple(slideInRight);
// createAnimationItemSimple(opacityVariants);

// export const createAnimationItemOpacitySelfDelayed =
//   createAnimationItemSelfDelayed(opacityVariants);

// export { createAnimationContainerImmediately } from "./domain/fabric";
