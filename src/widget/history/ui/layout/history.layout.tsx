import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";

import sHistoryLayout from "./history.layout.module.scss";
import sDeco from "./deco.module.scss";
import clsx from "clsx";

interface HistoryLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const HistoryLayout: FC<HistoryLayoutProps> = (props) => {
  const { HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      classSection={clsx(sHistoryLayout.root)}
      classInner={sDeco.mainBG}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sHistoryLayout.inner)}>
        {/* <div>inner yellow</div> */}
        <div className={sHistoryLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
