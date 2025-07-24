"use client";

import {
  slideInLeft,
  slideInRight,
  slideInTop,
  slideInBottom,
  fadeInUp,
  fadeInBottom,
  fadeIn,
} from "../../preset/variant";
import {
  cyclicalStrategyCreator,
  steppedStrategyCreator,
} from "../../strategy/strategy.animation";

import {
  createStaggerGroupContainer,
  createStaggerGroupItemRef,
  createStaggerGroupItemWrapper,
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
      variantsList: [fadeInUp, fadeInBottom],
    }),
    delayMultiplier: 0.25,
  });

export const createContainerGroupFadeMovement = createStaggerGroupContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [fadeInUp],
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

export const createContainerGroupFade = createStaggerGroupContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [fadeIn],
  }),
  delayMultiplier: 0.25,
});

export const createContainerGroupItemRef = createStaggerGroupItemRef();

export const createContainerGroupItemWrapper = createStaggerGroupItemWrapper();
