"use client";

import { scrollShiftAnimation } from "@/shared/lib/animations/vm/alter/animation/scroll.animation";
import {
  createAnimatedContainer,
  withAnimatedItem,
} from "@/shared/lib/animations/vm/alter/fabric/builder";
import { useZoneScrollTrigger } from "@/shared/lib/animations/vm/alter/trigger/scrollProgress.trigger";
import { PageLayout } from "@/shared/ui/layout/ui/page.layout";
import { CompetencyModule } from "@/widget/competency";
import { PrincipleModule } from "@/widget/principle";
import { ProjectModule } from "@/widget/project";

// export const PageLayoutWithHOC = PageLayoutAnimatedPrimary(PageLayout);

export const SectionCompetency = withAnimatedItem(CompetencyModule);
export const SectionPrinciple = withAnimatedItem(PrincipleModule);
export const SectionProject = withAnimatedItem(ProjectModule);

export const PageLayoutWithHOC = createAnimatedContainer({
  triggerStrategy: useZoneScrollTrigger,
  animationStrategy: scrollShiftAnimation,

  // ✅ В triggerConfig передаем параметры для calculateScrollUpdate и useSpring
  triggerConfig: {
    startPixels: 20,
    endPixels: 250,
    springConfig: { stiffness: 80, damping: 25 },
  },

  // ✅ В animationConfig передаем параметры для useTransform
  animationConfig: {
    effects: {
      opacity: [0, 1],
      yEnter: [50, 0],
      yExit: [-50, 0],
    },
  },
})(PageLayout);
