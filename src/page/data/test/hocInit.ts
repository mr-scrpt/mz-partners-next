"use client";

import {
  withChildernLayout,
  withCustomProps,
} from "@/shared/lib/animations/vm/section/hocV2";
import { PageLayout } from "@/shared/ui/layout/ui/page.layout";
import { CompetencyModule } from "@/widget/competency";

export const PageLayoutWithHOC = withChildernLayout(PageLayout);

export const SectionCompetency = withCustomProps(CompetencyModule);
