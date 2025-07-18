import { createAnimationToChildrenWrapper } from "./animation.fabric";
import {
  scrollScaleOpacityPrimaryConfig,
  scrollShiftOpacityPrimaryConfig,
} from "./config";
import {
  animationScrollShiftOpacityStrategy,
  animationScrollScaleOpacityStrategy,
} from "./strategies";

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
