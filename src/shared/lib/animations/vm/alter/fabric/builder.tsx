import { ComponentType, FC } from "react";
import { motion } from "framer-motion";
import { AnimationContainerConfig } from "../domain/type";
import { useCreateContextData, useAnimationItem } from "../vm/hook";
import { AnimationProvider } from "../vm/provider";

export function createAnimatedContainer(config: AnimationContainerConfig) {
  return function <P extends object>(WrappedComponent: ComponentType<P>) {
    return withAnimatedContainer(WrappedComponent, config);
  };
}
export function withAnimatedContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  config: AnimationContainerConfig,
) {
  const StaggerContainerWrapper: FC<P> = (props) => {
    const { contextValue } = useCreateContextData(config);
    return (
      <AnimationProvider value={contextValue}>
        <WrappedComponent {...(props as P)} />
      </AnimationProvider>
    );
  };
  return StaggerContainerWrapper;
}

export function withAnimatedItem<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedItem: FC<P> = (props) => {
    const { ref, ...animationProps } = useAnimationItem();

    return (
      <motion.div ref={ref} {...animationProps}>
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };

  return AnimatedItem;
}
