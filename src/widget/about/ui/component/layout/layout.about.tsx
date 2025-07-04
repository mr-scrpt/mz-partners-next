import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";

import sLayoutAbout from "./layout.about.module.scss";
import clsx from "clsx";

interface LayoutAboutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const LayoutAbout: FC<LayoutAboutProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutAbout.root, className)}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sLayoutAbout.inner)}>
        <div className={sLayoutAbout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
