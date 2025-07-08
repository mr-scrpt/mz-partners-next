"use client";
import {
  createAnimationContainerToChildren,
  createAnimationItemSelfDelayedAlternating,
  createAnimationItemSelfDelayed,
  createAnimationItemSimple,
} from "./domain/fabric";
import {
  fadeIn,
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

export const createAnimationContainerToChildrenFade =
  createAnimationContainerToChildren([fadeInHalf]);
