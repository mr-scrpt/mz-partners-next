import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sProjectLayout from "./project.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface ProjectLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const ProjectLayout: FC<ProjectLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      className={clsx(sProjectLayout.root, className)}
      classNameRow={sDeco.mainBG}
      headerSlot={HeaderSlot}
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sProjectLayout.inner)}>
        <div className={sProjectLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
