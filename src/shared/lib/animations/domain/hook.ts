"use client";

import { useState, useEffect, RefObject } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { calculateScrollUpdate } from "./lib";
import { AnimationConfig, AnimationDirection, AnimationZone } from "./type";

export function useScrollAnimation(
  ref: RefObject<HTMLElement | null>,
  config: AnimationConfig = {},
) {
  const { springConfig = { stiffness: 100, damping: 30, mass: 1 } } = config;

  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, springConfig);
  const { scrollY } = useScroll();

  const [direction, setDirection] = useState<AnimationDirection>(
    AnimationDirection.Enter,
  );

  useEffect(() => {
    const handleUpdate = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const { progress: newProgress, zone } = calculateScrollUpdate(
        rect,
        vh,
        config,
      );

      progress.set(newProgress);

      if (zone === AnimationZone.Enter || zone === AnimationZone.Exit) {
        setDirection(zone as unknown as AnimationDirection);
      }
    };

    const timeoutId = setTimeout(handleUpdate, 16);
    const unsubscribeScroll = scrollY.on("change", handleUpdate);
    window.addEventListener("resize", handleUpdate);

    return () => {
      clearTimeout(timeoutId);
      unsubscribeScroll();
      window.removeEventListener("resize", handleUpdate);
    };
  }, [ref, config, scrollY, progress]);

  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const yEnter = useTransform(smoothProgress, [0, 1], [50, 0]);
  const yExit = useTransform(smoothProgress, [0, 1], [-50, 0]);

  const y = direction === AnimationDirection.Exit ? yExit : yEnter;

  return { opacity, y };
}
