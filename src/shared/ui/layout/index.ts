"use client";
import { createAnimationContainerScrollToChildrenFade } from "@/shared/lib/animations";
import { PageLayout } from "./ui/page.layout";

export { default } from "./ui/html.layout";

export const PageLayoutAnimatedToChildren =
  createAnimationContainerScrollToChildrenFade(PageLayout);
