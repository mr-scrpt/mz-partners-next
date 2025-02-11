export const TITLE_VIEW = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

export type TitleViewType = keyof typeof TITLE_VIEW;
