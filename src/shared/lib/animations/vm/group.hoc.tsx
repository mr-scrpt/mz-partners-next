"use client";
import {
  ComponentType,
  FC,
  HTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimationApplicationStrategy } from "../domain/type";
import { StaggerGroupProvider, useStaggerGroup } from "./group.provider";
import {
  useAnimationControls,
  useInView,
  motion,
  Variants,
} from "framer-motion";

export function withStaggerGroupContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  config: {
    animationStrategy: AnimationApplicationStrategy;
    delayMultiplier?: number;
  },
) {
  const StaggerContainerWrapper: FC<P> = (props) => (
    <StaggerGroupProvider
      animationStrategy={config.animationStrategy}
      delayMultiplier={config.delayMultiplier}
    >
      <WrappedComponent {...(props as P)} />
    </StaggerGroupProvider>
  );
  return StaggerContainerWrapper;
}
export function withStaggerGroupItem<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...rest } = props;
    const ref = useRef(null);
    const controls = useAnimationControls();

    const isInView = useInView(ref, { amount: 0.1 });
    const { register, getAnimationProps } = useStaggerGroup();
    const id = useId();

    useEffect(() => {
      register(id);
    }, [id, register]);

    useEffect(() => {
      if (isInView) {
        const { variants, delay } = getAnimationProps(id);

        controls.set(variants.hidden);

        controls.start(variants.visible, { delay });
      }
    }, [isInView, id, getAnimationProps, controls]);

    return (
      <motion.div ref={ref} className={className} animate={controls}>
        <WrappedComponent {...(rest as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
