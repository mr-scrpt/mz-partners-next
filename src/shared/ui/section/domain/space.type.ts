import { createNamespace } from "@/shared/lib/style/styleProcessor";

export const SECTION_SPACE_VARIANTS = ["PRIMARY", "FLAT"] as const;

export type SectionSpace = (typeof SECTION_SPACE_VARIANTS)[number];

export const SECTION_SPACE = createNamespace(SECTION_SPACE_VARIANTS);
