import { ComponentType } from "react";
import { Variants } from "framer-motion";
import { withScrollAnimation } from "./hoc";

/**
 * Фабрика для создания анимированных компонентов.
 * @param animationVariants - Варианты анимации.
 * @returns Функция, которая принимает компонент и возвращает его анимированную версию.
 */
export function createAnimatedComponentFactory(animationVariants: Variants) {
  return function <P extends object>(Component: ComponentType<P>) {
    return withScrollAnimation(Component, animationVariants);
  };
}
