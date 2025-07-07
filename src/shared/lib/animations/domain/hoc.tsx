"use client";
import { motion, useInView, Variants } from "framer-motion";
import { ComponentType, FC, HTMLAttributes, useRef } from "react";

// export function withAnimationItemSimple<P extends object>(
//   WrappedComponent: ComponentType<P>,
//   animationVariants: Variants,
// ) {
//   const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
//     const { className, ...restProps } = props;
//
//     return (
//       <motion.div className={className} variants={animationVariants}>
//         <WrappedComponent {...(restProps as P)} />
//       </motion.div>
//     );
//   };
//   return AnimatedComponent;
// }
export function withAnimationItemSimple<P extends object>(
  WrappedComponent: ComponentType<P>,
  animationVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, ...restProps } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // amount: 0.2 означает, что анимация сработает, когда 20% элемента будет видно

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={animationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Анимация зависит от видимости этого конкретного элемента
      >
        <WrappedComponent {...(restProps as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
export function withAnimationItemSelfDelayed<P extends { idx?: number }>( // idx теперь опциональный
  WrappedComponent: ComponentType<P>,
  animationVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const { className, idx, ...restProps } = props;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Создаем кастомный вариант, чтобы добавить динамическую задержку
    const customVariants: Variants = {
      hidden: { ...animationVariants.hidden },
      visible: {
        ...animationVariants.visible,
        transition: {
          ...(animationVariants.visible as any).transition,
          delay: (idx ?? 0) * 0.15, // Добавляем задержку на основе индекса
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={customVariants} // Используем кастомные варианты
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WrappedComponent {...(restProps as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}
export function withAnimationItemAlternating<P extends { idx: number }>(
  WrappedComponent: ComponentType<P>,
  evenVariants: Variants,
  oddVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const variants = props.idx % 2 === 0 ? evenVariants : oddVariants;

    return (
      <motion.div variants={variants}>
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}

// export function withAnimationContainer<P extends object>(
//   WrappedComponent: ComponentType<P>,
//   staggerVariants: Variants,
// ) {
//   const StaggerContainer: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
//     const ref = useRef(null);
//
//     const isInView = useInView(ref, { once: true, amount: 0.1 });
//
//     return (
//       <motion.div
//         ref={ref}
//         variants={staggerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//       >
//         <WrappedComponent {...(props as P)} />
//       </motion.div>
//     );
//   };
//   return StaggerContainer;
// }
// file: ./hoc.ts

export function withAnimationContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
) {
  const StaggerContainer: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    // Больше нет необходимости в useRef и useInView здесь
    return (
      // Мы все еще используем motion.div, чтобы дочерние элементы
      // могли наследовать варианты, но он больше не управляет их запуском.
      // initial и animate здесь не нужны, так как дети сами управляют своим состоянием.
      <motion.div>
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
  return StaggerContainer;
}
