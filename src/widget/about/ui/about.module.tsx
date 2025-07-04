import { FC, HTMLAttributes } from "react";
import { HeaderAbout } from "./component/header/header.about";
import { LayoutAbout } from "./component/layout/layout.about";
import { ContentAboutAnimatedCompose } from "./compose/contentAboutAnimated.compose";

interface AboutModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutModule: FC<AboutModuleProps> = (props) => {
  const { className } = props;
  return (
    <LayoutAbout
      HeaderSlot={<HeaderAbout />}
      ContentSlot={<ContentAboutAnimatedCompose />}
      className={className}
    />
  );
};
