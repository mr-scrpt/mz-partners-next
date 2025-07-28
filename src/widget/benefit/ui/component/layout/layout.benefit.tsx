import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sLayoutBenefit from "./layout.benefit.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface LayoutBenefitProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const LayoutBenefit: FC<LayoutBenefitProps> = (props) => {
  const { HeaderSlot, ContentSlot, className, ...rest } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutBenefit.root, className)}
      classInner={sDeco.mainBG}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
      {...rest}
    >
      <div className={clsx(sLayoutBenefit.inner)}>
        <div className={sLayoutBenefit.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
