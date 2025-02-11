import { BoxSection } from "@/shared/ui/section";
import { FC, HTMLAttributes } from "react";
import sDeco from "./deco.module.scss";
import sHeroLayout from "./hero.layout.module.scss";
import clsx from "clsx";

interface HeroLayoutProps extends HTMLAttributes<HTMLDivElement> {
  InfoSlot: React.ReactNode;
  ActionSlot: React.ReactNode;
}

export const HeroLayout: FC<HeroLayoutProps> = (props) => {
  const { InfoSlot, ActionSlot } = props;

  return (
    <BoxSection
      topology="ROW_CONTAINER"
      {...props}
      withRowContainer={false}
      className={sDeco.mainBG}
    >
      <div className={sHeroLayout.inner}>
        <div className={clsx(sHeroLayout.infoBox, sDeco.infoBG)}>
          <div className={sHeroLayout.info}>{InfoSlot}</div>
          <div className={sHeroLayout.action}>{ActionSlot}</div>
        </div>
      </div>
    </BoxSection>
  );
};
