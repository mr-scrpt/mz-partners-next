export const BUTTON_VARIANT = {
  PRIMARY: "primary",
  PRIMARY_INVERTED: "primary-inverted",
  DESTRUCTIVE: "destructive",
  OUTLINE: "outline",
  SECONDARY: "secondary",
  GHOST: "ghost",
  LINK: "link",
} as const;

export type ButtonVariant =
  | "primary"
  | "primary-inverted"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type ButtonSize = "s" | "m" | "l" | "xl";
export const BUTTON_SIZE = {
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
} as const;
