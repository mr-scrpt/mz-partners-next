import {
  useAnimationControls,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import {
  AnimationStrategy,
  ImperativeVariantAnimationOutput,
  TriggerStrategyHook,
} from "./type";
import { createAnimatedContainer } from ".";
import { slideInLeft, slideInRight } from "../../preset/variant";

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

export const staggerVariantsAnimation: AnimationStrategy = ({
  triggerState,
  index,
  animationConfig,
}): ImperativeVariantAnimationOutput => {
  const { variantsList, delayMultiplier = 0.1 } = animationConfig;
  const { isActive } = triggerState;

  const controls = useAnimationControls(); // Используем новый хук
  const variants = variantsList[index % variantsList.length] || {};

  useEffect(() => {
    if (isActive) {
      controls.start("visible", { delay: index * delayMultiplier });
    }
  }, [isActive, controls, index, delayMultiplier]);

  return {
    type: "imperative",
    variants,
    initial: "hidden",
    animate: controls,
  };
};

export const useScrollProgressTrigger: TriggerStrategyHook = (options) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options?.offset || ["start end", "end start"], // Пример конфига
  });

  return {
    ref,
    isActive: true, // Всегда активна, т.к. управляется скроллом
    progress: scrollYProgress,
  };
};
export const scrollTransformAnimation: AnimationStrategy = ({
  triggerState,
  animationConfig,
}) => {
  const { progress } = triggerState;
  const {
    opacity = [0, 1],
    y = [50, 0],
    scale = [1, 1],
  } = animationConfig.effects;

  // Используем useTransform для привязки стилей к прогрессу скролла
  const style = {
    opacity: useTransform(progress!, [0, 1], opacity),
    y: useTransform(progress!, [0, 1], y),
    scale: useTransform(progress!, [0, 1], scale),
  };

  return { type: "style", style };
};

export const PageLayoutAnimatedPrimary = createAnimatedContainer({
  triggerStrategy: useScrollProgressTrigger,
  animationStrategy: scrollTransformAnimation,
  triggerConfig: {
    offset: ["start end", "end start"], // Настраиваем оффсеты для useScroll
  },
  animationConfig: {
    startPixels: 20,
    endPixels: 250,
    springConfig: { stiffness: 80, damping: 25 },
    effects: {
      opacity: [0, 1],
      yEnter: [50, 0],
      yExit: [-50, 0],
    },

    // // Конфигурация для useTransform
    // effects: {
    //   opacity: [0, 1],
    //   y: [50, 0],
    // },
  },
});

export const ListTeamAnimatedContainer = createAnimatedContainer({
  triggerStrategy: useInViewTrigger,
  animationStrategy: staggerVariantsAnimation,
  // Конфиг для триггера
  triggerConfig: { once: true, amount: 0.1 },
  // Конфиг для анимации
  animationConfig: {
    variantsList: [slideInLeft, slideInRight],
    delayMultiplier: 0.25,
  },
});
