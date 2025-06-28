import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sProjectLayout from "./project.layout.module.scss";
import clsx from "clsx";

interface ProjectLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const ProjectLayout: FC<ProjectLayoutProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sProjectLayout.root, className)}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sProjectLayout.inner)}>
        <div className={sProjectLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
