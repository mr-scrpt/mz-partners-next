"use client";
import { CallbackOpenModalButton } from "@/feature/callback";
import { FC, HTMLAttributes } from "react";
import sHeroFooter from "./hero.footer.module.scss";
import { SocialListFooter } from "../social/socialList.footer";
import { LogoLink } from "@/shared/ui/logo/ui/logoLink";
import { useLocale } from "next-intl";

interface HeroFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const HeroFooter: FC<HeroFooterProps> = (props) => {
  const locale = useLocale();
  return (
    <div className={sHeroFooter.root}>
      <div className={sHeroFooter.inner}>
        <div className={sHeroFooter.logo}>
          <LogoLink href={`/${locale}`} view="LIGHT" />
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
