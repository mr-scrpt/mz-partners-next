import { ComponentType, ReactNode } from "react";
import {
  AnimationApplicationStrategy,
  AnimationConfig,
  AnimationStrategy,
  ItemAnimationProps,
  StaggerContainerConfig,
  VariantStrategyConfig,
} from "../domain/type";
import { VariantStrategyCreator } from "../strategy/strategy.view";
import {
  withAnimationItem,
  withAnimationToChildrenWrapper,
  withStaggerContainer,
  withStaggerItem,
} from "../vm/hoc";
import {
  withStaggerGroupContainer,
  withStaggerGroupItem,
} from "../vm/group.hoc";

// --- Scroll & Simple Item Factories ---

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

/* ==================================================================
    LIST BUILDERS (Требуют `idx`)
   ================================================================== */

export function createStaggerContainer(config: {
  animationStrategy: AnimationApplicationStrategy;
  resetTimeout?: number;
  delayMultiplier?: number;
}) {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerContainer(WrappedComponent, config);
  };
}

export function createStaggerItem() {
  return function <P extends ItemAnimationProps>(
    WrappedComponent: ComponentType<P>,
  ) {
    return withStaggerItem(WrappedComponent);
  };
}

/* ==================================================================
    GROUP BUILDERS (Автоматические индексы)
   ================================================================== */

// ✅ Новый строитель для контейнера группы
export function createStaggerGroupContainer(config: {
  animationStrategy: AnimationApplicationStrategy;
  delayMultiplier?: number;
}) {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerGroupContainer(WrappedComponent, config);
  };
}

export function createStaggerGroupItem() {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerGroupItem(WrappedComponent);
  };
}
