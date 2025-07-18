import { ReactNode, ComponentType } from "react";
import { AnimationStrategy } from "./strategies";
import { withAnimationToChildrenWrapper } from "./test_hoc";
import { AnimationConfig } from "./type";
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
