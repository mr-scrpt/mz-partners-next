"use client";
// import { createAnimationItemSlideLeft } from "@/shared/lib/animations";
import { TextHistory } from "./text.history";
import { createContainerGroupItem } from "@/shared/lib/animations/factory/group.factory";

export const TextHistoryAnimated = createContainerGroupItem(TextHistory);
