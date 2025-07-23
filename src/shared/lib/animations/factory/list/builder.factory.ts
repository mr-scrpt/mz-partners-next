import { ComponentType } from "react";
import {
  AnimationApplicationStrategy,
  ItemAnimationProps,
} from "../../domain/type";
import {
  withStaggerListContainer,
  withStaggerListItem,
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

export function createStaggerListItem() {
  return function <P extends ItemAnimationProps>(
    WrappedComponent: ComponentType<P>,
  ) {
    return withStaggerListItem(WrappedComponent);
  };
}
