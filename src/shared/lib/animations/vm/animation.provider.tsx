"use client";

import { FC, ReactNode, useRef } from "react";
import { createStrictContext, useStrictContext } from "../../react";
import {
  StaggerContextValue,
  AnimationApplicationStrategy,
} from "../domain/type";

const StaggerContext = createStrictContext<StaggerContextValue>();

export const useStagger = () => useStrictContext(StaggerContext);

interface StaggerProviderProps {
  children: ReactNode;
  resetTimeout?: number;
  delayMultiplier?: number;
  // Провайдер принимает готовую стратегию
  animationStrategy: AnimationApplicationStrategy;
}

export const StaggerProvider: FC<StaggerProviderProps> = ({
  children,
  resetTimeout = 200,
  delayMultiplier = 0.1,
  animationStrategy,
}) => {
  const temporalIndex = useRef(0);
  const lastTime = useRef(0);

  const requestDelay = (): number => {
    // Эта логика уже отлажена и устойчива к Strict Mode
    const now = performance.now();
    if (now - lastTime.current > resetTimeout) {
      temporalIndex.current = 0;
    }
    lastTime.current = now;
    const delay = temporalIndex.current * delayMultiplier;
    temporalIndex.current++;
    return delay;
  };

  const contextValue: StaggerContextValue = {
    getVariants: animationStrategy,
    requestDelay,
  };

  return (
    <StaggerContext.Provider value={contextValue}>
      {children}
    </StaggerContext.Provider>
  );
};
