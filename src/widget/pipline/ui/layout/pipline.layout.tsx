import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sPiplineLayout from "./pipline.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface PiplineLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const PiplineLayout: FC<PiplineLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      className={clsx(sPiplineLayout.root, className)}
      classNameRow={sDeco.mainBG}
      headerSlot={HeaderSlot}
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sPiplineLayout.inner)}>
        <div className={sPiplineLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
