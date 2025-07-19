import { FC, HTMLAttributes } from "react";
import { BannerAboutAnimated } from "../component/banner";
import { TextAboutAnimated } from "../component/text";
import { ContentAbout } from "../component/content/content.about";

interface ContentAboutAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ContentAboutAnimatedCompose: FC<
  ContentAboutAnimatedComposeProps
> = (props) => {
  return (
    <ContentAbout
      TextComponent={TextAboutAnimated}
      BannerComponent={BannerAboutAnimated}
      {...props}
    />
  );
};
