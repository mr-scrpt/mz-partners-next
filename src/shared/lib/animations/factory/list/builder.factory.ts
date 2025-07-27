import { ComponentType } from "react";
import {
  AnimationApplicationStrategy,
  AnimationPresetConfig,
  ItemAnimationProps,
} from "../../domain/type";
import {
  withStaggerListContainer,
  withStaggerListItemRef,
  withStaggerListItemWrapper,
} from "../../vm/list/hoc";

export function createStaggerListContainer(config: AnimationPresetConfig) {
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
