import { slideInLeft, slideInRight } from "../../../preset/variant";
import { staggerVariantsAnimation } from "../animation/point.animation";
import { scrollShiftAnimation } from "../animation/scroll.animation";
import { useInViewTrigger } from "../trigger/inView.trigger";
import { useZoneScrollTrigger } from "../trigger/scrollProgress.trigger";
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
    triggerStrategy: useZoneScrollTrigger,
    animationStrategy: scrollShiftAnimation,

    // ✅ В triggerConfig передаем параметры для calculateScrollUpdate и useSpring
    triggerConfig: {
      startPixels: 20,
      endPixels: 250,
      springConfig: { stiffness: 80, damping: 25 },
    },

    // ✅ В animationConfig передаем параметры для useTransform
    animationConfig: {
      effects: {
        opacity: [0, 1],
        yEnter: [50, 0],
        yExit: [-50, 0],
      },
    },
  },
);

export const crateAnimationContainerItem = createAnimationContainerItemConfig();
