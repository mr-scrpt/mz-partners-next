"use client";
import {
  ComponentType,
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
} from "react";
import {
  AnimationApplicationStrategy,
  StaggerGroupContextValue,
} from "../domain/type";
import { useAnimationControls, useInView, motion } from "framer-motion";
import { createStrictContext, useStrictContext } from "../../react";

const StaggerGroupContext = createStrictContext<StaggerGroupContextValue>();
const useStaggerGroup = () => useStrictContext(StaggerGroupContext);

export function withStaggerGroupContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  config: {
    animationStrategy: AnimationApplicationStrategy;
    delayMultiplier?: number;
    resetTimeout?: number;
  },
) {
  const StaggerContainerWrapper: FC<P> = (props) => {
    const registry = useRef(new Map<string, number>()).current;
    const indexCounter = useRef(0);
    const temporalIndex = useRef(0);
    const lastTime = useRef(0);

    const register = useCallback(
      (id: string): number => {
        if (!registry.has(id)) {
          registry.set(id, indexCounter.current);
          indexCounter.current++;
        }
        return registry.get(id)!;
      },
      [registry],
    );

    const getVariants = useCallback(
      (index: number) => {
        return config.animationStrategy(index);
      },
      [config.animationStrategy],
    );

    const requestDelay = useCallback(() => {
      const now = performance.now();
      const delayMultiplier = config.delayMultiplier || 0.1;
      const resetTimeout = config.resetTimeout || 200;

      if (now - lastTime.current > resetTimeout) {
        temporalIndex.current = 0;
      }
      lastTime.current = now;
      const delay = (temporalIndex.current + 1) * delayMultiplier;
      temporalIndex.current++;
      return delay;
    }, [config.delayMultiplier, config.resetTimeout]);

    const contextValue = useMemo(
      () => ({
        register,
        getVariants,
        requestDelay,
      }),
      [register, getVariants, requestDelay],
    );

    return (
      <StaggerGroupContext.Provider value={contextValue}>
        <WrappedComponent {...(props as P)} />
      </StaggerGroupContext.Provider>
    );
  };

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
      if (isInView) {
        const index = register(id);
        const variants = getVariants(index);
        const delay = requestDelay();

        controls.set(variants.hidden);
        controls.start(variants.visible, { delay });
      }
    }, [isInView, id, register, getVariants, requestDelay, controls]);

    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <WrappedComponent {...(rest as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
