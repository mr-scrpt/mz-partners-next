export const SECTION_TOPOLOGY = {
  ROW_CONTAINER: "row",
  ROW_FLAT: "rowFlat",
  ROW_FULL: "rowFull",
} as const;

export type SectionTopology = keyof typeof SECTION_TOPOLOGY;
