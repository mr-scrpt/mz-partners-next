import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";

import sLayoutHistory from "./layout.history.module.scss";
import sDeco from "./deco.module.scss";
import clsx from "clsx";

interface LayoutHistoryProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const LayoutHistory: FC<LayoutHistoryProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutHistory.root, className)}
      classInner={sDeco.mainBG}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sLayoutHistory.inner)}>
        <div className={sLayoutHistory.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
