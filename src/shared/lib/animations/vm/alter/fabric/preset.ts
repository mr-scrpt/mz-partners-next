import { slideInLeft, slideInRight } from "../../../preset/variant";
import { staggerVariantsAnimation } from "../animation/point.animation";
import { scrollShiftAnimation } from "../animation/scroll.animation";
import { useInViewTrigger } from "../trigger/inView.trigger";
import {
  edgeBasedScrollAnimation,
  useSimpleScrollTrigger,
  zoneBasedScrollAnimation,
} from "../trigger/scrollProgress.trigger";
// import { useZoneScrollTrigger } from "../trigger/scrollProgress.trigger";
import {
  createAnimatedContainerConfig,
  createAnimationContainerItemConfig,
} from "./builder";

export const createListTeamAnimatedContainer = createAnimatedContainerConfig({
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

export const createPageLayoutAnimationContainer = createAnimatedContainerConfig(
  {
    triggerStrategy: useSimpleScrollTrigger,
    // Стратегия, которая содержит всю вашу логику
    animationStrategy: zoneBasedScrollAnimation,

    // Весь конфиг передается напрямую в хук useZoneAnimation
    animationConfig: {
      startPixels: 20,
      endPixels: 250,
      springConfig: { stiffness: 80, damping: 25, mass: 0.5 },
      effects: {
        opacity: [0, 1],
        yEnter: [50, 0], // Появление: снизу вверх (от 50px до 0)
        yExit: [0, -50], // Исчезновение: вверх (от 0 до -50px)
      },
    },
  },
);

export const createScrollAnimatedScaleOpacityContainer =
  createAnimatedContainerConfig({
    triggerStrategy: useSimpleScrollTrigger,
    animationStrategy: edgeBasedScrollAnimation,
    animationConfig: {
      startPixels: 50,
      endPixels: 350,
      springConfig: { stiffness: 100, damping: 20 },
      effects: {
        opacity: [0.5, 1],
        scale: [0.9, 1],
      },
    },
  });

export const createScrollAnimatedShiftOpacityContainer =
  createAnimatedContainerConfig({
    triggerStrategy: useSimpleScrollTrigger,
    animationStrategy: edgeBasedScrollAnimation,
    animationConfig: {
      startPixels: 20,
      endPixels: 250,
      springConfig: { stiffness: 80, damping: 25 },
      effects: {
        opacity: [0, 1],
        yEnter: [50, 0],
        yExit: [0, -50], // Исправлено для правильного направления
      },
    },
  });

export const crateAnimationContainerItem = createAnimationContainerItemConfig();
