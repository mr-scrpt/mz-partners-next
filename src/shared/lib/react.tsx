"use client";
import {
  Context,
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export function useStrictContext<T>(context: Context<T | null>) {
  const value = useContext(context);
  if (value === null) throw new Error("Strict context not passed");
  return value as T;
}

export function createStrictContext<T>() {
  return createContext<T | null>(null);
}

export function useAppearanceDelay(
  show?: boolean,
  options = {} as {
    defaultValue?: boolean;
    appearenceDelay?: number;
    minDisplay?: number;
  },
) {
  const {
    minDisplay = 500,
    defaultValue = false,
    appearenceDelay = 200,
  } = options;

  const [delayedShow, setDelayedShow] = useState(defaultValue);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(true));
      }, appearenceDelay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        startTransition(() => setDelayedShow(false));
      }, minDisplay);
      return () => clearTimeout(timer);
    }
  }, [appearenceDelay, show, minDisplay]);

  return delayedShow;
}

type Fn<ARGS extends any[], R> = (...args: ARGS) => R;

export function useEventCallback<A extends any[], R>(fn: Fn<A, R>): Fn<A, R> {
  const ref = useRef<Fn<A, R>>(fn);
  useEffect(() => {
    ref.current = fn;
  });
  return useMemo(
    () =>
      (...args: A): R => {
        const { current } = ref;
        return current(...args);
      },
    [],
  );
}

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return {
    isHovered,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
};
