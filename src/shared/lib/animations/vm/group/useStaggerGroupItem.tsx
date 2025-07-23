"use client";
import { useEffect, useId, useMemo, useRef } from "react";
import { useAnimationControls, useInView } from "framer-motion";
import { useStaggerGroup } from "./provider";

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

      controls.set(variants.hidden);

      controls.start("visible", { delay });
    }
  }, [isInView, id, register, getVariants, requestDelay, controls]);

  const variants = useMemo(() => {
    const index = register(id);
    return getVariants(index);
  }, [id, register, getVariants]);

  return {
    ref,
    initial: "hidden",
    animate: controls,
    variants,
  };
}
