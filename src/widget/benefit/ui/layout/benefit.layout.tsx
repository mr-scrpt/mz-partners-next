import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sBenefitLayout from "./benefit.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface BenefitLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const BenefitLayout: FC<BenefitLayoutProps> = (props) => {
  const { HeaderSlot, ContentSlot, className } = props;

  return (
    <RowSection
      classSection={clsx(sBenefitLayout.root, className)}
      classInner={sDeco.mainBG}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sBenefitLayout.inner)}>
        <div className={sBenefitLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
