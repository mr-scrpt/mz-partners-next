import { ComponentType } from "react";
import { MotionValue, MotionStyle, Variants } from "framer-motion";

/**
 * Конфигурация для анимаций, управляемых скроллом.
 */
export interface AnimationConfig {
  startPixels?: number;
  endPixels?: number;
  springConfig?: { stiffness?: number; damping?: number; mass?: number };
  effects?: {
    opacity?: [number, number];
    yEnter?: [number, number];
    yExit?: [number, number];
    scale?: [number, number];
  };
}

/**
 * Конфигурация для стратегий анимации на основе вариантов (variants).
 */
export interface VariantStrategyConfig {
  variants: Variants;
  oddVariants?: Variants;
  delayMultiplier?: number;
  delay?: number;
}

/**
 * Конфигурация для элемента, который будет анимирован.
 */
export interface ElementConfig {
  component: ComponentType<any>;
  props?: { [key: string]: any };
  options?: { skipAnimation?: boolean };
}

/**
 * Направление анимации (вход или выход).
 */
export enum AnimationDirection {
  Enter = "enter",
  Exit = "exit",
}

/**
 * Зоны анимации для отслеживания состояния.
 */
export enum AnimationZone {
  Enter = "enter",
  Exit = "exit",
  Visible = "visible",
  Hidden = "hidden",
}

/**
 * Данные для стратегии анимации, управляемой скроллом.
 */
export interface AnimationStrategyPayload {
  progress: MotionValue<number>;
  direction: AnimationDirection;
  config: AnimationConfig;
}

/**
 * Функция, возвращающая стили анимации для скролла.
 */
export type AnimationStrategy = (
  payload: AnimationStrategyPayload,
) => MotionStyle;

/**
 * Пропсы для анимируемого элемента.
 * `idx` является обязательным для корректной работы stagger-анимаций.
 */
export interface ItemAnimationProps {
  idx: number;
}

/**
 * Функция, возвращающая варианты (variants) для компонента.
 */
export type VariantStrategy = (props: ItemAnimationProps) => Variants;

// --- Типы для Stagger-анимаций ---

/**
 * Конфигурация для stagger-контейнера.
 */
export interface StaggerContainerConfig {
  variantsList: Variants[]; // Список вариантов для дочерних элементов
  delayMultiplier?: number; // Коэффициент для задержки
  resetTimeout?: number; // Таймаут для сброса индекса задержки
}

/**
 * Объект с готовыми пропсами для stagger-элемента.
 */
export interface StaggerAnimationProps {
  variants: Variants;
  delay: number;
}

/**
 * Тип функции, предоставляемой Stagger-контекстом.
 * Принимает стабильный индекс элемента и возвращает его анимационные свойства.
 */

export type AnimationApplicationStrategy = (index: number) => Variants;

// ✅ Конфигурация для создания такой стратегии.
export interface AnimationStrategyConfig {
  variantsList: Variants[];
  step?: number;
  // Здесь могут быть и другие параметры для более сложных стратегий
}

// ✅ Создатель стратегии — функция высшего порядка.
export type AnimationStrategyCreator = (
  config: AnimationStrategyConfig,
) => AnimationApplicationStrategy;

// ✅ Контекст будет предоставлять объект с двумя функциями.
export interface StaggerContextValue {
  getVariants: AnimationApplicationStrategy;
  requestDelay: () => number; // Функция запроса задержки
}
export interface StaggerGroupContextValue {
  getAnimationProps: () => {
    variants: Variants;
    delay: number;
  };
}
// ... ItemAnimationProps с обязательным idx остается без изменений
export interface ItemAnimationProps {
  idx: number;
}
export interface SteppedAnimationStrategyConfig {
  variantsList: Variants[];
  step?: number; // Количество раз, которое применяется каждая анимация. По умолчанию 1.
}
