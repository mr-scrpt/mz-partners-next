import { useRef, useCallback, useMemo, useId } from "react";
import { useAnimationContext } from "./provider";
import { AnimationContainerConfig } from "../domain/type";

export const useCreateContextData = (config: AnimationContainerConfig) => {
  const registry = useRef(new Map<string, number>()).current;
  const indexCounter = useRef(0);

  const register = useCallback(
    (id: string): number => {
      if (!registry.has(id)) {
        registry.set(id, indexCounter.current++);
      }
      return registry.get(id)!;
    },
    [registry],
  );

  const contextValue = useMemo(
    () => ({
      ...config,
      register,
    }),
    [config, register],
  );

  return { contextValue };
};

export function useAnimationItem() {
  const {
    triggerStrategy,
    triggerConfig,
    animationStrategy,
    animationConfig,
    register,
  } = useAnimationContext();

  const id = useId();

  const index = useMemo(() => register(id), [id, register]);

  const triggerState = triggerStrategy(triggerConfig);

  const animationProps = animationStrategy({
    triggerState,
    index,
    animationConfig,
  });

  const getMotionProps = () => {
    switch (animationProps.type) {
      case "style":
        return { style: animationProps.style };

      case "imperative":
        return {
          variants: animationProps.variants,
          initial: animationProps.skipInitial ? false : animationProps.initial,
          animate: animationProps.animate,
        };
    }
  };

  return {
    ref: triggerState.ref,
    ...getMotionProps(),
  };
}
