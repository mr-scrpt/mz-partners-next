"use client";
import { motion, useInView, Variants } from "framer-motion";
import { ComponentType, FC, HTMLAttributes, useRef } from "react";

export function withAnimationItemSimple<P extends object>(
  WrappedComponent: ComponentType<P>,
  animationVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...restProps } = props;

    return (
      <motion.div className={className} variants={animationVariants}>
        <WrappedComponent {...(restProps as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
export function withAnimationItemAlternating<P extends { idx: number }>(
  WrappedComponent: ComponentType<P>,
  evenVariants: Variants,
  oddVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const variants = props.idx % 2 === 0 ? evenVariants : oddVariants;

    return (
      <motion.div variants={variants}>
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}

export function withAnimationContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  staggerVariants: Variants,
) {
  const StaggerContainer: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
      <motion.div
        ref={ref}
        variants={staggerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
  return StaggerContainer;
}
