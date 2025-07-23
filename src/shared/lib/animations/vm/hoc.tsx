// "use client";
//
// import { motion, useAnimationControls, useInView } from "framer-motion";
// import {
//   ReactNode,
//   ComponentType,
//   FC,
//   ElementType,
//   useRef,
//   HTMLAttributes,
//   useEffect,
// } from "react";
// import { useInViewAnimation, useScrollProgress } from "./hook";
// import {
//   AnimationStrategy,
//   AnimationConfig,
//   ElementConfig,
//   ItemAnimationProps,
//   VariantStrategy,
//   AnimationApplicationStrategy,
//   AnimationPresetConfig,
// } from "../domain/type";
// import { StaggerProvider, useStagger } from "./animation.provider";
//
// interface WithAnimationOptions {
//   strategy: AnimationStrategy;
//   config?: AnimationConfig;
// }
//
// export function withAnimationToChildrenWrapper<
//   P extends { children: ReactNode },
// >(
//   WrappedComponent: ComponentType<P>,
//   { strategy: useAnimationStrategy, config = {} }: WithAnimationOptions,
// ) {
//   const AnimatedChild: FC<{
//     children: ReactNode;
//     itemAs?: ElementType;
//     className?: string;
//   }> = ({ children, itemAs: Tag = "div", className }) => {
//     const ref = useRef<HTMLDivElement>(null);
//
//     const { progress, direction } = useScrollProgress(ref, config);
//
//     const style = useAnimationStrategy({ progress, direction, config });
//
//     const MotionTag = (motion[Tag as keyof typeof motion] ||
//       motion.div) as ElementType;
//
//     return (
//       <MotionTag ref={ref} style={style} className={className}>
//         {children}
//       </MotionTag>
//     );
//   };
//
//   type AnimatedLayoutProps = Omit<P, "children"> & {
//     elements: ElementConfig[];
//     itemAs?: ElementType;
//     itemClassName?: string;
//   };
//
//   const AnimatedLayoutComponent: FC<AnimatedLayoutProps> = (props) => {
//     const { elements, itemAs, itemClassName, ...restProps } = props;
//     return (
//       <WrappedComponent {...(restProps as unknown as P)}>
//         {elements.map((item, index) => {
//           const { component: Component, props: itemProps, options } = item;
//           if (options?.skipAnimation) {
//             return <Component key={index} {...itemProps} />;
//           }
//           return (
//             <AnimatedChild
//               key={index}
//               itemAs={itemAs}
//               className={itemClassName}
//             >
//               <Component {...itemProps} />
//             </AnimatedChild>
//           );
//         })}
//       </WrappedComponent>
//     );
//   };
//   return AnimatedLayoutComponent;
// }
//
// export function withAnimationItem<P extends ItemAnimationProps>(
//   WrappedComponent: ComponentType<P>,
//   variantStrategy: VariantStrategy,
// ) {
//   const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
//     const { className, ...restProps } = props;
//     const ref = useRef(null);
//
//     const animate = useInViewAnimation(ref);
//
//     const variants = variantStrategy(props);
//
//     return (
//       <motion.div
//         ref={ref}
//         className={className}
//         variants={variants}
//         initial="hidden"
//         animate={animate}
//       >
//         <WrappedComponent {...(restProps as P)} />
//       </motion.div>
//     );
//   };
//   return AnimatedComponent;
// }
//
// export function withStaggerContainer<P extends object>(
//   WrappedComponent: ComponentType<P>,
//   config: AnimationPresetConfig,
// ) {
//   const StaggerContainerWrapper: FC<P> = (props) => {
//     return (
//       <StaggerProvider
//         animationStrategy={config.animationStrategy}
//         resetTimeout={config.resetTimeout}
//         delayMultiplier={config.delayMultiplier}
//       >
//         <WrappedComponent {...(props as P)} />
//       </StaggerProvider>
//     );
//   };
//   return StaggerContainerWrapper;
// }
//
// // ✅ HOC элемента снова становится универсальным и "глупым"
// export function withStaggerItem<P extends ItemAnimationProps>(
//   WrappedComponent: ComponentType<P>,
// ) {
//   const AnimatedComponent: FC<P & HTMLAttributes<HTMLDivElement>> = (props) => {
//     const { className, idx, ...restProps } = props;
//     const ref = useRef(null);
//     const controls = useAnimationControls();
//     const isInView = useInView(ref, { once: true, amount: 0.1 });
//     const { getVariants, requestDelay } = useStagger(); // Получаем оба метода
//
//     if (typeof idx !== "number") {
//       throw new Error(
//         "Component wrapped with withStaggerItem must receive a unique 'idx' prop.",
//       );
//     }
//
//     // 1. Получаем свой вариант анимации, используя свой стабильный idx
//     const variants = getVariants(idx);
//
//     useEffect(() => {
//       if (isInView) {
//         // 2. Запрашиваем свою задержку, когда готовы
//         const delay = requestDelay();
//         // 3. Запускаемся
//         controls.start("visible", { delay });
//       }
//     }, [isInView, controls, requestDelay]);
//
//     return (
//       <motion.div
//         ref={ref}
//         className={className}
//         variants={variants}
//         initial="hidden"
//         animate={controls}
//       >
//         <WrappedComponent {...(restProps as P)} idx={idx} />
//       </motion.div>
//     );
//   };
//   return AnimatedComponent;
// }
