"use client";
import { motion } from "framer-motion";
import {
  Children,
  cloneElement,
  ComponentType,
  isValidElement,
  PropsWithChildren,
  useRef,
} from "react";
import { AnimationStrategy, AnimationConfig } from "../../domain/type";
import { useScrollProgress } from "./hook";

type ComponentCustomProps<P extends object> = PropsWithChildren<P> & {};

interface WithAnimationOptions {
  strategy: AnimationStrategy;
  config?: AnimationConfig;
}

export const WithChildernLayout = <P extends object>(
  WrappedComponent: ComponentType<P>,
  { strategy, config = {} }: WithAnimationOptions,
) => {
  const WrapperComponent = (props: PropsWithChildren<P>) => {
    const { children } = props;

    const modifiedChildren = Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return child;
      }
      if (!isValidElement(child) || !(child.type as any).isAnimatable) {
        return child;
      }
      const props = child.props as ComponentCustomProps<P> &
        WithAnimationOptions;

      const animationProps = {
        ...props,
        config,
        strategy,
      };
      console.log("output_log:  =>>>", animationProps);

      return cloneElement(child, { ...animationProps });
    });

    return (
      <WrappedComponent {...(props as P)}>{modifiedChildren}</WrappedComponent>
    );
  };

  return WrapperComponent;
};

export const WithChilderenItem = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  const WrapperComponent = (
    props: PropsWithChildren<ComponentCustomProps<P>>,
    // { strategy: useAnimationStrategy, config = {} }: WithAnimationOptions, // конфиги для анимций которые должны будут применится к компоненту
  ) => {
    // const ref = useRef<HTMLDivElement>(null);
    // const { progress, direction } = useScrollProgress(ref, config);
    //
    // const style = useAnimationStrategy({ progress, direction, config });
    //
    // const MotionWrappedComponent = motion.create<P>(WrappedComponent);
    // return <MotionWrappedComponent {...(props as P)} ref={ref} style={style} />;
    return <WrappedComponent {...(props as P)} />;
  };
  (WrapperComponent as any).isAnimatable = true;
  WrapperComponent.displayName = `WithChilderenItem(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WrapperComponent;
};
