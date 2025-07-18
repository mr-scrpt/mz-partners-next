import { ComponentType, FC, ReactNode, useRef, ElementType } from "react";
import { motion } from "framer-motion";
import { useScaleAnimation, useScrollAnimation } from "./hook";
import { AnimatedChildProps, withAnimatedItemsRenderer } from "./test_hoc";
import { AnimationConfig } from "./type";
import { PageLayout } from "@/shared/ui/layout/ui/page.layout";

const ScrollAnimatedChild: FC<AnimatedChildProps> = ({
  children,
  itemAs: Tag = "div",
  className,
  animationConfig,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { opacity, y } = useScrollAnimation(ref, animationConfig);
  const MotionTag = (motion[Tag as keyof typeof motion] ||
    motion.div) as ElementType;

  return (
    <MotionTag ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </MotionTag>
  );
};

export function createScrollAnimatedContainer(config: AnimationConfig) {
  return function <P extends { children: ReactNode }>(
    WrappedComponent: ComponentType<P>,
  ) {
    return withAnimatedItemsRenderer(
      WrappedComponent,
      ScrollAnimatedChild,
      config,
    );
  };
}

const defaultScrollConfig: AnimationConfig = {
  startPixels: 20,
  endPixels: 250,
  springConfig: { stiffness: 80, damping: 25 },
};

export const createDefaultScrollContainer =
  createScrollAnimatedContainer(defaultScrollConfig);

export const PageLayoutAnimatedToChildren =
  createDefaultScrollContainer(PageLayout);

const ScaleAnimatedChild: FC<AnimatedChildProps> = ({
  children,
  itemAs: Tag = "div",
  className,
  animationConfig,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { opacity, scale } = useScaleAnimation(ref, animationConfig); // Используем новый хук
  const MotionTag = (motion[Tag as keyof typeof motion] ||
    motion.div) as ElementType;

  return (
    // Применяем `scale` вместо `y`
    <MotionTag ref={ref} style={{ opacity, scale }} className={className}>
      {children}
    </MotionTag>
  );
};

// ... ваша существующая фабрика createScrollAnimatedContainer ...

/**
 * ✅ Шаг 2.2: Новая фабрика, которая создает HOC для scale-анимации.
 */
export function createScaleAnimatedContainer(config: AnimationConfig) {
  return function <P extends { children: ReactNode }>(
    WrappedComponent: ComponentType<P>,
  ) {
    // Инжектируем `ScaleAnimatedChild` в наш универсальный рендер
    return withAnimatedItemsRenderer(
      WrappedComponent,
      ScaleAnimatedChild,
      config,
    );
  };
}

export const PageLayoutScaleAnimated = createScaleAnimatedContainer({
  startPixels: 50,
  endPixels: 350,
  springConfig: { stiffness: 100, damping: 20 },
})(PageLayout);
