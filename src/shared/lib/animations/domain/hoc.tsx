"use client";
import { motion, useInView, Variants } from "framer-motion";

import { ComponentType, FC, HTMLAttributes, useRef } from "react";

export function withAnimationItemSimple<P extends object>(
  WrappedComponent: ComponentType<P>,
  animationVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...restProps } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={animationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WrappedComponent {...(restProps as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}

export function withAnimationItemSelfDelayed<P extends { idx?: number }>(
  WrappedComponent: ComponentType<P>,
  animationVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, idx, ...restProps } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const customVariants: Variants = {
      hidden: { ...animationVariants.hidden },
      visible: {
        ...animationVariants.visible,
        transition: {
          ...(animationVariants.visible as any).transition,
          delay: (idx ?? 0) * 0.15,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={customVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WrappedComponent {...(restProps as P)} idx={idx} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}

export function withAnimationItemSelfDelayedAlternating<
  P extends { idx: number },
>(
  WrappedComponent: ComponentType<P>,
  evenVariants: Variants,
  oddVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, idx, ...restProps } = props;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const baseVariant = idx % 2 === 0 ? evenVariants : oddVariants;

    const customVariants: Variants = {
      hidden: { ...baseVariant.hidden },
      visible: {
        ...baseVariant.visible,
        transition: {
          ...(baseVariant.visible as any).transition,

          delay: 0.15,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={customVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}

export function withAnimationContainerImmediately<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const StaggerContainer: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
      <motion.div>
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
  return StaggerContainer;
}
