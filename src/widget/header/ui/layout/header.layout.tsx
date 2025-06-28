import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sHeaderLayout from "./header.layout.module.scss";
import clsx from "clsx";

interface HeaderLayoutProps extends HTMLAttributes<HTMLDivElement> {
  VisualSlot: ReactNode;
  InfoSlot: ReactNode;
  ActionSlot: ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
  const { VisualSlot, InfoSlot, ActionSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sHeaderLayout.root, className)}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.INDENTED}
    >
      <div className={sHeaderLayout.inner}>
        <div className={sHeaderLayout.visual}>{VisualSlot}</div>
        <div className={sHeaderLayout.info}>{InfoSlot}</div>
        <div className={sHeaderLayout.action}>{ActionSlot}</div>
      </div>
    </RowSection>
  );
};
