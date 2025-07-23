import { createStrictContext, useStrictContext } from "@/shared/lib/react";
import { StaggerGroupContextValue } from "../../domain/type";

export const StaggerGroupContext =
  createStrictContext<StaggerGroupContextValue>();

export const StaggerGroupProvider = StaggerGroupContext.Provider;
export const useStaggerGroup = () => useStrictContext(StaggerGroupContext);
