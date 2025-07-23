"use client";

import { useState, useEffect, RefObject } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
  useInView,
  UseInViewOptions,
} from "framer-motion";
import {
  AnimationConfig,
  AnimationDirection,
  AnimationZone,
} from "../../domain/type";
import { calculateScrollUpdate } from "../../lib/helpers";

// export function useScrollAnimation(
//   ref: RefObject<HTMLElement | null>,
//   config: AnimationConfig = {},
// ) {
//   const { springConfig = { stiffness: 100, damping: 30, mass: 1 } } = config;
//
//   const progress = useMotionValue(0);
//   const smoothProgress = useSpring(progress, springConfig);
//   const { scrollY } = useScroll();
//
//   const [direction, setDirection] = useState<AnimationDirection>(
//     AnimationDirection.Enter,
//   );
//
//   useEffect(() => {
//     const handleUpdate = () => {
//       if (!ref.current) return;
//
//       const rect = ref.current.getBoundingClientRect();
//       const vh = window.innerHeight;
//
//       const { progress: newProgress, zone } = calculateScrollUpdate(
//         rect,
//         vh,
//         config,
//       );
//
//       progress.set(newProgress);
//
//       if (zone === AnimationZone.Enter || zone === AnimationZone.Exit) {
//         setDirection(zone as unknown as AnimationDirection);
//       }
//     };
//
//     const timeoutId = setTimeout(handleUpdate, 16);
//     const unsubscribeScroll = scrollY.on("change", handleUpdate);
//     window.addEventListener("resize", handleUpdate);
//
//     return () => {
//       clearTimeout(timeoutId);
//       unsubscribeScroll();
//       window.removeEventListener("resize", handleUpdate);
//     };
//   }, [ref, config, scrollY, progress]);
//
//   const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
//   const yEnter = useTransform(smoothProgress, [0, 1], [50, 0]);
//   const yExit = useTransform(smoothProgress, [0, 1], [-50, 0]);
//
//   const y = direction === AnimationDirection.Exit ? yExit : yEnter;
//
//   return { opacity, y };
// }

export function useScaleAnimation(
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

  const opacity = useTransform(smoothProgress, [0, 1], [0.5, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

  return { opacity, scale };
}

export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  config: AnimationConfig = {},
): { progress: MotionValue<number>; direction: AnimationDirection } {
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

  return { progress: smoothProgress, direction };
}

export function useInViewAnimation(
  ref: RefObject<HTMLElement | null>,
  options: UseInViewOptions = { once: true, amount: 0.2 },
) {
  const isInView = useInView(ref, options);
  return isInView ? "visible" : "hidden";
}
