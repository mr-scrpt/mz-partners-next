"use client";

import { useState, useEffect, RefObject } from "react";
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
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

/**
 * Новый хук для анимации с эффектом scale.
 */
export function useScaleAnimation(
  ref: RefObject<HTMLElement | null>,
  config: AnimationConfig = {},
) {
  // Вся логика вычисления прогресса остается АБСОЛЮТНО ТАКОЙ ЖЕ.
  // Мы просто переиспользуем все наши предыдущие наработки.
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

  // ✅ ЕДИНСТВЕННОЕ ИЗМЕНЕНИЕ ЗДЕСЬ:
  // Мы трансформируем прогресс не в `y`, а в `scale`.
  const opacity = useTransform(smoothProgress, [0, 1], [0.5, 1]); // Сделаем появление от 50%
  const scale = useTransform(smoothProgress, [0, 1], [0.9, 1]); // Увеличение от 90% до 100%

  // Возвращаем opacity и новый `scale`
  return { opacity, scale };
}

/**
 * Вычисляет прогресс анимации (от 0 до 1) на основе положения элемента на экране.
 * @param ref - Ref на анимируемый DOM-элемент.
 * @param config - Конфигурация анимации.
 * @returns Готовый к использованию MotionValue с плавным прогрессом.
 */
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
