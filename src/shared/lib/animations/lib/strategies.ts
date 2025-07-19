import { useTransform, MotionValue, MotionStyle } from "framer-motion";

interface AnimationStrategyPayload {
  progress: MotionValue<number>;
  direction: AnimationDirection;
  config: AnimationConfig;
}

export type AnimationStrategy = (
  payload: AnimationStrategyPayload,
) => MotionStyle;

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

export const animationScrollScaleOpacityStrategy: AnimationStrategy = ({
  progress,
  config,
}) => {
  const { opacity = [0.5, 1], scale = [0.9, 1] } = config.effects || {};

  const opacityValue = useTransform(progress, [0, 1], opacity);
  const scaleValue = useTransform(progress, [0, 1], scale);

  return { opacity: opacityValue, scale: scaleValue };
};

import { Variants } from "framer-motion";
import { AnimationDirection, AnimationConfig } from "../domain/type";

export interface ItemAnimationProps {
  idx?: number;
}

export type VariantStrategy = (props: ItemAnimationProps) => Variants;

export const simpleVariantStrategy =
  (variants: Variants): VariantStrategy =>
  () =>
    variants;

export const delayedVariantStrategy =
  (variants: Variants, delayMultiplier = 0.15): VariantStrategy =>
  ({ idx = 0 }) => ({
    hidden: { ...variants.hidden },
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any)?.transition,
        delay: idx * delayMultiplier,
      },
    },
  });

export const alternatingVariantStrategy =
  (even: Variants, odd: Variants, delay = 0.15): VariantStrategy =>
  ({ idx = 0 }) => {
    const baseVariant = idx % 2 === 0 ? even : odd;
    return {
      hidden: { ...baseVariant.hidden },
      visible: {
        ...baseVariant.visible,
        transition: {
          ...(baseVariant.visible as any)?.transition,
          delay,
        },
      },
    };
  };
