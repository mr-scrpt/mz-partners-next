import { motion } from "framer-motion";
import { ComponentType, FC, HTMLAttributes, useRef } from "react";
import { useInViewAnimation } from "./hook";
import { VariantStrategy, ItemAnimationProps } from "./strategies";

export function withAnimationItem<P extends ItemAnimationProps>(
  WrappedComponent: ComponentType<P>,
  variantStrategy: VariantStrategy,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...restProps } = props;
    const ref = useRef(null);

    const animate = useInViewAnimation(ref);

    const variants = variantStrategy(props);

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={variants}
        initial="hidden"
        animate={animate}
      >
        <WrappedComponent {...(restProps as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
