import {
  scrollShiftOpacityPrimaryConfig,
  scrollScaleOpacityPrimaryConfig,
} from "../../preset/config";
import {
  animationScrollShiftOpacityStrategy,
  animationScrollScaleOpacityStrategy,
} from "../../strategy/strategy.scroll";
import { createAnimationToChildrenWrapper } from "./builder.factory";

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
