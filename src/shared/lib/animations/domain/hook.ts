import { useScroll } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

interface ViewportOffsets {
  enter: number;
  exit: number;
}

export function useAdvancedInView(
  ref: RefObject<HTMLElement>,
  offsets: ViewportOffsets,
) {
  const [animationState, setAnimationState] = useState("visible");
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    return scrollY.on("change", (latest) => {
      const direction = latest > lastScrollY.current ? "down" : "up";
      lastScrollY.current = latest;

      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const vh = window.innerHeight;

      if (direction === "down") {
        if (rect.top < vh - offsets.enter) {
          setAnimationState("visible");
        }

        if (rect.bottom < offsets.exit) {
          setAnimationState("hidden");
        }
      } else if (direction === "up") {
        if (rect.bottom > offsets.enter) {
          setAnimationState("visible");
        }

        if (rect.top > vh - offsets.exit) {
          setAnimationState("hidden");
        }
      }
    });
  }, [isMounted, ref, offsets, scrollY]);

  return animationState;
}
