"use client";
import { FC, HTMLAttributes } from "react";

import { LangSwitcher } from "@/shared/ui/langSwitcher";

import sAction from "./action.module.scss";
import { CallbackOpenModalButton } from "@/feature/callback";
interface ActionProps extends HTMLAttributes<HTMLDivElement> { }

export const Action: FC<ActionProps> = (props) => {
  return (
    <div className={sAction.action}>
      <div className={sAction.inner}>
        <LangSwitcher />
        <CallbackOpenModalButton>
          <CallbackOpenModalButton.ButtonPrimary />
        </CallbackOpenModalButton>
      </div>
    </div>
  );
};
