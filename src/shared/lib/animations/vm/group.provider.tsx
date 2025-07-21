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
  // ✅ Один счетчик, который отвечает за всё
  const dynamicIndex = useRef(0);

  const getAnimationProps = useCallback(() => {
    const index = dynamicIndex.current;
    dynamicIndex.current++;
    const delay = index * delayMultiplier;
    const variants = animationStrategy(index);
    return { variants, delay };
  }, [animationStrategy, delayMultiplier]); // Зависимости

  const contextValue: StaggerGroupContextValue = {
    getAnimationProps,
  };

  return (
    <StaggerGroupContext.Provider value={contextValue}>
      {children}
    </StaggerGroupContext.Provider>
  );
};
