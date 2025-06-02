export const BUTTON_VARIANT = {
  PRIMARY: "primary",
  PRIMARY_INVERTED: "primary-inverted",
  DESTRUCTIVE: "destructive",
  OUTLINE: "outline",
  SECONDARY: "secondary",
  GHOST: "ghost",
  LINK: "link",
  ICON: "icon",
} as const;


export const BUTTON_SIZE = {
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
  ICON: "icon",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANT;
export type ButtonSize = keyof typeof BUTTON_SIZE;

