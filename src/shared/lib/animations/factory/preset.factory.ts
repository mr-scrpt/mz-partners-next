import {
  scrollShiftOpacityPrimaryConfig,
  scrollScaleOpacityPrimaryConfig,
} from "../preset/config";
import {
  slideInBottom,
  slideInLeft,
  slideInRight,
  slideInTop,
  opacityVariants,
} from "../preset/variant";
import {
  cyclicalStrategyCreator,
  sequentialStrategyCreator,
  steppedStrategyCreator,
} from "../strategy/strategy.animation";
import {
  animationScrollShiftOpacityStrategy,
  animationScrollScaleOpacityStrategy,
} from "../strategy/strategy.scroll";
import {
  alternatingVariantStrategy,
  delayedVariantStrategy,
} from "../strategy/strategy.view";
import {
  createAnimationToChildrenWrapper,
  createAnimationItem,
  createStaggerContainer,
  createStaggerItem,
} from "./builder.factory";

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

export const createAnimationItemSlideBottomSelfDelayed = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: { variants: slideInBottom },
});

export const createAnimationItemSlideAlternatingSelfDelayed =
  createAnimationItem({
    strategy: alternatingVariantStrategy,
    config: { variants: slideInLeft, oddVariants: slideInRight },
  });

export const createAnimationItemOpacitySelfDelayed = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: { variants: opacityVariants },
});

export const createAlternatingSlideContainer = createStaggerContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [slideInLeft, slideInRight],
  }),
  delayMultiplier: 0.15,
});

export const createComplexSequenceContainer = createStaggerContainer({
  animationStrategy: sequentialStrategyCreator({
    variantsList: [slideInLeft, slideInTop, slideInRight, slideInBottom],
  }),
  delayMultiplier: 0.1,
});

export const createFourWaySlideContainer = createStaggerContainer({
  animationStrategy: sequentialStrategyCreator({
    variantsList: [slideInLeft, slideInTop, slideInBottom, slideInRight],
  }),

  delayMultiplier: 0.2,
});

export const createFourStapSlideContainer = createStaggerContainer({
  animationStrategy: steppedStrategyCreator({
    variantsList: [slideInLeft, slideInTop, slideInBottom, slideInRight],
    step: 2,
  }),

  delayMultiplier: 0.5,
});

export const createContainerItem = createStaggerItem();
