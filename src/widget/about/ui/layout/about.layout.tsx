import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";

import sAboutLayout from "./about.layout.module.scss";

import clsx from "clsx";

interface AboutLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const AboutLayout: FC<AboutLayoutProps> = (props) => {
  const { HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      classSection={clsx(sAboutLayout.root)}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sAboutLayout.inner)}>
        <div className={sAboutLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
