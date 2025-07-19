"use client";
import { ComponentType } from "react";
import { Variants } from "framer-motion";
import {
  withAnimationContainerImmediately,
  withAnimationItemSelfDelayed,
  withAnimationItemSelfDelayedAlternating,
  withAnimationItemSimple,
} from "./hoc";

export function createAnimationItemSimple(variants: Variants) {
  return function <P extends object>(Component: ComponentType<P>) {
    return withAnimationItemSimple(Component, variants);
  };
}

export function createAnimationItemSelfDelayed(variants: Variants) {
  return function <P extends object>(Component: ComponentType<P>) {
    return withAnimationItemSelfDelayed(Component, variants);
  };
}

export function createAnimationItemSelfDelayedAlternating(
  even: Variants,
  odd: Variants,
) {
  return function <P extends { idx: number }>(Component: ComponentType<P>) {
    return withAnimationItemSelfDelayedAlternating(Component, even, odd);
  };
}

export function createAnimationContainerImmediately<P extends object>(
  Component: ComponentType<P>,
) {
  return withAnimationContainerImmediately(Component);
}

// export function createAnimationContainerScrollToChildren(
//   config: AnimationConfig = {},
// ) {
//   return function <P extends object>(
//     Component: ComponentType<P & { children: ReactNode }>,
//   ) {
//     return withAnimationContainerScrollToChildren(Component, config);
//   };
// }
