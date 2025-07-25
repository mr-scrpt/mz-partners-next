"use client";

import {
  WithChildernLayout,
  WithChilderenItem,
} from "@/shared/lib/animations/vm/section/hocV2";
import { PageLayout } from "@/shared/ui/layout/ui/page.layout";
import { CompetencyModule } from "@/widget/competency";

export const PageLayoutWithHOC = WithChildernLayout(PageLayout);

export const SectionCompetency = WithChilderenItem(CompetencyModule);
