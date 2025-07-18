"use client";

import { ComponentType, ElementType, FC, ReactNode } from "react";
import { AnimationConfig, ElementConfig } from "./type";

// Пропсы, которые должен принимать любой наш "AnimatedChild"
export interface AnimatedChildProps {
  children: ReactNode;
  itemAs?: ElementType;
  className?: string;
  animationConfig?: AnimationConfig;
}

/**
 * Универсальный HOC, который рендерит список элементов,
 * применяя к ним переданный компонент-аниматор `AnimatedChildComponent`.
 */
export function withAnimatedItemsRenderer<P extends { children: ReactNode }>(
  WrappedComponent: ComponentType<P>,
  AnimatedChildComponent: ComponentType<AnimatedChildProps>, // ✅ Принимает компонент-аниматор
  config: AnimationConfig = {},
) {
  type AnimatedLayoutProps = Omit<P, "children"> & {
    elements: ElementConfig[];
    itemAs?: ElementType;
    itemClassName?: string;
    itemAnimationConfig?: AnimationConfig;
  };

  const AnimatedLayoutComponent: FC<AnimatedLayoutProps> = (props) => {
    const {
      elements,
      itemAs,
      itemClassName,
      itemAnimationConfig,
      ...restProps
    } = props;

    return (
      <WrappedComponent {...(restProps as unknown as P)}>
        {elements.map((item, index) => {
          const { component: Component, props: itemProps, options } = item;
          if (options?.skipAnimation) {
            return <Component key={index} {...itemProps} />;
          }
          return (
            <AnimatedChildComponent // ✅ Используем переданный аниматор
              key={index}
              itemAs={itemAs}
              className={itemClassName}
              animationConfig={{ ...config, ...itemAnimationConfig }}
            >
              <Component {...itemProps} />
            </AnimatedChildComponent>
          );
        })}
      </WrappedComponent>
    );
  };

  return AnimatedLayoutComponent;
}
