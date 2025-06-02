"use client";
import { CallbackOpenModalButton } from "@/feature/callback";
import { Logo } from "@/shared/ui/logo";
import { SocialList } from "@/shared/ui/socialList";
import { FC, HTMLAttributes } from "react";
import sPrimary from "./primary.footer.module.scss";

interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {}

export const Primary: FC<PrimaryProps> = (props) => {
  return (
    <div className={sPrimary.root}>
      <div className={sPrimary.inner}>
        <div className={sPrimary.logo}>
          <Logo view="LIGHT" />
        </div>
        <div className={sPrimary.callback}>
          <CallbackOpenModalButton>
            <CallbackOpenModalButton.ButtonGhosty />
          </CallbackOpenModalButton>
        </div>
        <div className={sPrimary.social}>
          <SocialList />
        </div>
      </div>
    </div>
  );
};
