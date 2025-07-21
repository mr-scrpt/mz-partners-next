"use client";
import {
  ComponentType,
  FC,
  HTMLAttributes,
  useEffect,
  useMemo,
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
  },
) {
  const StaggerContainerWrapper: FC<P> = (props) => (
    <StaggerGroupProvider
      animationStrategy={config.animationStrategy}
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
    const isInView = useInView(ref, { amount: 0.1 });
    const { getAnimationProps } = useStaggerGroup();

    // ✅ Шаг 1: Используем состояние, чтобы определить, что мы на клиенте
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
      setIsReady(true);
    }, []);

    // ✅ Шаг 2: Безопасно получаем пропсы анимации один раз
    const { variants, delay } = useMemo(
      () => getAnimationProps(),
      [getAnimationProps],
    );

    useEffect(() => {
      // ✅ Шаг 3: Запускаем анимацию, когда все условия выполнены
      if (isInView && isReady) {
        controls.start("visible", { delay });
      }
    }, [isInView, isReady, controls, delay]);

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={variants}
        initial="hidden"
        animate={controls}
        // ✅ Шаг 4: Ключевое исправление!
        // На сервере и при гидратации `isReady=false`, поэтому стиль будет { opacity: 0 }.
        // После монтирования `isReady=true`, стиль убирается, и управление
        // полностью переходит к `variants` и `controls`.
        style={{ opacity: isReady ? undefined : 0 }}
      >
        <WrappedComponent {...(rest as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
