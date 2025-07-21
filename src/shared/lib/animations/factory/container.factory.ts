import {
  slideInLeft,
  slideInRight,
  slideInTop,
  slideInBottom,
} from "../preset/variant";
import {
  cyclicalStrategyCreator,
  sequentialStrategyCreator,
  steppedStrategyCreator,
} from "../strategy/strategy.animation";
import { createStaggerContainer, createStaggerItem } from "./builder.factory";

export const createContainerSlideAlternating = createStaggerContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [slideInLeft, slideInRight],
  }),
  delayMultiplier: 0.15,
});

export const createContainerSlideSequencePrimary = createStaggerContainer({
  animationStrategy: sequentialStrategyCreator({
    variantsList: [slideInLeft, slideInTop, slideInRight, slideInBottom],
  }),
  delayMultiplier: 0.1,
});

export const createContainerSlideSequenceSecondary = createStaggerContainer({
  animationStrategy: sequentialStrategyCreator({
    variantsList: [slideInLeft, slideInTop, slideInBottom, slideInRight],
  }),

  delayMultiplier: 0.2,
});

export const createContainerSlideSequenceTertiary = createStaggerContainer({
  animationStrategy: steppedStrategyCreator({
    variantsList: [slideInLeft, slideInTop, slideInBottom, slideInRight],
    step: 2,
  }),

  delayMultiplier: 0.5,
});

export const createContainerItem = createStaggerItem();
