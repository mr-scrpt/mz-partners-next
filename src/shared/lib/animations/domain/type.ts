import { ComponentType } from "react";

export interface AnimationConfig {
  startPixels?: number;
  endPixels?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };

  effects?: {
    opacity?: [number, number];
    yEnter?: [number, number];
    yExit?: [number, number];
    scale?: [number, number];
  };
}

export interface ElementConfig {
  component: ComponentType<any>;
  props?: { [key: string]: any };
  options?: {
    skipAnimation?: boolean;
  };
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
