"use client";
import { useEffect, useId, useMemo, useRef } from "react";
import { useAnimationControls, useInView } from "framer-motion";
import { useStaggerGroup } from "./provider";

export function useStaggerGroupItem() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { register, getVariants, requestDelay } = useStaggerGroup();
  const id = useId();

  // Запоминаем индекс чтобы не вызывать register несколько раз
  const indexRef = useRef<number | null>(null);

  useEffect(() => {
    if (isInView) {
      if (indexRef.current === null) {
        indexRef.current = register(id);
      }
      const variants = getVariants(indexRef.current);
      const delay = requestDelay();
      controls.set(variants.hidden);
      controls.start("visible", { delay });
    }
  }, [isInView, id, register, getVariants, requestDelay, controls]);

  const variants = useMemo(() => {
    if (indexRef.current === null) {
      indexRef.current = register(id);
    }
    return getVariants(indexRef.current);
  }, [id, register, getVariants]);

  return {
    ref,
    initial: "hidden" as const,
    animate: controls,
    variants,
    // Правильная типизация helper функции
    injectRef: <P extends object>(props: P) =>
      ({ ...props, ref }) as P & { ref: React.RefObject<HTMLDivElement> },
  };
}
