// "use client";
import { FC, HTMLAttributes } from "react";
import { LayoutHistory } from "./component/layout/layout.history";
import { HeaderHistory } from "./component/header/header.history";
import { ContentHistoryAnimatedCompose } from "./compose/contentHistoryAnimated.compose";

interface HistoryModuleProps extends HTMLAttributes<HTMLDivElement> {}

export const HistoryModule: FC<HistoryModuleProps> = (props) => {
  const { className } = props;
  return (
    <LayoutHistory
      HeaderSlot={<HeaderHistory />}
      ContentSlot={<ContentHistoryAnimatedCompose />}
      className={className}
    />
  );
};
