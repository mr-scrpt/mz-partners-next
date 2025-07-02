// animation/types.ts

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number;
  };
}

export interface TeamItemAnimationConfig extends AnimationConfig {
  slideDistance?: number;
  scaleFrom?: number;
  enableHover?: boolean;
  hoverScale?: number;
}
