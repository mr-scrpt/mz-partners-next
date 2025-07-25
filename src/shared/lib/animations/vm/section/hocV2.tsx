"use client";
import { motion, useAnimationControls } from "framer-motion";
import {
  Children,
  cloneElement,
  ComponentType,
  isValidElement,
  PropsWithChildren,
  useRef,
} from "react";
import { AnimationStrategy, AnimationConfig } from "../../domain/type";

type ComponentCustomProps<P extends object> = PropsWithChildren<P> & {};

function propsHaveOptions<P extends object>(
  props: unknown,
): props is ComponentCustomProps<P> {
  return (
    typeof props === "object" &&
    props !== null &&
    "animatable" in props &&
    typeof (props as any).isAnimatable === "boolean"
  );
}

interface WithAnimationOptions {
  strategy: AnimationStrategy;
  config?: AnimationConfig;
}

export const WithChildernLayout = <P extends object>(
  WrappedComponent: ComponentType<P>,
) => {
  const WrapperComponent = (props: PropsWithChildren<P>) => {
    const { children } = props;

    const modifiedChildren = Children.map(children, (child) => {
      if (!isValidElement(child) || !(child.type as any).isAnimatable) {
        return child;
      }
      const props = child.props as ComponentCustomProps<P>;
      const animationProps = {
        ...props,
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

      return cloneElement(child, { ...animationProps });
      // Здесь мы должны вернсть child но как компонент, передав в него пропсы-конфиги для анимации
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
    const controls = useAnimationControls();
    const ref = useRef<HTMLDivElement>(null);

    const MotionWrappedComponent = motion.create<P>(WrappedComponent);
    return <MotionWrappedComponent {...(props as P)} ref={ref} />;
  };
  (WrapperComponent as any).isAnimatable = true;
  WrapperComponent.displayName = `WithChilderenItem(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WrapperComponent;
};
