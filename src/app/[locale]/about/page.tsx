import { AboutModule } from "@/widget/about";
import { FC } from "react";

interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = async (props) => {
  return (
    <>
      <AboutModule />
    </>
  );
};

export default PageAbout;
