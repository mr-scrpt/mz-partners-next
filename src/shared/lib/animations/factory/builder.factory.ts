import { ComponentType, ReactNode } from "react";
import {
  AnimationConfig,
  AnimationStrategy,
  ItemAnimationProps,
  VariantStrategyConfig,
} from "../domain/type";
import { VariantStrategyCreator } from "../strategy/strategy.view";
import {
  withAnimationItem,
  withAnimationToChildrenWrapper,
  withStaggerContainer,
  withStaggerItem,
} from "../vm/hoc";
import { Variants } from "framer-motion";

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

interface StaggerContainerConfig {
  resetTimeout?: number;
}

export function createStaggerContainer(config: StaggerContainerConfig = {}) {
  // ✅ Ослабляем ограничение
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerContainer(WrappedComponent, config);
  };
}

interface StaggerItemConfig {
  variants: Variants;
}

export function createStaggerItem(config: StaggerItemConfig) {
  // ✅ Ослабляем ограничение
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerItem(WrappedComponent, config.variants);
  };
}
