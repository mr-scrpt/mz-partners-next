"use client";

import { createStrictContext, useStrictContext } from "@/shared/lib/react";
import { StaggerListContextValue } from "../../domain/type";

const StaggerListContext = createStrictContext<StaggerListContextValue>();

export const StaggerListProvider = StaggerListContext.Provider;

export const useStaggerList = () => useStrictContext(StaggerListContext);
