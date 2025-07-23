"use client";
import { ComponentType, FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { useStaggerGroupState } from "./useStaggerGroupContainer";
import { useStaggerGroupItem } from "./useStaggerGroupItem";
import { AnimationPresetConfig } from "../../domain/type";
import { StaggerGroupProvider } from "./provider";

export function withStaggerGroupContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  config: AnimationPresetConfig,
) {
  const StaggerContainerWrapper: FC<P> = (props) => {
    const contextValue = useStaggerGroupState(config);

    return (
      <StaggerGroupProvider value={contextValue}>
        <WrappedComponent {...(props as P)} />
      </StaggerGroupProvider>
    );
  };

  return StaggerContainerWrapper;
}

export function withStaggerGroupItem<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...rest } = props;
    const motionProps = useStaggerGroupItem();
    return (
      <motion.div className={className} {...motionProps}>
        <WrappedComponent {...(rest as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
