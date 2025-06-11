import { FC, HTMLAttributes } from "react";
import { AboutHeader } from "./header/about.header";
import { AboutLayout } from "./layout/about.layout";
import { Text } from "./text/text";
import { Content } from "./content/content";

interface AboutModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutModule: FC<AboutModuleProps> = (props) => {
  return <AboutLayout HeaderSlot={<AboutHeader />} ContentSlot={<Content />} />;
};
