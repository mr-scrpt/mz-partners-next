export const ICON_LIST = {
  HAMBURGER: "hamburger",
  INSTA: "insta",
  FB: "fb",
  EMAIL: "email",
  // TG: "tg",
  // ARROW_TILE: "arrow_tile",
  // CALENDAR: "calendar",
  // FILE_PLUS: "file_plus",
  // CLOCK: "clock",
  // LOCATION: "location",
  // PROFILE: "profile",
  // INSTA: "insta",
  // LINKEDIN: "linkedin",
  // TG: "tg",
} as const;

export type IconListType = keyof typeof ICON_LIST;
