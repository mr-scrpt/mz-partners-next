import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";

import sHistoryLayout from "./history.layout.module.scss";
import sDeco from "./deco.module.scss";
import clsx from "clsx";

interface HistoryLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const HistoryLayout: FC<HistoryLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      className={clsx(sHistoryLayout.root, className)}
      classNameRow={sDeco.mainBG}
      headerSlot={HeaderSlot}
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sHistoryLayout.inner)}>
        <div className={sHistoryLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
