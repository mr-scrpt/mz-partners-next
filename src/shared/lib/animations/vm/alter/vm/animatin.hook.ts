import {
  MotionValue,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

// Утилита для вычисления и ограничения прогресса
const calculateProgress = (
  value: number,
  rangeStart: number,
  rangeEnd: number,
) => {
  const progress = (value - rangeStart) / (rangeEnd - rangeStart);
  return Math.max(0, Math.min(1, progress));
};

export function useEdgeAnimation(
  ref: React.RefObject<HTMLElement | null>,
  config: any = {},
) {
  const {
    startPixels = 20,
    endPixels = 250,
    springConfig,
    effects = {},
  } = config;
  const {
    opacity: opacityRange = [0, 1],
    yEnter: yEnterRange = [50, 0],
    yExit: yExitRange = [0, -50],
    scale: scaleRange = [1, 1],
  } = effects;

  const enterProgress = useMotionValue(0);
  const exitProgress = useMotionValue(0);

  const { scrollY } = useScroll();
  useEffect(() => {
    const handleUpdate = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Рассчитываем прогресс для нижнего края (появление)
      const enterStart = vh - startPixels;
      const enterEnd = vh - endPixels;
      const currentEnterProgress =
        1 - calculateProgress(rect.top, enterEnd, enterStart);
      enterProgress.set(currentEnterProgress);

      // Рассчитываем прогресс для верхнего края (исчезновение)
      const exitStart = endPixels;
      const exitEnd = startPixels;
      const currentExitProgress = calculateProgress(
        rect.bottom,
        exitStart,
        exitEnd,
      );
      exitProgress.set(currentExitProgress);
    };

    // Та же логика для инициализации и обновлений
    const timeoutId = setTimeout(handleUpdate, 16);
    const unsubscribeScroll = scrollY.on("change", handleUpdate);
    window.addEventListener("resize", handleUpdate);
    return () => {
      clearTimeout(timeoutId);
      unsubscribeScroll();
      window.removeEventListener("resize", handleUpdate);
    };
  }, [ref, config, scrollY]);

  // Применяем spring-физику к каждому прогрессу отдельно
  const smoothEnterProgress = useSpring(enterProgress, springConfig);
  const smoothExitProgress = useSpring(exitProgress, springConfig);

  // --- Создаем анимации на основе каждого прогресса ---

  // 1. Анимация Появления (работает только внизу экрана)
  const yFromEnter: MotionValue<number> = useTransform(
    smoothEnterProgress,
    [0, 1],
    yEnterRange,
  );
  const opacityFromEnter: MotionValue<number> = useTransform(
    smoothEnterProgress,
    [0, 1],
    opacityRange,
  );
  const scaleFromEnter: MotionValue<number> = useTransform(
    smoothEnterProgress,
    [0, 1],
    [scaleRange[0], 1],
  );

  // 2. Анимация Исчезновения
  // ✅ ИСПРАВЛЕНО: Добавляем : MotionValue<number>
  const yFromExit: MotionValue<number> = useTransform(
    smoothExitProgress,
    [0, 1],
    yExitRange,
  );
  const opacityFromExit: MotionValue<number> = useTransform(
    smoothExitProgress,
    [0, 1],
    [1, opacityRange[0]],
  );
  const scaleFromExit: MotionValue<number> = useTransform(
    smoothExitProgress,
    [0, 1],
    [1, scaleRange[0]],
  );

  // --- Объединяем эффекты (этот код теперь будет работать без ошибок) ---

  const opacity = useTransform(
    [opacityFromEnter, opacityFromExit],
    // ✅ ИСПРАВЛЕНО: Явно типизируем входящий массив
    (latest: number[]) => {
      const [latestEnter, latestExit] = latest;
      return Math.min(latestEnter, latestExit);
    },
  );

  const y = useTransform(
    [yFromEnter, yFromExit],
    // ✅ ИСПРАВЛЕНО: Явно типизируем входящий массив
    (latest: number[]) => {
      const [latestEnter, latestExit] = latest;
      return latestEnter + latestExit;
    },
  );

  const scale = useTransform(
    [scaleFromEnter, scaleFromExit],
    // ✅ ИСПРАВЛЕНО: Явно типизируем входящий массив
    (latest: number[]) => {
      const [latestEnter, latestExit] = latest;
      return Math.min(latestEnter, latestExit);
    },
  );

  return { style: { opacity, y, scale } };
}
