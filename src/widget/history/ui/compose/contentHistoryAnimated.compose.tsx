import { FC, HTMLAttributes } from "react";
import { BannerHistoryAnimated } from "../component/banner";
import { ContentHistoryAnimated } from "../component/content";
import { TextHistoryAnimated } from "../component/text";

interface ContentHistoryAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ContentHistoryAnimatedCompose: FC<
  ContentHistoryAnimatedComposeProps
> = (props) => {
  return (
    <ContentHistoryAnimated
      TextComponent={TextHistoryAnimated}
      BannerComponent={BannerHistoryAnimated}
      {...props}
    />
  );
};
