import { RowSection } from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sPrincipleLayout from "./principle.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface PrincipleLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
}

export const PrincipleLayout: FC<PrincipleLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot } = props;

  return (
    <RowSection
      topology="ROW_CONTAINER"
      className={clsx(sPrincipleLayout.root, className)}
      classNameRow={sDeco.mainBG}
      headerSlot={HeaderSlot}
    >
      <div className={clsx(sPrincipleLayout.inner)}>
        <div className={sPrincipleLayout.content}>{ContentSlot}</div>
      </div>
    </RowSection>
  );
};
