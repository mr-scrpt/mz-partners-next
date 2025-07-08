import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sLayoutPrinciple from "./layout.principle.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface LayoutPrincipleProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const LayoutPrinciple: FC<LayoutPrincipleProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutPrinciple.root, className)}
      classInner={sDeco.mainBG}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      headerSlot={HeaderSlot}
    >
      <div className={clsx(sLayoutPrinciple.inner)}>
        <div className={sLayoutPrinciple.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
