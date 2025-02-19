import { TITLE_SECTION_TO_CLASS } from "./titleSection.map";
import { useStyleProcessor } from "@/shared/lib/style/styleProcessor";

export const useTitleSectionStyle = () =>
  useStyleProcessor(TITLE_SECTION_TO_CLASS);
