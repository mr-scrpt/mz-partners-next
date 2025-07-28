"use client";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { AnimationStrategy } from "../domain/type";
import { useRequestDelay } from "../../../lib/useRequestDelay";

export const staggerVariantsAnimation: AnimationStrategy = ({
  triggerState,
  index,
  animationConfig,
}) => {
  const { variantsList, delayMultiplier = 0.1 } = animationConfig;
  const { isActive } = triggerState;

  const controls = useAnimationControls();
  const variants = variantsList[index % variantsList.length] || {};

  const { requestDelay } = useRequestDelay({
    delayMultiplier,
  });

  useEffect(() => {
    if (isActive) {
      const delay = requestDelay();
      const variantTransition = variants.visible?.transition || {};

      const finalTransition = { ...variantTransition, delay };

      controls.set(variants.hidden);

      controls.start(variants.visible, finalTransition);
    }
  }, [isActive, controls, index, delayMultiplier, variants]);

  return {
    variants,
    initial: "hidden",
    animate: controls,
  };
};
