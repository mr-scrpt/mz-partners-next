"use client";

import { motion } from "framer-motion";
import { ReactNode, ComponentType, FC, ElementType, useRef } from "react";
import { useScrollProgress } from "./hook";
import { AnimationStrategy } from "./strategies";
import { AnimationConfig, ElementConfig } from "./type";

interface WithAnimationOptions {
  strategy: AnimationStrategy;
  config?: AnimationConfig;
}

export function withAnimationToChildrenWrapper<
  P extends { children: ReactNode },
>(
  WrappedComponent: ComponentType<P>,
  { strategy: useAnimationStrategy, config = {} }: WithAnimationOptions,
) {
  const AnimatedChild: FC<{
    children: ReactNode;
    itemAs?: ElementType;
    className?: string;
  }> = ({ children, itemAs: Tag = "div", className }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { progress, direction } = useScrollProgress(ref, config);

    const style = useAnimationStrategy({ progress, direction, config });

    const MotionTag = (motion[Tag as keyof typeof motion] ||
      motion.div) as ElementType;

    return (
      <MotionTag ref={ref} style={style} className={className}>
        {children}
      </MotionTag>
    );
  };

  type AnimatedLayoutProps = Omit<P, "children"> & {
    elements: ElementConfig[];
    itemAs?: ElementType;
    itemClassName?: string;
  };

  const AnimatedLayoutComponent: FC<AnimatedLayoutProps> = (props) => {
    const { elements, itemAs, itemClassName, ...restProps } = props;
    return (
      <WrappedComponent {...(restProps as unknown as P)}>
        {elements.map((item, index) => {
          const { component: Component, props: itemProps, options } = item;
          if (options?.skipAnimation) {
            return <Component key={index} {...itemProps} />;
          }
          return (
            <AnimatedChild
              key={index}
              itemAs={itemAs}
              className={itemClassName}
            >
              <Component {...itemProps} />
            </AnimatedChild>
          );
        })}
      </WrappedComponent>
    );
  };
  return AnimatedLayoutComponent;
}
