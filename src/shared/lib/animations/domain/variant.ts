import { Variants } from "framer-motion";

// Анимация для контейнера списка (появление дочерних элементов с задержкой)
export const staggerContainerDelayed: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Задержка между появлением каждого дочернего элемента
    },
  },
};

export const staggerContainerImmediately: Variants = {};

// Анимация для элементов списка (появление снизу вверх с проявлением)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Другой пример анимации: появление слева
// export const slideInLeft: Variants = {
//   hidden: {
//     opacity: 0,
//     x: -100,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.7,
//       ease: "circOut",
//     },
//   },
// };

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Анимация выезда справа
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
// import { Variants } from "framer-motion";
// import { AnimationConfig, TeamItemAnimationConfig } from "./type";
//
// export const createListVariants = (config: AnimationConfig = {}): Variants => {
//   const { duration = 0.6, stagger = 0.2, delay = 0.1 } = config;
//
//   return {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration,
//         staggerChildren: stagger,
//         delayChildren: delay,
//       },
//     },
//   };
// };
//
// export const createItemVariants = (
//   isEven: boolean,
//   config: TeamItemAnimationConfig = {},
// ): Variants => {
//   const { duration = 0.6, slideDistance = 100, scaleFrom = 0.8 } = config;
//
//   return {
//     hidden: {
//       opacity: 0,
//       x: isEven ? -slideDistance : slideDistance,
//       scale: scaleFrom,
//     },
//     visible: {
//       opacity: 1,
//       x: 0,
//       scale: 1,
//       transition: {
//         duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };
//
// export const createImageVariants = (config: AnimationConfig = {}): Variants => {
//   const { duration = 0.5, delay = 0.2 } = config;
//
//   return {
//     hidden: {
//       opacity: 0,
//       scale: 0.5,
//       rotate: -10,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         duration,
//         delay,
//         ease: "backOut",
//       },
//     },
//   };
// };
//
// export const createContentVariants = (
//   config: AnimationConfig = {},
// ): Variants => {
//   const { duration = 0.5, delay = 0.3, stagger = 0.1 } = config;
//
//   return {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration,
//         delay,
//         staggerChildren: stagger,
//       },
//     },
//   };
// };
//
// export const createTextVariants = (config: AnimationConfig = {}): Variants => {
//   const { duration = 0.4 } = config;
//
//   return {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration },
//     },
//   };
// };
