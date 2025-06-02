import { FooterSection } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sFooterLayout from "./footer.layout.module.scss";
import sDeco from "./deco.module.scss";
import clsx from "clsx";

interface FooterLayoutProps extends HTMLAttributes<HTMLDivElement> {
  PrimarySlot: ReactNode;
  SecondarySlot: ReactNode;
  ThirdSlot: ReactNode;
}

export const FooterLayout: FC<FooterLayoutProps> = (props) => {
  const { PrimarySlot, SecondarySlot, ThirdSlot } = props;

  return (
    <FooterSection
      topology="ROW_CONTAINER"
      className={clsx(sFooterLayout.root, sDeco.mainBG)}
      classNameRow={sDeco.rowBG}
    >
      <div className={sFooterLayout.inner}>
        <div className={sFooterLayout.navigation}>{PrimarySlot}</div>
        <div className={sFooterLayout.info}>{SecondarySlot}</div>
        <div className={sFooterLayout.contact}>{ThirdSlot}</div>
      </div>
    </FooterSection>
  );
};
