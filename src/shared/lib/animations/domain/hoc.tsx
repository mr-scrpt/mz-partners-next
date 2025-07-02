"use client";
import { motion, useInView, Variants } from "framer-motion";
import { ComponentType, FC, useRef, HTMLAttributes } from "react";

// HOC №1: Для отдельных элементов
export function withEntranceAnimation<P extends object>(
  WrappedComponent: ComponentType<P>,
  animationVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const { className, ...restProps } = props;

    return (
      <motion.div
        ref={ref}
        className={className}
        variants={animationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <WrappedComponent {...(restProps as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}

// HOC №2: Для контейнеров, управляющих дочерними анимациями
export function withStaggerContainer<P extends object>(
  WrappedComponent: ComponentType<P>,
  staggerVariants: Variants,
) {
  const StaggerContainer: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    // Этот HOC просто оборачивает компонент в motion.div с нужными
    // вариантами для управления дочерними элементами.
    return (
      <motion.div
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
  return StaggerContainer;
}

export function withAlternatingAnimation<P extends { idx: number }>(
  WrappedComponent: ComponentType<P>,
  evenVariants: Variants,
  oddVariants: Variants,
) {
  const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Получаем idx из пропсов
    const { className, idx } = props;

    // Выбираем нужный вариант анимации в зависимости от четности индекса
    const isEven = idx % 2 === 0;
    const variants = isEven ? evenVariants : oddVariants;

    return (
      <motion.div
        ref={ref}
        className={className}
        // Используем выбранные варианты
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Передаем все исходные пропсы дальше */}
        <WrappedComponent {...(props as P)} />
      </motion.div>
    );
  };
  return AnimatedComponent;
}

// import { motion, useInView, Variants } from "framer-motion";
// import { ComponentType, FC, useRef, HTMLAttributes } from "react";
//
// // Определяем пропсы, которые будет принимать наш анимированный компонент
// interface WithScrollAnimationProps extends HTMLAttributes<HTMLDivElement> {
//   // Мы можем добавить сюда любые кастомные пропсы для управления анимацией,
//   // например, задержку, длительность и т.д.
// }
//
// /**
//  * HOC, который добавляет анимацию появления при скролле к любому компоненту.
//  * @param WrappedComponent - Компонент, который нужно анимировать.
//  * @param animationVariants - Объект с вариантами анимации для framer-motion.
//  */
// export function withScrollAnimation<P extends object>(
//   WrappedComponent: ComponentType<P>,
//   animationVariants: Variants,
// ) {
//   const AnimatedComponent: FC<P & WithScrollAnimationProps> = (props) => {
//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, amount: 0.2 });
//
//     // Извлекаем className из пропсов, чтобы применить его к обертке
//     const { className, ...restProps } = props as WithScrollAnimationProps;
//
//     return (
//       <motion.div
//         ref={ref}
//         className={className} // Применяем стили от родителя к motion-обертке
//         variants={animationVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//       >
//         <WrappedComponent {...(restProps as P)} />
//       </motion.div>
//     );
//   };
//
//   return AnimatedComponent;
// }
