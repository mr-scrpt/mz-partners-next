import { RowSection, SECTION_SPACE, SECTION_WIDTH } from "@/shared/ui/section";
import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";
import sDeco from "./deco.module.scss";
import sFooterLayout from "./footer.layout.module.scss";

interface FooterLayoutProps extends HTMLAttributes<HTMLDivElement> {
  PrimarySlot: ReactNode;
  SecondarySlot: ReactNode;
  ThirdSlot: ReactNode;
}

export const FooterLayout: FC<FooterLayoutProps> = (props) => {
  const { PrimarySlot, SecondarySlot, ThirdSlot } = props;

  return (
    <RowSection
      classSection={clsx(sFooterLayout.root, sDeco.mainBG)}
      classInner={sDeco.mainBG}
      width={SECTION_WIDTH.CONTAINER}
      space={SECTION_SPACE.INDENTED}
    >
      <div className={clsx(sFooterLayout.inner, sDeco.innerBG)}>
        <div className={sFooterLayout.navigation}>{PrimarySlot}</div>
        <div className={sFooterLayout.info}>{SecondarySlot}</div>
        <div className={sFooterLayout.contact}>{ThirdSlot}</div>
      </div>
    </RowSection>
  );
};
