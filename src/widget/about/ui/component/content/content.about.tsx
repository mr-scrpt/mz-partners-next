import { ComponentType, FC, HTMLAttributes } from "react";

import { BannerAboutProps } from "../banner/type";
import { TextAboutProps } from "../text/type";
import sContentAbout from "./content.about.module.scss";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  TextComponent: ComponentType<TextAboutProps>;
  BannerComponent: ComponentType<BannerAboutProps>;
}

export const ContentAbout: FC<ContentProps> = (props) => {
  const { TextComponent, BannerComponent } = props;
  return (
    <div className={sContentAbout.root}>
      <div className={sContentAbout.inner}>
        <TextComponent />
        <BannerComponent />
      </div>
    </div>
  );
};
