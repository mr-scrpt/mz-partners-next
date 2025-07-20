"use client";

import { FC, ReactNode, useRef } from "react";
import { createStrictContext, useStrictContext } from "../../react";

const StaggerContext = createStrictContext<() => number>();

export const useStagger = () => useStrictContext(StaggerContext);

interface StaggerProviderProps {
  children: ReactNode;
  resetTimeout?: number;
}

export const StaggerProvider: FC<StaggerProviderProps> = ({
  children,
  resetTimeout = 200,
}) => {
  const index = useRef(0);
  const lastTime = useRef(0);

  const getNextIndex = () => {
    const now = performance.now();
    if (now - lastTime.current > resetTimeout) {
      index.current = 0;
    }
    lastTime.current = now;
    return index.current++;
  };

  // ✅ Шаг 3: Логика провайдера остается без изменений.
  // Он, как и раньше, передает реальное значение.
  return (
    <StaggerContext.Provider value={getNextIndex}>
      {children}
    </StaggerContext.Provider>
  );
};
