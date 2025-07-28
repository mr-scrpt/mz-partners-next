"use client";
import { useCallback, useRef } from "react";

export const useRequestDelay = ({
  delayMultiplier = 0.1,
  resetTimeout = 200,
}) => {
  const temporalIndex = useRef(0);
  const lastTime = useRef(0);

  const requestDelay = useCallback((): number => {
    const now = performance.now();
    if (now - lastTime.current > resetTimeout) {
      temporalIndex.current = 0;
    }
    lastTime.current = now;
    const delay = (temporalIndex.current + 1) * delayMultiplier;
    temporalIndex.current++;
    return delay;
  }, [delayMultiplier, resetTimeout]);

  return {
    requestDelay,
  };
};
