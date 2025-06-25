import { createNamespace } from "@/shared/lib/style/styleProcessor";

// export type SectionTopology = keyof typeof SECTION_TOPOLOGY;
export const SECTION_WIDTH_VARIANTS = [
  "CONTAINER",
  "CONTAINER_INDENTED",
  "OFFSET",
] as const;

export type SectionWidth = (typeof SECTION_WIDTH_VARIANTS)[number];

export const SECTION_WIDTH = createNamespace(SECTION_WIDTH_VARIANTS);
