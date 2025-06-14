import { AboutModule } from "@/widget/about";
import { BenefitModule } from "@/widget/benefit";
import { HistoryModule } from "@/widget/history";
import { PiplineModule } from "@/widget/pipline";
import { PrincipleModule } from "@/widget/principle";
import { TeamModule } from "@/widget/team";
import { FC } from "react";

interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = async (props) => {
  return (
    <>
      <AboutModule />
      <BenefitModule />
      <HistoryModule />
      <TeamModule />
      <PiplineModule />
      <PrincipleModule />
    </>
  );
};

export default PageAbout;
