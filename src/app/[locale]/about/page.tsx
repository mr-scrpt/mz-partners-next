import { AboutModule } from "@/widget/about";
import { HistoryModule } from "@/widget/history";
import { FC } from "react";

interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = async (props) => {
  return (
    <>
      <AboutModule />
      <HistoryModule />
    </>
  );
};

export default PageAbout;
