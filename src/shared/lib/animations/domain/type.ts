import { ComponentType } from "react";

export interface AnimationConfig {
  startPixels?: number;
  endPixels?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export interface ElementConfig {
  component: ComponentType<any>;
  props?: { [key: string]: any };
  options?: {
    skipAnimation?: boolean;
  };
}

// export interface AnimationConfig {
//   duration?: number;
//   delay?: number;
//   stagger?: number;
//   ease?: string;
//   viewport?: {
//     once?: boolean;
//     margin?: string;
//     amount?: number;
//   };
//
//   // Новые поля для scroll-анимации
//   startPixels?: number;
//   endPixels?: number;
//   springConfig?: {
//     stiffness?: number;
//     damping?: number;
//     mass?: number;
//   };
// }
// export interface AnimationConfig {
//   duration?: number;
//   delay?: number;
//   stagger?: number;
//   ease?: string;
//   viewport?: {
//     once?: boolean;
//     margin?: string;
//     amount?: number;
//   };
// }
