// src/shared/lib/animations/domain/strategies.ts

import { useTransform, MotionValue, MotionStyle } from "framer-motion";
import { AnimationConfig, AnimationDirection } from "./type";

// ✅ Создаем интерфейс для объекта с аргументами
interface AnimationStrategyPayload {
  progress: MotionValue<number>;
  direction: AnimationDirection;
  config: AnimationConfig;
}

// ✅ Обновляем тип, чтобы он принимал один объект
export type AnimationStrategy = (
  payload: AnimationStrategyPayload,
) => MotionStyle;

/**
 * Стратегия анимации: появление со сдвигом по оси Y.
 */
export const animationScrollShiftOpacityStrategy: AnimationStrategy = ({
  progress,
  direction,
  config,
}) => {
  const {
    opacity = [0, 1],
    yEnter = [50, 0],
    yExit = [-50, 0],
  } = config.effects || {};

  const opacityValue = useTransform(progress, [0, 1], opacity);
  const yEnterValue = useTransform(progress, [0, 1], yEnter);
  const yExitValue = useTransform(progress, [0, 1], yExit);
  const y = direction === AnimationDirection.Exit ? yExitValue : yEnterValue;

  return { opacity: opacityValue, y };
};

/**
 * Стратегия анимации: появление с увеличением размера.
 */
export const animationScrollScaleOpacityStrategy: AnimationStrategy = ({
  progress,
  config,
}) => {
  const { opacity = [0.5, 1], scale = [0.9, 1] } = config.effects || {};

  const opacityValue = useTransform(progress, [0, 1], opacity);
  const scaleValue = useTransform(progress, [0, 1], scale);

  return { opacity: opacityValue, scale: scaleValue };
};
