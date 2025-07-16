// Поместите этот обновленный интерфейс в файл, где определяются ваши типы
export interface AnimationConfig {
  // Старые поля (если они еще нужны)
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };

  // Новые поля для scroll-анимации
  startPixels?: number;
  endPixels?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
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
// }

export interface TeamItemAnimationConfig extends AnimationConfig {
  slideDistance?: number;
  scaleFrom?: number;
  enableHover?: boolean;
  hoverScale?: number;
}
