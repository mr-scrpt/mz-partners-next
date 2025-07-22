import { FC, HTMLAttributes } from "react";
import { BannerHistoryAnimated } from "../component/banner";
import { TextHistoryAnimated } from "../component/text";
import { ContentHistory } from "../component/content/content.history";
import { ContentHistoryAnimated } from "../component/content";

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
