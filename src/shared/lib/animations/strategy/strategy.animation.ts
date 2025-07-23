import { Variants } from "framer-motion";
import { AnimationStrategyCreator } from "../domain/type";

export const cyclicalStrategyCreator: AnimationStrategyCreator =
  ({ variantsList }) =>
  (index: number): Variants => {
    if (variantsList.length === 0) return {};
    return variantsList[index % variantsList.length];
  };

export const sequentialStrategyCreator: AnimationStrategyCreator =
  ({ variantsList }) =>
  (index: number): Variants => {
    if (variantsList.length === 0) return {};

    return variantsList[index] || variantsList[variantsList.length - 1];
  };

export const steppedStrategyCreator: AnimationStrategyCreator = ({
  variantsList,
  step = 1,
}) => {
  if (variantsList.length === 0 || step < 1) {
    return () => ({});
  }

  return (index: number): Variants => {
    const animationIndex = Math.floor(index / step) % variantsList.length;
    return variantsList[animationIndex];
  };
};
