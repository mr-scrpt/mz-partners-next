import { AnimationZone, AnimationConfig } from "./type";

export const mapRange = (
  input: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number,
): number => {
  const clampedInput = Math.max(inputMin, Math.min(input, inputMax));
  return (
    ((clampedInput - inputMin) * (outputMax - outputMin)) /
      (inputMax - inputMin) +
    outputMin
  );
};

interface ScrollUpdate {
  progress: number;
  zone: AnimationZone;
}

export function calculateScrollUpdate(
  rect: DOMRect,
  viewportHeight: number,
  config: AnimationConfig,
): ScrollUpdate {
  const { startPixels = 20, endPixels = 200 } = config;

  const enterZoneStart = viewportHeight - startPixels;
  const enterZoneEnd = viewportHeight - endPixels;
  const exitZoneStart = endPixels;
  const exitZoneEnd = 0;

  const rules: {
    condition: boolean;
    result: () => ScrollUpdate;
  }[] = [
    {
      condition: rect.top >= enterZoneEnd && rect.top <= enterZoneStart,
      result: () => ({
        progress: mapRange(rect.top, enterZoneEnd, enterZoneStart, 1, 0),
        zone: AnimationZone.Enter,
      }),
    },
    {
      condition: rect.bottom >= exitZoneEnd && rect.bottom <= exitZoneStart,
      result: () => ({
        progress: mapRange(rect.bottom, exitZoneEnd, exitZoneStart, 0, 1),
        zone: AnimationZone.Exit,
      }),
    },
    {
      condition: rect.top < enterZoneEnd && rect.bottom > exitZoneStart,
      result: () => ({
        progress: 1,
        zone: AnimationZone.Visible,
      }),
    },
  ];

  const matchedRule = rules.find((rule) => rule.condition);

  return matchedRule
    ? matchedRule.result()
    : { progress: 0, zone: AnimationZone.Hidden };
}
