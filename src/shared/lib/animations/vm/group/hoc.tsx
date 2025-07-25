"use client";
import { motion } from "framer-motion";
import { ComponentType, FC, HTMLAttributes } from "react";
import { AnimationPresetConfig } from "../../domain/type";
import { StaggerGroupProvider } from "./provider";
import { useStaggerGroupState } from "./useStaggerGroupContainer";
import { useStaggerGroupItem } from "./useStaggerGroupItem";

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

// **
// * Use only with send ref to wrapped component
// * React 19 no need to use forwardRef
// * React 18 and above need to use forwardRef
// **

export function withStaggerGroupItemRef<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedComponent: FC<P> = (props) => {
    const { injectRef, initial, animate, variants } = useStaggerGroupItem();
    const MotionWrappedComponent = motion.create<P>(WrappedComponent);

    return (
      <MotionWrappedComponent
        {...injectRef(props)}
        variants={variants}
        initial={initial}
        animate={animate}
      />
    );
  };
  return AnimatedComponent;
}

// **
// * Be created wrapper under native component
// * No need to use forwardRef
// **

export function withStaggerGroupItemWrapper<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { ref, initial, variants, animate } = useStaggerGroupItem();

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial={initial}
        animate={animate}
      >
        <WrappedComponent {...(props as P)} />
      </motion.div>
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
