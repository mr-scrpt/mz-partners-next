import { ComponentType } from "react";
import { AnimationPresetConfig } from "../../domain/type";
import {
  withStaggerGroupContainer,
  withStaggerGroupItem,
} from "../../vm/group/hoc";

export function createStaggerGroupContainer(config: AnimationPresetConfig) {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerGroupContainer(WrappedComponent, config);
  };
}

export function createStaggerGroupItem() {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withStaggerGroupItem(WrappedComponent);
  };
}
