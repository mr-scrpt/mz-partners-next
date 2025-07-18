"use client";
import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { CallbackModule } from "@/widget/callback";
import { ContactModule } from "@/widget/contact";

import sPage from "../../ui/page.module.scss";
import { ElementConfig } from "@/shared/lib/animations";
import { PageLayoutAnimatedPrimaryToChildren } from "@/shared/ui/layout";

const contactPageElements: ElementConfig[] = [
  { component: BreadcrumbsModule, options: { skipAnimation: true } },
  { component: ContactModule },
  { component: CallbackModule, props: { className: sPage.root__offset } },
];
export const PageContactAnimated = () => {
  return (
    <PageLayoutAnimatedPrimaryToChildren
      elements={contactPageElements}
      className={sPage.root}
      as="main"
      itemAs="section"
      itemClassName={sPage.section}
    />
  );
};
