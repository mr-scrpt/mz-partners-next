import { Variants } from "framer-motion";
import { AnimationStrategyCreator } from "../domain/type";

/**
 * Циклическая стратегия: применяет варианты из списка по кругу.
 * Идеально для чередующихся анимаций (чет/нечет).
 */
export const cyclicalStrategyCreator: AnimationStrategyCreator =
  ({ variantsList }) =>
  (index: number): Variants => {
    // Защита от пустого массива
    if (variantsList.length === 0) return {};
    return variantsList[index % variantsList.length];
  };

/**
 * Последовательная стратегия: применяет варианты по порядку,
 * а для всех последующих элементов использует последний вариант из списка.
 * Идеально для уникальных анимаций первых N элементов.
 */
export const sequentialStrategyCreator: AnimationStrategyCreator =
  ({ variantsList }) =>
  (index: number): Variants => {
    if (variantsList.length === 0) return {};
    // Если индекс в пределах массива, берем по индексу, иначе - последний элемент
    return variantsList[index] || variantsList[variantsList.length - 1];
  };

export const steppedStrategyCreator: AnimationStrategyCreator = ({
  variantsList,
  step = 1, // Задаем значение по умолчанию прямо здесь
}) => {
  if (variantsList.length === 0 || step < 1) {
    return () => ({});
  }

  return (index: number): Variants => {
    const animationIndex = Math.floor(index / step) % variantsList.length;
    return variantsList[animationIndex];
  };
};
