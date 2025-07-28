import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  AnimationStrategy,
  ImperativeVariantAnimationOutput,
} from "../domain/type";

export const staggerVariantsAnimation: AnimationStrategy = ({
  triggerState,
  index,
  animationConfig,
}): ImperativeVariantAnimationOutput => {
  const { variantsList, delayMultiplier = 0.1 } = animationConfig;
  const { isActive } = triggerState;

  const controls = useAnimationControls(); // Используем новый хук
  const variants = variantsList[index % variantsList.length] || {};

  useEffect(() => {
    if (isActive) {
      controls.start("visible", { delay: index * delayMultiplier });
    }
  }, [isActive, controls, index, delayMultiplier]);

  return {
    type: "imperative",
    variants,
    initial: "hidden",
    animate: controls,
  };
};
