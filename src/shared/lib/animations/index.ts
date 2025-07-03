"use client";
import {
  createAnimationContainer,
  createAnimationItemAlternating,
} from "./domain/fabric";
import {
  opacityVariants,
  slideInLeft,
  slideInRight,
  staggerContainerDelayed,
  staggerContainerImmediately,
} from "./domain/variant";

export const createAnimationItemSlideAlternating =
  createAnimationItemAlternating(slideInLeft, slideInRight);

export const createAnimationItemOpacityAlternating =
  createAnimationItemAlternating(opacityVariants, opacityVariants);

export const createAnimationContainerDelayed = createAnimationContainer(
  staggerContainerDelayed,
);

export const createAnimationContainerImmediately = createAnimationContainer(
  staggerContainerImmediately,
);
