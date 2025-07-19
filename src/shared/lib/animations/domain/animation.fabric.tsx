import { ReactNode, ComponentType } from "react";
import { AnimationStrategy, VariantStrategy } from "./strategies";
import { withAnimationToChildrenWrapper } from "./test_hoc";
import { AnimationConfig } from "./type";
import { withAnimationItem } from "./test_hoc_2";

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
