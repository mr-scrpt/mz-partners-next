"use client";

import {
  crateAnimationContainerItem,
  createPageLayoutAnimationContainer,
  createScrollAnimatedScaleOpacityContainer,
  createScrollAnimatedShiftOpacityContainer,
} from "@/shared/lib/animations/vm/alter/fabric/preset";
import { PageLayout } from "@/shared/ui/layout/ui/page.layout";
import { BenefitModule } from "@/widget/benefit";
import { CompetencyModule } from "@/widget/competency";
import { PrincipleModule } from "@/widget/principle";
import { ProjectModule } from "@/widget/project";

export const PageLayoutWithHOC =
  createScrollAnimatedShiftOpacityContainer(PageLayout);

export const SectionCompetency = crateAnimationContainerItem(CompetencyModule);
export const SectionPrinciple = crateAnimationContainerItem(PrincipleModule);
export const SectionProject = crateAnimationContainerItem(ProjectModule);
export const SectionBenefit = crateAnimationContainerItem(BenefitModule);
