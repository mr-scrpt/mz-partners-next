"use client";
import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { CallbackModule } from "@/widget/callback";
import { ContactModule } from "@/widget/contact";

import sPage from "../../ui/page.module.scss";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";
import { ElementConfig } from "@/shared/lib/animations";

const contactPageElements: ElementConfig[] = [
  { component: BreadcrumbsModule, options: { skipAnimation: true } },
  { component: ContactModule },
  { component: CallbackModule, props: { className: sPage.root__offset } },
];
export const PageContactAnimated = () => {
  return (
    <PageLayoutAnimatedToChildren
      elements={contactPageElements}
      className={sPage.root}
      as="main"
      itemAs="section"
      itemClassName={sPage.section}
    />
  );
};
