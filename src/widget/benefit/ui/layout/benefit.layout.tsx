import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sBenefitLayout from "./benefit.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface BenefitLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const BenefitLayout: FC<BenefitLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      className={clsx(sBenefitLayout.root, className)}
      classNameRow={sDeco.mainBG}
      headerSlot={HeaderSlot}
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sBenefitLayout.inner)}>
        <div className={sBenefitLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
