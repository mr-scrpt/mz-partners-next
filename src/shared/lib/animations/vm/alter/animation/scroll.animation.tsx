import { useTransform } from "framer-motion";
import {
  AnimationOutputCommonProps,
  AnimationStrategy,
  AnimationZone,
} from "../domain/type";

export const scrollTransformAnimation: AnimationStrategy = ({
  triggerState,
  animationConfig,
}): Partial<AnimationOutputCommonProps> => {
  const { progress } = triggerState;
  const {
    opacity = [0, 1],
    y = [50, 0],
    scale = [1, 1],
  } = animationConfig.effects;

  const style = {
    opacity: useTransform(progress!, [0, 1], opacity),
    y: useTransform(progress!, [0, 1], y),
    scale: useTransform(progress!, [0, 1], scale),
  };

  return { style };
};

export const scrollShiftAnimation: AnimationStrategy = ({
  triggerState,
  animationConfig,
}): Partial<AnimationOutputCommonProps> => {
  const { progress, direction } = triggerState;
  const {
    opacity = [0, 1],
    yEnter = [50, 0],
    yExit = [-50, 0],
  } = animationConfig.effects || {};

  const opacityValue = useTransform(progress!, [0, 1], opacity);
  const yEnterValue = useTransform(progress!, [0, 1], yEnter);
  const yExitValue = useTransform(progress!, [0, 1], yExit);

  const y = useTransform(direction!, (zone) => {
    return zone === AnimationZone.Exit ? yExitValue.get() : yEnterValue.get();
  });
  return {
    style: { opacity: opacityValue, y },
  };
};
