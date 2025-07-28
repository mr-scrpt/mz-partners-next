import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { AnimationZone, TriggerStrategyHook } from "../domain/type";
import { calculateScrollUpdate } from "../../../lib/helpers";

export const useZoneScrollTrigger: TriggerStrategyHook = (options?: {
  startPixels?: number;
  endPixels?: number;
  springConfig?: object;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const progress = useMotionValue(0);
  // ✅ ИСПРАВЛЕНО: Инициализируем MotionValue правильным типом
  const direction = useMotionValue(AnimationZone.Hidden);

  useMotionValueEvent(scrollY, "change", () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const { progress: newProgress, zone } = calculateScrollUpdate(
      rect,
      vh,
      options || {},
    );

    progress.set(newProgress);
    direction.set(zone); // Теперь это корректно: мы кладем AnimationZone в MotionValue<AnimationZone>
  });

  const smoothProgress = useSpring(progress, options?.springConfig);

  return {
    ref,
    isActive: true,
    progress: smoothProgress,
    direction,
  };
};
