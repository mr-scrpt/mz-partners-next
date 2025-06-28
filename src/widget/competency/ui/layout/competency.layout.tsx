import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sCompetencyLayout from "./competency.layout.module.scss";
import clsx from "clsx";

interface CompetencyLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const CompetencyLayout: FC<CompetencyLayoutProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sCompetencyLayout.root, className)}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      headerSlot={HeaderSlot}
    >
      <div className={sCompetencyLayout.inner}>
        <div className={sCompetencyLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
