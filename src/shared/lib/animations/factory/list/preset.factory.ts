import {
  slideInBottom,
  slideInLeft,
  slideInRight,
  fadeIn,
  fadeInBottom,
  fadeInUp,
  slideInTop,
} from "../../preset/variant";
import {
  cyclicalStrategyCreator,
  steppedStrategyCreator,
} from "../../strategy/strategy.animation";
import {
  createStaggerListContainer,
  createStaggerListItem,
} from "./builder.factory";

export const createContainerListSlideAlternating = createStaggerListContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [slideInLeft, slideInRight],
  }),
  delayMultiplier: 0.25,
});

export const createContainerListSlideImmediate = createStaggerListContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [slideInLeft, slideInRight],
  }),
  delayMultiplier: 0,
});

export const createContainerListSlideAround = createStaggerListContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [slideInLeft, slideInTop, slideInBottom, slideInRight],
  }),
  delayMultiplier: 0.25,
});

export const createContainerListSlideSteped = createStaggerListContainer({
  animationStrategy: steppedStrategyCreator({
    variantsList: [slideInLeft, slideInRight],
    step: 2,
  }),
  delayMultiplier: 0.25,
});

export const createContainerListFadeMovementAlternating =
  createStaggerListContainer({
    animationStrategy: cyclicalStrategyCreator({
      variantsList: [fadeInUp, fadeInBottom],
    }),
    delayMultiplier: 0.25,
  });

export const createContainerListFadeMovement = createStaggerListContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [fadeInUp],
  }),
  delayMultiplier: 0.25,
});

export const createContainerListFadeMovementImmediate =
  createStaggerListContainer({
    animationStrategy: cyclicalStrategyCreator({
      variantsList: [fadeInUp, fadeInBottom],
    }),
    delayMultiplier: 0,
  });

export const createContainerListFade = createStaggerListContainer({
  animationStrategy: cyclicalStrategyCreator({
    variantsList: [fadeIn],
  }),
  delayMultiplier: 0.25,
});

export const createContainerListItem = createStaggerListItem();
