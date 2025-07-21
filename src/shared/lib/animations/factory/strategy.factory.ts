import { Variants } from "framer-motion";

export type AnimationSelectionStrategy = (index: number) => Variants;

export const createSimpleStrategy = (
  variants: Variants,
): AnimationSelectionStrategy => {
  return () => variants;
};

export const createAlternatingStrategy = (
  even: Variants,
  odd: Variants,
): AnimationSelectionStrategy => {
  return (index) => (index % 2 === 0 ? even : odd);
};

export const createSequenceStrategy = (
  variants: Variants[],
): AnimationSelectionStrategy => {
  return (index) => variants[index] || variants[variants.length - 1];
};

export const createTwoByTwoStrategy = (
  right: Variants,
  left: Variants,
): AnimationSelectionStrategy => {
  return (index) => (Math.floor(index / 2) % 2 === 0 ? right : left);
};
