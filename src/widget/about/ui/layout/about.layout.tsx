import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";

import sAboutLayout from "./about.layout.module.scss";

import clsx from "clsx";

interface AboutLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const AboutLayout: FC<AboutLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      className={clsx(sAboutLayout.root, className)}
      headerSlot={HeaderSlot}
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sAboutLayout.inner)}>
        <div className={sAboutLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
