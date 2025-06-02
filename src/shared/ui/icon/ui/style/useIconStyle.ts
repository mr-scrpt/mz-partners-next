import { useStyleProcessor } from "@/shared/lib/style/styleProcessor";
import { ICON_TO_CLASS } from "./icon.map";

export const useIconStyle = () => useStyleProcessor(ICON_TO_CLASS);
