import { useRef, useCallback, useMemo } from "react";
import { AnimationPresetConfig } from "../../domain/type";
import { useRequestDelay } from "../../lib/useRequestDelay";

export function useStaggerGroupState({
  animationStrategy,
  delayMultiplier = 0.1,
  resetTimeout = 200,
}: AnimationPresetConfig) {
  const registry = useRef(new Map<string, number>()).current;
  const indexCounter = useRef(0);

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
      return animationStrategy(index);
    },
    [animationStrategy],
  );

  const { requestDelay } = useRequestDelay({
    delayMultiplier,
    resetTimeout,
  });

  const contextValue = useMemo(
    () => ({
      register,
      getVariants,
      requestDelay,
    }),
    [register, getVariants, requestDelay],
  );

  return contextValue;
}
