import { ComponentType } from "react";
import { AnimationContainerConfig } from "../domain/type";
import { withAnimatedContainer, withAnimatedItem } from "../vm/hoc";

export function createAnimatedContainerConfig(
  config: AnimationContainerConfig,
) {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withAnimatedContainer(WrappedComponent, config);
  };
}

export function createAnimationContainerItemConfig() {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withAnimatedItem(WrappedComponent);
  };
}
