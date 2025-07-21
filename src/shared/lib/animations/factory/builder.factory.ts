import { ComponentType, ReactNode } from "react";
import {
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

// --- Stagger Factories ---

/**
 * ✅ Базовая фабрика для создания stagger-контейнера.
 * Принимает конфигурацию с вариантами анимаций.
 */
export function createStaggerContainer(config: StaggerContainerConfig) {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerContainer(WrappedComponent, config);
  };
}

/**
 * ✅ Универсальная фабрика для создания stagger-элемента.
 * Оборачивает компонент в HOC, который требует проп `idx`.
 */
export function createStaggerItem<P extends ItemAnimationProps>(
  WrappedComponent: ComponentType<P>,
) {
  // Тип P уже ограничен ItemAnimationProps, что гарантирует наличие idx
  return withStaggerItem(WrappedComponent);
}
