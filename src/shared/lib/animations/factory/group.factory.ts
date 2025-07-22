"use client";
import {
  fadeIn,
  fadeInBottom,
  fadeInUp,
  slideInBottom,
  slideInLeft,
  slideInRight,
  slideInTop,
} from "../preset/variant";
import {
  cyclicalStrategyCreator,
  steppedStrategyCreator,
} from "../strategy/strategy.animation";
import {
  createStaggerGroupContainer,
  createStaggerGroupItem,
} from "./builder.factory";

export const createContainerGroupSlideAlternating = createStaggerGroupContainer(
  {
    animationStrategy: cyclicalStrategyCreator({
      variantsList: [slideInLeft, slideInRight],
    }),
    delayMultiplier: 0.25,
  },
);

export const createContainerGroupSlideImmediate = createStaggerGroupContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [slideInLeft, slideInRight],
  }),
  delayMultiplier: 0,
});

export const createContainerGroupSlideAround = createStaggerGroupContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [slideInLeft, slideInTop, slideInBottom, slideInRight],
  }),
  delayMultiplier: 0.25,
});

export const createContainerGroupSlideSteped = createStaggerGroupContainer({
  animationStrategy: steppedStrategyCreator({
    variantsList: [slideInLeft, slideInRight],
    step: 2,
  }),
  delayMultiplier: 0.25,
});

export const createContainerGroupFadeMovementAlternating =
  createStaggerGroupContainer({
    animationStrategy: cyclicalStrategyCreator({
      variantsList: [fadeInUp],
    }),
    delayMultiplier: 0.25,
  });

export const createContainerGroupFadeImmediate = createStaggerGroupContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [fadeIn],
  }),
  delayMultiplier: 0.25,
});
export const createContainerGroupFadeMovementImmediate =
  createStaggerGroupContainer({
    animationStrategy: cyclicalStrategyCreator({
      variantsList: [fadeInUp, fadeInBottom],
    }),
    delayMultiplier: 0,
  });

export const createContainerGroupItem = createStaggerGroupItem();
