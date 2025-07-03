"use client";
import {
  createAnimationContainer,
  createAnimationItemAlternating,
  createAnimationItemSimple,
} from "./domain/fabric";
import {
  opacityVariants,
  slideInBottom,
  slideInLeft,
  slideInRight,
  staggerContainerDelayed,
  staggerContainerImmediately,
} from "./domain/variant";

export const createAnimationItemSlideAlternating =
  createAnimationItemAlternating(slideInLeft, slideInRight);

export const createAnimationItemSlideBottom =
  createAnimationItemSimple(slideInBottom);

export const createAnimationItemOpacity =
  createAnimationItemSimple(opacityVariants);

export const createAnimationContainerDelayed = createAnimationContainer(
  staggerContainerDelayed,
);

export const createAnimationContainerImmediately = createAnimationContainer(
  staggerContainerImmediately,
);
