import { FC } from "react";

import Image from "next/image";
import sBannerAbout from "./banner.about.module.scss";
import img from "./banner_about.png";
import { BannerAboutProps } from "./type";

export const BannerAbout: FC<BannerAboutProps> = (props) => {
  return (
    <div className={sBannerAbout.root}>
      <div className={sBannerAbout.inner}>
        <Image
          src={img}
          alt="deco"
          width={1440}
          height={513}
          sizes="100%"
          className={sBannerAbout.img}
        />
      </div>
    </div>
  );
};
