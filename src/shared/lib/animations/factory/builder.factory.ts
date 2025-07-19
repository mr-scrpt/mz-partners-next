import { ReactNode, ComponentType } from "react";
import {
  AnimationStrategy,
  AnimationConfig,
  VariantStrategy,
} from "../domain/type";
import { withAnimationToChildrenWrapper, withAnimationItem } from "../vm/hoc";

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
  strategy: (...args: any[]) => VariantStrategy;
  config: any;
}

export function createAnimationItem({
  strategy,
  config,
}: CreateItemAnimationPayload) {
  const variantGenerator = strategy(...config);

  return function <P extends object>(Component: ComponentType<P>) {
    return withAnimationItem(Component, variantGenerator);
  };
}
