"use client";

import { scrollShiftOpacityPrimaryConfig } from "@/shared/lib/animations/preset/config";
import { animationScrollShiftOpacityStrategy } from "@/shared/lib/animations/strategy/strategy.scroll";
import {
  createAnimatedContainer,
  withAnimatedItem,
} from "@/shared/lib/animations/vm/alter";
import { PageLayoutAnimatedPrimary } from "@/shared/lib/animations/vm/alter/strategy";
import {
  WithChildernLayout,
  WithChilderenItem,
} from "@/shared/lib/animations/vm/section/hocV2";
import { PageLayout } from "@/shared/ui/layout/ui/page.layout";
import { CompetencyModule } from "@/widget/competency";

export const PageLayoutWithHOC = PageLayoutAnimatedPrimary(PageLayout);

export const SectionCompetency = withAnimatedItem(CompetencyModule);
