import { useRef, useCallback, useMemo } from "react";
import { AnimationApplicationStrategy } from "../domain/type";

interface StaggerGroupStateConfig {
  animationStrategy: AnimationApplicationStrategy;
  delayMultiplier?: number;
  resetTimeout?: number;
}

export function useStaggerGroupState({
  animationStrategy,
  delayMultiplier = 0.1,
  resetTimeout = 200,
}: StaggerGroupStateConfig) {
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
      return animationStrategy(index);
    },
    [animationStrategy],
  );

  const requestDelay = useCallback(() => {
    const now = performance.now();
    if (now - lastTime.current > resetTimeout) {
      temporalIndex.current = 0;
    }
    lastTime.current = now;
    const delay = (temporalIndex.current + 1) * delayMultiplier;
    temporalIndex.current++;
    return delay;
  }, [delayMultiplier, resetTimeout]);

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
