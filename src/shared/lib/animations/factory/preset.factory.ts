import {
  scrollScaleOpacityPrimaryConfig,
  scrollShiftOpacityPrimaryConfig,
} from "../preset/config";
import {
  opacityVariants,
  slideInBottom,
  slideInLeft,
  slideInRight,
} from "../preset/variant";
import {
  animationScrollScaleOpacityStrategy,
  animationScrollShiftOpacityStrategy,
} from "../strategy/strategy.scroll";
import {
  alternatingVariantStrategy,
  delayedVariantStrategy,
} from "../strategy/strategy.view";
import {
  createAnimationItem,
  createAnimationToChildrenWrapper,
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
