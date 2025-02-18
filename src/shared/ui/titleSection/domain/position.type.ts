export const TITLE_SECTION_POSITION = {
  LEFT: "left",
  CENTER: "center",
  RIGHT: "right",
} as const;

export type TitleSectionPositionType = keyof typeof TITLE_SECTION_POSITION;
