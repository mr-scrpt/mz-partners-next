"use client";
import { PageLayout } from "./ui/page.layout";
import {
  createScrollAnimatedScaleOpacityContainer,
  createScrollAnimatedShiftOpacityContainer,
} from "@/shared/lib/animations";

export { default } from "./ui/html.layout";

export const PageLayoutAnimatedPrimaryToChildren =
  createScrollAnimatedShiftOpacityContainer(PageLayout);

export const PageLayoutAnimatedSecondaryToChildren =
  createScrollAnimatedScaleOpacityContainer(PageLayout);
