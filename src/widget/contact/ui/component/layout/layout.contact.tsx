import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sLayoutContact from "./layout.contact.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface LayoutContactProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  PrimarySlot: ReactNode;
  SecondarySlot: ReactNode;
  TertiarySlot: ReactNode;
  FourthSlot: ReactNode;
}

export const LayoutContact: FC<LayoutContactProps> = (props) => {
  const {
    HeaderSlot,
    PrimarySlot,
    SecondarySlot,
    TertiarySlot,
    FourthSlot,
    className,
  } = props;

  return (
    <RowSection
      classSection={clsx(sLayoutContact.root, className)}
      classInner={sDeco.mainBG}
      headerSlot={HeaderSlot}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sLayoutContact.inner)}>
        <div className={sLayoutContact.info}>{PrimarySlot}</div>
        <div className={sLayoutContact.promo}>{SecondarySlot}</div>
        <div className={sLayoutContact.mediaBox}>
          <div className={sLayoutContact.map}>{TertiarySlot}</div>
          <div className={sLayoutContact.video}>{FourthSlot}</div>
        </div>
      </div>
    </RowSection>
  );
};
