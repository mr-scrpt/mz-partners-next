import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sTeamLayout from "./team.layout.module.scss";
import clsx from "clsx";

interface TeamLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const TeamLayout: FC<TeamLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      className={clsx(sTeamLayout.root, className)}
      headerSlot={HeaderSlot}
    >
      <div className={sTeamLayout.inner}>
        <div className={sTeamLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
