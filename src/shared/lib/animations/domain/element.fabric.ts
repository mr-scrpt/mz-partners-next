import {
  createAnimationItem,
  createAnimationToChildrenWrapper,
} from "./animation.fabric";
import {
  scrollScaleOpacityPrimaryConfig,
  scrollShiftOpacityPrimaryConfig,
} from "./config";
import {
  animationScrollShiftOpacityStrategy,
  animationScrollScaleOpacityStrategy,
  alternatingVariantStrategy,
  delayedVariantStrategy,
  simpleVariantStrategy,
} from "./strategies";
import {
  opacityVariants,
  slideInBottom,
  slideInLeft,
  slideInRight,
} from "./variant";

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
  config: [slideInBottom],
});

export const createAnimationItemSlideAlternatingSelfDelayed =
  createAnimationItem({
    strategy: simpleVariantStrategy,
    config: [slideInLeft, slideInRight],
  });

export const createAnimationItemSlideBottom = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: [slideInBottom],
});

export const createAnimationItemSlideLeft = createAnimationItem({
  strategy: simpleVariantStrategy,
  config: [slideInLeft],
});

export const createAnimationItemSlideRight = createAnimationItem({
  strategy: simpleVariantStrategy,
  config: [slideInRight],
});

export const createAnimationItemOpacity = createAnimationItem({
  strategy: simpleVariantStrategy,
  config: [opacityVariants],
});

export const createAnimationItemOpacitySelfDelayed = createAnimationItem({
  strategy: delayedVariantStrategy,
  config: [opacityVariants],
});
