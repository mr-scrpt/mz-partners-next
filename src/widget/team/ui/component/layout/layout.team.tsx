import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sLayoutTeam from "./layout.team.module.scss";
import clsx from "clsx";

interface LayoutTeamProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const LayoutTeam: FC<LayoutTeamProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutTeam.root, className)}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      headerSlot={HeaderSlot}
    >
      <div className={sLayoutTeam.inner}>
        <div className={sLayoutTeam.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
