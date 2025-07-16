"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
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

import { AnimationConfig } from "./type";

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

const mapRange = (
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
) => {
  const clampedInput = Math.max(inputMin, Math.min(input, inputMax));
  return (
    ((clampedInput - inputMin) * (outputMax - outputMin)) /
      (inputMax - inputMin) +
    outputMin
  );
};

export function withAnimationContainerScrollToChildren<P extends object>(
  WrappedComponent: ComponentType<P & { children: ReactNode }>,
  config: AnimationConfig = {},
) {
  const AnimatedChild: FC<{
    children: ReactNode;
    itemAs?: ElementType;
    className?: string;
    animationConfig?: AnimationConfig;
  }> = ({ children, itemAs: Tag = "div", className, animationConfig = {} }) => {
    const ref = useRef<HTMLDivElement>(null);

    const finalConfig = { ...config, ...animationConfig };
    const {
      startPixels = 20,
      endPixels = 200,
      springConfig = { stiffness: 100, damping: 30, mass: 1 },
    } = finalConfig;

    const progress = useMotionValue(0);
    const smoothProgress = useSpring(progress, springConfig);
    const { scrollY } = useScroll();

    const [direction, setDirection] = useState<"enter" | "exit">("enter");

    const getUpdate = () => {
      if (!ref.current)
        return { newProgress: 0, currentZone: "enter" as const };

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      let newProgress = 0;
      let currentZone: "enter" | "exit" | "visible" = "visible";

      const enterStart = vh - startPixels;
      const enterEnd = vh - endPixels;
      const exitStart = endPixels;
      const exitEnd = 0;

      if (rect.top >= enterEnd && rect.top <= enterStart) {
        newProgress = mapRange(rect.top, enterEnd, enterStart, 1, 0);
        currentZone = "enter";
      } else if (rect.bottom >= exitEnd && rect.bottom <= exitStart) {
        newProgress = mapRange(rect.bottom, exitEnd, exitStart, 0, 1);
        currentZone = "exit";
      } else if (rect.top < enterEnd && rect.bottom > exitStart) {
        newProgress = 1;
        currentZone = "visible";
      }

      return { newProgress, currentZone };
    };

    useEffect(() => {
      const handleUpdate = () => {
        const { newProgress, currentZone } = getUpdate();
        progress.set(newProgress);

        if (currentZone === "enter" || currentZone === "exit") {
          setDirection(currentZone);
        }
      };

      handleUpdate();
      const unsubscribeScroll = scrollY.on("change", handleUpdate);
      window.addEventListener("resize", handleUpdate);
      return () => {
        unsubscribeScroll();
        window.removeEventListener("resize", handleUpdate);
      };
    }, []);

    const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

    const yEnter = useTransform(smoothProgress, [0, 1], [50, 0]);
    const yExit = useTransform(smoothProgress, [0, 1], [-50, 0]);

    const y = direction === "exit" ? yExit : yEnter;

    const MotionTag = (motion[Tag as keyof typeof motion] ||
      motion.div) as ElementType;

    return (
      <MotionTag ref={ref} style={{ opacity, y }} className={className}>
        {children}
      </MotionTag>
    );
  };

  const AnimatedLayoutComponent: FC<
    P & {
      children: ReactNode;
      itemAs?: ElementType;
      itemClassName?: string;
      itemAnimationConfig?: AnimationConfig;
    }
  > = (props) => {
    const {
      children,
      itemAs,
      itemClassName,
      itemAnimationConfig,
      ...restProps
    } = props;

    const animatedChildren = Children.map(children, (child, index) => {
      if (!isValidElement(child)) return child;
      return (
        <AnimatedChild
          key={index}
          className={itemClassName}
          itemAs={itemAs}
          animationConfig={itemAnimationConfig}
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
