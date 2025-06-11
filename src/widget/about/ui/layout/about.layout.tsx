import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import img from "../asset/banner_about.png";

import Image from "next/image";
import sAboutLayout from "./about.layout.module.scss";

import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface AboutLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const AboutLayout: FC<AboutLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      className={clsx(sAboutLayout.root, className)}
      // classNameRow={sDeco.mainBG}
      headerSlot={HeaderSlot}
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sAboutLayout.inner)}>
        <div className={sAboutLayout.content}>{ContentSlot}</div>
        <div className={clsx(sAboutLayout.deco, sDeco.deco)}>
          <Image
            src={img}
            alt="deco"
            width={1440}
            height={513}
            sizes="100%"
            className={sAboutLayout.img}
          />
        </div>
      </div>
    </RowSection>
  );
};
