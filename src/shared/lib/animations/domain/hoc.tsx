"use client";
import {
  motion,
  useAnimationControls,
  useInView,
  Variants,
} from "framer-motion";
import {
  Children,
  ComponentType,
  ElementType,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

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
          // delay: idx * 0.15,
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

export function withAnimationContainerToChildren<P extends object>(
  WrappedComponent: ComponentType<P & { children: ReactNode }>,
  variants: Variants[],
) {
  const AnimatedChild: FC<{
    variant: Variants;
    children: ReactNode;
    itemAs?: ElementType;
    className?: string;
  }> = ({ variant, children, itemAs: Tag = "div", className }) => {
    const controls = useAnimationControls();
    const ref = useRef(null);
    // const isInView = useInView(ref, { amount: 0.05 });
    const isInView = useInView(ref, { margin: "0px 0px -50px 0px" });
    const [isMounted, setIsMounted] = useState(false);

    const MotionTag = (motion[Tag as keyof typeof motion] ||
      motion.div) as ElementType;

    useEffect(() => {
      setIsMounted(true);
    }, []);

    useEffect(() => {
      if (!isMounted) return;
      if (isInView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [isMounted, isInView, controls]);

    return (
      <MotionTag
        ref={ref}
        variants={variant}
        initial="visible"
        animate={controls}
        className={className}
      >
        {children}
      </MotionTag>
    );
  };

  const AnimatedLayoutComponent: FC<
    P & { children: ReactNode; itemAs?: ElementType; itemClassName?: string }
  > = (props) => {
    const { children, itemAs, itemClassName, ...restProps } = props;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const animatedChildren = Children.map(children, (child, index) => {
      if (!isValidElement(child)) {
        return child;
      }
      const selectedVariant = variants[index % variants.length];

      return (
        <AnimatedChild
          key={index}
          variant={selectedVariant}
          className={itemClassName}
          itemAs={itemAs}
        >
          {child}
        </AnimatedChild>
      );
    });

    return (
      <WrappedComponent {...(restProps as P)}>
        {animatedChildren}
      </WrappedComponent>
    );
  };

  return AnimatedLayoutComponent;
}
