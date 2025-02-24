import { useStyleProcessor } from "@/shared/lib/style/styleProcessor";
import { TITLE_TO_CLASS } from "./title.map";

export const useTitleStyle = () => useStyleProcessor(TITLE_TO_CLASS);
