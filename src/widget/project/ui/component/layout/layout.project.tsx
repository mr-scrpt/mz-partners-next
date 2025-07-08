import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sLayoutProject from "./layout.project.module.scss";
import clsx from "clsx";

interface LayoutProjectProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const LayoutProject: FC<LayoutProjectProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutProject.root, className)}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sLayoutProject.inner)}>
        <div className={sLayoutProject.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
