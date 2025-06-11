import { FC, HTMLAttributes } from "react";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {}
import sBanner from "./banner.module.scss";
import Image from "next/image";
import img from "./banner_about.png";

export const Banner: FC<BannerProps> = (props) => {
  return (
    <div className={sBanner.root}>
      <div className={sBanner.inner}>
        <Image
          src={img}
          alt="deco"
          width={1440}
          height={513}
          sizes="100%"
          className={sBanner.img}
        />
      </div>
    </div>
  );
};
