"use client";
import { slideInLeft, slideInRight } from "../preset/variant";
import { cyclicalStrategyCreator } from "../strategy/strategy.animation";
import {
  createStaggerGroupContainer,
  createStaggerGroupItem,
} from "./builder.factory";

export const createContainerGroupSlideAlternating = createStaggerGroupContainer(
  {
    animationStrategy: cyclicalStrategyCreator({
      variantsList: [slideInLeft, slideInRight],
    }),
    delayMultiplier: 0.2,
  },
);

export const createContainerGroupItem = createStaggerGroupItem();
