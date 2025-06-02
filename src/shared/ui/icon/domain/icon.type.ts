export const ICON_LIST = {
  HAMBURGER: "hamburger",
  INSTA: "insta",
  FB: "fb",
  EMAIL: "email",
  BENEFIT: "benefit",
} as const;

export type IconListType = keyof typeof ICON_LIST;
