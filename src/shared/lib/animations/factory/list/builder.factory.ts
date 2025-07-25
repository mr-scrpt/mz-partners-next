import { ComponentType } from "react";
import {
  AnimationApplicationStrategy,
  ItemAnimationProps,
} from "../../domain/type";
import {
  withStaggerListContainer,
  withStaggerListItemRef,
  withStaggerListItemWrapper,
} from "../../vm/list/hoc";

export function createStaggerListContainer(config: {
  animationStrategy: AnimationApplicationStrategy;
  resetTimeout?: number;
  delayMultiplier?: number;
}) {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerListContainer(WrappedComponent, config);
  };
}

export function createStaggerListItemRef() {
  return function <P extends ItemAnimationProps>(
    WrappedComponent: ComponentType<P>,
  ) {
    return withStaggerListItemRef(WrappedComponent);
  };
}
export function createStaggerListItemWrapper() {
  return function <P extends ItemAnimationProps>(
    WrappedComponent: ComponentType<P>,
  ) {
    return withStaggerListItemWrapper(WrappedComponent);
  };
}
