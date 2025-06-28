import { AboutModule } from "@/widget/about";
import { BenefitModule } from "@/widget/benefit";
import { HistoryModule } from "@/widget/history";
import { PiplineModule } from "@/widget/pipline";
import { PrincipleModule } from "@/widget/principle";
import { TeamModule } from "@/widget/team";
import { FC } from "react";

import { BreadcrumbsModule } from "@/widget/breadcrumbs";
import sPage from "../page.module.scss";
interface PageAboutProps {}

export const PageAbout: FC<PageAboutProps> = async (props) => {
  return (
    <div className={sPage.root}>
      <BreadcrumbsModule />
      <AboutModule className={sPage.root__fall} />
      <HistoryModule />
      <BenefitModule />
      <TeamModule />
      <PiplineModule />
      <PrincipleModule className={sPage.root__offset} />
    </div>
  );
};

// export default PageAbout;
