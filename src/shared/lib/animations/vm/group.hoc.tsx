"use client";
import {
  ComponentType,
  FC,
  HTMLAttributes,
  useEffect,
  useId,
  useRef,
} from "react";
import { AnimationApplicationStrategy } from "../domain/type";
import { useAnimationControls, useInView, motion } from "framer-motion";
import { StaggerGroupContext, useStaggerGroup } from "./group.provider";
import { useStaggerGroupState } from "./useStaggerGroupContainer";
import { useStaggerGroupItem } from "./useStaggerGroupItem";

export function withStaggerGroupContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  config: {
    animationStrategy: AnimationApplicationStrategy;
    delayMultiplier?: number;
    resetTimeout?: number;
  },
) {
  const StaggerContainerWrapper: FC<P> = (props) => {
    const contextValue = useStaggerGroupState(config);

    return (
      <StaggerGroupContext.Provider value={contextValue}>
        <WrappedComponent {...(props as P)} />
      </StaggerGroupContext.Provider>
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
