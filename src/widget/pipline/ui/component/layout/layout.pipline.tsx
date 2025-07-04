import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sLayoutPipline from "./layout.pipline.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface LayoutPiplineProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const LayoutPipline: FC<LayoutPiplineProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutPipline.root, className)}
      classInner={sDeco.mainBG}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sLayoutPipline.inner)}>
        <div className={sLayoutPipline.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
