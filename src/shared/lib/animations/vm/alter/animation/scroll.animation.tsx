import { useTransform } from "framer-motion";
import { AnimationStrategy, AnimationZone } from "../domain/type";

export const scrollTransformAnimation: AnimationStrategy = ({
  triggerState,
  animationConfig,
}) => {
  const { progress } = triggerState;
  const {
    opacity = [0, 1],
    y = [50, 0],
    scale = [1, 1],
  } = animationConfig.effects;

  // Используем useTransform для привязки стилей к прогрессу скролла
  const style = {
    opacity: useTransform(progress!, [0, 1], opacity),
    y: useTransform(progress!, [0, 1], y),
    scale: useTransform(progress!, [0, 1], scale),
  };

  return { type: "style", style };
};

export const scrollShiftAnimation: AnimationStrategy = ({
  triggerState,
  animationConfig,
}) => {
  const { progress, direction } = triggerState;
  const {
    opacity = [0, 1],
    yEnter = [50, 0],
    yExit = [-50, 0],
  } = animationConfig.effects || {};

  const opacityValue = useTransform(progress!, [0, 1], opacity);
  const yEnterValue = useTransform(progress!, [0, 1], yEnter);
  const yExitValue = useTransform(progress!, [0, 1], yExit);

  // Теперь `direction` - это MotionValue с номером зоны
  const y = useTransform(direction!, (zone) => {
    // `zone` теперь имеет тип AnimationZone ("enter", "exit", и т.д.)
    // Сравнение абсолютно корректно
    return zone === AnimationZone.Exit ? yExitValue.get() : yEnterValue.get();
  });
  return {
    type: "style",
    style: { opacity: opacityValue, y },
  };
};
