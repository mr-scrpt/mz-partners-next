import {
  RowSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sCallbackLayout from "./callback.layout.module.scss";
import clsx from "clsx";
import sDeco from "./deco.module.scss";

interface CallbackLayoutProps extends HTMLAttributes<HTMLDivElement> {
  HeaderSlot: ReactNode;
  ContentSlot: ReactNode;
  AttentionSlot: ReactNode;
}

export const CallbackLayout: FC<CallbackLayoutProps> = (props) => {
  const { className, HeaderSlot, ContentSlot, AttentionSlot } = props;

  return (
    <RowSection
      className={clsx(sCallbackLayout.root, className)}
      classNameRow={sDeco.mainBG}
      headerSlot={HeaderSlot}
      topology={SECTION_TOPOLOGY.ROW_CONTAINER}
      space={SECTION_SPACE.PRIMARY}
    >
      <div className={clsx(sCallbackLayout.inner)}>
        <div className={sCallbackLayout.content}>
          <div className={sCallbackLayout.attention}>{AttentionSlot}</div>
          <div className={sCallbackLayout.form}>{ContentSlot}</div>
        </div>
      </div>
    </RowSection>
  );
};
