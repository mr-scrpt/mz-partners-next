import { VariantStrategy, VariantStrategyConfig } from "../domain/type";

export type VariantStrategyCreator = (
  config: VariantStrategyConfig,
) => VariantStrategy;

export const simpleVariantStrategy: VariantStrategyCreator =
  ({ variants }) =>
  () =>
    variants;

export const delayedVariantStrategy: VariantStrategyCreator =
  ({ variants, delayMultiplier = 0.15 }) =>
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

export const alternatingVariantStrategy: VariantStrategyCreator =
  ({ variants: even, oddVariants: odd, delay = 0.15 }) =>
  ({ idx = 0 }) => {
    const baseVariant = idx % 2 === 0 ? even : odd || even;
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
