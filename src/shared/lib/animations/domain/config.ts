// src/shared/lib/animations/domain/config.ts

import { AnimationConfig } from "./type";

// Конфиг для основной анимации (сдвиг)
export const scrollShiftOpacityPrimaryConfig: AnimationConfig = {
  startPixels: 20,
  endPixels: 250,
  springConfig: { stiffness: 80, damping: 25 },
  effects: {
    opacity: [0, 1],
    yEnter: [50, 0],
    yExit: [-50, 0],
  },
};

// Конфиг для вторичной анимации (масштаб)
export const scrollScaleOpacityPrimaryConfig: AnimationConfig = {
  startPixels: 50,
  endPixels: 350,
  springConfig: { stiffness: 100, damping: 20 },
  effects: {
    opacity: [0.5, 1],
    scale: [0.9, 1],
  },
};
