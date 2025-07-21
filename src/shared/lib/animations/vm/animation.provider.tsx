import { FC, ReactNode, useRef, useCallback } from "react";
import { createStrictContext, useStrictContext } from "../../react";
import { AnimationSelectionStrategy } from "../factory/strategy.factory";

interface StaggerContextPayload {
  getNextIndex: () => number;
  strategy: AnimationSelectionStrategy;
}

const StaggerContext = createStrictContext<StaggerContextPayload>();

export const useStagger = () => useStrictContext(StaggerContext);

export const StaggerProvider: FC<{
  children: ReactNode;
  strategy: AnimationSelectionStrategy;
}> = ({ children, strategy }) => {
  const index = useRef(0);

  // ✅ Простая функция-счетчик
  const getNextIndex = useCallback(() => {
    const currentIndex = index.current;
    index.current++;
    return currentIndex;
  }, []);

  return (
    <StaggerContext.Provider value={{ getNextIndex, strategy }}>
      {children}
    </StaggerContext.Provider>
  );
};
