import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import sLayoutCompetency from "./layout.competency.module.scss";

interface LayoutCompetencyProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const LayoutCompetency: FC<LayoutCompetencyProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutCompetency.root, className)}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      headerSlot={HeaderSlot}
    >
      <div className={sLayoutCompetency.inner}>
        <div className={sLayoutCompetency.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
