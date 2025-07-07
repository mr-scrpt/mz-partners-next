"use client";
import {
  createAnimationContainer,
  createAnimationItemAlternating,
  createAnimationItemSelfDelayed,
  createAnimationItemSimple,
} from "./domain/fabric";
import {
  opacityVariants,
  slideInBottom,
  slideInLeft,
  slideInRight,
} from "./domain/variant";

export const createAnimationItemSlideAlternating =
  createAnimationItemAlternating(slideInLeft, slideInRight);

export const createAnimationItemSlideBottom =
  createAnimationItemSimple(slideInBottom);

export const createAnimationItemSlideLeft =
  createAnimationItemSimple(slideInLeft);

export const createAnimationItemSlideRight =
  createAnimationItemSimple(slideInRight);

export const createAnimationItemOpacity =
  createAnimationItemSimple(opacityVariants);

export const createAnimationItemOpacitySelfDelayed =
  createAnimationItemSelfDelayed(opacityVariants);

export const createAnimationContainerDelayed = createAnimationContainer();
// staggerContainerDelayed,

export const createAnimationContainerImmediately = createAnimationContainer();
// staggerContainerImmediately,
