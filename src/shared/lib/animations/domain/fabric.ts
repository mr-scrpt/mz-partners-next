import { ComponentType } from "react";
import { Variants } from "framer-motion";
import {
  withAnimationContainer,
  withAnimationItemAlternating,
  withAnimationItemSimple,
} from "./hoc";

export function createAnimationItemSimple(variants: Variants) {
  return function <P extends object>(Component: ComponentType<P>) {
    return withAnimationItemSimple(Component, variants);
  };
}

export function createAnimationItemAlternating(even: Variants, odd: Variants) {
  return function <P extends { idx: number }>(Component: ComponentType<P>) {
    return withAnimationItemAlternating(Component, even, odd);
  };
}

export function createAnimationContainer(variants: Variants) {
  return function <P extends object>(Component: ComponentType<P>) {
    return withAnimationContainer(Component, variants);
  };
}
