import {
  scrollShiftOpacityPrimaryConfig,
  scrollScaleOpacityPrimaryConfig,
} from "../preset/config";
import {
  slideInBottom,
  slideInLeft,
  slideInRight,
  opacityVariants,
  fadeIn,
  slideInTop,
} from "../preset/variant";
import {
  animationScrollShiftOpacityStrategy,
  animationScrollScaleOpacityStrategy,
} from "../strategy/strategy.scroll";
import {
  delayedVariantStrategy,
  simpleVariantStrategy,
} from "../strategy/strategy.view";
import {
  createAnimationToChildrenWrapper,
  createAnimationItem,
  createAnimationStaggerContainer,
  createStaggerItem,
  createStaggerContainer,
} from "./builder.factory";
import {
  createSimpleStrategy,
  createAlternatingStrategy,
  createSequenceStrategy,
  createTwoByTwoStrategy,
} from "./strategy.factory";

/**
 * Animation children wrapper
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
 * Animation item
 */

export const createAnimationItemSlideBottomSelfDelayed = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: { variants: slideInBottom },
});

export const createAnimationItemSlideAlternatingSelfDelayed =
  createAnimationItem({
    strategy: simpleVariantStrategy,
    config: { variants: slideInLeft, oddVariants: slideInRight },
  });

export const createAnimationItemSlideBottom = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: { variants: slideInBottom },
});

export const createAnimationItemSlideLeft = createAnimationItem({
  strategy: simpleVariantStrategy,
  config: { variants: slideInLeft },
});

export const createAnimationItemSlideRight = createAnimationItem({
  strategy: simpleVariantStrategy,
  config: { variants: slideInRight },
});

export const createAnimationItemOpacity = createAnimationItem({
  strategy: simpleVariantStrategy,
  config: { variants: opacityVariants },
});

export const createAnimationItemOpacitySelfDelayed = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: { variants: opacityVariants },
});

/**
 * Stagger container
 */

// export const createStaggerContainer = createAnimationStaggerContainer();
//
// export const createStaggerItemSlideBottom = createStaggerItem({
//   variants: slideInBottom,
// });
//
// export const createStaggerItemFadeIn = createStaggerItem({
//   variants: fadeIn,
// });

/**
 * Stagger v2
 */

export const createAlternatingSlideContainer = createStaggerContainer(
  createAlternatingStrategy(slideInLeft, slideInRight),
);
// export const createStaggerContainerSlideBottom = createStaggerContainer(
//   createSimpleStrategy(slideInBottom),
// );
//
// export const createAlternatingSlideContainer = createStaggerContainer(
//   createAlternatingStrategy(slideInLeft, slideInRight),
// );
//
// // Последовательная анимация: справа, сверху, слева, снизу
// export const createStaggerContainerSeq4Sides = createStaggerContainer(
//   createSequenceStrategy([
//     slideInRight,
//     slideInTop,
//     slideInLeft,
//     slideInBottom,
//   ]),
// );
//
// export const createStaggerContainerTwoByTwo = createStaggerContainer(
//   createTwoByTwoStrategy(slideInRight, slideInLeft),
// );
