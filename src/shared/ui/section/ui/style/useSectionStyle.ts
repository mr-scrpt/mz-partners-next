import { useStyleProcessor } from "@/shared/lib/style/styleProcessor";
import { SECTION_TO_CLASS } from "./section.map";

export const useSectionStyle = () => useStyleProcessor(SECTION_TO_CLASS);
