"use client";
import {
  createContainerGroupFadeImmediate,
  createContainerGroupFadeMovementImmediate,
  createContainerGroupSlideAlternating,
} from "@/shared/lib/animations/factory/group.factory";
import { ContentAbout } from "./content.about";

export const ContentAboutAnimated =
  createContainerGroupFadeImmediate(ContentAbout);
