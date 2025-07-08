import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import { CallbackModule } from "@/widget/callback";
import { ContactModule } from "@/widget/contact";
import { FC } from "react";

interface PageContactProps {}
import sPage from "../../ui/page.module.scss";
import { PageLayoutAnimatedToChildren } from "@/shared/ui/layout";

export const PageContact: FC<PageContactProps> = async (props) => {
  return (
    <div className={sPage.root}>
      <BreadcrumbsModule />
      <ContactModule />
      <CallbackModule className={sPage.root__offset} />
    </div>
  );
};

export const PageContactAnimated = async () => {
  return (
    <PageLayoutAnimatedToChildren className={sPage.root}>
      <BreadcrumbsModule />
      <ContactModule />
      <CallbackModule className={sPage.root__offset} />
    </PageLayoutAnimatedToChildren>
  );
};
