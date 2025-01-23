export const LOGO_VIEW = {
  PRIMARY: "#012E67",
  LIGHT: "#FFF",
  DARK: "#000",
} as const;

export type LogoView = keyof typeof LOGO_VIEW;
