import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sCompetencyLayout from "./competency.layout.module.scss";
import clsx from "clsx";

interface CompetencyLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const CompetencyLayout: FC<CompetencyLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      className={clsx(sCompetencyLayout.root, className)}
      headerSlot={HeaderSlot}
    >
      <div className={sCompetencyLayout.inner}>
        <div className={sCompetencyLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
