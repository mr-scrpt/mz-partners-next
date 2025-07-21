"use client";
import { ComponentType, ReactNode } from "react";
import {
  AnimationConfig,
  AnimationStrategy,
  ItemAnimationProps,
  VariantStrategyConfig,
} from "../domain/type";
import { VariantStrategyCreator } from "../strategy/strategy.view";
import { withAnimationItem, withAnimationToChildrenWrapper } from "../vm/hoc";
import { Variants } from "framer-motion";
import { AnimationSelectionStrategy } from "./strategy.factory";
import { withStaggerContainer } from "../vm/withStaggerContainer.hoc";
import { withStaggerItem } from "../vm/withStaggerItem.hoc";

interface CreateAnimationWrapperPayload {
  strategy: AnimationStrategy;
  config: AnimationConfig;
}

export function createAnimationToChildrenWrapper({
  strategy,
  config,
}: CreateAnimationWrapperPayload) {
  return function <P extends { children: ReactNode }>(
    WrappedComponent: ComponentType<P>,
  ) {
    return withAnimationToChildrenWrapper(WrappedComponent, {
      strategy,
      config,
    });
  };
}

interface CreateItemAnimationPayload {
  strategy: VariantStrategyCreator;
  config: VariantStrategyConfig;
}

export function createAnimationItem({
  strategy,
  config,
}: CreateItemAnimationPayload) {
  const variantGenerator = strategy(config);

  return function <P extends ItemAnimationProps>(Component: ComponentType<P>) {
    return withAnimationItem(Component, variantGenerator);
  };
}

// ---------
// ---------

// interface StaggerContainerConfig {
//   resetTimeout?: number;
// }
//
// export function createAnimationStaggerContainer(
//   config: StaggerContainerConfig = {},
// ) {
//   // ✅ Ослабляем ограничение
//   return function <P extends object>(WrappedComponent: ComponentType<P>) {
//     return withStaggerContainer(WrappedComponent, config);
//   };
// }
//
// interface StaggerItemConfig {
//   variants: Variants;
// }
//
// export function createStaggerItem(config: StaggerItemConfig) {
//   // ✅ Ослабляем ограничение
//   return function <P extends object>(WrappedComponent: ComponentType<P>) {
//     return withStaggerItem(WrappedComponent, config.variants);
//   };
// }

// ---------
// ---------
export function createStaggerContainer(strategy: AnimationSelectionStrategy) {
  return function <P extends object>(Component: ComponentType<P>) {
    return withStaggerContainer(Component, strategy);
  };
}

/**
 * Фабрика для создания универсального Stagger-элемента.
 */
export function createStaggerItem<P extends object>(
  Component: ComponentType<P>,
) {
  return withStaggerItem(Component);
}
