import { FC } from "react";

import sBannerHistorey from "./banner.history.module.scss";
import Image from "next/image";
import img from "./banner_history.png";
import clsx from "clsx";
import { BannerHistoryProps } from "./type";

export const BannerHistory: FC<BannerHistoryProps> = (props) => {
  const { className } = props;
  return (
    <div className={clsx(sBannerHistorey.root, className)}>
      <div className={sBannerHistorey.inner}>
        <Image
          src={img}
          alt="deco"
          width={1440}
          height={513}
          sizes="100%"
          className={sBannerHistorey.img}
        />
      </div>
    </div>
  );
};
