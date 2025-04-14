// export const SECTION_TOPOLOGY = {
//   ROW_CONTAINER: "row",
//   ROW_FLAT: "rowFlat",
//   ROW_FULL: "rowFull",
// } as const;
//

import { createNamespace } from "@/shared/lib/style/styleProcessor";

// export type SectionTopology = keyof typeof SECTION_TOPOLOGY;
export const SECTION_TOPOLOGY_VARIANTS = [
  "ROW_CONTAINER",
  "ROW_FLAT",
  "ROW_FULL",
] as const;

export type SectionTopology = (typeof SECTION_TOPOLOGY_VARIANTS)[number];

export const SECTION_TOPOLOGY = createNamespace(SECTION_TOPOLOGY_VARIANTS);
