import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useRef } from "react";
import {
  AnimationStrategy,
  AnimationZone,
  TriggerStrategyHook,
} from "../domain/type";
import { calculateScrollUpdate, mapRange } from "../../../lib/helpers";
import { useEdgeAnimation } from "../vm/animatin.hook";
interface ZoneAnimationConfig {
  startPixels?: number;
  endPixels?: number;
  springConfig?: object;
  effects?: {
    opacity?: [number, number];
    yEnter?: [number, number];
    yExit?: [number, number];
  };
}

export function useZoneAnimation(
  ref: React.RefObject<HTMLElement | null>,
  config: ZoneAnimationConfig = {},
) {
  // --- 1. Извлекаем настройки ---
  const { springConfig, effects = {} } = config;
  const {
    opacity: opacityRange = [0, 1],
    yEnter = [50, 0], // e.g. [откуда, куда]
    yExit = [0, -50], // e.g. [откуда, куда]
  } = effects;

  // --- 2. Создаем MotionValues, которые будем анимировать ---
  const opacity = useMotionValue(opacityRange[0]);
  const y = useMotionValue(yEnter[0]); // Начинаем с начальной точки "появления"

  // --- 3. Логика расчета, как в вашем оригинальном хуке ---
  const { scrollY } = useScroll();
  useEffect(() => {
    const handleUpdate = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const { progress, zone } = calculateScrollUpdate(rect, vh, config);

      // --- 4. КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: Плавное обновление Y и Opacity ---
      // Мы не переключаем анимации, а вычисляем конкретное значение
      // для текущей зоны и прогресса.

      const newOpacity = mapRange(
        progress,
        0,
        1,
        opacityRange[0],
        opacityRange[1],
      );
      opacity.set(newOpacity);

      let newY;
      if (zone === AnimationZone.Enter) {
        newY = mapRange(progress, 0, 1, yEnter[0], yEnter[1]);
      } else if (zone === AnimationZone.Exit) {
        newY = mapRange(progress, 0, 1, yExit[0], yExit[1]);
      } else if (zone === AnimationZone.Visible) {
        newY = yEnter[1]; // Конечное положение после появления
      } else {
        // Hidden
        // Возвращаем в исходное положение в зависимости от того, где элемент
        newY = rect.top > vh ? yEnter[0] : yExit[1];
      }
      y.set(newY);
    };

    const timeoutId = setTimeout(handleUpdate, 16);
    const unsubscribeScroll = scrollY.on("change", handleUpdate);
    window.addEventListener("resize", handleUpdate);

    return () => {
      clearTimeout(timeoutId);
      unsubscribeScroll();
      window.removeEventListener("resize", handleUpdate);
    };
  }, [ref, config, scrollY, opacity, y]);

  // --- 5. Применяем Spring-физику к финальным значениям ---
  const smoothOpacity = useSpring(opacity, springConfig);
  const smoothY = useSpring(y, springConfig);

  return { style: { opacity: smoothOpacity, y: smoothY } };
}

export const useSimpleScrollTrigger: TriggerStrategyHook = () => {
  const ref = useRef<HTMLElement>(null);

  // Все, что он делает, — это возвращает объект с ref.
  // Никаких вычислений здесь нет.
  return {
    ref,
    isActive: true,
    progress: null,
    direction: undefined,
  };
};
export const edgeBasedScrollAnimation: AnimationStrategy = ({
  triggerState,
  animationConfig,
}) => {
  const { style } = useEdgeAnimation(triggerState.ref, animationConfig);
  return { type: "style", style };
};

export const zoneBasedScrollAnimation: AnimationStrategy = ({
  triggerState,
  animationConfig,
}) => {
  // Вся сложная логика инкапсулирована в одном хуке
  const { style } = useZoneAnimation(triggerState.ref, animationConfig);

  return { type: "style", style };
};

// export const useZoneScrollTrigger: TriggerStrategyHook = (options?: {
//   startPixels?: number;
//   endPixels?: number;
//   springConfig?: object;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll();
//
//   const progress = useMotionValue(0);
//   const direction = useMotionValue(AnimationZone.Hidden);
//
//   // ✅ ШАГ 1: Создаем общую функцию для обновления состояния
//   const handleUpdate = () => {
//     if (!ref.current) return;
//
//     const rect = ref.current.getBoundingClientRect();
//     const vh = window.innerHeight;
//     const { progress: newProgress, zone } = calculateScrollUpdate(
//       rect,
//       vh,
//       options || {},
//     );
//
//     progress.set(newProgress);
//     direction.set(zone);
//   };
//
//   // ✅ ШАГ 2: Добавляем блок для начального расчета при монтировании
//   useEffect(() => {
//     // Эта функция будет вызвана один раз после того, как компонент будет отрендерен
//     handleUpdate();
//   }, []); // Пустой массив зависимостей означает "запустить один раз"
//
//   // ✅ ШАГ 3: Оставляем обработчик для обновлений во время скролла
//   useMotionValueEvent(scrollY, "change", handleUpdate);
//
//   const smoothProgress = useSpring(progress, options?.springConfig);
//
//   return {
//     ref,
//     isActive: true,
//     progress: smoothProgress,
//     direction,
//   };
// };

// export const useZoneScrollTrigger: TriggerStrategyHook = (options?: {
//   startPixels?: number;
//   endPixels?: number;
//   springConfig?: object;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll();
//
//   const progress = useMotionValue(0);
//
//   const direction = useMotionValue(AnimationZone.Hidden);
//
//   useMotionValueEvent(scrollY, "change", () => {
//     if (!ref.current) return;
//
//     const rect = ref.current.getBoundingClientRect();
//     const vh = window.innerHeight;
//
//     const { progress: newProgress, zone } = calculateScrollUpdate(
//       rect,
//       vh,
//       options || {},
//     );
//
//     progress.set(newProgress);
//     direction.set(zone);
//   });
//
//   const smoothProgress = useSpring(progress, options?.springConfig);
//
//   return {
//     ref,
//     isActive: true,
//     progress: smoothProgress,
//     direction,
//   };
// };
