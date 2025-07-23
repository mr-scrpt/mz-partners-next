import { useRef, useCallback, useMemo } from "react";
import { AnimationPresetConfig } from "../../domain/type";
import { useRequestDelay } from "../../lib/useRequestDelay";

export function useStaggerListState({
  animationStrategy,
  delayMultiplier = 0.1,
  resetTimeout = 200,
}: AnimationPresetConfig) {
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
      getVariants,
      requestDelay,
    }),
    [getVariants, requestDelay],
  );

  return contextValue;
}
