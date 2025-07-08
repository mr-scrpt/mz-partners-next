import { FC, HTMLAttributes } from "react";
import { ContentAboutAnimated } from "../component/content";
import { BannerAboutAnimated } from "../component/banner";
import { TextAboutAnimated } from "../component/text";

interface ContentAboutAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ContentAboutAnimatedCompose: FC<
  ContentAboutAnimatedComposeProps
> = (props) => {
  return (
    <ContentAboutAnimated
      TextComponent={TextAboutAnimated}
      BannerComponent={BannerAboutAnimated}
      {...props}
    />
  );
};
