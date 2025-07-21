"use client";

import { motion, Variants, useInView } from "framer-motion";
import {
  ComponentType,
  FC,
  HTMLAttributes,
  useRef,
  useMemo,
  ReactNode,
} from "react";
import { useStagger } from "./animation.provider";

export function withStaggerItem<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...restProps } = props;
    const ref = useRef(null);

    const { getNextIndex, strategy } = useStagger();
    console.log("output_log: withStaggerItem =>>>", getNextIndex(), strategy);

    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const animProps = useMemo(() => {
      const index = getNextIndex();
      return {
        variants: strategy(index),
        delay: index * 0.1,
      };
    }, [getNextIndex, strategy]);

    return (
      <div ref={ref} className={className}>
        {isInView && animProps ? (
          <motion.div
            key="motion-child"
            variants={animProps.variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: animProps.delay }}
          >
            <WrappedComponent {...(restProps as P)} />
          </motion.div>
        ) : (
          <div key="placeholder-child" style={{ opacity: 0 }}>
            <WrappedComponent {...(restProps as P)} />
          </div>
        )}
      </div>
    );
  };
  return AnimatedComponent;
}
