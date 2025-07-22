"use client";

import { ReactNode, FC, useRef, useCallback, useMemo } from "react";
import { createStrictContext, useStrictContext } from "../../react";
import {
  StaggerGroupContextValue,
  AnimationApplicationStrategy,
} from "../domain/type";

const StaggerGroupContext = createStrictContext<StaggerGroupContextValue>();

export const useStaggerGroup = () => useStrictContext(StaggerGroupContext);

interface StaggerGroupProviderProps {
  children: ReactNode;
  delayMultiplier?: number;
  resetTimeout?: number; // Сохраняем для полной симметрии
  animationStrategy: AnimationApplicationStrategy;
}

export const StaggerGroupProvider: FC<StaggerGroupProviderProps> = ({
  children,
  delayMultiplier = 0.1,
  resetTimeout = 200, // Сохраняем для симметрии
  animationStrategy,
}) => {
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
    (index: number) => animationStrategy(index),
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
  }, [resetTimeout, delayMultiplier]);

  const contextValue = useMemo(
    () => ({ register, getVariants, requestDelay }),
    [register, getVariants, requestDelay],
  );

  return (
    <StaggerGroupContext.Provider value={contextValue}>
      {children}
    </StaggerGroupContext.Provider>
  );
};
