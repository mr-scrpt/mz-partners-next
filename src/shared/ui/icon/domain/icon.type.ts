export const ICON_LIST = {
  HAMBURGER: "hamburger",
  INSTA: "insta",
  FB: "fb",
  EMAIL: "email",
  BENEFIT: "benefit",
  LECKSIS: "lecksis",
  UNKNOWN: "unknown",
} as const;

export type IconListType = keyof typeof ICON_LIST;

export const SOCIAL_ICON_MAP: Record<string, IconListType> = {
  INSTA: "INSTA",
  FB: "FB",
  EMAIL: "EMAIL",
};
