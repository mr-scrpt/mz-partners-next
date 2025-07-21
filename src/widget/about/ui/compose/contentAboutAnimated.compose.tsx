import { FC, HTMLAttributes } from "react";
import { BannerAboutAnimated } from "../component/banner";
import { TextAboutAnimated } from "../component/text";
import { ContentAboutAnimated } from "../component/content";

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
