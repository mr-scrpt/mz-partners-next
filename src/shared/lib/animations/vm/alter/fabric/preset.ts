import { slideInLeft, slideInRight } from "../../../preset/variant";
import { staggerVariantsAnimation } from "../animation/point.animation";
import { useInViewTrigger } from "../trigger/inView.trigger";
import { createAnimatedContainer } from "./builder";

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
