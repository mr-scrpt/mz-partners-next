import { ComponentType } from "react";

export interface AnimationConfig {
  startPixels?: number;
  endPixels?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  // ✅ Добавляем объект для настроек конкретных эффектов
  effects?: {
    opacity?: [number, number];
    yEnter?: [number, number];
    yExit?: [number, number];
    scale?: [number, number];
  };
}

// export interface AnimationConfig {
//   startPixels?: number;
//   endPixels?: number;
//   springConfig?: {
//     stiffness?: number;
//     damping?: number;
//     mass?: number;
//   };
// }

export interface ElementConfig {
  component: ComponentType<any>;
  props?: { [key: string]: any };
  options?: {
    skipAnimation?: boolean;
  };
}
export enum AnimationDirection {
  Enter = "enter",
  Exit = "exit",
}

// ✅ Зона, в которой находится элемент, для вычислений
export enum AnimationZone {
  Enter = "enter",
  Exit = "exit",
  Visible = "visible",
  Hidden = "hidden", // Добавим состояние "полностью вне экрана"
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
