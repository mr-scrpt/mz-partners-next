"use client";
import { motion, useInView, Variants } from "framer-motion";
import {
  Children,
  ComponentType,
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
    const isInView = useInView(ref, { once: true, amount: 0.2 });

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
          delay: idx * 0.15,
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
  const AnimatedLayoutComponent: FC<P & { children: ReactNode }> = (props) => {
    const { children, ...restProps } = props;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const animatedChildren = Children.map(children, (child, index) => {
      // ^^^ ИСПРАВЛЕНИЕ ЗДЕСЬ: правильный порядок (child, index)

      if (!isValidElement(child)) {
        return child;
      }

      const selectedVariant = variants[index % variants.length];

      return (
        <motion.div
          key={index}
          variants={selectedVariant}
          initial={isMounted ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {child}
        </motion.div>
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
// export function withAnimationContainerToChildren<P extends object>(
//   WrappedComponent: ComponentType<P & { children: ReactNode }>,
//   variants: Variants[],
// ) {
//   const AnimatedLayoutComponent: FC<P & { children: ReactNode }> = (props) => {
//     const { children, ...restProps } = props;
//
//     const animatedChildren = Children.map(children, (child, index) => {
//       if (!isValidElement(child)) {
//         return child;
//       }
//
//       const selectedVariant = variants[index % variants.length];
//
//       return (
//         <motion.div
//           key={index}
//           variants={selectedVariant}
//           initial="hidden"
//           whileInView="visible"
//           // viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           {child}
//         </motion.div>
//       );
//     });
//
//     return (
//       <WrappedComponent {...(restProps as P)}>
//         {animatedChildren}
//       </WrappedComponent>
//     );
//   };
//
//   return AnimatedLayoutComponent;
// }
