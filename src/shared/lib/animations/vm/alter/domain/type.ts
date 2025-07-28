import {
  MotionStyle,
  MotionValue,
  useAnimationControls,
  Variants,
} from "framer-motion";
import { Ref } from "react";

export type AnimationControls = ReturnType<typeof useAnimationControls>;

/**
 * Состояние, возвращаемое триггер-стратегией.
 * Это унифицированный объект, который содержит все возможные данные от триггеров.
 * @property ref - Обязательный ref для отслеживаемого DOM-элемента.
 * @property isActive - Флаг, активна ли анимация (например, от useInView).
 * @property progress - MotionValue с прогрессом (например, от useScrollProgress).
 */

export interface TriggerState {
  ref: Ref<HTMLDivElement>;
  isActive: boolean;
  progress: MotionValue<number> | null;
  // direction?: MotionValue<number>;
  direction?: MotionValue<AnimationZone>;
}

export type TriggerStrategyHook = (options?: any) => TriggerState;

/**
 * Пропсы, которые получает стратегия анимации для вычисления стилей/вариантов.
 * @property triggerState - Состояние от триггер-стратегии.
 * @property index - Порядковый номер анимируемого элемента (для stagger-эффектов).
 * @property animationConfig - Дополнительные параметры для самой анимации.
 */
export interface AnimationStrategyProps {
  triggerState: TriggerState;
  index: number;
  animationConfig?: any;
}

export interface StyleAnimationOutput {
  type: "style";
  style: MotionStyle;
}

export interface ImperativeVariantAnimationOutput {
  type: "imperative";
  variants: Variants;
  initial: string;
  skipInitial?: boolean;
  animate: AnimationControls;
}
export type AnimationOutputProps =
  | StyleAnimationOutput
  | ImperativeVariantAnimationOutput;

export type AnimationStrategy = (
  props: AnimationStrategyProps,
) => AnimationOutputProps;

export interface AnimationContainerConfig {
  triggerStrategy: TriggerStrategyHook;
  animationStrategy: AnimationStrategy;
  triggerConfig?: any;
  animationConfig?: any;
}

export interface AnimationContextValue extends AnimationContainerConfig {
  register: (id: string) => number; // Для получения уникального индекса
}

export enum AnimationDirection {
  Enter = "enter",
  Exit = "exit",
}

export enum AnimationZone {
  Enter = "enter",
  Exit = "exit",
  Visible = "visible",
  Hidden = "hidden",
}
