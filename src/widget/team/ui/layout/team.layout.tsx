import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sTeamLayout from "./team.layout.module.scss";
import clsx from "clsx";

interface TeamLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const TeamLayout: FC<TeamLayoutProps> = (props) => {
  const { HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      classSection={clsx(sTeamLayout.root)}
      headerSlot={HeaderSlot}
    >
      <div className={sTeamLayout.inner}>
        <div className={sTeamLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
