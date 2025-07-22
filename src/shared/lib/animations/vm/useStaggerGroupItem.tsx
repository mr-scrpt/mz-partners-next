"use client";
import { useEffect, useId, useRef } from "react";
import { useAnimationControls, useInView } from "framer-motion";
import { useStaggerGroup } from "./group.provider";

export function useStaggerGroupItem() {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { register, getVariants, requestDelay } = useStaggerGroup();
  const id = useId();

  useEffect(() => {
    if (isInView) {
      const index = register(id);
      const variants = getVariants(index);
      const delay = requestDelay();

      const variantTransition = (variants.visible as any)?.transition || {};

      const finalTransition = {
        ...variantTransition,
        delay,
      };

      controls.set(variants.hidden);

      controls.start(variants.visible, finalTransition);
    }
  }, [isInView, id, register, getVariants, requestDelay, controls]);

  return {
    ref,
    initial: { opacity: 0 },
    animate: controls,
  };
}
