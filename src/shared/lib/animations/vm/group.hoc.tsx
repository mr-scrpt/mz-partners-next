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
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const { getAnimationProps } = useStaggerGroup();

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
      setIsMounted(true);
    }, []);

    const { variants, delay } = useMemo(
      () => getAnimationProps(),
      [getAnimationProps],
    );

    useEffect(() => {
      // Эта логика теперь будет работать, потому что isInView станет true
      if (isInView && isMounted) {
        controls.start("visible", { delay });
      }
    }, [isInView, isMounted, controls, delay]);

    // ✅ Ключевое изменение: рендерим div-пустышку вместо null
    if (!isMounted) {
      // Этот div нужен, чтобы занять место в макете и дать "якорь" для ref.
      // useInView начнет отслеживать его сразу же.
      return <div ref={ref} className={className} />;
    }

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <WrappedComponent {...(rest as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
