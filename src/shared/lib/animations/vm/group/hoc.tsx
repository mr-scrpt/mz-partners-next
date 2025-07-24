"use client";
import {
  ComponentPropsWithoutRef,
  ComponentType,
  createElement,
  FC,
  HTMLAttributes,
} from "react";
import { HTMLMotionProps, motion } from "framer-motion";
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

export function withStaggerGroupItem<P extends ComponentPropsWithoutRef<"div">>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedComponent: FC<P> = (props) => {
    const { injectRef, initial, animate, variants } = useStaggerGroupItem();
    const MotionWrappedComponent = motion.create(WrappedComponent);

    return (
      <MotionWrappedComponent
        {...injectRef(props as any)}
        variants={variants}
        initial={initial}
        animate={animate}
      />
    );
  };
  return AnimatedComponent;
}
// export function withStaggerGroupItem<P extends HTMLAttributes<HTMLDivElement>>(
//   WrappedComponent: ComponentType<P>,
// ) {
//   const AnimatedComponent: FC<P> = (props) => {
//     const { injectRef, initial, animate, variants } = useStaggerGroupItem();
//
//     const MotionWrappedComponent = motion.create(WrappedComponent);
//
//     return (
//       <MotionWrappedComponent
//         {...injectRef(props)}
//         variants={variants}
//         initial={initial}
//         animate={animate}
//       />
//     );
//   };
//
//   return AnimatedComponent;
// }
// export function withStaggerGroupItem<P extends object>(
//   WrappedComponent: ComponentType<P>,
// ) {
//   const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
//     const { injectRef, initial, animate, variants } = useStaggerGroupItem();
//     // const MotionWrappedComponent = motion(WrappedComponent as any);
//     const MotionWrappedComponent = motion.create(WrappedComponent);
//
//     return (
//       <MotionWrappedComponent
//         {...injectRef(props)}
//         variants={variants}
//         initial={initial}
//         animate={animate}
//       />
//     );
//   };
//
//   return AnimatedComponent;
// }
