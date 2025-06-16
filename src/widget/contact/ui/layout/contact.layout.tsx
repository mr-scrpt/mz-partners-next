import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sContactLayout from "./contact.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface ContactLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  PrimarySlot: ReactNode;
  SecondarySlot: ReactNode;
}

export const ContactLayout: FC<ContactLayoutProps> = (props) => {
  const { className, HeaderSlot, PrimarySlot, SecondarySlot } = props;

  return (
    <RowSection
      className={clsx(sContactLayout.root, className)}
      classNameRow={sDeco.mainBG}
      headerSlot={HeaderSlot}
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sContactLayout.inner)}>
        <div className={sContactLayout.content}>{PrimarySlot}</div>
      </div>
    </RowSection>
  );
};
