"use client";

import { motion } from "framer-motion";
import { ComponentType, FC, HTMLAttributes } from "react";
import { AnimationPresetConfig, ItemAnimationProps } from "../../domain/type";
import { StaggerListProvider } from "./provider";
import { useStaggerListState } from "./useStaggerListContainer";
import { useStaggerListItem } from "./useStaggerListItem";

export function withStaggerListContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  config: AnimationPresetConfig,
) {
  const StaggerContainerWrapper: FC<P> = (props) => {
    const contextValue = useStaggerListState(config);
    return (
      <StaggerListProvider value={contextValue}>
        <WrappedComponent {...(props as P)} />
      </StaggerListProvider>
    );
  };
  return StaggerContainerWrapper;
}

export function withStaggerListItem<P extends ItemAnimationProps>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, idx, ...restProps } = props;
    const motionProps = useStaggerListItem(idx);

    return (
      <motion.div className={className} {...motionProps}>
        <WrappedComponent {...(restProps as P)} idx={idx} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
