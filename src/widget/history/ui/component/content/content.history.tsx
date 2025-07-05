import { ComponentType, FC, HTMLAttributes } from "react";

import sContentHistory from "./content.history.module.scss";
import sLayoutHistory from "../layout/layout.history.module.scss";
import sDeco from "./deco.module.scss";
import clsx from "clsx";
import { TextHistoryProps } from "../text/type";
import { BannerHistoryProps } from "../banner/type";

interface ContentHistoryProps extends HTMLAttributes<HTMLDivElement> {
  TextComponent: ComponentType<TextHistoryProps>;
  BannerComponent: ComponentType<BannerHistoryProps>;
}

export const ContentHistory: FC<ContentHistoryProps> = (props) => {
  const { TextComponent, BannerComponent } = props;
  return (
    <div className={sContentHistory.root}>
      <div className={sContentHistory.inner}>
        <TextComponent
          className={clsx(
            sDeco.textBG,
            sContentHistory.text,
            sLayoutHistory.colStart,
          )}
        />
        <BannerComponent className={sContentHistory.banner} />
      </div>
    </div>
  );
};
