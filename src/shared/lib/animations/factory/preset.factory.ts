import { ComponentType } from "react";
import {
  scrollShiftOpacityPrimaryConfig,
  scrollScaleOpacityPrimaryConfig,
} from "../preset/config";
import {
  slideInBottom,
  slideInLeft,
  slideInRight,
  slideInTop, // Добавлен импорт для комплексной анимации
  fadeIn, // Добавлен импорт для fade-анимации
  opacityVariants,
} from "../preset/variant";
import {
  cyclicalStrategyCreator,
  sequentialStrategyCreator,
} from "../strategy/strategy.animation";
import {
  animationScrollShiftOpacityStrategy,
  animationScrollScaleOpacityStrategy,
} from "../strategy/strategy.scroll";
import {
  alternatingVariantStrategy, // Используем более подходящую стратегию
  delayedVariantStrategy,
  simpleVariantStrategy,
} from "../strategy/strategy.view";
import { withStaggerContainer } from "../vm/hoc";
import {
  createAnimationToChildrenWrapper,
  createAnimationItem,
  createStaggerContainer, // Импортируем новую фабрику
} from "./builder.factory";

/**
 * Animation children wrapper (Scroll-based)
 */
export const createScrollAnimatedShiftOpacityContainer =
  createAnimationToChildrenWrapper({
    strategy: animationScrollShiftOpacityStrategy,
    config: scrollShiftOpacityPrimaryConfig,
  });

export const createScrollAnimatedScaleOpacityContainer =
  createAnimationToChildrenWrapper({
    strategy: animationScrollScaleOpacityStrategy,
    config: scrollScaleOpacityPrimaryConfig,
  });

/**
 * Animation item (View-based)
 */
export const createAnimationItemSlideBottomSelfDelayed = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: { variants: slideInBottom },
});

// ✅ Заменена стратегия на более корректную
export const createAnimationItemSlideAlternatingSelfDelayed =
  createAnimationItem({
    strategy: alternatingVariantStrategy,
    config: { variants: slideInLeft, oddVariants: slideInRight },
  });

export const createAnimationItemOpacitySelfDelayed = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: { variants: opacityVariants },
});

// Пример 1: Фабрика для альтернативной последовательной анимации
export const createAlternatingSlideContainer = (
  component: ComponentType<any>,
) =>
  withStaggerContainer(component, {
    animationStrategy: cyclicalStrategyCreator({
      variantsList: [slideInLeft, slideInRight],
    }),
    delayMultiplier: 0.15,
  });

// Пример 2: Фабрика для сложной последовательной анимации
export const createComplexSequenceContainer = (component: ComponentType<any>) =>
  withStaggerContainer(component, {
    animationStrategy: sequentialStrategyCreator({
      variantsList: [slideInLeft, slideInTop, slideInRight, slideInBottom],
    }),
    delayMultiplier: 0.1,
  });
// /**
//  * ✨ Stagger Animation Presets
//  */
// export const createSlideBottomStaggerContainer = createStaggerContainer({
//   variantsList: [slideInBottom],
//   delayMultiplier: 0.1,
//   resetTimeout: 200,
// });
//
// export const createAlternatingSlideStaggerContainer = createStaggerContainer({
//   variantsList: [slideInLeft, slideInRight],
//   delayMultiplier: 0.15,
//   resetTimeout: 300,
// });
//
// export const createComplexSequenceStaggerContainer = createStaggerContainer({
//   variantsList: [slideInLeft, slideInTop, slideInRight, slideInBottom],
//   delayMultiplier: 0.1,
//   resetTimeout: 400,
// });
//
// export const createFadeInStaggerContainer = createStaggerContainer({
//   variantsList: [fadeIn],
//   delayMultiplier: 0.08,
//   resetTimeout: 200,
// });
