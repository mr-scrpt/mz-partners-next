import { FC, HTMLAttributes } from "react";
import { Content } from "./content/content";
import { AboutHeader } from "./header/about.header";
import { AboutLayout } from "./layout/about.layout";

interface AboutModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutModule: FC<AboutModuleProps> = (props) => {
  const { className } = props;
  return (
    <AboutLayout
      HeaderSlot={<AboutHeader />}
      ContentSlot={<Content />}
      className={className}
    />
  );
};
