export const TITLE_VIEW = {
  PRIMARY: "primary",
  PRIMARY_INVERTED: "primary_invert",
  SECONDARY: "secondary",
} as const;

export type TitleViewType = keyof typeof TITLE_VIEW;
