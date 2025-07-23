"use client";
import { useEffect, useId, useRef } from "react";
import { useAnimationControls, useInView } from "framer-motion";
import { useStaggerList } from "./provider";

export function useStaggerListItem(idx: number) {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { getVariants, requestDelay } = useStaggerList();

  if (typeof idx !== "number") {
    throw new Error(
      "Component wrapped with withStaggerItem must receive a unique 'idx' prop.",
    );
  }

  const variants = getVariants(idx);

  useEffect(() => {
    if (isInView) {
      const delay = requestDelay();

      controls.start("visible", { delay });
    }
  }, [isInView, controls, requestDelay]);

  return {
    ref,
    // initial: { opacity: 0 },
    initial: "hidden",
    animate: controls,
    variants,
  };
}
