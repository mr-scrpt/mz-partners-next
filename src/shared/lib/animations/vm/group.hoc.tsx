"use client";
import {
  ComponentType,
  FC,
  HTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimationApplicationStrategy } from "../domain/type";
import { StaggerGroupProvider, useStaggerGroup } from "./group.provider";
import {
  useAnimationControls,
  useInView,
  motion,
  Variants,
} from "framer-motion";
export function withStaggerGroupContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  config: {
    animationStrategy: AnimationApplicationStrategy;
    delayMultiplier?: number;
    resetTimeout?: number;
  },
) {
  const StaggerContainerWrapper: FC<P> = (props) => (
    <StaggerGroupProvider
      animationStrategy={config.animationStrategy}
      resetTimeout={config.resetTimeout}
      delayMultiplier={config.delayMultiplier}
    >
      <WrappedComponent {...(props as P)} />
    </StaggerGroupProvider>
  );
  return StaggerContainerWrapper;
}

export function withStaggerGroupItem<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...rest } = props;
    const ref = useRef(null);
    const controls = useAnimationControls();
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const { register, getVariants, requestDelay } = useStaggerGroup();
    const id = useId();

    useEffect(() => {
      // ✅ Этот один useEffect делает всё, когда элемент становится видимым
      if (isInView) {
        // 1. Регистрируемся и получаем стабильный индекс.
        // Это безопасно, так как происходит только на клиенте.
        const index = register(id);

        // 2. Получаем свои варианты и задержку.
        const variants = getVariants(index);
        const delay = requestDelay();

        // 3. Явно управляем анимацией:
        //    - Мгновенно ставим в ПОЛНОЕ начальное положение (с transform).
        controls.set(variants.hidden);
        //    - Запускаем анимацию до конечного положения.
        controls.start(variants.visible, { delay });
      }
    }, [isInView, id, register, getVariants, requestDelay, controls]);

    return (
      <motion.div
        ref={ref}
        className={className}
        // ✅ Ключевое изменение:
        // Мы задаем простое и безопасное начальное состояние.
        // Это гарантирует отсутствие мигания и ошибок гидратации.
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <WrappedComponent {...(rest as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
