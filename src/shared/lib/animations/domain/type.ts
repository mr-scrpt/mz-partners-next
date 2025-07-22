import { ComponentType } from "react";
import { MotionValue, MotionStyle, Variants } from "framer-motion";

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

export interface VariantStrategyConfig {
  variants: Variants;
  oddVariants?: Variants;
  delayMultiplier?: number;
  delay?: number;
}

export interface ElementConfig {
  component: ComponentType<any>;
  props?: { [key: string]: any };
  options?: { skipAnimation?: boolean };
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

export interface AnimationStrategyPayload {
  progress: MotionValue<number>;
  direction: AnimationDirection;
  config: AnimationConfig;
}

export type AnimationStrategy = (
  payload: AnimationStrategyPayload,
) => MotionStyle;

export interface ItemAnimationProps {
  idx: number;
}

export type VariantStrategy = (props: ItemAnimationProps) => Variants;

export interface StaggerContainerConfig {
  variantsList: Variants[];
  delayMultiplier?: number;
  resetTimeout?: number;
}

export interface StaggerAnimationProps {
  variants: Variants;
  delay: number;
}

export type AnimationApplicationStrategy = (index: number) => Variants;

export interface AnimationStrategyConfig {
  variantsList: Variants[];
  step?: number;
}

export type AnimationStrategyCreator = (
  config: AnimationStrategyConfig,
) => AnimationApplicationStrategy;

export interface StaggerContextValue {
  getVariants: AnimationApplicationStrategy;
  requestDelay: () => number;
}

export interface ItemAnimationProps {
  idx: number;
}
export interface SteppedAnimationStrategyConfig {
  variantsList: Variants[];
  step?: number;
}

export interface StaggerGroupContextValue {
  register: (id: string) => number; // Регистрирует ID и возвращает стабильный индекс
  getVariants: (index: number) => Variants;
  requestDelay: () => number;
}
