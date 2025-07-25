"use client";
import { useCallback, useEffect, useId, useMemo, useRef } from "react";
import { useAnimationControls, useInView } from "framer-motion";
import { useStaggerGroup } from "./provider";

export function useStaggerGroupItem() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { register, getVariants, requestDelay } = useStaggerGroup();
  const id = useId();

  const stableIndex = useMemo(() => register(id), [id, register]);

  useEffect(() => {
    if (isInView) {
      const variants = getVariants(stableIndex);
      const delay = requestDelay();

      const variantTransition = (variants.visible as any)?.transition || {};
      const finalTransition = { ...variantTransition, delay };

      controls.set(variants.hidden);
      controls.start(variants.visible, finalTransition);
    }
  }, [isInView, stableIndex, getVariants, requestDelay, controls]);

  const variants = useMemo(
    () => getVariants(stableIndex),
    [stableIndex, getVariants],
  );

  const injectRef = useCallback(
    <P extends object>(props: P) =>
      ({ ...props, ref }) as P & { ref: React.RefObject<HTMLDivElement> },
    [ref],
  );

  return {
    ref,

    initial: "hidden" as const,
    animate: controls,
    variants,

    injectRef,
  };
}
