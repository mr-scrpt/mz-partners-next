import { ReactNode, ComponentType } from "react";
import { AnimationStrategy, AnimationConfig } from "../../domain/type";
import { withAnimationToChildrenWrapper } from "../../vm/section/hoc";

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

// interface CreateItemAnimationPayload {
//   strategy: VariantStrategyCreator;
//   config: VariantStrategyConfig;
// }
//
// export function createAnimationItem({
//   strategy,
//   config,
// }: CreateItemAnimationPayload) {
//   const variantGenerator = strategy(config);
//
//   return function <P extends ItemAnimationProps>(Component: ComponentType<P>) {
//     return withAnimationItem(Component, variantGenerator);
//   };
// }
