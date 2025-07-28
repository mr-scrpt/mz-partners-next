import { useInView } from "framer-motion";
import { useRef } from "react";
import { TriggerStrategyHook } from "../domain/type";

export const useInViewTrigger: TriggerStrategyHook = (
  options = { once: true, amount: 0.1 },
) => {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useInView(ref, options);

  return {
    ref: ref,
    isActive,
    progress: null,
  };
};
