"use client";
import { CallbackOpenModalButton } from "@/feature/callback";
import { Logo } from "@/shared/ui/logo";
import { SocialList } from "@/shared/ui/socialList";
import { FC, HTMLAttributes } from "react";
import sHeroFooter from "./hero.footer.module.scss";
import { SocialListFooter } from "../social/socialList.footer";

interface HeroFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroFooter: FC<HeroFooterProps> = (props) => {
  return (
    <div className={sHeroFooter.root}>
      <div className={sHeroFooter.inner}>
        <div className={sHeroFooter.logo}>
          <Logo view="LIGHT" />
        </div>
        <div className={sHeroFooter.callback}>
          <CallbackOpenModalButton>
            <CallbackOpenModalButton.ButtonGhosty />
          </CallbackOpenModalButton>
        </div>
        <div className={sHeroFooter.social}>
          <SocialListFooter />
        </div>
      </div>
    </div>
  );
};
