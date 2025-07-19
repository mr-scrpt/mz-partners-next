import { FC, HTMLAttributes } from "react";
import { BannerHistoryAnimated } from "../component/banner";
import { TextHistoryAnimated } from "../component/text";
import { ContentHistory } from "../component/content/content.history";

interface ContentHistoryAnimatedComposeProps
  extends HTMLAttributes<HTMLDivElement> {}

export const ContentHistoryAnimatedCompose: FC<
  ContentHistoryAnimatedComposeProps
> = (props) => {
  return (
    <ContentHistory
      TextComponent={TextHistoryAnimated}
      BannerComponent={BannerHistoryAnimated}
      {...props}
    />
  );
};
