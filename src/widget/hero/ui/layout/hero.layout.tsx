import {
  BoxSection,
  SECTION_SPACE,
  SECTION_TOPOLOGY,
} from "@/shared/ui/section";
import { FC, HTMLAttributes, ReactNode } from "react";
import sDeco from "./deco.module.scss";
import sHeroLayout from "./hero.layout.module.scss";
import clsx from "clsx";

interface HeroLayoutProps extends HTMLAttributes<HTMLDivElement> {
  InfoSlot: ReactNode;
  ActionSlot: ReactNode;
}

export const HeroLayout: FC<HeroLayoutProps> = (props) => {
  const { InfoSlot, ActionSlot, className } = props;

  return (
    <BoxSection
      className={clsx(sHeroLayout.root, className)}
      topology={SECTION_TOPOLOGY.ROW_FULL}
      space={SECTION_SPACE.FLAT}
      withRowContainer={false}
    >
      <div className={clsx(sHeroLayout.inner, sDeco.mainBG)}>
        <div className={clsx(sHeroLayout.infoBox, sDeco.infoBG)}>
          <div className={sHeroLayout.info}>{InfoSlot}</div>
          <div className={sHeroLayout.action}>{ActionSlot}</div>
        </div>
      </div>
    </BoxSection>
  );
};
