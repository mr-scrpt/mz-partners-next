"use client";

import { ReactNode, FC, useRef, useCallback } from "react";
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
  animationStrategy: AnimationApplicationStrategy;
}
interface StaggerGroupProviderProps {
  children: ReactNode;
  delayMultiplier?: number;
  animationStrategy: AnimationApplicationStrategy;
}

export const StaggerGroupProvider: FC<StaggerGroupProviderProps> = ({
  children,
  delayMultiplier = 0.1,
  animationStrategy,
}) => {
  const indexCounter = useRef(0);
  const registry = useRef(new Map<string, number>()).current;

  const register = useCallback(
    (id: string) => {
      if (!registry.has(id)) {
        registry.set(id, indexCounter.current);
        indexCounter.current++;
      }
    },
    [registry],
  );

  const getAnimationProps = useCallback(
    (id: string) => {
      const index = registry.get(id) ?? 0;
      const delay = (index + 1) * delayMultiplier;
      const variants = animationStrategy(index);
      return { variants, delay };
    },
    [animationStrategy, delayMultiplier, registry],
  );

  return (
    <StaggerGroupContext.Provider value={{ register, getAnimationProps }}>
      {children}
    </StaggerGroupContext.Provider>
  );
};
