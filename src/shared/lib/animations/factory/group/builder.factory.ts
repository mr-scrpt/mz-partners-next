import { ComponentType } from "react";
import { AnimationPresetConfig } from "../../domain/type";
import {
  withStaggerGroupContainer,
  withStaggerGroupItemRef,
  withStaggerGroupItemWrapper,
} from "../../vm/group/hoc";

export function createStaggerGroupContainer(config: AnimationPresetConfig) {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerGroupContainer(WrappedComponent, config);
  };
}

export function createStaggerGroupItemRef() {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerGroupItemRef(WrappedComponent);
  };
}

export function createStaggerGroupItemWrapper() {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerGroupItemWrapper(WrappedComponent);
  };
}
